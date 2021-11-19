import { Link } from "react-router-dom";

const Header = () => {

    return (
        <header>
            <nav>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <Link to="/expenses" className="nav-link">Expenses</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/courses" className="nav-link">Courses</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/hooks" className="nav-link">Hooks</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )

}

export default Header;