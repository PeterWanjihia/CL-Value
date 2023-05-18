import { View, Text } from 'react-native'
import * as Icons from "react-native-vector-icons";


const Choose = () => {
  const reasons = [
    {
      title: "Convenience",
      desc: "Patients can order their drugs from the comfort of their homes, without having to visit the clinic.",
    },
    {
      title: "Ease of Access",
      desc: "Patients can access their drugs easily and quickly, with no need to travel to clinics.",
    },
    {
      title: "Fast delivery",
      desc: "Patients can receive their drugs in a timely manner, without having to wait in long queues at clinics.",
    },
  ];
  return (
    <View>
      <Text>Why choose us</Text>
      {reasons.map((i, reason) => (
        <View>
          <Icons.Ionicons name="ios-checkmark-circle" size={30} />
          <View>
            <Text>{reason.title}</Text>
            <Text>{reason.desc}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

export default Choose