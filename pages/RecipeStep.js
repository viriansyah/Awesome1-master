import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, SectionList,Button } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

export default function RecipeStep({navigation}){
  const INGREDIENTS = [
    {
      title: 'Langkah - Langkah',
      data: [
        'Langkah 1',
        'Langkah 2',
        'Langkah 3',
        'Langkah 4',
        'Langkah 5',
        'Langkah 6',
        'Langkah 7',
      ],
    },
  ];

  const [checkboxState, setCheckboxState] = useState(false);

  const Item = ({ title }) => (
    <View style={styles.item} onPress={() => setCheckboxState(!checkboxState)}>
      <BouncyCheckbox
        size={30}
        fillColor="green"
        unfillColor="#FFFFFF"
        text={title}
        iconStyle={{ borderColor: "green" }}
        textStyle={{ fontFamily: "JosefinSans-Regular", fontSize:28, color:'black'}}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <SectionList
        sections={INGREDIENTS}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item title={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.title}>{title}</Text>
        )}
      />
      <Button title="Kembali ke halaman Resep" onPress={() => {navigation.navigate('resepList1') }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  title: {
    fontSize: 24,
    backgroundColor: 'white',
    paddingVertical: 10,
    padding: 10,
  },
  item: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    paddingVertical: 5,
  },
});