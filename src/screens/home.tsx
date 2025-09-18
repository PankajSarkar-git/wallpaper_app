import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const HomePage = () => {
  const navigation = useNavigation<any>();
  return (
    <View>
      <Text>HomePage one<FontAwesome name="rocket" size={30} color="#900" />;</Text>
      <Button
        title="Go to about Page"
        onPress={() => navigation.navigate('About')}
      />
      
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({});
