// @flow
import React from 'react';
import { View, Platform } from 'react-native';
import { Router, Scene, Tabs } from 'react-native-router-flux';
import { Ionicons } from '@expo/vector-icons';
import { StoreProvider, storeObserver } from './store';
import { DebugButton } from './components';
// import TransitionScreen from "./transition/TransitionScreen";
// import ViewScreen from "./transition/ViewScreen";
import { OtherScreen } from './other';
// import ExplorerScreen from "./explorer/ExplorerScreen";

const TabBarIcon = (props: { name: string, tintColor: string }) => (
  <Ionicons
    name={(Platform.OS === 'android' ? 'md-' : 'ios-') + props.name}
    size={24}
    color={props.tintColor}
  />
);

const TransitionIcon = props => <TabBarIcon name="color-wand" {...props} />;
const ViewIcon = props => <TabBarIcon name="microphone" {...props} />;
const OtherIcon = props => <TabBarIcon name="bug" {...props} />;
const ExplorerIcon = props => <TabBarIcon name="rocket" {...props} />;

const App = () => (
  <StoreProvider>
    <Router>
      <Tabs>
        {/*<Scene
        key="transition"
        component={TransitionScreen}
        title="Transition"
        tabBarLabel="Transition"
        icon={TransitioIcon}
        renderRightButton={() => <DebugButton />}
      />
      <Scene
        key="view"
        component={ViewScreen}
        title="View"
        tabBarLabel="View"
        icon={ViewIcon}
        renderRightButton={() => <DebugButton />}
      />*/}
        <Scene
          key="other"
          component={OtherScreen}
          title="Other"
          tabBarLabel="Other"
          icon={OtherIcon}
          renderRightButton={() => <DebugButton />}
        />
        {/*<Scene
        key="explorer"
        component={ExplorerScreen}
        title="Transition"
        tabBarLabel="Explore"
        icon={ExplorerIcon}
        renderRightButton={() => <DebugButton />}
      />*/}
      </Tabs>
    </Router>
  </StoreProvider>
);

export default App;
