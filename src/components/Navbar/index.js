import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

function Navbar() {
    const [collapseButton, setCollapseButton] = useState('');
    const [ariaExpanded, setAriaExpanded] = useState('false');
    const [navbarCollapse, setNavbarCollapse] = useState('');
    const [navbarStyle, setNavbarStyle] = useState({});

    async function collapse() {
        setNavbarCollapse('collapsing');

        setNavbarStyle({ height: '268px' });

        await setTimeout(() => {  
            setNavbarStyle({});
            
            if (collapseButton === '') {
                setNavbarCollapse('show')
                
                setCollapseButton('collapsed');
                
                setAriaExpanded('true');
            } else {
                setNavbarCollapse('');

                setCollapseButton('');
        
                setAriaExpanded('false');
            }
        }, 200);
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <Link className="navbar-brand" to="/">Home</Link>

            <button
                className={`navbar-toggler ${collapseButton}`}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded={ariaExpanded}
                aria-label="Toggle navigation"
                onClick={collapse}
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div
                className={`collapse navbar-collapse ${navbarCollapse}`}
                id="navbarSupportedContent"
                style={navbarStyle}
            >
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/register">Cadastro</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/heatmap">Mapa de calor</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;