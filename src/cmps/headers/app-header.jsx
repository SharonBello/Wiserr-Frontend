import React, { useEffect, useState } from 'react'
import { LogoFull, HamburgerMenu, SearchBar } from '../../services/svg.service.js'
import { NavLink, useLocation } from 'react-router-dom'
import { Search } from '../search.jsx'
import { logout } from '../../store/actions/user.actions.js'
import { useSelector, useDispatch } from 'react-redux'
import { ProfileMenu } from './profile-menu.jsx'
import { NavCategories } from './nav--categories.jsx'

export const AppHeader = (props) => {
    const [searchBar, setSearchBar] = useState('hidden')
    const [navHeader, setNavHeader] = useState('hidden')
    const [logo, setLogo] = useState('logo-white')
    const [headerTextColor, setHeaderTextColor] = useState('white')
    const { loggedInUser } = useSelector((storeState) => storeState.userModule)
    const dispatch = useDispatch()
    const [profileMenu, setMenu] = useState(false)

    const [scrolled, setScrolled] = useState(false)

    const { pathname } = useLocation()
    console.log('pathname', pathname)

    const handleScroll = e => {
        setScrolled(window.scrollY > 200)
    }

    useEffect(() => {
        if(pathname === '/'){
        window.addEventListener("scroll", handleScroll)
        }
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [pathname])

    const onLogout = () => {
        dispatch(logout())
        var flag = !profileMenu;
        setMenu(flag);
        // setIsSignIn(false)
        // setLoggedInUser(null)
    }

    const onToggleMenu = () => {
        var flag = !profileMenu;
        setMenu(flag);
    }

    if (loggedInUser && !loggedInUser.imgUrl) {
        loggedInUser.imgUrl = "https://monstar-lab.com/global/wp-content/uploads/sites/11/2019/04/male-placeholder-image.jpeg"
    }

    return (
        <header className={`header container ${scrolled  ? 'scrolled' : ''} ${pathname !=='/' ? 'categories-header' :''}`} >
            <div className="top">
                <div className="logo-search-container">
                    <button className="hamburger-icon">
                        {/* <HamburgerMenu /> */}
                    </button>
                    <div className="logo">
                        <NavLink to="/" className="site-logo">
                            <LogoFull />
                        </NavLink>
                    </div>
                    <form className="search-bar">
                        {scrolled && <Search handleScroll={handleScroll} loc={'appHeader'}/>}
                    </form>
                </div>
                <ul className="nav-list clean-list" >
                    <li>
                        {loggedInUser && <NavLink to="/seller/dashboard" className="seller-nav-link nav-link">Wiserr Seller</NavLink>}
                    </li>
                    <li>
                        <NavLink to="/categories" className="explore-nav-link nav-link">Explore</NavLink>
                    </li>
                    <li>
                        {!loggedInUser && <NavLink to="/login" rel="nofollow" className="open-popup-login nav-link">Sign in</NavLink>}
                        <div className="avatar-container">
                            {loggedInUser && <img className="avatar-img" src={`${loggedInUser.imgUrl}`} onClick={onToggleMenu} alt="Avatar"></img>}
                        </div>
                        <div className="profile-container">
                            {profileMenu && <ProfileMenu onLogout={onLogout} user={loggedInUser} closeMenu={onToggleMenu} />}
                        </div>
                    </li>
                    
                    <li>
                        {!loggedInUser && <NavLink to="/signup" rel="nofollow" className="open-popup-signup nav-link">Join</NavLink>}
                        <div className="profile-container">
                            {profileMenu && <ProfileMenu onLogout={onLogout} user={loggedInUser} closeMenu={onToggleMenu} />}
                        </div>
                    </li>
                </ul>
            </div>

            {(scrolled || (pathname !== '/'))  && <div className="bottom container">
                <NavCategories />
            </div>}
        </header>
    )
}
