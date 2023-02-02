import { gql } from "graphql-request";

const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  //graphQL query
  const query = gql`
    query MyQuery(
      $access_key: String!
      $categories: String!
      $keywords: String
    ) {
      myQuery(
        access_key: $access_key
        categories: $categories
        countries: "gb"
        sort: "published_desc"
        keyword: $keywords
      ) {
        data {
          author
          category
          image
          description
          country
          language
          published_at
          source
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

  //fetch function with nextjs 13 caching

  const res = await fetch(
    "https://concepcion.stepzen.net/api/rousing-maltese/__graphql",
    {
      method: "POST",
    }
  );

  //sort by image by not images
  //return
};

export default fetchNews;
// stepzen import curl "http://api.mediastack.com/v1/news?access_key=15bc9278057053b922af9b07785e978f&sources=business,sports"
