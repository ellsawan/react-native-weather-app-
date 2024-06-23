import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import { windowHeight, windowWidth } from './Dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
import { API_KEY } from './Constants';

export default function Details(props) {
  const [data, setData] = useState(null);
  const { name } = props.route.params;

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, [name]);

  const Data = ({ title, value }) => (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 8,
      }}
    >
      <Text style={{ color: 'gray', fontSize: 22 }}>{title}</Text>
      <Text style={{ color: 'white', fontSize: 22 }}>{value}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require('../assests/images/image1.jpg')}
        style={{ height: windowHeight, width: windowWidth }}
        imageStyle={{ opacity: 0.6, backgroundColor: 'black' }}
      >
       
      </ImageBackground>
      <View
        style={{
          position: 'absolute',
          paddingVertical: 2,
          paddingHorizontal: 10,
          height: '100%',
          width: '100%',
          justifyContent: 'center', 
          alignItems: 'center', 
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            marginBottom: 20,
          }}
        >
          
        </View>
        {data && data.weather ? (
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Text style={{ color: 'white', fontSize: 40, textAlign: 'center' }}>{name}</Text>
            <Text style={{ fontSize: 22, color: 'white', textAlign: 'center' }}>
              {data.weather[0].main}
            </Text>
            <Text style={{ color: 'white', fontSize: 40 }}>
              {(data.main.temp - 273).toFixed(2)}&deg; C
            </Text>
            <Text style={{ color: 'white', fontSize: 22, marginBottom: 16 }}>Weather Details</Text>
            <View style={{ width: windowWidth - 40 }}>
              <Data value={data.wind.speed} title="Wind" />
              <Data value={data.main.pressure} title="Pressure" />
              <Data value={`${data.main.humidity}%`} title="Humidity" />
              <Data value={data.visibility} title="Visibility" />
            </View>
          </View>
        ) : (
          <Text style={{ color: 'white', fontSize: 22 }}>Loading...</Text>
        )}
      </View>
    </View>
  );
}
