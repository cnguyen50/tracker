import React from 'react';
import { StyleSheet } from 'react-native';
import Map from '../components/Map'
import { SafeAreaView } from 'react-navigation'
import Text from 'react-native-elements'


const TrackCreateScreen = () => {
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h2> Create a track</Text>
      <Map />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})

export default TrackCreateScreen