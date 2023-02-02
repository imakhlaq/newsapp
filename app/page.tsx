//server componet so i can make this async function

import { categories } from "@/constants";

import fetchNews from "@/lib/fetchNews";

const page = async () => {
  //fetch the news data
  const news: NewsResponse = await fetchNews(categories.join(","));

  console.log(news);

  return <div>data</div>;
};
export default page;
