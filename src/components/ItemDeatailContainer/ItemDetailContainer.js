import productos from "./stock"
import { useEffect, useState } from "react";
import itemList from "../item/item"

const ItemDetailcont = ({greeting}) => {
    const [productList, setProcutList] = useState([])

    useEffect(() => {
        getProducts.then((response) => {
            setProcutList(response);
        })
    }, []);

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000);
    });

    return (
        <>
            <itemlist Lista={productList} />
        </>
    );
}

export default ItemDetailcont;