import React from "react";

import "./App.css";
import { router } from "./routes/route";
import { RouterProvider } from "react-router-dom";
import { firestoreDb } from "./service/firebase";
import {
  CourseType,
  setData,
  setLoadingSlice,
} from "./store/features/courseSlice";
import { collection, getDocs } from "firebase/firestore";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const [loading, setIsLoadingCourse] = React.useState(false);

  const fetchCourse = async () => {
    dispatch(setLoadingSlice(true));
    const result: CourseType[] = [];
    try {
      const querySnapshot = await getDocs(collection(firestoreDb, "course"));
      querySnapshot.forEach((doc) => {
        result.push(doc.data());
      });

      dispatch(setData(result));
      dispatch(setLoadingSlice(false));
    } catch (error) {
      dispatch(setData([]));
      dispatch(setLoadingSlice(true));
    }
  };

  React.useEffect(() => {
    fetchCourse();
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
