module.exports = {
    "extends": "airbnb",
    "rules": {
      "jsx-a11y/href-no-hash": "off",
      "jsx-a11y/anchor-is-valid": ["warn", { "aspects": ["invalidHref"] }]
    },
    "globals": {
      "document": false,
      "window": false
    }
};