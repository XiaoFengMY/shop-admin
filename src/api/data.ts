// 写入接口请求的文件
import requst from "../config/index";

export const getMenu = (param: any) =>
  requst.post("/permission/getMenu", param);

export const getData = () => requst.get("/home/getData");
