import "./SushiCatalog.css";
const SushiCatalog: React.FC = () => {
  return (
    <div className="sushi-catalog">
      <div className="catalog-item">
        <img src="todo_icon.jpg" className="catalog_icon"></img>
        <p className="catalog-name">Todo</p>
      </div>
      <div className="catalog-item">
        <img src="extrantes_icon.jpg" className="catalog_icon"></img>
        <p className="catalog-name">Entrantes</p>
      </div>
      <div className="catalog-item">
        <img src="rollos_grandes_icon.jpg" className="catalog_icon"></img>
        <p className="catalog-name">Rollos Grandes</p>
      </div>
      <div className="catalog-item">
        <img src="rollos_clasicos_icon.jpg" className="catalog_icon"></img>
        <p className="catalog-name">Rollos Clásicos</p>
      </div>
      <div className="catalog-item">
        <img src="postres_icon.png" className="catalog_icon"></img>
        <p className="catalog-name">Postres</p>
      </div>
      <div className="catalog-item">
        <img src="ofertas_icon.jpg" className="catalog_icon"></img>
        <p className="catalog-name">Ofertas Especiales</p>
      </div>
      <div className="catalog-item">
        <img src="Bebidas.jpg" className="catalog_icon"></img>
        <p className="catalog-name">Bebidas</p>
      </div>
      <div className="catalog-item">
        <img src="extras_icon.jpg" className="catalog_icon"></img>
        <p className="catalog-name">Extras</p>
      </div>
    </div>
  );
};

export default SushiCatalog;
