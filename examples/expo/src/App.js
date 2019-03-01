// @flow
import React from 'react';
import { Platform } from 'react-native';
import { Router, Scene, Tabs } from 'react-native-router-flux';
import { Ionicons } from '@expo/vector-icons';
import { StoreProvider } from './store';
import { DebugButton, RunButton } from './components';
import { OtherScreen } from './other';
import { ViewScreen, ViewExplorerScreen } from './view';
import { AnimationScreen } from './animation';
import { TransitionScreen } from './transition';
// import ExplorerScreen from "./explorer/ExplorerScreen";

const TabBarIcon = (props: { name: string, tintColor: string }) => (
  <Ionicons
    name={(Platform.OS === 'android' ? 'md-' : 'ios-') + props.name}
    size={24}
    color={props.tintColor}
  />
);

const TransitionIcon = props => <TabBarIcon name="color-wand" {...props} />;
const AnimationIcon = props => <TabBarIcon name="color-wand" {...props} />;
const ViewIcon = props => <TabBarIcon name="microphone" {...props} />;
const OtherIcon = props => <TabBarIcon name="bug" {...props} />;
const ExplorerIcon = props => <TabBarIcon name="rocket" {...props} />;

const App = () => (
  <StoreProvider>
    <Router>
      <Tabs>
        <Scene
          key="viewExplorer"
          component={ViewExplorerScreen}
          title="View Explorer"
          tabBarLabel="Explorer"
          icon={ExplorerIcon}
          renderLeftButton={() => <RunButton />}
          renderRightButton={() => <DebugButton />}
        />
        <Scene
          key="view"
          component={ViewScreen}
          title="View"
          tabBarLabel="View"
          icon={ViewIcon}
          renderLeftButton={() => <RunButton />}
          renderRightButton={() => <DebugButton />}
        />
        <Scene
          key="animation"
          component={AnimationScreen}
          title="Animation"
          tabBarLabel="Animation"
          icon={AnimationIcon}
          renderLeftButton={() => <RunButton />}
          renderRightButton={() => <DebugButton />}
        />
        <Scene
          key="transition"
          component={TransitionScreen}
          title="Transition"
          tabBarLabel="Transition"
          icon={TransitionIcon}
          renderLeftButton={() => <RunButton />}
          renderRightButton={() => <DebugButton />}
        />
        <Scene
          key="other"
          component={OtherScreen}
          title="Other"
          tabBarLabel="Other"
          icon={OtherIcon}
          renderLeftButton={() => <RunButton />}
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
