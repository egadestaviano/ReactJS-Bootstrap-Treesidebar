import { Breadcrumb } from "react-bootstrap";
import { useState, useEffect } from "react";

const BreadcrumbNavigation = () => {
  const [breadcrumbs, setBreadcrumbs] = useState([
    { title: "Home", path: "/" }
  ]);

  // In a real app, you would update breadcrumbs based on the current route
  // For this example, we'll simulate breadcrumb updates
  useEffect(() => {
    // This is just for demonstration purposes
    const timer = setTimeout(() => {
      setBreadcrumbs([
        { title: "Home", path: "/" },
        { title: "Category", path: "/category" },
        { title: "Subcategory", path: "/category/subcategory" },
        { title: "Current Page", path: "/category/subcategory/page" }
      ]);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <Breadcrumb className="mb-3">
      {breadcrumbs.map((breadcrumb, index) => (
        <Breadcrumb.Item 
          key={index} 
          href={breadcrumb.path}
          active={index === breadcrumbs.length - 1}
        >
          {breadcrumb.title}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default BreadcrumbNavigation;