import productos from "../ItemListContainer/itemList/stock";

const ItemList = ({Lista}) => {
    
    return (
        <div  key={productos.id}>{
          
            Lista.map(() => (
                <item 
                nombre={productos.nombre}
                 preci={productos.precio}
                  img={productos.img}/>
            ))

        }</div>
    );

};

export default ItemList;