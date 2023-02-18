export const joinArrayWithAnd = (
  array: any[],
  language: 'pt' | 'en' | 'es',
) => {
  let connector = '';

  switch (language) {
    case 'pt':
      connector = 'e';
      break;
    case 'es':
      connector = 'y';
      break;
    case 'en':
      connector = 'and';
      break;
  }

  const mapped = array.map((item, index) => {
    if (index === array.length - 2) {
      return item + ` ${connector} `;
    } else if (index === array.length - 1) {
      return item;
    } else {
      return item + ', ';
    }
  });
  return mapped.join('');
};
