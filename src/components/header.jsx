import {Link} from "react-router-dom";
import './../App.css';

const Header = () => {
    return (
        <div className="App-header">
            <nav>
                <ul className="menu-list">
                    <li><Link className="App-link" to="home">Home</Link></li>
                    <li><Link className="App-link" to="loginandregister">Login</Link></li>
                    <li><Link className="App-link" to="janken">Jankenpon</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;