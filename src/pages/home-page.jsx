import React from "react"
import { connect } from 'react-redux'
import { IconContext } from 'react-icons'
import { LogoFull, LogoFull2, Copyright, HamburgerMenue, Language, RightArrowShowMore } from '../services/svg.service.js'
import {HomeCarousel} from '../cmps/home-carousel.jsx'

class _HomePage extends React.Component {

    // To change react-icon style
    /* <IconContext.Provider value={{color: blue, className: Icon-copyright}}  */

    render() {
        return (
            <section>
                <HomeCarousel/>
                <div className="main-wrapper">
                    <div className="main-header sticky">
                        <div className="header">
                            <header className="logged-out-homepage-header header-transparent">
                                <div className="header-row-wrapper">
                                    <div className="header-row max-width-container equal-padding row-main">
                                        <button className="btn-navicon js-side-nav-trigger">
                                            <HamburgerMenue />
                                        </button>
                                        
                                        <a href="/" className="site-logo">
                                            <LogoFull />
                                        </a>
                                    </div>
                                </div>
                                <nav className="jobqu-nav jobqu-nav-right">
                                    <ul className="nav-list" >

                                        <li className="display-from-md">
                                            <a href="/business" className="business-nav-link nav-link" target="_blank" >Jobqu Business</a>
                                        </li>

                                        <li className="display-from-md">
                                            <div className="resources-tab-package">
                                                <span className="tab-title">Explore</span>
                                            </div>
                                        </li>

                                        <li className="display-from-lg">
                                            <div className="lean-locale-settings">
                                                <div className="locale-settings-popover locale-settings-link locale-setting-language-link locale_settings-package locale-settings-package popover-theme">
                                                    <span className="popover-content">
                                                        <div className="locale-settings-link-title language-selection-title">
                                                            <span className="title-icon" aria-hidden="true"><Language /></span>
                                                            <span className="title-label">English</span>
                                                        </div>
                                                    </span>
                                                    <aside className="popover-box" data-position="bottom">
                                                        <div className="popover-box-content">
                                                            <section className="selection-list">
                                                                {/* <a className="item-row text-body-default" data-locale="en-US"> */}
                                                                    <div className="item-row-content selected">
                                                                        <span className="selected-icon"  aria-hidden="true">
                                                                            {/* <p><English /></p> */}
                                                                        </span>
                                                                    </div>
                                                                {/* </a> */}
                                                                {/* <a className="item-row text-body-default" data-locale="es"> */}
                                                                    <div className="item-row-content">
                                                                        {/* <p><Español /></p> */}
                                                                    </div>
                                                                {/* </a> */}
                                                            </section>
                                                        </div>
                                                    </aside>
                                                </div>

                                                <div className="locale-settings-popover locale-settings-link locale_settings-package locale-settings-package popover-theme">
                                                    <span className="popover-content">
                                                        <div className="currency-selection-title locale-settings-link-title">$ US</div>
                                                    </span>
                                                    <aside className="popover-box" data-position="bottom">
                                                        <div className="popover-box-content">
                                                            <section className="selection-list">
                                                                <button className="item-row text-body-default default-currency-item">
                                                                </button>
                                                                <button className="item-row text-body-default default-currency-item">
                                                                    <div className="item-row-content">
                                                                        <p>
                                                                            <span className="currency-name">Euro</span>
                                                                            <br>
                                                                            </br>
                                                                            <span className="currency-code-symbol">EUR - €</span>
                                                                        </p>
                                                                    </div>
                                                                </button>
                                                            </section>
                                                        </div>
                                                    </aside>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="display-from-md">
                                            <a href="/start_selling" className="nav-link" rel="nofollow">Become a Seller</a>
                                        </li>

                                        <li className="display-from-sm">
                                            <a href="/login" rel="nofollow" className="js-open-popup-login nav-link">Sign in</a>
                                        </li>

                                        <li className="">
                                            <a className="js-open-popup-join jobqu-header-join" rel="nofollow" href="/join">Join</a>
                                        </li>
                                    </ul>
                                </nav>
                            </header>
                        </div>

                        {/* scroll visible catagories menu */}
                        <div id="CategoriesMenu" className="">
                            <div className="categories-menu-wrapper categories_menu-package" data-reactroot="">
                                <nav className="categories-menu-package default has-overflow">

                                    <button className="right">
                                        <span className="icon-chevron" aria-hidden="true">
                                            <RightArrowShowMore />
                                        </span>
                                    </button>

                                    <ul className="categories">
                                        <li className="sub-menu-item target top-level buckets_without_title buckets-without-title">
                                            <a href="/categories/graphics-design" className="">Graphics &amp; Design</a>
                                        </li>

                                        <li className="sub-menu-item target top-level default list">
                                            <a href="/categories/online-marketing">Digital Marketing</a>
                                        </li>

                                        <li className="sub-menu-item target top-level default list">
                                            <a href="/categories/writing-translation" className="">Writing &amp; Translation</a>

                                        </li>

                                        <li className="sub-menu-item target top-level default list">
                                            <a href="/categories/video-animation" className="">Video &amp; Animation</a>
                                        </li>

                                        <li className="sub-menu-item target top-level default list">
                                            <a href="/categories/music-audio">Music &amp; Audio</a>
                                        </li>

                                        <li className="sub-menu-item target top-level default list">
                                            <a href="/categories/programming-tech">Programming &amp; Tech</a>
                                        </li>

                                        <li className="sub-menu-item target top-level default list">
                                            <a href="/categories/business">Business</a>
                                        </li>

                                        <li className="sub-menu-item target top-level default list">
                                            <a href="/categories/lifestyle">Lifestyle</a>
                                        </li>

                                        <li className="sub-menu-item target top-level default static list">
                                            <p className="">Trending</p>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>

                    <div className="hero-wrapper m-b-0 hero-andrea lohp-row">
                        <div className="hero-backgrounds">
                        <div className="hero-andrea">
                            <div className="seller-name max-width-container"><p>Andrea, <b>Fashion Designer</b>
                            </p>
                            </div>
                        </div>
                        <div className="hero-moon">
                            <div className="seller-name max-width-container show-stars"><p>Moon, <b>Marketing Expert</b>
                            </p>
                            </div>
                        </div>
                        <div className="hero-ritika">
                            <div className="seller-name max-width-container"><p>Ritika, <b>Shoemaker and Designer</b>
                            </p>
                            </div>
                        </div>
                        <div className="hero-zach" >
                            <div className="seller-name max-width-container">
                                <p>Zach, <b>Bar Owner</b>
                                </p>
                            </div>
                        </div>
                        <div className="hero-gabrielle">
                            <div className="seller-name max-width-container show-stars">
                                <p>Gabrielle, <b>Video Editor</b>
                                </p>
                            </div>
                        </div>
                    </div>
                        <div className="hero max-width-container">
                            <div className="header">
                                <h1 className="font-domaine">
                                    <span className="">Find the perfect <i>freelance</i> services for your business</span>
                                </h1>
                                <div className="search-bar-package search_bar-package">
                                    <form className="">
                                        <span className="lFICM06 search-bar-icon" aria-hidden="true" >
                                            <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15.8906 14.6531L12.0969 10.8594C12.025 10.7875 11.9313 10.75 11.8313 10.75H11.4187C12.4031 9.60938 13 8.125 13 6.5C13 2.90937 10.0906 0 6.5 0C2.90937 0 0 2.90937 0 6.5C0 10.0906 2.90937 13 6.5 13C8.125 13 9.60938 12.4031 10.75 11.4187V11.8313C10.75 11.9313 10.7906 12.025 10.8594 12.0969L14.6531 15.8906C14.8 16.0375 15.0375 16.0375 15.1844 15.8906L15.8906 15.1844C16.0375 15.0375 16.0375 14.8 15.8906 14.6531ZM6.5 11.5C3.7375 11.5 1.5 9.2625 1.5 6.5C1.5 3.7375 3.7375 1.5 6.5 1.5C9.2625 1.5 11.5 3.7375 11.5 6.5C11.5 9.2625 9.2625 11.5 6.5 11.5Z">

                                        </path>
                                        </svg>
                                        </span>
                                        {/* <input type="search" autocomplete="off" placeholder="Try &quot;building mobile app&quot;" value="" className=""><button className="ORLWF8p _0MkXbqi co-white submit-button bg-co-green-700">Search</button></input> */}
                                    </form>
                                </div>
                                <div className="popular">Popular:
                                    <ul className="">
                                        <li>
                                            <a href="/categories/graphics-design/web-plus-mobile-design?source=hplo_search_tag&amp;pos=1&amp;name=web-plus-mobile-design" className="text-body-2">Website Design</a>
                                        </li>
                                        <li>
                                            <a href="/categories/programming-tech" className="text-body-2">WordPress</a>
                                        </li>
                                        <li>
                                            <a href="/categories/graphics-design" className="text-body-2">Logo Design</a>
                                        </li>
                                        <li>
                                            <a href="/search/gigs" className="text-body-2">NFT Art</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="main-content">
                    </div>
                    <div className="footer-container">
                        <div className="footer-left">
                            <span className="footer-logo">
                                <LogoFull />
                            </span>
                            <p className="text-body-2 legal">
                                <span className="copyright text-trunc">
                                    <Copyright />
                                    Jobqu International Ltd. 2022
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </section >
        )
    }
}


const mapStateToProps = (storeState) => {
    return {
        count: storeState.count
    }
}
export const HomePage = connect(
    mapStateToProps,
)(_HomePage)
