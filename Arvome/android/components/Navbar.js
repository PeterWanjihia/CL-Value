import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../utils";
import useTailwind from "../Hooks/useTailwind";

const Navbar = ({ scrollP }) => {
  const tw = useTailwind();
  return (
    <View
      style={tw`flex items-center justify-between px-10 py-5 border-solid border-bottom-[1px] border-color-bcolor`}
    >
      <Text>ARVOME</Text>
      <TouchableOpacity>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;
