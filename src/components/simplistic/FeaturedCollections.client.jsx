import {useState, useEffect} from 'react';
import FeaturedCollectionsList from './FeaturedCollectionsList.client';
import ProductCard from './ProductCard.client';
const FeaturedCollections = (props) => {
  const {collections, shopifyProducts} = props;
  const [currentCollection, setCurrentCollection] = useState(
    collections[0].handle,
  );
  const [currentProduct, setCurrentProduct] = useState(
    collections[0].products[0],
  );
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(
      collections.find((c) => c.handle === currentCollection).products,
    );
    () => {
      setProducts(null);
    };
  }, [currentCollection]);
  return (
    <div className="w-full border-t border-dark 3xl:container  3xl:mx-auto 3xl:border-l 3xl:border-r 3xl:border-dark">
      <div className="w-full flex flex-col md:flex-row items-stretch justify-between">
        <div className="py-4 pl-4 pr-2 w-full md:w-1/3">
          <div className="sticky top-24">
            <ProductCard
              key={currentProduct?.productData._id}
              addToCart
              className="w-full"
              product={{
                ...currentProduct?.productData,
                storefront: shopifyProducts?.[currentProduct?.productData._id],
              }}
            />
          </div>
        </div>
        <div className="py-4 pl-2 pr-2 w-full md:w-1/3">
          {products.map((product, idx) => (
            <ProductCard
              onClick={(e) => {
                e.preventDefault();
                setCurrentProduct(product);
              }}
              key={product.productData._id}
              mode="small"
              className="mb-4 w-full cursor-pointer"
              product={{
                ...product.productData,
                storefront: shopifyProducts?.[product?.productData._id],
              }}
            />
          ))}
        </div>
        <div className="flex-grow py-4 pl-2 pr-4">
          <div className="sticky top-24">
            <FeaturedCollectionsList
              collections={collections}
              selectedCollection={currentCollection}
              setSelectedCollection={setCurrentCollection}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCollections;
