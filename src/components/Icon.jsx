import { iconMapping } from "../utils/data";

const Icon = ({ name, alt = "icon", className = "", ...props }) => {
  const iconPath = iconMapping[name];

  if (!iconPath) {
    console.error(`Icon "${name}" not found in the mapping.`);
    return null;
  }

  return (
    <img
      src={process.env.PUBLIC_URL + iconPath}
      alt={alt}
      className={`icon ${className}`}
      {...props}
    />
  );
};

export default Icon;
