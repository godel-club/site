import * as PoolInfo from './pool-info.mjs'

// ---------------------------------------------------------------------------

const POOL_INFO_URL = 'https://js.adapools.org/pools/37d1bcbbdad75536f6c39d613d456f7c134114aeacf0df5bd41d1773/summary.json'

// ---------------------------------------------------------------------------

const godelPoolInfo = PoolInfo.getPoolInfo(POOL_INFO_URL)

PoolInfo.renderPoolInfo(godelPoolInfo)
