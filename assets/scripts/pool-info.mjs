export async function getPoolInfo (poolInfoUrl) {
  const response = await fetch(poolInfoUrl)

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
     await response.json()
  }
}

export async function renderPoolInfo (poolInfo) {
  const $root = document.getElementById('live-pool-info')

  const info = JSON.stringify(await poolInfo, null, 2)

  let $el = document.createElement('span')

  $el.textContent = info

  if ($root) {
    $root.appendChild($el)
  }
}
