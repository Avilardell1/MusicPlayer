import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import SearchBox from '../components/SearchBox';

export default class IniciScreen extends Component {
    state={
        song: ''        
    };   

    static navigationOptions = {
        title: 'Music Player',
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerRight: () => (
            <SearchBox  />
        )   
    }    

    render() {   
        if(this.state.song == " ") {               
            return (
            <View style={{height: '100%', backgroundColor: 'black'}}>
                <View style= {{ paddingTop: '70%'}}>
                <Icon            
                    name='ios-search'
                    type='ionicon'
                    color='white'
                    iconStyle={{fontSize: 40, marginBottom: 10}}
                />
                </View>
                <View style= {{ padding: 0 }}>
                <Text style={{ fontSize: 20, color: 'white', textAlign: 'center'}}>Use the search bar to find songs</Text>
                </View>
            </View>
            );
        } else {
            return this.props.navigation.navigate('LlistaScreen')
        }
    }
}