import React, { useState } from 'react'

export default function useCheckbox(options = []) {
  const [value, setValue] = useState(options)

  const setChecked = key => {
    const eqKey = i => i.key === key
    const index = value.findIndex(eqKey)

    value[index].checked = !value[index].checked

    setValue([...value])
  }

  return {
    options: value,
    setChecked
  }
}
