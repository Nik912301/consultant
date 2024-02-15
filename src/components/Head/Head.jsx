import './Head.css'
import HeaderMenu from './HeaderMenu'
import HeaderLogo from './HeaderLogo'

export default function Head(){
    return (
        <header id="header">
            <div className="header_content" id="header_content">
              <div className="container">

                <HeaderLogo />
                
                <HeaderMenu />

                <span className="menu-bars">
                  <span></span>
                </span>

              </div>
            </div>
        </header>
    )
}