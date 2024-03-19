import { FaSun, FaMoon } from 'react-icons/fa';
import { Dropdown } from '../dropdown/index.dropdown';
import { useTheme } from '../../hooks/useTheme';
import Button from '../button/Button';

const NavBar = () => {

    const navItems = [
        { text: 'Login', variant: "text" },
        { text: 'Register', variant: "filled" }
    ];

    const logo = [
        { src: '/images/Reachdog_secondary_shadow_small.png' },
        { src: '/images/Reachdog_primary_fog_small.png' },
    ];

    const { theme, handleChangeTheme } = useTheme();


    return (
            <header id="navBar" className="flex justify-between items-center w-full h-full min-h-[10vh] bg-white dark:bg-[#24262F] p-3 sticky top-0 z-50">
                <Button
                    href="/"
                    variant="text"
                    newpage={{ target: "_self", rel: "noreferrer" }}
                    className="py-0 px-0"
                >
                    <img src={theme === "light" ? logo[0].src : logo[1].src}
                        alt="Reach Dog"
                        className='h-7 w-auto'
                    />
                </Button>
                {/* Navegación */}

                <nav className="flex justify-between items-center">
                    {/* Enlaces para dispositivos de escritorio */}
                    <ul className='md:flex hidden md:flex-row md:items-center gap-1 mr-2'>
                        {/* Botón de cambio de tema */}
                        <li className='hidden md:block mr-6'>
                            <Button
                                variant='text'
                                onClick={() => handleChangeTheme()}
                                className="focus:outline-none rounded-none text-xs font-normal"
                            >
                                {theme === "light" ? <FaMoon /> : <FaSun />}
                            </Button>
                        </li>

                        {navItems.map((item, index) => (
                            <li key={index} className="">
                                <Button
                                    href="#"
                                    variant={item.variant}
                                    newpage={{ target: "_self", rel: "noreferrer" }}
                                    className={`inline-block text-xs ${item.variant === "text" ? 'text-green-400' : 'text-white'}`}
                                >
                                    {item.text}
                                </Button>
                            </li>
                        ))}


                    </ul>

                    <Dropdown navItems={navItems} />
                </nav>
            </header>

    );
};

export default NavBar;
