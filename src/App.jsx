import banner from "./assets/banner.png";
import Card from "./components/Card";

function App() {
  console.log("initial render");
  return (
    <main>
      <div style={{ width: "100%", height: "10%" }}>
        <img
          src={banner}
          alt="Banner"
          style={{ width: "100%", height: "100%" }}
        />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
}

export default App;
