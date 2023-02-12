export function Header() {
const handSigns = ["rock","paper","scissors"]
  return (

    <header>
      <h1>Rock Paper Scissors</h1>
      <div className="box-img-tittle">
        {handSigns.map(card=>  <div key={card} id={`img-title-${card}`} className="img-title"></div>)}
      </div>
      <h2>New game</h2>
    </header>
  );
}
