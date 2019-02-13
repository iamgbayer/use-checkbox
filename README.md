# Hooks for checkbox

# How use?

The checkboxes options is based in an array of objects, and at each object the key propriety is required.

See the example.

```js
const options = [
  {
    key: 'bacon',
    label: 'Bacon'
  },
  {
    key: 'apple',
    label: 'Apple'
  }
]

const [checkboxes, setChecked] = useCheckbox(options)
```

# License

[MIT © Guilherme Bayer](https://github.com/guuibayer/use-checkbox/blob/master/LICENSE.md)
