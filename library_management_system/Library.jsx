function Library() {
  const [books, setBooks] = React.useState([

  { id: 1, title: "Clean Code", author: "Robert C. Martin", category: "Programming", emoji: "💻" },
  { id: 2, title: "You Don't Know JS", author: "Kyle Simpson", category: "Programming", emoji: "📘" },
  { id: 3, title: "The Pragmatic Programmer", author: "Andrew Hunt", category: "Programming", emoji: "🧠" },
  { id: 4, title: "Code Complete", author: "Steve McConnell", category: "Programming", emoji: "📗" },

 
  { id: 5, title: "Artificial Intelligence", author: "Stuart Russell", category: "AI / ML", emoji: "🤖" },
  { id: 6, title: "Pattern Recognition and ML", author: "Christopher Bishop", category: "AI / ML", emoji: "📊" },
  { id: 7, title: "Deep Learning", author: "Ian Goodfellow", category: "AI / ML", emoji: "🧬" },


  { id: 8, title: "Operating System Concepts", author: "Silberschatz", category: "Computer Science", emoji: "🖥️" },
  { id: 9, title: "Introduction to Algorithms", author: "Cormen", category: "Computer Science", emoji: "📚" },
  { id: 10, title: "Computer Networks", author: "Tanenbaum", category: "Computer Science", emoji: "🌐" },
  { id: 11, title: "Database System Concepts", author: "Korth", category: "Computer Science", emoji: "🗄️" }
]);


  const [search, setSearch] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [author, setAuthor] = React.useState("");
  const [category, setCategory] = React.useState("");

  const addBook = () => {
    if (!title || !author || !category) {
      alert("Please fill all fields");
      return;
    }

    setBooks([
      ...books,
      {
        id: Date.now(),
        title,
        author,
        category,
        emoji: "📖"
      }
    ]);

    setTitle("");
    setAuthor("");
    setCategory("");
  };

  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="library">
      <h2>📚 Library Management System</h2>

      <p className="count">
        Total Books: {books.length} | Showing: {filteredBooks.length}
      </p>

      <input
        className="search"
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
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <button onClick={addBook}>➕ Add Book</button>
      </div>

      <div className="grid">
        {filteredBooks.length === 0 ? (
          <p className="empty">📭 No books found</p>
        ) : (
          filteredBooks.map(book => (
            <div key={book.id} className="book-card">
              <div className="emoji">{book.emoji}</div>
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <span className="tag">{book.category}</span>
              <button onClick={() => removeBook(book.id)}>❌ Remove</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
