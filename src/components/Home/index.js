import React from 'react';
import { View, ScrollView } from 'react-native';
import HomeTitle from "../HomeTitle";
import HomeBody from "../HomeBody";

const HomeScreen = () => {
  return (
    <View>
      <HomeTitle />
      <ScrollView>
        <HomeBody />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;