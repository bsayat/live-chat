import { ref } from "vue";
import { projectFirestore } from "../firebase/config";

const ORDER_BY = "createdAt";

const getCollection = (collection) => {
  const documents = ref(null);
  const error = ref(null);

  let collectionRef = projectFirestore.collection(collection).orderBy(ORDER_BY);

  collectionRef.onSnapshot(
    (snapshot) => {
      documents.value = snapshot.docs
        .filter((doc) => doc.data().createdAt)
        .map((doc) => ({ ...doc.data(), id: doc.id }));

      error.value = null;
    },
    () => {
      documents.value = null;
      error.value = "Could not fetch data";
    }
  );

  return { documents, error };
};

export default getCollection;
