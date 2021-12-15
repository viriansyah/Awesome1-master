import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, SectionList,Button } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

export default function RecipeStep({navigation}){
  const INGREDIENTS = [
    {
      title: 'Langkah - Langkah',
      data: [
        '1. Panaskan minyak, masukkan bawang merah, goreng di api sedang kecil',
        '2. Pisahkan sebagian bawang goreng, masukkan bawang putih dan lada putih, aduk',
        '3. Tambahkan batang daun bawang, besarkan api, lalu masukkan ayam, tumis hingga sedikit kecokelatan',
        '4. Masukkan air, masak hingga mendidih, lalu kecilkan api',
        '5. Masukkan kentang dan wortel, aduk, lalu tambahkan pala dan kapulaga',
        '6. Tambahkan masako kaldu ayam, aduk, kemudian masukkan tomat, daun bawang, seledri dan kol, masak selama kurang lebih 5 menit ',
        '7. Sup ayam siap disajikan dengan bawang goreng dan jeruk limau sebagai pelengkap',
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
        textStyle={{ fontFamily: "JosefinSans-Regular", fontSize:20, color:'black', marginRight:20}}
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
    marginLeft:15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    paddingVertical: 5,
    marginRight:15
  },
});