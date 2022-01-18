import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="#" target="_blank" rel="noopener noreferrer">
          ISIMS
        </a>
        <span className="ms-1">&copy; 2021 .Maatoug Khalil</span>
      </div>
      
    </CFooter>
  )
}

export default React.memo(AppFooter)
