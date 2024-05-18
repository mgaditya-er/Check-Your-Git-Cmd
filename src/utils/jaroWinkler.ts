export function jaroWinkler(s1: string, s2: string): number {
    const m = getMatchingCharacters(s1, s2);
    if (!m.length) return 0;
    
    const t = getTranspositions(s1, s2, m);
  
    const j = ((m.length / s1.length) + (m.length / s2.length) + ((m.length - t) / m.length)) / 3;
    const p = 0.1; // scaling factor
    const l = Math.min(getPrefixLength(s1, s2), 4);
  
    return j + l * p * (1 - j);
  }
  
  function getMatchingCharacters(s1: string, s2: string): string {
    const matchingDistance = Math.floor(Math.max(s1.length, s2.length) / 2) - 1;
    let matchingChars = '';
  
    for (let i = 0; i < s1.length; i++) {
      for (let j = Math.max(0, i - matchingDistance); j < Math.min(s2.length, i + matchingDistance + 1); j++) {
        if (s1[i] === s2[j] && !matchingChars.includes(s2[j])) {
          matchingChars += s2[j];
          break;
        }
      }
    }
  
    return matchingChars;
  }
  
  function getTranspositions(s1: string, s2: string, matchingChars: string): number {
    let transpositions = 0;
  
    let k = 0;
    for (let i = 0; i < s1.length; i++) {
      if (matchingChars.includes(s1[i])) {
        if (s1[i] !== s2[k]) transpositions++;
        k++;
      }
    }
  
    return transpositions / 2;
  }
  
  function getPrefixLength(s1: string, s2: string): number {
    let prefixLength = 0;
  
    for (let i = 0; i < Math.min(s1.length, s2.length); i++) {
      if (s1[i] === s2[i]) {
        prefixLength++;
      } else {
        break;
      }
    }
  
    return prefixLength;
  }
  