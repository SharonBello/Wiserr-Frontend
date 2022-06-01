import React from 'react'
import { HeroCarousel } from '../cmps/headers/hero-carousel.jsx'
import { CategoriesCarousel } from '../cmps/homepage-sections/categories-carousel.jsx'
import { SellingPropHomepage } from '../cmps/homepage-sections/selling-prop-homepage.jsx'
import { TestimonialsHomepage } from '../cmps/homepage-sections/testimonials-homepage.jsx'
import { IconCategories } from '../cmps/homepage-sections/icon-categories.jsx'
import { SellerSectionHomepage } from '../cmps/homepage-sections/seller-section-homepage.jsx'

export const HomePage = () => {
    return (
        <section>
            <HeroCarousel />
            <section className="trusted-by-brands">
                <ul className="brands-container container">
                    <p>Trusted By:</p>
                    <li className="trusted-by">FACEBOOK</li>
                    <li className="trusted-by">Google</li>
                    <li className="trusted-by">NETFLIX</li>
                    <li className="trusted-by ">P&G</li>
                    <li className="trusted-by">PAYPAL</li>
                </ul>
            </section>

            <div className="gig-slider-container container">
                    <h2>Popular professional services</h2>
                    <CategoriesCarousel />
            </div>
                <SellingPropHomepage />
                <div className="container">
                <IconCategories />
                </div>
                
                <SellerSectionHomepage />
                
                <TestimonialsHomepage />
        </section>
    )
}


