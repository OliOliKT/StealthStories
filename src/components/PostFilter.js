import React from "react";
import "./PostFilter.css";

function PostFilter({ setMood, handleSortChange }) {
  const handleMoodChange = (event) => {
    setMood(event.target.value);
  };

  return (
    <div id="post-filter">
      <label htmlFor="sort-by-filter">Sort by:</label>
      <select
        id="sort-by-filter"
        name="sort-by-filter-list"
        onChange={handleSortChange}
      >
        <option value="date">Date</option>
        <option value="popularity">Popularity</option>
      </select>

      <label htmlFor="mood-filter">Mood: </label>
      <select
        id="mood-filter"
        name="mood-filter-list"
        onChange={handleMoodChange}
      >
        <option value="all" selected>
          All
        </option>
        <option value="happy">Happy</option>
        <option value="cheeky">Cheeky</option>
        <option value="sad">Sad</option>
        <option value="cheerful">Cheerful</option>
        <option value="excited">Excited</option>
        <option value="envious">Envious</option>
        <option value="angry">Angry</option>
        <option value="outraged">Outraged</option>
        <option value="disappointed">Disappointed</option>
        <option value="surprised">Surprised</option>
        <option value="annoyed">Annoyed</option>
        <option value="fulfilled">Fulfilled</option>
        <option value="trusting">Trusting</option>
        <option value="inspired">Inspired</option>
        <option value="brave">Brave</option>
        <option value="proud">Proud</option>
        <option value="depressed">Depressed</option>
        <option value="embarrassed">Embarrassed</option>
        <option value="guilty">Guilty</option>
        <option value="scared">Scared</option>
      </select>
    </div>
  );
}

export default PostFilter;
