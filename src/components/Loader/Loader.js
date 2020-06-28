import React, { Suspense } from 'react'

const Fallback = (
  <div className='container my-2'>
    <div className='row justify-content-center'>
      <div className='col col-md-8 col-lg-6'>
        <div className='wider card'>
          <p className='text-center text-muted my-2'>Loading...</p>
        </div>
      </div>
    </div>
  </div>
)

export const Loader = ({ children }) => (
  <Suspense fallback={Fallback}>{children}</Suspense>
)

export const lazyLoad = Component => <Loader>{Component}</Loader>
