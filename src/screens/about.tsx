import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const AboutPage = () => {
  const navigation = useNavigation<any>();

  return (
    <View>
      <Text>AboutPage</Text>
      <Button
        title="Go to Profile"
        onPress={() =>
          navigation.navigate("Profile", {
            screen: "ProfileMain",
          })
        }
      />
      <Button
        title="Go to Address"
        onPress={() =>
          navigation.navigate("Profile", {
            screen: "Address",
          })
        }
      />
    </View>
  );
};

export default AboutPage;
