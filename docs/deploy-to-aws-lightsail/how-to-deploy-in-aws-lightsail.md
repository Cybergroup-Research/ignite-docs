---
id: how-to-deploy-in-aws-lightsail
title: How to Deploy in AWS Lightsail
sidebar_label: How To Deploy In AWS Lightsail
---

## Create Database in AWS Lightsail

### Initiate Database Creation

Visit: **<u><a href="https://lightsail.aws.amazon.com/ls/webapp/home/databases" target="_blank">https://lightsail.aws.amazon.com/ls/webapp/home/databases</a></u>**

Click on button **“Create database**.

![](../assets/deployToAwsLightsail/create-aws-db.png)

### Select Database Location

![](../assets/deployToAwsLightsail/select-db-location.png)

### Select an Availability Zone

![](../assets/deployToAwsLightsail/select-db-zone.png)

### Select Database

![](../assets/deployToAwsLightsail/select-db.png)

### Set Database Credential

![](../assets/deployToAwsLightsail/specify-login-credentials.png)

Set your database username and password for further connecting to the database

![](../assets/deployToAwsLightsail/specify-login-credentials-form.png)

### Set your master database name

![](../assets/deployToAwsLightsail/specify-master-db-name.png)

![](../assets/deployToAwsLightsail/specify-master-db-name-form.png)

Copy or save this **database name** for <u>**[Set up database url](#set-up-database-url-for-aws-container-creation)**</u>**

### Choose Database Plan

![](../assets/deployToAwsLightsail/select-db-plan.png)

### Set Database Identify

![](../assets/deployToAwsLightsail/set-db-identity.png)

### Create Database

![](../assets/deployToAwsLightsail/create-db-button.png)

Once database creation will finish you can see the database as below-

![](../assets/deployToAwsLightsail/created-db-instance.png)

### Set Database Public Mode On

![](../assets/deployToAwsLightsail/set-db-public-mode.png)

### Set up Database URL for AWS Container Creation

![](../assets/deployToAwsLightsail/get-db-connection-details.png)

Select tab **“Connect”**, there you will get following details-

Endpoint (Host)

Database: Get from <u>**[Set your master database name](#set-your-master-database-name)**</u>

User name

Password

Port: Default 5432 for PostgreSQL

Now create your DATABASE_URL as below format by using above values

postgres://<username>:<password>@<host>:<port>/<database>

Copy or save this DATABASE_URL for <u>**[AWS Container Creation Process](#set-environment-variables)**</u>

## Create App and Get Ignite Keys in Cgignite Dashboard

### Create App

Visit: **<u><a href="https://dashboard.cgignite.io/apps" target="_blank">https://dashboard.cgignite.io/apps</a></u>**

Click on button **“New App”**

![](../assets/deployToAwsLightsail/new-app.png)

### Set App Name

Provide a suitable name for your application and click on button **“Create App”**

![](../assets/deployToAwsLightsail/new-app-popup.png)

### Get Key for AWS Container Creation

You will get the IGNIT_EDITOR_API_SECRET key, copy or save this key for later use in <u>**[AWS container creation process](#set-environment-variables)**</u>.

![](../assets/deployToAwsLightsail/ignite-runtime-registration.png)

### Set Ignite Runtime URL

We will setup this URL once we will finish the "<u>**[AWS container creation process](#set-cgignite-dashboard-app)**</u>".

![](../assets/deployToAwsLightsail/ignite-runtime-url-popup.png)


## Create and Setup Container in AWS Lightsail

### Initiate Container Creation Process

Visit: **<u><a href="https://lightsail.aws.amazon.com/ls/webapp/home/containers" target="_blank">https://lightsail.aws.amazon.com/ls/webapp/home/containers</a></u>**

Click on button **“Create container service”**

![](../assets/deployToAwsLightsail/initiate-container-creation-service.png)

### Select Container Service Location

![](../assets/deployToAwsLightsail/select-db-location.png)

### Select Service Capacity

Select container service capacity for memory utilization

![](../assets/deployToAwsLightsail/select-container-service-capacity.png)

### Set up Deployment

Click on link button **“Set up deployment”**

![](../assets/deployToAwsLightsail/setup-deployment.png)

Select option **“Specify a customer deployment”** 

![](../assets/deployToAwsLightsail/setup-deployment-form.png)

Container name: Provide your suitable container name
Image: Provide Ignite runtime image
cybergroupignite/runtime:v2.0.0

### Set Environment Variables

Click on link button **“Add environment variables”**

![](../assets/deployToAwsLightsail/add-environment-variable-button.png)

Set DATABASE_URL from step “<u>**[Set up Database URL for AWS Container Creation](#set-up-database-url-for-aws-container-creation)**</u>”

Set IGNITE_EDITOR_API_SECRET from step “<u>**[Get Key for AWS Container Creation](#get-key-for-aws-container-creation)**</u>”

Set DB_SSL_OPTION: true/false (Default: true)

Set PORT: Set Port Number (Default: 1881)

![](../assets/deployToAwsLightsail/set-environment-variable-form.png)

### Set Port

Click on link button **“Add open ports”**

![](../assets/deployToAwsLightsail/add-open-port-button.png)

Add port 80 with Protocol HTTP/HTTPS

![](../assets/deployToAwsLightsail/set-port.png)

### Set your public end point 

![](../assets/deployToAwsLightsail/set-public-end-point.png)

### Provide your container service identity

![](../assets/deployToAwsLightsail/set-service-name.png)

### Create container service

![](../assets/deployToAwsLightsail/create-container-service-button.png)

It takes couple of minutes to create the container server. Once successfully copy the public domain value.

![](../assets/deployToAwsLightsail/ignite-service-created.png)

### Set CgIgnite Dashboard App

Continue the step from “<u>**[Set Ignite Run Time URL](#set-ignite-runtime-url)**</u>” in CgIgnite Dashboard

![](../assets/deployToAwsLightsail/ignite-runtime-registration-final.png)

Click on button **“Test Connection”**. You will get the newly created app in the dashboard.

![](../assets/deployToAwsLightsail/ignite-dashboard-app-final.png)

### Launch App

Now click on right launch app button and you will get that your Ignite running application on browser.