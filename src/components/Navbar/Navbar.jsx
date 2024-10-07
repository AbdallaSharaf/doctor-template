import { useState, useEffect } from 'react';
// import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';
import { faHome, faCalendarPlus, faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom'; // Import useLocation

export default function Navbar() {
    const location = useLocation(); // Get the current location
    const [navigation, setNavigation] = useState([
        { name: 'الرئيسية', to: '/', current: false, icon: faHome },
        { name: 'حجز موعد', to: '/book', current: false, icon: faCalendarPlus },
        { name: 'خدمات المركز', to: '/services', current: false, isOpen: false, dropdown: [
            { name: 'زراعة الاسنان', to: '/services/زراعة الاسنان' },
            { name: 'عمليات ضرس العقل', to: '/services/عمليات ضرس العقل' },
            { name: 'التقويم', to: '/services/التقويم' },
            { name: 'الحشوات التجميلية', to: '/services/الحشوات التجميلية' },
            { name: 'تنظيف الأسنان', to: '/services/تنظيف الأسنان' },
        ] },
        { name: 'تجارب عملائنا', to: '/gallery', current: false },
        { name: 'عن المركز', to: '/#about', current: false },
        { name: 'العنوان', to: '/#map', current: false, icon: faMapLocationDot },
        { name: 'تواصل معانا', to: '/#contact', current: false },
    ]);

    // Handle navigation link click
    const handleLinkClick = (item) => {
        if (item.to === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const targetElement = document.getElementById(item.to.substring(2));
            if (targetElement !== null) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    const toggleDropdown = (name) => {
        setNavigation((prevNavigation) =>
            prevNavigation.map((item) => {
                if (item.name === name) {
                    return { ...item, isOpen: !item.isOpen };
                }
                return item;
            })
        );
    };

    useEffect(() => {
        setNavigation((prevNavigation) =>
            prevNavigation.map((navItem) => ({
                ...navItem,
                current: navItem.to === location.pathname // Compare directly with the current pathname
            }))
        );
    }, [location.pathname]); // Run this effect when the pathname changes

    return (
        <>
            <MobileNavbar navigation={navigation} handleLinkClick={handleLinkClick} toggleDropdown={toggleDropdown} />
        </>
    );
}
