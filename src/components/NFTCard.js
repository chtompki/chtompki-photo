import { useAddress, Web3Button } from "@thirdweb-dev/react";
import '../styles/NFTCard.css';

function NFTCard({ nft, contract }) {
    const address = useAddress();

    // Fallback image URL
    const fallbackImage = "/placeholder-nft.png"; // Add a placeholder image in your public folder

    const handleImageError = (e) => {
        e.target.src = fallbackImage;
    };

    return (
        <div className="nft-card">
            <img
                src={nft.metadata.image || fallbackImage}
                alt={nft.metadata.name || "NFT"}
                className="nft-image"
                onError={handleImageError}
            />
            <div className="nft-info">
                <h3>{nft.metadata.name || `NFT #${nft.metadata.id}`}</h3>
                <p>{nft.metadata.description || "No description available"}</p>
                <div className="price-info">
                    <span>Price: {nft.metadata.price || "TBD"} ETH</span>
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
