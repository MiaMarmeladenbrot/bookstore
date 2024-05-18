import { useContext } from "react";
import { allProductsFetch } from "../../context/Context";
import { backendUrl } from "../../api/api";
import { Link } from "react-router-dom";

const RenderBestsellers = () => {
  const { allProducts } = useContext(allProductsFetch);

  return (
    <section>
      <h2>Unsere Bestseller</h2>
      {allProducts?.result?.map((item) => (
        <div key={item._id}>
          <img
            src={`${backendUrl}/data/${item.image}`}
            // src={"http://localhost:3003/" + transaction.fileName}
            alt={item.title}
          />
          <p>{item.title}</p>
          <p>{item.author}</p>
          <p>{item.price} €</p>
          <Link to={`/books/${item._id}`}>Lies mehr</Link>
        </div>
      ))}
    </section>
  );
};

export default RenderBestsellers;
