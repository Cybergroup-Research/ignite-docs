---
layout: breakpoint-introduction
title: Introduction
---

## About

breakpoint allows you to pause the execution of the flow and help you to explore your JSON data (msg.payload) directly into the <a href="https://jsonata.cgignite.io/" target="_blank">Ignite JSONata Explorer</a>

## Running Status


<b>breakpoint</b> node, initially start with status <b>Stopped</b>.

![](../assets/breakpoint/ignite-breakpoint-Stopped.PNG)

When you initiate message within it, node changed to status <b>Running</b>.

![](../assets/breakpoint/ignite-breakpoint-Running.PNG)

Once node will finish the timeout value and stopped running service, node changed to status <b>Resumed</b>

![](../assets/breakpoint/ignite-breakpoint-Resumed.PNG)

![](../assets/breakpoint/Ignite-breakpoint-status.gif)

## Properties

Below are the properties of breakpoint node

### Timeout


Set the time for which you want to pause the execution of the flow and want to explore data into <a href="https://jsonata.cgignite.io/" target="_blank">Ignite JSONata Explorer</a>. After the timeout period data will be automatically wipe out and node status will be <b>Resumed</b>.

### Explore With JSONata


When node will be in <b>Running</b> status, data will be available in breakpoint node and when you will click on the button, data will be automatically loaded into JSONata explorer in another tab.

![](../assets/breakpoint/ignite-breakpoint-Properties.PNG)