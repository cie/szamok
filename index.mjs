export function szam(n) {
    const szamok = {
    1: 'egy', 2: 'kettő', 3: 'három', 4: 'négy', 5: 'öt',
    6: 'hat', 7: 'hét', 8: 'nyolc', 9: 'kilenc',
    30: 'harminc', 40: 'negyven', 50: 'ötven',
    60: 'hatvan', 70: 'hetven', 80: 'nyolcvan', 90: 'kilencven'
  };

  if (Number.isInteger(n)) {
    let tizes = Math.floor(n / 10) * 10;
    let egyes = n % 10;

    return egyes === 0 ? szamok[tizes] : `${szamok[tizes]}${szamok[egyes]}`;
  }
  
  const [egesz, tizedes] = n.toString().split('.');
  let eredmeny = szam(parseInt(egesz));
  
  if (tizedes) {
    eredmeny += ' egész ';
    
    for (let i = 0; i < tizedes.length; i++) {
      const jegy = parseInt(tizedes[i]);
      eredmeny += szamok[jegy];
    }
    
    if (tizedes.length === 1) {
      eredmeny += ' tized';
    } else if (tizedes.length === 2) {
      eredmeny += ' század';
    } else if (tizedes.length === 3) {
      eredmeny += ' ezred';
    } else {
      eredmeny += ` tíz a ${tizedes.length}.-on`;
    }
  }
  
  return eredmeny;
}