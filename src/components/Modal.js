import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'


const Modal = ({ children }) => {
  const elRef = useRef(null)
  const ModalRoot = document.getElementById('modal')

  if (!elRef.current) {
    elRef.current = document.createElement('div')
  }

  useEffect(() => {
    ModalRoot.appendChild(elRef.current)

    return () => ModalRoot.removeChild(elRef.current)
  }, [])

  return createPortal(<div>{children}</div>, elRef.current);
}


export default Modal
