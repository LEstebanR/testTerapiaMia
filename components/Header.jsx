import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Header = ({setShowMenu, showMenu}) => {
  
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <div className="header">
      <img src="https://res.cloudinary.com/lesteban/image/upload/v1645757566/terapiamia/logo-bookmark_mjzlg2.svg" alt="logo"/>
      <ul className="header-desktop-menu">
        <li className="header-link">FEATURES</li>
        <li className="header-link">PRICING</li>
        <li className="header-link">CONTACT</li>
        <li className="header-button">LOGIN</li>
      </ul>
      <FontAwesomeIcon icon={faBars} className="header-menu" onClick={toggleMenu}/>
      <div className={showMenu ? "menu-show" : "menu-hiden"}>
        <div className="menu-title">
          <div className="menu-branch">
            <div className="logo-margin">
              <FontAwesomeIcon icon={faBookmark} className="menu-bookmark" />
            </div>
            <h2>BOOKMARK</h2>
          </div>
          <img onClick={toggleMenu}src="https://res.cloudinary.com/lesteban/image/upload/v1645826980/terapiamia/icon-close_bztuj4.svg" alt="close"></img>
        </div>
        <div className="menu-content">
          <a><p id="menu-link">FEATURES</p></a>
          <a><p id="menu-link">PRICING</p></a>
          <a><p id="menu-link">CONTACT</p></a>
          <a><p id="menu-button">LOGIN</p></a>
        </div>
        <div className="menu-logos">
        <FontAwesomeIcon className="logo" icon={faFacebook}/>
        <FontAwesomeIcon className="logo"   icon={faTwitter}/>  
        </div>
      </div>
    </div>
  )
}

export default Header;