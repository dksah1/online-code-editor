import {
  FaPython,
  FaJsSquare,
  FaJava,
  FaHtml5,
  FaPhp,
  FaCuttlefish,
} from "react-icons/fa";

const SideNav = ({ language, setLanguage }) => {
  const languages = [
    { name: "javascript", icon: <FaJsSquare size={50} /> },
    { name: "python", icon: <FaPython size={50} /> },
    { name: "java", icon: <FaJava size={50} /> },
    { name: "html", icon: <FaHtml5 size={50} /> },
    { name: "php", icon: <FaPhp size={50} /> },
    { name: "c++", icon: <FaCuttlefish size={50} /> },
  ];

  return (
    <div className="bg-gray-800 w-20 h-screen flex flex-col items-center py-4 px-2  ">
      {languages.map((lang) => (
        <div
          key={lang.name}
          className={`flex flex-col items-center justify-center w-full mb-4 cursor-pointer transition-all ${
            language === lang.name
              ? "bg-blue-600 text-white h-20 rounded-lg scale-110"
              : "bg-gray-700 text-gray-300 h-16 rounded-md"
          }`}
          onClick={() => setLanguage(lang.name)}
        >
          {lang.icon}
        </div>
      ))}
    </div>
  );
};

export default SideNav;
