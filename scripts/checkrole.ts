import { ethers, network } from "hardhat"

const timeLockAddr = "0x796748A83a0cF96057078CE37C2DED984A85Fb42"
const deployer = "0x4fe333470b78c5896178780aa9483bc8f6085418"

export async function returnRole(){

    

    const timeLock = await ethers.getContractAt("TimeLock", timeLockAddr)

    const executorRole = await timeLock.EXECUTOR_ROLE({
        from: deployer,
        gasLimit: 5000000})

    const set = await timeLock.hasRole(
        executorRole, 
        deployer
    ) 

    console.log(`Value of Rate = ${set}`)
}

returnRole()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })