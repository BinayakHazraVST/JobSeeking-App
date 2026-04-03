import React from 'react'
import JobCard from './components/jobCard'


const App = () => {
  const companyDetails=[
  {
    "companyName": "Amazon",
    "postedTime": "5 days ago",
    "jobTitle": "Senior UI/UX Designer",
    "jobType": "Part-time",
    "jobLevel": "Senior level",
    "salary": "$120/hr",
    "location": "San Francisco, CA"
  },
  {
    "companyName": "Google",
    "postedTime": "30 days ago",
    "jobTitle": "Graphic Designer",
    "jobType": "Full-time",
    "jobLevel": "Flexible schedule",
    "salary": "$150 - 220k",
    "location": "Mountain View, CA"
  },
  {
    "companyName": "Dribbble",
    "postedTime": "18 days ago",
    "jobTitle": "Senior Motion Designer",
    "jobType": "Contract",
    "jobLevel": "Remote",
    "salary": "$85/hr",
    "location": "San Francisco, CA"
  },
  {
    "companyName": "Meta",
    "postedTime": "3 months ago",
    "jobTitle": "UX Designer",
    "jobType": "Full-time",
    "jobLevel": "In office",
    "salary": "$200 - 250k",
    "location": "New York, NY"
  },
  {
    "companyName": "Airbnb",
    "postedTime": "1 day ago",
    "jobTitle": "Junior UX/UI Designer",
    "jobType": "Contract",
    "jobLevel": "Remote",
    "salary": "$100/hr",
    "location": "San Francisco, CA"
  },
  {
    "companyName": "Apple",
    "postedTime": "6 days ago",
    "jobTitle": "Graphic Designer",
    "jobType": "Full-time",
    "jobLevel": "Flexible schedule",
    "salary": "$85 - 120k",
    "location": "Cupertino, CA"
  },
  {
    "companyName": "Netflix",
    "postedTime": "2 weeks ago",
    "jobTitle": "Product Designer",
    "jobType": "Full-time",
    "jobLevel": "Hybrid",
    "salary": "$180 - 210k",
    "location": "Los Gatos, CA"
  },
  {
    "companyName": "Spotify",
    "postedTime": "12 days ago",
    "jobTitle": "Visual Designer",
    "jobType": "Contract",
    "jobLevel": "Remote",
    "salary": "$90/hr",
    "location": "New York, NY"
  },
  {
    "companyName": "Microsoft",
    "postedTime": "4 days ago",
    "jobTitle": "Lead UX Researcher",
    "jobType": "Full-time",
    "jobLevel": "In office",
    "salary": "$160 - 190k",
    "location": "Redmond, WA"
  },
  {
    "companyName": "Adobe",
    "postedTime": "2 hours ago",
    "jobTitle": "Junior Motion Designer",
    "jobType": "Part-time",
    "jobLevel": "Remote",
    "salary": "$60/hr",
    "location": "San Jose, CA"
  }
  ]
  return (
    <div className="jobSearchingArena">
      {companyDetails.map((jobRequire,index)=>{
        return <JobCard key={index} companyName={jobRequire.companyName} postedTime={jobRequire.postedTime}
        jobTitle={jobRequire.jobTitle} jobType={jobRequire.jobType}
        jobLevel={jobRequire.jobLevel} salary={jobRequire.salary} location={jobRequire.location}/>
      })}
    </div>
  )
}

export default App
