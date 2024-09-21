
import { client } from "@/sanity/lib/client";

export const fetchBannerData = async () => {
  const bannerQuery = '*[_type == "banner"]';
  return await client.fetch(bannerQuery);
};

export const fetchProductData = async () => {
  const productQuery = '*[_type == "product"]';
  return await client.fetch(productQuery);
};

export const getProductData = async (slug) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return { product, products };
};