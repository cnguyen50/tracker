import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import Spacer from '../components/Spacer'

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View>
      <Spacer>
        <Text h3> Sign up for Tracker</Text>
      </Spacer>
      <Input 
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer/>
      <Input 
        secureTextEntry
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null}
      <Spacer>
        <Button
          title="Sign Up"
          onPress={() => signup({ email, password })}
        />
      </Spacer>
    </View>
  )
}

const styles = StyleSheet.create({})

export default AuthForm