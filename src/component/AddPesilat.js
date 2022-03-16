import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const AddPesilat = () => {
  const [newNama, setnewNama] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "pesilat-demo"), {
      nama_pesilat: newNama,
      created: new Date(),
      completed: false,
    });
    setnewNama("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Pesilat</h3>
      <div className="input_container">
        <input
          type="text"
          placeholder="Masukkan Pesilat .."
          value={newNama}
          onChange={(e) => setnewNama(e.target.value)}
        />
      </div>
      <div className="btn_container">
        <button>Add</button>
      </div>
    </form>
  );
};

export default AddPesilat;