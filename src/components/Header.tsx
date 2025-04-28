
import React from 'react';
import { MeetingData } from '../types/meeting';
import { CalendarDays, Users } from 'lucide-react';

interface HeaderProps {
  meetingData: MeetingData;
}

const Header: React.FC<HeaderProps> = ({ meetingData }) => {
  return (
    <header className="mb-8">
      <h1 className="text-3xl font-bold text-indigo-600 mb-2">{meetingData.meetingTitle}</h1>
      <div className="flex items-center text-gray-600">
        <span className="mr-4 flex items-center">
          <CalendarDays className="mr-2 h-4 w-4" />
          {meetingData.date}
        </span>
        <span className="flex items-center">
          <Users className="mr-2 h-4 w-4" />
          {meetingData.participants.length} Participants
        </span>
      </div>
    </header>
  );
};

export default Header;
