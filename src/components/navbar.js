
import { Menubar } from 'primereact/menubar';
import 'primereact/resources/themes/lara-dark-indigo/theme.css';


export default function Navbar() {
    const items = [
        {
        label: "Home",
    },
    {
        label: "About Me"
    },
    {
        label: "Contact Me"
    }

    ];
    return (
        <div>
            <Menubar model={items} />
        </div>
    );
}