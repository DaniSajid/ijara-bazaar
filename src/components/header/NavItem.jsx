import { NavLink } from "react-router-dom"


const NavItem = ({ page , to }) => {
  return (
    <li className="nav-item"><NavLink className="nav-link link-body-emphasis px-2" aria-current="page" to={to}>{page}</NavLink></li>
  )
}

export default NavItem
