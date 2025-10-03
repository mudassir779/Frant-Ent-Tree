// src/components/admin/Sidebar.jsx
import { NavLink } from 'react-router-dom';

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const navItems = [
    { path: '/admin-dashboard', icon: '📊', label: 'Dashboard' },
    { path: '/admin-dashboard/add-blog', icon: '✍️', label: 'Add Blog' },
    { path: '/admin-dashboard/edit-blogs', icon: '📝', label: 'Edit Blogs' },
    { path: '/admin-dashboard/add-category', icon: '🏷️', label: 'Add Category' },
    { path: '/admin-dashboard/delete-category', icon: '🗑️', label: 'Delete Category' },
    { path: '/admin-dashboard/job-requests', icon: '💼', label: 'Job Requests' },
  ];

  return (
    <>
      {/* Mobile backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out 
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0`}
      >
        <div className="flex items-center justify-center h-16 px-4 bg-blue-600">
          <h1 className="text-xl font-bold text-white">Admin Panel</h1>
        </div>
        <nav className="mt-6">
          <ul>
            {navItems.map((item) => (
              <li key={item.path} className="px-2 py-1">
                <NavLink
                  to={item.path}
                  onClick={() => setSidebarOpen(false)}
                  className={({ isActive }) => 
                    `flex items-center w-full px-4 py-2 text-left rounded-lg transition-colors 
                    ${isActive ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`
                  }
                >
                  <span className="mr-3">{item.icon}</span>
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;