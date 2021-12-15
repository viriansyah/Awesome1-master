//import React in our code
import React, {useState, useEffect} from 'react';
import {UIActivityIndicator} from 'react-native-indicators';

//import all the components we are going to use
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

export default function Artikel({navigation}){
  const [loading, setLoading] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [dataSource1, setDataSource1] = useState([]);
  const [dataSource2, setDataSource2] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const apiurl='https://sore.grob.media/api/v1/articles?limit=5&page=' + page
  const apiurl2='https://sore.grob.media/api/v1/articles?limit=25&page=1'

  
  const getData = () => {
    console.log(apiurl);
    setLoading(true);
    //Service to get the data from the server to render
    fetch(apiurl)
    //Sending the currect offset with get request
    .then((response) => response.json())
    .then((responseJson) => {
      //Successful response from the API Call
      //After the response increasing the offset for the next API call.
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
    //console.log(apiurl2);
    //Service to get the data from the server to render
    fetch(apiurl2)
    //Sending the currect offset with get request
    .then((response) => response.json())
    .then((responseJson) => {
      //Successful response from the API Call
      //After the response increasing the offset for the next API call.
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
      <TouchableOpacity onPress={() => navigation.navigate('news', item)}>
        <View style={{flex:1, flexDirection:'row'}}>
           <Image
            source={{uri:item.img_url}}
            style={styles.imageView}
            />
            <View style={{flex:1, flexDirection:'column'}}>
            {/* <Text style={styles.textStyle}>{item.id}</Text> */}
            <Text style={styles.textStyle}>{item.title}</Text>
            <Text style={styles.textStyle2}></Text>
            <Text style={styles.textStyle}>{item.content.substring(0, 100)}.....</Text>
            </View>
        </View>
       </TouchableOpacity>
    )
  }

  const renderFooter = () => {
    return (
      //Footer View with Load More button
      <View style={styles.footer}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={getData}
          disabled={disabled}
          //On Click of button load more data
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
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      const newData = dataSource1.filter(function (item) {
        // Applying filter for the inserted text in search bar
        const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
        
      });
      setLoading(true);
      setDataSource(newData);
      setSearch(text);
      setDisabled(true);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setLoading(false);
      setDataSource(dataSource2);
      setSearch(text);
      setDisabled(false);
    }
  };
  
  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
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
          style={styles.FontSearch}
          placeholderTextColor="black"
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

  // footerList=()=>(
  //   <View style={styles.footer}>
  //     {!loading ? (
  //       <UIActivityIndicator color="green"/>
  //     ) : null}
  //   </View>
  // )

// const loadmore=()=>{
//   getData()
//   //setPage(page+1)
// }

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
    padding: 10,
    backgroundColor: '#800000',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 15,
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
  //marginLeft:15,
  marginTop:5,
  marginRight:20,
  fontSize: 15,
  textAlign: 'justify',
},

textStyle2: {
  height: 2,
  width: '100%',
  backgroundColor: 'black',
  marginTop:5,
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