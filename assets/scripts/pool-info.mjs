export async function getPoolInfo (poolInfoUrl) {
  const response = await fetch(poolInfoUrl)

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    return await response.json()
  }
}

export async function renderPoolInfo (poolInfo) {
  const $root = document.getElementById('pool-info')

  if ($root) {
    const { data } = await poolInfo

    const fields = Object.keys(data)
      .map(domMap($root, data))
      .filter(pruneNilNodes)

    fields.forEach(updateFieldData)
  }
}

const domMap = ($root, data) => (fieldName) => {
  return {
    $el: $root.querySelector(`[data-field="${fieldName}"]`),
    field: data[fieldName]
  }
}

function pruneNilNodes ({ $el }) {
  return $el !== null
}

function updateFieldData ({ $el, field }) {
  $el.textContent = field
}
