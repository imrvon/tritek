import React from 'react'
import JobDetails from '../components/JobDetails'

export default function page({ params }: { params: { slug: string } }) {
  return (
    <div>
      <JobDetails params={{ slug: params.slug }} />
    </div>
  )
}
