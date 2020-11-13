import React , { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'
import { SafeAreaView } from 'react-navigation'


const AccountScreen = () => {
  const { signout } = useContext(AuthContext)

  return (
    <SafeAreaView>
      <Text style={{ fontSize: 48 }}> Account Screen</Text>
      <Spacer>
        <Button 
          title="Sign Out"
          onPress={signout}
        />
      </Spacer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

})

export default AccountScreen