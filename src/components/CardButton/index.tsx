import React from 'react';
import { TouchableOpacity,View, Text, Dimensions } from "react-native";
import { connect } from 'react-redux';
import * as actions from"../../redux/actions/cartActions";
import { Product } from '../../models';

const { width, height } = Dimensions.get('window');

type cardButtonType = {
    addItemToCart: (a:Product) => void
    item:Product;
}

function index({item,addItemToCart}:cardButtonType) {
    return (
        <TouchableOpacity 
        onPress={() => addItemToCart(item)}
        style={{
            justifyContent:'center',
            bottom: 12,
            width: '100%',
            height: height * 0.08,
            backgroundColor: 'white',
            position:'absolute',
            bottom:0,
        }}>
            <View style={{
                alignItems:'center',
                justifyContent:'center',
                height: height*0.06,
                width: '88%',
                backgroundColor:'#5d39c1',
                marginHorizontal: '6%',
                borderRadius: 8,
            }}>
                <Text style={{
                    fontWeight:'bold',
                    color:'white',
                }}>Sepete Ekle</Text>
            </View>
        </TouchableOpacity>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        addItemToCart:(product:Product,) =>
        dispatch(actions.addToCart({quantity:1,product}))
    }
}

export default connect(null,mapDispatchToProps)(index)