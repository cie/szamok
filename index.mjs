export function szam(n) {
  const egyesek = [
    '', 'egy', 'kettő', 'három', 'négy', 'öt',
    'hat', 'hét', 'nyolc', 'kilenc'
  ];

  if (n >= 1 && n <= 9) return egyesek[n];
  if (n === 10) return 'tíz';
  if (n === 20) return 'húsz';
  if (n === 30) return 'harminc';

  if (n > 20 && n < 30) return 'huszon' + egyesek[n - 20];

  return '';
}
