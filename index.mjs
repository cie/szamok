export function szam(n) {
  const szamok = {
    0: 'nulla',
    1: 'egy', 2: 'kettő', 3: 'három', 4: 'négy', 5: 'öt',
    6: 'hat', 7: 'hét', 8: 'nyolc', 9: 'kilenc',
    10: 'tíz', 11: 'tizenegy', 12: 'tizenkettő', 13: 'tizenhárom', 
    14: 'tizennégy', 15: 'tizenöt', 16: 'tizenhat', 17: 'tizenhét', 
    18: 'tizennyolc', 19: 'tizenkilenc',
    20: 'húsz',
    30: 'harminc', 40: 'negyven', 50: 'ötven',
    60: 'hatvan', 70: 'hetven', 80: 'nyolcvan', 90: 'kilencven'
  };

  // Ha a szám egész, használjuk az eredeti logikát
  if (Number.isInteger(n)) {
    if (n === 0) return szamok[0];
    if (szamok[n]) return szamok[n];
    
    let tizes = Math.floor(n / 10) * 10;
    let egyes = n % 10;
    
    if (tizes === 10) {
      return `tizen${szamok[egyes]}`;
    } else if (tizes === 20 && egyes > 0) {
      return `húsz${szamok[egyes]}`;
    }
    
    return egyes === 0 ? szamok[tizes] : `${szamok[tizes]}${szamok[egyes]}`;
  }
  
  // Tizedes számok kezelése
  const [egesz, tizedes] = n.toString().split('.');
  let eredmeny = '';
  
  // Egész rész
  if (egesz === '0') {
    eredmeny = 'nulla';
  } else {
    eredmeny = szam(parseInt(egesz));
  }
  
  // Tizedes rész
  if (tizedes) {
    eredmeny += ' egész ';
    
    // Minden tizedes jegyet egyesével mondunk ki
    for (let i = 0; i < tizedes.length; i++) {
      const jegy = parseInt(tizedes[i]);
      eredmeny += szamok[jegy];
      if (i < tizedes.length - 1) eredmeny += '';
    }
    
    // Tizedes helyek megnevezése
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