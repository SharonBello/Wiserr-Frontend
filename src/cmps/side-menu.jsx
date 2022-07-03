import { NavLink, useNavigate } from 'react-router-dom'

export const SideMenu = ({ menuOpen, user, closeMenu }) => {
    const navigate = useNavigate()
    const className = (menuOpen) ? "open" : ""

    const openJoin = () => {
        closeMenu()
        navigate('/signup')
    }

    return (
        <section className={`side-bar ${className}`}>
            <div className="side-bar-content">
                <div className="menu-header">
                    {!user && <button className="btn" onClick={() => { openJoin() }}>Join Wiserr</button>}
                </div>
                <nav className='menu-nav'>
                    <ul className='clean-list'>
                        <li className='menu-item'><NavLink onClick={() => closeMenu()} to="/">Home</NavLink></li>
                        <li className='menu-item'><NavLink onClick={() => closeMenu()} to="/categories">Explore</NavLink></li>
                        <li className='menu-item'><NavLink onClick={() => closeMenu()} to="/seller/dashboard">Wiserr Seller</NavLink></li>
                    </ul>
                </nav>
            </div>
        </section>
    )
}