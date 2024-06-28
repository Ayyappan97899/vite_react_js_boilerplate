import useStore from 'src/store';

const Home = () => {
  const { detail } = useStore((state) => state);
  return (
    <div>
      <h1>{detail?.title}</h1>
    </div>
  );
};

export default Home;
