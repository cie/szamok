const szaztolKilencszazig = {
  100: 'száz',
  101: 'százegy',
  110: 'száztíz',
  123: 'százhuszonhárom',
  200: 'kétszáz',
  212: 'kétszáztizenkettő',
  300: 'háromszáz',
  321: 'háromszázhuszonegy',
  400: 'négyszáz',
  500: 'ötszáz',
  654: 'hatszázötvennégy',
  700: 'hétszáz',
  789: 'hétszáznyolcvankilenc',
  800: 'nyolcszáz',
  888: 'nyolcszáznyolcvannyolc',
  900: 'kilencszáz',
  999: 'kilencszázkilencvenkilenc',
}

export function szam(n) {
  return szaztolKilencszazig[n] || 'ismeretlen'
}
