const connectButton = document.getElementById("connectButton");
connectButton.addEventListener("click", connectMetamask);

async function connectMetamask() {
	// Check if Metamask is installed and connected
	if (window.ethereum) {
		await window.ethereum.enable();
		const accounts = await window.ethereum.request({ method: "eth_accounts" });
		console.log("Connected to Metamask. Account:", accounts[0]);
    } else {
		console.log("Metamask not found. Please install Metamask.");
	}
}