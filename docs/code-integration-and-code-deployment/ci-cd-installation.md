---
id: ci-cd-installation
title: Installation
sidebar_label: Installation
---

## Setting up the Local Environment and Workspace

This guide explains how to set up your environment for Ignite Project development using the Docker & Postgres. It includes information about prerequisites, creating an initial workspace and starter app, and running that app locally to verify your setup.

### Prerequisite

To use the Ignite Project, you should be familiar with the following:
1.  <a href="https://docs.docker.com/get-started/overview/" style="color:blue" taget="_blank">Docker</a>
2.  <a href="https://www.postgresql.org/docs/13/index.html" style="color:blue" taget="_blank">PostgreSQL</a> 
3.  <a href="https://try.github.io/" style="color:blue" taget="_blank">Git</a>

Knowledge of <a href="https://docs.docker.com/compose/" style="color:blue" taget="_blank">**Docker Compose**</a> is helpful.
To install Ignite Project on your local system, you need the following:

- **Docker**

    Ignite requires a latest version of Docker Desktop.
For more information on installing Docker Desktop, see <a href="https://www.docker.com/products/" style="color:blue" taget="_blank">docker-desktop</a>. 

    If you are unsure what version of Docker Desktop runs on your system, run 
    ```
    docker -v
    ```
    in a terminal window.

    ![](../assets/code-integration-and-code-deployment/docker-version.png)

- **Postgres**

     Ignite requires Postgres Database to start application development.
You can connect to existing Postgres Database or start a new Postgres instance.
For more information on installing Postgres Database on Docker Desktop, see <a href="https://hub.docker.com/_/postgres" style="color:blue" taget="_blank">here</a>.

### Create a workspace and initial application

You develop apps in the context of an <a href="https://dashboard.cgignite.io/apps" style="color:blue" taget="_blank">Ignite App</a>. 

To create a new, Ignite App: 
1.	Navigate to <a href="https://dashboard.cgignite.io/apps" style="color:blue" taget="_blank">Ignite App</a> and create a new app and provide the name, such as my-app

    ![](../assets/code-integration-and-code-deployment/new-app-button.png)

    ![](../assets/code-integration-and-code-deployment/create-new-app.png)

2.	The **Create App** action, will navigate to registration page which will provide information to start & register Ignite container.

    ![](../assets/code-integration-and-code-deployment/runtime-registration.png)

### Run the application

The Ignite Container includes a server, so that you can build and serve your app locally.

1.	Open explorer, Create new workspace folder, such as my-app.

![](../assets/code-integration-and-code-deployment/create-new-folder.png)

2.	Create a file **docker-compose.yml** inside the workspace directory, you just created above. 

![](../assets/code-integration-and-code-deployment/create-docker-compose-file.png)

