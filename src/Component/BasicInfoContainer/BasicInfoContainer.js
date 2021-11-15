import React from 'react'

export default function BasicInfoContainer() {
    return (
        <div className="basic-info-container">
          <div style={{width: '100%'}}>
          <div className="username">Rohit Singh</div>
            <div className="online-status">
                Online now <span className="online-icon"></span>
            </div>
            <hr />
            <div className="basic-info">
                <div className="basic-info-sec1">
                    <div className="ageHeightSunsign">28yrs, 5'4, Virgo</div>
                    <div className="religion">Hindu</div>
                    <div className="caste">Hindu Rajput</div>
                    <div className="education">Bachelors degree in Engineering</div></div>
                <div className="basic-info-sec1">
                    <div className="marriageStatus">Never Married</div>
                    <div className="place">Delhi NCR</div>
                    <div className="profession">UI UX Desginer</div>
                    <div className="salary">Earns INR 2 Lakh to 4 Lakh annua</div>
                </div>
            </div>
          </div>

 <div className="likeFeedback">Like this profile?
 <a href="##">
     <img style={{padding: '15px'}} src="https://my.shaadi.com/assets/prem/connect.svg" alt=""/>
 </a>
 </div>
        </div>
    )
}
