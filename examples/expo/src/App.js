// @flow
import React from 'react';
import { Platform } from 'react-native';
import { Router, Scene, Tabs } from 'react-native-router-flux';
import { Ionicons } from '@expo/vector-icons';
import { StoreProvider } from './store';
import { DebugButton, RunButton } from './components';
import { ViewExamplesScreen, ViewExplorerScreen, ViewAnimationsScreen } from './view';
import { TransitionsScreen } from './transition';
import { SeriesScreen } from './series';

const TabBarIcon = (props: { name: string, tintColor: string }) => (
  <Ionicons
    name={(Platform.OS === 'android' ? 'md-' : 'ios-') + props.name}
    size={24}
    color={props.tintColor}
  />
);

const TransitionIcon = props => <TabBarIcon name="boat" {...props} />;
const AnimationIcon = props => <TabBarIcon name="bowtie" {...props} />;
const ViewIcon = props => <TabBarIcon name="pizza" {...props} />;
const SeriesIcon = props => <TabBarIcon name="film" {...props} />;
const ExplorerIcon = props => <TabBarIcon name="rocket" {...props} />;

const App = () => (
  <StoreProvider>
    <Router>
      <Tabs>
        <Scene
          key="viewExamples"
          component={ViewExamplesScreen}
          title="View Examples"
          tabBarLabel="View"
          icon={ViewIcon}
          renderRightButton={() => <DebugButton />}
        />
        <Scene
          key="viewAnimations"
          component={ViewAnimationsScreen}
          title="Animations"
          tabBarLabel="Animations"
          icon={AnimationIcon}
          renderLeftButton={() => <RunButton />}
          renderRightButton={() => <DebugButton />}
        />
        <Scene
          key="transition"
          component={TransitionsScreen}
          title="Transitions"
          tabBarLabel="Transitions"
          icon={TransitionIcon}
          renderLeftButton={() => <RunButton />}
          renderRightButton={() => <DebugButton />}
        />
        <Scene
          key="series"
          component={SeriesScreen}
          title="Series"
          tabBarLabel="Series"
          icon={SeriesIcon}
          renderLeftButton={() => <RunButton />}
          renderRightButton={() => <DebugButton />}
        />
        <Scene
          key="viewExplorer"
          component={ViewExplorerScreen}
          title="View Explorer"
          tabBarLabel="Explorer"
          icon={ExplorerIcon}
          renderRightButton={() => <DebugButton />}
        />
      </Tabs>
    </Router>
  </StoreProvider>
);

export default App;
