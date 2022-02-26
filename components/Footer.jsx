import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBookmark} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faTwitter} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="menu-branch">
        <div className="footer-logo-margin">
          <FontAwesomeIcon icon={faBookmark} className="menu-bookmark" />
        </div>
        <h2>BOOKMARK</h2>
      </div>
      <div className="footer-options">
        <a><h3>FEATURES</h3></a>
        <a><h3>PRICING</h3></a>
        <a><h3>CONTACT</h3></a>
      </div>
      <div className="footer-logos">
        <FontAwesomeIcon className="logo" icon={faFacebook}/>
        <FontAwesomeIcon className="logo"   icon={faTwitter}/>
      </div>
    </div>
  )
}

export default Footer;