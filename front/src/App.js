import communes from "./../src/datas/communes"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {communes.forEach(element => {
              console.log(element);
          })}
        </p>
      </header>
    </div>
  );
}

export default App;
