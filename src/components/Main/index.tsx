import SliderCustom from "base/Slider";
import useRecommend from "../../hooks/useRecommend";
import SM from './styled'

const Main = () => {
  const { recommends } = useRecommend();

  return (
    <>
      <SM.SDiv>{recommends && <SliderCustom data={recommends} />}</SM.SDiv>
    </>
  );
};
export default Main;
