import "./App.css";
import Card from "./components/Card/Card";
import food from "./assets/lahmacun.png"; // Tell webpack this JS file uses this image

function App() {
  const recipeAuthor = "Aykut";
  const recipeItem = {
    title: "Lahmacun",
    date: "30 Nisan 2021, Cuma",
    image: food,
    description:
      "Lahmacun, açılmış hamurun üzerine kıyma, maydanoz, soğan, sarımsak, karabiber ve isot gibi baharatlarla hazırlanan malzemeyle taş fırında pişirilen harika bir lezzettir.",
  };

  const likeCount = 194;
  const isLiked = true;

  return (
    <div className="App">
      <header className="App-header">
        <Card
          /* prop ismi = { değişken } */
          author={recipeAuthor}
          title={recipeItem.title}
          date={recipeItem.date}
          description={recipeItem.description}
          like={likeCount}
          liked={isLiked}
          image={recipeItem.image}
        />
      </header>
    </div>
  );
}

export default App;
