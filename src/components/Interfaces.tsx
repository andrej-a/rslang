export interface IMembers {
  key: number;
  name: string;
  img: string;
  role: string;
  aboutMember: string;
  projectWork: string;
  link: string;
}

export interface IAboutAppItem {
  key: number;
  title: string;
  text: string;
  img: string;
  textButton: string;
  linkPage: string;
  alignImage: string;
}

export interface IContact {
  key: number;
  name: string;
  link: string;
}

export interface IGameCommomInfo {
  title: string;
  img: string;
}

export interface IWordResult {
  key?: number;
  wordEng?: string;
  wordRu?: string;
  audioUrl?: string;
}
