// _components/MainIndex.js
import { fetchBannerData, fetchProductData } from '../Data/FetchData';
import { FooterBanner, HeroBanner, Product } from "./index";

const MainIndex = async () => {
  const bannerData = await fetchBannerData();
  const productData = await fetchProductData();

  return (
    <>
      <HeroBanner HeroBanner={bannerData?.length && bannerData[0]} />
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many Variations</p>
      </div>
      <div className="products-container">
        {productData?.map((product) => <Product key={product._id} product={product} />)}
      </div>
      <FooterBanner footerbanner = {bannerData && bannerData[0]} />
    </>
  );
};

export default MainIndex;
