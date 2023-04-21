import { Link, NavLink } from 'react-router-dom'
import Logo from './images/gym-logo.png'
import { links } from '../data'
import './navbar.css'

const Navbar = () => {
    return (
        <nav>
            <div className="container nav__container">
                <Link>
                    <img src={Logo} alt="gym-logo" />
                </Link>
                <ul>
                    {

                        links.map(({ name, path }, index) => {
                            return (
                                <li>
                                    <NavLink to={path}>{name}</NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Navbar