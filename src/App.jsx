import About from "./components/About";
import Ad from "./components/Ad";
import Counter from "./components/Counter";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./components/Products";
import Subscribe from "./components/Subscribe";

export default function App() {
  console.log("renderApp");

  return (
    <div className="app-container">
      <Header />
      <main className="main-container">
        <Counter />
        <About />
        <Products />
        <Ad />
        <Subscribe />
      </main>
      <Footer />
    </div>
  );
}
