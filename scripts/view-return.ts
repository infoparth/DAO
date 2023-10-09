import { ethers, network } from "hardhat"

const tokenAddr = "0x1A859971391f1ACE0170B83c6eCBeA3Ca74496B4"
export async function returnRate(){

    const token = await ethers.getContractAt("Box", tokenAddr)

    const set = await token.retrieve() 

    console.log(`Value of Rate = ${set}`)
}

returnRate()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })