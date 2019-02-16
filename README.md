# hohk_portfolio
  
__LEGEND__\
VER x.y.z | dd/mm/yy\
\
x denotes build version: 0 for alpha, 1 for release\
y denotes major changes: starts from 0\
z denotes minor changes: starts from 1\
<br>
VER 0.4.1 | 16/02/19
- languages:
  1. website now supports three languages: English, Simplified Chinese, Japanese
- loading speed:
  1. each language is currently coded as raw text in the HTML file
  2. load times are dependant on how fast the user can pull the data from the GitHub repository
- issues to be addresssed:
  1. create a language manager in JavaScript
  2. separate the raw text into constants and store them in a list
  3. swap languages via the constats

VER 0.3.3 | 15/02/19
- certain elements were not being centered properly:
  1. neon letters now centers within the parallax with a flex display instead of using absolute position and padding
  2. introduction element now horizontally centers based on screen height instead of using absolute posistion and padding
  3. contact icons now horizontally centers based on screen height instead of using absolute position and padding
- quality of life:
  1. cleaned up even more spaghetti code
  2. changed font-size to use em instead of pt and px
  3. working links and QR codes have been added to contact icons

VER 0.3.2 | 03/02/19
- bugfixes:
  1. fixed a bug where certain content was being served over HTTP instead of HTTPS whoops
  2. fixed a bug where the return to top button was not showing up correctly
  3. fixed various JavaScript bugs that caused JavaScript content to behave weirdly
- quality of life:
  1. spaghetti code cleaned up
  2. updated codes that are deprecated in HTML5

VER 0.3.1 | 02/02/19\
!! LOTS OF CHANGES !!
- logo:
  1. logo has been changed
  2. logo is now mobile friendly, and will scale depending on viewport size
- navigation:
  1. navbar now sticks to the top
  2. added a return to top button
- website:
  1. home page now utilises parallax scrolling
  2. contact and skills page have been removed
  3. contact and skills page have been merged into the home page
- quality of life improvements:
  1. fonts have been shifted into a folder; no need to depend on font library
  2. code has been mostly cleaned up
- miscellaneous:
  1. used CSS to produce a neon sign effect
  2. incorporated JavaScript for sticky header and return to top
- issues to be addressed:
  1. actually add content lol

VER 0.2.3 | 29/01/19
- Lightbox is mobile friendly
- website should be sufficiently mobile friendly
- issues to be addressed:
  1. ~~font takes time to load - change font library to Google Fonts instead?~~
  2. ~~touch up on website's mobile friendliness~~

VER 0.2.2 | 29/01/19
- added logo
- issues to be addressed:
  1. ~~Lightbox still not mobile friendly~~

VER 0.2.1 | 28/01/19
- added Lightbox to 2D gallery page
- issues to be addressed:
  1. ~~make Lightbox mobile friendly~~
  2. ~~center images in Lightbox~~

VER 0.1.1 | 27/01/19
- portfolio website skeleton created
- portfolio hosted on Netlify
