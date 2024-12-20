import React, { useState } from 'react';
import { Badge, Collapse } from 'react-bootstrap';
import { FaBars, FaBell, FaChevronDown, FaChevronUp, FaFileAlt, FaFileSignature, FaFolder, FaHome, FaHourglassHalf, FaTasks } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

const SidebarNavigation = ({ children }) => {
    const [collapsed, setCollapsed] = useState(true);
    const [openSubmenu, setOpenSubmenu] = useState(null); // Memorizza quale submenu è aperto

    const location = useLocation(); // Ottieni la posizione corrente della pagina

    // Funzione per determinare se un link è attivo
    const isActive = (path) => location.pathname === path;

    const notifications = useSelector(state => state.notifications);
    const unreadNotifications = notifications.filter(notification => !notification.isRead).length

    const toggleSidebar = () => {
        setOpenSubmenu(null);
        setCollapsed(!collapsed);
    }

    const toggleSubmenu = (submenuIndex) => {
        if (collapsed) {
            toggleSidebar();
        }

        setOpenSubmenu((prev) => (prev === submenuIndex ? null : submenuIndex));
    };

    return (
        <div className={`d-flex ${collapsed ? 'sidebar-collapsed' : ''}`} style={{ backgroundColor: "#00264D" }}>
            {/* Sidebar */}
            <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
                <div className="sidebar-header d-flex justify-content-between align-items-center">
                    <button className="btn btn-dark" onClick={toggleSidebar}>
                        <FaBars />
                    </button>
                </div>

                {/* Menu Items */}
                <ul className={`list-unstyled ${collapsed ? 'collapsed' : ''}`}>
                    <li>
                        <a href="/" className={`menu-item ${isActive('/') ? 'active' : ''}`} >
                            <FaHome size={26} className="menu-icon" />
                            {!collapsed && <span className="menu-text">Homepage</span>}
                        </a>
                    </li>

                    <li>
                        <a href="/documenti-da-compilare" className={`menu-item ${isActive('/documenti-da-compilare') ? 'active' : ''}`} >
                            <FaFileAlt size={26} className="menu-icon" />
                            {!collapsed && <span className="menu-text">Documenti da compilare</span>}
                        </a>
                    </li>

                    <li>
                        <a href="/documenti-da-firmare" className={`menu-item ${isActive('/documenti-da-firmare') ? 'active' : ''}`} >
                            <FaFileSignature size={26} className="menu-icon" style={{marginLeft: "4px"}} />
                            {!collapsed && <span className="menu-text">Documenti da firmare</span>}
                        </a>
                    </li>

                    <li>
                        <a href="/documenti-in-attesa" className={`menu-item ${isActive('/documenti-in-attesa') ? 'active' : ''}`} >
                            <FaHourglassHalf size={26} className="menu-icon" />
                            {!collapsed && <span className="menu-text">Documenti in attesa</span>}
                        </a>
                    </li>

                    <li>
                        <a href="#" onClick={() => toggleSubmenu(1)} className={`menu-item ${(isActive('/firma-massiva/ricerca') || isActive('/firma-massiva/firma') || isActive('/firma-massiva/storico')) ? 'active' : ''}`}>
                            <FaTasks size={26} className="menu-icon" />
                            {!collapsed && <span className="menu-text">Firma massiva</span>}
                            {!collapsed && <span style={{ float: "right" }}>{openSubmenu === 1 ? <FaChevronUp /> : <FaChevronDown />}</span>}
                        </a>
                        <Collapse in={openSubmenu === 1}>
                            <ul className="submenu">
                                <li><a href="/firma-massiva/ricerca">Ricerca</a></li>
                                <li><a href="/firma-massiva/firma">Firma</a></li>
                                <li><a href="/firma-massiva/storico">Storico</a></li>
                            </ul>
                        </Collapse>
                    </li>

                    <li>
                        <a href="#" onClick={() => toggleSubmenu(2)} className={`menu-item ${(isActive('/archivio-documenti/firmati') || isActive('/archivio-documenti/scaduti') || isActive('/archivio-documenti/annullati')) ? 'active' : ''}`}>
                            <FaFolder size={26} className="menu-icon" />
                            {!collapsed && <span className="menu-text">Archivio documenti</span>}
                            {!collapsed && <span style={{ float: "right" }}>{openSubmenu === 2 ? <FaChevronUp /> : <FaChevronDown />}</span>}
                        </a>
                        <Collapse in={openSubmenu === 2}>
                            <ul className="submenu">
                                <li><a href="/archivio-documenti/firmati">Frimati</a></li>
                                <li><a href="/archivio-documenti/scaduti">Scaduti</a></li>
                                <li><a href="/archivio-documenti/annullati">Annullati</a></li>
                            </ul>
                        </Collapse>
                    </li>
                </ul>

                {/* Separatore */}
                <hr />

                {/* Link Notifiche */}
                <ul className={`list-unstyled ${collapsed ? 'collapsed' : ''}`}>
                    <li className="mt-auto"> {/* mt-auto per spingere questo elemento alla fine */}
                        <a href="/notifiche" className={`menu-item ${isActive('/notifiche') ? 'active' : ''}`} >
                            <FaBell size={24} className="menu-icon" />

                            {(collapsed && unreadNotifications > 0) && (
                                <Badge size={8} pill bg="danger" className="ml-2 pulse-notify-animation" style={{ fontSize: '12px', verticalAlign: 'baseline', marginLeft: "-8px" }}>
                                    {unreadNotifications}
                                </Badge>)}

                            {(!collapsed && unreadNotifications > 0) && (<>
                                <span className="menu-text">Notifiche </span>
                                <Badge size={8} pill bg="danger" className="ml-2 pulse-notify-animation" style={{ fontSize: '12px', verticalAlign: 'baseline', marginLeft: "8px" }}>
                                    {unreadNotifications}
                                </Badge></>)}

                            {(!collapsed && unreadNotifications <= 0) && (
                                <span className="menu-text">Notifiche </span>
                            )}

                        </a>
                    </li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="content">
                {children}
            </div>
        </div>
    );
};

export default SidebarNavigation;
