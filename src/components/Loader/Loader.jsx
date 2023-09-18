import { Blocks } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Blocks
      visible={true}
      height="200"
      width="200"
      ariaLabel="blocks-loading"
      wrapperStyle={{
        position: 'absolute',
        top: '50%',
        right: '50%',
        transform: 'translate(50%, -50%)',
        opacity: 0.8,
      }}
      wrapperClass="blocks-wrapper"
      color="#fff"
      backgroundColor="#3f6e93"
    />
  );
};

export default Loader;
