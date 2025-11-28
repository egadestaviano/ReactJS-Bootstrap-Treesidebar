import { useState, useMemo } from "react";
import SidebarItem from "./SidebarItem.jsx";
import { db } from "./db.js";

const Sidebar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter the database based on search term
  const filteredDb = useMemo(() => {
    if (!searchTerm) return db;
    
    const searchTermLower = searchTerm.toLowerCase();
    
    const filterItems = (items) => {
      return items.filter(item => {
        // Check if the item itself matches
        const matchesTitle = item.title.toLowerCase().includes(searchTermLower);
        
        // Check if any children match (recursive)
        const hasMatchingChildren = Array.isArray(item.children) && 
          filterItems(item.children).length > 0;
        
        // Return true if either the item or its children match
        return matchesTitle || hasMatchingChildren;
      }).map(item => {
        // If the item has children, filter them too
        if (Array.isArray(item.children)) {
          return {
            ...item,
            children: filterItems(item.children)
          };
        }
        return item;
      });
    };
    
    return filterItems(db);
  }, [searchTerm]);

  return (
    <div className="sidebar-container">
      <div className="search-box mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search menu..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="sidebar shadow-sm bg-body-tertiary">
        {filteredDb.map((item) => (
          <SidebarItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;