import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { backendUrl } from "../../api/api";
import "./DetailPage.css";
import BackButton from "../../components/BackButton/BackButton";
import BookmarkIcon from "../../components/BookmarkIcon/BookmarkIcon";

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
      <BackButton />
      <article>
        <img
          src={`${backendUrl}/${bookDetails?.image}`}
          // src={`${backendUrl}/data/images/${bookDetails?.image}`}
          // src={`${backendUrl}/backend/data/images/${bookDetails?.image}`}
          // src={"http://localhost:3003/" + transaction.fileName}
          alt={bookDetails?.title}
        />

        <div>
          <h2>{bookDetails?.title}</h2>
          <p>{bookDetails?.author}</p>
          <p>{bookDetails?.category}</p>
          <p>{bookDetails?.isbn}</p>
          <p>{bookDetails?.variations}</p>
          <p>{bookDetails?.description}</p>
          <p>{bookDetails?.price}</p>
          {/* Lesezeichen Komponente */}
          {/* Warenkorb Button Kombonente */}

          <div className="detailpage-icons">
            <BookmarkIcon />
            <Link className="btn-transparent">In den Warenkorb legen</Link>
          </div>
        </div>
      </article>
    </main>
  );
};

export default DetailPage;
