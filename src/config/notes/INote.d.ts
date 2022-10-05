import NoteType from './NoteType.d';

interface INote {
  id: number;
  type: NoteType;
  name: string;
  url?: string;
  file?: string;
  desc: string;
}

export default INote;
