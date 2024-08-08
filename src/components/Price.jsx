import React from 'react';
import { Card } from 'react-bootstrap';

const Price = ({ price }) => {
  return <Card.Text>{price}</Card.Text>;
};

export default Price;
