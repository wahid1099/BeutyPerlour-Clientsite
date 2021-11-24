import React from 'react';
import TopBanner from "../Component/TopBanner/TopBanner";
import OurServics from "../Component/Services/OurServics";
import SkinCare from "../Component/Skincare/SkinCare";
import Testimonials from "../Component/Testimonial/Testimonials";
import Contactus from "../Component/ContactUs/Contactus";
import Footer from "../Component/Footer/Footer";

const HomePage = () => {
    return (
        <div>

            <TopBanner></TopBanner>
            <OurServics></OurServics>
            <SkinCare></SkinCare>
            <Testimonials></Testimonials>
            <Contactus></Contactus>

        </div>
    );
};

export default HomePage;