# @attakei/bugsnag-firebase

JavaScript Bugsnag helper for Cloud Functions.

## Installation

This is published at npmjs. Use `npm` or `yarn`

```bash
npm install --save @attakei/bugsnag-firebase
```

```bash
yarn add @attakei/bugsnag-firebase
```

## Usage

When you declare endpoint to Cloud Functions, wrap callable hander.

```nodejs
import { configureBugsnag } from '@attakei/bugsnag-firebase';
import functions from 'firebase-functions';

const bugsnagFunctions = configuerBugsnag('bugsnag-api-key');

/**
 * Wrapper function `observeHttpOnCall` catch internal exception and notify to BugSnag.com
 */
export A_HTTPS_CALLABLE = bugsnagFunctions.https.onCall((data, ctx) => {
    return 'hello world';
}))
```
