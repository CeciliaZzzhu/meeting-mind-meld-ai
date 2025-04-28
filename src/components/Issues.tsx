
import React from 'react';
import { MeetingData } from '../types/meeting';
import { Trash } from 'lucide-react';
import { toast } from 'sonner';

interface IssuesProps {
  meetingData: MeetingData;
}

const Issues: React.FC<IssuesProps> = ({ meetingData }) => {
  const handleConvertToAction = (issueId: string) => {
    toast.success("Issue converted to action item");
  };

  const handleResolveIssue = (issueId: string) => {
    toast.success("Issue marked as resolved");
  };
  
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Issues Raised</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {meetingData.issues.map((issue, index) => (
          <div key={index} className="bg-white rounded-md shadow p-4 border-l-4 border-amber-500">
            <div className="flex justify-between">
              <h3 className="font-medium">{issue.topic}</h3>
              <span className="text-sm text-gray-500">Raised by: {issue.speaker}</span>
            </div>
            <p className="mt-2 text-gray-700">{issue.text}</p>
            <div className="mt-3 flex justify-between">
              <div className="space-x-2">
                <button 
                  onClick={() => handleConvertToAction(issue.id)}
                  className="text-sm bg-indigo-100 text-indigo-800 px-2 py-1 rounded hover:bg-indigo-200 transition-colors"
                >
                  Convert to Action Item
                </button>
                <button 
                  onClick={() => handleResolveIssue(issue.id)}
                  className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded hover:bg-green-200 transition-colors"
                >
                  Mark as Resolved
                </button>
              </div>
              <button className="text-red-600 hover:text-red-800">
                <Trash className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Issues;
