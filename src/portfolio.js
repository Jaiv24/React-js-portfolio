/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: "Jaiv Shah",
  title: "Hi all, I'm Jaiv",
  subTitle: emoji(
    "A passionate Software Developer 🚀 having an experience of designing and building Web, Mobile and software applications with Java / JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1KY2NndpVHdaRALiGSZxFlSgbJe8rHE9f/view?usp=sharing",
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/jaiv24",
  linkedin: "https://www.linkedin.com/in/jaiv-shah/",
  gmail: "jaiv.maurya@gmail.com",
  facebook: "https://www.facebook.com/profile.php?id=100009727861709",
  // medium: "https://medium.com/@davidrakosi",
  stackoverflow: "https://stackoverflow.com/users/12150795/jaiv24",
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY SOFTWARE DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Software developer for your web and mobile applications"
    ),
    emoji(
      "⚡ I value simple content structure, clean design patterns, and thoughtful interactions."
    ),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java",
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python",
    },
    {
      skillName: "Android",
      fontAwesomeClassname: "fab fa-android",
    },

    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire",
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    // {
    //   skillName: "css3",
    //   fontAwesomeClassname: "fab fa-css3-alt"
    // },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"],
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc:
        "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"],
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "90%",
    },
    {
      Stack: "Critical Thinking", //Insert stack or technology you have experience in
      progressPercentage: "92%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming",
      progressPercentage: "95%",
    },
    {
      Stack: "Frontend / Design", //Insert stack or technology you have experience in
      progressPercentage: "78%", //Insert relative proficiency in percentage
    },
  ],
  displayCodersrank: true, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "FullStack developer",
      company: "Academic Project",
      companylogo: require("./assets/images/netflix-clone.JPG"),
      date: "January 2021 – March 2021",
      desc: "Build a Netflix clone with React and firebase Hosting.",
      descBullets: [
        "Used TMDB Api-key",
        "Build a Netflix clone using React.js and maintaining declarative code and building HTML using JSX. Use firebase hosting through firebase-cli.",
        "Implemented “react-YouTube” and “movie-trailer” dependencies to display every single trailer of movies. ",
      ],
    },
    {
      role: "Software Engineer",
      company: "Academic Project",
      companylogo: require("./assets/images/logo.png"),
      date: "September 2020 – December 2020",
      desc:
        "Developed A minimalistic Android application to measure temprature.",
      descBullets: [
        "Improved efficiency and performance of the main application by 500%. Perform refactoring of JAVA application and reduce load time by 75%",
        "Proficiently troubleshoot simple and complex technical issues in a project, achieving over 95% Satisfaction Rate. ",
      ],
    },

    {
      role: "Python Django Developer",
      company: "Academic Project",
      companylogo: require("./assets/images/movieApp.PNG"),
      date: "May 2020 – August 2020",
      desc: "A Movie review application in python.",
      descBullets: [
        "Developed a fully functional CRUD python Django app with a Notification power",

        "This movie app lets you to add a movie and type a review about it.",
      ],
    },
    {
      role: "Software Developer",
      company: "Academic Project",
      companylogo: require("./assets/images/GoogleMapsAPIproject.PNG"),
      date: "May 2020 – August 2020",
      desc:
        "Build an application to find details of stores by entering their zip codes.",
      descBullets: [
        "Integrated Google maps API with vanilla javascript.",
        "Increased search speed by 25% and add two different Google maps themes Dark and Retro.",
        "Added 50+ store details inside google maps API. Increased javascript reload time by 10%.",
      ],
    },
    {
      role: "Javascrpit Developer",
      company: "Academic Project",
      companylogo: require("./assets/images/project1.png"),
      date: "May 2019 – June 2019",
      desc: "A web application to make music.",
      descBullets: [
        "A simple web application using HTML, CSS, and JavaScript and to make music.",

        "Make sound using colorful touchpads and see bouncing balls.",
      ],
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "jaiv24", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: true, // Set true or false to show Contact profile using Github, defaults to true
  display: false, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "fa",
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "",
        },
      ],
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle: "",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "",
        },
        {
          name: "Award Letter",
          url: "",
        },
        {
          name: "Google Code-in Blog",
          url: "",
        },
      ],
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "",
        },
      ],
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "",
        },
      ],
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Academic projects",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://jaiv-software-portfolio.netlify.app/assets/work/google-maps-api/index.html ",
      title: "Software developer",
      description:
        "Integrated Google maps API with vanilla javascript Increased search speed by 25% and add two different Google maps themes Dark and RetroAdded 50+ store details inside google maps API. Increased javascript reload time by 10%.",
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(""),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: "",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [""],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "(365) 338 6024",
  email_address: "jaiv.maurya@gmail.com",
};

// Twitter Section

const twitterDetails = {
  userName: "shahjaiv", //Replace "twitter" with your twitter username without @
  display: false, // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
