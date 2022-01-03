import IconArrowLeft from '../icons/IconArrowLeft.client';
import IconArrowRight from '../icons/IconArrowRight.client';

const DragBadge = () => {
  return (
    <div className="drag absolute z-10 top-0 left-4 -translate-y-1/2 border border-dark bg-light-f p-1 uppercase text-xs flex items-center">
      <div className="w-2 h-2">
        <IconArrowLeft />
      </div>
      <div className="w-2 h-2">
        <IconArrowLeft />
      </div>
      <div className="w-2 h-2">
        <IconArrowLeft />
      </div>
      <div className="w-2 h-2">
        <IconArrowLeft />
      </div>{' '}
      Drag Below{' '}
      <div className="w-2 h-2">
        <IconArrowRight />
      </div>
      <div className="w-2 h-2">
        <IconArrowRight />
      </div>
      <div className="w-2 h-2">
        <IconArrowRight />
      </div>
      <div className="w-2 h-2">
        <IconArrowRight />
      </div>
    </div>
  );
};
export default DragBadge;
