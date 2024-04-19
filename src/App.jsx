import banner from "./assets/banner.png";
import Card from "./components/Card";

function App() {
  console.log("initial render");
  return (
    <main class="container m-auto">
      <header>
        <h1>Ninja merch</h1>
      </header>
      <img class="rounded-md" src={banner} alt="site banner" />
      <section class="grid grid-cols-4 my-4 gap-10">
        <Card rounded={true} flat={false}>
          <h2>Title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            voluptatum porro ducimus, sint sequi eaque!
          </p>
          <button type="button" class="btn">
            Add to cart
          </button>
        </Card>
        <Card rounded={false} flat={true}>
          <h2>Title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            voluptatum porro ducimus, sint sequi eaque!
          </p>
          <button type="button" class="btn">
            Add to cart
          </button>
        </Card>
      </section>
    </main>
  );
}

export default App;
