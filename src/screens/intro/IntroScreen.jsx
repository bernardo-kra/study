import React, { useEffect } from 'react'
import { View, Text, Button, ImageBackground } from 'react-native'
import Animated, { Easing, useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated'
import styles from './styles'

const IntroScreen = ({ navigation }) => {
  const opacity = useSharedValue(0)
  const translateY = useSharedValue(50)

  useEffect(() => {
    opacity.value = withTiming(1, {
      duration: 2000,
      easing: Easing.inOut(Easing.ease),
    })
    translateY.value = withTiming(0, {
      duration: 2000,
      easing: Easing.inOut(Easing.ease),
    })
  }, [])

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ translateY: translateY.value }],
    }
  })

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./images/vintage-light-lamp.jpg')} style={styles.image}>
        <Animated.View style={[styles.box, animatedStyle]}>
          <Text style={styles.text}>Bem-vindo à Loja de Iluminação</Text>
        </Animated.View>
        <View style={styles.buttonContainer}>
          <Button title="Entrar" onPress={() => navigation.navigate('Home')} color="#fff" />
        </View>
      </ImageBackground>
    </View>
  )
}

export default IntroScreen
