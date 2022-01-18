import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
//Product:
  {
    component: CNavGroup,
    name: 'Products',
    to: '/products',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'All Products',
        to: '/products/all-products',
      },
      {
        component: CNavItem,
        name: 'Add New Products',
        to: '/products/add-new-products',
      },
     
     
    ],
  },
  //Categorie:
  {
    component: CNavGroup,
    name: 'Categories',
    to: '/categories',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'All Categories',
        to: '/categories/all-categories',
      },
      {
        component: CNavItem,
        name: 'Add New Categories',
        to: '/categories/add-new-categories',
      },
    ],
  },
  //Client:
  {
    component: CNavGroup,
    name: 'Clients',
    to: '/clients',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'All Clients',
        to: '/clients/all-clients',
      },
      {
        component: CNavItem,
        name: 'Add New Clients',
        to: '/clients/add-new-clients',
      },
    ],
  },
  //Commande:
  {
    component: CNavGroup,
    name: 'Commandes',
    to: '/commandes',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'All Commandes',
        to: '/commandes/all-commandes',
      },
      {
        component: CNavItem,
        name: 'Add New Commmandes',
        to: '/commandes/add-new-commandes',
      },
    ],
  },

]

export default _nav
