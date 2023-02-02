import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsByImage";

const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  const query = gql`
    query myQuery(
      $access_key: String
      $countries: String
      $keywords: String
      $categories: String
    ) {
      myQuery(
        access_key: $access_key
        countries: $countries
        keywords: $keywords
        categories: $categories
      ) {
        data {
          author
          category
          country
          description
          image
          language
          source
          published_at
          title
          url
        }
        pagination {
          count
          limit
          offset
          total
        }
      }
    }
  `;

  const variables = {
    access_key: process.env.MEADIASTACK_API_KEY,
    countries: "in,us,gb",
    keywords: keywords,
    category: category,
  };

  const res = await fetch(
    "https://werl.stepzen.net/api/reeling-bee/__graphql",
    {
      method: "POST",

      cache: isDynamic ? "no-cache" : "default",
      next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
      headers: {
        "Content-Type": "application/json",
        Authorization: `ApiKey ${process.env.STEPZEN_API_KEY}`,
      },
      body: JSON.stringify({
        query,
        variables: variables,
      }),
    }
  );

  const myResponse = await res.json();

  console.log(myResponse);

  const news = sortNewsByImage(myResponse.data.myQuery);

  return news;
};

export default fetchNews;
// stepzen import curl "http://api.mediastack.com/v1/news?access_key=15bc9278057053b922af9b07785e978f&sources=business,sports"
