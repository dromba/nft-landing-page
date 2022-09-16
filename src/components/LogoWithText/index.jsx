import './style.css'

function LogoWithText(props) {
  const { logo, title, descriptionTop, descriptionBottom } = props

  return (
    <div className="logo-with-text">
      <img className="logo-with-text__image" src={logo} alt={`${title}-logo`} />
      <h3>{title}</h3>
      <p>{descriptionTop}</p>
      <p>{descriptionBottom}</p>
    </div>
  )
}

export default LogoWithText
