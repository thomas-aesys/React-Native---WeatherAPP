import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  ImageBackground,
  Animated,
  Easing,
} from 'react-native';
import bgImage from '../bgWorld1.jpg';
import imageThomas from '../imageThomas.png';
import pollice from '../pollice.png';

const LoadingScreen = () => {
  let spinValue = new Animated.Value(0);
  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: true,
    }),
  ).start();
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  return (
    <View>
      <ImageBackground source={bgImage} style={styles.image}>
        <Animated.View style={{transform: [{rotate: spin}]}}>
          <Image
            source={imageThomas}
            style={{width: 100, height: 100, borderRadius: 50}}></Image>
          <Image source={pollice} style={styles.pollice}></Image>
          <Image source={pollice} style={styles.pollice2}></Image>
        </Animated.View>
        {/* <Animated.View style={{transform: [{rotate: spin}]}}>
        </Animated.View>

        <Animated.View style={{transform: [{rotate: spin}]}}>
        </Animated.View> */}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    minHeight: '100%',
    minWidth: '100%',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pollice: {
    width: 100,
    height: 100,
    position: 'absolute',
    left: 50,
    top: 50,
    transform: [{rotate: '40deg'}],
  },
  pollice2: {
    width: 100,
    height: 100,
    position: 'absolute',
    right: 50,
    top: 50,
    transform: [{scaleX: -1}, {rotate: '20deg'}],
  },
});
export default LoadingScreen;
