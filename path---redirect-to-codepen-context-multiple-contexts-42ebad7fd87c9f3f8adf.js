webpackJsonp([96045267168788],{939:function(e,n){e.exports={pathContext:{action:"https://codepen.io/pen/define",payload:'{"editors":"0010","html":"<div id=\\"root\\"></div>","js":"// 主题上下文, 默认light\\n// highlight-next-line\\nconst ThemeContext = React.createContext(\'light\');\\n\\n// 登陆用户上下文\\n// highlight-next-line\\nconst UserContext = React.createContext();\\n\\n// 一个依赖于两个上下文的中间组件\\nfunction Toolbar(props) {\\n  // highlight-range{2-10}\\n  return (\\n    <ThemeContext.Consumer>\\n      {theme => (\\n        <UserContext.Consumer>\\n          {user => (\\n            <ProfilePage user={user} theme={theme} />\\n          )}\\n        </UserContext.Consumer>\\n      )}\\n    </ThemeContext.Consumer>\\n  );\\n}\\n\\nclass App extends React.Component {\\n  render() {\\n    const {signedInUser, theme} = this.props;\\n\\n    // App组件提供上下文的初始值\\n    // highlight-range{2-3,5-6}\\n    return (\\n      <ThemeContext.Provider value={theme}>\\n        <UserContext.Provider value={signedInUser}>\\n          <Toolbar />\\n        </UserContext.Provider>\\n      </ThemeContext.Provider>\\n    );\\n  }\\n}\\n","js_external":"//unpkg.com/react/umd/react.development.js;//unpkg.com/react-dom/umd/react-dom.development.js","js_pre_processor":"babel","layout":"left"}'}}}});
//# sourceMappingURL=path---redirect-to-codepen-context-multiple-contexts-42ebad7fd87c9f3f8adf.js.map