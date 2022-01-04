import {useState, useEffect, useRef} from 'react';

import FeaturedCollectionsList from './FeaturedCollectionsList.client';
import FeaturedCollectionsDropdown from './FeaturedCollectionsDropdown.client';
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
  const productsListRef = useRef();

  useEffect(() => {
    setProducts(
      collections.find((collection) => collection.handle === currentCollection)
        .products,
    );
    // productsListRef.current.scrollIntoView({
    //   behavior: 'smooth',
    // });
    return () => {
      setProducts(null);
    };
  }, [collections, currentCollection]);
  return (
    <div className="w-full border-t border-dark 3xl:container  3xl:mx-auto 3xl:border-l 3xl:border-r 3xl:border-dark">
      <div className="w-full flex flex-col-reverse md:flex-row items-stretch justify-between">
        <div className="py-4 pl-4 pr-2 w-full hidden lg:block md:w-1/3">
          <div className="md:sticky md:top-24">
            <ProductCard
              key={currentProduct?.productData._id}
              addToCart
              detailsLink
              className="w-full"
              mode="big"
              product={{
                ...currentProduct?.productData,
                storefront: shopifyProducts?.[currentProduct?.productData._id],
              }}
            />
          </div>
        </div>
        <div
          className="py-4 pl-2 pr-2 w-full md:w-1/2 lg:w-1/3"
          ref={productsListRef}
        >
          {products.map((product) => (
            <ProductCard
              onClick={(event) => {
                event.preventDefault();
                setCurrentProduct(product);
              }}
              key={product.productData._id}
              mode="small"
              className="mb-4 w-full cursor-pointer"
              disableProductLink
              product={{
                ...product.productData,
                storefront: shopifyProducts?.[product?.productData._id],
              }}
            />
          ))}
        </div>
        <div className="flex-grow py-4 pl-2 pr-4">
          <div className="block md:hidden">
            <FeaturedCollectionsDropdown
              collections={collections}
              selectedCollection={currentCollection}
              setSelectedCollection={setCurrentCollection}
            />
          </div>
          <div className="hidden md:block md:sticky md:top-24">
            <FeaturedCollectionsList
              collections={collections}
              selectedCollection={currentCollection}
              setSelectedCollection={(handle) => {
                productsListRef?.current?.scrollIntoView({
                  behavior: 'smooth',
                });
                setCurrentCollection(handle);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCollections;
