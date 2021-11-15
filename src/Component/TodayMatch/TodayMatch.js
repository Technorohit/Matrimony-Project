import React from 'react'
import SpotlightPhoto from '../SpotlightPhoto/SpotlightPhoto'
import BasicInfoContainer from '../BasicInfoContainer/BasicInfoContainer'
import DetailedInfoContainer from '../DetailedInfoContainer/DetailedInfoContainer'
import './TodayMatch.css'

export default function TodayMatch() {
    return (
        <div className="matchContainer">
           <SpotlightPhoto/>
           <BasicInfoContainer/>
           <DetailedInfoContainer/>
        </div>
    )
}
