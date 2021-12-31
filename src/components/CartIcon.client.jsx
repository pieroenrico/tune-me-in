import {useCartLinesTotalQuantity} from '@shopify/hydrogen/client';
import IconBag from './icons/IconBag.client';

export default function CartIcon() {
  const itemCount = useCartLinesTotalQuantity();

  return (
    <div className="cart-icon relative">
      <div className="w-[24px] h-[24px]">
        <IconBag />
      </div>
      {itemCount > 0 && (
        <div className="absolute top-0 right-[-.5em] p-[.3em] text-[.7em] border border-dark bg-light-f leading-[.75em]">
          {itemCount}
        </div>
      )}
    </div>
  );
}
