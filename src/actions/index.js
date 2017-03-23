export function selectBook(book) {
// actions return a type and a payload

  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
