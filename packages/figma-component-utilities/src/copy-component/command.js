/* global figma */
import {
  formatErrorMessage,
  formatSuccessMessage,
  mapNumberToWord,
  pluralize
} from '@create-figma-plugin/utilities'
import { OFFSET } from '../constants'

export default async function () {
  const components = figma.currentPage.selection.filter(function (layer) {
    return layer.type === 'COMPONENT'
  })
  if (components.length === 0) {
    figma.closePlugin(formatErrorMessage('No components in selection'))
    return
  }
  const newSelection = []
  for (const component of components) {
    const clone = component.clone()
    clone.x = component.x + OFFSET
    clone.y = component.y + OFFSET
    newSelection.push(clone)
  }
  figma.currentPage.selection = newSelection
  figma.closePlugin(
    formatSuccessMessage(
      `Copied ${pluralize(
        components.length,
        'component',
        `${mapNumberToWord(components.length)} components`
      )}`
    )
  )
}