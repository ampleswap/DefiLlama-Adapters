const { staking } = require("../helper/staking");

const MasterChefContract = "0xF5987603323AA99DDe0777a55E83C82D59cCA272";
const AMPLE = "0x19857937848c02afbde8b526610f0f2f89e9960d";
const FACTORY_BSC = "0x381fefadab5466bff0e8e96842e8e76a143e8f73";
const FACTORY_ALV = "0x01dC97C89DF7d3C616a696dD53F600aB3FF12983";

// node test.js projects/ampleswap/index.js

/*
module.exports = {
  timetravel: true,
  bsc: {
    staking: staking(MasterChefContract, AMPLE, "bsc"),
    tvl: bscTvl,
  },
  methodology:
    "We count liquidity on the Farms (LP tokens) and Pools (single tokens) seccions threw MasterChef Contract",
};*/
const { getUniTVL } = require('../helper/unknownTokens')
module.exports = {
    methodology: `Uses factory(0x381fefadab5466bff0e8e96842e8e76a143e8f73) address and whitelisted tokens address to find and price Liquidity Pool pairs`,
    misrepresentedTokens: true,
    incentivized: true,
    bsc: {
        tvl: getUniTVL({ factory: '0x381fefadab5466bff0e8e96842e8e76a143e8f73', chain: 'bsc', useDefaultCoreAssets: true }),
        staking: staking(MasterChefContract, AMPLE, "bsc"),
    }
};

