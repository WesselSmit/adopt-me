import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'


let modalRoot


const Modal = ({ children }) => {
  const elRef = useRef(null)
  modalRoot = modalRoot ? modalRoot : document.getElementById('modal')

  if (!elRef.current) {
    elRef.current = document.createElement('div')
  }

  useEffect(() => {
    modalRoot.appendChild(elRef.current)

    return () => modalRoot.removeChild(elRef.current)
  }, [])

  return createPortal(<div>{children}</div>, elRef.current);
}


export default Modal
