import { ethers, network } from "hardhat"
import {
    FUNC,
    NEW_STORE_VALUE,
    PROPOSAL_DESCRIPTION,
    MIN_DELAY,
    developmentChains,
  } from "../helper-hardhat-config"
import { Box__factory } from "../typechain-types"

  const governorAddr = "0x9dE4fD44D18DC064AD1002b57b930A3A05c642f5"
  const deployer = "0x4fe333470b78c5896178780aa9483bc8f6085418"

export async function returnRole(){

    const args = [NEW_STORE_VALUE]
    const functionToCall = FUNC
    const box = await ethers.getContractAt("Box", "0x1A859971391f1ACE0170B83c6eCBeA3Ca74496B4")
    const encodedFunctionCall = box.interface.encodeFunctionData(functionToCall, args)
    const descriptionHash = ethers.utils.keccak256(ethers.utils.toUtf8Bytes(PROPOSAL_DESCRIPTION))

    const governor = await ethers.getContractAt("Governor", governorAddr)

    // const executorRole = await governor.EXECUTOR_ROLE({
    //     from: deployer,
    //    })

    console.log(`owner = ${await box.owner()}`)

       console.log(`Executing...`)

    // const set = await governor.execute(
    //     [box.address], [0], [encodedFunctionCall], descriptionHash, 
    //     {from: deployer}
        
    // ) 

    // await set.wait(1)

    console.log(`Function executed`)

    // console.log(`Value of Rate = ${set}`)
}

returnRole()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })