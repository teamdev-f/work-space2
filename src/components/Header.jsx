import React from 'react';
import Logo from './Logo';
import Menu from './Menu';


function TopPage() {
    const menuItems = [
        {name: "Home", url: "index.html" },
        {name: "Drink", url: "#"},
        {name: "Sweets", url: "#"},
        {name: "Food", url: "#"},
        {name: "Contact", url: "#"}
    ];


    return (
        <>
            <header>
                <div className="sticky-top container-fluid navbar-light bg-light">
                    <nav className="container navbar navbar-expand-lg">
                        <Logo />
                        <Menu items={menuItems}/>
                    </nav>
                </div>
            </header>
        </>  
    );  
}

export default TopPage;