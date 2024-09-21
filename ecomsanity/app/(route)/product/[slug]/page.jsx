"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { getProductData } from "../../../Data/FetchData";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import Product from "../../../_components/Product/Product";
import { PacmanLoader } from "react-spinners";
import { useStateContext } from "@/context/StateContext";

const ProductDetails = ({ params: { slug } }) => {
  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const fetchProductData = async () => {
      const { product, products } = await getProductData(slug);
      setProduct(product);
      setProducts(products);
    };
    fetchProductData();
  }, [slug]);

  if (!product)
    return (
      <div className="flex justify-center h-screen w-full items-center">
        {" "}
        <PacmanLoader color="#840d31" size={37} speedMultiplier={3} />
      </div>
    );

  const { image, name, details, price } = product;
  const { qty, incqty, decqty,onAdd } = useStateContext();

  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img
              src={urlFor(image && image[index])}
              className="product-detail-image"
            />
          </div>
          <div className="small-images-container">
            {image?.map((item, i) => (
              <img
                key={i}
                src={urlFor(item)}
                className={
                  i === index ? "small-image selected-image" : "small-image"
                }
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        <div className="product-detail-desc">
          <h1>{name}</h1>
          <div className="reviews">
            <div className="reviews">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <h4>Details: </h4>
          <p>{details}</p>
          <p className="price">${price}</p>
          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc">
              <span className="minus" onClick={decqty}>
                <AiOutlineMinus />
              </span>
              <span className="num">{qty}</span>
              <span className="plus" onClick={incqty}>
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className="buttons">
            <button type="button" className="add-to-cart"  onClick={() => onAdd(product,qty)}>
              Add to Cart
            </button>
            <button type="button" className="buy-now">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
