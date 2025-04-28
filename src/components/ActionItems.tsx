
import React from 'react';
import { MeetingData, ActionItem } from '../types/meeting';
import { Check, Edit, Trash, Download, Plus } from 'lucide-react';
import { toast } from 'sonner';

interface ActionItemsProps {
  meetingData: MeetingData;
  updateActionItem: (actionItem: ActionItem) => void;
}

const ActionItems: React.FC<ActionItemsProps> = ({ meetingData, updateActionItem }) => {
  // Group action items by owner
  const actionItemsByOwner: Record<string, ActionItem[]> = {};
  meetingData.participants.forEach(participant => {
    actionItemsByOwner[participant] = [];
  });
  
  meetingData.actionItems.forEach(item => {
    if (actionItemsByOwner[item.owner]) {
      actionItemsByOwner[item.owner].push(item);
    } else {
      actionItemsByOwner["Unassigned"] = actionItemsByOwner["Unassigned"] || [];
      actionItemsByOwner["Unassigned"].push(item);
    }
  });

  const handleToggleComplete = (item: ActionItem) => {
    updateActionItem({
      ...item,
      completed: !item.completed
    });
    toast.success(item.completed ? "Action item marked as pending" : "Action item marked as completed");
  };

  const handleExport = () => {
    toast.success("Action items exported to CSV");
  };

  const handleCreateJira = () => {
    toast.success("Tasks created in Jira");
  };
  
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Action Items</h2>
        <div className="space-x-2">
          <button 
            onClick={handleExport}
            className="bg-indigo-600 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-700 inline-flex items-center"
          >
            <Download className="h-4 w-4 mr-2" />
            Export to CSV
          </button>
          <button 
            onClick={handleCreateJira}
            className="bg-green-600 text-white py-2 px-4 rounded-md shadow hover:bg-green-700 inline-flex items-center"
          >
            <Plus className="h-4 w-4 mr-2" />
            Create Tasks in Jira
          </button>
        </div>
      </div>
      
      {Object.entries(actionItemsByOwner)
        .filter(([_, items]) => items.length > 0)
        .map(([owner, items]) => (
          <div key={owner} className="mb-6">
            <h3 className="text-lg font-medium bg-indigo-50 p-2 rounded-t-md border-b border-indigo-100">
              {owner}
            </h3>
            <div className="bg-white rounded-b-md shadow">
              {items.map((item, index) => (
                <div key={index} className="border-b border-gray-200 last:border-b-0 p-3">
                  <div className="flex items-center">
                    <button 
                      className={`h-5 w-5 rounded mr-3 flex items-center justify-center ${
                        item.completed ? 'bg-green-500 text-white' : 'border border-gray-300'
                      }`}
                      onClick={() => handleToggleComplete(item)}
                    >
                      {item.completed && <Check className="h-3 w-3" />}
                    </button>
                    <div className="flex-grow">
                      <p className={`font-medium ${item.completed ? 'line-through text-gray-500' : ''}`}>
                        {item.text}
                      </p>
                      <div className="text-sm text-gray-500 flex mt-1">
                        <span className="mr-3">Topic: {item.topic}</span>
                        <span className="mr-3">Deadline: {item.deadline}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="text-indigo-600 hover:text-indigo-800">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-800">
                        <Trash className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default ActionItems;
