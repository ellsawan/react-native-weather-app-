import { View, TouchableOpacity, ImageBackground, Text } from 'react-native';
import React from 'react';
import { windowHeight, windowWidth } from './Dimensions';

export default function Cards({ name, image, navigation }) {
  return (
    <TouchableOpacity
      style={{ marginHorizontal: 10 }}
      onPress={() => navigation.navigate('Details', { name })}
    >
      <ImageBackground
        source={image}
        style={{ height: windowHeight / 5, width: windowWidth / 2 - 50, justifyContent: 'center', alignItems: 'center' }}
        imageStyle={{ borderRadius: 16 }}
      >
        <View
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)', 
          }}
        >
          <Text
            style={{
              fontSize: 26,
              color: 'white', 
              textAlign: 'center',
            }}
          >
            {name}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}
