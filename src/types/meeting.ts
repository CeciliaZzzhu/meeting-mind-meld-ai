
export interface Decision {
  id: string;
  topic: string;
  text: string;
  speaker: string;
}

export interface ActionItem {
  id: string;
  topic: string;
  text: string;
  owner: string;
  deadline: string;
  completed: boolean;
}

export interface Issue {
  id: string;
  topic: string;
  text: string;
  speaker: string;
}

export interface MeetingData {
  meetingTitle: string;
  date: string;
  participants: string[];
  topics: string[];
  decisions: Decision[];
  actionItems: ActionItem[];
  issues: Issue[];
}
