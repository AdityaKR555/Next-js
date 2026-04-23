import React from 'react'

function Output({data}) {
  return (
    <div className="w-full md:w-1/2 space-y-6 overflow-y-auto min-h-[90vh]">
            <>
            <p>{data.name}</p>
            <p>{data.bio}</p>
            <p>{data.skills.join(", ")}</p>
            <p>{data.projects.map((project, i) => <span key={i}>{project.title}, </span>)}</p>
            <p>{data.social.github}</p>
            <p>{data.social.linkedin}</p>
            </>
      
    </div>
  )
}

export default Output
