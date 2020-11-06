import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import Spacer from '../components/Spacer'
import { withNavigation } from 'react-navigation'

const NavLink = ({ navigation, text, routeName }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
      <Spacer>
        <Text style={styles.link}>
          Already have an account? Sign in here
        </Text>
      </Spacer>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  link: {
    color: 'blue'
  }
})

export default withNavigation(NavLink)