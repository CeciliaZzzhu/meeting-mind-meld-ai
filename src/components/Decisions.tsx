
import React from 'react';
import { MeetingData } from '../types/meeting';
import { Edit, History } from 'lucide-react';

interface DecisionsProps {
  meetingData: MeetingData;
}

const Decisions: React.FC<DecisionsProps> = ({ meetingData }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Decisions Made</h2>
      
      <div className="rounded-md shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-indigo-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Topic</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Decision</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Made By</th>
              <th className="px-4 py-3 w-24 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {meetingData.decisions.map((decision, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-4 py-3">{decision.topic}</td>
                <td className="px-4 py-3">{decision.text}</td>
                <td className="px-4 py-3">{decision.speaker}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  <div className="flex space-x-2">
                    <button className="text-indigo-600 hover:text-indigo-800">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button className="text-gray-600 hover:text-gray-800">
                      <History className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Decisions;
