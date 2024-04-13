import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import icons from './components/icons'
import Snackbar from 'react-native-snackbar'


export default function App(): JSX.Element {
  const [gameWinner, setGameWinner] = useState<string>('')
  const [iscross, setIsCross] = useState<boolean>(false)
  const [gameState, setGameState] = useState<string>('')

  const checkIsWinner = () => {
    if()
  }
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({})