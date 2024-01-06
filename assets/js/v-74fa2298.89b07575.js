"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[3482],{612560:(e,t,o)=>{o.r(t),o.d(t,{data:()=>n});const n=JSON.parse('{"key":"v-74fa2298","path":"/devices/HG06467.html","title":"Lidl HG06467 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Lidl HG06467 control via MQTT","description":"Integrate your Lidl HG06467 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-11-26T15:32:23.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Trigger effects","slug":"trigger-effects","link":"#trigger-effects","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Light","slug":"light","link":"#light","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1704532615000},"filePathRelative":"devices/HG06467.md"}')},729023:(e,t,o)=>{o.r(t),o.d(t,{default:()=>m});var n=o(166252);const s=(0,n._)("h1",{id:"lidl-hg06467",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#lidl-hg06467","aria-hidden":"true"},"#"),(0,n.Uk)(" Lidl HG06467")],-1),a=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th"),(0,n._)("th")])],-1),i=(0,n._)("tr",null,[(0,n._)("td",null,"Model"),(0,n._)("td",null,"HG06467")],-1),l=(0,n._)("td",null,"Vendor",-1),u=(0,n._)("tr",null,[(0,n._)("td",null,"Description"),(0,n._)("td",null,"Melinera smart LED string lights")],-1),d=(0,n._)("tr",null,[(0,n._)("td",null,"Exposes"),(0,n._)("td",null,"light (state, brightness, color_hs), linkquality")],-1),c=(0,n._)("tr",null,[(0,n._)("td",null,"Picture"),(0,n._)("td",null,[(0,n._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/HG06467.jpg",alt:"Lidl HG06467"})])],-1),r=(0,n.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Factory reset the LED string by holding the &quot;F&quot; button for 5 seconds. When you let go of the button the LED string should blink slowly After resetting the LED string will automatically connect.</p><p>While pairing, keep the string close to the adapter.</p><h3 id="trigger-effects" tabindex="-1"><a class="header-anchor" href="#trigger-effects" aria-hidden="true">#</a> Trigger effects</h3><p>Controls the 16 build-in effects of the LED string. An effect expects 3 parameters: <code>speed</code>, <code>colors</code> and <code>effect</code>. To trigger an effect send a message to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;effect&quot;: {&quot;effect&quot;: EFFECT, &quot;speed&quot;: SPEED, &quot;colors&quot;: COLORS}}</code>. Description:</p><ul><li><code>SPEED</code> should be a number between 1 and 100.</li><li><code>COLORS</code> is an array of JSON objects containing <code>r</code>, <code>g</code>, <code>b</code>. Note: some effects support multiple colors</li><li><code>EFFECT</code> is a string, below is a list of possible values and the amount of colors it supports</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>|     effect             |     # colors    |\n|------------------------|-----------------|\n|     steady             |     1           |\n|     snow               |     1           |\n|     rainbow            |     0           |\n|     snake              |     6           |\n|     twinkle            |     2           |\n|     firework           |     2           |\n|     horizontal_flag    |     3           |\n|     waves              |     3           |\n|     updown             |     2           |\n|     vintage            |     1           |\n|     fading             |     1           |\n|     collide            |     1           |\n|     strobe             |     5           |\n|     sparkles           |     3           |\n|     carnaval           |     6           |\n|     glow               |     6           |\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example-message-payload" tabindex="-1"><a class="header-anchor" href="#example-message-payload" aria-hidden="true">#</a> Example message payload</h4><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;effect&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;effect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;snake&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;speed&quot;</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;colors&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n            <span class="token punctuation">{</span>\n                <span class="token property">&quot;r&quot;</span><span class="token operator">:</span> <span class="token number">255</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;g&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;b&quot;</span><span class="token operator">:</span> <span class="token number">0</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">{</span>\n                <span class="token property">&quot;r&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;g&quot;</span><span class="token operator">:</span> <span class="token number">255</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;b&quot;</span><span class="token operator">:</span> <span class="token number">0</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">{</span>\n                <span class="token property">&quot;r&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;g&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;b&quot;</span><span class="token operator">:</span> <span class="token number">255</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',10),p=(0,n._)("h2",{id:"options",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,n.Uk)(" Options")],-1),h=(0,n.uE)('<ul><li><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="light" tabindex="-1"><a class="header-anchor" href="#light" aria-hidden="true">#</a> Light</h3><p>This light supports the following features: <code>state</code>, <code>brightness</code>, <code>color_hs</code>.</p><ul><li><code>state</code>: To control the state publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the state send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</li><li><code>brightness</code>: To control the brightness publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;brightness&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>254</code>. To read the brightness send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;brightness&quot;: &quot;&quot;}</code>.</li><li><code>color_hs</code>: To control the hue/saturation (color) publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;color&quot;: {&quot;hue&quot;: HUE, &quot;saturation&quot;: SATURATION}}</code> (e.g. <code>{&quot;color&quot;:{&quot;hue&quot;:360,&quot;saturation&quot;:100}}</code>). To read the hue/saturation send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;color&quot;:{&quot;hue&quot;:&quot;&quot;,&quot;saturation&quot;:&quot;&quot;}}</code>. Alternatively it is possible to set the hue/saturation via: <ul><li>HSB space (hue, saturation, brightness): <code>{&quot;color&quot;: {&quot;h&quot;: H, &quot;s&quot;: S, &quot;b&quot;: B}}</code> e.g. <code>{&quot;color&quot;:{&quot;h&quot;:360,&quot;s&quot;:100,&quot;b&quot;:100}}</code> or <code>{&quot;color&quot;: {&quot;hsb&quot;: &quot;H,S,B&quot;}}</code> e.g. <code>{&quot;color&quot;:{&quot;hsb&quot;:&quot;360,100,100&quot;}}</code></li><li>HSV space (hue, saturation, value):<code>{&quot;color&quot;: {&quot;h&quot;: H, &quot;s&quot;: S, &quot;v&quot;: V}}</code> e.g. <code>{&quot;color&quot;:{&quot;h&quot;:360,&quot;s&quot;:100,&quot;v&quot;:100}}</code> or <code>{&quot;color&quot;: {&quot;hsv&quot;: &quot;H,S,V&quot;}}</code> e.g. <code>{&quot;color&quot;:{&quot;hsv&quot;:&quot;360,100,100&quot;}}</code></li><li>HSL space (hue, saturation, lightness)<code>{&quot;color&quot;: {&quot;h&quot;: H, &quot;s&quot;: S, &quot;l&quot;: L}}</code> e.g. <code>{&quot;color&quot;:{&quot;h&quot;:360,&quot;s&quot;:100,&quot;l&quot;:100}}</code> or <code>{&quot;color&quot;: {&quot;hsl&quot;: &quot;H,S,L&quot;}}</code> e.g. <code>{&quot;color&quot;:{&quot;hsl&quot;:&quot;360,100,100&quot;}}</code></li></ul></li></ul><h4 id="on-with-timed-off" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off" aria-hidden="true">#</a> On with timed off</h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionnaly an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the light will not answer to other on with timed off commands. Support depend on the light firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',9),q={},m=(0,o(983744).Z)(q,[["render",function(e,t){const o=(0,n.up)("RouterLink");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.kq)(" !!!! "),(0,n.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,n.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,n.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,n.kq)(" !!!! "),s,(0,n._)("table",null,[a,(0,n._)("tbody",null,[i,(0,n._)("tr",null,[l,(0,n._)("td",null,[(0,n.Wm)(o,{to:"/supported-devices/#v=Lidl"},{default:(0,n.w5)((()=>[(0,n.Uk)("Lidl")])),_:1})])]),u,d,c])]),(0,n.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),r,(0,n.kq)(" Notes END: Do not edit below this line "),p,(0,n._)("p",null,[(0,n._)("em",null,[(0,n.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,n.w5)((()=>[(0,n.Uk)("How to use device type specific configuration")])),_:1})])]),h])}]])}}]);