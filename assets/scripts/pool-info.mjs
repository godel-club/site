export async function getPoolInfo (poolInfoUrl) {
  const response = await fetch(poolInfoUrl)

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    return await response.json()
  }
}

export async function renderPoolInfo (poolInfo) {
  const infoRoot = document.getElementById('live-pool-info')

  console.log(await poolInfo)
}
