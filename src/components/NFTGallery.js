import { useContract, useNFTs } from "@thirdweb-dev/react";
import NFTCard from './NFTCard';
import '../styles/NFTGallery.css';

function NFTGallery() {
    // Replace with your contract address
    const contractAddress = "0x038e6381d061082819Eb2Ebce258dec513628bC5";
    const { contract } = useContract(contractAddress);
    const { data: nfts, isLoading, error } = useNFTs(contract);

    if (isLoading) return <div className="loading">Loading NFTs...</div>;
    if (error) return <div className="error">Error loading NFTs</div>;

    return (
        <div className="nft-gallery">
            {nfts?.map((nft) => (
                <NFTCard
                    key={nft.metadata.id}
                    nft={nft}
                    contract={contract}
                />
            ))}
        </div>
    );
}

export default NFTGallery;
