/** @jsx h */
import { h } from 'preact'
import './segmented-control.scss'

export function SegmentedControl ({ options, name, value, ...rest }) {
  return (
    <div class='segmented-control'>
      {options.map(function (option) {
        return (
          <div class='segmented-control__item' key={option}>
            <input
              {...rest}
              class='segmented-control__input'
              type='radio'
              id={option}
              name={name}
              value={option}
              checked={value === option}
            />
            <label class='segmented-control__label' for={option}>
              {option}
            </label>
          </div>
        )
      })}
    </div>
  )
}
