import IconArrowLeft from '../icons/IconArrowLeft.client';
import IconArrowRight from '../icons/IconArrowRight.client';

const DragBadge = () => {
  return (
    <div className="drag absolute z-10 top-0 left-[80%] -translate-y-1/2">
      <div className="z-10 border border-dark bg-light-f p-1 uppercase text-xs flex items-center justify-center w-[200px]">
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
    </div>
  );
};
export default DragBadge;
