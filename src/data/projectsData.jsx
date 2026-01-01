import iReporterImg from "../assets/images/iReporter.jpg";
import flightBookingImg from "../assets/images/flightbooking.png";
import employeeImg from "../assets/images/Employee.png";

const projectsData = [
  {
    id: 1,
    title: "iReporter",
    label: "Full Stack Development",
    category: "Civic Tech",
    image: iReporterImg,
    demo: "https://ireporter-e.netlify.app/",
    code: "https://github.com/KipletingEdwin/iReporter-client--",
    tech: ["React", "Node.js", "Express", "MongoDB"]
  },

  {
    id: 2,
    title: "Portfolio Website",
    label: "Frontend Development",
    category: "Personal Portfolio",
    image: flightBookingImg,
    demo: "https://edwinkipleting.netlify.app/",
    code: "https://github.com/KipletingEdwin/edwin-kip-portfolio",
    tech: ["React", "Vite", "Tailwind", "Framer Motion"]
  },

  {
    id: 3,
    title: "Employee Management System",
    label: "UI/UX Design",
    category: "HR & Management",
    image: employeeImg,
    demo: "https://your-demo-link.com",
    code: "https://github.com/your-repo",
    tech: ["Figma", "Prototyping", "User Flows"]
  },
];


export default projectsData;
