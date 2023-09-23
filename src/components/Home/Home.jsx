import { Wraper, Image, Title, Words, ItemList } from './styled';
import svg from '../../images/human.webp';

const Home = () => {
  return (
    <Wraper>
      <div>
        <Title>
          <Words>Жінка моніторить твій телефон?</Words>
        </Title>
        <ul>
          <ItemList>
            <Words>Зберігай телефон коханок тут, щоб вона не дізналася.</Words>
          </ItemList>
          <ItemList>
            <Words>100% надійний спосіб залишатись на зв'язку</Words>
          </ItemList>
        </ul>
      </div>
      <div>
        <Image src={svg} alt="React Logo" />
      </div>
    </Wraper>
  );
};

export default Home;
