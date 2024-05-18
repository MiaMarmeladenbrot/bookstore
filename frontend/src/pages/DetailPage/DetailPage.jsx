import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { backendUrl } from "../../api/api";

const DetailPage = () => {
  const [bookDetails, setBookDetails] = useState({});
  const { bookId } = useParams();

  useEffect(() => {
    fetch(`${backendUrl}/api/v1/products/${bookId}`)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main>
      <h1>Detailpage</h1>
    </main>
  );
};

export default DetailPage;
