type Category =
  | "genral"
  | "business"
  | "entertainment"
  | "heath"
  | "science"
  | "sports"
  | "technology";

type Pagination = {
  count: Int;
  limit: Int;
  offset: Int;
  total: Int;
};

type Artical = {
  auther: string | null;
  category: string;
  country: string;
  description: string;
  image: string | null;
  language: string;
  published_at: string;
  source: string;
  title: string;
  url: string;
};

type NewsResponse = {
  pagination: Pagination;
  data: Artical[];
};
