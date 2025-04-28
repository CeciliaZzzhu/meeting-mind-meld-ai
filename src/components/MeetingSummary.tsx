
import React from 'react';
import { MeetingData } from '../types/meeting';

interface MeetingSummaryProps {
  meetingData: MeetingData;
}

const MeetingSummary: React.FC<MeetingSummaryProps> = ({ meetingData }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Meeting Summary</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
          <h3 className="font-medium text-lg mb-2 text-indigo-600">Key Topics</h3>
          <ul className="list-disc pl-5">
            {meetingData.topics.map((topic, index) => (
              <li key={index} className="mb-1">{topic}</li>
            ))}
          </ul>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
          <h3 className="font-medium text-lg mb-2 text-indigo-600">Key Decisions</h3>
          <ul className="list-disc pl-5">
            {meetingData.decisions.map((decision, index) => (
              <li key={index} className="mb-1">{decision.text}</li>
            ))}
          </ul>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm md:col-span-2">
          <h3 className="font-medium text-lg mb-2 text-indigo-600">Action Items</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Task</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Owner</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deadline</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {meetingData.actionItems.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-2 whitespace-nowrap">{item.text}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{item.owner}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{item.deadline}</td>
                    <td className="px-4 py-2 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        item.completed ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {item.completed ? 'Completed' : 'Pending'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingSummary;
