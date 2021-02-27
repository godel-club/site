import katex from 'https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.mjs'

export const renderClubExpression = (expr) => {
  const $tex = document.getElementById('godel-symbol')

  katex.render(expr, $tex, { throwOnError: false })
}
