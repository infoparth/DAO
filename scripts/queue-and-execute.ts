import { ethers, network } from "hardhat"
import {
  FUNC,
  NEW_STORE_VALUE,
  PROPOSAL_DESCRIPTION,
  MIN_DELAY,
  developmentChains,
} from "../helper-hardhat-config"

const deployer = "0x4fE333470b78C5896178780aa9483bc8F6085418"

export async function queueAndExecute() {
  const args = [NEW_STORE_VALUE]
  const functionToCall = FUNC
  const box = await ethers.getContractAt("Box", "0x73234AB86eb2F6a6149d5658d915fB556F471F83")
  const encodedFunctionCall = box.interface.encodeFunctionData(functionToCall, args)
  const descriptionHash = ethers.utils.keccak256(ethers.utils.toUtf8Bytes(PROPOSAL_DESCRIPTION))
  // could also use ethers.utils.id(PROPOSAL_DESCRIPTION)

  const governor = await ethers.getContractAt("GovernorContract", "0x09148A0f89737CE635b46a41fd85c0A2248812BF")
  // console.log("Queueing...")
  // const queueTx = await governor.queue([box.address], [0], [encodedFunctionCall], descriptionHash)
  // await queueTx.wait(1)

  // if (developmentChains.includes(network.name)) {
  //   await moveTime(MIN_DELAY + 1)
  //   await moveBlocks(1)
  // }

  console.log("Executing...")
  // this will fail on a testnet because you need to wait for the MIN_DELAY!
  const executeTx = await governor.execute(
    [box.address], [0], [encodedFunctionCall], descriptionHash
  )
  await executeTx.wait(1)
  console.log(`value executed`)
  console.log(`Box value: ${await box.retrieve()}`)
}

queueAndExecute()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
