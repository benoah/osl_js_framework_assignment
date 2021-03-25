import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { BASE_URL, PRODUCTS_ENDPOINT } from "../../constants/api";
import Heading from "../../layout/Heading";
import { Card, Badge, Container, Col } from "react-bootstrap";

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
    <>
      <Container>
        <Heading title="Detailpage" />
      </Container>
      <Col md={{ span: 6, offset: 3 }}>
        <Container>
          <Card className="w-50 shadow-sm bg-white rounded">
            <Card.Img variant="top h-40 " src={product.image} />
            <Card.Body>
              <div className="row">
                <div className="col-8">
                  {" "}
                  <Card.Title className="mb-0 font-weight-bold">
                    {product.name}
                  </Card.Title>
                </div>
                <div className="col-2">
                  <Badge pill className="mb-1" variant="warning">
                    {product.price}
                  </Badge>
                </div>
              </div>
              <Card.Text className="text-secondary">
                {product.description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </Col>
    </>
  );
}

// Detail
// Retrieve the parameter from the URL and use it in an API call to fetch one item.
// Display at least 3 properties from the item.
