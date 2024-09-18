import React, { useState } from 'react';
import MonacoEditor from '@monaco-editor/react';
import styled from 'styled-components';

const EditorContainer = styled.div`
  margin: 20px auto;
  width: 90%;
  font-family: 'Fira Code', 'Consolas', monospace;
  background: #2a2a2a;
  color: #f8f8f2;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow-x: auto;
  font-size: 16px;
`;

const RunButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #50fa7b;
  color: black;
  border: none;
  border-radius: 10px;
  padding: 5px 10px;
  font-size: 0.8em;
  cursor: pointer;
`;

const OutputContainer = styled.div`
  margin-top: 20px;
  background-color: #1e1e1e;
  color: #f8f8f2;
  padding: 10px;
  border-radius: 8px;
  white-space: pre-wrap;
`;

const CodeEditor = ({ language, initialCode, theme }) => {
  const [code, setCode] = useState(initialCode || '');
  const [output, setOutput] = useState('');

  const handleEditorChange = (value) => {
    setCode(value);
  };

  const handleRun = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/execute-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code, language }),
      });

      const result = await response.json();
      setOutput(result.error ? `Error: ${result.error}` : result.result);
    } catch (err) {
      setOutput(`Error: ${err.message}`);
    }
  };


  return (
    <div>
      <MonacoEditor
        height="40vh"
        language={language}
        theme={theme}
        value={code}
        onChange={handleEditorChange}
        options={{
          fontSize: 14,
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
        }}
      />
      <button onClick={handleRun}>Run Code</button>
      <pre>{output}</pre>
    </div>
  );
};

export default CodeEditor;
