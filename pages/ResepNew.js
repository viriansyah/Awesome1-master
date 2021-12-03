import React, {useState, useEffect} from 'react';

import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  ActivityIndicator,
  TextInput
} from 'react-native';

export default function ResepNew({navigation}){
  const [loading, setLoading] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [dataSource1, setDataSource1] = useState([]);
  const [dataSource2, setDataSource2] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const apiurl='https://sore.grob.media/api/v1/recipes?limit=5&page=' + page
  const apiurl2="https://sore.grob.media/api/v1/recipes?limit=20&page=1"

  const getData = () => {
    console.log(apiurl);
    setLoading(true);
    fetch(apiurl)
    .then((response) => response.json())
    .then((responseJson) => {
      setDataSource([...dataSource, ...responseJson.data]);
      setDataSource2([...dataSource2, ...responseJson.data]);
      setLoading(false);
      setPage(page + 1);
    })
    .catch((error) => {
      console.error(error);
    });
  };
  
  const getData2 = () => {
    fetch(apiurl2)
    .then((response) => response.json())
    .then((responseJson) => {
      setDataSource1([...dataSource1, ...responseJson.data]);
    })
    .catch((error) => {
      console.error(error);
    });
  };
  
  useEffect(()=>{
    getData()
    getData2()
  },[])

  const render=({item})=>{
    return(
      <TouchableOpacity onPress={() => navigation.navigate('RecipeDetail', item)}>
        <View style={{flex:1, flexDirection:'row'}}>
           <Image
            source={{uri:item.img_url}}
            style={styles.imageView}
            />
            <View style={{flex:1, flexDirection:'column'}}>
            <Text style={styles.textStyle}>{item.title}</Text>
            <Text style={styles.textStyle}>{item.content.substring(0, 159)}.....</Text>
            </View>
        </View>
      </TouchableOpacity>
    )
  }

  const renderFooter = () => {
    return (
      <View style={styles.footer}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={getData}
          disabled={disabled}
          style={styles.loadMoreBtn}>
        <Text style={styles.btnText}>{disabled? 'Full Load':'Load More'}</Text>
          {loading ? (
            <ActivityIndicator
             color="white"
             style={{marginLeft: 8}} />
          ) : null}
        </TouchableOpacity>
      </View>
    );
  };

  const searchFilterFunction = (text) => {
    if (text) {
      const newData = dataSource1.filter(function (item) {
      const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) == 0;
      });
      setLoading(true);
      setDataSource(newData);
      setSearch(text);
      setDisabled(true);
    } else {
      setLoading(false);
      setDataSource(dataSource2);
      setSearch(text);
      setDisabled(false);
    }
  };
  
  const ItemSeparatorView = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: 'black',
        }}
      />
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
       <TextInput
          onChangeText={(text) => searchFilterFunction(text)}
          value={search}
          placeholder="Search Here"
          placeholderTextColor="black"
          style={styles.FontSearch}
        />
        <FlatList
          data={dataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          enableEmptySections={true}
          renderItem={render}
          ListFooterComponent={renderFooter}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    flex: 1,
  },
  footer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  loadMoreBtn: {
    padding: 12,
    backgroundColor: '#800000',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  imageView: {
    width: 130,
    height: 130 ,
    margin:5,
    marginLeft: 5,
    borderRadius : 10
},
textStyle: {
  marginRight:20,
  fontSize: 15,
  textAlign: 'justify',
},

FontSearch: {
  marginTop: 5,
  marginRight: 5,
  marginLeft: 5,
  borderRadius: 12,
  borderWidth: 1,
  fontSize: 20,
  color: 'black',
}
});