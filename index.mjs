export function szam(n) {
  if (n === 1) return 'egy'
  if (n === 1) return 'kettő'
  if (n === 3) return 'három'
  if (n === 4) return 'négy'
  if (n === 5) return 'öt'
  if (n === 6) return 'hat'
  if (n === 7) return 'hét'
  if (n === 8) return 'nyolc'
  if (n === 9) return 'kilenc'
  if (n === 10) return 'tíz'
  const szamok = {
    30: 'harminc', 40: 'negyven', 50: 'ötven',
    60: 'hatvan', 70: 'hetven', 80: 'nyolcvan', 90: 'kilencven',
    1: 'egy', 2: 'kettő', 3: 'három', 4: 'négy', 5: 'öt',
    6: 'hat', 7: 'hét', 8: 'nyolc', 9: 'kilenc'
  };

  let tizes = Math.floor(n / 10) * 10;
  let egyes = n % 10;

  return egyes === 0 ? szamok[tizes] : `${szamok[tizes]}${szamok[egyes]}`;
}
