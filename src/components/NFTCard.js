
import { useAddress, Web3Button } from "@thirdweb-dev/react";
import '../styles/NFTCard.css';

function NFTCard({ nft, contract }) {
    const address = useAddress();

    return (
        <div className="nft-card">
            <img
                src={nft.metadata.image}
                alt={nft.metadata.name}
                className="nft-image"
            />
            <div className="nft-info">
                <h3>{nft.metadata.name}</h3>
                <p>{nft.metadata.description}</p>
                <div className="price-info">
                    <span>Price: {nft.metadata.price} ETH</span>
                </div>
                {address && (
                    <Web3Button
                        contractAddress={contract?.getAddress()}
                        action={(contract) => contract.erc721.claim(1)}
                    >
                        Purchase NFT
                    </Web3Button>
                )}
            </div>
        </div>
    );
}

export default NFTCard;