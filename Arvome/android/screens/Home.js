import { View, Text, ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import colors from "../utils";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Choose from "../components/Choose";
import Services from "../components/Services";
import Footer from "../components/Footer";

const Home = () => {
  const [scrollP, setScrollP] = useState(0);

  const handleScroll = (event) => {
    setScrollP(event.nativeEvent.contentOffset.y);
  };

  return (
    <ScrollView
      onScroll={handleScroll}
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* header */}
      <Header scrollP={scrollP} />

      {/* herosection */}
      <HeroSection />

      {/* about */}
      <About />

      {/* services */}
      <Services />

      {/* why us */}
      <Choose />

      {/* footer */}
      <Footer />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
