import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, SectionList,Button } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import YoutubePlayer from 'react-native-youtube-iframe';

export default function RecipeDetail({navigation,route}){
  const {video_url}=route.params;
  const INGREDIENTS = [
    {
      title: 'Bahan - Bahan',
      data: [
        'Bahan 1',
        'Bahan 2',
        'Bahan 3',
        'Bahan 4',
        'Bahan 5',
        'Bahan 6',
        'Bahan 7',
        'Bahan 8',
        'Bahan 9',
        'Bahan 10',
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
        textStyle={{ fontFamily: "JosefinSans-Regular", fontSize:27, color:'black'}}
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
      <View>
        <YoutubePlayer
            height={245}
            play={false}
            videoId={video_url}
            fullscreen={false}
        />
      </View>
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