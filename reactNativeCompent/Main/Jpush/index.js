import { StackNavigator } from 'react-navigation'
import Second from './Second'
import App from './App'

export default StackNavigator({
  Home: {
    screen: App
  },
  Push: {
    screen: Second
  }
})