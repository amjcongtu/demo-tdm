interface TargetRecommend {
  target: number;
  programId: string;
  sourceId: string;
}
interface ItemRecommend {
  id: null | string | number;
  title: string;
  subtitle: string;
  image: string;
  target: TargetRecommend;
}
interface Recommend {
  title: string;
  type: number;
  items: ItemRecommend;
  totalItems: number;
}
export default Recommend;
