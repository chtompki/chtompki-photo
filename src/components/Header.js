import { ConnectWallet } from "@thirdweb-dev/react";
import '../styles/Header.css';

function Header() {
    return (
        <header className="header">
            <div className="header-content">
                <h1>chtompki.photo NFTs</h1>
                <ConnectWallet
                    theme="dark"
                    btnTitle="Connect Wallet"
                />
            </div>
        </header>
    );
}

export default Header;
