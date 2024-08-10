import { collection, getDocs } from "firebase/firestore";
import { fireDB } from "./FirebaseConfig";

export const getAllDocumentsFromCollection = async (coll) => {
  const querySnapshot = await getDocs(collection(fireDB, coll));
  const data = querySnapshot.docs.map((doc) => doc.data());
  return data;
};

export const updateSpecificDocumentInCollection = async (
  coll,
  collId,
  data
) => {
  const documentRef = doc(db, coll, collId);
  await updateDoc(documentRef, data);
};
