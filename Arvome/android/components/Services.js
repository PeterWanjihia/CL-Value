import { View, Text } from "react-native";
import React from "react";
import * as Icons from "react-native-vector-icons";

const Services = () => {
  const services = [
    {
      title: "Delivery Service",
      desc: "We provide a delivery service for ARV drugs, allowing patients to order their drugs at the comfort of their homes.",
    },
    {
      title: "Chatbot Service",
      desc: "We offer a chatbot service to answer any questions patients may have regarding their ARV drugs.",
    },
    {
      title: "Pay on delivery",
      desc: "We provide pay on delivery option for patients to pay for the delivery fee of their ARV drugs.",
    },
    {
      title: "Prescription Refill",
      desc: "We offer prescription refill services to ensure that patients get their ARV drugs on time.",
    },
  ];
  return (
    <View>
      <Text>ARV Delivery Services:</Text>
      <Text>Unlocking the Power of Delivery.</Text>

      <View>
        {services.map((i, service) => (
          <View key={i}>
            <Icons.Ionicons name="ios-checkmark-circle" size={30} />
            <Text>{service.title}</Text>
            <Text>{service.desc}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Services;
