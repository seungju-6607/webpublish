import { Logo } from "./header/Logo.jsx";


export function Header() {
    return (
        <header className="header">
            <Logo img="/images/favicon.ico" name="Judy"/>

            <nav>
                <ul className="header-menu">
                    <li><a href="#home" className="header-menu-item active">Home</a></li>
                    <li><a href="#about" className="header-menu-item">About</a></li>
                    <li><a href="#skill" className="header-menu-item">Skill</a></li>
                    <li><a href="#work" className="header-menu-item">My Work</a></li>
                    <li><a href="#testimonial" className="header-menu-item">Testimonial</a></li>
                    <li><a href="#contact" className="header-menu-item">Contact</a></li>
                </ul>
            </nav>
            <button id="menu_toggle" className="header-toggle">
                <i className="fa-solid fa-bars"></i>
            </button>
        </header>
    );
}
