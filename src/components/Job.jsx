import React from 'react';

const Job = () => {
  return ( 
    <div className="flex flex-col gap-2 px-2 py-2">
      <div className="flex flex-col gap-1">
        <h2>Employer Name</h2>
        <h2>Employer logo</h2>
        <h2>Employer website</h2>
        <h2>Employer company type</h2>
      </div>
      <div className="flex flex-col gap-1">
        <h2>Job Details</h2>
        <h6>Publisher</h6>
        <h6>Emplpyment Type</h6>
        <h6>Title</h6>
        <h6>Description</h6>
        <h6>isRemote</h6>
        <h6>Posted at</h6>
        <h6>City, State, Country</h6>
        <h6>Benefits</h6>
        <h6>Requirements
          <p>Skills</p>
          <p>Experience</p>
          <p>Education</p>
        </h6>
        <h6>Benefits</h6>
        <h6>Salary</h6>
        <h6>Job Highlights</h6>
      </div>
      <div className="flex flex-col gap-1">Google Link</div>
      <div className="flex flex-col gap-1">Apply</div>
    </div>
  )
}

export default Job