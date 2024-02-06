function Product(props) {
  return (
    <div className="ProductDiv">
      <img
        className="ProductImage"
        src="https://cdn.awsli.com.br/1832/1832657/produto/156487941/ff8bd3f10a.jpg"
      ></img>
      <div className="TitleDiv">{props.title}</div>
      <div className="PriceDiv">R$ {props.price}</div>
    </div>
  );
}

export default Product;
