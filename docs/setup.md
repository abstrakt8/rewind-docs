---
sidebar_position: 3
title: Setup
---

# Setup

The first time Rewind is launched you will be greeted with a setup screen in which you are asked to enter your osu! location.

### Where is my osu! folder located?

Usually in `%LOCALAPPDATA%\osu!`, but to be absolutely sure you can also follow these steps:
* Open osu!
* Open the settings (Ctrl+O)
* Click on the "Open osu! folder" button in the "Updates" section.


### It says that the folder does not look like a valid osu! directory!

In order for Rewind to work, the following directories / files will be checked at your given osu! directory:
* `osu!.db`, `scores.db`
* `Replays`, `Skins`, `Songs` folder

If one of them does not exist, an error message will be shown.

**Notes**

* If your beatmap folder is not named `Songs` then create a symbolic link named `Songs` to your beatmaps folder (let's say `Beatmaps`). Run a console as an admin and execute:
```
mklink /D Songs Beatmaps
```

By default, there is already an empty `Songs` folder, so might you have to delete/move that folder beforehand since you don't use that anyways

* If you have just recently installed osu!, the “Replays” folder might not exist. In that case, add an empty folder with that name.
* The osu! folder check will be done every time Rewind is started. This means that you might be asked to enter the osu! folder location again, if you have moved it to somewhere else.