import React, { useEffect, useState } from "react";
import { doc, getDoc, DocumentSnapshot, Firestore } from "firebase/firestore";
import { firestoreDb } from "../service/firebase";

interface Props {
  id: string;
  collection: string;
}

interface CustomHookData {
  data: any;
  loading: boolean;
  error: any;
}

export default function useFsDoc({ id, collection }: Props): CustomHookData {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const fetchDoc = async () => {
    setLoading(true);

    try {
      const docRef = doc(firestoreDb as Firestore, collection, id);
      const docSnap: DocumentSnapshot = await getDoc(docRef);

      if (docSnap.exists()) {
        const result = docSnap.data();
        setData(result);
      } else {
        setError("No such document!");
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDoc();
  }, [id, collection]);

  return { data, loading, error };
}
