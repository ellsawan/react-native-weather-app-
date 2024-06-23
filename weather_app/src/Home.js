import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Cards from './Cards';
import {windowHeight, windowWidth} from './Dimensions';

export default function Home(props) {
  const [city, setCity] = useState('');
  const cities = [
    {
      name: 'Islamabad',
      image: require('../assests/images/image3.jpg'),
    },
    {
      name: 'New York',
      image: require('../assests/images/image4.jpg'),
    },
    {
      name: 'London',
      image: require('../assests/images/image5.jpg'),
    },
    {
      name: 'San Francisco',
      image: require('../assests/images/image6.jpg'),
    },
  ];

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../assests/images/image2.jpg')}
        style={{height: windowHeight, width: windowWidth}}
        imageStyle={{opacity: 0.6, backgroundColor: 'black'}}>
      
      </ImageBackground>
      <View
        style={{
          position: 'absolute',
          paddingVertical: 2,
          paddingHorizontal: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Icon name="menu" size={46} color="white" />
          <Image
            source={require('../assests/images/user.jpg')}
            style={{height: 46, width: 46, borderRadius: 50}}
          />
        </View>

        <View style={{paddingHorizontal: 20, marginTop: 100}}>
          <Text style={{fontSize: 40, color: 'white'}}>Hello</Text>
          <Text style={{fontSize: 22, color: 'white'}}>
            Search the city by name
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: 50,
            borderColor: 'white',
            borderWidth: 1,
            marginTop: 16,
            paddingHorizontal: 10,
          }}>
          <TextInput
            value={city}
            onChangeText={val => setCity(val)}
            placeholder="Search City"
            placeholderTextColor="white"
            style={{paddingHorizontal: 10, color: 'white', fontSize: 16}}
          />
          <TouchableOpacity onPress={() => props.navigation.navigate('Details',{name:city})}>
            <Icon name="search" size={22} color="white" />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            color: 'white',
            fontSize: 25,
            paddingHorizontal: 10,
            marginTop: 220,
            marginBottom: 20,
          }}>
          My Locations
        </Text>
        <FlatList
          horizontal
          data={cities}
          keyExtractor={item => item.name}
          renderItem={({item}) => <Cards name={item.name} image={item.image} navigation={props.navigation} />}
          contentContainerStyle={{paddingHorizontal: 10, paddingVertical: 20}}
        />
      </View>
    </View>
  );
}
