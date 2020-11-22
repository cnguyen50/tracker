import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements'
import { NavigationEvents } from 'react-navigation'
import { Context as TrackContext } from "../context/TrackContext"


const TrackListScreen = ({ navigation }) => {
  const { state,fetchTracks } = useContext(TrackContext)
  console.log(state)
  return (
    <View>
      <NavigationEvents onWillFocus={fetchTracks} />
      <Text style={{ fontSize: 48 }}> TrackList Screen</Text>
      <FlatList 
        data={state}
        keyExtractor={item => item._id}
        renderItem={({ item }) => {
          return <TouchableOpacity>
            <ListItem chevron title={item.name} />
          </TouchableOpacity>
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default TrackListScreen