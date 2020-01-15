import React, {Component} from 'react';
import {View, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import SearchBox from '../components/SearchBox';
import {ListItem, Divider } from 'react-native-elements';

export default class PlayerScreen extends Component {
    state={
        song: '',
        arraysongs: [
            {
               name_song: 'prova1',
               author: 'sdsfsdsdsf'
            },
            {
                name_song: 'prova2',
                author: 'sdsfsdsdsf'
            },
            {
                name_song: 'prova1',
                author: 'sdsfsdsdsf'
             },
             {
                 name_song: 'prova2',
                 author: 'sdsfsdsdsf'
            },
            {
                name_song: 'prova1',
                author: 'sdsfsdsdsf'
            },
            {
                 name_song: 'prova2',
                 author: 'sdsfsdsdsf'
            },
            {
                name_song: 'prova1',
                author: 'sdsfsdsdsf'
            },
            {
                name_song: 'prova2',
                author: 'sdsfsdsdsf'
            }
        ]
    };

    componentDidMount() {        
        this.setState({song: this.props.navigation.getParam('song', {})});
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
                                    title={l.name_song}
                                    subtitle={l.author}
                                    onPress={() => this.props.navigation.navigate("PlayerScreen", {song: l.name_song})}                                                               
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