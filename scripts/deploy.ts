

const { ethers, upgrades } = require("hardhat")

const main = async () => {
  const upgradeableContract = await ethers.getContractFactory("AdeTiger");
  console.log ("Deploying upgradeableContract...");
// 
  const contract = await upgrades.deployProxy(upgradeableContract, [], {
    initializer: "initialize",
    kind: "transparent",
  });

  await contract.deployed();
  console.log("ERC20 Upgradeable Contract deployed to: ", contract.address);
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

/*
ERC20 Upgradeable Contract deployed to:  0x5076766AD4997CD20BAa61CBA59FA8eA26303976
*/
