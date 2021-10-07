import { render } from '@create-figma-plugin/ui'
import { emit } from '@create-figma-plugin/utilities'

import { useWindowSize } from './use-window-size'

function Plugin() {
  useWindowSize(function (size: { width: number, height: number }) {
    emit('RESIZE_WINDOW', size)
    console.log(size)
  }, { toggleWindowSizeOnDoubleClick: true, maxWidth: 400, maxHeight: 400 })
  return null
}

export default render(Plugin)
