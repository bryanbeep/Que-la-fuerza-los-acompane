import "./Card.css";

 

function Card({ image, title, price }) {

  return (

    <div className="card">

      <img src={image} alt={title} />

 

      <div className="card-body">

        <h3>{title}</h3>

 

        <p>${price}</p>

 

        <button>Añadir al carrito</button>

      </div>

    </div>

  );

}

 

export default Card;