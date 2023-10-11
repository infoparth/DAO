import { ethers, network } from "hardhat"

const tokenAddr = "0x5fb9d349518591fe176F728B82f8f3d62f62fc18"
const owner = "0x4fE333470b78C5896178780aa9483bc8F6085418"
const address = "0x4fE333470b78C5896178780aa9483bc8F6085418"

export async function setURI(){

    const token = await ethers.getContractAt("GovernanceToken", tokenAddr)

    console.log(`Setting the base URI of the NFT token, so that people can see the NFT in their wallet`)

    const set = await token.safeMint(address, {
        from: owner
    })

    console.log(`Base URI set!`)
}

setURI()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })