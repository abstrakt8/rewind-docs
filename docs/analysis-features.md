---
sidebar_position: 4
---
# Analysis Features

## Analysis Cursor

![Analysis Cursor](https://i.imgur.com/6eqoMFn.png)

Each grey cross `x` stands for one recorded "replay frame". Usually osu! tries to record around ~60FPS, so you will see a cross around every ~17ms.

Certain frames are interesting and are therefore highlighted (enlarged + color):

* Orange: left click (z)
* Green: right click (x)
* Cyan: both clicks at the same time

Technically speaking we don’t know the true positions of the cursor between two recorded frames, that’s why Rewind tries to predict them via interpolation to give a smooth feeling.

## Slider Dev Mode

Gives you a better idea of why you missed a slider end or a slider tick:

![Slider dev mode](https://i.imgur.com/6sjB8VJ.png)

* The red circle indicates the true size of the slider follow circle since every skin has different follow circle sizes (`sliderfollowcircle.png`).
* The green dot is the current position of the slider ball.
* The red dot at the end of the slider is the "true sliderend".

The "true sliderend" is just another invisible slider tick that is placed 36ms before the slider ends. That’s why it is possible to hit the slider ends of fast and short sliders with barely any movement (see the sliders in [The Big Black](https://youtu.be/_pcTtBoBGqE?t=28)).

There are some tech maps that have very weird slider shapes where you can't even remotely gauge where the slider end is:

![slider dev mode 2](https://i.imgur.com/AGsjGGs.png)

## Playbar

![playbar](https://i.imgur.com/vksB6Gg.png)

The graph that looks like a mountain is the difficulty graph and it is an estimation of how difficult that part is (can be disabled in the settings)

The small colored ticks are:
* Red: miss
* Orange: slider break
* Yellow: 50
* Green: 100


## Statistics

![statistics](https://i.imgur.com/jR93eL9.png)

* Misses, 300, 100, 50: number of 300, 100, 50s, misses so far
* MaxCombo: max combo so far (the number you would see in the leaderboard)

* UR (Unstable Rate) is the standard deviation of your hit errors multiplied by 10. In other words, it indicates how precise your hits were.
* Mean is the average of your hit errors. If you are experienced enough, you can take this number to adjust your local offset accordingly (if you have no idea what I said, don't do it).
* Global means every hit error so far will be considered.
* Local (experimental) means that only the hit errors of the last second is considered. This might give you a better idea of how precise you have played in certain sections (streams, jump patterns, etc.).

