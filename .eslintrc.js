module.exports = {
  "extends": "airbnb",
  "env": {
    "jest/globals": true
  },
  "rules": {
    "jsx-a11y/href-no-hash": "off",
    "jsx-a11y/anchor-is-valid": ["warn", { "aspects": ["invalidHref"] }]
  },
  "globals": {
    "document": false,
    "window": false,
  },
  "plugins": [
    "jest"
  ]
};
