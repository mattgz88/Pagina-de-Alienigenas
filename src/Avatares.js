import "./styles.css";
import Nombres from "./Nombres";
import Planetas from "./Planetas";

export default function Avatar() {
  let aux2 = Math.floor(Math.random() * Planetas.length);
  let aux = Math.floor(Math.random() * Nombres.length);
  return (
    <div className="principal">
      <img
        className="avatars"
        src="https://api.minimalavatars.com/avatar/random/png"
      />
      <div>
        <h1 className="name"> {Nombres[aux].nombre} </h1>
        <div className="englobar">
          <h3 className="planet"> Origen: {Planetas[aux2].planeta} </h3>
          <h3 className="planet">{Planetas[aux2].frase} </h3>
        </div>
      </div>
    </div>
  );
}
