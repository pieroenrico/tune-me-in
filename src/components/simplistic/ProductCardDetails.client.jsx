import {useEffect, useState} from 'react';
import {Product} from '@shopify/hydrogen/client';
import {useProduct} from '@shopify/hydrogen/client';
import {encode} from '../../utils/shopifyGid';
import ProductCardImage from './ProductCardImage.client';
import ProductCardOptions from './ProductCardOptions.client';
import ProductCardPrice from './ProductCardPrice.client';
import {useProductMedia} from './providers/ProductMediaProvider.client';
import LinkProduct from '../LinkProduct.client';

const ProductCardDetails = (props) => {
  const {className, addToCart, detailsLink, mode, onClick} = props;
  const {
    id,
    handle,
    variantId,
    options,
    selectedOptions,
    setSelectedOption,
    selectedVariant,
    mf: metafields,
  } = useProduct();
  const {media} = useProductMedia();
  const playlist = metafields.edges.length
    ? JSON.parse(
        metafields.edges.find((edge) => edge.node.key === 'playlist').node
          .value,
      )
    : null;

  const [selectedImage, setSelectedImage] = useState();
  useEffect(() => {
    if (mode !== 'small') {
      const selectedImage = media.find(
        (m) =>
          m.altText ===
          `color:${selectedVariant.selectedOptions
            .find((o) => o.name === 'Color')
            .value.toLowerCase()}`,
      );
      setSelectedImage(selectedImage ? selectedImage : media[0]);
    } else {
      setSelectedImage(media[Math.floor(Math.random() * media.length)]);
    }
    return () => {
      setSelectedImage(null);
    };
  }, [id, selectedVariant]);

  // console.log('product', shopifyProduct.selectedVariant);

  //console.log('media', media);

  return (
    <div
      className={`product-card border border-dark p-4 transition-all bg-light-b group hover:bg-light-ff ${className}`}
      onClick={(e) => {
        if (onClick) onClick(e);
      }}
    >
      <LinkProduct
        handle={handle}
        variantId={variantId}
        className="mt-4 text-center block font-light underline"
      >
        <ProductCardImage image={selectedImage?.url} key={id} />
      </LinkProduct>
      <div className={`${mode === 'small-interactive' ? `relative` : ''}`}>
        <div className={`flex items-start justify-between mt-4`}>
          <div
            className={`${mode === 'small-interactive' ? `mb-6 relative` : ''}`}
          >
            <div
              className={`product-title font-main-heading text-5xl text-dark uppercase ${
                mode === 'small-interactive'
                  ? `opacity-100 transition-all group-hover:opacity-0`
                  : ''
              }`}
            >
              <Product.Title />
            </div>
            {mode !== 'small' && (
              <div
                className={`flex items-start justify-between mb-4 w-full ${
                  mode === 'small-interactive'
                    ? `absolute top-0 opacity-0 transition-all group-hover:opacity-100`
                    : mode === 'large'
                    ? `mt-4`
                    : ''
                }`}
              >
                <div className="product-options mb-4">
                  {options.map((option, o) => (
                    <ProductCardOptions
                      options={option}
                      selectedOptions={selectedOptions}
                      onSelectedOption={setSelectedOption}
                      key={o}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
          <ProductCardPrice price={selectedVariant?.priceV2.amount} />
        </div>
      </div>
      {playlist && (
        <div
          className={`product-details font-light ${
            mode === 'large' ? `text-lg` : `truncate`
          }`}
        >
          {playlist.map((song, s) => (
            <span key={s}>{song.author} / </span>
          ))}
        </div>
      )}
      {addToCart && (
        <Product.SelectedVariant.AddToCartButton
          className={`cursor-pointer mt-4 bg-dark bg-repeat-x text-white uppercase w-full pt-3 pb-2 font-main-heading text-3xl transition-all hover:bg-primary`}
        >
          Add To Cart
        </Product.SelectedVariant.AddToCartButton>
      )}
      {detailsLink && (
        <LinkProduct
          handle={handle}
          variantId={variantId}
          className="mt-4 text-center block font-light underline"
        >
          View Product Details
        </LinkProduct>
      )}
    </div>
  );
};

ProductCardDetails.defaultProps = {
  addToCart: false,
  detailsLink: false,
  mode: 'large',
};

export default ProductCardDetails;
