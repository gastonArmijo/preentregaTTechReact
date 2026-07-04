import { collection, addDoc, getDocs, getDoc, doc, query, where, } from "firebase/firestore";
import { db } from "../firebase/config";

const productsRef = collection(db, "products");

/*-----------------------------------------------------------*/
/*traer productos*/
export const getProducts = async () => {
    try {
        const snapshot = await getDocs(productsRef);

        const productsFormat = snapshot.docs.map((doc) =>{
            return {id: doc.id, ...doc.data()};
        });

        return productsFormat;

    }catch (err) {
        console.error("error al traer los productos", error);
        return [];
    }
};

/*-----------------------------------------------------------*/
/*traer productos por id(individual)*/

export const getProductById = async (id) => {
    try {
        //creamos la referecia al documento
        const productRef = doc(db, "products", id);

        //traemos el documento
        const snapshot = await getDoc(productRef);

        //verificamos si existe
        if (snapshot.exists()) {
            const product = {id: snapshot.id, ...snapshot.data()};
            console.log("Doc:", product);
            return product;
        } else {
            return null;
        }
    } catch (error) {
        console.error("Error al traer producto por id:", error);
        return null;
    }
};

/*-----------------------------------------------------------*/
/*si filtramos por category*/

export const getByCategory = async (category) => {
  try {
    let queryRef;

    //truthy
    if (category) {
      queryRef = query(productsRef, where("category", "==", category));
    } else {
      queryRef = productsRef;
    }

    // Traer los documentos:
    const snapshot = await getDocs(queryRef);
    //Mapeo de datos para formateo
    const productsFormat = snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    return productsFormat;
  } catch (error) {
    console.error("Error al filtrar productos:", error);
    return [];
  }
};

/*-----------------------------------------------------------*/
/*alta de producto*/

export const createProduct = async (productData) => {
  try {
    //Tan facil como usar la funcion addDoc y pasarle la coleccion y el doc a agregar
    const docRef = await addDoc(productsRef, productData);

    return docRef.id; // opcional, por si quieren usar el id para algo
  } catch (error) {
    console.error("Error al crear producto:", error);
    throw error;
  }
};