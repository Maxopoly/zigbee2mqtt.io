"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[74331],{97372:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a={key:"v-fed7e762",path:"/devices/WXKG12LM.html",title:"Xiaomi WXKG12LM control via MQTT",lang:"en-US",frontmatter:{title:"Xiaomi WXKG12LM control via MQTT",description:"Integrate your Xiaomi WXKG12LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2019-07-22T20:08:17.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Deprecated click event",slug:"deprecated-click-event",children:[]},{level:3,title:"Pairing",slug:"pairing",children:[]},{level:3,title:"Troubleshooting: device stops sending messages/disconnects from network",slug:"troubleshooting-device-stops-sending-messages-disconnects-from-network",children:[]}]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Action (enum)",slug:"action-enum",children:[]},{level:3,title:"Voltage (numeric)",slug:"voltage-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/WXKG12LM.md",git:{updatedTime:1651589629e3}}},92175:(e,t,i)=>{i.r(t),i.d(t,{default:()=>p});var a=i(66252);const n=(0,a.uE)('<h1 id="xiaomi-wxkg12lm" tabindex="-1"><a class="header-anchor" href="#xiaomi-wxkg12lm" aria-hidden="true">#</a> Xiaomi WXKG12LM</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>WXKG12LM</td></tr><tr><td>Vendor</td><td>Xiaomi</td></tr><tr><td>Description</td><td>Aqara wireless switch (with gyroscope)</td></tr><tr><td>Exposes</td><td>battery, action, voltage, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/WXKG12LM.jpg" alt="Xiaomi WXKG12LM"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="deprecated-click-event" tabindex="-1"><a class="header-anchor" href="#deprecated-click-event" aria-hidden="true">#</a> Deprecated click event</h3><p>By default this device exposes a deprecated <code>click</code> event. It&#39;s recommended to use the <code>action</code> event instead.</p><p>To disable the <code>click</code> event, set <code>legacy: false</code> for this device in <code>configuration.yaml</code>. Example:</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">devices</span><span class="token punctuation">:</span>\n  <span class="token key atrule">&#39;0x12345678&#39;</span><span class="token punctuation">:</span>\n    <span class="token key atrule">friendly_name</span><span class="token punctuation">:</span> my_device\n    <span class="token key atrule">legacy</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Press and hold the reset button on the device for +- 5 seconds (until the blue light starts blinking). After this the device will automatically join. If this doesn&#39;t work, try with a single short button press.</p><h3 id="troubleshooting-device-stops-sending-messages-disconnects-from-network" tabindex="-1"><a class="header-anchor" href="#troubleshooting-device-stops-sending-messages-disconnects-from-network" aria-hidden="true">#</a> Troubleshooting: device stops sending messages/disconnects from network</h3><p>Since Xiaomi devices do not fully comply to the Zigbee standard, it sometimes happens that they disconnect from the network. Most of the times this happens because of the following reasons:</p><ul><li>Device has a weak signal, you can see the signal quality in the published messages as <code>linkquality</code>. A linkquality &lt; 20 is considered weak.</li><li>Low battery voltage, this can even happen when the battery still appears full. Try a different battery.</li><li>The device is connected through a router which cannot deal with Xiaomi devices. This is known to happen devices from: Centralite, General Electric, Iris, Ledvance, OSRAM, Sylvania, SmartThings, Securifi.</li></ul>',12),o=(0,a.Uk)("More detailed information about this can be found "),s={href:"https://community.hubitat.com/t/xiaomi-aqara-devices-pairing-keeping-them-connected/623",target:"_blank",rel:"noopener noreferrer"},d=(0,a.Uk)("here"),r=(0,a.Uk)("."),l=(0,a._)("h2",{id:"options",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,a.Uk)(" Options")],-1),c=(0,a.Uk)("How to use device type specific configuration"),h=(0,a.uE)('<ul><li><code>legacy</code>: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>single</code>, <code>double</code>, <code>hold</code>, <code>release</code>, <code>shake</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',10),u={},p=(0,i(83744).Z)(u,[["render",function(e,t){const i=(0,a.up)("OutboundLink"),u=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[n,(0,a._)("p",null,[o,(0,a._)("a",s,[d,(0,a.Wm)(i)]),r]),l,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(u,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[c])),_:1})])]),h],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,a]of t)e[i]=a;return e}}}]);