import Button from '@/components/Button'
import './style.css'

function Hero(props) {
  const { heroImage } = props
  return (
    <section className="hero">
      <div className="hero__left">
        <span className="hero__left-launching">Launching soon</span>
        <h1 className="hero__left-heading">An NFT like no other</h1>
        <p>
          Don’t miss out on the release of our new NFT. Sign up below to receive
          updates when we go live.
        </p>
        <Button text="Sign Up" />
      </div>
      <div className="hero__right">
        <div className="hero__right-image-wrapper">
          <img className="hero__right-image" src={heroImage} alt="hero image" />
          <div className="hero__right-image-shadow"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
