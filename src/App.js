import "./App.css";
import { useEffect, useState } from "react";
import AddPesilat from "./component/AddPesilat";
import Pesilat from "./component/Pesilat";
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./firebase";

const App = () => {
  const [pesilat, setPesilat] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "pesilat-demo"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let pesilatArray = [];
      querySnapshot.forEach((doc) => {
        pesilatArray.push({ ...doc.data(), id: doc.id });
      });
      setPesilat(pesilatArray);
    });
    return () => unsub();
  }, []);

  const toggleComplete = async (pesilat) => {
    await updateDoc(doc(db, "pesilat-demo", pesilat.id), { completed: !pesilat.completed });
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "pesilat-demo", id));
  };
  return (
    <div>
      <AddPesilat />
      <div className="task_container">
        {pesilat.map((plst) => (
          <Pesilat
            key={plst.id}
            plst={plst}
            toggleComplete={toggleComplete}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default App;