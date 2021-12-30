import {useProduct} from '@shopify/hydrogen/client';
import ProductCardOptions from './ProductCardOptions.client';
import ProductDetailsPlaylist from './ProductDetailsPlaylist.client';
import ProductDetailsInfo from './ProductDetailsInfo.client';
import ProductCardPrice from './ProductCardPrice.client';
import {Product} from '@shopify/hydrogen/client';

const ProductDetails = (props) => {
  const {product} = props;
  const {product: sanityProduct, storefront} = product;
  const {options, selectedOptions, setSelectedOption, selectedVariant} =
    useProduct();
  const {title, images, mf: metafields, descriptionHtml} = storefront;
  //console.log(metafields);
  const playlist =
    metafields.edges.length > 0
      ? JSON.parse(
          metafields.edges.find((edge) => edge.node.key === 'playlist').node
            .value,
        )
      : [];
  //console.log(storefront);

  const handleImageClick = (id) => {
    document
      .querySelector(`.image-${id.replace(':', '-')}`)
      .scrollIntoView({behavior: 'smooth'});
  };
  return (
    <div className="mt-20 3xl:container p-4 flex items-stretch justify-between">
      <div className="w-[10%] pr-4">
        <div className="sticky top-24">
          {images.edges.map((image, idx) => (
            <div
              className="bg-grey border border-dark mb-4 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                handleImageClick(image.node.altText);
              }}
              key={idx}
            >
              <img src={image.node.url} alt="" className="" />
            </div>
          ))}
        </div>
      </div>
      <div className="w-[50%]">
        {images.edges.map((image, idx) => (
          <div
            className={`bg-grey border border-dark mb-4 ${`image-${image.node.altText.replace(
              ':',
              '-',
            )}`}`}
            key={idx}
          >
            <img src={image.node.url} alt="" className="" />
          </div>
        ))}
      </div>
      <div className="w-[40%] pl-4">
        <div className="sticky top-24 w-full">
          <h1 className="text-[6em] leading-[1em] uppercase font-main-heading text-dark">
            {title}
          </h1>

          <div className="text-3xl font-bold">
            <ProductCardPrice price={selectedVariant?.priceV2.amount} />
          </div>

          <div className="product-options mt-4 mb-8">
            {options.map((option, o) => (
              <ProductCardOptions
                options={option}
                selectedOptions={selectedOptions}
                onSelectedOption={setSelectedOption}
                key={o}
              />
            ))}
          </div>

          <p className="my-8">
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat
            reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
            ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
          </p>
          <div className="my-8">
            <Product.SelectedVariant.AddToCartButton
              className={`cursor-pointer mt-4 bg-dark bg-repeat-x text-white uppercase w-full pt-3 pb-2 font-main-heading text-3xl transition-all hover:bg-primary`}
            >
              Add To Cart
            </Product.SelectedVariant.AddToCartButton>
          </div>
          <ProductDetailsInfo
            tabs={[
              {title: 'Playlist', data: playlist, type: 'playlist'},
              {
                title: 'Description',
                data: descriptionHtml,
                type: 'text',
              },
              {
                title: 'Materials',
                data: `Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim
              labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi
              animcupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est
              aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia
              pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
              commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa
              proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia
              eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.
              Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et
              culpa duis.`,
                type: 'text',
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
