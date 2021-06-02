const { deployProxy, upgradeProxy } = require('@openzeppelin/truffle-upgrades');
const ArtichainEscrow = artifacts.require('ArtichainEscrow');
const isUpgrade = false;

module.exports = async function(deployer) {
  if(!isUpgrade) {
    // IBEP20 _token, address _wallet, uint256 _depositFee, uint256 _withdrawFee
    const instance = await deployProxy(ArtichainEscrow, ["0xD03Edd7a19b4fCa3590Aab5924f22ac7AA6254b5", "0xf8A0B66036EC5e5873a97aB0a5C70CfA8a21121B", 0, 0], { deployer });
    console.log('Deployed', instance.address);
  } else {
    const oldAddress = "0x0305bbA702C044c22A4D5f01caAdC9FeC7395405"
    const instance = await upgradeProxy(oldAddress, ArtichainEscrow, { deployer });
    console.log("Upgraded", instance.address);
  }
};
