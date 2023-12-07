import Header from './components/Header';
import Editor from './components/Editor';
import Stories from './components/Stories';

import './App.css';

export default function App() {
  const stories = [
    { id: 1, title: 'Primeira História', description:
    'Texto da primeira história.' },
    { id: 2, title: 'Segunda História', description:
    'Texto da segunda história.' },
    { id: 3, title: 'Terceira História', description:
    'Texto da terceira história.' }
  ];

  function selectStory(story) {
    console.log(story);
  }

  return (
    <>
      <Header/>
      <Stories stories={stories} selectStory={selectStory} />
      <Editor/>
    </>
     
  );
}