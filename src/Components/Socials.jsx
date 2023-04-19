import Card from "./Card";
const data = [
  {
    bg: "bg-facebook",
    color: "white",
    icon: "https://res.cloudinary.com/dzmpjgmes/image/upload/v1681807162/icon-facebook_nhyecr.svg",
    handle: "@nathanf",
    follows: "1987",
    tittle: "Followers",
    daily: "12 Today",
    arrow:
      "https://res.cloudinary.com/dzmpjgmes/image/upload/v1681807162/icon-up_zr3eds.svg",
  },
  {
    bg: "bg-twitter",
    color: "limeGreen",
    icon: "https://res.cloudinary.com/dzmpjgmes/image/upload/v1681807162/icon-twitter_i6mlqd.svg",
    handle: "@nathanf",
    follows: "1044",
    tittle: "Followers",
    daily: "99 Today",
    arrow:
      "https://res.cloudinary.com/dzmpjgmes/image/upload/v1681807162/icon-up_zr3eds.svg",
  },
  {
    bg: "linear gradient hsl(37, 97%, 70%) to hsl(329, 70%, 58%)",
    color: "limeGreen",
    icon: "https://res.cloudinary.com/dzmpjgmes/image/upload/v1681807162/icon-instagram_zorz9l.svg",
    handle: "@realnathanf",
    follows: "11k",
    tittle: "Followers",
    daily: "1099 Today",
    arrow:
      "https://res.cloudinary.com/dzmpjgmes/image/upload/v1681807162/icon-up_zr3eds.svg",
  },
  {
    bg: "bg-youtube",
    color: " brightRed",
    icon: "https://res.cloudinary.com/dzmpjgmes/image/upload/v1681807162/icon-youtube_yqmprx.svg",
    handle: "Nathan F.",
    follows: "8239",
    tittle: "Subscribers",
    daily: "144 Today",
    arrow:
      "https://res.cloudinary.com/dzmpjgmes/image/upload/v1681807162/icon-down_zm4iaz.svg",
  },
];

const Socials = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap lg:justify-center mt-[-50px] body-container">
        {data.map((d, idx) => (
          <Card data={d} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Socials;
