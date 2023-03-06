import React from "react";

function List(pro) {
  // function Handle() {}

  return (
    <li
      onClick={() => {
        pro.onChecked(pro.id);
      }}
    >
      {pro.name}
    </li>
  );
}
export default List;
