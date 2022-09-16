import './App.css'
import Header from '@/components/Header'
import SponsorItemList from '@/components/SponsorItemList'
import Hero from '@/components/Hero'
import Nft11381 from '@/assets/nft-11381.png'
import Nft19941 from '@/assets/nft-19941.png'
import NftCardList, { nfts } from '@/components/NftCardList'
import NftCardWithText from '@/components/NftCardWithText'
import LogoWithText from '@/components/LogoWithText'
import EthereumLogoColorful from '@/assets/ethereum-logo-colorful.png'
import Ethereum from '@/assets/ethereum.png'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="page-container">
        <Hero heroImage={Nft19941} />
        <NftCardWithText
          nftData={nfts[0]}
          title="Initial Release 23/12"
          descriptionTop="We have released four limited edition NFTs early which can be bid on via OpenSea."
          descriptionBottom="These will be the only four of these NFTs we ever make, so be sure not to miss out!"
          color="orange"
        />
        <SponsorItemList />
        <NftCardList />
        <NftCardWithText
          nftData={nfts[0]}
          title="Initial Release 23/12"
          descriptionTop="We have released four limited edition NFTs early which can be bid on via OpenSea."
          descriptionBottom="These will be the only four of these NFTs we ever make, so be sure not to miss out!"
          color="green"
          imageOnRight={true}
        />
        <div className="App__logo-with-text">
          <LogoWithText
            logo={EthereumLogoColorful}
            title="An NFT like no other"
            descriptionTop="Don’t miss out on the release of our new NFT. Sign up below to receive updates when we go live on 18/9."
            descriptionBottom="Don’t miss out on the release of our new NFT. Sign up below to receive updates when we go live on 18/9.Don’t miss out on the release of our new NFT. "
          />
          <LogoWithText
            logo={Ethereum}
            title="An NFT like no other"
            descriptionTop="Don’t miss out on the release of our new NFT. Sign up below to receive updates when we go live on 18/9."
            descriptionBottom="Don’t miss out on the release of our new NFT. Sign up below to receive updates when we go live on 18/9.Don’t miss out on the release of our new NFT. "
          />
        </div>
        <Hero heroImage={Nft11381} />
      </div>
    </div>
  )
}

export default App
