import { on, showUI } from '@create-figma-plugin/utilities'

export default function () {
  on('RESIZE_WINDOW', function ({width, height }: {
    width: number,
    height: number
  }) {
    figma.ui.resize(width, height)
  })
  showUI({
    height: 200,
    width: 200
  })
}
