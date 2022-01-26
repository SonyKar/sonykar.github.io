import { React } from 'react';
import './Footer.css';

function Footer() {
    let date = new Date().getFullYear();
    if (date > 2022) {
        date = "2022-" + date;
    }

    return (
        <footer>
            <p>© {date} by Alexandrin Caraganciu</p>
        </footer>
    );
}

export default Footer;