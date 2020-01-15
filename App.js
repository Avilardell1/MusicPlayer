import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IniciScreen from './screen/IniciScreen';
import LlistaScreen from './screen/LlistaScreen';
import PlayerScreen from './screen/PlayerScreen';

const AppNavigator = createStackNavigator({
  IniciScreen: {screen: IniciScreen},
  LlistaScreen: {screen: LlistaScreen},
  PlayerScreen: {screen:PlayerScreen}
})
export default createAppContainer(AppNavigator); 