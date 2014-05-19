Agenda
======

A Sencha Touch application example generated with [**Sencha Cmd**](http://www.sencha.com/products/sencha-cmd/download)

## Usage
First of all, clone the repo:

```bash
$ git clone https://github.com/IbuildingsItaly/Agenda
```

Then make a copy of [**SenchaTouch#2.3.1**](http://www.sencha.com/products/touch/download/sencha-touch-2.3.1a/3069) created with Sencha Cmd and move it in the application folder (path/to/Agenda), under the name *touch*.
If you don't have any copy, generate it:

```bash
$ cd path/to/sencha_touch_2.3.1/
$ sencha generate app base_sdk /tmp/base_sdk
$ cp -a /tmp/base_sdk/touch/ path/to/Agenda/touch
```

Now, launch the webserver with Sencha Cmd and try out the demo:

```bash
$ cd path/to/Agenda
$ sencha web start
```

## Packaging
Follows the packaging documentation for different platforms:

### Android
First step, initialize [**cordova**](http://cordova.apache.org/) with Sencha Command:

```bash
$ cd path/to/Agenda
$ sencha cordova init your.app.id
```

your.app.id could be a random id such as *my.webappsite.Agenda*.
A new folder named *cordova* is created under the project root.
Let's add the android platform:

```bash
$ cd /path/to/Agenda/cordova
$ cordova platform add android
```

Now, Agenda uses push notifications and the camera of the device, so you need to install [**Push**](https://github.com/phonegap-build/PushPlugin) and [**Camera**](https://cordova.apache.org/docs/en/3.0.0/cordova_camera_camera.md.html) plugins:

```bash
$ cd path/to/Agenda/cordova
$ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-camera.git
$ cordova plugin add https://github.com/phonegap-build/PushPlugin.git
```

At this point you're ready to make the android native build!

## Build
It's time to make the Agenda build!

### Basic
This build is the basic one, a build where every assets (javascript, css and html files) are compressed and concatenated in just one file for each language (one for JS, one for CSS and one for HTML).
To build your app, launch the following command from the root of Agenda:

```bash
$ cd /path/to/Agenda
$ sencha app build
```

A new folder called *production* is created under *build*: here you can find the production build of Agenda, ready to use.

### Native
If you want to make a build for mobile devices (phone, tablet and so on), then launch the following command from the root of Agenda:

```bash
$ cd /path/to/Agenda
$ sencha app build native
```

This command makes the Sencha build and then tells cordova to make the native build with its configurations.
Now, you can find the *apk* files under the following path: *path/to/Agenda/cordova/platforms/android/ant-build/*

*android* is a platform example but you get every kind of previously added platforms under *platforms* folder, like iOS, wp, blackberry, etc, with their *ant-build* sub-folder.