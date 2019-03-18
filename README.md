# react-native-clipped <!-- omit in toc -->

# Work in progress - Go away



Clipping effects and animations for react-native  🍠🥒🍕

### [Try it with Expo](https://expo.io/@ijzerenhein/react-native-clipped-demo) <!-- omit in toc -->

![MagicMoveGif](magicmove5.gif)

- [Work in progress - Go away](#work-in-progress---go-away)
  - [Usage](#usage)
  - [Documentation](#documentation)
    - [Clipped.View](#clippedview)
    - [Clipped.Transition](#clippedtransition)
    - [Clipped.Fragment](#clippedfragment)
    - [Animations](#animations)

## Usage

Installation

```
$ yarn add react-native-clipped
```

```jsx
import * as Clipped from 'react-native-clipped';

// Show a component using a cliping effect
<Clipped.View animation='clipLeft'>
  <Text>Hi there</Text>
</Clipped.View>

// Hide a component using a slide effect
<Clipped.View animation='slideUp' hide>
  <Text>Aloha</Text>
</Clipped.View>

// Clip a view to display only the right 50% of the content
<Clipped.View left={0.5}>
  <Text>Hi there</Text>
</Clipped.View>


```

## Documentation

### Clipped.View

The `Clipped.View` is the top-level interface for most of your clipping needs. It wraps a single child and applies clipping effects or show/hide animations. Under the hood, it uses one or more [Fragments](#clipped-fragment) to display its content.

**Clipping Props**

The clipping props can be used to clip one or more sides of the view. E.g. to show only the right 50% of the view, set the `left` prop to `0.5`. These props also accept an `Animated.Value`, so that it's possible to build larger compound clipping effects or bind it to gestures.

| Property | Type                      | Default | Description                                                    |
| -------- | ------------------------- | ------- | -------------------------------------------------------------- |
| `left`   | `number | Animated.Value` | `0`     | Clips the left part of the view (0..1)                         |
| `right`  | `number | Animated.Value` | `0`     | Clips the right part of the view (0..1)                        |
| `top`    | `number | Animated.Value` | `0`     | Clips the top part of the view (0..1)                          |
| `bottom` | `number | Animated.Value` | `0`     | Clips the bottom part of the view (0..1)                       |
| `debug`  | `boolean`                 |         | Enables debug mode and displays the underlying clipping layers |

**Animation Props**

The animation props make it possible to easily show or hide contents using a clipping animation. By setting the `animation` prop, the content will be shown using an animation upon mount, or when changing the `animation` prop. By setting the `hide` prop to true, the animation will be reversed and the content will be hidden.

| Property          | Type             | Default | Description                                                                                                                                                                                          |
| ----------------- | ---------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `animation`       | `string`         |         | Animation (see [Animations](#animations)). When specified causes the content to be shown using this animation, or hidden when `hide` it set to `true`.                                               |
| `hide`            | `boolean`        | `false` | Set to `true` to hide the content (reverses the animation)                                                                                                                                           |
| `duration`        | `number`         | `1000`  | Length of the animation (milliseconds)                                                                                                                                                               |
| `delay`           | `number`         | `0`     | Amount of msec to wait before starting the animation                                                                                                                                                 |
| `easing`          | `function`       |         | Easing function to define the curve                                                                                                                                                                  |
| `useNativeDriver` | `boolean`        | `true`  | Use the native-driver. All clipping effects naturally support the native-driver, so there is no need to disable this prop.                                                                           | `fade` | `boolean` | `false` | Applies an additional fade in/out effect |
| `animValue`       | `Animated.Value` |         | Optional animated value to control the animation. Useful for linking the animation to gestures or making the animation part of a larger compound animation. The value should animate from `0` to `1` |
| `onAnimationEnd`  | `function`       |         | Callback that is called whenever a show or hide transition has occured                                                                                                                               |

### Clipped.Transition

`Clipped.Transition` shows new content with an animation, when a new child with a different `key` is provided. This causes the new content to be shown using the new animation, and the old content will be hidden with a reversed animation. Under the hood, transition uses one or more [Clipped.View](#clipped-view) components to perform its animations.

**Props**

| Property          | Type       | Default | Description                                                                                                                                            |
| ----------------- | ---------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `animation`       | `string`   |         | Animation (see [Animations](#animations)). When specified causes the content to be shown using this animation, or hidden when `hide` it set to `true`. |
| `duration`        | `number`   | `1000`  | Length of the animation (milliseconds)                                                                                                                 |
| `delay`           | `number`   | `0`     | Amount of msec to wait before starting the animation                                                                                                   |
| `easing`          | `function` |         | Easing function to define the curve                                                                                                                    |
| `useNativeDriver` | `boolean`  | `true`  | Use the native-driver. All clipping effects naturally support the native-driver, so there is no need to disable this prop.                             | `fade` | `boolean` | `false` | Applies an additional fade in/out effect |
| `onTransitionEnd` | `function` |         | Callback that is called whenever a show or hide transition has occured                                                                                 |
| `debug`           | `boolean`  |         | Enables debug mode and displays the underlying clipping layers                                                                                         |



### Clipped.Fragment

The `Clipped.Fragment` is the core building block for creating clipping effects. Fragments can be nested to combine multiple clipping effects.
See examples for more details.

*Props*

| Property         | Type                      | Description                                                                                              |
| ---------------- | ------------------------- | -------------------------------------------------------------------------------------------------------- |
| `originalWidth`  | `number`                  | Original width of the content                                                                            |
| `originalHeight` | `number`                  | Original height of the content                                                                           |
| `width`          | `number`                  | Clipped width of the fragment                                                                            |
| `height`         | `number`                  | Clipped height of the fragment                                                                           |
| `left`           | `number`                  | X-offset at which the clipped content is displayed                                                       |
| `top`            | `number`                  | Y-offset at which the clipped content is displayed                                                       |
| `translateX`     | `number | Animated.Value` | Translate the content over the x-axis                                                                    |
| `translateY`     | `number | Animated.Value` | Translate the content over the y-axis                                                                    |
| `move`           | `boolean`                 | When set to true, moves the translated content, rather than keeping it in the same place and clipping it |
| `scaleX`         | `number | Animated.Value` | X-scale                                                                                                  |
| `scaleY`         | `number | Animated.Value` | Y-scale                                                                                                  |
| `rotateX`        | `number | Animated.Value` | x-rotation                                                                                               |
| `rotateY`        | `number | Animated.Value` | Y-rotation                                                                                               |
| `rotateZ`        | `number | Animated.Value` | Z-rotation                                                                                               |
| `opacity`        | `number | Animated.Value` | Opacity                                                                                                  |
| `perspective`    | `number | Animated.Value` | Perspective                                                                                              |
| `debug`          | `boolean`                 | Enables debug mode and displays the underlying clipping layers                                           |


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

The list of animations is also accessible as an array of strings:

```js
import * as Clipped from 'react-native-clipped';
console.log(Clipped.Animations); // ['clipLeft', 'clipRight', ...
```


## License <!-- omit in toc -->

[MIT](./LICENSE.txt)

## Cool? <!-- omit in toc -->

Do you think this cool and useful? Consider buying me a morning coffee!<br/><a href="https://www.buymeacoffee.com/ijzerenhein" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>
