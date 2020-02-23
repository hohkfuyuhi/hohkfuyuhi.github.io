# portfolio patch notes
_____
**VER 0.8.5 | 23/02/20**
- *changes*
  1. added favicon
  2. adjusted intro animation
  3. changed certain links
_____
**VER 0.8.4 | 08/02/20**
- *bugfixes*
  1. fixed a bug where certain modals did not open when clicked
  2. fixed a bug where certain HTML elements were not in the correct colour
  3. fixed a bug where clicking the "welcome" button multiple times will cause the rest of the intro animation to play that many times
- *changes*
  1. added a new entry to the "stuff ive done" modal
  2. added animations to certain links
  3. added new translations for new content
- *quality of life*
  1. cleaned up css files
  2. cleaned up translations
_____
**VER 0.8.3 | 01/02/20**
- *bugfixes*
  1. fixed a bug where certain icons could not be clicked
  2. fixed a bug where the intro animation did not remove certain HTML elements properly
- *changes*
  1. added a codepen icon on the contact page that links to my codepen page
  2. added a "stuff i've done" modal on the skills page that contains links to some of my coding works
  3. added a link to the aegisub website in case people have no idea what aegisub is
- *quality of life*
  1. added the transition property to buttons
  2. cleaned up timings for the intro animation
  3. cleaned up modal.css
  4. cleaned up and standardised style.css
  5. cleaned up media queries across the board
_____
**VER 0.8.2 | 29/01/20**
- *changes*
  1. completely removed gooey menu, replaced with a normal navigation menu
      - a lot of issues with fixed positioning
      - icons could not be pressed sometimes
      - certain icons are confusing
- *quality of life*
  1. cleaned up jQuery code
_____
**VER 0.8.1 HOTFIX | 23/01/20**
- *__HOTFIX__*
  1. GSAP is back because i forgot that the mouse animation requires GSAP oops
