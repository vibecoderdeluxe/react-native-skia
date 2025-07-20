# Sector Game

This folder contains the initial React Native project for the *Sector* learning game. The project is created inside the `react-native-skia` monorepo so that it can use the latest version of `@shopify/react-native-skia` from the workspace.

At this early stage the app only renders a single circle using Skia to confirm that the graphics engine is set up correctly.

## Running

Install dependencies from the repository root:

```bash
yarn install
```

Then start Metro and run the platform specific build:

```bash
# iOS
cd apps/sector && yarn ios

# Android
cd apps/sector && yarn android
```

This assumes that a standard React Native development environment is already configured on your machine.
