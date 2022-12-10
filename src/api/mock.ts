import Mock from "mockjs";
import homeApi from "./mockServerData/home";
import menuApi from "./mockServerData/permission";

Mock.mock("/home/getData", homeApi.getStatisticalData);

Mock.mock("/permission/getMenu", "post", menuApi.getMenuData);
