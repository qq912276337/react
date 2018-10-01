webpackJsonp([0x71daa21ec95a],{867:function(a,e){a.exports={data:{markdownRemark:{html:'<h3 id="什么是虚拟dom（virtual-dom）"><a href="#%E4%BB%80%E4%B9%88%E6%98%AF%E8%99%9A%E6%8B%9Fdom%EF%BC%88virtual-dom%EF%BC%89" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>什么是虚拟DOM（Virtual DOM）</h3>\n<p>虚拟DOM（VDOM）是一种编程概念，是指虚拟的视图被保存在内存中，并通过诸如ReactDOM这样的库与“真实”的DOM保持同步。这个过程被称为<a href="/docs/reconciliation.html">和解</a>。</p>\n<p>这种编程方法使用了React的声明式API：你需要告诉React你想让视图处于什么状态，React则负责确保DOM与该状态相匹配。因此你在构建你的应用时不必自己去完成属性操作、事件处理、DOM更新，React会替你完成这一切。</p>\n<p>由于“虚拟DOM”更像一种模式而不是特定的技术，有时候我们也会用它表示其他的意思。在React的世界中，由于 “虚拟DOM” 和 <a href="/docs/rendering-elements.html">React元素</a> 都是用于表示视图的对象，因此常常被关联在一起。然而React也使用被称为“fibers”的对象来存放组件树的附加信息。在React中，它们也被认为是“虚拟DOM”实现的一部分。</p>\n<h3 id="影子dom（shadow-dom）和虚拟dom（virtual-dom）是相同的概念吗？"><a href="#%E5%BD%B1%E5%AD%90dom%EF%BC%88shadow-dom%EF%BC%89%E5%92%8C%E8%99%9A%E6%8B%9Fdom%EF%BC%88virtual-dom%EF%BC%89%E6%98%AF%E7%9B%B8%E5%90%8C%E7%9A%84%E6%A6%82%E5%BF%B5%E5%90%97%EF%BC%9F" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>影子DOM（Shadow DOM）和虚拟DOM（Virtual DOM）是相同的概念吗？</h3>\n<p>不，它们并不是相同的概念。影子DOM是一种浏览器技术，主要被设计用来为Web组件中的变量和CSS提供封装。虚拟DOM是由JavaScript库在浏览器API之上实现的一种概念。</p>\n<h3 id="什么是react-fiber？"><a href="#%E4%BB%80%E4%B9%88%E6%98%AFreact-fiber%EF%BC%9F" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>什么是“React Fiber”？</h3>\n<p>fiber是React 16中新的和解引擎。它的主要目的是使虚拟DOM能够进行增量渲染。<a href="https://github.com/xxn520/react-fiber-architecture-cn">了解更多</a>。</p>',frontmatter:{title:"Virtual DOM and Internals",next:null,prev:null},fields:{path:"docs/faq-internals.md",slug:"docs/faq-internals.html"}}},pathContext:{slug:"docs/faq-internals.html"}}}});
//# sourceMappingURL=path---docs-faq-internals-html-73ddf7538bf48d7ae2bb.js.map