import { createStackNavigator } from 'react-navigation'

import News from '../components/News'
import NewsDetail from '../components/NewsDetail'

export default MainNavigator = createStackNavigator({
  Main: { screen: News },
  Detail: { screen: NewsDetail }
})