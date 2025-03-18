import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-paper'
import styles from './styles'

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Button mode="contained" onPress={() => navigation.navigate('Details')}>
        Go to Details
      </Button>
    </View>
  )
}

export default Home
