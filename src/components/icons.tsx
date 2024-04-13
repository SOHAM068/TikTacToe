import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icons from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import type { PropsWithChildren } from 'react'

type IconProps = PropsWithChildren<{
  name : string;
}>
const icons = ({name} : IconProps) => {
  switch (name) {
    case 'circle':
      return <Icons name='circle-thin' size={38} color='#F7CD2E'/>
      break;
    case 'cross':
      return <Entypo name='cross' size={38} color='#38CC77'/>
      break;
  
    default:
      return <Icons name='pencil' size={38} color='#ODODOD'/>
      break;
  }
}

export default icons;