import React, { useState,useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../../src/screens/HomeScreen";
import { View,Image, Text,TouchableOpacity,Dimensions } from "react-native";
import CategoryFilterScreen from "../screens/CategoryFilterScreen";
// import styles from '../components/HeaderMain/styles';
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation,getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { Foundation } from '@expo/vector-icons';
import CartScreen from "../screens/CartScreen"
import { connect } from 'react-redux'; 
import { Product } from '../models';
import cartItem from '../redux/reducers/cartItem';
import * as actions from "../redux/actions/cartActions";

const Stack = createNativeStackNavigator();


const {width,height} = Dimensions.get('window');

function MyStack({navigation,route,cartItems,clearCart}: {cartItems:{products:Product,quantity:number}[], clearCart:() => void}) {

 
    const tabHiddenRoutes = ["ProductDetailsScreen", "CartScreen"]
    const [totalPrice, setTotalPrice] = useState<number>(0)

    React.useLayoutEffect(() => {
        const routeName = getFocusedRouteNameFromRoute(route);
        if (tabHiddenRoutes.includes(routeName)) {
          navigation.setOptions({ tabBarStyle: { display: "none" } });
        } else {
          console.log("Aç ", routeName);
          navigation.setOptions({ tabBarStyle: { display: "true" } });
        }
      }, [navigation, route]);

const getProductPrice = () => {
    var total = 0;
    cartItems.forEach(cartItem => {
        const price = (total += cartItem.product.fiyat);
        setTotalPrice(price)
    })
}
useEffect(() => {
    getProductPrice()
},[cartItems,navigation,route])


    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    headerStyle: { backgroundColor: "#5C3EBC" },
                    headerTitle: () => (
                        <Image
                            resizeMode="contain"
                            style={{ width: 70, height: 30,alignItems: 'center', left:140,}}
                            source={require("../../assets/getirlogo.png")}
                        />
                    ),
                }}
            />
            <Stack.Screen
                name='CategoryDetails'
                component={CategoryFilterScreen}
                options={{
                    headerTintColor:'white',
                    headerBackTitleVisible:false,
                    headerStyle: { backgroundColor: "#5C3EBC" },
                    headerTitle: () => (
                        <Text style={{
                            fontWeight:'bold',
                            fontSize:18 ,
                            color:'white',
                            left: 98,
                        }}>Ürünler</Text>
                    ),
                    headerRight:()=>(
                        <TouchableOpacity 
                        onPress={() => navigation.navigate('CartScreen')}
                        style={{
                            width:width*0.22,
                            height:33,
                            backgroundColor:'white',
                            marginRight:width*0.02,
                            borderRadius:9,
                            flexDirection:'row',
                            alignItems:'center',
                        }}>
                            <Image  style={{
                                width:26,
                                height:26,
                                marginLeft:6,
                            }}
                            source={require('../../assets/cart.png')}/>
                            <View style={{height:33,width:3,backgroundColor:'white'}}/>

                            <View style={{
                                flex:1,
                                height:33,
                                backgroundColor:'#f3effe',
                                borderTopRightRadius:9,
                                borderBottomRightRadius:9,
                                justifyContent:'center',
                                alignItems:'center',
                            }}>
                                <Text style={{
                                    color:'#5d3ebd',
                                    fontWeight:'bold',
                                    fontSize:12.4,
                                }}>
                                   <Text>{'\u20BA'}</Text>
                                   {totalPrice.toFixed(2)}
                                </Text>

                            </View>
                            
                        </TouchableOpacity>
                    )
                }}
            />

            <Stack.Screen
            options={{
                headerBackTitleVisible:false,
                headerTintColor:'white',
                headerStyle:{backgroundColor:'#5c3ebc'},
                headerTitle:() => (
                    <Text style={{
                        fontWeight:'bold',
                        color:'white',
                        fontSize:15,
                        left: 89,
                    }}>Ürün Detayı</Text>
                ), 
                headerRight:() =>(
                    <TouchableOpacity style={{paddingRight: 2,}}>
                        <Foundation name="heart" size={24} color="#32177a" />
                    </TouchableOpacity>
                ),
            }}
            name='ProductDetails'
            component={ProductDetailsScreen}
            />

            <Stack.Screen 
            name='CartScreen'
            component={CartScreen}
            options={{
                headerTintColor:'white',
                headerBackTitleVisible:false,
                headerStyle:{backgroundColor:'#5c3ebc'},
                headerLeft:()=> (
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name="close" size={24} color="white" />
                    </TouchableOpacity>
                   ),
                headerTitle: () => (
                    <Text  style={{
                        color:'white',
                        fontSize:17,
                        left: 90,
                        fontWeight:'bold',
                    }}>Sepetim</Text>
                ),
                headerRight:() => (
                    <TouchableOpacity onPress={() => clearCart()}>
                        <Ionicons name="trash" size={24} color="white" />
                    </TouchableOpacity>
                )
            }}
            />
        </Stack.Navigator>
    )
}


const mapStateToProps = (state) => {
    const {cartItems} = state;
    return {
        cartItems:cartItems
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        clearCart: () => dispatch(actions.clearCart())
    }
}

function HomeNavigator({navigation,route,cartItems,clearCart}:{clearCart:() => void}){
    return <MyStack navigation = {navigation} route={route} cartItems={cartItems}  clearCart={clearCart}/>
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeNavigator)