import AppLogo from '@/assets/app-logo.png'
import './style.css'

function Header() {
  return (
    <nav className="header">
      <div className="header__wrapper">
        <img className="header__logo" src={AppLogo} alt="app logo" />
        <span className="header__sign-up">Sign Up</span>
      </div>
    </nav>
  )
}

export default Header
