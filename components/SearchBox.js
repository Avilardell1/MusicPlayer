import React, { Component } from 'react';
import {View} from 'react-native';
import {Item,Icon,Input} from 'native-base';
import {SearchBar} from 'react-native-elements';

export default class SearchBox extends Component {
  constructor(props){
    super(props);    
  }

  state = {
    firstQuery: '',
    image: '',
    song: ''
  };

  searchSong = search => {   
    this.setState({ firstQuery: search });    
    fetch('https://itunes.apple.com/search?term=' + this.state.firstQuery)
    .then((response) => response.json())    
    .then((responseJson) => { 
      if (responseJson != undefined) {        
        if (responseJson.results[0].previewUrl != undefined) { 
          this.setState({song: responseJson.results[0].previewUrl});
          this.setState({image:responseJson.results[0].artworkUrl100});
        }
      }   
    })
  } 

  render() {    
    return (
      <View style={{flex:1, width: 200, marginRight: 20}}>        
        <Item>
          <Icon name="ios-search" onPress={this.searchSong} />
          <Input value={this.state.firstQuery}
          placeholder="Search"
          onChangeText={() => this.searchSong(this)}/>            
        </Item>             
      </View>
    );    
  }
}

