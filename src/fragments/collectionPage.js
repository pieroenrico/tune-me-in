import groq from 'groq';

import {PRODUCT_WITH_VARIANT} from './productWithVariant';
import {IMAGE} from './image'
import {SEO} from './seo';

export const COLLECTION_PAGE = groq`
  _id,
  description,
  products[] {
    ...${PRODUCT_WITH_VARIANT}
  },
  image {
    ${IMAGE}
  },
  seo {
    ${SEO}
  },
  "slug": slug.current,
  title,
`;
