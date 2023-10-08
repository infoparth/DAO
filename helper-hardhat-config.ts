export interface networkConfigItem {
  ethUsdPriceFeed?: string
  blockConfirmations?: number
}

export interface networkConfigInfo {
  [key: string]: networkConfigItem
}

export const networkConfig: networkConfigInfo = {
  localhost: {},
  hardhat: {},
  polygon_mumbai: {
    blockConfirmations: 2,
  },
}

export const accountArray = ["0x4fE333470b78C5896178780aa9483bc8F6085418", "0xBf11cAF613085066028C2ea7c35B9b792cDA48b8", "0x7057466420B99F697340cCD551E3c510181558C5"]

export const developmentChains = ["hardhat", "polygon_mumbai"]
export const proposalsFile = "proposals.json"

// Governor Values
export const QUORUM_PERCENTAGE = 4 // Need 4% of voters to pass
export const MIN_DELAY = 10 // 1 hour - after a vote passes, you have 1 hour before you can enact
// export const VOTING_PERIOD = 45818 // 1 week - how long the vote lasts. This is pretty long even for local tests
export const VOTING_PERIOD = 80 // blocks
export const VOTING_DELAY = 10 // 1 Block - How many blocks till a proposal vote becomes active
export const ADDRESS_ZERO = "0x0000000000000000000000000000000000000000"

export const NEW_STORE_VALUE = 77
export const FUNC = "store"
export const PROPOSAL_DESCRIPTION = "Proposal #1 77 in the Box!"
