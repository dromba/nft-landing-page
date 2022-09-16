import './style.css'
import EthereumLogo from '@/assets/ethereum-logo.png'

function NftCard(props) {
  const { image, number, name, price, daysLeft } = props

  return (
    <div className="nft-card">
      <img className="nft-card__image" src={image} alt={`nft-card-${name}`} />
      <div className="nft-card__details">
        <span className="nft-card__details-series">Gloop series</span>
        <span className="nft-card__details-top-bid">Top bid</span>
        <span className="nft-card__details-name">{name}</span>
        <span className="nft-card__details-price">
          <img
            className="nft-card__details-ethereum-logo"
            src={EthereumLogo}
            alt="ethereum-logo"
          />
          {price}
        </span>
        <span className="nft-card__details-number">#{number}</span>
        <span className="nft-card__details-days-left">
          {daysLeft} days left
        </span>
      </div>
    </div>
  )
}

export default NftCard
