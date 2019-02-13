# Hooks for checkbox

# How use?

The checkboxes options is based in an array of objects, and at each object the **key** and **checked** propriety is required.

See the example.

```js
const options = [
  {
    key: 'bacon',
    label: 'Bacon',
    checked: true
  },
  {
    key: 'apple',
    label: 'Apple',
    checked: false
  }
]

const {checkboxes, setChecked} = useCheckbox(options)
```

# Demo
[![Edit Checkbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/74x4r9l6o0)

# License

[MIT © Guilherme Bayer](https://github.com/guuibayer/use-checkbox/blob/master/LICENSE.md)
