import weatherImage from "./assets/weather.png";
import calculatorImage from "./assets/calculator.png";
import notification from "./assets/notification.png";
import productlist from "./assets/productlist.png";
import advicegenerator from "./assets/advicegenerator.png";
import jobfilter from "./assets/jobfilter.png";

const info = [
  {
    id: 1,
    image: weatherImage,
    link: "https://shiera-m2w4-six.vercel.app/",
    title: "Weather App",
    description:
      "A weather app that allows users to check the current weather conditions and forecast for their location or any other location in the world.",
  },
  {
    id: 2,
    image: calculatorImage,
    link: "https://shiera-calculator.vercel.app/",
    title: "Calculator App",
    description:
      "A simple calculator app that allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division.",
  },
  {
    id: 3,
    image: notification,
    link: "https://shiera-notification.vercel.app/",
    title: "Notification App",
    description:
      "A notification app that allows users to create, manage, and receive notifications for various events and reminders.",
  },
  {
    id: 4,
    image: productlist,
    link: "https://product-list-with-cart-hayat3.vercel.app/",
    title: "Product List App",
    description:
      "A responsive dessert menu with an interactive shopping cart. Browse the desserts, adjust quantities, review your order, and confirm it in a summary dialog.",
  },
  {
    id: 5,
    image: advicegenerator,
    link: "https://advice-generator-app-hayat3.vercel.app/",
    title: "Advice Generator App",
    description:
      "A modern, responsive web application that delivers daily wisdom at the click of a button.",
  },
  {
    id: 6,
    image: jobfilter,
    link: "https://job-listings-with-filtering-hayat3.vercel.app/",
    title: "Job Filter App",
    description:
      "A modern, responsive job board featuring real-time tag-based filtering built with TypeScript, Tailwind CSS, and pure DOM manipulation.",
  },
];
export default info;
