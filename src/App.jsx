import { useEffect, useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  // GET
  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:3001/books"
      );

      if (!response.ok) {
        throw new Error("Помилка завантаження");
      }

      const data = await response.json();
      setBooks(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // POST
  const addBook = async (book) => {
    try {
      const response = await fetch(
        "http://localhost:3001/books",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(book)
        }
      );

      const newBook = await response.json();

      setBooks([...books, newBook]);
    } catch (err) {
      setError(err.message);
    }
  };

  // DELETE
  const deleteBook = async (id) => {
    try {
      await fetch(
        `http://localhost:3001/books/${id}`,
        {
          method: "DELETE"
        }
      );

      setBooks(
        books.filter((book) => book.id !== id)
      );
    } catch (err) {
      setError(err.message);
    }
  };

  const filteredBooks = books.filter((book) =>
    book.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  if (loading) return <h2>Завантаження...</h2>;

  if (error) return <h2>{error}</h2>;

  return (
    <>
      <Header />

      <BookForm onAddBook={addBook} />

      <hr />

      <input
        type="text"
        placeholder="Пошук книги..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <BookList
        books={filteredBooks}
        onDelete={deleteBook}
      />

      <Footer />
    </>
  );
}

export default App;