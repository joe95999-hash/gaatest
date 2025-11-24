import React from 'react';

export type TabType = 'poster' | 'details';

export interface Speaker {
  name: string;
  role?: string;
  affiliation: string;
}

export interface AgendaItem {
  time: string;
  topic: string;
  subTopic?: string;
  speaker: string;
  type: 'session' | 'break';
}

export interface RuleCard {
  title: string;
  description: string;
  icon: React.ReactNode;
}