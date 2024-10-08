import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

export default function MobileNavbar({ navigation, handleLinkClick }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open
    const mobileItems = navigation.filter(item => item.icon);

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
        // Close the dropdowns when the main menu is toggled
        if (isMenuOpen) {
            setOpenDropdown(null); // Close all dropdowns
        }
    };

    const handleDropdownToggle = (name) => {
        // Close the menu when toggling the dropdown
        setIsMenuOpen(true); 
        setOpenDropdown(prev => (prev === name ? null : name)); // Toggle dropdown
    };

    return (
        <>  
            <nav className="fixed bottom-0 block lg:hidden left-0 w-full h-16 border-t border-opacity-20 border-gray-700 bg-white z-20">
                <div className="flex h-full items-center relative ">
                    {mobileItems.map((item, id) => (
                        <Link
                            key={id}
                            to={item.to}
                            onClick={() => handleLinkClick(item)}
                            className={`flex w-1/4 h-full flex-col items-center justify-center text-xl ${item.current ? 'bg-primary text-white' : 'text-primary bg-white'} transition-all duration-300 ease-in-out`}
                            aria-current={item.current ? 'page' : undefined}
                        >
                            <FontAwesomeIcon icon={item.icon} />
                        </Link>
                    ))}

                    <button
                        onClick={toggleMenu}
                        className={`flex flex-col items-center justify-center py-2 w-1/4 h-full text-xl ${isMenuOpen ?'bg-primary text-white' : 'text-primary bg-white'} transition-all duration-300 ease-in-out`}
                    >
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>

                <div
                    onClick={() => {
                        setIsMenuOpen(false);
                        setOpenDropdown(null); // Close all dropdowns when the menu is closed
                    }}
                    className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-20 z-10 transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                />

                <div
                    className={`fixed bottom-0 overflow-hidden right-0 w-fit pb-2 h-full bg-white z-30 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}
                >
                    <div className="flex flex-col pt-16 gap-6 items-center h-full relative">
                        {navigation.map((item, index) => (
                            <div key={`menu-item-${index}`} className={`px-3 text-xl md:text-lg text-end transition-all duration-300 ease-in-out w-full`}>
                                <Link
                                    to={item.to}
                                    onClick={(e) => {
                                        if(item.dropdown){
                                            e.preventDefault();
                                            handleDropdownToggle(item.name);
                                        }
                                        else if (!item.dropdown){
                                            setIsMenuOpen(false)
                                            handleLinkClick(item)
                                        }
                                    }}
                                    className={`flex items-center text-end justify-end transition-all duration-300 ease-in-out ${openDropdown === item.name ? 'text-primary mb-3 md:mb-5' : 'text-secondary'}`}
                                >
                                    <FontAwesomeIcon
                                        icon={faChevronDown}
                                        aria-hidden="true"
                                        className={`text-xl transition-all duration-100 ease-in-out ${item.dropdown ? 'block' : 'hidden'} ${openDropdown === item.name ? 'rotate-180 text-primary ' : ''}`}
                                    />
                                    <p className='pl-4'>{item.name}</p>
                                </Link>
                                
                                {item.dropdown && (
                                <div
                                    className={`flex flex-col w-full gap-3 bg-opacity-55  bg-gray-100 ${openDropdown === item.name ? 'h-fit opacity-100 -mb-2 md:mb-0 md:my-2' : 'h-0 opacity-0 overflow-hidden'}`}
                                >
                                    {item.dropdown.map((subItem) => (
                                        <Link
                                            key={subItem.name}
                                            to={subItem.to}
                                            onClick={() => {
                                                setIsMenuOpen(false);
                                                setOpenDropdown(null); // Close dropdown when a sub-item is clicked
                                            }}
                                            className="md:text-sm text-secondary w-full px-5"
                                        >
                                            {subItem.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                            </div>
                        ))}
                        <div className='flex justify-around px-4 gap-5 absolute bottom-3'>
                            <a href='https://web.facebook.com/ahmedalshriefdentalclinics' target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebook} className='text-secondary md:text-xl' />
                            </a>
                            <a href='https://bootstrapmade.com/content/demo/DevFolio/portfolio-details.html' target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} className='text-secondary md:text-xl' />
                            </a>
                            <a href='https://bootstrapmade.com/content/demo/DevFolio/portfolio-details.html' target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faTiktok} className='text-secondary md:text-xl' />
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
