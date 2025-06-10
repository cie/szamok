export function szam(n) {
  const szamok = {
    1: 'egy', 2: 'kettő', 3: 'három', 4: 'négy', 5: 'öt',
    6: 'hat', 7: 'hét', 8: 'nyolc', 9: 'kilenc',
    10: 'tíz', 20: 'húsz', 30: 'harminc', 40: 'negyven',
    50: 'ötven', 60: 'hatvan', 70: 'hetven', 80: 'nyolcvan', 90: 'kilencven',
    100: 'száz', 200: 'kétszáz', 300: 'háromszáz', 400: 'négyszáz',
    500: 'ötszáz', 600: 'hatszáz', 700: 'hétszáz', 800: 'nyolcszáz', 900: 'kilencszáz',
    1000000: 'egymillió', 2000000: 'kétmillió'
  };

  let tizes = Math.floor(n / 10) * 10;
  let egyes = n % 10;

  if (n < 10) return szamok[n];
  if (n < 20) return `tizen${szamok[egyes]}`;
  if (n < 100) return egyes === 0 ? szamok[tizes] : `${szamok[tizes]}${szamok[egyes]}`;

  if (n >= 1000 && n <= 1999) {
    const szazas = Math.floor((n % 1000) / 100) * 100;
    const maradek = n % 100;

    let eredmeny = 'ezer';

    if (szazas > 0) {
      eredmeny += szamok[szazas];
    }

    if (maradek > 0) {
      if (maradek < 10) {
        eredmeny += szamok[maradek];
      } else if (maradek < 20) {
        eredmeny += `tizen${szamok[maradek % 10]}`;
      } else {
        const tizes = Math.floor(maradek / 10) * 10;
        const egyes = maradek % 10;
        eredmeny += egyes === 0
          ? szamok[tizes]
          : `${szamok[tizes]}${szamok[egyes]}`;
      }
    }

    return eredmeny;
  }

  return 'Nem támogatott szám.';
}