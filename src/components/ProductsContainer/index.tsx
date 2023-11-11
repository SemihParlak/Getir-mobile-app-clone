import React from 'react';
import { View, Text } from 'react-native';
import ProductItem from "../../components/ProductItem";
import productsGetir from '../../../assets/productsGetir';

function index() {
  return (
    <View>


      {/* 2 products */}
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
        {productsGetir.slice(0, 2).map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </View>


      <Text style={{ color: 'gray', fontWeight: 'bold', padding: 14, }}>Çubuk</Text>

      {/* Below products */}

      <View style={{flexDirection:'row',flexWrap:'wrap',flex:1,backgroundColor:'white',alignItems:'center',paddingVertical:10,}}>
        {productsGetir.slice(2).map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </View>
    </View>
  )
}

export default index