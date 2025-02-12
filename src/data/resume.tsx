import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Aditya Portfolio",
  initials: "Aks",
  url: "https://portfoliov2-three-steel.vercel.app/",
  location: "Chennai, India",
  locationLink: "https://www.google.com/maps/place/S.R.M+UNIVERSITY+-K.T.R+Campus/@12.8231431,80.0413663,17z/data=!3m1!4b1!4m6!3m5!1s0x3a52f76d4cecae21:0x4ffbf1222ec00611!8m2!3d12.8231431!4d80.0413663!16s%2Fg%2F11c2jyj5gq?entry=ttu",
  description:
    "Web and App Developer, UI/UX Designer. I love building things and Passionate About Creating User-Centered Solutions",
  summary:
    "I am a second-year Computer Science undergraduate at SRM University, Chennai, specializing in both frontend and backend web development. I create intuitive web applications and manage version control using Git and GitHub. With a strong focus on data structures and algorithms, I am committed to building efficient and scalable solutions. Additionally, I use Figma and Framer for UI design. Currently, I am expanding my knowledge by learning Web3 technologies. Outside of coding, I enjoy playing chess and am eager to connect with fellow tech enthusiasts to explore collaborative opportunities.",
  avatarUrl: "/adityalinkedin.jpg",
  skills: [
    "React",
    "React Native",
    "Next.js",
    "Javascript",
    "Typescript",
    "Docker",
    "MySQL",
    "Java",
    "C++",
    "Node.js",
    "MongoDB",
    "Express",
    "Python",
    "TailwindCss",
    "Figma",
    "WebFlow",
    "Git",
    "C",
    "AutoCAD",
    "Google Cloud",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "adityandmb.com",
    tel: "+91 8652884230",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Axestein",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/adityakumarsingh2005/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/adityasingh7211",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Runverve",
      href: "https://www.runverve.tech/",
      badges: ["Remote"],
      location: "Remote",
      title: "App Developer Intern",
      logoUrl: "/runverve.jpg",
      start: "Feb 2025",
      end: "Present",
      description:
        "Developed and optimized core features of the fitness app, including workout tracking and progress monitoring, enhancing user engagement by 40% using React Native. Collaborated on app performance improvements and UI/UX enhancements, reducing load times by 20% andincreasing overall user retention through intuitive design and smooth navigation.",
      offerLetterUrl: "https://drive.google.com/file/d/1ejssiQsYXSu9HCuKM5TcFZX-oGG-tZ2b/view?usp=sharing", 
    }, 
    {
      company: "BlueStock Fintech",
      badges: ["Remote"],
      href: "https://bluestock.in/",
      location: "Hybrid",
      title: "Full Stack Developer Intern",
      logoUrl: "/bluestock.jpg",
      start: "Dec 2024",
      end: "Jan 2025",
      description:
        "Developed key features for Bluestock platform, including IPO, community, products pages, and homepage, improving user experience and engagement by 30%. Built and optimized the admin dashboard and RESTful API for managing upcoming IPOs, improving backend performance by 25% and ensuring scalability",
      offerLetterUrl: "https://drive.google.com/file/d/15CqMWOLBRxPIl_a1J179ViXP958tMj4i/view?usp=sharing", 
    },
    {
      company: "Niramaya",
      href: "https://niramaya-orcin.vercel.app/",
      badges: ["On-Site"],
      location: "On-site",
      title: "Frontend Web Developer Intern",
      logoUrl: "/niramaya.png",
      start: "Sep 2024",
      end: "Nov 2024",
      description:
        " Developed and launched a scalable web platform with a CMS, admin panel, and user dashboards using React and Tailwind CSS, improving user engagement by 20% through a more intuitive and responsive design. Designed and implemented a responsive landing page that increased conversion rates by 15% and optimized mobile user experience.",
      offerLetterUrl: "https://drive.google.com/file/d/1093uRtBmDNpxnlvgsPwB0n-E7qm4O-w0/view?usp=sharing", 
    }
  ],

  clubs: [ 
    {
      company: "NSCC SRM",
      href: "https://www.nsccsrm.tech/",
      badges: [],
      location: "Hybrid",
      title: "Technical Team Member",
      logoUrl: "/nscclogo.jpg",
      start: "Jun 2024",
      end: "Present",
      description: "Collabrated and made the Responsive Recuritment website for the club(website was used by 1200+ students for registration), used react.js and tailwind css. Also made the Entire Figma design for the website for laptop and mobile screen seprately. Managed and Organized IDEONOVA, Our Flagship ideathon event.",
    },
    {
      company: "MLSA SRM",
      href: "https://www.nsccsrm.tech/",
      badges: [],
      location: "Hybrid",
      title: "Technical Associate",
      logoUrl: "/mlsa.jpg",
      start: "Oct 2024",
      end: "Present",
      description: "I developed the club website, ensuring it was fully responsive and easy to navigate. This involved designing a user-friendly interface, implementing features, and optimizing the site to enhance the overall experience for members. I used modern web technologies, including React.js and Tailwind CSS, to build a fast and visually appealing platform.",
    },
    {
      company: "ACM SIGKDD",
      href: "https://www.nsccsrm.tech/",
      badges: [],
      location: "Hybrid",
      title: "Technical Team member",
      logoUrl: "/acmsigkdd.jpg",
      start: "Sep 2024",
      end: "Present",
      description: "Collabrated and made the Responsive Hackathon website used react.js and tailwind css. Also made the Entire Figma design for the website for laptop and mobile screen seprately.",
    },
    {
      company: "TPHxSRMIST",
      href: "https://www.nsccsrm.tech/",
      badges: [],
      location: "Hybrid",
      title: "Creatives Team Member",
      logoUrl: "/tph.jpg",
      start: "March 2024",
      end: "Present",
      description: "I designed posters for two major events, creating visually engaging and informative materials that helped promote the events to a wider audience. Additionally, I assisted in the UI design of the website, collaborating with the design team to create a user-friendly interface. I focused on enhancing the visual appeal and functionality of the website, ensuring that it was intuitive, responsive, and aligned with the club branding.",
    },
  ],

  education: [
    {
      school: "SRM University of science and technology",
      href: "https://www.srmist.edu.in/",
      degree: "Bachelors in Technology(B.Tech)",
      logoUrl: "/srmlogo.jpg",
      start: "2023",
      end: "2027",
    },
    {
      school: "New Bombay City School",
      degree: "Intermediate",
      logoUrl: "/nbsclogo.png",
      start: "2023",
      end: "2021",
    },
    {
      school: "Seventh Day adventist Higher Secondary School",
      degree: "Matriculation",
      logoUrl: "/sdalogo.jpg",
      start: "2010",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "Bidlink",
      href: "",
      dates: "Jan 2025 - Jan 2025",
      active: true,
      description:
        "A cutting-edge auction platform designed to unite investors and SMEs seamlessly using a bidding system",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Express.js",
        "Node.js",
        "MongoDB",
        "Git",
        "OpenAI API",
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/Axestein/BidLink",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Axestein/BidLink",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/bidlink.png",
    },
    {
      title: "ThreeFund",
      href: "https://traveelvista.vercel.app/",
      dates: "Dec 2024 - Dec 2024",
      active: true,
      description:
        "ThreeFund Empowers Communities Through Web3 Crowdfunding. How it Works? 1) Create a Campaign 2) Connect Your Wallet 3) Share with Your Communityc 4) Collect Funds and Distribute Transparently",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Solidity",
        "Hardhat",
        "git",
        "web3",
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Axestein/threeFund",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/threefund2.png",
    },
    {
      title: "10xCoders",
      dates: "August 2024 - August 2024",
      active: true,
      description:
        "CodersHub is a premier platform dedicated to empowering individuals embarking on their tech journey. CodersHub provides interview preparation with help of ai, resume builder and enhancement, tailored roadmaps and comprehensive resources,ai support and best communities to join.",
      technologies: [
        "React.js",
        "Express.js",
        "MongoDB",
        "Node.js",
        "Figma",
        "Web Speech API",
        "Flask",
      ],
      links: [
        {
          type: "Website",
          href: "https://coders-hub-iota.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Axestein/CodersHub",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/codershubpro1.png",
    },
    {
      title: "WearIt",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "WearIt is the ultimate platform for customizing your t-shirt designs in 3D! With WearIt, you can effortlessly personalize your shirts by changing colors, adding custom logos, and even generating unique designs with DALL·E.",
      technologies: [
        "Three.js",
        "MongoDB",
        "React.js",
        "TailwindCSS",
        "Node.js",
        "Express.js",
        "Restful API",
      ],
      links: [
        {
          type: "Website",
          href: "https://wear-it.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Axestein/WearIt",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Wearit.png",
   },
  ],
  
} as const;