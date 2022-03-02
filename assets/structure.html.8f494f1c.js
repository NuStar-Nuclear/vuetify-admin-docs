import{e as n}from"./app.e7a70711.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="\u9879\u76EE\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u7ED3\u6784" aria-hidden="true">#</a> \u9879\u76EE\u7ED3\u6784</h1><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.
\u251C\u2500\u2500 babel.config.js
\u251C\u2500\u2500 cypress.json
\u251C\u2500\u2500 jest.config.js
\u251C\u2500\u2500 mock
|  \u251C\u2500\u2500 api.ts
|  \u251C\u2500\u2500 app.ts
|  \u251C\u2500\u2500 CRUDFactory.ts
|  \u251C\u2500\u2500 dataBase
|  \u251C\u2500\u2500 mock-server.ts
|  \u251C\u2500\u2500 nuclear.ts
|  \u251C\u2500\u2500 security.ts
|  \u251C\u2500\u2500 static
|  \u251C\u2500\u2500 swagger.yml
|  \u251C\u2500\u2500 tsconfig.json
|  \u251C\u2500\u2500 uploads
|  \u251C\u2500\u2500 user-group.ts
|  \u2514\u2500\u2500 users.ts
\u251C\u2500\u2500 now.json
\u251C\u2500\u2500 package-lock.json
\u251C\u2500\u2500 package.json
\u251C\u2500\u2500 postcss.config.js
\u251C\u2500\u2500 public
|  \u251C\u2500\u2500 config.json
|  \u251C\u2500\u2500 favicon.ico
|  \u251C\u2500\u2500 favicon.png
|  \u251C\u2500\u2500 index.html
|  \u2514\u2500\u2500 static
\u251C\u2500\u2500 README.md
\u251C\u2500\u2500 result.txt
\u251C\u2500\u2500 src
|  \u251C\u2500\u2500 api
|  \u251C\u2500\u2500 App.vue
|  \u251C\u2500\u2500 assets
|  \u251C\u2500\u2500 components
|  \u251C\u2500\u2500 icons
|  \u251C\u2500\u2500 locales
|  \u251C\u2500\u2500 main.ts
|  \u251C\u2500\u2500 permission.ts
|  \u251C\u2500\u2500 plugins
|  \u251C\u2500\u2500 router
|  \u251C\u2500\u2500 sass
|  \u251C\u2500\u2500 settings.local.ts
|  \u251C\u2500\u2500 settings.ts
|  \u251C\u2500\u2500 shims-tsx.d.ts
|  \u251C\u2500\u2500 shims-vue-fragment.d.ts
|  \u251C\u2500\u2500 shims-vue.d.ts
|  \u251C\u2500\u2500 store
|  \u251C\u2500\u2500 utils
|  \u2514\u2500\u2500 views
\u251C\u2500\u2500 tests
|  \u251C\u2500\u2500 e2e
|  \u2514\u2500\u2500 unit
\u251C\u2500\u2500 tsconfig.json
\u251C\u2500\u2500 vue.config.js
\u251C\u2500\u2500 yarn-error.log
\u2514\u2500\u2500 yarn.lock
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br></div></div>`,2);function r(l,p){return e}var i=s(a,[["render",r]]);export{i as default};