_____
**VER 0.8.1 | 23/01/20**
- *__MAJOR CHANGES:__*
  1. added a noscript tag to warn users that the website requires JavaScript to be enabled
  2. created a pseudo preloader
      - the preloader animation is a diamond folding and unfolding
      - majority of content should load together with the website, so this preloader is mostly a precautionary measure, but is also an aesthetic decision
      - the preloader has a pseudo random number generator to determine the length of the animation, ranges from 1000ms to 3000ms
  3. brand new intro animation
      - preloader now plays before the new intro animation
      - all existing GSAP code used for the intro animation has been replaced with anime.js code ~~(goodbye GSAP, you were a pain to work with, and i won't miss you one bit)~~
- *bugfixes*
  1. fixed a bug where content doesn't fade in or out properly
- *changes*
  1. changed the image used for all image meta tags
- *quality of life*
  1. instead of having one script tag for each jQuery function, all jQuery code and functions (except script src) have been consolidated into one large script tag
- *issues to be addressed:*
  1. clicking the "welcome" button multiple times will cause the rest of the intro animation to play that many times
_____
**VER 0.7.4 | 11/01/20**
- *bugfixes*
  1. fixed a bug where fonts were being applied in places they shouldn't be
  2. fixed a bug where font awesome icons were taking too long to load
- *changes*
  1. changed media queries for gooey menu
- *quality of life*
  1. shifted all script code from head to right before end of body
  2. cleaned up the order of css precedence
_____
**VER 0.7.3 | 08/01/20**
- *bugfixes*
  1. fixed a bug where certain elements appeared off screen
  2. fixed a bug where animations were not playing properly
  3. fixed a bug where fonts were not preloading
- *changes*
  1. gooey menu and mobile navigation have been placed higher on the screen
  2. gooey menu has been enlarged for mobile screens
- *quality of life*
  1. cleaned up css precedence
  2. cleaned up css specificity
  3. cleaned up font sizes across all viewports
_____
**VER 0.7.2 | 06/01/20**
- *bugfixes*
  1. fixed a bug where certain translations do not appear or disappear after changing languages
- *changes*
  1. added a "gooey menu" to replace the navigation menu
      - the gooey menu will appear at the bottom of the screen for devices with a viewport width of 500px and below
      - gooey menu has three icons, in order from left to right:
        1. the pencil and ruler for the skills panel
        2. the house for the home panel
        3. the phone for the contact panel
- *quality of life*
  1. cleaned up translations
  2. cleaned up text
_____
**VER 0.7.1 | 09/12/19**
- *bugfixes*
  1. fixed a bug where the correct font sizes were not being served on their respective viewports
- *changes*
  1. added email to the list of contact links
  2. removed certain social media links
- *quality of life*
  1. cleaned up translations
  2. font sizes have been standardised across all viewports
_____
**VER 0.7.0 | 09/12/19**  
**!! CHANGE IN FRAMEWORK !!**  
**!! NEW WEBSITE IS NOW ONLINE !!**
- *__MAJOR CHANGES:__*
  1. overhauled code to use the Bootstrap framework for the following reasons
      - easier code management
      - code is scalable
  2. overhauled all media queries
      - media queries now support more viewport sizes
  3. added a mobile navigation that appears only when on a mobile device
  4. replaced light modal with Bootstrap modal
  5. replaced existing table code with Bootstrap table
- *minor changes:*
  1. overhauled the design of the modal
  2. added a short self introduction to the contact panel
  3. cleaned up translations
  4. cleaned up code in various places
_____
**VER 0.7.0 | (WIP)**
- made the decision to convert everything to the Bootstrap framework
- reasons as follows:
  1. easier code management
  2. scalability
  3. consistent framework avoids cross browser bugs as much as possible
  4. built-in responsive structures and styles
  5. great mobile support
- **WEBSITE HAS BEEN REPLACED WITH A PLACEHOLDER FOR NOW**
- **SECOND MAJOR UPDATE INCOMING**
_____
**VER 0.6.7 | 07/07/19**
- *bugfixes:*
  1. fixed a bug where certain animations played faster or slower than usual
  2. fixed a bug where the contact icons scaled to the wrong size when hovering over them
- *changes:*
  1. added more media queries to cater to various devices
  2. added Open Graph and Twitter Card meta tags
  3. added jQuery code to remove certain css classes when on mobile devices
  4. modified the mousemove effect when on mobile devices
  5. changed the hover animation for the contact icons
- *quality of life:*
  1. warning message has been moved higher up in order to make it easier to read
  2. colours have been adjusted across the board in order to make text easier to read
  3. fixed translation mistakes
  4. cleaned up code
_____
**VER 0.6.6 | 06/07/19**
- *bugfixes:*
  1. fixed a bug where English words were showing up in the Japanese translation
- *changes:*
  1. close button on the modal window now resizes properly on mobile devices
  2. added a warning message on the intro screen that shows up when a mobile device is detected
  3. added a "software knowledge" link under the skills section:
      - clicking the link brings up a modal window
      - modal window contains a list of software that i am proficient in
  4. added a link to my YouTube page under the contact section
_____
**VER 0.6.5 | 03/07/19**
- *bugfixes:*
  1. fixed a bug where where certain words wouldn't change when changing languages
  2. fixed a bug where the skills table sometimes doesn't resize properly when the screen is resized
- *changes:*
  1. skills table now align and resize properly on mobile devices
  2. added a new animation to the "EXPLORE" word in the intro animation
  3. changed the hover animation for the navbar links
  4. added a new hover animation for the language buttons
  5. added a new mousemove effect that shows up on the homepage with JavaScript
- *issues to be addressed:*
  1. close button on the modal window shows up at the wrong size on mobile
_____
**VER 0.6.4 | 30/06/19**
- *changes:*
  1. navbar links now resize properly on mobile devices
  2. added hover animations to langauge buttons and contact icons
- *quality of life:*
  1. font overhaul for English text
      - there were previously four different fonts for English text
      - all English text are now standardised with the "Inconsolata" font
      - the only exception to this is the font used for my name
  2. navbar layout and arrangement has been changed
  3. skills table has been redesigned
- *issues to be addressed:*
  1. skills table has alignment issues on mobile devices
_____
**VER 0.6.3 | 26/06/19**
- *bugfixes:*
  1. finally fixed the bug that prevented the navbar links from changing language
- *quality of life:*
  1. font sizes have been adjusted for mobile devices
- *issues to be addressed:*
  1. navbar links do not resize on mobile devices
  2. the close button on the modal window either does not render properly on mobile devices
_____
**VER 0.6.2 | 24/06/19**
- *changes:*
  1. website has been more or less optimised for mobile devices
      - various alignment issues have been fixed
      - Line and WeChat QR codes are now shown in a modal window when the user clicks on the respective icons
- *quality of life:*
  1. intro animation has been sped up
  2. font sizes have been enlarged across the board
- *issues to be addressed:*
  1. navbar links still do not change language
  2. font sizes not properly optimised for mobile devices
_____
**VER 0.6.1 | 20/06/19**  
**!! CHANGE IN WEBSITE HOST !!**
- *__MAJOR CHANGE:__*
  1. goodbye Netlify, hello GitHub:
      - Netlify cannot be accessed in certain organisations
      - Netlify has been flagged as dangerous by certain apps and firewalls
      - portfolio website is how hosted on GitHub Pages
      - newly hosted portfolio link is as follows https://hohkfuyuhi.github.io/
- *bugfixes:*
  1. fixed a bug that caused content to not be aligned properly on mobile devices
- *quality of life:*
  1. optimised the loading of fonts - updated every font except the neon font to use Google's online font library
  2. adjusted the hit area of navbar links - the hover animation should not play when hovering over blank space any more
  3. fixed some translation issues
- *issues to be addressed:*
  1. website is still not fully optimised for mobile devices
  2. certain fonts and images are too big on mobile devices
  3. contact section is not properly aligned on mobile devices
  4. since VER 0.5.2, the navbar links still do not change when the website language is changed
_____
**VER 0.6.0 | 19/06/19**  
**!! COMPLETE OVERHAUL OF WEBSITE DESIGN !!**
- *__MAJOR CHANGES:__*
  1. removed every page except index.html
      - all content has been merged into index.html
      - removed 2D and 3D gallery - i have no wish to do 2D and 3D work after graduation
      - navbar now only has the "Home", "Skills", and "Contact" links, as well as the language changer buttons
      - navbar links (except the language changer buttons) now have a hover animation
      - all content except main page content is hidden by default via css
      - when a navbar link is clicked, jQuery will hide all irrelevant content, and display the relevant content
  2. removed all parallax effects
  3. added an intro animation with JavaScript and GSAP
- *quality of life:*
  1. optimised the neon letters to resize dynamically based on viewport width
  2. optimised logo to resize dynamically based on viewport width
- *issues to be addressed:*
  1. content does not align properly on mobile devies
  2. fonts are loading too slowly
_____
**VER 0.6.0 | (WIP)**
- i wanted to add more interactive elements to the website
- i found a few amazing libraries, but it requires GSAP and JavaScript
- i am currently learning how to use GSAP and JavaScript in order to incorporate these elements into my website
- **FIRST MAJOR UPDATE INCOMING**
_____
**VER 0.5.1 | 13/05/19**
- *bugfixes:*
  1. navbar still behaving funky apparently - tried some new code, let's see how it goes
  2. fixed a bug where certain css elements were not working properly
  3. fixed a bug where some of the links in the contact section were redirecting users to broken sites
- *quality of life:*
  1. fixed the center alignment of the skills section - it's not perfectly center, but it should be easier on the eyes
  2. changed the layout of the contact page - it should be easier to scan the QR codes now that they're not side by side
  3. fixed some translation issues
- *issues to be addressed:*
  1. navbar links still don't change language
_____
**VER 0.5.0 | 08/05/19**
- *bugfixes:*
  1. fixed funky navbar buttons - hopefully they stay that way
  2. "Contact" button in navbar should now correctly jump to the bottom of the home page instead of redirecting to a broken page
  3. return to top button should now display the correct animation when hovering over it
  4. language selector buttons should now fade in and fade out the correct colour when hovering over it
- *changes:*
  1. adjusted the placement of the header buttons too - they should look nicer on mobile now
  2. created a language manager with JavaScript:
      - shifted all raw text translations into the language manager
      - added more Simplified Chinese and Japanese translations
- *quality of life:*
  1. layout of certain elements changed
  2. font sizes adjusted across the board
- issues to be addressed:
  1. navbar buttons do not change language for some weird reason
_____
**VER 0.4.0 | 16/02/19**
- *changes:*
  1. website language:
      - website has been partially translated into three languages, English, Simplified Chinese, and Japanese
      - added language changer buttons to the navbar
- *issues to be addresssed:*
  1. loading speed:
      - each language is currently coded as raw text in the HTML file
      - load times are dependant on the user's speed
      - need to create a language manager with JavaScript
  2. navbar buttons display and function weirdly on mobile devices
_____
**VER 0.3.2 | 15/02/19**
- *changes:*
  1. certain elements were not being centered properly:
      - neon letters now centers within the parallax with a flex display instead of using absolute position and padding
      - introduction element now horizontally centers based on viewport height instead of using absolute posistion and padding
      - contact icons now horizontally centers based on viewport height instead of using absolute position and padding
- *quality of life:*
  1. changed font-size to use em instead of pt and px
_____
**VER 0.3.1 | 03/02/19**
- *bugfixes:*
  1. fixed a bug where certain content was being served over HTTP instead of HTTPS (whoops)
  2. fixed a bug where the return to top button was not showing up correctly
- *quality of life:*
  1. spaghetti code cleaned up
  2. updated codes that are deprecated in HTML5
_____
**VER 0.3.0 | 02/02/19\**
**!! LOTS OF CHANGES !!**
- *changes:*
  1. logo:
      - logo design has been changed
      - logo will now scale depending on viewport size
  2. navigation:
      - navbar now sticks to the top
      - added a return to top button
  3. website:
      - home page now utilises parallax scrolling
      - contact and skills page have been removed
      - contact and skills page have been merged into the home page
  4. added a neon sign effect
_____
**VER 0.2.2 | 29/01/19**
- *changes:*
  1. Lightbox is now mobile friendly
  2. website should be sufficiently mobile friendly
- *issues to be addressed:*
  1. fonts take too long to load
_____
**VER 0.2.1 | 29/01/19**
- *bugfixes:*
  1. images in Lightbox are now centered properly
- *changes:*
  1. added personal logo
- *issues to be addressed:*
  1. Lightbox still not mobile friendly
_____
**VER 0.2.0 | 28/01/19**
- *changes:*
  1. added Lightbox to 2D gallery page
- *issues to be addressed:*
  1. make Lightbox mobile friendly
  2. center images in Lightbox
_____
**VER 0.1.0 | 27/01/19**
- portfolio website skeleton created
- portfolio hosted on Netlify
