import { MeetingData } from "../types/meeting";

export const sampleMeetingData: MeetingData = {
  meetingTitle: "Memorize meetings",
  date: "2025-04-27",
  participants: ["PM", "Engineer_1", "QA", "Engineer_2", "Designer", "Product Lead", "Marketing", "Data"],
  topics: [
    "Sprint Planning", 
    "Login Flow Issue", 
    "Onboarding Redesign", 
    "Analytics Migration",
    "Test Coverage Report", 
    "Dashboard Revamp", 
    "Feature Flag Testing", 
    "QA Signoff Process"
  ],
  decisions: [
    {
      id: "decision-1",
      topic: "Analytics Migration",
      text: "Create Jira ticket to clarify analytics migration ownership",
      speaker: "PM"
    },
    {
      id: "decision-2",
      topic: "Test Coverage Report",
      text: "Fix test coverage report before Friday's check-in",
      speaker: "PM"
    },
    {
      id: "decision-3",
      topic: "Onboarding Redesign",
      text: "If we're doing onboarding, we need specs locked today",
      speaker: "Engineer_1"
    }
  ],
  actionItems: [
    {
      id: "action-1",
      topic: "Login Flow Issue",
      text: "Investigate login flow timeout on mobile",
      owner: "Engineer_1",
      deadline: "Today",
      completed: false
    },
    {
      id: "action-2",
      topic: "Analytics Migration",
      text: "Create Jira ticket to clarify analytics migration ownership",
      owner: "PM",
      deadline: "Today",
      completed: false
    },
    {
      id: "action-3",
      topic: "Test Coverage Report",
      text: "Fix test coverage report config",
      owner: "QA",
      deadline: "Friday",
      completed: false
    },
    {
      id: "action-4",
      topic: "Meeting Follow-up",
      text: "Summarize priorities in Slack with deadlines and action owners",
      owner: "PM",
      deadline: "Today",
      completed: false
    }
  ],
  issues: [
    {
      id: "issue-1",
      topic: "Login Flow Issue",
      text: "Login flow is still breaking intermittently on mobile",
      speaker: "Engineer_1"
    },
    {
      id: "issue-2",
      topic: "Onboarding Redesign",
      text: "Still waiting on final copy for the onboarding screens",
      speaker: "Designer"
    },
    {
      id: "issue-3",
      topic: "Analytics Migration",
      text: "Still unclear who's owning the analytics migration",
      speaker: "Engineer_2"
    },
    {
      id: "issue-4",
      topic: "Test Coverage Report",
      text: "We're also overdue on the test coverage report",
      speaker: "QA"
    }
  ]
};
