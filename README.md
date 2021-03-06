# @attakei/bugsnag-firebase

JavaScript Bugsnag wrapper for Cloud Functions.

## Description

This package provides Cloud Functions's wrapper that catch errors and notify to Bugsnag.

Wrapper is very simple because only to catch any errors and push to Bugsnag.

## Installation

This is published at npmjs. Use `npm` or `yarn`

```bash
npm install --save @attakei/bugsnag-firebase
```

```bash
yarn add @attakei/bugsnag-firebase
```

## Usage

When you declare endpoint to Cloud Functions, use busnagFunctions from configureBugsnag instead of firebase-functions.

```nodejs
import { configureBugsnag } from '@attakei/bugsnag-firebase';

const bugsnagFunctions = configureBugsnag({
    // Your bugsnag configurations
    apiKey: 'your-api-key',
});

/**
 * bugsnagFunctions has `https.onCall` that behavior same as original firebase-functions.
 */
export A_HTTPS_CALLABLE = bugsnagFunctions.https.onCall((data, ctx) => {
    return 'hello world';
}))
```


# References

* [JavaScript intergration guid from Bugsnag docs](https://docs.bugsnag.com/platforms/javascript/)
* [Cloud Functions for Firebase](https://firebase.google.com/docs/functions/)
