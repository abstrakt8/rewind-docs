---
sidebar_position: 4
---

# Loading a Replay
Currently there are a few ways to open a replay in Rewind:

1. Manually selecting a replay file (`.osr`) from your file system
2. Using the built-in filer watcher that watches the `osu!/Replays` folder
3. *(soon)* Using a built-in song/replay browser

## Manual selection

Either use the menu item or press the shortcut (Ctrl+O) to open up the file dialog to select your replay file (ending with `.osr`).


## File watcher

This will be the most convenient way to use Rewind since you usually want to have a look at your replay right after you have finished/failed a map.

The file watcher will watch for any new replay file that gets inserted into the `osu!/Replays` folder. Rewind will then determine which beatmap to load (even unsubmitted ones) based on your osu! game files.

Therefore you can use the file watcher in the following ways:
* At a score screen, press F2 to export the replay to the `Replays` folder ([clip](https://youtu.be/8jDJOWPbK-I))
* At a fail screen you can also press F2 to export the failed replay ([clip](https://youtu.be/b_kk0u2ks9U))
* Add a replay file into the “Replays” folder (with copy paste for example)

**Notes**:

* If you actually fail a run and want to see that replay, don't smash the ESC key out of habit / frustration, otherwise the replay is lost forever. Exporting a failed replay is only possible at the fail screen.
* You can even export a replay after passing a map in multiplayer. If you fail during a multiplayer game, then there is no way to get the replay.
* One downside of this method is that the `osu!/Replays` folder will actually be filled with the exported replays so make sure to occasionally clean it up.


