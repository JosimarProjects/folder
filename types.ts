export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface SectionContent {
  title: string;
  body: string;
}

export interface FolderData {
  page1: {
    header: string;
    subHeader: string;
    sections: SectionContent[];
    conclusion: string;
    footer: string;
  };
  page2: {
    sections: SectionContent[];
    summary: string;
  };
}