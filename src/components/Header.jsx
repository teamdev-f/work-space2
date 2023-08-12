import React from 'react';
import Logo from './Logo';
import Menu from './Menu';


function TopPage() {
    const menuItems = [
        {name: "Home", url: "/" },
        {name: "Drink", url: "/drink"},
        {name: "Sweets", url: "/sweets"},
        {name: "Food", url: "/food"},
        {name: "Contact", url: "/contact"}
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