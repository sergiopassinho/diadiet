import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  ScrollView,
  Image
} from 'react-native';


const data = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
   
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    
  },
];

const Item = (data) => (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={require("../../../assets/icon.png")} style={styles.image} />
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.description}>Descricao</Text>
      </View>
    </View>
);
  

const Body = () => {
  return (
      <FlatList
        data={data}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    alignItems: 'center'
  },
  image: {
    width: 320,
    height: 220,
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    alignSelf: 'flex-start'
  },
  description: {
    fontSize: 16,
    alignSelf: 'flex-start',
  },
});

export default Body;