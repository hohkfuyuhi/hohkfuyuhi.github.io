# hohk_portfolio
  
__LEGEND__
VER x.y.z | dd/mm/yy

x denotes build version: 0 for alpha, 1 for release
y denotes major changes: starts from 0
z denotes minor changes: starts from 1
_____
VER 0.6.2 | 20/06/19
- quality of life:
  1. Netlify deployment has been deleted, and the portfolio is now hosted via GitHub Pages instead:
      - Netlify cannot be accessed in certain organisations
      - Netlify has been flagged as dangerous by certain apps and firewalls
      - newly hosted portfolio link is as follows https://hohkfuyuhi.github.io/
  2. fixed some translation issues
- bugfixes:
  1. fixed landing page alignment issue on mobile devices
  2. optimised the loading of fonts - updated almost every font to use Google's online font library
  3. adjusted the hit area of navbar links - the animation should not activate when hovering over blank space
- issues to be addressed:
  1. website is still not fully optimised for mobile devices
  2. certain fonts and images are too big on mobile devices
  3. minor alignment issues on mobile devices
  4. since VER 0.5.2, the navbar links are still unable to change language
_____
VER 0.6.1 | 19/06/19
!! COMPLETE WEBSITE OVERHAUL !!
- major changes:
  1. removed every page except index.html
      - all content has been merged into index.html
      - removed 2D and 3D gallery (for now)
      - navbar now only has the "Home", "Skills", and "Contact" links, as well as the language changer buttons
      - navbar links now have a small animation that plays when hovering over it
      - all content except landing page content is hidden by default via css
      - when a link is clicked, jQuery will hide all irrelevant content, and display the relevant content
  2. removed all parallax effects
  3. added an animated homepage intro
- minor changes:
  1. optimised the neon letters to resize dynamically based on viewport width
  2. optimised logo to resize dynamically based on viewport width
- issues to be addressed:
  1. landing page does not align properly on mobile devies
  2. need to optimise the loading of fonts
_____
VER 0.6.1 | (WIP)
- i wanted to add more interactive elements to the website
- i found a few amazing libraries, but it requires GSAP, and advanced JavaScript knowledge
- i am currently learning how to use GSAP and JavaScript in order to incorporate these elements into my website
- MAJOR UPDATE INCOMING
_____
VER 0.5.2 | 13/05/19
- bugfixes:
  1. navbar still behaving funky apparently - tried some new code, let's see how it goes
  2. certain css and scss elements were not functioning correctly - they should now
  3. some of the links in the contact section seen to be redirecting users to broken sites - i hope i fixed it
- quality of life:
  1. fixed the center alignment of the skills section - it's not perfectly center, but it should be easier on the eyes
  2. changed the layout of the contact details portion - it should be easier to scan the QR codes now that they're not side by side lol
  3. fixed some translation issues
- issues to be addressed:
  1. navbar links still don't change language - what the heck is going on??
_____
VER 0.5.1 | 08/05/19
- bugfixes:
  1. fixed funky navbar buttons - hopefully they stay that way
  2. adjusted the placement of the header buttons too - they should look nicer on mobile now
  3. "Contact" button in navbar should now correctly jump to the bottom of the home page instead of redirecting to a broken page
  4. return to top button should now display the correct animation when hovering over it
  5. language selector buttons should now fade in and fade out the correct colour when hovering over it
- languages:
  1. created a language manager with JavaScript
  2. shifted all raw text translations into the language manager
  3. added Simplified Chinese and Japanese translations for the following:
      - terms under "Design"
      - terms under "Video"
      - these terms might not be 100% accurate, will change if mistakes are found
- quality of life:
  1. layout of certain elements changed
  2. font sizes adjusted across all viewports
- issues to be addressed:
  1. navbar buttons do not change language for some weird reason - possible spaghetti code?
_____
VER 0.4.1 | 16/02/19
- languages:
  1. website now supports three languages: English, Simplified Chinese, Japanese
- loading speed:
  1. each language is currently coded as raw text in the HTML file
  2. load times are dependant on how fast the user can pull the data from the GitHub repository
- issues to be addresssed:
  1. ~~create a language manager with JavaScript~~
  2. ~~navbar buttons displayed and behaved funky when viewed in different viewports~~
_____
VER 0.3.3 | 15/02/19
- certain elements were not being centered properly:
  1. neon letters now centers within the parallax with a flex display instead of using absolute position and padding
  2. introduction element now horizontally centers based on screen height instead of using absolute posistion and padding
  3. contact icons now horizontally centers based on screen height instead of using absolute position and padding
- quality of life:
  1. cleaned up even more spaghetti code
  2. changed font-size to use em instead of pt and px
  3. working links and QR codes have been added to contact icons
_____
VER 0.3.2 | 03/02/19
- bugfixes:
  1. fixed a bug where certain content was being served over HTTP instead of HTTPS whoops
  2. fixed a bug where the return to top button was not showing up correctly
  3. fixed various JavaScript bugs that caused JavaScript content to behave weirdly
- quality of life:
  1. spaghetti code cleaned up
  2. updated codes that are deprecated in HTML5
_____
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
  1. fonts have been shifted into a folder - no need to depend on an online font library
  2. code has been mostly cleaned up
- miscellaneous:
  1. used CSS to produce a neon sign effect
  2. incorporated JavaScript for sticky header and return to top button
- issues to be addressed:
  1. actually add content lol
_____
VER 0.2.3 | 29/01/19
- Lightbox is mobile friendly
- website should be sufficiently mobile friendly
- issues to be addressed:
  1. ~~font takes too long to load - change font library to Google Fonts instead?~~
  2. ~~touch up on website's mobile friendliness~~
_____
VER 0.2.2 | 29/01/19
- added logo
- issues to be addressed:
  1. ~~Lightbox still not mobile friendly~~
_____
VER 0.2.1 | 28/01/19
- added Lightbox to 2D gallery page
- issues to be addressed:
  1. ~~make Lightbox mobile friendly~~
  2. ~~center images in Lightbox~~
_____
VER 0.1.1 | 27/01/19
- portfolio website skeleton created
- portfolio hosted on Netlify
