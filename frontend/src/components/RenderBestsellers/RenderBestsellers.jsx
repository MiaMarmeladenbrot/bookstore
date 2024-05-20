import { useContext } from "react";
import { allProductsFetch } from "../../context/Context";
import { backendUrl } from "../../api/api";
import { Link } from "react-router-dom";
import "./RenderBestsellers.css";

const RenderBestsellers = () => {
  const { allProducts } = useContext(allProductsFetch);

  return (
    <section className="render-bestsellers">
      <h2>Unsere Bestseller</h2>
      <article>
        {allProducts?.result?.map((item) => (
          <Link key={item._id} to={`/books/${item._id}`}>
            <div>
              <img src={`${backendUrl}/${item?.image}`} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.author}</p>
              <p>{item.price} €</p>
            </div>
          </Link>
        ))}
      </article>
    </section>
  );
};

export default RenderBestsellers;
