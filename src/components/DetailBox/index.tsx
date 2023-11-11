import React from 'react';
import {View, Text} from "react-native";

type DetailBoxProps={
    price : number;
    name: string;
    quantity:string;
}

function index({price,name,quantity}:DetailBoxProps) {
  return (
    <View style={{
        width:'100%',
        backgroundColor:'white',
        alignItems:'center',
    }}>
        <Text style={{
            color:'#5d3ebd',
            fontWeight:'bold',
            marginTop:12,
            fontSize:19,
        }}>
            <Text>{"\u20BA"}</Text>
            {price}
        </Text>
            
        <Text style={{
            fontWeight:'700',
            fontSize:16,
            marginTop:10,
        }}>
            {name}
        </Text>

        <Text style={{
            color:'#848897',
            fontWeight:'600',
            marginTop:8,
            paddingBottom:18,
        }}>
            {quantity}
        </Text>

    </View>
  )
}

export default index