import { View, Text } from "react-native";
import React from "react";
import colors from "../utils";
import useTailwind from "../Hooks/useTailwind";

const Header = ({ scrollP}) => {
  const tw = useTailwind()
  return (
    <View
      style={tw`flex items-center justify-between px-10 py-5 border-solid border-bottom-[1px] border-color-bcolor`}
    >
      <Text>ARVOME</Text>
      <Text>About</Text>
    </View>
  );
};

export default Header;

// const styles = StyleSheet.create({
//   header: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     borderBottomColor : colors.bcolor,
//     paddingVertical : 7,
//     paddingHorizontal : 10
//   },
// });
