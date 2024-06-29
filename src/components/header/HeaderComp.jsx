import LogoComp from "./LogoComp"
import NavItem from "./NavItem"


const HeaderComp = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#"><LogoComp/></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
      <NavItem NavName="Home" to={"/"} />
      <NavItem NavName="About" to={"/about"}/>
      <NavItem NavName="Contact" to={"/contact"} />
      </ul>
      <ul className="nav">
        <li className="nav-item"><a href="#" className="nav-link link-body-emphasis px-2">Login</a></li>
        <li className="nav-item"><a href="#" className="nav-link link-body-emphasis px-2">Sign up</a></li>
      </ul>
      </div>
    </div>
  </nav>
  )
}

export default HeaderComp
