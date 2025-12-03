import notes from '../data/items.json';
import NoteCard from './NoteCard';

function getRandomItem(list) {
  const index = Math.floor(Math.random() * list.length);
  return list[index];
}

export default function RandomNote() {
  const randomNote = getRandomItem(notes);

  return (
    <div>
      <NoteCard note={randomNote} />
    </div>
  );
}
