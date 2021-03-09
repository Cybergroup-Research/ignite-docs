---
id: how-to-deploy-in-aws-lightsail
title: How to Deploy in AWS Lightsail
sidebar_label: How To Deploy In AWS Lightsail
---

## Deploy application in AWS Lightsail

### Create Instance

Visit: **<u><a href="https://lightsail.aws.amazon.com/ls/webapp/home/instances" target="_blank">https://lightsail.aws.amazon.com/ls/webapp/home/instances</a></u>**

Click on button **“Create instance”**.

![](../assets/deployToAwsLightsail/create-instance.png)

### Select Platform

Select suitable platform for you among Linux/Unix and Windows.

![](../assets/deployToAwsLightsail/select-platform.png)

### Select a Blueprint

![](../assets/deployToAwsLightsail/select-blueprint.png)

### Select Instance Plan

![](../assets/deployToAwsLightsail/select-instance-plan.png)

### Create Instance 

Provide suitable instance name.

![](../assets/deployToAwsLightsail/provide-instance-name.png)

Click on button **"Create Instance"**.

![](../assets/deployToAwsLightsail/create-instance.png)

Application will start processing...

![](../assets/deployToAwsLightsail/app-processing.png)

Once processing completed, application will start running.

![](../assets/deployToAwsLightsail/app-running.png)

### Set Static IP

Click on Application instance name and select Networking tab and click on link button **“Create static IP”**.

![](../assets/deployToAwsLightsail/app-network.png)

Select Application instance from **"Select an instance"** dropdown menu.

![](../assets/deployToAwsLightsail/app-attach-instance.png)

Provide any static IP identifier for your application.

![](../assets/deployToAwsLightsail/app-static-ip-identifier.png)

Click on button **“Create”**

![](../assets/deployToAwsLightsail/static-ip-create.png)

After static Ip will create, this will look like below-

![](../assets/deployToAwsLightsail/app-static-ip-attached.png)

### Add Port Number

You can add port number from link button **“Add rule”** under **“Networking”** tab.

![](../assets/deployToAwsLightsail/app-add-rule.png)

Provide port number.

![](../assets/deployToAwsLightsail/app-add-rule-1.png)

You can see the latest added rule.

![](../assets/deployToAwsLightsail/app-rule-list.png)

### Setup Instance

Select tab **“Instances”**, there you can see your newly added instance. Click on the console icon in the instance (Make sure instance is in Running status).

![](../assets/deployToAwsLightsail/app-instance.png)

A console window will be open.

![](../assets/deployToAwsLightsail/app-console-blank.png)

Run the following commands

    ls
    cd htdocs
    rm -rf *
    git clone urlForYourGitHubRepository
    Provide github UserName and Password
    cd yourApplicationDirectory
    ls
    npm install
    node yourJsFileName

![](../assets/deployToAwsLightsail/app-console-command.png)

### Run Application on Browser

Now open the static IP in the browser, you will find that application will be running there.

![](../assets/deployToAwsLightsail/app-web-browser.png)

