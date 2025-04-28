
import React from 'react';
import { MeetingData } from '../types/meeting';
import { toast } from 'sonner';

interface FollowUpProps {
  meetingData: MeetingData;
}

const FollowUp: React.FC<FollowUpProps> = ({ meetingData }) => {
  const handleSendEmail = () => {
    toast.success("Email summary sent to all participants");
  };

  const handlePostToSlack = () => {
    toast.success("Summary posted to Slack");
  };

  const handleCreateCalendarEvents = () => {
    toast.success("Calendar events created");
  };

  const handleScheduleMeeting = () => {
    toast.success("Follow-up meeting scheduled");
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Follow-up Options</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-md shadow p-4 border-t-4 border-indigo-500">
          <h3 className="font-medium text-lg mb-3">Email Summary</h3>
          <p className="text-gray-600 mb-4">Send a meeting summary to all participants.</p>
          <div className="mb-3">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Recipients
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={meetingData.participants.join(", ")}
              readOnly
            />
          </div>
          <button 
            onClick={handleSendEmail}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Send Email Summary
          </button>
        </div>
        
        <div className="bg-white rounded-md shadow p-4 border-t-4 border-purple-500">
          <h3 className="font-medium text-lg mb-3">Slack Notification</h3>
          <p className="text-gray-600 mb-4">Post a summary to a Slack channel.</p>
          <div className="mb-3">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Channel
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
              <option>#team-general</option>
              <option>#sprint-planning</option>
              <option>#engineering</option>
            </select>
          </div>
          <button 
            onClick={handlePostToSlack}
            className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors"
          >
            Post to Slack
          </button>
        </div>
        
        <div className="bg-white rounded-md shadow p-4 border-t-4 border-green-500">
          <h3 className="font-medium text-lg mb-3">Calendar Reminders</h3>
          <p className="text-gray-600 mb-4">Add deadlines to team calendar.</p>
          <div className="mb-3">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Calendar
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
              <option>Team Calendar</option>
              <option>Sprint Calendar</option>
              <option>Personal Calendar</option>
            </select>
          </div>
          <button 
            onClick={handleCreateCalendarEvents}
            className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
          >
            Create Calendar Events
          </button>
        </div>
      </div>
      
      <div className="mt-6 bg-white rounded-md shadow p-4">
        <h3 className="font-medium text-lg mb-3">Schedule Follow-up Meeting</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Meeting Title
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Sprint 19 Follow-up"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date & Time
            </label>
            <input
              type="datetime-local"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Participants
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md" multiple>
              {meetingData.participants.map((participant, index) => (
                <option key={index} value={participant} selected>
                  {participant}
                </option>
              ))}
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Agenda
            </label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              rows={3}
              placeholder="Follow up on action items from previous meeting"
              defaultValue={`1. Status update on action items\n2. Review progress on analytics migration\n3. Test coverage report update`}
            ></textarea>
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <button 
            onClick={handleScheduleMeeting}
            className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Schedule Meeting
          </button>
        </div>
      </div>
    </div>
  );
};

export default FollowUp;
