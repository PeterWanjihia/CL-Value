import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const HeroSection = () => {
  return (
    <View>
      <View>
        <Text>Stay healthy with ARV delivery!</Text>
        <Text>
          Take the hassle out of getting your ARV medications and have them
          delivered to you quickly and easily.
        </Text>
        <TouchableOpacity>
          <Text>Make a request</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Image source={require("../assets/medicines.png")} />
      </View>
    </View>
  );
};

export default HeroSection;
