const Decoration = ({ absolute = false }) => (
  <div className={absolute ? 'backgroundAbsolute' : 'background'} />
);

export default Decoration;
