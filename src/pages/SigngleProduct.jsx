import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { userContext } from "../hooks/UserContext";

const SigngleProduct = () => {
  const { id } = useParams();
  const { fetchingSingleProducts, getSingleProducts } = useContext(userContext);
  const [signgleProduct, setSingleProduct] = useState({});
  useEffect(() => {
    async function fetch() {
      const product = await getSingleProducts(id);
      setSingleProduct(product);
    }
    fetch()
  }, []);

  return (
    <div>
      <h2>SigngleProduct:{id}</h2>
      {fetchingSingleProducts ? (
        <p>Fetching product details....</p>
      ) : signgleProduct.length === 0 ? (
        <p>Couldn't find product!!</p>
      ) : (
        <div
          className=""
          style={{
            cursor: "pointer",
            textDecoration: "none",
            color: "black",
          }}
          title={signgleProduct.title}
        >
          <h2>Title: {signgleProduct.title}</h2>
          <p>Description: {signgleProduct.description}</p>
          <p>Price: ${signgleProduct.price}</p>
          <img
            src={signgleProduct.image}
            alt={`image-${signgleProduct.title}`}
          />
        </div>
      )}
    </div>
  );
};

export default SigngleProduct;
