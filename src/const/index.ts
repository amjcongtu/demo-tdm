
const API_URL = process.env.API_BASE_URL as string ;
export const APIs = {
  RECOMMEND: API_URL + "data_recommend.json",
};
export const queryKeys = {
  recommend: 'getRecommend',
}
export const ITEM_PER_PAGE = 5