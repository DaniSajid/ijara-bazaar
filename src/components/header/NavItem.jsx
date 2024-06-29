import { NavLink } from "react-router-dom"


const NavItem = ({ NavName,to }) => {
  return (
    <li className="nav-item"><NavLink className="nav-link link-body-emphasis px-2" aria-current="page" to={to}>{NavName}</NavLink></li>
  )
}

export default NavItem
