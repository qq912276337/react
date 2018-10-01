webpackJsonp([0xbc76ea75ade6],{950:function(e,n){e.exports={pathContext:{action:"https://codepen.io/pen/define",payload:'{"editors":"0010","html":"<div id=\\"root\\"></div>","js":"function logProps(Component) {\\n  class LogProps extends React.Component {\\n    componentDidUpdate(prevProps) {\\n      console.log(\'old props:\', prevProps);\\n      console.log(\'new props:\', this.props);\\n    }\\n\\n    render() {\\n      // highlight-next-line\\n      const {forwardedRef, ...rest} = this.props;\\n\\n      // Assign the custom prop \\"forwardedRef\\" as a ref\\n      // highlight-next-line\\n      return <Component ref={forwardedRef} {...rest} />;\\n    }\\n  }\\n\\n  // Note the second param \\"ref\\" provided by React.forwardRef.\\n  // We can pass it along to LogProps as a regular prop, e.g. \\"forwardedRef\\"\\n  // And it can then be attached to the Component.\\n  // highlight-range{1-3}\\n  function forwardRef(props, ref) {\\n    return <LogProps {...props} forwardedRef={ref} />;\\n  }\\n\\n  // These next lines are not necessary,\\n  // But they do give the component a better display name in DevTools,\\n  // e.g. \\"ForwardRef(logProps(MyComponent))\\"\\n  // highlight-range{1-2}\\n  const name = Component.displayName || Component.name;\\n  forwardRef.displayName = `logProps(${name})`;\\n\\n  return React.forwardRef(forwardRef);\\n}\\n","js_external":"//unpkg.com/react/umd/react.development.js;//unpkg.com/react-dom/umd/react-dom.development.js","js_pre_processor":"babel","layout":"left"}'}}}});
//# sourceMappingURL=path---redirect-to-codepen-forwarding-refs-log-props-after-3f00788383c257481444.js.map