import { ethers, network } from "hardhat"

const tokenAddr = "0x73234AB86eb2F6a6149d5658d915fB556F471F83"
export async function returnRate(){

    const token = await ethers.getContractAt("Box", tokenAddr)

    const set = await token.retrieve() 

    const own = await token.owner()

    console.log(`Value of Rate = ${set}`)

    console.log(`owner = ${own}`)
}

returnRate()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })