import React from 'react'
import { useLocation } from 'react-router-dom'

import routes from '../routes'

import { CBreadcrumb, CBreadcrumbItem } from '@coreui/react'

const AppBreadcrumb = () => {
  const currentLocation = useLocation().pathname

  const getRouteName = (pathname, routes) => {

    //We use this because route with button edit  ...
    if(pathname.includes('/products/update-products')){
      
      pathname = '/products/update-products/:id?';
      
    }
    if(pathname.includes('/categories/update-categories')){
      
      pathname = '/categories/update-categories/:id?';
      
    }
    if(pathname.includes('/clients/update-clients')){
      
      pathname = '/clients/update-clients/:id?';
      
    }
    if(pathname.includes('/commandes/update-commandes')){
      
      pathname = '/commandes/update-commandes/:id?';
      
    }
    const currentRoute = routes.find((route) => route.path === pathname)
    
    return currentRoute.name
  }

  const getBreadcrumbs = (location) => {
    const breadcrumbs = []
    location.split('/').reduce((prev, curr, index, array) => {
      const currentPathname = `${prev}/${curr}`
      breadcrumbs.push({
        pathname: currentPathname,
        name: getRouteName(currentPathname, routes),
        active: index + 1 === array.length ? true : false,
      })
      return currentPathname
    })
    return breadcrumbs
  }

  const breadcrumbs = getBreadcrumbs(currentLocation)

  return (
    <CBreadcrumb className="m-0 ms-2">
      <CBreadcrumbItem href="/">Home</CBreadcrumbItem>
      {breadcrumbs.map((breadcrumb, index) => {
        return (
          <CBreadcrumbItem
            {...(breadcrumb.active ? { active: true } : { href: breadcrumb.pathname })}
            key={index}
          >
            {breadcrumb.name}
          </CBreadcrumbItem>
        )
      })}
    </CBreadcrumb>
  )
}

export default React.memo(AppBreadcrumb)
