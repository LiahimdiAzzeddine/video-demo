import React, { useState } from 'react';
import ShareButton from './ShareButton';
import '../ShareWrapper.css';  // Assuming you move the CSS styles to ShareWrapper.css

const ShareWrapper = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <div id="share-wrapper" className="position-fixed">
      <input 
        type="checkbox" 
        name="share-checkbox" 
        id="share-checkbox" 
        className="d-none" 
        checked={checked}
        onChange={handleCheckboxChange}
      />
      <label 
        id="share" 
        className="mb-2 d-flex justify-content-center align-items-center" 
        htmlFor="share-checkbox" 
        data-toggle="tooltip" 
        data-placement="left" 
        title="Click to share"
      >
        <i className="fa fa-share-alt"></i>
      </label>
      <ul className={`list-unstyled d-flex flex-wrap ${checked ? 'active' : ''}`}>
        <ShareButton
          href="https://www.google.com/bookmarks/mark?op=edit&bkmk=URLTOSHARE&title=TITLETOSHARE&annotation=TEXTTOSHARE&labels=HASH_TAGS"
          className="share-google-bookmarks"
          tooltip="Share this page!"
        >
          <i className="fab fa-google"></i>
        </ShareButton>
        <ShareButton
          href="https://share.flipboard.com/bookmarklet/popout?v=2&url=URLTOSHARE&title=TITLETOSHARE"
          className="share-flipboard"
          tooltip="Share this page!"
        >
          <i className="fab fa-flipboard"></i>
        </ShareButton>
        <ShareButton
          href="https://news.ycombinator.com/submitlink?u=URLTOSHARE&t=TITLETOSHARE"
          className="share-hacker-news"
          tooltip="Share this page!"
        >
          <i className="fab fa-hacker-news"></i>
        </ShareButton>
      </ul>
    </div>
  );
};

export default ShareWrapper;
