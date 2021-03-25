import Heading from "../../layout/Heading";
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL, PRODUCTS_ENDPOINT } from "../../constants/api";
import ProductItem from "./ProductItem";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(
    () => {
      async function getData() {
        // Try and catch block always okei to test your fetch before you implement it
        try {
          // Call fetch
          // Pull out the data as usual
          const response = await axios.get(`${BASE_URL}${PRODUCTS_ENDPOINT}`);
          // console.log(response.data);
          // Save the response into state
          setProducts(response.data);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      }
      getData();
    },
    // didn't pass a value, will render as usual
    []
  );

  // if its true return
  if (loading) return <div>Loading..</div>;
  // if its true return
  if (error) return <div>an error happened</div>;
  // map over the product array and return some JSX for each item. Because the map method returns a new array, an array of JSX will be rendered.
  return (
    <div className="container">
      <Heading title="Home" />
      {products.map(function (product) {
        let { id, image, name, description, price } = product;
        return (
          <ProductItem
            key={id}
            id={id}
            image={image}
            name={name}
            description={description}
            price={price}
          />
        );
      })}
    </div>
  );
}

// Home
//  an array of items
//  a single item retrieved by a parameter (id, name, slug, etc)
// Each result should link to the detail page, passing a parameter in the URL.
