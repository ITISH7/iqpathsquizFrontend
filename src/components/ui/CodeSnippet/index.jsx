import Prism from 'prismjs'
import 'prismjs/themes/prism-solarizedlight.css'

import React, { useEffect, useRef } from 'react'



const CodeSnippet= ({ code, language }) => {
  const codeRef = useRef(null);

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current)
    }
  }, [code]);

  return (
    <pre className={`language-${language}`}>
      <code className={`language-${language}`} ref={codeRef}>
        {code}
      </code>
    </pre>
  );
};

export default CodeSnippet;
