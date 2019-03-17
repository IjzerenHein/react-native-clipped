# react-native-clipped <!-- omit in toc -->

# Work in progress - Go away



Clipping effects and animations for react-native  🍠🥒🍕

### [Try it with Expo](https://expo.io/@ijzerenhein/react-native-clipped-demo) <!-- omit in toc -->

![MagicMoveGif](magicmove5.gif)

- [Work in progress - Go away](#work-in-progress---go-away)
  - [Usage](#usage)
  - [Documentation](#documentation)
    - [Clipped.View](#clippedview)
    - [Props](#props)
    - [Anim ations](#anim-ations)

## Usage

Installation

```
$ yarn add react-native-clipped
```

```jsx
import * as Clipped from 'react-native-clipped';

// Animate a component using a clipped slide-in effect
<Clipped.View animation='slideLeft'>
  <Text>Hi there</Text>
</Clipped.View>

// Clip a view to display only the right 50% of the content
<Clipped.View width={0.5} left={0.5}>
  <Text>Hi there</Text>
</Clipped.View>
```

## Documentation

### Clipped.View

### Props

| Property          | Type             | Default | Description                                                                                                                                                                                          |
| ----------------- | ---------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `animation`       | `string`         | ``      | Animation                                                                                                                                                                                            |
| `duration`        | `number`         | `400`   | Length of the animation (milliseconds)                                                                                                                                                               |
| `delay`           | `number`         | `0`     | Amount of msec to wait before starting the animation                                                                                                                                                 |
| `easing`          | `function`       |         | Easing function to define the curve                                                                                                                                                                  |
| `useNativeDriver` | `boolean`        | `true`  | Use the native-driver                                                                                                                                                                                | `fade` | `boolean` | `false` | Applies an additional fade in/out effect |
| `move`            | `boolean`        | `false` | Enabled move mode                                                                                                                                                                                    |
| `animValue`       | `Animated.Value` |         | Optional animated value to control the animation. Useful for linking the animation to gestures or making the animation part of a larger compound animation. The value should animate from `0` to `1` |
|                   |

### Anim ations

The following animations are available out of the box.

| Clip             | Slide             |
| ---------------- | ----------------- |
| `clipLeft`       | `slideLeft`       |
| `clipRight`      | `slideRight`      |
| `clipUp`         | `slideUp`         |
| `clipDown`       | `slideDown`       |
| `clipLeftUp`     | `slideLeftUp`     |
| `clipLeftDown`   | `slideLeftDown`   |
| `clipRightUp`    | `slideRightUp`    |
| `clipRightDown`  | `slideRightDown`  |
| `clipInsideOut`  | 'slideInsideOut`  |
| `clipInsideOutX` | `slideInsideOutX` |
| `clipInsideOutY` | `slideInsideOutY` |
| `clipOutsideIn`  |                   |
| `clipOutsideInX` |                   |
| `clipOutsideInY` |                   |


## License <!-- omit in toc -->

[MIT](./LICENSE.txt)

## Cool? <!-- omit in toc -->

Do you think this cool and useful? Consider buying me a morning coffee!<br/><a href="https://www.buymeacoffee.com/ijzerenhein" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>
