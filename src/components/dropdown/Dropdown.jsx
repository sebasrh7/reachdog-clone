import { DropdownToggle, DropdownMenu, DropdownItem } from './index.dropdown';
import { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaMoon, FaSun } from 'react-icons/fa';
import Button from '../button/Button';
import { useTheme } from '../../hooks/useTheme';
import changeBodyOverflow from '../../utils/changeBodyOverflow';

const Dropdown = ({ navItems }) => {

  const { theme, handleChangeTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const DropdownMenuRef = useRef(null); // Referencia al DropdownMenu

  const toggleDropdown = () => {
    setIsOpen(!isOpen);

    if (!isOpen) {
      changeBodyOverflow('hidden'); // Se oculta el scroll
    } else {
      changeBodyOverflow('auto'); // Se habilita el scroll
    }
  };

  const closeDropdownMenu = (e) => { // Función para cerrar el DropdownMenu
    if (DropdownMenuRef.current === e.target) { // Si el DropdownMenu es igual al evento target (click)
      setIsOpen(false); // Se cierra el DropdownMenu
      changeBodyOverflow('auto'); // Se habilita el scroll
    }
  };

  const keyPress = (e) => { // Si se presiona la tecla ESC, se cierra
    if (e.key === 'Escape' && isOpen) {  // Si la tecla es igual a ESC y el DropdownMenu está abierto
      setIsOpen(false); // Se cierra el DropdownMenu
      changeBodyOverflow('auto'); // Se habilita el scroll
    }
  };

  useEffect(() => { // Se agrega el evento al cargar el componente
    document.addEventListener('keydown', keyPress); // Se agrega el evento para cerrar el DropdownMenu con la tecla ESC
    return () => document.removeEventListener('keydown', keyPress); // Se remueve el evento al desmontar el componente
  }, [keyPress]); // Se agrega la dependencia keyPress para que se ejecute el useEffect al cargar el componente y al desmontar el componente

  return (
    <div className="md:hidden relative inline-block text-left" >
      <DropdownToggle toggleDropdown={toggleDropdown} icon={isOpen ? <FaTimes /> : <FaBars />} />
      {isOpen &&
        <div
          ref={DropdownMenuRef}
          onClick={closeDropdownMenu}
          className="fixed inset-0 -z-20 bg-white bg-opacity-50 dark:bg-[#1F1E24] dark:bg-opacity-50 backdrop-blur-[1px]"

        >
          <DropdownMenu >
            <DropdownItem>
              <Button
                variant='text'
                onClick={() => handleChangeTheme()}
                className="focus:outline-none text-xs w-full font-normal flex items-center hover:bg-[#DADBDB] dark:hover:bg-[#373A45] rounded-md"
              >
                {theme === "light" ? <FaMoon /> : <FaSun />}
                <span className="ml-3">Change to: {theme === "light" ? <strong>Dark Mode</strong> : <strong>Light Mode</strong>}</span>
              </Button>

            </DropdownItem>

            <hr className="my-1" />

            <div className="mt-3 flex flex-col gap-1.5">
              {navItems.map((item, index) => (
                <DropdownItem key={index}>
                  <Button
                    href="#"
                    variant={item.variant}
                    newpage={{ target: "_self", rel: "noreferrer" }}
                    className={`inline-block text-xs ${item.variant === "text" ? 'text-green-400' : 'text-white'}`}
                  >
                    {item.text}
                  </Button>
                </DropdownItem>
              ))}
            </div>
          </DropdownMenu>
        </div>
      }
    </div>
  );
};

export default Dropdown;