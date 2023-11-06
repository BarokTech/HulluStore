/* eslint-disable react/prop-types */
import { useState } from "react";
import { categories } from "../data/categoryData";

export default function Sidebar({ selected, onSelect }) {
  // console.log(categories);
  const [category] = useState(categories);
  return (
    <>
      <div className="col-10">
        <ul className="list-group">
          <li className="list-group-item bg-secondary">Product Categories</li>
          {category.map((category) => (
            <li
              key={category.id}
              onClick={() => onSelect(category.id)}
              className={
                selected === category.name
                  ? "list-group-item active"
                  : "list-group-item"
              }
            >
              {category.name}
            </li>
          ))}

          {/* <li className="list-group-item bg-secondary">Product Categories</li>
          <li onClick={() => {}} className="list-group-item">
            Shoes
          </li>
          <li onClick={() => {}} className="list-group-item">
            T-shirts
          </li> */}
        </ul>
      </div>
    </>
  );
}
