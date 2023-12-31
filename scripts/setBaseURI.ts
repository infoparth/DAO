import { ethers, network } from "hardhat"

const tokenAddr = "0x580b84319Ae93A4728b68B94BdA4bbC69FfD7675"
const baseURI = "ipfs://Qme4irhWzpLxbCUB5FsTPQkMcrojVPuWLKJGJ6WVtDk8uN"
const owner = "0x4fE333470b78C5896178780aa9483bc8F6085418"

export async function setURI(){

    const token = await ethers.getContractAt("GovernanceToken", tokenAddr)

    console.log(`Setting the base URI of the NFT token, so that people can see the NFT in their wallet`)

    const set = await token.setBaseURI(baseURI, {
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