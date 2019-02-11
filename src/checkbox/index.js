import React, { useState } from 'react'

export default function useCheckbox(options = []) {
  const [value, setValue] = useState(options)

  const setChecked = key => {
    const eqKey = i => i.key === key

    const index = value.findIndex(eqKey)
    const option = value[index]

    setValue([
      ...value,
      {
        ...option,
        checked: !option.checked
      }
    ])
  }

  return {
    options: value,
    setChecked
  }
}