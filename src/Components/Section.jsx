import Overviews from "./Overviews";
const data = [
  {
    title: "Page Views",
    icon: "https://res.cloudinary.com/dzmpjgmes/image/upload/v1681807162/icon-facebook_nhyecr.svg",
    num: "87",
    arrow:
      "https://res.cloudinary.com/dzmpjgmes/image/upload/v1681807162/icon-up_zr3eds.svg",
    progress: "3%",
  },
  {
    title: "Likes",
    icon: "https://res.cloudinary.com/dzmpjgmes/image/upload/v1681807162/icon-facebook_nhyecr.svg",
    num: "52",
    arrow:
      "https://res.cloudinary.com/dzmpjgmes/image/upload/v1681807162/icon-down_zm4iaz.svg",
    progress: "2%",
  },
  {
    title: "Likes",
    icon: "https://res.cloudinary.com/dzmpjgmes/image/upload/v1681807162/icon-instagram_zorz9l.svg",
    num: "5462",
    arrow:
      "https://res.cloudinary.com/dzmpjgmes/image/upload/v1681807162/icon-up_zr3eds.svg",
    progress: "2257%",
  },
  {
    title: "Profile Views",
    icon: "https://res.cloudinary.com/dzmpjgmes/image/upload/v1681807162/icon-instagram_zorz9l.svg",
    num: "52k",
    arrow:
      "https://res.cloudinary.com/dzmpjgmes/image/upload/v1681807162/icon-up_zr3eds.svg",
    progress: "1375%",
  },
  {
    title: "Retweets",
    icon: "https://res.cloudinary.com/dzmpjgmes/image/upload/v1681807162/icon-twitter_i6mlqd.svg",
    num: "117",
    arrow:
      "https://res.cloudinary.com/dzmpjgmes/image/upload/v1681807162/icon-up_zr3eds.svg",
    progress: "303%",
  },
  {
    title: "Likes",
    icon: "https://res.cloudinary.com/dzmpjgmes/image/upload/v1681807162/icon-twitter_i6mlqd.svg",
    num: "507",
    arrow:
      "https://res.cloudinary.com/dzmpjgmes/image/upload/v1681807162/icon-up_zr3eds.svg",
    progress: "553%",
  },
  {
    title: "Likes",
    icon: "https://res.cloudinary.com/dzmpjgmes/image/upload/v1681807162/icon-youtube_yqmprx.svg",
    num: "107",
    arrow:
      "https://res.cloudinary.com/dzmpjgmes/image/upload/v1681807162/icon-down_zm4iaz.svg",
    progress: "-19%",
  },
  {
    title: "Total Views",
    icon: "https://res.cloudinary.com/dzmpjgmes/image/upload/v1681807162/icon-youtube_yqmprx.svg",
    num: "1407",
    arrow:
      "https://res.cloudinary.com/dzmpjgmes/image/upload/v1681807162/icon-down_zm4iaz.svg",
    progress: "-12%",
  },
];

const Section = () => {
  return (
    <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-wrap lg:justify-center">
      {data.map((d, idx) => (
        <Overviews data={d} key={idx} />
      ))}
    </div>
  );
};

export default Section;
