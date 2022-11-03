# Fondue Catcher

We are a team of 2 developers working on a prototype for a game 
in which the user catches pieces of bread with a fondue pot.
</br>
If he catches a piece of bread, he gets points. If he misses, he loses points.

There are snowflakes falling from the sky, which the user can catch with the fondue pot.</br>
If he catches a snowflake, he gets a penalty point subtracted from his score.
The game ends when the user has 0 points left.

## How to play

The user can move the fondue pot using his finger on the screen.</br>
The fondue pot will follow the finger.

The user has to catch the pieces of bread that are falling from the sky.</br>

## How to install

As this project is a prototype, it is not yet available on the Google Play Store or the Apple App Store.</br>

### Android

To install the game on an Android device, you can download the APK file from the [releases](https://github.com/Bissbert/FondueCatcher/releases) page.</br>
You can then install the APK file on your device.

### iOS

To install the game on an iOS device, you can download the IPA file from the [releases](https://github.com/Bissbert/FondueCatcher/releases) page.</br>
You can then install the IPA file on your device.

### From source

To install the game from source, you need to have [Node.js](https://nodejs.org/en/) installed.</br>
You can then clone the repository and run the following commands:

```bash
## Install dependencies for npm
npm install

## install the pods
cd ios
pod install
cd ..

## run the app on ios simulator
npm run ios

## run the app on android simulator
npm run android
```

## How to contribute

If you want to contribute to the code, you can create a new branch and create a pull request.</br>

For information on how to run it locally, see the [How to install from source](#from-source) section.
