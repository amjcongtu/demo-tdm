import { APIs } from "const";
import { ServiceBase } from "../../service/request/service-base";

class RecommendService extends ServiceBase {
  getRecommendList = async () => {
    const result = await this.getParams(`${APIs.RECOMMEND}`, {});
    return result.data;
  };
}

const recommendService = new RecommendService();

export default recommendService;
