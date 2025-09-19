import React from "react";
import { View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Go to Address" onPress={() => navigation.navigate("Address")} />
    </View>
  );
};

export default Profile;
