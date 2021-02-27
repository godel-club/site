// import * as ClubExpression from './club-expression.mjs'
import * as PoolInfo from './pool-info.mjs'

// ---------------------------------------------------------------------------

const POOL_INFO_URL = 'https://js.adapools.org/pools/37d1bcbbdad75536f6c39d613d456f7c134114aeacf0df5bd41d1773/summary.json'
// const CLUB_EXPRESSION = '\\forall i.t \\in {\\rm GODEL}, t_{k} > t_{j} \\implies i(t_{k}) > i(t_{j})'

// ---------------------------------------------------------------------------

const poolInfo = PoolInfo.getPoolInfo(POOL_INFO_URL)

poolInfo.then(info => console.info('Retrieved pool info!', info))

// PoolInfo.renderPoolInfo(poolInfo)

// ---------------------------------------------------------------------------

// ClubExpression.renderClubExpression(CLUB_EXPRESSION)
