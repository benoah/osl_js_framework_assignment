import React from "react";
import { Link } from "react-router-dom";
import { Card, Badge } from "react-bootstrap";

export default function ProductItem({ id, image, name, description, price }) {
  // console.log(date);
  return (
    <Card className="h-100 shadow-sm bg-white rounded">
      <Card.Img variant="top h-50 " src={image} />
      <Card.Body>
        <div className="row">
          <div className="col-8">
            {" "}
            <Card.Title className="mb-0 font-weight-bold">{name}</Card.Title>
          </div>
          <div className="col-2">
            <Badge pill className="mb-1" variant="warning">
              {price}
            </Badge>
          </div>
        </div>
        <Card.Text className="text-secondary">{description}</Card.Text>
        <Link to={`detail/${id}`} variant="outline-success">
          detail
        </Link>
      </Card.Body>
    </Card>
  );
}
