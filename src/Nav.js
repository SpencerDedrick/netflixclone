import React, {useState, useEffect} from 'react'
import { FaSearch } from 'react-icons/fa';
import "./Nav.css"

function Nav() {
    const [show, handleShow] = useState(false);
    
    useEffect(()=> {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, [])

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img 
            className="nav__logo"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-download.com%2Fwp-content%2Fuploads%2F2016%2F03%2FNetflix_logo.png&f=1&nofb=1"
            alt="Netflix Logo"
           ></img>
      {/*      <div className="nav__search_container">
           <input type="text"></input><FaSearch className="nav__search_icon"/>
            </div> */}
            <img 
            src="https://occ-0-851-853.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAAFGeT-8kpTM1wmN72NQ5hsokARXnmtX8lDPCTzEvAA-dS2wLpEJO2SeYwHuf9SlH9crF9KCVNAgsimebyUp9B8qTwUg.png?r=f80" 
            alt="Netflix Avatar" 
            className="nav__avatar"
            onClick={() => this.onSetSidebarOpen(true)}/>
        </div>
    )
}

export default Nav
