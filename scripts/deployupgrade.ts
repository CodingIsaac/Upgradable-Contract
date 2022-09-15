// 0xAA5AC6134633183C81436499fb38748D128e039b

const { ethers, upgrades } = require("hardhat");

async function main() {
    const UpdatedContract = await ethers.getContractFactory("AdeTigerv2");

    await upgrades.upgradeProxy(
        "0x5076766AD4997CD20BAa61CBA59FA8eA26303976",
        UpdatedContract

    );

    console.log("upgrade successful")

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  /*
local host result
 Contract call:       <UnrecognizedContract>
  Transaction:         0xfa472b5c7c5186dd8ea6e159697d9f39a9b9fbe83fc5b294c18b3c2b68cd3ac7
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x286b8decd5ed79c962b2d8f4346cd97ff0e2c352
  Value:               0 ETH
  Gas used:            38802 of 38953
  Block #15541170:     0x8347db6b9e14b062dbda01e02ecf9296534ae5ec2c777a3ec6bf40678f6d1411
*/