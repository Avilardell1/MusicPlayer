import React, {Component} from 'react';
import {View, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import SearchBox from '../components/SearchBox';
import {ListItem, Divider } from 'react-native-elements';

export default class PlayerScreen extends Component {
    state={
        song: '',
        arraysongs: [],
        firstQuery: "Michael Jackson"
    };

    componentDidMount() {       
        var array_songs = [];    
        fetch('https://itunes.apple.com/search?term=' + this.state.firstQuery)
        .then((response) => response.json())    
        .then((responseJson) => { 
        if (responseJson != undefined) {                    
            for( var i=0; i<responseJson.results.length; i++) {
                array_songs[i] = {
                    name_song: responseJson.results[i].trackName,
                    author: responseJson.results[i].artistName,
                    image: responseJson.results[i].artworkUrl100
                }
            }
            this.setState({ arraysongs:array_songs });           
        }   
      })       
    }

    static navigationOptions = {
        title: 'Music Player',
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerRight: () => (
            <SearchBox />
        )   
    }    
    render() {        
        return (             
            <ScrollView style={{backgroundColor:'black'}}>                    
                <SafeAreaView style={styles.container}>
                    {
                        this.state.arraysongs.map((l, i) => (       
                            <View key={i}>                                                     
                                <ListItem
                                    divider={true}
                                    key={i}
                                    leftAvatar={{ source: { uri: l.image } }}
                                    title={l.name_song}
                                    subtitle={l.author}
                                    onPress={() => this.props.navigation.navigate("PlayerScreen", {song: l.image})}                                                               
                                />
                                <Divider/>                                
                            </View>
                        ))
                    }
                </SafeAreaView>                    
            </ScrollView>          
        );        
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    item: {          
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
});