// Install and initialize World ID (Follow Worldcoin developer docs)

// Metamask Integration
const injectedConnector = new InjectedConnector({ supportedChainIds: [1] }); // Mainnet
const Web3React = require('@web3-react/core').Web3ReactProvider;

function getLibrary(provider) {
  return new Web3(provider);
}

async function connectMetamask() {
  try {
    await web3react.activate(injectedConnector);
    const accounts = await web3react.library.eth.getAccounts();
    console.log("Connected Account:", accounts[0]);
  } catch (error) {
    console.error("Metamask Error:", error);
  }
}

// Connect Button Event Listener
document.getElementById('connectMetamask').addEventListener('click', connectMetamask);
