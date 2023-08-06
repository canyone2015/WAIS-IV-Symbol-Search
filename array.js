export function random(array) {
    return array[~~(Math.random() * array.length)];
  }
  
  export function shuffle(array) {
    return [...array]
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  }