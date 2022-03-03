import{e as s}from"./app.f6102808.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=s(`<h1 id="\u5B9E\u7528\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u7528\u65B9\u6CD5" aria-hidden="true">#</a> \u5B9E\u7528\u65B9\u6CD5</h1><h2 id="message" tabindex="-1"><a class="header-anchor" href="#message" aria-hidden="true">#</a> <code>Message</code></h2><p>\u5168\u5C40\u6D88\u606F</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Message <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/utils/message&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="message-info-text-string-\u901A\u77E5" tabindex="-1"><a class="header-anchor" href="#message-info-text-string-\u901A\u77E5" aria-hidden="true">#</a> <code>Message.info(text: string)</code> \u901A\u77E5</h4><h4 id="message-success-text-string-\u6210\u529F" tabindex="-1"><a class="header-anchor" href="#message-success-text-string-\u6210\u529F" aria-hidden="true">#</a> <code>Message.success(text: string)</code> \u6210\u529F</h4><h4 id="message-warn-text-string-\u8B66\u544A" tabindex="-1"><a class="header-anchor" href="#message-warn-text-string-\u8B66\u544A" aria-hidden="true">#</a> <code>Message.warn(text: string)</code> \u8B66\u544A</h4><h4 id="message-error-text-string-\u9519\u8BEF" tabindex="-1"><a class="header-anchor" href="#message-error-text-string-\u9519\u8BEF" aria-hidden="true">#</a> <code>Message.error(text: string)</code> \u9519\u8BEF</h4><hr><h2 id="formatters" tabindex="-1"><a class="header-anchor" href="#formatters" aria-hidden="true">#</a> <code>formatters</code></h2><p>\u516C\u7528\u7684\u683C\u5F0F\u5316\u96C6</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> formatters <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/utils/formatter&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="formatters-1" tabindex="-1"><a class="header-anchor" href="#formatters-1" aria-hidden="true">#</a> <code>formatters.</code></h4><h4 id="d1-d5-\u4FDD\u7559-1-\u4F4D\u81F3-5-\u4F4D\u5C0F\u6570" tabindex="-1"><a class="header-anchor" href="#d1-d5-\u4FDD\u7559-1-\u4F4D\u81F3-5-\u4F4D\u5C0F\u6570" aria-hidden="true">#</a> d1-d5: \u4FDD\u7559 1 \u4F4D\u81F3 5 \u4F4D\u5C0F\u6570</h4><h4 id="e2-e5-\u4FDD\u7559-2-\u4F4D\u81F3-5-\u4F4D\u5C0F\u6570\u7684\u79D1\u5B66\u8BA1\u6570\u6CD5" tabindex="-1"><a class="header-anchor" href="#e2-e5-\u4FDD\u7559-2-\u4F4D\u81F3-5-\u4F4D\u5C0F\u6570\u7684\u79D1\u5B66\u8BA1\u6570\u6CD5" aria-hidden="true">#</a> e2-e5: \u4FDD\u7559 2 \u4F4D\u81F3 5 \u4F4D\u5C0F\u6570\u7684\u79D1\u5B66\u8BA1\u6570\u6CD5</h4><p>...\u7B49</p><hr><h2 id="download" tabindex="-1"><a class="header-anchor" href="#download" aria-hidden="true">#</a> <code>download</code></h2><p>\u4E0B\u8F7D\u4ECE\u540E\u7AEF\u4F20\u8FC7\u6765\u7684\u6587\u4EF6</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> download <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/utils/download&#39;</span>

<span class="token keyword">async</span> <span class="token function">downloadReport</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getReport</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token function">download</span><span class="token punctuation">(</span>response<span class="token punctuation">,</span> <span class="token string">&#39;123.pdf&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><hr><h2 id="ispermitted" tabindex="-1"><a class="header-anchor" href="#ispermitted" aria-hidden="true">#</a> <code>isPermitted</code></h2><p>\u662F\u5426\u6709\u6743\u9650</p><div class="custom-container warning"><p class="custom-container-title">\u8B66\u544A</p><p>\u6CE8\u610F\uFF0C\u8FD9\u8DDF\u540E\u7AEF\u914D\u7F6E\u7684\u7528\u6237\u7EC4\u6743\u9650\u6709\u5173\uFF0C\u8FD9\u91CC\u5199\u6B7B\u4E86 developer &gt; admin &gt; staff &gt; guest</p></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Role <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/api/types&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> UserModule <span class="token keyword">from</span> <span class="token string">&quot;@/store/modules/user&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">isPermitted</span><span class="token punctuation">(</span>
  allowedRoles<span class="token operator">:</span> Role<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  roles<span class="token operator">:</span> Role<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> UserModule<span class="token punctuation">.</span>roles
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> isPermitted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/utils/permission&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> UserModule <span class="token keyword">from</span> <span class="token string">&quot;@/store/modules/user&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> allowRoles <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;admin&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> currentRoles <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;staff&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> accessible <span class="token operator">=</span> <span class="token function">isPermitted</span><span class="token punctuation">(</span>allowRoles<span class="token punctuation">,</span> currentRoles<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// False \u56E0\u4E3Astaff&lt;admin</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,26);function t(p,o){return e}var i=n(a,[["render",t]]);export{i as default};
