import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const AboutPage = () => {
    const navigation = useNavigation<any>();
  return (
    <View>
      <Text>AboutPage</Text>
      <Button title='Go to home Page' onPress={()=> navigation.navigate('Profile')} />
    </View>
  )
}

export default AboutPage

const styles = StyleSheet.create({})