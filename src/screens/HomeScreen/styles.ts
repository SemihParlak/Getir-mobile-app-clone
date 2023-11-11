import { StyleSheet, Dimensions } from "react-native";


const { height } = Dimensions.get('window')

const styles = StyleSheet.create({

    headerMain:{
        marginTop: '5%',
        height: height * 0.072,
        backgroundColor:'#f7f102',
    },
    headerOne:{
        height: height * 0.072,
        width:'80%',
        backgroundColor:'white',
        flexDirection:'row',
        alignItems: 'center',
        paddingHorizontal:'4%',
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
    },
    image:{
        width: 30,
        height: 30,
    },
    headerOneView:{
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 8,
        paddingLeft: 8,
        borderLeftColor: '#f3f2fd',
        borderLeftWidth: 2,
    },
    headerTwo:{
        width:'20%',
        height: height * 0.072,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center',
        paddingLeft: 15,
    }
})

export default styles;