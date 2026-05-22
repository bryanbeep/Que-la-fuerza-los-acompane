import "./CardsSection.css";

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

function CardsSection() {
  const toys = [
    {
      image: "https://images.unsplash.com/photo-1558877385-81a1c7e67d72?w=400",
      title: "Oso de Peluche",
      price: 19.99,
    },
    {
      image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400",
      title: "Carro de Carreras",
      price: 24.99,
    },
    {
      image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=400",
      title: "Bloques de Construcción",
      price: 29.99,
    },
  ];

  return (
    <section className="cards-section">
      {toys.map((toy, index) => (
        <Card
          key={index}
          image={toy.image}
          title={toy.title}
          price={toy.price}
        />
      ))}
    </section>
  );
}

export default CardsSection;
