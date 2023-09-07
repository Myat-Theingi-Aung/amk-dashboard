import $ from 'jquery';

function App() {
  const jQueryCode = () => {
    $('h1').css('color', 'red')
  }

  return (
    <>
      <h1 className="text-center">App</h1>
      <button className="btn btn-primary" onClick={jQueryCode}>click</button>
    </>
  );
}

export default App;
