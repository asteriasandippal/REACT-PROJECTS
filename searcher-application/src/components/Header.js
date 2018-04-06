import React from 'react';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
            <a className="navbar-brand" href="#/">Searcher Logo</a>
        
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#/">Search</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