See, Appendix <span class="link">[Docker Compose](/docs/code-integration-and-code-deployment/ci-cd-installation#appendix)</span> for reference.
**cybergroupignite/runtime:v2.0.0** is our latest docker image, 
following environment variable are required to start local development.

```
    IGNITE_EDITOR_API_SECRET: “<your editor key>” 
    DATABASE_URL: “<your database url>”
    START_MODE: "PROJECT" required for git based application development
    DB_SSL_OPTION: “true” or "false” based on your Postgres Database installation 
```

Provide **IGNITE_EDITOR_API_SECRET** from Runtime Registration Page. 

![](../assets/code-integration-and-code-deployment/secret-key-code.png)

<span class="link">[docker-compose.yml](https://github.com/Cybergroup-Research/ignite-application-development/blob/master/docker-compose.yml)</span> file will look like as below-

```
version: "3.9"
services:
    web:
        image: cybergroupignite/runtime:v2.0.0
        ports:
            - "1881:1881"
        environment:
            IGNITE_EDITOR_API_SECRET: "<Your Ignite Secret key>"
            DATABASE_URL: "postgres://username:password@host:port/database"
            START_MODE: "PROJECT"
            DB_SSL_OPTION: "true"
```



4.	Open my-app in the terminal and run the following command:

    ```
    docker-compose up
    ```
    ![](../assets/code-integration-and-code-deployment/docker-compose-execution.png)

The **docker-compose up** command launches the server, watch the logs, wait for container to start.

When application is ready to accept the request, open **http://localhost:1881/**.

If your installation and setup was successful, you should see a page similar to the following

![](../assets/code-integration-and-code-deployment/ignite-runtime.png)

### Runtime Registration

To start the application development, register your application on registration page. 

![](../assets/code-integration-and-code-deployment/runtime-registration.png)

1.	Select Development & Enter **http://localhost:1881/** on Ignite Runtime URL textbox

![](../assets/code-integration-and-code-deployment/select-runtime-environment.png)

2.	Click on **Test Connection** button to test and complete the registration process

3.	On Successful connection browser will be redirected to editor.

If your environment variable is correct, you should see a page similar to the following,

![](../assets/code-integration-and-code-deployment/create-project-page.png)

### Creating your first project

When you open the **Editor**, you’ll be greeted by a welcome screen that invites you to create your first project using your existing flow files.

It will take you through the following steps:

1.	Setup your version control client

    Ignite uses the open source tool Git for version control. It tracks changes to your project files and lets you push them to remote repositories.

    When you commit a set of changes, Git records who made the changes with a username and email address. The Username can be anything you want - it does not need to be your real name.

    You can change these settings at any time via the main **settings** dialog.

2.	Create your project

    The next step lets you name your project and given it a description.

3.	Create your project files

    Ignite will automatically migrate your existing flow files into your project. You can choose to rename them here if you want.

4.	Setup encryption of your credentials file

    As you may choose to share your project on public sites such as GitHub, it is strongly recommended that you encrypt your credentials file.
To encrypt it, you need to choose a key that will be used to secure the file. This key is not stored within the project. If someone else clones your project, you will need to provide them the key to decrypt the credentials file. Otherwise they will need to edit the flow to provide their own credentials.

### Working with projects

Once you have created your project, you can continue to use the editor just as you always have. There are some new parts of the editor that have been added to work with your project.

#### Accessing Project Settings

The Info sidebar now shows what project you are working on at the top. Next to the project name is a button that opens up the Project Settings dialog.

![](../assets/code-integration-and-code-deployment/project-setting-dialogue.png)

You can also access this from the Projects -> Project Settings option in the main menu.

The dialog has three tabs:

**Project** lets you edit the project’s README.md file.

**Dependencies** - manage the list of node modules your project depends on

**Settings** - manage the project settings, including the git remotes

**Project Dependencies**

Each project has its own package.json file that includes a list of node modules the project depends on. The editor tracks what nodes you are using in a flow and helps you to keep that list of dependencies up to date.

![](../assets/code-integration-and-code-deployment/project-dependencies.png)

In the screenshot above, the current project has three modules listed in its package.json file, each in a different state:

-	**@cgignite/ignite-auth** is not currently installed
-	**@cgignite/ignite-sendgrid** is used by the current flow
-	**@cgignite/ignite-breakpoint** is listed, but is unused by the current flow
 
Finally, **@cgignite/ignite-metrics** provides a node that is used by the current flow, but that module is not listed as a dependency.

Keeping the dependency list up to date is important if you want to share the project with others - as it will help users to install the necessary modules.

**Project Settings**

The project settings tab lets you manage your flow files, the encryption configuration of your credentials and configure your local git branches and remote repositories.

**Version Control**

A new history tab has been added to the sidebar. This is where you manage the version control of your project. The tab has two sections:

- **Local Changes** - shows project files that have changed, allowing you to stage and commit them.

- **Commit History** - a list of all commits in the repository, with tools to push commits to remote repositories.

##### Local Changes

Whenever you change a project file, such as by deploying a new flow configuration, it will be listed in the ‘Local files’ section. You can click on the file name to see a diff of what has changed. When you hover over the file, you’ll see a + button - clicking that will stage the file - moving it down to the ‘Changes to commit’ list.

When you have staged the files you want to commit, click the commit button, enter a message and confirm.
    
![](../assets/code-integration-and-code-deployment/local-changes.png)

##### Commit History

The Commit History section lists all of the commits in the current branch of the repository. When you create a project, Editor automatically commits the initial set of default files for the project.

At the top of the list is the ‘Branch’ button. That allows you to checkout/create branches within the repository.

If your repository has a remote repository configured, there is also a button that shows how many commits ahead and/or behind your local repository is compared with the remote. It allows you to pick the remote/branch to track, and push/pull your changes to the remote.

![](../assets/code-integration-and-code-deployment/commit-history.png)

This is one area that the editor tries to simplify the user experience, and doesn’t expose all of the various options git provides. This is an area we welcome feedback on. For example, it does not provide options to rebase your local commits, or force push your changes to the remote. You can still do those things by falling back to the command line.

##### Creating new projects

After you have created your first project by migrating your existing flow files you can create additional projects.

Selecting Projects -> New from the menu opens the Projects dialog.

This provides three options:

-   open an existing project
-   create a new project
-   clone a project repository

**Open an existing project**

Runtime only runs one project at any time. By opening another project you change what flows are running. 

The ‘open project’ view also allows you to delete projects by hovering over them in the list and clicking the delete button. You cannot delete the active project.

**Create a new project**

This lets you create a new project. It provides the same options as the ‘create your first project’ set of screens, but collapsed into one. 

**Clone a project repository**

This lets you clone an existing remote repository. You can use either an http(s) or git/ssh url for the repository. If the repository requires authentication you must provide it here.

Note: for http urls, do not include your username and/or password in the url itself. You can should provide those separately when prompted.

## Build

The Ignite Application runs on docker container, you can build image from project repository.

1.  Open Terminal

2.  Clone your git repository

3.  Create a Docker file. See, Appendix <span class="link">[Build](/docs/code-integration-and-code-deployment/ci-cd-installation#docker-compose)</span> for reference or <span class="link">[Sample Dockerfile](https://github.com/Cybergroup-Research/ignite-example-build/blob/main/Dockerfile)</span>

4.  Run the following command:

    ```
    docker build . -t your-image-name
    ```

Docker image can be pushed to public/private repository like https://hub.docker.com/ 

## Deployment

To start application, follow following command.

1.  Open Terminal

2.  Run the following command:

    ```
    docker run [OPTIONS] IMAGE [COMMAND] [ARG..]
    ```

Environment variable required to start the application are:

```
IGNITE_EDITOR_API_SECRET: "<Your Ignite Secret key>"
DATABASE_URL: "<Database URL>"
START_MODE: "BUILD"
```

## Appendix

### Docker Compose

Sample <span class="link">[docker-compose.yml](https://github.com/Cybergroup-Research/ignite-application-development/blob/master/docker-compose.yml)</span> file for application development.
```
version: "3.9"
services:
  postgres:
    image: postgres
    restart: always
    environment:
      POSTGRES_USER: admin
      POSTGRES_PASSWORD: admin
  ignite:
    image: cybergroupignite/runtime:v2.0.0
    ports:
      - "1881:1881"
    environment:
      IGNITE_EDITOR_API_SECRET: "<Your Ignite Secret key>"
      DATABASE_URL: "postgres://admin:admin@[postgres]:5432/postgres"
      DB_SSL_OPTION: "false" 
      START_MODE: "PROJECT"
      PORT: "1881"
    depends_on:
      - postgres

```
This Compose file defines two services: ignite and postgres. 

#### Ignite service
The ignite service uses a public **cybergroupignite/runtime** image pulled from the <span class="link">[Docker Hub registry](https://hub.docker.com/repository/docker/cybergroupignite/runtime)</span>.

#### Postgres service
The postgres service uses a public **postgres** image pulled from the <span class="link">[Docker Hub](https://hub.docker.com/_/postgres)</span> registry.

### Build

Sample <span class="link">[Dockerfile](https://github.com/Cybergroup-Research/ignite-example-build/blob/main/Dockerfile)</span> file for creating docker image.

```
FROM cybergroupignite/runtime:v2.0.0
ARG BUILD_VERSION
WORKDIR /usr/src/nodered
RUN echo BUILD_VERSION=${BUILD_VERSION} >> .env
COPY . ./build
RUN npm run compile
```
Checkout <span class="link">[Example](https://github.com/Cybergroup-Research/ignite-example-build)</span> Git repository to build docker image using <span class="link">[git action](https://github.com/Cybergroup-Research/ignite-example-build/blob/main/.github/workflows/main-build-deploy.yml)</span> & deploy to Heroku.
