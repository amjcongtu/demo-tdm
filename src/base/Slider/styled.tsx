import styled from "styled-components";
const SDiv = styled.div`
  background-color: ${(p) => p.theme.bg.black};
  .slick-arrow {
    display: none !important;
  }
  .slick-list {
    overflow-y: auto;
  }
`;
const SBox = styled.div`
  display: block;
  position: relative;
  z-index: 99999;
  overflow: hidden;
  width: 100%;
  height: 100%;
  transform-origin: top left;
  transition: ease all 1s;
`;
const SDivFlex = styled.div`
  width: 100%;
  position: relative;
  display: block;
  z-index: 99999;
  margin-bottom: 20px;
`;
const Row = styled.div`
  margin: 20px 0;
  position: relative;
`;
const STitle = styled.h3`
  color: ${(p) => p.theme.color.white};
  font-size: 30px;
  padding-bottom: 8px;
  font-weight: 300;
  margin-bottom: 10px;
`;
const SSlider = styled.div``;
const SSubTitle = styled.h3`
  cursor: pointer;
  color: ${(p) => p.theme.color.white};
  font-size: 16px;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
const SSubTitleHover = styled.h3`
  color: ${(p) => p.theme.color.black};
  font-size: 16px;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;
`;
const Description = styled.p`
  font-size: 14px;
  text-align: left;
  color: ${(p) => p.theme.color.gray};
  margin-bottom: 0;
  line-height: inherit;
`;
const DescriptionHover = styled.p`
  font-size: 14px;
  text-align: left;
  color: ${(p) => p.theme.color.gray};
  margin-bottom: 0;
  line-height: inherit;
`;
const Image = styled.img<{ isHover: boolean | null }>`
  width: 100%;
  height: 100%;
  border-radius: 6px;
  transform: ${(p) => {
    if (!p.isHover) {
      return "scale(1)";
    }
    return `scale(1.5)`;
  }};
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`;
const WrapBox = styled.div`
  position: relative;
`;
const BoxImage = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  transition: ease all 1s;
  cursor: pointer;
`;
const BoxHover = styled.div<{ width: number }>`
  @media (max-width: 420px) {
    width: 100%;
  }
  width: ${(p) => p.width}px;
`;
const BoxZoom = styled.div<{
  width: number;
  index: number;
  currentPage: number;
  lengths: number;
  left: any;
}>`
  @media (max-width: 420px) {
    width: 100%;
    max-width: 100%;
  }
  position: absolute;
  width: ${(p) => p.width}px;
  left: ${(p) => {
    return `${p.left}px`;
  }};
  opacity: 1;
  top: 0;
  transform: translateX(0) translateY(0) scale(1) translateZ(0px);
  z-index: 99999;
`;
const RowDescriptionHover = styled.div`
  background-color: ${(p) => p.theme.bg.white};
  padding: 8px 15px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export default {
  SDiv,
  SDivFlex,
  SBox,
  Row,
  STitle,
  SSlider,
  SSubTitle,
  Description,
  Image,
  Img,
  BoxImage,
  BoxHover,
  WrapBox,
  DescriptionHover,
  SSubTitleHover,
  BoxZoom,
  RowDescriptionHover,
};
