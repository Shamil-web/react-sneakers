import Card from "./components/Card/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

const arr = [
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 12999,
    imageUrl: "/img/sneakers/sneakers1.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Kyrie 7",
    price: 12799,
    imageUrl: "/img/sneakers/sneakers2.jpg",
  },
  {
    title: "Мужские Кроссовки Under Armour Curry 8",
    price: 8499,
    imageUrl: "/img/sneakers/sneakers3.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Air Max 270",
    price: 8999,
    imageUrl: "/img/sneakers/sneakers4.jpg",
  },
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex">
          {arr.map((obj) => (
            <Card
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onClick={() => console.log(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
