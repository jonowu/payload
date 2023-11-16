export type Props = {
  addRow: (current: number, blockType?: string) => void
  duplicateRow: (current: number) => void
  hasMaxRows: boolean
  index: number
  moveRow: (from: number, to: number) => void
  removeRow: (index: number) => void
  rowCount: number
}
