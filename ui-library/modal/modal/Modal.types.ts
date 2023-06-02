export interface ModalProps {
  children: React.ReactNode
  show: boolean
  onClose: (value: boolean) => void
}
