import React, {Component} from 'react';
import {View} from 'react-native';
import { ActivityIndicator } from 'react-native';
import { Image, Icon } from 'react-native-elements';
import SearchBox from '../components/SearchBox';

export default class PlayerScreen extends Component {
    state={
        song: ''
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
        if (this.state.song != " ") {     
            return ( 
                <View style={{ height: '100%', backgroundColor: 'black'}}>
                    <View style={{width: '100%', alignItems:'center', justifyContent:'center', marginVertical: 50}}>                                    
                        <Image
                        source={{ uri: this.state.song }}
                        style={{ width: 300, height: 300, flex: 1 }}                        
                        />
                        <Icon name='ios-play'
                        reverse
                        type='ionicon'
                        color='red'
                        iconStyle={{fontSize: 50, left: 2}}
                        containerStyle={{marginTop: -50}}
                        onPress={()=> console.log("Hola")}/>                 
                    </View>
                </View>   
            ); 
        }       
    }
}