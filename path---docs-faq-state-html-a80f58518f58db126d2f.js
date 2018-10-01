webpackJsonp([0x942eba8c7c54],{868:function(n,s){n.exports={data:{markdownRemark:{html:'<h3 id="setstate-做了什么？"><a href="#setstate-%E5%81%9A%E4%BA%86%E4%BB%80%E4%B9%88%EF%BC%9F" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>setState 做了什么？</h3>\n<p><code class="gatsby-code-text">setState()</code> 用于安排一个组件的 <code class="gatsby-code-text">state</code> 对象的一次更新。当状态改变时，组件通过重新渲染来响应。</p>\n<h3 id="state-和-props-之间有什么区别？"><a href="#state-%E5%92%8C-props-%E4%B9%8B%E9%97%B4%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB%EF%BC%9F" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>state 和 props 之间有什么区别？</h3>\n<p><a href="/docs/components-and-props.html"><code class="gatsby-code-text">props</code></a> （简称“属性”）和 <a href="/docs/state-and-lifecycle.html"><code class="gatsby-code-text">state</code></a> 都是在改变时会触发一次重新渲染的 JavaScript 对象。虽然两者都具有影响渲染输出的信息，但它们在一个重要方面是不同的： <code class="gatsby-code-text">props</code> 传递到组件（类似于函数参数），而 <code class="gatsby-code-text">state</code> 是在组件内管理的（类似于函数中声明的变量）。</p>\n<p>这里有一些很好的资源，用以进一步了解何时使用 <code class="gatsby-code-text">props</code> vs <code class="gatsby-code-text">state</code> ：</p>\n<ul>\n<li><a href="https://github.com/uberVU/react-guide/blob/master/props-vs-state.md">Props vs State</a></li>\n<li><a href="http://lucybain.com/blog/2016/react-state-vs-pros/">ReactJS: Props vs. State</a></li>\n</ul>\n<h3 id="为什么-setstate-给我传递了错误值？"><a href="#%E4%B8%BA%E4%BB%80%E4%B9%88-setstate-%E7%BB%99%E6%88%91%E4%BC%A0%E9%80%92%E4%BA%86%E9%94%99%E8%AF%AF%E5%80%BC%EF%BC%9F" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>为什么 <code class="gatsby-code-text">setState</code> 给我传递了错误值？</h3>\n<p><code class="gatsby-code-text">setState</code> 的调用是异步的 - 在调用 <code class="gatsby-code-text">setState</code> 之后，不要依赖 <code class="gatsby-code-text">this.state</code> 来立即反映新值。如果你需要基于当前状态的计算值（请参阅下面的详细信息），则传递更新函数而不是对象。</p>\n<p>代码将不会按预期方式运行的示例：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token function">incrementCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 注意：这将*不*按照预期工作。</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>count<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">handleSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// this.state.count 是 1，然后我们这样做：</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">incrementCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">incrementCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 状态还没有更新，所以这里是将它设置为 2 而不是 3</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>接着看如何解决这个问题。</p>\n<h3 id="如何用依赖于当前状态的值更新状态？"><a href="#%E5%A6%82%E4%BD%95%E7%94%A8%E4%BE%9D%E8%B5%96%E4%BA%8E%E5%BD%93%E5%89%8D%E7%8A%B6%E6%80%81%E7%9A%84%E5%80%BC%E6%9B%B4%E6%96%B0%E7%8A%B6%E6%80%81%EF%BC%9F" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>如何用依赖于当前状态的值更新状态？</h3>\n<p>传递一个函数而不是对象给 setState 来确保调用总是使用最新的状态（接着往下看）。</p>\n<h3 id="在-setstate-中传递一个对象或者一个函数有什么区别？"><a href="#%E5%9C%A8-setstate-%E4%B8%AD%E4%BC%A0%E9%80%92%E4%B8%80%E4%B8%AA%E5%AF%B9%E8%B1%A1%E6%88%96%E8%80%85%E4%B8%80%E4%B8%AA%E5%87%BD%E6%95%B0%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB%EF%BC%9F" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>在 setState 中传递一个对象或者一个函数有什么区别？</h3>\n<p>传递一个更新函数允许你在更新中访问当前的状态值。由于 <code class="gatsby-code-text">setState</code> 调用是批处理的,这允许你链式更新并确保它们建立在彼此之上，而不是产生冲突：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token function">incrementCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span>prevState<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>count<span class="token punctuation">:</span> prevState<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">handleSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// this.state.count 是 1，然后我们这样做：</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">incrementCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">incrementCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// count 现在是 3</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p><a href="/docs/react-component.html#setstate">了解有关 setState 的更多</a></p>\n<h3 id="我是否应该使用一个像-redux-或者-mobx-的状态管理库？"><a href="#%E6%88%91%E6%98%AF%E5%90%A6%E5%BA%94%E8%AF%A5%E4%BD%BF%E7%94%A8%E4%B8%80%E4%B8%AA%E5%83%8F-redux-%E6%88%96%E8%80%85-mobx-%E7%9A%84%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86%E5%BA%93%EF%BC%9F" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>我是否应该使用一个像 Redux 或者 Mobx 的状态管理库？</h3>\n<p><a href="http://redux.js.org/docs/faq/General.html#general-when-to-use">也许。</a></p>\n<p>在添加额外的库之前，首先了解 React 是个好主意。你可以只使用 React 来构建相当复杂的应用程序。</p>',frontmatter:{title:"组件状态",next:null,prev:null},fields:{path:"docs/faq-state.md",slug:"docs/faq-state.html"}}},pathContext:{slug:"docs/faq-state.html"}}}});
//# sourceMappingURL=path---docs-faq-state-html-a80f58518f58db126d2f.js.map