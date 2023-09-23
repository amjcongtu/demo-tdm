import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";
import recommendService from "service/recommend";
import Recommend from "interface/recommend";
import { queryKeys } from "const";

const useRecommend = () => {
  const getList = async () => {
    try {
      const result: Recommend = await recommendService.getRecommendList();
      if (result) {
        return result;
      }
    } catch (error) {
      console.error("System Error!");
      return []
    }
  };
  const {
    data: recommends,
    isLoading: isLoadingRecommends,
    refetch: refetchRecommend,
  } = useQuery([queryKeys.recommend], () => getList(), {});

  const refetchRecommendQuery = useCallback(() => {
    refetchRecommend();
  }, [refetchRecommend]);
  
  return { recommends, isLoadingRecommends, refetchRecommendQuery };
};

export default useRecommend;
