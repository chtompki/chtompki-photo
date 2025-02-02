import { ThirdwebProvider, ConnectWallet, useContract } from "@thirdweb-dev/react";

function App() {
    return (
        <ThirdwebProvider activeChain="ethereum">
            <div className="container">
                <header>
                    <h1>chtompki.photo NFTs</h1>
                    <ConnectWallet />
                </header>
                <main>
                    {/* Your NFT gallery will go here */}
                </main>
            </div>
        </ThirdwebProvider>
    );
}

export default App;