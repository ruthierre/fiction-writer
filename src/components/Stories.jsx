import './Stories.css';
import PropTypes from 'prop-types';

Stories.propTypes = {
    stories: PropTypes.array.isRequired,
    selectStory: PropTypes.func.isRequired
};

export default function Stories({stories, selectStory}) {
  return (
    <div className="stories">
      <h2>Histórias</h2>
      {stories.map((story) => (
        <a key={story.title} onClick={() => selectStory(story)}>
            {story.title}
        </a>
      ))}      
    </div> 
  );
}