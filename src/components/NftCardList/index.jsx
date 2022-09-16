import './style.css'
import NftCard from '@/components/NftCard'
import Nft11381 from '@/assets/nft-11381.png'
import Nft23232 from '@/assets/nft-23232.png'
import Nft33333 from '@/assets/nft-33333.png'
import Nft43234 from '@/assets/nft-43234.png'

export const nfts = [
  {
    image: Nft11381,
    name: 'Dommod',
    price: 1.23,
    daysLeft: 23,
    number: 11381,
  },
  {
    image: Nft23232,
    name: 'Moddom',
    price: 1.76,
    daysLeft: 20,
    number: 23232,
  },
  {
    image: Nft33333,
    name: 'Ambord',
    price: 1.12,
    daysLeft: 17,
    number: 33333,
  },
  {
    image: Nft43234,
    name: 'Ajs',
    price: 2.01,
    daysLeft: 25,
    number: 43234,
  },
]

function NftCardList() {
  return (
    <div className="nft-card-list">
      {nfts.map((nft) => {
        return (
          <NftCard
            image={nft.image}
            name={nft.name}
            price={nft.price}
            daysLeft={nft.daysLeft}
            number={nft.number}
          />
        )
      })}
    </div>
  )
}

export default NftCardList
