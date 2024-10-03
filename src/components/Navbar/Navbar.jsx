import { useState, useEffect } from 'react';
// import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';
import { faHome, faCalendarPlus, faMapLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    const [navigation, setNavigation] = useState([
        { name: 'الرئيسية', to: '/', current: true, icon: faHome },
        { name: 'حجز موعد', to: '/book', current: false, icon: faCalendarPlus },
        { name: 'خدمات المركز', to: '/#services', current: false, isOpen: false, dropdown: [
            { name: 'زراعة الاسنان', to: '/services/consulting' },
            { name: 'عمليات ضرس العقل', to: '/services/consulting' },
            { name: 'التقويم', to: '/services/consulting' },
            { name: 'الحشوات التجميلية', to: '/services/consulting' },
            { name: 'تنظيف الأسنان', to: '/services/consulting' },
        ] },
        { name: 'تجارب عملائنا', to: '/projects', current: false },
        { name: 'عن المركز', to: '/about', current: false},
        { name: 'العنوان', to: '/#map', current: false, icon: faMapLocationDot },
        { name: 'تواصل معانا', to: '/#contact', current: false },
    ]);

    // Handle navigation link click
    const handleLinkClick = (item) => {
        const targetElement = document.getElementById(item.to.substring(2));
        if (targetElement !== null) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        // Update only if the clicked item is different
        setNavigation((prevNavigation) =>
            prevNavigation.map((navItem) => ({
                ...navItem,
                current: navItem.name === item.name, // Only set the clicked item as current
            }))
        );
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
        const sectionIds = navigation.map((item) => item.to.substring(2));
        const sectionElements = sectionIds.map((id) => document.getElementById(id));

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.3,
        };

        const observerCallback = (entries) => {
            let activeItem = null; // Store the new active item

            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    activeItem = navigation.find(navItem => navItem.to.substring(2) === entry.target.id);
                }
            });

            // Only update if the active item has changed
            if (activeItem) {
                setNavigation((prevNavigation) =>
                    prevNavigation.map((navItem) => ({
                        ...navItem,
                        current: navItem.name === activeItem.name, // Only set the intersecting item as current
                    }))
                );
            }
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        sectionElements.forEach((element) => {
            if (element) observer.observe(element);
        });

        return () => {
            sectionElements.forEach((element) => {
                if (element) observer.unobserve(element);
            });
        };
    }, [navigation]);

    return (
        <>
            <MobileNavbar navigation={navigation} handleLinkClick={handleLinkClick} toggleDropdown={toggleDropdown} />
            {/* <DesktopNavbar navigation={navigation} handleLinkClick={handleLinkClick} /> */}
        </>
    );
}
