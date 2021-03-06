---
id: how-to-deploy-in-azure
title: How to Deploy in Azure
sidebar_label: How To Deploy
---

## Deploy application using docker hub public repository

After the Ignite Platform team provisions your account, you may use the following **"Deploy to Azure"** button to get started.

<a href="https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FCybergroup-Research%2Fignite-runtime-image%2Fmaster%2Fazure-app-service-dockerhub-public-image.json" target="_blank">![](../assets/deployToAzure/deploy-to-azure.png)</a>

> *You may need a Microsoft Azure account.*

> *You will be redirected to Azure after clicking this button.*

![](../assets/deployToAzure/custom-deployment.png)

Below are required parameters details-

- **Subscription:** Select your azure account subscription type that you want for this custom deployment.
All resources in an Azure subscription are billed together.

- **Resource group:** A resource group is a collection of resources that share the same lifecycle, permissions, and policies. You can select your existing resource group or can also create new one.

- **Region:** Select a location for the resource group. For example, Central US. Not every resource is available in every region.

- **Location:** Select a location for the storage account. For example, Central US.

- **App_Service_Plan_Name:** Provide app service plan name

- **App_Service_Plan_SKU:** Select the suitable Azure plan. For more information about Azure plan visit <u><a href="https://azure.microsoft.com/en-us/pricing/details/app-service/linux/" target="_blank">Azure Pricing Plans</a></u>

- **Web_App_Name:** Create a unique and suitable web application name. Your deployed application will be running with your web app name. for example, if Web_App_name is "myDemo" then application will be hosted in URL 
    > **[https://myDemo.azurewebsites.net/](#)**

- **ENV_DATABASE_URL:** This URL includes protocol, user credentials, host and port. Refer to your database configurations

- **ENV_IGNITE_EDITOR_API_SECRET:** This API key is found within the **<u><a href="https://dashboard.cgignite.io/apps" target="_blank">Ignite Dashboard</a></u>** when registering an app

- **ENV_DB_SSL_OPTION:** If your database supports or requires SSL, it is recommended to turn this on

- **ENV_START_MODE:** Select desired start mode (Required for git based application development)

### Observation 1: 
If someone else is using the same web app name then during deployment, you will get error like below-

![](../assets/deployToAzure/deployment-failed.png)
![](../assets/deployToAzure/website-already-exist.png)

### Observation 2: 
If there is any validation issue, you will get the status like below–

![](../assets/deployToAzure/custom-deployment-failed.png)
![](../assets/deployToAzure/custom-deployment-success.png)

### Observation 3: 
Once deployment completed you will get message as below–

![](../assets/deployToAzure/deployment-complete-msg.png)



