# react-native-clipped <!-- omit in toc -->

# Work in progress - Go away



Clipping effects and animations for react-native  🍠🥒🍕

### [Try it with Expo](https://expo.io/@ijzerenhein/react-native-clipped-demo) <!-- omit in toc -->

![MagicMoveGif](magicmove5.gif)

- [Work in progress - Go away](#work-in-progress---go-away)
  - [Usage](#usage)
  - [Documentation](#documentation)
    - [Clipped.View](#clippedview)
    - [Clipping Props](#clipping-props)
    - [Animation Props](#animation-props)
    - [Animations](#animations)

## Usage

Installation

```
$ yarn add react-native-clipped
```

```jsx
import * as Clipped from 'react-native-clipped';

// Animate a component using a clipped slide-in effect
<Clipped.View animation='clipLeft'>
  <Text>Hi there</Text>
</Clipped.View>

// Clip a view to display only the right 50% of the content
<Clipped.View left={0.5}>
  <Text>Hi there</Text>
</Clipped.View>


```

## Documentation

### Clipped.View

### Clipping Props

The clipping props can be used to clip one or more sides of the view. E.g. to show only the right 50% of the view, set the `left` prop to `0.5`. These props also accept an `Animated.Value`, so that it's possible to build larger compound clipping effects or bind it to gestures.

| Property | Type                      | Default | Description                              |
| -------- | ------------------------- | ------- | ---------------------------------------- |
| `left`   | `number | Animated.Value` | `0`     | Clips the left part of the view (0..1)   |
| `right`  | `number | Animated.Value` | `0`     | Clips the right part of the view (0..1)  |
| `top`    | `number | Animated.Value` | `0`     | Clips the top part of the view (0..1)    |
| `bottom` | `number | Animated.Value` | `0`     | Clips the bottom part of the view (0..1) |

### Animation Props

The animation props make it possible to easily show or hide contents using a clipping animation. By setting the `animation` prop, the content will be shown using an animation upon mount. By setting the `hide` prop
to true, the animation will be reversed and the content will be hidden.

| Property          | Type             | Default | Description                                                                                                                                                                                          |
| ----------------- | ---------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `animation`       | `string`         |         | Animation (see [Animations](#animations)). When specified causes the content to be shown using this animation, or hidden when `hide` it set to `true`.                                               |
| `hide`            | `boolean`        | `false` | Set to `true` to hide the content (reverses the animation)                                                                                                                                           |
| `duration`        | `number`         | `1000`  | Length of the animation (milliseconds)                                                                                                                                                               |
| `delay`           | `number`         | `0`     | Amount of msec to wait before starting the animation                                                                                                                                                 |
| `easing`          | `function`       |         | Easing function to define the curve                                                                                                                                                                  |
| `useNativeDriver` | `boolean`        | `true`  | Use the native-driver. All clipping effects naturally support the native-driver, so there is no need to disable this prop.                                                                           | `fade` | `boolean` | `false` | Applies an additional fade in/out effect |
| `animValue`       | `Animated.Value` |         | Optional animated value to control the animation. Useful for linking the animation to gestures or making the animation part of a larger compound animation. The value should animate from `0` to `1` |
|                   |

### Animations

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
| `clipInsideOut`  | `slideInsideOut`  |
| `clipInsideOutX` | `slideInsideOutX` |
| `clipInsideOutY` | `slideInsideOutY` |
| `clipOutsideIn`  |                   |
| `clipOutsideInX` |                   |
| `clipOutsideInY` |                   |


## License <!-- omit in toc -->

[MIT](./LICENSE.txt)

## Cool? <!-- omit in toc -->

Do you think this cool and useful? Consider buying me a morning coffee!<br/><a href="https://www.buymeacoffee.com/ijzerenhein" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>
