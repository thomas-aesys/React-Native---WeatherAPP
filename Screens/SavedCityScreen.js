import React, {useEffect, useState} from 'react';
import {Button} from '../components/Buttons';
import {cityName} from '../API/api';
import {View, Text, TextInput, StyleSheet, ImageBackground} from 'react-native';
import Title from '../components/Title';
import CitySaved from '../components/CItySaved';
import bgImage from '../bgWorld1.jpg';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async value => {
  try {
    console.log('value', value);
    const jsonValue = JSON.stringify(value);
    console.log('json', jsonValue);
    await AsyncStorage.setItem('FavCity', jsonValue);
  } catch (e) {
    console.log(e);
  }
};

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('FavCity');
    let parseValue = jsonValue != null ? JSON.parse(jsonValue) : null;
    return parseValue;
  } catch (e) {
    console.log(e);
  }
};

const SavedCityScreen = () => {
  const [city, setCity] = useState([]);
  const [text, setText] = useState('');
  const [citySave, setCitySave] = useState([]);

  const onChangeText = textValue => setText(textValue);

  useEffect(() => {
    if (citySave.length > 0) {
      axios
        .all(
          citySave.map(el => {
            return cityName(el)
              .then(res => ({
                name: res.data.name,
                weather: res.data.weather[0].main,
                temp: res.data.main.temp,
                country: res.data.sys.country,
              }))
              .catch(error => {
                console.log(error);
              });
          }),
        )
        .then(res => {
          setCity(res);
        });
      storeData(citySave);
    }

    setText('');
  }, [citySave]);

  useEffect(() => {
    const get = async () => {
      let res = await getData();
      console.log('get storage', res);
      if(res != null) setCitySave(res);
    };
    get();
  }, []);

  const sendCitySave = () => {
    if (citySave.indexOf(text) === -1) {
      setCitySave(oldArray => [text, ...oldArray]);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={bgImage} style={styles.image}>
        <View style={{padding: 15, marginTop: 50}}>
          <Title title={'Favorite location'} />
          <View style={styles.container_input}>
            <TextInput
              value={text}
              onChangeText={onChangeText}
              style={styles.input}
            />
            <Button onPress={sendCitySave}></Button>
          </View>
        </View>
        {city.length > 0 ? (
          <CitySaved
            name={citySave}
            data={city}
            setState={setCitySave}></CitySaved>
        ) : (
          <Text></Text>
        )}
      </ImageBackground>
    </View>
  );
};
export default SavedCityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#2196f3',
  },
  container_input: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center',
  },
  input: {
    padding: 10,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    width: '60%',
    backgroundColor: '#1F1F21',
    color: '#818185',
    fontFamily: 'coolvetica rg',
  },
  image: {
    flex: 1,
  },
});
