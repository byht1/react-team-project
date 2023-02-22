export const getCategoty = value => {
  let categoryName = '';

  switch (value) {
    case 'for-free':
      categoryName = 'in good hands';
      break;

    case 'lost-found':
      categoryName = 'lost/found';
      break;

    default:
      categoryName = 'sell';
      break;
  }
};
