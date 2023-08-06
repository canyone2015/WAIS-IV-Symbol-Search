const allSymbols = '∼≈≉⩪<⋖⩹≮≷⊁∢⊕⊖⊗⦻⊞±‡≠⏆∮≬⥾⪤⪽∪⊅⟃⩂⩃⤳⥋⥤⥲⊏⊢⊧⊩∟⟧'.split('');
const symmetric = '⊕⊗⦻⊞';
const semiSymmetric = '∼≈≉≷⊖‡≠⏆∮≬⪤⥋';
const asymmetric = allSymbols.filter(
  (symbol) => !symmetric.includes(symbol) && !semiSymmetric.includes(symbol)
);

/** @type SSSymbol[] */ 
const zeroRotations = symmetric
  .split('')
  .map((symbol) => ({ symbol, degrees: 0 }));

/** @type SSSymbol[] */ 
const twoRotations = semiSymmetric
  .split('')
  .map((symbol) => [
    { symbol, degrees: 0 },
    { symbol, degrees: 90 },
  ])
  .flat(1);

/** @type SSSymbol[] */ 
const fourRotations = asymmetric
  .map((symbol) => [
    { symbol, degrees: 0 },
    { symbol, degrees: 90 },
    { symbol, degrees: 180 },
    { symbol, degrees: 270 },
  ])
  .flat(1);

/** @type SSSymbol[] */ 
export const SYMBOLS = [...zeroRotations, ...twoRotations, ...fourRotations];