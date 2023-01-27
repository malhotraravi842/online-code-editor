import { useEffect, useState } from "react";
import CodeEditior from "../components/CodeEditior";
import WebView from "../components/WebView";

const Dashboard = () => {
  const [htmlValue, setHtmlValue] = useState("<h1>Hello Ravi Chaudhary</h1>");
  const [cssValue, setCssValue] = useState("h1{color: red}");
  const [jsValue, setJsValue] = useState("console.log('Hello Ravi');");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${htmlValue}</body>
          <style>${cssValue}</style>
          <script>${jsValue}</script>
        </html>
    `);
    }, 250);

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
