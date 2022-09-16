import './style.css'

function SponsorItem(props) {
  const logo = props.logo
  const text = props.text

  return (
    <div className="sponsor-item">
      <img className="sponsor-item__logo" src={logo} />
      <span className="sponsor-item__text">{text}</span>
    </div>
  )
}

export default SponsorItem
