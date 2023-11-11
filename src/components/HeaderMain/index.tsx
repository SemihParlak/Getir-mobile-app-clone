import React from 'react';
import { View, Text, Image } from 'react-native';
import "./styles";
import styles from './styles';
import { Entypo } from '@expo/vector-icons';

function index() {
  return (
    <View style={styles.headerMain}>
        <View style={styles.headerOne}>
              <Image style={styles.image} source={{uri:"https://cdn.getir.com/misc/emoji/house.png"}}/>
              <View style={styles.headerOneView}>
                <Text style={{fontWeight:'700',fontSize: 16,}}>Ev</Text>
                <Text style={{fontWeight:'600', fontSize:12, color:'gray', marginLeft:6, marginRight:3,}}>Dedepaşa Blv. Yenişehir Mahallesi...</Text>
                <Entypo name="chevron-small-right" size={24} color="#5D3EBD" />
              </View>
              <View style={styles.headerTwo}>
                <Text style={{fontSize:10,fontWeight:'bold', color: '#5d3ebd'}}>TVS</Text>
                <Text style={{fontSize: 20,fontWeight:'bold', color:'#5d3ebd'}}>
                    13<Text style={{fontSize: 16,color:'#5D3EBD', fontWeight:'bold',  }}>dk</Text>
                    </Text>
              </View>
        </View>

        <View></View>
    </View>
  )
}

export default index