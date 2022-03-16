import React from "react";

const Pesilat = ({ plst, toggleComplete, handleDelete }) => {
  return (
    <div className="task">
      <p
        style={{ textDecoration: plst.completed && "line-through" }}
        onClick={() => toggleComplete(plst)}
      >
        {plst.nama_pesilat}
      </p>

      <button onClick={() => handleDelete(plst.id)}>X</button>
    </div>
  );
};

export default Pesilat;