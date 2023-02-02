const sortNewsByImage = (news: NewsResponse) => {
  const newsWithImage = news?.data.filter((iteam) => iteam.image !== null);
  const newsWithoutImage = news?.data.filter((iteam) => iteam.image === null);

  const sortedNewsResponce = {
    pagination: news?.pagination,
    data: [...newsWithImage, ...newsWithoutImage],
  };

  return sortedNewsResponce;
};
export default sortNewsByImage;
