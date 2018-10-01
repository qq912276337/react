webpackJsonp([0xc307416b2af4],{890:function(n,s){n.exports={data:{markdownRemark:{html:'<blockquote>\n<p>Note:</p>\n<p><code class="gatsby-code-text">PureRenderMixin</code> is a legacy add-on. Use <a href="/docs/react-api.html#reactpurecomponent"><code class="gatsby-code-text">React.PureComponent</code></a> instead.</p>\n</blockquote>\n<p><strong>Importing</strong></p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">import</span> PureRenderMixin <span class="token keyword">from</span> <span class="token string">\'react-addons-pure-render-mixin\'</span><span class="token punctuation">;</span> <span class="token comment">// ES6</span>\n<span class="token keyword">var</span> PureRenderMixin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'react-addons-pure-render-mixin\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ES5 with npm</span>\n</code></pre>\n      </div>\n<h2 id="overview"><a href="#overview" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Overview</h2>\n<p>If your React component’s render function renders the same result given the same props and state, you can use this mixin for a performance boost in some cases.</p>\n<p>Example:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> createReactClass <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'create-react-class\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">createReactClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  mixins<span class="token punctuation">:</span> <span class="token punctuation">[</span>PureRenderMixin<span class="token punctuation">]</span><span class="token punctuation">,</span>\n\n  render<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>className<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>foo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Under the hood, the mixin implements <a href="/docs/component-specs.html#updating-shouldcomponentupdate">shouldComponentUpdate</a>, in which it compares the current props and state with the next ones and returns <code class="gatsby-code-text">false</code> if the equalities pass.</p>\n<blockquote>\n<p>Note:</p>\n<p>This only shallowly compares the objects. If these contain complex data structures, it may produce false-negatives for deeper differences. Only mix into components which have simple props and state, or use <code class="gatsby-code-text">forceUpdate()</code> when you know deep data structures have changed. Or, consider using <a href="https://facebook.github.io/immutable-js/">immutable objects</a> to facilitate fast comparisons of nested data.</p>\n<p>Furthermore, <code class="gatsby-code-text">shouldComponentUpdate</code> skips updates for the whole component subtree. Make sure all the children components are also “pure”.</p>\n</blockquote>',frontmatter:{title:"PureRenderMixin",next:null,prev:null},fields:{path:"docs/addons-pure-render-mixin.md",slug:"docs/pure-render-mixin.html"}}},pathContext:{slug:"docs/pure-render-mixin.html"}}}});
//# sourceMappingURL=path---docs-pure-render-mixin-html-fe0f05e4f78884b9cbcc.js.map