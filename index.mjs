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
}

function szamNev(szam) {
  if (szam < 1000 || szam > 1999) return 'Csak 1000 és 1999 között!';

  const egyesek = ['', 'egy', 'kettő', 'három', 'négy', 'öt', 'hat', 'hét', 'nyolc', 'kilenc'];
  const tizesek = ['', 'tíz', 'húsz', 'harminc', 'negyven', 'ötven', 'hatvan', 'hetven', 'nyolcvan', 'kilencven'];

  let result = 'ezer';

  const maradek = szam % 1000;
  const szazas = Math.floor(maradek / 100);
  const tizesEgyes = maradek % 100;
  const tizes = Math.floor(tizesEgyes / 10);
  const egyes = tizesEgyes % 10;

  if (szazas > 0) {
    result += egyesek[szazas] + 'száz';
  }

  if (tizesEgyes >= 10 && tizesEgyes < 20) {
    if (tizesEgyes === 10) result += 'tíz';
    else result += 'tizen' + egyesek[egyes];
  } else {
    if (tizes > 0) result += tizesek[tizes];
    if (egyes > 0) result += egyesek[egyes];
  }

  return result;
}

for (let i = 1000; i <= 1999; i++) {
  console.log(`${i}: ${szamNev(i)}`);
}