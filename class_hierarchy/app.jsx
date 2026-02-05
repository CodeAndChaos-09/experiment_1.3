const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  const people = [
    new Student("Aman", 20, "Computer Science"),
    new Teacher("Dr. Sharma", 45, "Artificial Intelligence")
  ];

  return (
    <div className="container">
      <h1>Person Class Hierarchy</h1>

      {people.map((person, index) => (
        <div key={index} className="card">
          {person.getDetails()}
        </div>
      ))}
    </div>
  );
}

root.render(<App />);
