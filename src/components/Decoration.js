const Decoration = ({ absolute = false }) => {
  return <div className={absolute ? 'backgroundAbsolute' : 'background'}></div>;
};

export default Decoration;
