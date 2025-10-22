import { useContext, useEffect, useState } from "react";
import { userContext } from "../hooks/UserContext";
import { Link } from "react-router-dom";

function Products() {
  const { getAllProducts, fetchingProducts } = useContext(userContext);
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    async function fetch() {
      const products = await getAllProducts();
      setAllProducts(products);
    }
    fetch();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <div
        className=""
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gap: ".5rem",
        }}
      >
        {fetchingProducts ? (
          <p>Fetching Products...</p>
        ) : allProducts.length === 0 ? (
          <p>No product found</p>
        ) : (
          allProducts.map((product, index) => (
            <Link
              to={`/products/${product.id}`}
              className=""
              key={index}
              style={{
                cursor: "pointer",
                textDecoration: "none",
                color: "black",
                width: "250px",
                border: "1px solid black",
                padding: ".5rem 1rem",
                borderRadius: "12px",
              }}
              title={product.title}
            >
              <h2>Title: {product.title}</h2>
              <p>
                Description: {product.description.slice(0, 80)}...
                <span style={{ textDecoration: "underline" }}>More</span>
              </p>
              <img
                src={product.image}
                alt={`image-${product.title}`}
                style={{ width: "100%", objectFit: "contain" }}
              />
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

export default Products;
