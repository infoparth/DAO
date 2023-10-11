import { HardhatRuntimeEnvironment } from "hardhat/types"
import { DeployFunction } from "hardhat-deploy/types"
import verify from "../helper-functions"
import { networkConfig, developmentChains } from "../helper-hardhat-config"
import { ethers } from "hardhat"

const address = ""
const t_Addr = ""

const deployBox: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  // @ts-ignore
  const { getNamedAccounts, deployments, network } = hre
  const { deploy, log } = deployments
  const { deployer } = await getNamedAccounts()
  log(`Box at ${address}`)

  const boxContract = await ethers.getContractAt("Box", address)
  const timeLock = await ethers.getContractAt("TimeLock", t_Addr)

  const transferTx = await boxContract.transferOwnership(t_Addr)
  console.log(`now, owner = ${await boxContract.owner()}`)


  
}

export default deployBox
deployBox.tags = ["all", "box"]
