import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { backendUrl } from "../../api/api";
import "./DetailPage.css";

const DetailPage = () => {
  const [bookDetails, setBookDetails] = useState({});
  const { bookId } = useParams();

  useEffect(() => {
    fetch(`${backendUrl}/api/v1/products/${bookId}`)
      .then((res) => res.json())
      .then((data) => setBookDetails(data.result))
      .catch((err) => console.log(err));
  }, []);
  console.log(bookDetails);
  // author: "Hannah Emde"
  // category: "Reiseliteratur"
  // createdAt: "2024-05-14T09:57:32.070Z"
  // description: "Zwischen Abenteuer und Artenschutz"
  // image: "emde.jpg"
  // isbn: "978-3-89029-580-0"
  // price: 20;
  // stock: 2587;
  // title: "Nachtschicht mit Aras";
  // updatedAt: "2024-05-14T09:57:32.070Z";
  // variations: "Hardcover";
  // __v: 0;
  // _id: "6643358c3910229015a281e1";

  return (
    <main className="detailpage">
      {/* // # multer noch im backend integrieren */}
      <img
        src={`${backendUrl}/data/${bookDetails?.image}`}
        // src={"http://localhost:3003/" + transaction.fileName}
        alt={bookDetails?.title}
      />

      <article>
        <h2>{bookDetails?.title}</h2>
        <p>{bookDetails?.author}</p>
        <p>{bookDetails?.category}</p>
        <p>{bookDetails?.isbn}</p>
        <p>{bookDetails?.variations}</p>
        <p>{bookDetails?.description}</p>
        {/* Lesezeichen Komponente */}
        {/* Warenkorb Button Kombonente */}
      </article>
    </main>
  );
};

export default DetailPage;
