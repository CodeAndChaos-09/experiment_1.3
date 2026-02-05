function Library() {
  const [books, setBooks] = React.useState([
    { id: 1, title: "Clean Code", author: "Robert C. Martin" },
    { id: 2, title: "You Don't Know JS", author: "Kyle Simpson" }
  ]);

  const [search, setSearch] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [author, setAuthor] = React.useState("");

  const addBook = () => {
    if (title && author) {
      setBooks([
        ...books,
        { id: Date.now(), title, author }
      ]);
      setTitle("");
      setAuthor("");
    }
  };

  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="library">
      <h2>Library Management</h2>

      <input
        type="text"
        placeholder="Search book..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="form">
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Author Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <button onClick={addBook}>Add Book</button>
      </div>

      <ul>
        {filteredBooks.map(book => (
          <li key={book.id}>
            <span>
              <strong>{book.title}</strong> — {book.author}
            </span>
            <button onClick={() => removeBook(book.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
