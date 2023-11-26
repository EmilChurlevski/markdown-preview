import React, { useState, useEffect } from 'react';
import  marked  from 'marked';
import 'marked/marked.min.js';
import './App.scss';

const initialMarkdown = `
# Welcome to the Markdown Previewer!

## Subheading

This is a [link](https://www.example.com) to an example website.

\`Inline code\` can be represented using backticks.

\`\`\`
// Code block
function greet() {
  console.log('Hello, Markdown!');
}
\`\`\`

- List item 1
- List item 2
  - Subitem 1
  - Subitem 2

> This is a blockquote.

![Markdown Logo](https://markdown-here.com/img/icon256.png)

**Bolded text.**
`;

const MarkdownPreviewer = () => {
  const [markdown, setMarkdown] = useState(initialMarkdown);

  useEffect(() => {
    document.getElementById('preview').innerHTML = marked(markdown, { breaks: true });
  }, [markdown]);


  const handleInputChange = (e) => {
    setMarkdown(e.target.value);
    adjustTextareaHeight(e.target);
  };

  const adjustTextareaHeight = (element) => {
    element.style.height = 'auto';
    element.style.height = element.scrollHeight + 'px';
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h2>Editor</h2>
          <textarea
            id="editor"
            className="form-control"
            value={markdown}
            onChange={handleInputChange}
            style={{ minHeight: '100px', resize: 'none' }}
          />
        </div>
        <div className="col-md-6">
          <h2>Preview</h2>
          <div id="preview" className="preview" dangerouslySetInnerHTML={{ __html: marked(markdown) }}></div>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <MarkdownPreviewer />
    </div>
  );
}

export default App;
