import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Slider from "react-slick";
import { get } from "lodash";
import Recommend from "interface/recommend";
import SS from "./styled";
import { ITEM_PER_PAGE } from "const";

interface DataSlider {
  data: {
    items: Array<Recommend>;
    serverTime: number;
    status: number;
  };
}
interface Props {
  data: DataSlider | any;
}
interface ItemEntry {
  title: string | any;
  subtitle: string | any;
  image: string | any;
}
const SliderCustom = (props: Props) => {
  const refSubtitle = useRef(null);
  const slickRef = useRef<Slider | null>(null);

  const { data } = props;
  const lists = useMemo(() => {
    return get(data.data, "items", []);
  }, []);
  const [, setActiveSlide] = useState(0);
  const [activeSlider2, setActiveSlide2] = useState(0);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [width, setWidth] = useState(0);
  const refImg = useRef<any>(null);

  const settings = {
    dots: false,
    infinite: true,
    loop: false,
    speed: 1000,
    draggable: false,
    slidesToShow: ITEM_PER_PAGE,
    slidesToScroll: ITEM_PER_PAGE,
    beforeChange: (next: number) => setActiveSlide(next),
    afterChange: (current: number) => {
      setActiveSlide2(current);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const updateWidth = () => {
      if (refImg.current) {
        console.log(refImg.current.offsetWidth,'refImg.current.offsetWidth');
        
        setWidth(refImg.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, [window,settings.responsive]);

  const getCurrentPage = () => {
    return Math.floor(activeSlider2 / ITEM_PER_PAGE) + 1;
  };

  const calculatePosition = (
    index: number,
    itemsPerPage = getCurrentPage(),
    width: number
  ) => {
    const currentPage = Math.floor(index / itemsPerPage);
    const position = (index - currentPage * itemsPerPage) * width;
    return position;
  };

  return (
    <SS.SDiv>
      <SS.SDivFlex>
        {lists &&
          lists.length > 0 &&
          lists.map((item: any, index: number) => {
            return (
              <>
                <SS.Row>
                  <SS.STitle key={index}>{item.title}</SS.STitle>
                  <SS.SSlider>
                    <Slider {...settings} ref={slickRef}>
                      {item.items.map((i: any, index: number) => {
                        return (
                          <>
                            <SS.WrapBox key={index} ref={refImg}>
                              <>
                                <SS.SBox
                                  onMouseEnter={(e: any) => {
                                    e.preventDefault();
                                      setHoveredItem(i);
                                  }}
                                >
                                  <SS.Img
                                    src={i.image}
                                    alt={i.title}
                                    onMouseLeave={() => {}}
                                  />

                                  <SS.SSubTitle
                                    ref={refSubtitle}
                                    title={i.title}
                                  >
                                    {i.title}
                                  </SS.SSubTitle>
                                  <SS.Description>{i.subtitle}</SS.Description>
                                </SS.SBox>
                              </>
                            </SS.WrapBox>
                            <p>Current Page: {getCurrentPage()}</p>
                          </>
                        );
                      })}
                    </Slider>
                    {item.items.map((i: any, index: number) => {
                      return (
                        <>
                            {hoveredItem === i && (
                              <>
                                <SS.BoxZoom
                                  width={width}
                                  index={index + 1}
                                  currentPage={getCurrentPage()}
                                  key={index}
                                  lengths={item.items.length}
                                  left={calculatePosition(index, ITEM_PER_PAGE, width)}
                                >
                                  <SS.BoxHover width={width}>
                                    <SS.Img src={i.image} alt={i.title} />
                                    <SS.RowDescriptionHover>
                                      <SS.SSubTitleHover>
                                        {i.title}
                                      </SS.SSubTitleHover>
                                      <SS.DescriptionHover>
                                        {i.subtitle}
                                      </SS.DescriptionHover>
                                    </SS.RowDescriptionHover>
                                  </SS.BoxHover>
                                </SS.BoxZoom>
                              </>
                            )}
                        </>
                      );
                    })}
                  </SS.SSlider>
                </SS.Row>
              </>
            );
          })}
      </SS.SDivFlex>
    </SS.SDiv>
  );
};
export default React.memo(SliderCustom);
