import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { BASE_URL, PRODUCTS_ENDPOINT } from "../../constants/api";

export default function ProductDetail() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let history = useHistory();

  const { id } = useParams();

  if (!id) {
    history.push("/");
  }

  const url = BASE_URL + PRODUCTS_ENDPOINT + "/" + id;

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(url);
        console.log("response", response.data);
        setProduct(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [url]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>ERROR: An error occured</div>;
  }

  return (
    <div>
      <img src={product.image} alt={product.image}></img>
      <h3>{product.name} </h3>
      <p>{product.description} </p>
      <p>{product.price} Kr</p>
    </div>
  );
}

// Detail
// Retrieve the parameter from the URL and use it in an API call to fetch one item.
// Display at least 3 properties from the item.
