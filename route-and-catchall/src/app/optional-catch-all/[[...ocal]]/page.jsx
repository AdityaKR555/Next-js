import React from 'react'

function page() {
  return (
    <div>
      <p>This is an optional catch-all route.</p>
      <p>this will catch all routes after /optional-catch-all/ and even if there are no segments after it</p>
    </div>
  )
}

export default page
