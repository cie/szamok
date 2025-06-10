const kilencszazigegyesek = [
  '', 'egy', 'kettő', 'három', 'négy', 'öt', 'hat', 'hét', 'nyolc', 'kilenc'
]

const kilencszazigtizesek = [
  '', 'tíz', 'húsz', 'harminc', 'negyven', 'ötven', 'hatvan', 'hetven', 'nyolcvan', 'kilencven'
]

const kilencszazigtizen = [
  '', 'tizenegy', 'tizenkettő', 'tizenhárom', 'tizennégy', 'tizenöt', 'tizenhat', 'tizenhét', 'tizennyolc', 'tizenkilenc'
]

export function szam(n) {
  if (n < 100 || n > 999) return 'ismeretlen'

  const kilencszazigszazas = Math.floor(n / 100)
  const kilencszazigtizes = Math.floor((n % 100) / 10)
  const kilencszazigegyes = n % 10
  const kilencszazigmaradek = n % 100

  let s = ''

  // Százak
  if (kilencszazigszazas === 1) {
    s += 'száz'
  } else {
    s += kilencszazigegyesek[kilencszazigszazas] + 'száz'
  }

  // 10-19 között
  if (kilencszazigmaradek >= 10 && kilencszazigmaradek < 20) {
    s += kilencszazigtizen[kilencszazigmaradek - 10]
  } else {
    s += kilencszazigtizesek[kilencszazigtizes]
    if (kilencszazigegyes !== 0) {
      s += kilencszazigegyesek[kilencszazigegyes]
    }
  }

  return s
}
