import { useContract, useNFTs } from "@thirdweb-dev/react";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import NFTCard from './NFTCard';
import '../styles/NFTGallery.css';

function NFTGallery() {
    // Replace with your contract address
    const contractAddress = "YOUR_CONTRACT_ADDRESS";
    const { contract } = useContract(contractAddress);
    const { data: nfts, isLoading, error } = useNFTs(contract);

    // Initialize storage with multiple gateways
    const storage = new ThirdwebStorage({
        gatewayUrls: [
            "https://ipfs.io/ipfs/",
            "https://gateway.ipfs.io/ipfs/",
            "https://cloudflare-ipfs.com/ipfs/",
            "https://gateway.pinata.cloud/ipfs/"
        ]
    });

    // Helper function to resolve IPFS URLs
    const resolveIpfsUrl = (ipfsUrl) => {
        if (!ipfsUrl) return "";
        if (ipfsUrl.startsWith("ipfs://")) {
            const hash = ipfsUrl.replace("ipfs://", "");
            return `https://ipfs.io/ipfs/${hash}`;
        }
        return ipfsUrl;
    };

    if (isLoading) return <div className="loading">Loading NFTs...</div>;
    if (error) return <div className="error">Error loading NFTs: {error.message}</div>;

    return (
        <div className="nft-gallery">
            {nfts?.map((nft) => {
                // Resolve IPFS URLs for image and metadata
                const resolvedImageUrl = resolveIpfsUrl(nft.metadata?.image);
                return (
                    <NFTCard
                        key={nft.metadata.id}
                        nft={{
                            ...nft,
                            metadata: {
                                ...nft.metadata,
                                image: resolvedImageUrl
                            }
                        }}
                        contract={contract}
                    />
                );
            })}
        </div>
    );
}

export default NFTGallery;
