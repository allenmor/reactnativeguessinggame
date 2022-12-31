import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Title from '../components/Title'
export default function GameScreen() {
  return (
    <View style={styles.screen}>
        <Title />
      <View>
          <Text>Higher or Lower</Text>

      </View>
      <View></View>
    </View>
  )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    },

})