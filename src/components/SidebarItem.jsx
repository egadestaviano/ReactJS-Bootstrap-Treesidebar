import { useState } from "react";
import PropTypes from "prop-types";

const SidebarItem = ({ item }) => {
  const hasChildren = Array.isArray(item.childrens) && item.childrens.length > 0;
  const [isOpen, setIsOpen] = useState(item.isOpen === 1);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return hasChildren ? (
    <div className={`sidebar-item ${isOpen ? "open" : ""}`}>
      <div className="sidebar-title" onClick={toggleOpen}>
        <span>
          {item.icon && <i className={item.icon}></i>} {item.title}
        </span>
        <i className={`bi-chevron-left toggle-btn icon-item ${isOpen ? "rotated" : ""}`}></i>
      </div>
      <div className={`sidebar-content ${!isOpen ? "d-none" : ""}`}>
        {item.childrens.map((child) => (
          <SidebarItem key={child.id} item={child} />
        ))}
      </div>
    </div>
  ) : (
    <a href={item.path || "#"} className="sidebar-item plain">
      {item.icon && <i className={item.icon}></i>} {item.title}
    </a>
  );
};

SidebarItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
    path: PropTypes.string,
    isOpen: PropTypes.number,
    childrens: PropTypes.array,
  }).isRequired,
};

export default SidebarItem;
