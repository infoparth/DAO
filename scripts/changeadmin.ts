import { ethers, network } from "hardhat"

const tokenAddr = "0x09148A0f89737CE635b46a41fd85c0A2248812BF"
const owner = "0x4fE333470b78C5896178780aa9483bc8F6085418"
const address = "0x7057466420B99F697340cCD551E3c510181558C5"

export async function setURI(){

    const token = await ethers.getContractAt("GovernorContract", tokenAddr)

    console.log(`Setting the base URI of the NFT token, so that people can see the NFT in their wallet`)

    const set = await token.changeAdmin(address)

    console.log(`New Admin set ${address}`)
}

setURI()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })