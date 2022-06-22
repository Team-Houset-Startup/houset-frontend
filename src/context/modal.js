import {createContext, useState} from 'react'
import AddAddress from '../modals/AddAddress'

const ModalContext  = createContext()

export function ModalProvider({children}) {
    const [modalIsOpen,setModalIsOpen] = useState(false)

    const activeModal = () => {
        setModalIsOpen(true)
        document.querySelector("body").style.overflow = "hidden";
    }
    const closeModal = () => {
        setModalIsOpen(false)
        document.querySelector("body").style.overflow = "auto";
    }



    return(
        <ModalContext.Provider value={{modalIsOpen,activeModal,closeModal}}>
            {children}
            <AddAddress />
        </ModalContext.Provider>
    )
}
export default ModalContext;