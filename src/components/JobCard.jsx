import React from 'react'
import { Bookmark } from 'lucide-react';
import { useState } from 'react'
import {BookmarkCheck} from 'lucide-react'

  

const JobCard = (props) => {
    const logoPath=`/logos/${props.companyName.toLowerCase()}-icon.png`;
    const [isSaved, setIsSaved] = useState(false)
    const handleClick = () => {
        console.log("Button clicked! Current state is:", isSaved);
        setIsSaved(!isSaved)
    }
    return (
        <div className="jobCard">
            <div className="cardHead">
                <div className="jobLogo"><img src={logoPath} alt="brandLogo" /></div>
                <button className={isSaved ? `saved-btn` : `save-btn`} onClick={handleClick}>
                    {isSaved ? "Saved" : "Save"}
                    {isSaved ? (<BookmarkCheck color="#ffffff" size={14} strokeWidth={3} />) : (<Bookmark color="grey" size={14} strokeWidth={1} />)}
                </button>
            </div>

            <div className='cardBody'>
                <div className="jobHeading">
                    <span className='companyName'>{props.companyName}</span>
                    <span className="postedTime">{props.postedTime}</span>
                </div>

                <div className='jobRole'>{props.jobTitle}</div>

                <div className="jobTypeDetails">
                    <div className='jobTime'>{props.jobType}</div>
                    <div className="jobLevel">{props.jobLevel}</div>
                </div>


            </div>

            <div className='cardFooter'>
                <div className="seperator-Line"></div>
                <div className="footerContent">
                    <div className="jobMoneyPlace">
                        <div className='jobSalary'>{props.salary}</div>
                        <div className='jobReportingPlace'>{props.location}</div>
                    </div>

                    <div className='apply-btn'>Apply Now</div>
                </div>

            </div>

        </div>
    )
}

export default JobCard
