// @flow
import React, { Component, createRef } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Slider } from 'react-native';
import { observer } from 'mobx-react';
import ActionSheet from 'react-native-actionsheet';
import { Label } from './Label';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 4,
  },
  label: {
    fontSize: 11,
    textTransform: 'uppercase',
    color: '#888888',
  },
  value: {
    color: 'dodgerblue',
    marginTop: 1,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

type PropsType = {
  storeComponent: any,
  name: string,
  label: string,
  values: Array<string | number>,
  slider?: boolean,
  minimumValue?: number,
  maximumValue?: number,
};

export const Option = observer(
  class Option extends Component<PropsType> {
    _actionSheet: any = createRef();

    renderValue() {
      const { storeComponent, label, name, values } = this.props;
      const valueLabel = storeComponent[name] + '';
      return (
        <TouchableOpacity onPress={this.onPress} style={styles.container}>
          <View>
            <Label>{label}</Label>
            <Text style={styles.value} numberOfLines={1}>
              {valueLabel}
            </Text>
            <ActionSheet
              ref={this._actionSheet}
              title={`Select a ${label}`}
              options={[...values.map(value => value + ''), 'cancel']}
              cancelButtonIndex={values.length}
              onPress={this.onSelectOption}
            />
          </View>
        </TouchableOpacity>
      );
    }

    renderSlider() {
      const { storeComponent, name, minimumValue, maximumValue } = this.props;
      const value = storeComponent[name];
      return (
        <View style={styles.container}>
          <Slider
            value={value}
            minimumValue={minimumValue}
            maximumValue={maximumValue}
            onValueChange={this.onSliderChange}
          />
        </View>
      );
    }

    render() {
      const { slider } = this.props;
      return slider ? this.renderSlider() : this.renderValue();
    }

    onPress = () => {
      this._actionSheet.current.show();
    };

    onSelectOption = index => {
      const { storeComponent, name, values } = this.props;
      if (index >= values.length) return;
      storeComponent[name] = values[index];
    };

    onSliderChange = (value: number) => {
      const { storeComponent, name } = this.props;
      storeComponent[name] = value;
    };
  }
);
