import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Footer = () => {
  return (
    <View>
      <Text>Convenient ARV Delivery</Text>
      <Text>
        Enjoy the convenience of ARV Delivery Order your drugs now and have them
        delivered to your home!
      </Text>

      <TouchableOpacity>
        <Text>Make a request</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
