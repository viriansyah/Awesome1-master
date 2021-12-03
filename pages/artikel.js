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
            <Text style={styles.textStyle}>{item.content.substring(0, 159)}.....</Text>
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
        return itemData.indexOf(textData) == 0;
        
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
// import React ,{useState,useEffect} from 'react';
// import { StyleSheet, FlatList, Image, SafeAreaView, TextInput,Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
// import {UIActivityIndicator} from 'react-native-indicators';

// export default function ResepNew({navigation}){
// const [data,setData]=useState([])
// const [page,setPage]=useState(1)
// const [loading, setLoading] = useState(true);
// //const [filteredDataSource, setFilteredDataSource] = useState([]);
// const [masterDataSource, setMasterDataSource] = useState([]);
// const [masterDataSource1, setMasterDataSource1] = useState([]);
// const [search, setSearch] = useState('');
// // const apiurl="https://sore.grob.media/api/v1/articles?limit=10&current_page="+page
// // const apiurl2="https://sore.grob.media/api/v1/articles"

//   const fetchdata = () => {
//     console.log('fetchdata');
//     setLoading(true);
//     //Service to get the data from the server to render
//     fetch('https://sore.grob.media/api/v1/articles?limit=10&page=' + page)
//       //Sending the currect offset with get request
//       .then((response) => response.json())
//       .then((responseJson) => {
//         //Successful response from the API Call
//         setPage(page + 1);
//         //After the response increasing the offset for the next API call.
//         setData([...data, ...responseJson.data]);
//         //setMasterDataSource([...data, ...responseJson.data]);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   const fetchdata2 = () => {
//     console.log('fetchdata2');
//     //setLoading(true);
//     //Service to get the data from the server to render
//     fetch('https://sore.grob.media/api/v1/articles?limit=10&page=' + page)
//       //Sending the currect offset with get request
//       .then((response) => response.json())
//       .then((responseJson) => {
//         //Successful response from the API Call
//         setPage(page + 1);
//         //After the response increasing the offset for the next API call.
//         //setData([...data, ...responseJson.data]);
//         setMasterDataSource1([...data, ...responseJson.data]);
//         //setLoading(false);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

// // const fetchdata2=()=>{
// //   fetch(apiurl2)
// //   .then((response)=>response.json())
// //   .then((jsondata)=>{//setData(jsondata)
// //     //setFilteredDataSource(jsondata);
// //     setMasterDataSource(jsondata);
// //   })
// //   .catch((err)=>console.log(err))
// // }

// useEffect(()=>{
// fetchdata()
// fetchdata2()
// },[])
// const render=({item})=>{
//   return(
//     <TouchableOpacity onPress={() => navigation.navigate('news', item)}>
//       <View style={{flex:1, flexDirection:'row'}}>
//          {/* <Image
//           source={{uri:item.img_url}}
//           style={styles.imageView}
//           /> */}
//           <View>
//           <Text style={styles.textView}>{item.id}</Text>
//           <Text style={styles.textView}>{item.title}-{item.content}</Text>
//           {/* <Text style={styles.textView2}>{item.content}</Text> */}
//           {/* <Text style={styles.textView3}>{item.id} / {item.title}</Text> */}
//           </View>
//           {/* <TouchableOpacity onPress={()=>setCount(count+1)}>
//             <View><Text style={styles.textView3}>{count}</Text></View>
//           </TouchableOpacity> */}
//       </View>
//      </TouchableOpacity>
//   )
// }
// const loadmore=()=>{
//   fetchdata()
//   //setPage(page+1)
// }

// const searchFilterFunction = (text) => {
//   // Check if searched text is not blank
//   if (text) {
//     // Inserted text is not blank
//     // Filter the masterDataSource and update FilteredDataSource
//     const newData = data.filter(function (item) {
//       // Applying filter for the inserted text in search bar
//       const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
//       const textData = text.toUpperCase();
//       return itemData.indexOf(textData) > -1;
//     });
//     setData(newData);
//     setSearch(text);
//   } else {
//     // Inserted text is blank
//     // Update FilteredDataSource with masterDataSource
//     setData(masterDataSource1);
//     setSearch(text);
//   }
// };

// return (
//   <SafeAreaView style={{flex:1,alignItems:'center',justifyContent:'center'}} >
//     <TextInput
//           onChangeText={(text) => searchFilterFunction(text)}
//           value={search}
//           underlineColorAndroid="transparent"
//           placeholder="Search Here"
//         />
//     <FlatList
//       data={data}
//       renderItem={render}
//       keyExtractor={(_item,i)=>i.toString()}
//       onEndReached={()=>{loadmore()}}
//       ListFooterComponent={this.footerList}
//     />
//    </SafeAreaView>
//   );
// };

// footerList=()=>(
//   <View style={styles.MainContainer}>
//     <UIActivityIndicator color='green'/>
//   </View>
// )

// const styles = StyleSheet.create({
//   MainContainer :{
 
//     justifyContent: 'center',
//     alignItems:'center',
//     flex:1,
//     margin: 5,
 
// },
 
// imageView: {

//     width: 130,
//     height: 130 ,
//     margin:5,
//     marginLeft: 0,
//     borderRadius : 10
 
// },
 
// textView: {

//     width:'65%', 
//     padding:2,
//     color: '#000'
 
// },

// textView2: {

//   width:'65%',
//   marginTop:15, 
//   padding:2,
//   color: '#000'

// },
// textView3: {

//   width:'65%',
//   marginTop:15, 
//   padding:2,
//   color: '#000'

// }
// })

// import React, { Component } from 'react';
// import { ActivityIndicator, FlatList, Text, View } from 'react-native';

// export default class Artikel extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       data: [],
//       isLoading: true,
//       page:1
//     };
//   }

//   async getArticle() {
//     try {
//       const response = await fetch('https://sore.grob.media/api/v1/articles?limit=10&page=1');
//       const json = await response.json();
//       this.setState({ data: json.data });
//       //console.log(json)
//     } catch (error) {
//       console.log(error);
//     } finally {
//       this.setState({ isLoading: false });
//     }
//   }

//   componentDidMount() {
//     this.getArticle();
//   }

//   render() {
//     const { data, isLoading } = this.state;

//     return (
//       <View style={{ flex: 1, padding: 24 }}>
//         {isLoading ? <ActivityIndicator/> : (
//           <FlatList
//             data={data}
//             keyExtractor={(item) => item.id}
//             renderItem={({ item }) => (
//               <Text>{item.title}, {item.content}</Text>
//             )}
//           />
//         )}
//       </View>
//     );
//   }
// };