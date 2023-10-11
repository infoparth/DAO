import { ethers, network } from "hardhat"

const tokenAddr = "0xd43da1c6ce766a7639032372cf6f40618b69b60c"
export async function returnRate(){

    const token = await ethers.getContractAt("GovernorContract", tokenAddr)

    const set = await token.votingPeriod() 

    console.log(`Value of Rate = ${set}`)
}

returnRate()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })