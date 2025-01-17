import { create } from "zustand"

export type ModalType = "createServer"

interface ModalStore {
  type: ModalType | null
  isOpen: boolean
  onOpen: (type: ModalType) => void
  onClose: () => void
}

export const useModal = create<ModalStore>((set) => ({
  type: null,
  isOpen: false,
  onOpen: (type) => set({ isOpen: true, type }),
  onClose: () => set({ type: null, isOpen: false })
}))

// Create stable selector functions
const selectType = (state: ModalStore) => state.type
const selectIsOpen = (state: ModalStore) => state.isOpen
const selectOnOpen = (state: ModalStore) => state.onOpen
const selectOnClose = (state: ModalStore) => state.onClose

// Export hooks for individual pieces of state
export const useModalType = () => useModal(selectType)
export const useModalIsOpen = () => useModal(selectIsOpen)
export const useModalOnOpen = () => useModal(selectOnOpen)
export const useModalOnClose = () => useModal(selectOnClose)
