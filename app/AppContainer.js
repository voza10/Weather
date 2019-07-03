import React from 'react';
import {
  Scene,
  Stack,
  Router,
  Tabs
} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Map from './views/Map';
import Search from './views/Search';
import Weather from './views/Weather';

export default function AppContainer() {
  return (
    <Router sceneStyle={{ backgroundColor: '#f2f2f2' }}>
      <Stack
        key="root"
        hideNavBar={true}
      >
        <Tabs
          key={'tabsMenu'}
          tabBarPosition={'bottom'}
          activeTintColor={'#70bdf2'}
          inactiveTintColor={'#BABABA'}
        >
          <Scene
            tabBarLabel={'Map'}
            key={'map'}
            component={Map}
            hideNavBar={true}
            icon={() => (<Icon style={{ fontSize: 20 }} name={'google-maps'} />)}
          />
          <Scene
            tabBarLabel={'Search'}
            key={'search'}
            component={Search}
            hideNavBar={true}
            icon={() => (<Icon style={{ fontSize: 20 }} name={'magnify'} />)}
          />
        </Tabs>
        <Scene
          key={'weather'}
          component={Weather}
          hideNavBar={true}
        />
      </Stack>
    </Router>
  );
}
