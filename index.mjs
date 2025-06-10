export function szam(n) {
  const szamok = {
    1: 'egy', 2: 'kettő', 3: 'három', 4: 'négy', 5: 'öt',
    6: 'hat', 7: 'hét', 8: 'nyolc', 9: 'kilenc',
    10: 'tíz', 20: 'húsz', 30: 'harminc', 40: 'negyven',
    50: 'ötven', 1000000: 'egymillió', 2000000: 'kétmillió'
   
  };

  let tizes = Math.floor(n / 10) * 10;
  let egyes = n % 10;

  if (n < 10) return szamok[n];
  if (n < 20) return `tizen${szamok[egyes]}`;
  return egyes === 0 ? szamok[tizes] : `${szamok[tizes]}${szamok[egyes]}`;
}

