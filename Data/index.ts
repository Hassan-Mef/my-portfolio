export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a FPS Shooter in C++",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Responsive Next.js Portfolio",
    des: "My current portfolio website you are currently looking at.",
    img: "/Pr1.jpeg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://hassan-mef.netlify.app/",
  },
  {
    id: 2,
    title: "Simple Responsive React Portfolio",
    des: "A minimalist, clean and responsive design website made in React ",
    img: "/Pr2.jpeg",
    iconLists: ["/re.svg", "/css.png", "/ts.svg", "/fm.svg", "/c.svg"],
    link: "https://github.com/Hassan-Mef/React-Portfolio",
  },
  {
    id: 3,
    title: "Farman Foods - E-Commerce website",
    des: "A Wordpress E-Commerce website for a selling Organic Honey Online",
    img: "/Pr3.png",
    iconLists: ["/wp.png", "/woo.png", "/css.png",  "/ele.jpeg"],
    link: "https://farmanfoods.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "Hassan is an excellent Discord server expert who did a fantastic job creating a server for my community. He completed the project in a short amount of time, and he made sure that the server had all the features and settings that I wanted.                                                                                                  ",
    name: "William Paul",
    title: "CEO of NOTA CLUB",
    img: "/profiles/williams.png",
  },
  {
    quote:
      "Hassan is an amzaing Discord Developer. He provided me with many useful tips and ideas on how to enhance the server’s functionality and make it more secure from raids. He was very professional, friendly and responsive throughout the project. I am very pleased with the server he created.                                                ",
    name: "Haroon ",
    title: "Founder of JHM",
    img: "/profile.svg",
  },
  {
    quote:
      "Collaborating with Hassan was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Hassan's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Hassan is the ideal partner.",
    name: "Huzaifa Saad",
    title: "COO of Softronix ",
    img: "/profiles/huzaifa.png",
  },
  {
    quote:
      "Collaborating with Hassan was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Hassan's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Hassan is the ideal partner.",
    name: " Muhammad Zawahir",
    title: "Director at Zawi Enterprises",
    img: "/profiles/zawi.png",
  },
  {
    quote:
      "Hassan Mehmood is a great WordPress developer who created a website for my business, FarmanFoods, in a timely and efficient manner. He met all my requirements and expectations, and also gave me valuable advice on how to optimize the website for speed and usability.",
    name: "Farman Khan",
    title: "CEO of FarmanFoods",
    img: "/profiles/farman.png",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Web Developer",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Discord Developer - NOTA CLUB",
    desc: "Designed and developed completly functioning discord server.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Discord Moderator",
    desc: "Managed community interactions, enforced server rules, and facilitated a positive environment.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "WordPress Developer",
    desc: "Developed and maintained e-commerce websites, implementing user-facing features with modern frontend technologies",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Hassan-Mef" ,
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "" ,
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/hassan-mehmood-b5965a24b/" ,
  },
];