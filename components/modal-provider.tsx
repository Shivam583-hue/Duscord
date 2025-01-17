"use client"

import { Suspense } from "react"
import CreateServerModal from "@/components/CreateServerModal"

const ModalContent = () => {
  return (
    <>
      <CreateServerModal />
    </>
  )
}

export const ModalProvider = () => {
  return (
    <Suspense fallback={null}>
      <ModalContent />
    </Suspense>
  )
}
