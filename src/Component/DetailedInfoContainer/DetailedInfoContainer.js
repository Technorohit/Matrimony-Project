import React from 'react'

export default function DetailedInfoContainer() {
    return (
        <div className="detailed-info-container">
            <div className="tabs">
                <div className="tab1-selected">Detailed Profile</div>
                <div className="tab2">Partner Preference</div>
            </div>

            <div className="about-section">
                <div className="header"><i class="far fa-user"></i><span className="header-name">About Rohit S</span>
                    <div className="body">
                        I am simple thinking guy. Love to enjoy my life with my family.I love to listen music.
                    </div></div>

            </div>
            <div className="about-section">
                <div className="header"><i class="far fa-address-card"></i><span className="header-name">Contact Details</span>
                    <div className="body">
                     <div className="contact-body">
                     Contact Number
                        +91 8368X XXXXX
                        Email ID
                        XXXXXXXXXX@gmail.com
                     </div>
                    </div></div>

            </div>
            <div className="about-section">
                <div className="header"><i class="fas fa-glass-cheers"></i><span className="header-name">Lifestyle</span>
                    <div className="body">
                    <i classname="content-icon" class="fas fa-carrot"></i>
                    </div></div>

            </div>
            <div className="about-section">
                <div className="header"><i class="fas fa-praying-hands"></i><span className="header-name">Background</span>
                    <div className="body">

                        Hindu, Hindi
                        Rajput
                        Lives in Delhi, Delhi-NCR, India
                    </div></div>

            </div>

            <div className="about-section">
                <div className="header"><i class="fas fa-home"></i><span className="header-name">
                    Family Details</span>
                    <div className="body">

                        Ours is a middle class family, originally from Ara, with traditional values. My father is employed and my mother is a homemaker. I have 1 brother (unmarried).
                    </div></div>

            </div>

            <div className="about-section">
                <div className="header"><i class="fas fa-user-graduate"></i><span className="header-name">Education & Career</span>
                    <div className="body">
                        B.E / B.Tech - Bachelor of Engineering / Bachelor of Technology
                        Engineering
                        Web / UX Designers with a private company
                        Earns INR 2 Lakh to 4 Lakh annually
                    </div></div>

            </div>

        </div>
    )
}
