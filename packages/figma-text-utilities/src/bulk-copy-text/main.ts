import {
  formatErrorMessage,
  formatSuccessMessage,
  pluralize
} from '@create-figma-plugin/utilities'

import { getTextNodes } from '../utilities/get-text-nodes'
import { bulkCopyText } from './utilities/bulk-copy-text'

export default async function (): Promise<void> {
  if (figma.currentPage.selection.length === 0) {
    figma.closePlugin(formatErrorMessage('Select one or more text layers'))
    return
  }
  const nodes = getTextNodes()
  if (nodes.length === 0) {
    figma.closePlugin(formatErrorMessage('No text layers in selection'))
    return
  }
  await bulkCopyText(nodes.reverse())
  figma.closePlugin(
    formatSuccessMessage(
      `Copied ${nodes.length} ${pluralize(nodes.length, 'text layer')}`
    )
  )
}