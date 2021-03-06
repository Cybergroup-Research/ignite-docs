---
id: cicd
title: CI/CD
sidebar_label: CI/CD
---

## Configure PostgreSQL

### 1.	Setup PostgreSQL:

**<u><a href="https://portal.azure.com/#create/Microsoft.PostgreSQLServer" target="_blank">https://portal.azure.com/#create/Microsoft.PostgreSQLServer</a></u>**

![](../assets/deployToAzure/postgresql-basic.png)

### 2.	Review & Create:

### 3.	Database Credential

Keep your database credential handy in the following format postgres://{username}:{your_password}@{servername}.postgres.database.azure.com/postgres?sslmode=require


## Create Container Registry


### 1.	Create New Container Registry

**<u><a href="https://portal.azure.com/#create/Microsoft.ContainerRegistry" target="_blank">https://portal.azure.com/#create/Microsoft.ContainerRegistry</a></u>**

![](../assets/deployToAzure/create-container-registry.png)

### 2.	Review & Create
### 3.	View

![](../assets/deployToAzure/create-container-view.png)

### 4.	Enable Admin User

![](../assets/deployToAzure/create-container-enable-admin.png)


## Configure Service Connection

### 1.	New Service Connection

Select Azure Resource Manager

![](../assets/deployToAzure/new-service-connection.png)

### 2.	Select Service Principle

![](../assets/deployToAzure/new-azure-service-connection.png)

### 3.	Select Subscription

![](../assets/deployToAzure/new-azure-service-connection-detail.png)


## Configure Pipelines

### 1.	Create New Pipeline 

Use the classic editor

![](../assets/deployToAzure/configure-pipeline.png)

### 2.	Select a source

Select Repository & **“Dev”** Branch

![](../assets/deployToAzure/select-source.png)

### 3.	Select a template

Search and Select Docker container

![](../assets/deployToAzure/select-template.png)

### 4.	Select Agent pool

![](../assets/deployToAzure/select-agent-pool.png)

### 5.	Review/Change Source

![](../assets/deployToAzure/review-change-source.png)

### 6.	Build an Image

Select Subscription & Container Registry
    
On Build Arguments

    BUILD_VERSION=beta-$(Build.BuildId) ,for Dev Branch (Dev Pipeline)
    Or BUILD_VERSION=v$(Build.BuildId) ,for Main/Master Branch (QA-Prod Pipeline)
    Press Info and Link the Settings
On Image Name

    your-desire-image-name:beta-$(Build.BuildId) ,for Dev Branch (Dev Pipeline)
    your-desire-image-name:v$(Build.BuildId) ,for Main/Master Branch (QA-Prod Pipeline)


### 7.	Push an Image

Select Subscription & Container Registry
On Image Name

    your-desire-image-name:beta-$(Build.BuildId) ,for Dev Branch (Dev Pipeline)
    your-desire-image-name:v$(Build.BuildId) ,for Main/Master Branch (QA-Prod Pipeline)

![](../assets/deployToAzure/ignite-platform-dev-build.png)


## Custom Deployment using Private Repository (Local Development)

Deploy using private repository (local development)

### 1.	Get Ignite Keys

Visit **<u><a href="https://dashboard.heroku.com/apps" target="_blank">https://dashboard.heroku.com/apps</a></u>**

Select your deployed application from Heroku dashboard

![](../assets/deployToAzure/heroku-app.png)

Go to Settings tab and click on **"Reveal Config Vars"**

![](../assets/deployToAzure/heroku-setting.png)

You will find **IGNITE_EDITOR_API_SECRET**

![](../assets/deployToAzure/heroku-keys.png)


### 2.	Deploy to Azure

After the Ignite Platform team provisions your account, you may use the following **"Deploy to Azure"** button to get started your deployment using local development with private repository.

<a href="https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FCybergroup-Research%2Fignite-runtime-image%2Fmaster%2Fazure-app-service-docker-private-image.json" target="_blank">![](../assets/deployToAzure/deploy-to-azure.png)</a>
    

 > You may need a Microsoft Azure account, docker account with azure container registry

 > You will be redirected to Azure after clicking this button.

![](../assets/deployToAzure/custom-deployment-private-repo.png)

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

- **Env_DOCKER_REGISTRY_SERVER_URL** Provide docker registry server URL

- **Env_DOCKER_CUSTOM_IMAGE_NAME** Provide docker image name URL

- **Env_DOCKER_REGISTRY_SERVER_USERNAME** Provide docker registry server username

- **Env_DOCKER_REGISTRY_SERVER_PASSWORD** Provide docker registry server password

Repeat above steps for others environment like Dev, QA, and Prod

## Release Pipeline

### 1.	New Release Pipeline

Search deployment and select Azure App Service deployment

![](../assets/deployToAzure/new-release-pipeline.png)

### 2.	Enter Stage Name

![](../assets/deployToAzure/enter-stage-name.png)

### 3.	Add Artifacts

![](../assets/deployToAzure/add-artifacts.png)

### 4.	Modify Task

    Select Stage & Deploy Azure App Service Task
    Select Subscription & App Service
    Registry: yourazureregistry.azurecr.io
    Image: registry image
    Tag: $(Build.BuildId)

![](../assets/deployToAzure/modify-task.png)

### 5.	Enable Continuous Deployment

Enter Tag Filter: **^beta-**     for Dev
Enter Tag Filter: ^v for      for QA/Prod

![](../assets/deployToAzure/enable-continuous-deployment.png)

### 6.	Sample Release Strategy

On Push to Dev Branch

![](../assets/deployToAzure/sample-release-strategy.png)

On Push to Master Branch

![](../assets/deployToAzure/on-push-master-branch.png)



