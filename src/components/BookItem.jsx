function BookItem({ book, onDelete }) {
  return (
    <div>
      <h3>{book.title}</h3>
      <p>Автор: {book.author}</p>
      <p>Рік: {book.year}</p>

      <button onClick={() => onDelete(book.id)}>
        Видалити
      </button>
    </div>
  );
}

export default BookItem;