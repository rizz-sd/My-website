
import { Menubar } from 'primereact/menubar';
import 'primereact/resources/themes/lara-dark-indigo/theme.css';
import { Component } from 'react';


export default function Navbar() {
    
    const items = [
        {
        label: "Home",
        url: "/my-website/",
    },
    {
        label: "About Me",
        url: "/my-website/about/",
    },
    {
        label: "Contact Me",
        url: "/my-website/contact/"
    }

    ];
    return (
        <div>
            <Menubar model={items} />
        </div>
    );
}