import SidebarItem from "./SidebarItem.jsx";
import { db } from "./db.js";

const Sidebar = () => {
  return (
    <div className="sidebar shadow-sm bg-body-tertiary">
      {db.map((item) => (
        <SidebarItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Sidebar;
