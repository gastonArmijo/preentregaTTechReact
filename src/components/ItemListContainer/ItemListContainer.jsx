import { useEffect, useState } from "react";
import {ItemList} from "../ItemList/ItemList";
import { getByCategory, getProducts } from "../../services/ProductsService";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
    //tomamos category del useParams para poder filtrar
    const {category} = useParams();
    
    
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/data/products.json")
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.log(err))
            .finally(() =>{
                setLoading(false);
            });
    }, []);

    if(loading) return <p>Cargando...</p>;

    return (
        <section>
            <ItemList products={products}/>
        </section>
    );

};