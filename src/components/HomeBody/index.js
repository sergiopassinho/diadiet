import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  Image
} from 'react-native';
import { data } from '../../../data';

const Item = (dados) => (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={require("../../../assets/icon.png")} style={styles.image} />
        <Text style={styles.title}>{dados.nome ? dados.nome : "Titulo"}</Text>
        <Text style={styles.description}>{dados.descricao ? dados.descricao : "Descricao qualquer"}</Text>
      </View>
    </View>
);

// const renderItem = ({dados}) => (
//   <Item nome={dados.nome} descricao={dados.descricao} />
// );
  
const Body = () => {
  return (
      <FlatList
        data={data}
        renderItem={(item) => <Item dados={item} />}
        keyExtractor={(_, index) => [...data, index]}
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