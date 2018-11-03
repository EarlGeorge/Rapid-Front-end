module.exports = {
    
    parser: "babel-eslint",
    // extends: 'airbnb-base',
    
    parserOptions: {
      ecmaVersion: 2016,
      sourceType: "module",
    },

    env: {
        es6: true,
        node: true,
        browser: true
    },

    rules: {
        "strict": 0,
        "linebreak-style": 0,
        "global-require": 0,
        'func-names': 0, 
        'prefer-arrow-callback' : 0, 
        'one-var': 0
    }
};