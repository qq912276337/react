webpackJsonp([0xb9e875748989],{900:function(n,a){n.exports={data:{markdownRemark:{html:'<p>元素是构成 React 应用的最小单位。</p>\n<p>元素用来描述你在屏幕上看到的内容：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Hello<span class="token punctuation">,</span> world<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>与浏览器的 DOM 元素不同，React 当中的元素事实上是普通的对象，React DOM 可以确保 浏览器 DOM 的数据内容与 React 元素保持一致。</p>\n<blockquote>\n<p><strong>注意:</strong></p>\n<p>初学者很可能把元素的定义和一个内涵更广的定义“组件”给搞混了。我们将会在<a href="/docs/components-and-props.html">下一个章节</a>当中对组件进行详细的介绍。元素事实上只是构成组件的一个部分，所以我们还是推荐你先读完这一章节的内容再往后看。</p>\n</blockquote>\n<h2 id="将元素渲染到-dom-中"><a href="#%E5%B0%86%E5%85%83%E7%B4%A0%E6%B8%B2%E6%9F%93%E5%88%B0-dom-%E4%B8%AD" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>将元素渲染到 DOM 中</h2>\n<p>首先我们在一个 HTML 页面中添加一个 <code class="gatsby-code-text">id=&quot;root&quot;</code> 的 <code class="gatsby-code-text">&lt;div&gt;</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-html"><code class="gatsby-code-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>root<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>在此 div 中的所有内容都将由 React DOM 来管理，所以我们将其称之为 “根” DOM 节点。</p>\n<p>我们用React 开发应用时一般只会定义一个根节点。但如果你是在一个已有的项目当中引入 React 的话，你可能会需要在不同的部分单独定义 React 根节点。</p>\n<p>要将React元素渲染到根DOM节点中，我们通过把它们都传递给 <code class="gatsby-code-text">ReactDOM.render()</code> 的方法来将其渲染到页面上：</p>\n<p><div class="gatsby-highlight">\n        <pre class="gatsby-code-jsx"><code><span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Hello<span class="token punctuation">,</span> world<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>element<span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'root\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n        </div></p>\n<p><a href="http://codepen.io/gaearon/pen/rrpgNB?editors=1010">在 CodePen 上试试。</a></p>\n<p>页面上会展示出 “Hello World” 字样。</p>\n<h2 id="更新元素渲染"><a href="#%E6%9B%B4%E6%96%B0%E5%85%83%E7%B4%A0%E6%B8%B2%E6%9F%93" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>更新元素渲染</h2>\n<p>React 元素都是<a href="https://en.wikipedia.org/wiki/Immutable_object">immutable 不可变</a>的。当元素被创建之后，你是无法改变其内容或属性的。一个元素就好像是动画里的一帧，它代表应用界面在某一时间点的样子。</p>\n<p>根据我们现阶段了解的有关 React 知识，更新界面的唯一办法是创建一个新的元素，然后将它传入 <code class="gatsby-code-text">ReactDOM.render()</code> 方法：</p>\n<p>来看一下这个计时器的例子:</p>\n<p><div class="gatsby-highlight">\n        <pre class="gatsby-code-jsx"><code><span class="token keyword">function</span> <span class="token function">tick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Hello<span class="token punctuation">,</span> world<span class="token operator">!</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>It is <span class="token punctuation">{</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLocaleTimeString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="gatsby-highlight-code-line">  ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>element<span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'root\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span><span class="token punctuation">}</span>\n\n<span class="token function">setInterval</span><span class="token punctuation">(</span>tick<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n        </div></p>\n<p><a href="http://codepen.io/gaearon/pen/gwoJZk?editors=0010">在 CodePen 上试试。</a></p>\n<p>这个示例通过 <a href="https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval"><code class="gatsby-code-text">setInterval()</code></a> 方法，每秒钟调用一次 <code class="gatsby-code-text">ReactDOM.render()</code>.</p>\n<blockquote>\n<p><strong>注意:</strong></p>\n<p>在实际生产开发中，大多数React应用只会调用一次 <code class="gatsby-code-text">ReactDOM.render()</code> 。在下一个章节中我们将会详细介绍 <a href="/docs/state-and-lifecycle.html">有状态组件</a> 实现 DOM 更新方式。</p>\n<p>前后的内容是相辅相成的，所以你最好还是先读完本章节再往下看。</p>\n</blockquote>\n<h2 id="react-只会更新必要的部分"><a href="#react-%E5%8F%AA%E4%BC%9A%E6%9B%B4%E6%96%B0%E5%BF%85%E8%A6%81%E7%9A%84%E9%83%A8%E5%88%86" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React 只会更新必要的部分</h2>\n<p>React DOM 首先会比较元素内容先后的不同，而在渲染过程中只会更新改变了的部分。</p>\n<p>你可以使用浏览器的开发者工具来检查一下<a href="http://codepen.io/gaearon/pen/gwoJZk?editors=0010">之前的例子</a>。</p>\n<p><img src="/granular-dom-updates-c158617ed7cc0eac8f58330e49e48224.gif" alt="DOM inspector showing granular updates"></p>\n<p>即便我们每秒都创建了一个描述整个UI树的新元素，React DOM 也只会更新渲染文本节点中发生变化的内容。</p>\n<p>根据我们以往的经验，将界面视为一个个特定时刻的固定内容（就像一帧一帧的动画），而不是随时处于变化之中（而不是处于变化中的一整段动画），将会有利于我们理清开发思路，减少各种bug。</p>',frontmatter:{title:"元素渲染",next:"components-and-props.html",prev:"introducing-jsx.html"},fields:{path:"docs/rendering-elements.md",slug:"docs/rendering-elements.html"}}},pathContext:{slug:"docs/rendering-elements.html"}}}});
//# sourceMappingURL=path---docs-rendering-elements-html-85abb0775fa9853a6d09.js.map