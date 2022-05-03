"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[90814],{41410:(e,o,t)=>{t.r(o),t.d(o,{data:()=>i});const i={key:"v-abc037a8",path:"/devices/11830304.html",title:"Lonsonho 11830304 control via MQTT",lang:"en-US",frontmatter:{title:"Lonsonho 11830304 control via MQTT",description:"Integrate your Lonsonho 11830304 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2020-09-30T20:52:56.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Cover",slug:"cover",children:[]},{level:3,title:"Moving (enum)",slug:"moving-enum",children:[]},{level:3,title:"Calibration (binary)",slug:"calibration-binary",children:[]},{level:3,title:"Motor_reversal (binary)",slug:"motor-reversal-binary",children:[]},{level:3,title:"Backlight_mode (enum)",slug:"backlight-mode-enum",children:[]},{level:3,title:"Calibration_time (numeric)",slug:"calibration-time-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/11830304.md",git:{updatedTime:1651589629e3}}},6056:(e,o,t)=>{t.r(o),t.d(o,{default:()=>n});var i=t(66252);const a=(0,i.uE)('<h1 id="lonsonho-11830304" tabindex="-1"><a class="header-anchor" href="#lonsonho-11830304" aria-hidden="true">#</a> Lonsonho 11830304</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>11830304</td></tr><tr><td>Vendor</td><td>Lonsonho</td></tr><tr><td>Description</td><td>Curtain switch</td></tr><tr><td>Exposes</td><td>cover (state, position), moving, calibration, motor_reversal, backlight_mode, calibration_time, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/11830304.jpg" alt="Lonsonho 11830304"></td></tr></tbody></table><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>',3),d=(0,i.Uk)("How to use device type specific configuration"),c=(0,i.uE)('<ul><li><code>invert_cover</code>: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="cover" tabindex="-1"><a class="header-anchor" href="#cover" aria-hidden="true">#</a> Cover</h3><p>The current state of this cover is in the published state under the <code>state</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state&quot;: &quot;STOP&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id="moving-enum" tabindex="-1"><a class="header-anchor" href="#moving-enum" aria-hidden="true">#</a> Moving (enum)</h3><p>Value can be found in the published state on the <code>moving</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>UP</code>, <code>STOP</code>, <code>DOWN</code>.</p><h3 id="calibration-binary" tabindex="-1"><a class="header-anchor" href="#calibration-binary" aria-hidden="true">#</a> Calibration (binary)</h3><p>Value can be found in the published state on the <code>calibration</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;calibration&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;calibration&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> calibration is ON, if <code>OFF</code> OFF.</p><h3 id="motor-reversal-binary" tabindex="-1"><a class="header-anchor" href="#motor-reversal-binary" aria-hidden="true">#</a> Motor_reversal (binary)</h3><p>Value can be found in the published state on the <code>motor_reversal</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;motor_reversal&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;motor_reversal&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> motor_reversal is ON, if <code>OFF</code> OFF.</p><h3 id="backlight-mode-enum" tabindex="-1"><a class="header-anchor" href="#backlight-mode-enum" aria-hidden="true">#</a> Backlight_mode (enum)</h3><p>Value can be found in the published state on the <code>backlight_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;backlight_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;backlight_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>LOW</code>, <code>MEDIUM</code>, <code>HIGH</code>.</p><h3 id="calibration-time-numeric" tabindex="-1"><a class="header-anchor" href="#calibration-time-numeric" aria-hidden="true">#</a> Calibration_time (numeric)</h3><p>Calibration time. Value can be found in the published state on the <code>calibration_time</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>S</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',16),r={},n=(0,t(83744).Z)(r,[["render",function(e,o){const t=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)(i.HY,null,[a,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[d])),_:1})])]),c],64)}]])},83744:(e,o)=>{o.Z=(e,o)=>{for(const[t,i]of o)e[t]=i;return e}}}]);