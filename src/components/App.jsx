import React from "react";
import List from "./List";

function App() {
  var [cc, setter2] = React.useState("");
  var [item, setter] = React.useState([]);

  function click(ele) {
    var data = ele.target.value;
    setter2(data);
  }
  function click2() {
    setter([...item, cc]);
    setter2("");
  }
  function deleteEle(id) {
    console.log(id);
    setter((pre) => {
      return pre.filter((value, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={click} value={cc} type="text" />
        <button type="submit" onClick={click2}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {item.map((value, index) => (
            <List key={index} id={index} onChecked={deleteEle} name={value} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
