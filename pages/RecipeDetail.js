import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, SectionList,Button, SafeAreaView } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import YoutubePlayer from 'react-native-youtube-iframe';

export default function RecipeDetail({navigation,route}){
  const {video_url}=route.params;
  const INGREDIENTS = [
    {
      title: 'Bahan - Bahan',
      data: [
        '- 900 gr paha bawah ayam, potong',
        '- 10 siung bawang merah, iris',
        '- 3 siung bawang putih, geprek',
        '- 300 gr wortel, potong',
        '- 300 gr kentang, potong',
        '- 200 gr kol, potong',
        '- 2 batang daun bawang, potong',
        '- 6 batang seledri, potong',
        '- 2 buah tomat merah, potong',
        '- 1 buah pala',
        '- 4 buah kapulaga',
        '- ½ sdt lada putih',
        '- 2-3 sdm Masako Kaldu Spesial Rasa Ayam',
        '- 2-3 liter air',
        '- 2-3 sdm minyak',
        '- Bawang goreng',
        '- Jeruk limau',
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
        textStyle={{ fontFamily: "JosefinSans-Regular", fontSize:20, color:'black'}}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <View>
        <YoutubePlayer
            height={245}
            play={false}
            videoId={video_url}
            fullscreen={false}
        />
      </View>
      <SectionList
        sections={INGREDIENTS}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item title={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.title}>{title}</Text>
        )}
      />
      <Button title="Langkah - Langkah Yang diperlukan" onPress={() => {navigation.navigate('RecipeStep') }} />
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