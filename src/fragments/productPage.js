import groq from 'groq';

import {IMAGE} from './image';
import {PORTABLE_TEXT} from './portableText';
import {SEO_PRODUCT} from './seoProduct';
import { PRODUCT_WITH_VARIANT } from './productWithVariant';

export const PRODUCT_PAGE = groq`
  _id,
  "available": !store.isDeleted && store.status == 'active',
  body[]{
    ${PORTABLE_TEXT}
  },
  images[] {
    ${IMAGE}
  },
  sections[]{
    _key,
    body[]{
      ${PORTABLE_TEXT}
    },
    title
  },
  seo {
    ${SEO_PRODUCT}
  },
  store,
  "slug": store.slug.current,
  relatedArticle->{
    ...,
    image {
      ${IMAGE}
    }
  },
  relatedCollection {
    title,
    products[] {
      'productData': productWithVariant {
        ...${PRODUCT_WITH_VARIANT}
      }
    }
  }
`;
