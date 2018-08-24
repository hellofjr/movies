/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Platform,
  TextInput,
  Button,
  ScrollView,
  Dimensions,
  ListView,
  Alert,
  TouchableHighlight,
  Image,
  RefreshControl
} from 'react-native';

const ds = new ListView.DataSource({
  rowHasChanged:(r1,r2)=>r1 !== r2
})

const circleSize = 8;
const circleMargin = 5;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      currentPage:0,
      searchText:'',
      isRefreshing:false,
      dataSource:ds.cloneWithRows([
        {
          image:require('../images/ad1.jpg'),
          title:'商品1',
          subTitle:'描述1'
        },{
          image:require('../images/ad2.jpg'),
          title:'商品2',
          subTitle:'描述2'
        },{
          image:require('../images/ad3.jpg'),
          title:'商品3',
          subTitle:'描述3'
        }]),
      advertisements:[
      {url:require('../images/ad1.jpg')},
      {url:require('../images/ad2.jpg')},
      {url:require('../images/ad3.jpg')}]
    };
  }

  static navigationOptions = {
    title: 'Home',
  };

  render() {
    const adCount = this.state.advertisements.length;
    const indicatorWidth = circleSize * adCount + circleMargin * adCount * 2;
    const left = (Dimensions.get('window').width - indicatorWidth) / 2;
    return (
      <View style={styles.container}>
        <View style={styles.searchBar}>
          <TextInput style={styles.input} placeholder="搜索商品" onChangeText={(text)=>{this.setState({searchText:text})}}></TextInput>
          <Button style={styles.button} title="搜索" onPress={()=>{this.props.navigation.navigate("Hello")}}></Button>
        </View>
        <View style={styles.advertisement}>
          <ScrollView ref="scrollView"
                      horizontal={true} //横向滚动
                      showsHorizontalScrollIndicator={false} //不显示横向滚动条
                      pagingEnable={true} //分页
                      >
            {this.state.advertisements.map((advertisement, index)=> {
              return (
                <TouchableHighlight key={index} onPress={this.touchScroll}>
                  <Image style={styles.advertisementContent} source={advertisement.url}></Image>
                </TouchableHighlight>
                )
            })}
          </ScrollView>
          <View style={[styles.indicator,{left:left}]}>
            {this.state.advertisements.map((advertisement, index)=> {
              return (<View key={index} style={(index === this.state.currentPage)?styles.circleSelected:styles.circle} />)
            })}
          </View>
        </View>
        <View style={styles.products}>
          <ListView dataSource={this.state.dataSource} renderRow={this.renderRow} renderSeparator={this.renderSeparator} refreshControl={this.renderRefreshingControl()}/>
        </View>
      </View>
    );
  }

  componentDidMount(){
    this.startTimer();
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  startTimer(){
    this.interval = setInterval(()=>{
      nextPage = this.state.currentPage + 1;
      if(nextPage >= 3){
        nextPage = 0;
      }
      this.setState({currentPage:nextPage});
      const offSetX = nextPage * Dimensions.get('window').width;
      this.refs.scrollView.scrollResponderScrollTo({x:offSetX,y:0,animated:true})
    },2000)
  }

  renderRow(rowData,sectionID,rowID){
    return (
      <View style={styles.row}>
        <Image source={rowData.image} style={styles.productImage}></Image>
        <View style={styles.productText}>
          <Text style={styles.productTitle}>{rowData.title}</Text>
          <Text style={styles.productSubtitle}>{rowData.subTitle}</Text>
        </View>
      </View>
      )
  }

  search(){
    Alert.alert('按下了搜索'+this.state.searchText,null,null);
  }

  touchScroll(){
    Alert.alert("点击了轮播广告",null,null);
  }

  renderSeparator(sectionID,rowID,adjacentRowHighlighted){
    return (
      <View key={`${sectionID}-${rowID}`} style={styles.divider}></View>
    )
  }

  renderRefreshingControl(){
    return (
      <RefreshControl refreshing={this.state.isRefreshing} onRefresh={this.onRefresh} tintColor={'#ff0000'} title={'正在刷新数据，请稍后...'} titleColor={'#0000ff'}>

      </RefreshControl>
    )
  }

  onRefresh = ()=>{
    this.setState({isRefreshing:true});
    setTimeout(() => {
      const products = Array.from(new Array(10)).map((val,index)=>({
        image:require('../images/ad1.jpg'),
        title: '新商品' + index,
        subTitle : '新商品描述' + index
      }))
      this.setState({isRefreshing:false,dataSource:ds.cloneWithRows(products)});
    }, 2000);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBar:{
    // marginTop: Platform.OS === 'ios'?20:0, //判断android还是ios
    height:40,
    flexDirection: 'row' 
  },
  input:{
    flex:1,
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 10
  },
  button:{
    flex:1
  },
  advertisement:{
    height:180
  },
  products:{
    flex:1
  },
  row:{
    height:80,
    flexDirection: 'row',
    backgroundColor:'white'
  },
  advertisementContent:{
    width:Dimensions.get('window').width,
    height:180
  },
  indicator:{
    position: 'absolute',
    top:160,
    flexDirection:'row' 
  },
  circle:{
    width:circleSize,
    height:circleSize,
    borderRadius:circleSize/2,
    backgroundColor: 'gray',
    marginHorizontal: circleMargin
  },
  circleSelected:{
    width:circleSize,
    height:circleSize,
    borderRadius:circleSize/2,
    backgroundColor:'white',
    marginHorizontal:circleMargin
  },
  productImage:{
    marginLeft:10,
    marginRight:10,
    width:40,
    height:40,
    alignSelf:'center'
  },
  productText:{
    flex:1,
    marginTop:10,
    marginBottom:10
  },
  productTitle:{
    flex:3,
    fontSize:16
  },
  productSubtitle:{
    flex:2,
    fontSize:16,
    color:'gray'
  },
  divider:{
    height:1,
    width:Dimensions.get('window').width - 5,
    marginLeft:5,
    backgroundColor:'lightgray'
  }
});