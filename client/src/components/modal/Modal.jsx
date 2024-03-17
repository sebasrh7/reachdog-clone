import { useEffect, useRef } from 'react';
import changeBodyOverflow from '../../utils/changeBodyOverflow';

const Modal = ({ showModal, setShowModal, children }) => {

    const modalRef = useRef(null); // Referencia al modal
    
    const closeModal = (e) => { // Función para cerrar el modal
        if (modalRef.current === e.target) { // Si el modal es igual al evento target (click)
            setShowModal(false); // Se cierra el modal
            changeBodyOverflow('auto'); // Se habilita el scroll
        }
    };

    const keyPress = (e) => { // Si se presiona la tecla ESC, se cierra
        if (e.key === 'Escape' && showModal) {  // Si la tecla es igual a ESC y el modal está abierto
            setShowModal(false); // Se cierra el modal
            changeBodyOverflow('auto'); // Se habilita el scroll
        }
    };

    useEffect(() => { // Se agrega el evento al cargar el componente
        document.addEventListener('keydown', keyPress); // Se agrega el evento para cerrar el modal con la tecla ESC
        return () => document.removeEventListener('keydown', keyPress); // Se remueve el evento al desmontar el componente
    }, [keyPress]); // Se agrega la dependencia keyPress para que se ejecute el useEffect al cargar el componente y al desmontar el componente

    return (
        <>
            {
                showModal ? (
                    <div
                        ref={modalRef}
                        onClick={closeModal}
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed h-full w-full z-50 top-0 left-0 outline-none focus:outline-none bg-white bg-opacity-50 dark:bg-[#1F1E24] dark:bg-opacity-50 backdrop-blur-[1px]">
                        <div className="relative my-auto py-4 lg:mx-auto mx-4 max-w-2xl">
                            {children}
                        </div>
                    </div>
                ) : null
            }
        </>
    );

}

export default Modal;
