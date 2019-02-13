import React from 'react'
import { cleanup, testHook, act } from 'react-testing-library'

import { useCheckbox } from 'index'

afterEach(cleanup)

const options = [
  {
    key: 'bacon',
    label: 'Bacon',
    checked: false
  },
  {
    key: 'apple',
    label: 'Apple',
    checked: false
  }
]

test('should have inital state intact', () => {
  let checkboxes

  testHook(() => ({checkboxes} = useCheckbox(options)))

  expect(checkboxes).toEqual(options)
})

test('should apple option checked and unchecked', () => {
  let checkboxes, setChecked

  testHook(() => ({checkboxes, setChecked} = useCheckbox(options)))

  expect(checkboxes[1].checked).toBe(false)

  act(() => setChecked('apple'))
  expect(checkboxes[1].checked).toBe(true)
  expect(checkboxes[0].checked).not.toBe(true)

  act(() => setChecked('apple'))
  expect(checkboxes[1].checked).toBe(false)
})
