function fetchSavedBookIds() {
  const savedBooks = localStorage.getItem('saved_books');
  return savedBooks ? JSON.parse(savedBooks) : [];
}

function updateBookIds(bookIdArr) {
  if (bookIdArr.length) {
    localStorage.setItem('saved_books', JSON.stringify(bookIdArr));
  } else {
    localStorage.removeItem('saved_books');
  }
}

function deleteBookId(bookId) {
  let savedBookIds = localStorage.getItem('saved_books');
  savedBookIds = savedBookIds ? JSON.parse(savedBookIds) : null;

  if (!savedBookIds) {
    return false;
  }

  const refreshedSavedBookIds = savedBookIds?.filter((savedBookId) => savedBookId !== bookId);
  localStorage.setItem('saved_books', JSON.stringify(refreshedSavedBookIds));

  return true;
}

export const getSavedBookIds = fetchSavedBookIds;
export const saveBookIds = updateBookIds;
export const removeBookId = deleteBookId;
