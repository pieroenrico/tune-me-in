const SectionTitle = (props) => {
  const {title} = props;
  const useBackground = true;
  return (
    <div className="w-full px-4 pt-6 pb-0 border-t border-b border-dark flex items-center bg-center bg-repeat-x 3xl:container 3xl:mx-auto 3xl:border-l 3xl:border-r 3xl:border-dark">
      <h2 className="font-main-display text-7xl md:text-huge uppercase text-dark">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
