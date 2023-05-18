import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import * as Icons from "react-native-vector-icons";

function Login() {
  return (
    <View>
      <View>
        <Text>Login</Text>
        <Icons.Feather name="x" size={40} />
      </View>
      <View>
        <Text>Unique Patient identifier (UPI)</Text>
        <TextInput placeholder="Your UPI" />
      </View>
      <View>
        <Text>Password</Text>
        <TextInput placeholder="password" />
      </View>
      <TouchableOpacity>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Login;
