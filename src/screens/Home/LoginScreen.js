import React, { useState } from 'react'
import { View, TextInput, Button, Text, ActivityIndicator } from 'react-native'
import { firebase } from '@react-native-firebase/auth'
import styles from './styles'
const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async () => {
    setLoading(true)
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)
      navigation.navigate('Home')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <Button title="Login" onPress={handleLogin} />
          <Button title="Register" onPress={() => navigation.navigate('Register')} />
        </>
      )}
    </View>
  )
}

export default LoginScreen
