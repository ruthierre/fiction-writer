import Header from './components/Header';
import Editor from './components/Editor';
import Stories from './components/Stories';
import { useState } from 'react';
import './App.css';




export default function App() {

  let previousStories = JSON.parse(localStorage.getItem('stories')) || [];
  const [stories, setStories] = useState(previousStories);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [currId, setCurrId] = useState(0);

  const [nextId, setNextId] =
    useState(previousStories?.[previousStories.length - 1]?.id + 1 || 1);

  function selectStory(story) {
    setTitle(story.title);
    setDescription(story.description);
    document.getElementById('btnExcluir').style.visibility = 'visible';
  }

  function cancelStory() {
    setTitle('');
    setDescription('');
    setCurrId(0);
    document.getElementById('btnExcluir').style.visibility = 'hidden';
  }

  function saveStory() {
    if (title == '') {
      alert('História ainda não possui um título!');
      return;
    }
    let newStories;
    if (currId == 0) {
      newStories = stories.concat({ title, description, id: nextId });
      setNextId(nextId + 1);
    } else {
      newStories = stories.map(story => story.id == currId ? { title, description, id: currId } : story);
    }
    setTitle('');
    setDescription('');
    setCurrId(0);
    setStories(newStories);
    localStorage.setItem('stories', JSON.stringify(newStories));
    document.getElementById('btnExcluir').style.visibility = 'hidden';
  }

  function deleteStory() {
    if (currId == 0) {
      alert('Nenhuma história foi selecionada!');
      return;
    }
    let newStories = stories.filter(story => story.id != currId);
    setTitle('');
    setDescription('');
    setCurrId(0);
    setStories(newStories);
    localStorage.setItem('stories', JSON.stringify(newStories));
    document.getElementById('btnExcluir').style.visibility = 'hidden';
  }


  return (
    <>
      <Header />
      <Stories stories={stories} selectStory={selectStory} />
      <Editor
        title={title} setTitle={setTitle}
        description={description} setDescription={setDescription}
        cancelStory={cancelStory} saveStory={saveStory}
        deleteStory={deleteStory}
      />
    </>
  );
}