
import React from 'react';

interface TabNavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'summary', name: 'Summary' },
    { id: 'action-items', name: 'Action Items' },
    { id: 'decisions', name: 'Decisions' },
    { id: 'issues', name: 'Issues' },
    { id: 'follow-up', name: 'Follow-up' },
  ];

  return (
    <nav className="mb-6">
      <ul className="flex border-b">
        {tabs.map((tab) => (
          <li key={tab.id} className="mr-1">
            <button
              className={`py-2 px-4 focus:outline-none ${
                activeTab === tab.id
                  ? 'text-indigo-600 border-b-2 border-indigo-600 font-medium'
                  : 'text-gray-500 hover:text-indigo-500'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TabNavigation;
