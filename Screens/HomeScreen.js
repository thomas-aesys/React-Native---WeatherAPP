import React, {useEffect, useState} from 'react';
import {Button} from '../components/Buttons';
import {cityName, cityDay, getfiveDay} from '../API/api';
import Title from '../components/Title';
import {
  View,
  StyleSheet,
  TextInput,
  ImageBackground,
  ScrollView,
} from 'react-native';
import Content from '../components/Content';
import LoadingScreen from './LoadingScreen';
import bgImage from '../bgWorld1.jpg';

const HomeScreen = ({route}) => {
  const [city, setCity] = useState({});
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [day, setDay] = useState({});
  const [fiveDay, setFiveDay] = useState({});

  const {data, index} = route.params;

  useEffect(() => {
    setTimeout(function () {
      setIsLoading(false);
    }, 3000);
  }, []);

  const onChangeText = textValue => {
    setText(textValue);
  };

  const sendCity = text => {
    cityName(text)
      .then(res => setCity(res.data))
      .catch(error => {
        console.log(error);
      });
    console.log('city', city);
    setText('');

    cityDay(text)
      .then(res => setDay(res.data))
      .catch(error => {
        console.log(error);
      });
    console.log('day', day);

    getfiveDay(text)
      .then(res => setFiveDay(res.data))
      .catch(error => {
        console.log(error);
      });
    console.log('fiveForecast', fiveDay);
  };

  useEffect(() => {
    setText('');
    if (index != undefined) {
      sendCity(data[index]);
      console.log('sono dentro');
    }
    console.log('sono fuori', index);
  }, [data, index]);

  return (
    <>
      {isLoading ? (
        <LoadingScreen></LoadingScreen>
      ) : Object.entries(city).length === 0 ? (
        <View style={styles.container}>
          <ImageBackground source={bgImage} style={styles.image}>
            <View style={{padding: 15, marginTop: 50}}>
              <Title title={'Search for city'} />
              <View style={styles.container_input}>
                <TextInput
                  value={text}
                  onChangeText={onChangeText}
                  style={styles.input}
                />
                <Button
                  onPress={() => {
                    sendCity(text);
                  }}></Button>
              </View>
            </View>
          </ImageBackground>
        </View>
      ) : (
        <ScrollView style={styles.container}>
          <ImageBackground
            source={bgImage}
            style={styles.image}
            resizeMode="cover">
            <View style={{padding: 15, marginTop: 50}}>
              <Title title={'Search for city'} />
              <View style={styles.container_input}>
                <TextInput
                  value={text}
                  onChangeText={onChangeText}
                  style={styles.input}
                />
                <Button
                  onPress={() => {
                    sendCity(text);
                  }}></Button>
              </View>
              <Content data={city} day={day} fiveDay={fiveDay}></Content>
            </View>
          </ImageBackground>
        </ScrollView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    minHeight: '100%',
    minWidth: '100%',
  },
  container_input: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'nowrap',
  },
  input: {
    padding: 10,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    minWidth: '60%',
    backgroundColor: '#1F1F21',
    color: '#818185',
    fontFamily: 'coolvetica rg',
  },
});

export default HomeScreen;
