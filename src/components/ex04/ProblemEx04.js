const websiteInfo = [
  {
    id: 0,
    imageLink:
      "https://uptempom.com/wp-content/uploads/2021/01/naver-icon-style-1.png",
    website: "Naver",
    link: "https://www.naver.com",
  },
  {
    id: 1,
    imageLink:
      "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png",
    website: "Google",
    link: "https://www.google.com",
  },
  {
    id: 2,
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/KakaoTalk_logo.svg/900px-KakaoTalk_logo.svg.png",
    website: "KakaoTalk",
    link: "https://www.kakaocorp.com/page/service/service/KakaoTalk?lang=en",
  },
];

export const ProblemEx04 = () => {
  return (
    <div>
      <h2>즐겨찾기</h2>
      {websiteInfo.map((websiteLink) => (
        <div key={websiteLink.id}>
          <h3>
            <a href={websiteLink.link} target="_blank">
              <img
                src={websiteLink.imageLink}
                alt={websiteLink.website}
                width="50"
                height="50"
              />
              <br />
              {websiteLink.website}
            </a>
          </h3>
        </div>
      ))}
    </div>
  );
};
