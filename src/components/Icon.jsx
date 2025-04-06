import { iconMapping } from "../utils/data";

const Icon = ({ name, alt = "icon", className = "", ...props }) => {
  const IconComponent = iconMapping[name];

  if (!IconComponent) {
    console.error(`Icon "${name}" not found in the mapping.`);
    return null;
  }

  return (
    <span className={`icon ${className}`} aria-hidden="true" {...props}>
      {IconComponent}
    </span>
  );
};

export default Icon;