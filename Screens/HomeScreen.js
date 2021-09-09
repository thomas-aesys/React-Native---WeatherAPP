import React, {useEffect, useState} from 'react';
import {Button} from '../components/Buttons';
import {cityName, getHours, getCityByGeoCoords} from '../API/api';
import Title from '../components/Title';
import {
  View,
  StyleSheet,
  TextInput,
  ImageBackground,
  ScrollView,
} from 'react-native';
import Content from '../components/Content';
import bgImage from '../bgWorld1.jpg';
import Geolocation from '@react-native-community/geolocation';

const HomeScreen = ({route}) => {
  const [city, setCity] = useState({});
  const [text, setText] = useState('');
  const [isGeo, setIsGeo] = useState(false);
  const [coords, setCoords] = useState();
  const [geoLocation, setGeoLocation] = useState(null);
  const [hours, setHours] = useState();

  const {data} = route.params;

  useEffect(()=> {
    setCoords('')
  },[city,text,hours])

  useEffect(() => {
    Geolocation.getCurrentPosition(info => {
      const {longitude, latitude} = info.coords;
      setCoords({longitude, latitude});
    });
  }, []);

  useEffect(() => {
    if (!isGeo && coords) setIsGeo(true);
  }, [isGeo, coords]);

  useEffect(() => {
    if (coords && coords.latitude && coords.longitude && !geoLocation && !data) {
      getCityByGeoCoords(coords.latitude, coords.longitude).then(res =>
        setGeoLocation(res.data),
      );
    }
    if (geoLocation && !hours && !data) {
      getHours(geoLocation.name)
        .then(res => setHours(res.data.list))
        .catch(error => {
          console.log(error);
        });
    }
  }, [coords, geoLocation, data]);

  const onChangeText = textValue => {
    setText(textValue);
  };

  const sendCity = text => {
    cityName(text)
      .then(res => setCity(res.data))
      .catch(error => {
        console.log(error);
      });
    setText('');

    getHours(text)
      .then(res => setHours(res.data.list))
      .catch(error => {
        console.log(error);
      });

    setIsGeo(false);
  };

  useEffect(() => {
    setText('');
    if (data) {
      sendCity(data);
    }
    console.log('data', data);
  }, [data]);

  return (
    <>
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
            <Content
              data={city}
              hours={hours}
              isGeo={isGeo}
              geoLocation={geoLocation}></Content>
          </View>
        </ImageBackground>
      </ScrollView>
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
