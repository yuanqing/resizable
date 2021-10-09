import { render } from '@create-figma-plugin/ui'
import { emit } from '@create-figma-plugin/utilities'

import { useWindowSize } from './use-window-size'

function Plugin() {
  useWindowSize(function (size: { width: number, height: number }) {
    emit('RESIZE_WINDOW', size)
    console.log(size)
  }, {
    maxWidth: 400,
    maxHeight: 400,
    minHeight: 100,
    minWidth: 100,
    resizeBehaviorOnDoubleClick: 'minimize'
  })
  return null
}

export default render(Plugin)
