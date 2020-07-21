# Image cleanup

- Each image should be portrait about 3:4 ratio
- between 800-1000 pixels height
- no larger than 180kb
- indexed png (see below)
- Transparent Background
- Icons should be as above but 200px x 200px

### getting image

best sources are gelbooru, chan.sankaku & rule34.xxx

Picture styles

- Main pic : clothed ,but preferably alluring
- Lose Pic : look like they been fucked to orgams, Keywords are ahegao, after_sex, maybe even angry, tears
- Win Pic : Should be nude, and confident, can have cum but shouldn't look post orgasm

### Cleaning the images with GIMP 
unsure of photoshop so just going with GIMP which works great

- Magic Wand & lasso

Remove background, if deleting reveals a colored background rather than a transparent one (normally a grid of white & black boxes), right click on the layer (normally bottom right) and click 'add alpha channel'

bring out the lineart (helps on lower res images)

- Filters -> Enhance -> Sharpen (Unsharpen Mask)

use this tool sparingly, just to help draw out the detail

- Colours -> Saturation

bring out some strong, but not garish colors, helps in the later step

- Colours -> brightness/ Contrast

lower the darkness & heighten contrast to really bring out the last of the detail

Finally optimise the size

- Image -> Mode -> Indexed

This sets the png to only use a certain palette of colors, heavily reducing size (which is required as the game is web hosted)

For cartoony images with block coloring, use 
generate Optimum palette - ~38-50
color dithering: none;

For detailed images with smooth skin gradients, use
generate Optimum palette - 22
color dithering: Floyd-Steinberg;

- Export as

Create a .png with max compression, remove any extras such as thumbnails.