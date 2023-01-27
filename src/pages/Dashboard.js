import { useEffect, useState } from "react";
import CodeEditior from "../components/CodeEditior";
import WebView from "../components/WebView";

const Dashboard = () => {
  const [htmlValue, setHtmlValue] = useState("");
  const [cssValue, setCssValue] = useState("");
  const [jsValue, setJsValue] = useState("");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>
          <style>${cssValue}</style>
          ${htmlValue}
          <script>${jsValue}</script>
          </body>
        </html>
    `);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [htmlValue, cssValue, jsValue]);

  return (
    <div>
      <CodeEditior
        htmlValue={htmlValue}
        cssValue={cssValue}
        jsValue={jsValue}
        setHtmlValue={setHtmlValue}
        setCssValue={setCssValue}
        setJsValue={setJsValue}
      />
      <WebView srcDoc={srcDoc} />
    </div>
  );
};

export default Dashboard;
