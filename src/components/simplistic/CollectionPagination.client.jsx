import {useServerState} from '@shopify/hydrogen/client';

import IconArrowLeft from '../icons/IconArrowLeft.client';
import IconArrowRight from '../icons/IconArrowRight.client';

const CollectionPagination = (props) => {
  const {setServerState} = useServerState();
  const {totalPages, currentPage} = props;
  const handlePrevPage = (event) => {
    event.preventDefault();
    setServerState('currentPage', currentPage - 1);
  };
  const handleNextPage = (event) => {
    event.preventDefault();
    setServerState('currentPage', currentPage + 1);
  };
  const handlePage = (event, pageNumber) => {
    event.preventDefault();
    setServerState('currentPage', pageNumber);
  };
  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage === totalPages - 1;
  return (
    <div
      className="flex items-center justify-center p-4 border-t border-b border-dark
    3xl:container 3xl:mx-auto 3xl:border-l 3xl:border-r 3xl:border-dark"
    >
      <PaginationButton onClick={handlePrevPage} disabled={isFirstPage}>
        <div className="w-3 h-3 mr-2">
          <IconArrowLeft />
        </div>{' '}
        Prev
      </PaginationButton>
      {[...Array(totalPages)].map((_, pdx) => (
        <PaginationButton
          key={pdx}
          onClick={(event) => handlePage(event, pdx)}
          selected={currentPage === pdx}
        >
          {pdx + 1}
        </PaginationButton>
      ))}
      <PaginationButton onClick={handleNextPage} disabled={isLastPage}>
        Next{' '}
        <div className="w-3 h-3 ml-2">
          <IconArrowRight />
        </div>
      </PaginationButton>
    </div>
  );
};

const PaginationButton = (props) => {
  const {onClick, disabled, selected, children} = props;
  return (
    <button
      type="button"
      disabled={disabled}
      className={`border border-dark bg-light-f px-2 h-8 flex items-center justify-center mx-2 transition-all 
      hover:bg-grey cursor-pointer disabled:border-grey disabled:opacity-50 ${
        selected ? `bg-grey` : ``
      }`}
      onClick={(event) => onClick(event)}
    >
      {children}
    </button>
  );
};

PaginationButton.defaultProps = {
  disabled: false,
  selected: false,
};

export default CollectionPagination;
