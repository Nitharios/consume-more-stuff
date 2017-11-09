import React from 'react';
import { Link } from 'react-router-dom';
// const Item = ({ id, name, description, manufacturer, modelname, price, category, condition, sold, owner }) => {

const Item = ({ singleItem }) => {
  return (
    <Link to={`/items/${singleItem.id}`}>
    <div className="item">
      <div> Name: { singleItem.name } </div>
      <div> Description: { singleItem.description } </div>
      <div> Manufacturer: { singleItem.manufacturer } </div>
      <div> Model Name: { singleItem.modelname } </div>
      <div> Price: ${ singleItem.price } </div>
      <div> Category: { singleItem.Category.category } </div>
      <div> Condition: { singleItem.Condition.condition } </div>
      <div> Sold: { singleItem.Status.sold } </div>
      <div> Owner: { singleItem.User.username } </div>
    </div>
    </Link>
  );
}

export default Item;