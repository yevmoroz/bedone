## BeDone

Imagine the world where tasks are easy to complete and track.

## How to use

The app is published to Expo and can be used via Expo Go app. Follow [this link](https://expo.dev/@yevmoroz/bedone?serviceType=classic&distribution=expo-go) to scan QR code to open the app on your phone. You may need to have Expo Go installed on [Android](https://play.google.com/store/apps/details?id=host.exp.exponent) or [iOS](https://apps.apple.com/ca/app/expo-go/id982107779)

## Considerations
- `ThemeProvider` vs `Theme`. Okay for now, cleaner code is more advantageuos rather than too much providers that might affect performance or have negative impact on other providers
- colors needs more contrast, hurts UX a bit but need time to make better design
- we can make use of `useRef` and `useCallback` for a better optimization on reference objects. optional given the scale of the app, but callbacks that use more than one call opt for this already
- `@expo/vector-icons` is [built](https://docs.expo.dev/guides/icons/#expovector-icons) on top of `react-native-vector-icons`
- further breakdown of `TaskDetails` into a few more components, currently not needed because app is not that complex. it is possible to save task with no information
- full distribution will be realised soon, but out of scope for now
- Task `data` could be useful to migrate to state, but only when it's bound to persitent storage
- CI/CD is set up, so every change to master publishes changes live

### Development

Install dependencies with `npm install`.
Start developement by running regular `npm start`. Follow on screen prompt to setup expo on iOS/Android device.
Beware, if you don't have iOS or Android simulator, you will need to install some, follow the on-screen instructions from `npm start` command.

### References
- [Expo](https://expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Feature based archtecture](https://www.freecodecamp.org/news/scaling-your-redux-app-with-ducks-6115955638be/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Node.js](https://nodejs.org/)
