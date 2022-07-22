---
sidebar_position: 10
---

# FAQ

### Stuck at the loading screen
Try running it as admin and when the Windows Firewall asks for permissions, enable them.

### Beatmaps folder not located in `osu!/Songs`
If your beatmap folder is not named Songs then create a symbolic link named Songs to your beatmaps folder (let's say Beatmaps). Run a console as an admin and execute:
```
mklink /D Songs Beatmaps
```
By default there is already an empty Songs folder, so might you have to delete/move that folder beforehand since you don't use that anyways

Another example using absolute paths (replace the second argument with the path of your actual "osu! Songs" folder):

```
mklink /D C:\Users\User\Documents\osu!\Songs D:\OsuSongs
```

### How to change the osu! Folder location?
As of now edit the path of the "rewind.cfg" file or just delete it.

### The replay does not load

* Make sure that you own the beatmap
* Very old beatmaps (with `beatmapVersion < 6`) are not supported yet
* Some 2B beatmaps can also not be loaded

### The audio is really out of sync after seeking

Yes, this often happens with `.mp3` files with variable bit rate. As of now use something like Audacity to convert the `.mp3` to have a constant bit rate.

### Different number of misses / 100s / 50s are calculated!

Unfortunately osu! stable gameplay can not be matched with 100% accuracy since I do not have access to the osu! stable source code. I will try to improve the gameplay simulation as best as I can.

### I can't hear any hit sounds?

They have not been implemented yet, but will be soon.

### osu! is sometimes lagging when Rewind is in the background

Short answer: close the replay by clicking on the "x" button in the top right corner.

Long answer:
Rewind uses the [Page Visibility API](https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API) to determine whether the screen is visible or not and then goes into "energy saving mode". However, the page visibility API does not always work when the application is minimized with "Alt Tab". Therefore it's better to just close the replay to be 100% sure that we go into energy saving mode. Alternatively you can also go the the overview page.

### I have another question!
Please join the [osu! University Discord](https://discord.com/invite/QubdHdnBVg) and ask us there! Provide us as much information as possible, e.g., operating system, app version, log files, screenshots...
