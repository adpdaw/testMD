import "./toolbar.css";
import { useMarkdown } from "../../provider/markdown-provider.js";
import handleSelectedText from  "../../utils/SelectedText.js";
import StartPosition from "../../utils/StarPosition";
import React from "react";

function Image() {
  const [markdown, setMarkdown] = useMarkdown();
 

  const executeImage = () => {
    const text = handleSelectedText();
    const indexToReplace = StartPosition();
    const previousMarkdown = markdown;
    return  text !== "" ? setMarkdown(previousMarkdown.substring(0 , indexToReplace) +  `\n![${text}](LINK_IMAGE)` +
      markdown.substring(indexToReplace + text.length )): setMarkdown(markdown +`\n![PAGE_NAME_ALT](LINK_IMAGE)`);
    };

  return (
    <React.Fragment>
    <div className="titleBar" onClick={executeImage}>
      <button aria-label="Add Image">

        <svg width="15" height="15" viewBox="0 0 20 20">
        <path
        fill="currentColor"
        d="M15 9c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4-7H1c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 13l-6-5-2 2-4-5-4 8V4h16v11z"
      />
        </svg>
      </button>
    </div>
    </React.Fragment>
  );
}
export default Image;

