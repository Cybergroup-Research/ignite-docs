---
layout: breakpoint-howToUse
title: How to use
---

## How to use

Use breakpoint node after any node, where you want to get the data and want to explore that data using breakpoint node. breakpoint node will help you to load the json data directly into the <a href="https://jsonata.cgignite.io/" target="_blank">Ignite JSONata Explorer</a>

### Example

![](../assets/breakpoint/ignite-breakpoint-Example.PNG)

<b>Flow JSON</b>
~~~json
[{"id":"8e5164.fdd2dea","type":"tab","label":"Flow 1","disabled":false,"info":""},{"id":"50ea74a6.f6408c","type":"inject","z":"8e5164.fdd2dea","name":"","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"{\"FName\":\"Dev\",\"LName\":\"Das\"}","payloadType":"json","x":150,"y":260,"wires":[["a0eb3ccf.94c8b"]]},{"id":"71ef2969.e12798","type":"debug","z":"8e5164.fdd2dea","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","statusVal":"","statusType":"auto","x":570,"y":260,"wires":[]},{"id":"a0eb3ccf.94c8b","type":"breakpoint","z":"8e5164.fdd2dea","name":"","timeout":"3","x":360,"y":260,"wires":[["71ef2969.e12798"]]}]
~~~

![](../assets/breakpoint/ignite-breakpoint-Example.gif)