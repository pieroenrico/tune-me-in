import {useEffect, useState} from 'react';
import {Product, useProduct, useCart} from '@shopify/hydrogen/client';

import LinkProduct from '../LinkProduct.client';

import ProductCardImage from './ProductCardImage.client';
import ProductCardOptions from './ProductCardOptions.client';
import ProductCardPrice from './ProductCardPrice.client';

const ProductCardDetails = (props) => {
  const {
    className,
    addToCart,
    detailsLink,
    disableProductLink,
    mode,
    onClick,
    selectedColor,
  } = props;
  const {
    id,
    handle,
    variantId,
    options,
    selectedOptions,
    setSelectedOption,
    selectedVariant,
    mf: metafields,
    images,
  } = useProduct();
  const {status} = useCart();
  // const {media} = useProductMedia();
  const playlist =
    metafields?.edges && metafields.edges.length
      ? JSON.parse(
          metafields.edges.find((edge) => edge.node.key === 'playlist').node
            .value,
        )
      : null;

  const [selectedImage, setSelectedImage] = useState();
  useEffect(() => {
    // eslint-disable-next-line no-negated-condition
    if (mode !== 'small') {
      const selectedImageInternal = images.find(
        (media) =>
          media.altText ===
          `color:${selectedVariant?.selectedOptions
            .find((option) => option.name === 'Color')
            .value.toLowerCase()}`,
      );
      setSelectedImage(
        selectedImageInternal ? selectedImageInternal : images[0],
      );
    } else {
      setSelectedImage(images[Math.floor(Math.random() * images.length)]);
    }
    return () => {
      setSelectedImage(null);
    };
  }, [id, selectedVariant]);

  // eslint-disable-next-line @shopify/prefer-early-return
  useEffect(() => {
    if (selectedColor) {
      const selectedImage2 = images.find(
        (media) => media.altText === `color:${selectedColor.toLowerCase()}`,
      );
      setTimeout(() => {
        setSelectedImage(selectedImage2 ? selectedImage2 : images[0]);
      }, 100);
    }
  }, [selectedColor]);

  return (
    <div
      className={`product-card border border-dark p-4 transition-all bg-light-b group hover:bg-light-ff ${className}`}
      onClick={(event) => {
        if (onClick) onClick(event);
      }}
    >
      {disableProductLink ? (
        <ProductCardImage image={selectedImage?.url} key={handle} />
      ) : (
        <LinkProduct handle={handle} variantId={variantId}>
          <ProductCardImage image={selectedImage?.url} key={handle} />
        </LinkProduct>
      )}
      <div className={`${mode === 'small-interactive' ? `relative` : ''}`}>
        <div className="flex items-start justify-between flex-col md:flex-row mt-4">
          <div
            className={`${
              mode === 'small-interactive' ? `mb-4 md:mb-8 relative` : ''
            }`}
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
                  // eslint-disable-next-line no-nested-ternary
                  mode === 'small-interactive'
                    ? `absolute top-0 opacity-0 transition-all group-hover:opacity-100`
                    : mode === 'large'
                    ? `mt-4`
                    : ''
                }`}
              >
                <div className="product-options mb-4">
                  {options.map((option, odx) => (
                    <ProductCardOptions
                      options={option}
                      selectedOptions={selectedOptions}
                      onSelectedOption={setSelectedOption}
                      key={odx}
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
          {playlist.map((song, sdx) => (
            <span key={sdx}>{song.author} / </span>
          ))}
        </div>
      )}
      {addToCart && (
        <Product.SelectedVariant.AddToCartButton
          className={`cursor-pointer mt-4  bg-repeat-x ${
            status === 'updating'
              ? `text-gray-500 bg-grey`
              : `text-white bg-dark`
          } uppercase w-full pt-3 pb-2 font-main-heading text-3xl transition-all hover:bg-primary`}
        >
          {status === 'updating' ? 'Adding...' : 'Add to Cart'}
        </Product.SelectedVariant.AddToCartButton>
      )}
      {!disableProductLink && detailsLink && (
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

export default ProductCardDetails;
