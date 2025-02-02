import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Ethereum } from "@thirdweb-dev/chains";
import NFTGallery from './components/NFTGallery';
import Header from './components/Header';
import './styles/App.css';

function App() {
    return (
        <ThirdwebProvider activeChain={Ethereum}>
            <div className="app">
                <Header />
                <main className="main-content">
                    <NFTGallery />
                </main>
            </div>
        </ThirdwebProvider>
    );
}

export default App;