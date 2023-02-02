//server componet so i can make this async function

import { categories } from "@/constants";

const page = async () => {
  //fetch the news data
  const news: NewsResponse = await fecthNews(categories.join(","));

  return <div>{/* newslist */}</div>;
};
export default page;
function fecthNews(arg0: string): NewsResponse | PromiseLike<NewsResponse> {
  throw new Error("Function not implemented.");
}
