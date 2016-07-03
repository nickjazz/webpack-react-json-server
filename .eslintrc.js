module.exports = {
  "parserOptions": {
      "ecmaVersion": 7,
      "sourceType": "module",
      "ecmaFeatures": {
          "jsx": true,
      }
  },
  "plugins": [
    "react"
  ],
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "rules": {
    "comma-dangle" : 0
  },
  "settings": {
    "react": {
      "pragma": "React",
      "version": "^15.1.0"
    }
  },
  "globals": {
      "require": true,
      "document": true,
      "module": true
  }
}
