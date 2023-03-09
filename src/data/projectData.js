const projects = [
  {
    title: "ShareBnB",
    image: "",
    feLanguages: ["js"],
    frontEndTechStack: ["react", "mui"],
    beLanguages: ["python"],
    backEndTechStack: ["flask", "psql"],
    groupCount: 2,
    role: "Co-Author",
    description:
      "A peer-to-peer sharing app similar to Airbnb when you can login and post your pool to be available to others with messaging and reservation functionalities.",
    githubLinks: [
      {
        type: "FE",
        url: "https://github.com/meyburdj/sharebnb_front",
      },
      {
        type: "BE",
        url: "https://github.com/maltezc/ShareBnB-Backend",
      },
    ],
  },
  {
    title: "NumbersAPI",
    image: "",
    feLanguages: ["js"],
    frontEndTechStack: ["jquery", "sass", "react-native", "bootstrap"],
    beLanguages: ["python"],
    backEndTechStack: ["flask", "psql"],
    groupCount: 11,
    role: "Co-Author",
    description:
      "A fact retrieving application where I was a primary contributor and integrated frontend functionality along with also adding a cronjob to retrieve a random fact from our API and send it to a specified slack channel. I also co-authored implenting a request tracker to analyze which facts were getting pinged the most.",
    githubLinks: [
      {
        type: "",
        url: "https://github.com/rithmschool/numbers_api_v2",
      },
    ],
  },
  {
    title: "Jobly",
    image: "",
    feLanguages: ["python"],
    frontEndTechStack: ["flask"],
    beLanguages: ["python"],
    backEndTechStack: ["flask", "psql"],
    groupCount: "2",
    role: "Co-Author",
    description:
      "Co-a uthored a job board application where a user can navigate to see which jobs are available.",
    githubLinks: [
      {
        type: "FE",
        url: "https://github.com/maltezc/react-jobly",
      },
      {
        type: "BE",
        url: "https://github.com/maltezc/Chris-Jobly",
      },
    ],
  },
  {
    title: "Warbler",
    image: "",
    feLanguages: ["python"],
    frontEndTechStack: ["flask"],
    beLanguages: ["python"],
    backEndTechStack: ["flask", "psql"],
    groupCount: "2",
    role: "Co-Author",
    description:
      "A twitter clone where a user is able to create and like posts as well follow other users.",
    githubLinks: [
      {
        type: "",
        url: "https://github.com/maltezc/warbler",
      },
    ],
  },
];

export default projects;
