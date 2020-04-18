module.exports = {
    "extends": ["airbnb", "prettier"],
    'parser': 'babel-eslint',
    "plugins": [
        "react-native" // add eslint-plugin-react-native as a plugin for ESLint
    ],
    'env': {
        'jest': true,
        "react-native/react-native": true // whitelist all browser-like globals
    },
    'rules': {
        "react-native/no-unused-styles": 2, // disallow unused styles
        "react-native/no-inline-styles": 2, // disallow styles declared within the component itself
        "react-native/no-color-literals": 2, // enforces variable names to be used for storing colors
        'no-use-before-define': 'off',
        'react/jsx-filename-extension': 'off',
        'react/prop-types': 'off',
        'comma-dangle': 'off'
    },
    'globals': {
        "fetch": false
    }
}