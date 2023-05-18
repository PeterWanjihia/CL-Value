import { View, Text } from "react-native";
import React from "react";
import Navbar from "../components/Navbar";
import TableComponent from "../components/TableComponent";

const Welcome = () => {
  return (
    <View>
      {/* navbar */}
      <Navbar />
      {/* section */}

      {/* table */}
      <TableComponent />
    </View>
  );
};

export default Welcome;
