# WPLib Box

> Electron-based desktop app to manage and configure WPLib Box

For running of the WPLib Box in to your environment, follow the steps below:
## 1. Download
With SSH:

```sh
$ git clone git@github.com:wplib/box-admin.git
```

or with HTTPS:

```sh
$ git clone https://github.com/wplib/box-admin.git
```

and then either the folder:

```sh
$ cd box-admin
```

<hr>

## 2. Install Dependencies
To install the required dependencies with npm: 

```sh
$ npm i
```

or with yarn:

```sh
$ yarn install
```

<hr>
 
_**NOTE:** To use the Box Admin application, you need to have the WPLib Box virtual machine running in your environment._

**If you have already done this, skip to [_step 3.2_](#4-run-live-with-hot-reload-developers)**

## 3. Install WPLib Box
Turn the following commands to install WPLib Box:

### Prerequisites

- Oracle [Virtual Box](https://www.virtualbox.org/wiki/Downloads)
- [Vagrant](https://www.vagrantup.com/downloads.html) by HashiCorp


For install the Box, turn of the following the below steps:

## 3.1 Install the Box machine
Then enter the folder **gearbox.local**
```sh
$ cd src/renderer/box/gearbox.local/
```
And run the commands below in the terminal
```sh
$ vagrant up
```
_**NOTE:** This is a process that may take a while and may vary from the environment and speed of your internet connection._

## 3.2 Running the Virtual Machine
To run the virtual machine, run the command below on the terminal in the *gearbox.local* folder:
```sh
$ cd src/renderer/box/gearbox.local/
```
Running the virtual machine: 
```sh
$ vagrant up
```

## 3.3 Gearbox

## 3.3.1 Install Dependencies for Gearbox

To install the required dependencies, run the command below on the terminal in the *spa* folder:

```sh
$ cd src/renderer/box/gearbox.local/www/spa/
```

With **npm**: 

```sh
$ npm i
```

Or with **yarn**:

```sh
$ yarn install
```

## 3.3.2 Build Assets
To build assets, run:
```sh
$ npm run build
```

## 3.3.3 Copy Static Files
For static files to be accessible through the url `http://gearbox.local` you need to copy the files generated after the build that are in `src/renderer/box/gearbox.local/www/spa/dist` to `src/renderer/box/gearbox.local/www`

<hr>

### For the next steps, you should go to the root of the `box-admin` project
 
## 4. Run Live With Hot Reload
Turn the following commands on the terminal to use project as a developer:

```sh
$ npm run dev
```

<hr>
 
## 5. Build Setup
To generate the applications for the platform, run the following commands on the terminal according to your environment:

#### 5.1 Build electron application for production MAC version
```sh
$ npm run build:mac
```
#### 5.2 Build electron application for production Windows version
```sh
$ npm run build:windows
```

<hr>
 
## Run Unit Tests
```sh
# run unit & end-to-end tests
$ npm test
```

```sh
# lint all JS/Vue component files in `src/`
$ npm run lint
```