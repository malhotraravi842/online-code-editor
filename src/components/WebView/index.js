const WebView = ({ srcDoc }) => {
  return (
    <div className="webview">
      <iframe srcDoc={srcDoc} title="Online Text Editor"></iframe>
    </div>
  );
};

export default WebView;
