export function szam(n) {
  const szamok = {
    1: 'egy', 2: 'kettő', 3: 'három', 4: 'négy', 5: 'öt',
    6: 'hat', 7: 'hét', 8: 'nyolc', 9: 'kilenc',
    30: 'harminc', 40: 'negyven', 50: 'ötven',
    60: 'hatvan', 70: 'hetven', 80: 'nyolcvan', 90: 'kilencven'
  };

  let tizes = Math.floor(n / 10) * 10;
  let egyes = n % 10;

  return egyes === 0 ? szamok[tizes] : `${szamok[tizes]}${szamok[egyes]}`;
}
