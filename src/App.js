import Button from "./Button";

function App() {
  return (
    <div>
      <h1>App.js</h1>
      <div>
        <Button success rounded outline>
          Click Me!
        </Button>
      </div>
      <div>
        <Button>Buy Now!</Button>
      </div>
      <div>
        <Button>See deal!</Button>
      </div>
      <div>
        <Button>Hide Ads!</Button>
      </div>
      <div>
        <Button>Somthing!</Button>
      </div>
      <div>
        <Button className="bg-cyan-600">Somthing 2!</Button>
      </div>
    </div>
  );
}

export default App;
