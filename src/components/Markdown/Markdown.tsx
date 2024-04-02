import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import "./styles.css"
interface Props{
  filepath: string;
}
const MarkdownComponent: React.FC<Props> = ({filepath}) => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    // Replace 'path/to/markdownFile.md' with the actual path to your markdown file
    fetch(filepath)
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
  }, []);

  return <ReactMarkdown className="markdown" remarkPlugins={[remarkGfm]} children={markdown} />;
};

export default MarkdownComponent;
