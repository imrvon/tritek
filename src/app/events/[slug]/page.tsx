import React from 'react'
import EventDetails from '../components/EventDetails'

export default function page({ params }: { params: { slug: string } }) {
  return (
    <div>
      <EventDetails params={{ slug: params.slug }} />
    </div>
  )
}
