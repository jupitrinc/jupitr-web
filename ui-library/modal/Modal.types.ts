export interface ModalProps {
  children: React.ReactNode
  open: boolean
  onClose: (value: boolean) => void
}
