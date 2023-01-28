import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

const WebView = ({ jsValue, cssValue, htmlValue }) => {
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
    <div className="webview">
      <iframe srcDoc={srcDoc} title="Online Text Editor"></iframe>
    </div>
  );
};

const mapStateToProps = (state) => ({
  jsValue: state.editor.jsValue,
  cssValue: state.editor.cssValue,
  htmlValue: state.editor.htmlValue,
});

export default compose(connect(mapStateToProps))(WebView);
