
import React, { useState, useEffect } from 'react';
import { sampleMeetingData } from '../data/sampleData';
import { ActionItem } from '../types/meeting';
import { Download, History, Plus } from 'lucide-react';
import { toast } from 'sonner';

// Components
import Loading from '../components/Loading';
import Header from '../components/Header';
import TabNavigation from '../components/TabNavigation';
import MeetingSummary from '../components/MeetingSummary';
import ActionItems from '../components/ActionItems';
import Decisions from '../components/Decisions';
import Issues from '../components/Issues';
import FollowUp from '../components/FollowUp';

const Index: React.FC = () => {
  const [activeTab, setActiveTab] = useState('summary');
  const [meetingData, setMeetingData] = useState(sampleMeetingData);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading data from an API
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const updateActionItem = (updatedItem: ActionItem) => {
    const updatedActionItems = meetingData.actionItems.map(item => 
      item.id === updatedItem.id ? updatedItem : item
    );
    
    setMeetingData({
      ...meetingData,
      actionItems: updatedActionItems
    });
  };
  
  const handleExportData = () => {
    toast.success("Meeting data exported");
  };
  
  const handleViewHistory = () => {
    toast.success("Viewing meeting history");
  };
  
  const handleProcessNewMeeting = () => {
    setIsLoading(true);
    toast.success("Processing new meeting...");
    
    // Simulate processing a new meeting
    setTimeout(() => {
      setIsLoading(false);
      toast.success("New meeting processed successfully");
    }, 2000);
  };
  
  if (isLoading) {
    return <Loading />;
  }
  
  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <Header meetingData={meetingData} />
      
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="bg-white rounded-lg shadow-lg p-6">
        {activeTab === 'summary' && <MeetingSummary meetingData={meetingData} />}
        {activeTab === 'action-items' && <ActionItems meetingData={meetingData} updateActionItem={updateActionItem} />}
        {activeTab === 'decisions' && <Decisions meetingData={meetingData} />}
        {activeTab === 'issues' && <Issues meetingData={meetingData} />}
        {activeTab === 'follow-up' && <FollowUp meetingData={meetingData} />}
      </div>
      
      <div className="mt-6 flex justify-between items-center">
        <div className="space-x-2">
          <button 
            onClick={handleExportData}
            className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 flex items-center"
          >
            <Download className="h-4 w-4 mr-2" />
            Export Data
          </button>
          <button 
            onClick={handleViewHistory}
            className="bg-indigo-100 text-indigo-700 py-2 px-4 rounded-md hover:bg-indigo-200 flex items-center"
          >
            <History className="h-4 w-4 mr-2" />
            View Meeting History
          </button>
        </div>
        <button 
          onClick={handleProcessNewMeeting}
          className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 flex items-center"
        >
          <Plus className="h-4 w-4 mr-2" />
          Process New Meeting
        </button>
      </div>
    </div>
  );
};

export default Index;
