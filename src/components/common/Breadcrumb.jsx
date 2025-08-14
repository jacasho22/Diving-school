import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Breadcrumb.css';

const Breadcrumb = () => {
  const location = useLocation();
  
  // Convert pathname to breadcrumb items
  const getPathItems = () => {
    const pathnames = location.pathname.split('/').filter(x => x);
    
    const breadcrumbItems = pathnames.map((path, index) => {
      const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
      const displayName = path.charAt(0).toUpperCase() + path.slice(1);
      
      return {
        path: routeTo,
        label: displayName
      };
    });

    return [{ path: '/', label: 'Inicio' }, ...breadcrumbItems];
  };

  const pathItems = getPathItems();

  return (
    <nav className="breadcrumb-container" aria-label="breadcrumb">
      <ol className="breadcrumb">
        {pathItems.map((item, index) => (
          <li 
            key={item.path}
            className={`breadcrumb-item ${index === pathItems.length - 1 ? 'active' : ''}`}
          >
            {index === pathItems.length - 1 ? (
              <span>{item.label}</span>
            ) : (
              <Link to={item.path}>{item.label}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;