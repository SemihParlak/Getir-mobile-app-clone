import React, { useState } from 'react';
import {View, Text, ScrollView,Dimensions} from "react-native";
import { TouchableOpacity } from"react-native";

const {height, width} = Dimensions.get('window');

const TypeBox = ({setCat ,item,active}: {setCat:ant,item: string,active:string}) => {
    return(
        <TouchableOpacity onPress={() => setCat (item)} style={[{flexDirection:'row', alignItems:'center',paddingHorizontal:10,borderRadius:6,height:height*0.044,marginRight:12,}, item== active ? {backgroundColor:'#5c3ebc'}:{borderColor:'#f0eff7', borderWidth:2.4,}]}>
            <Text style={[{fontSize:14, color:'#7849F7', fontWeight:'600',},item==active&& {color:'white'}]}>{item}</Text>
        </TouchableOpacity>
    )
}

function index() {

    const [category, setCategory] = useState<String>("Birlikte İyi Gider")
  return (
    <ScrollView style={{width:'100%', height:height*0.072,backgroundColor:'white', flexDirection:'row',paddingVertical:height*0.014,paddingHorizontal:12, borderBottomColor:'lightgray', borderBottomWidth:1.5,}}
    showsHorizontalScrollIndicator={false}
    bounces={true}
    horizontal={true}
    >
        {["Birlikte İyi Gider","Çubuk","Kutu","Külah","Çoklu","Bar"].map((item)=>(
            <TypeBox setCat={setCategory} item={item} active={category}/>
        ))}
    </ScrollView> 
  )
}

export default index