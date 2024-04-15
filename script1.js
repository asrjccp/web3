document.getElementById('btn-connect').addEventListener('click', async () => {
    if (typeof window.ethereum !== 'undefined') {
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            if (accounts.length > 0) {
                const account = accounts[0];
                document.getElementById('status').innerText = `Connected with account ${account}`;
                checkNetwork();
            } else {
                document.getElementById('status').innerText = 'No accounts found. Please login to MetaMask.';
            }
        } catch (error) {
            document.getElementById('status').innerText = 'Connection to MetaMask was rejected.';
        }
    } else {
        document.getElementById('status').innerText = 'MetaMask is not installed. Please install it to interact.';
    }
});

async function checkNetwork() {
    const networkId = await window.ethereum.request({ method: 'net_version' });
    const networkName = getNetworkName(networkId);
    document.getElementById('network').innerText = `You are connected to: ${networkName}`;
}

function getNetworkName(networkId) {
    switch(networkId) {
        case '1': return 'Ethereum Main Network (Mainnet)';
        case '3': return 'Ropsten Test Network';
        case '4': return 'Rinkeby Test Network';
        case '5': return 'Goerli Test Network';
        case '42': return 'Kovan Test Network';
        default: return 'Unknown Network';
    }
}
