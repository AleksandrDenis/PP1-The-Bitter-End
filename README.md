# The Bitter End
## Overview
“The Bitter End” is a website developed as part of the Code Institute course.

It functions as a stage to display a variety of programming concepts and techniques learned throughout the course.

The primary objective of this site is to delve into and understand the basics of programming.

### About Website
“The Bitter End” is a distinguished cocktail and jazz bar located in Dublin City’s core. 

It provides a memorable blend of artisan cocktails, live jazz tunes, and a welcoming ambiance.

![responsive image](/assets/readme-images/responsive.jpg)

### Deployed website can be found here - [The Bitter End](https://aleksandrdenis.github.io/PP1-The-Bitter-End/index.html)




# Index

# UX
## User Stories:
* New User
  * As a new usere, I want to view the cocktail menu so that I can decide what to order.
  * As a new user, I want to see the schedule of live jazz performances so that I can plan my visit.
  * As a new user, I want to book tickets for performance.
  * As a new user, I want to know about bar.
  * As a new user, I want to contact bar and book a table so that I can ensure I have a spot on a busy night.
* Returning User
  * As a returning user, I want to check for upcoming jazz performances so that I can attend my favorite shows.
  * As a returning user, I want to see any changes in the cocktail menu so that I can try new drinks.

* Owner goal
  * As an owner, I want to update the cocktail menu so that customers can see our latest offerings.
  * As an owner, I want to promote upcoming jazz performances so that we can attract more customers.

## Design

### Structure

![site map](/assets/readme-images/Wireframe-Site-Map.png)

This structure guides visitors through a journey: from getting their first impression on the Main Page, exploring the Drink Menu, learning about Events, reaching out via the Contact Us page, and finally receiving confirmation that their message has been sent. This ensures a smooth and engaging user experience.

### Wireframes
* Mobile
  * Visual blueprint for a website’s structure when viewed on a mobile device.
    
 ![wireframe mobile](assets/readme-images/Wireframe-Mobile.png)

 * Desktop
   * Visual blueprint for a website’s structure when viewed on a desktop and larger device.

  ![wireframe desktop](assets/readme-images/Wireframe-Descktop.png) 
  
### Color Scheme
The chosen color palette for the website design is both sophisticated and calming, which aligns well with the ambiance of a jazz and cocktail bar.

![color scheme](/assets/readme-images/color-sheme.jpg)
* #2b3218: This is a dark, almost black, green. It’s reminiscent of an old, cozy library or a bottle of aged whiskey. used to style header and footer It gives a rich and elegant feel.
* #ccc894: This is a muted, earthy green. It’s a mid-tone color that’s easy on the eyes and used for backgrounds.
* #dbd5b2: This is a light, warm beige. It’s a neutral color  used for backgrounds, to highlight other elements on the page.
* #faebd7: This is a very light, almost white, pink. It’s a soft and inviting color that  used for backgrounds to lighten up darker colors.
* #f0f0f8: This is a very light, almost white, blue. It’s a cool and refreshing color that used to give a modern touch to the design.
  
Overall, this color scheme suggests a classy and timeless feel, perfect for a jazz and cocktail bar. The darker and lighter tones can be balanced to create depth and focus on the website. The neutral tones provide a perfect backdrop for any additional colors or images you might want to add.

### Typography
![typography](/assets/readme-images/typography.jpg)
The main font used in the site is Raleway, with Sans Serif as the fallback font.
Raleway is an elegant sans-serif typeface family. Initially designed by Matt McInerney as a single thin weight, it was expanded into a 9 weight family by Pablo Impallari and Rodrigo Fuenzalida in 2012 and iKerned by Igino Marini.


### Images and Video
Images that display the fresh ingredients used in cocktails, along with pictures of performers and background, have been carefully chosen for the website to align with its color scheme and content.

# Deployment
* The site was deployed to GitHub pages. The steps to deploy are as follows:
   * In GitHub repository, navigate to the settings tab.
   * From side menu select pages tab.
   * Once there select source branch:main, select folder/(root).
   * Click save, the page provided the link to the completed website.     
* The live link can be found here  [The Bitter End](https://aleksandrdenis.github.io/PP1-The-Bitter-End/index.html)


# Features
Each page is designed to be user-friendly and visually appealing, reflecting the bar’s unique charm and sophistication. The website’s overall structure is intuitive and easy to navigate, ensuring a positive user experience.
* Header and Navigation
  * Header contains the website’s logo sets the tone for the website and provides link to home page.
  * Navigation: This is a crucial part of the website that guides users to the different pages. It includes:
    * Home: The main landing page that provides an overview of the website.
    * Cocktails: A page that showcases the variety of cocktails available.
    * Events: This page highlights any upcoming events or special occasions.
    * About: A section that provides information about the establishment or company.
    * Contact: A page with contact form for users to fill out.
      
 ADD IMAGE
 
* Landing Page
  * The landing page features a hero video that captures the essence of the bar’s atmosphere.
  * Overlay text sets the mood and succinctly communicates the website’s purpose.
    
 ADD IMAGE
 
* Coktail Menu Page
  * This page provides a detailed list of the cocktails available, complete with descriptions and prices.

ADD IMAGE 

* Events Page
 * Here, visitors can find a schedule of upcoming jazz performances and special events. Each event listing includes details such as the date, time, and links to book ticket from [eventbrite](https://www.eventbrite.ie/)
 
* About Page
  * This page offers information about the bar’s history, mission. It also includes photo to give visitors a feel for the bar’s ambiance.
 
 ADD IMAGE

* Contact Page
  * This page  include a contact form for visitors to send inquiries or feedback directly through the website.

 ADD IMAGE
 
* Confirmation Page
  * After a visitor submits a form on the Contact page, they’re taken to this page. It confirms that their message has been received and provides information about what to expect next and link to return to home page.
 
ADD IMAGE

* Footer
  * Provides contact information for the bar, including its address links to google maps, phone number, and email and link to  social media.
 
 ADD IMAGE



## Features Left to Implement

# Testing

## Validator Testing
* HTML
  * When passing the official [W3C](https://validator.w3.org/) validator following errors logged:
    * Element h1 not allowed as child of element <a>. Fixed by inserting a href attribute inside h1 element.
    * Duplicated Id found. Fixed by renaming id.
 * CSS
   * No errors were found when passing through the official [Jigsaw](https://jigsaw.w3.org/css-validator/) validator.
   <p>
    <a href="https://jigsaw.w3.org/css-validator/check/referer">
        <img style="border:0;width:88px;height:31px"
            src="https://jigsaw.w3.org/css-validator/images/vcss-blue"
            alt="Valid CSS!" />
    </a>
</p>

 * Accessibility
 * I confirmed that website preforms highly, running through Chrome's lighthouse devtools. Colors and fonts being used in throughout the website are easy to read and accessible.
     
     
**Landing Page**
                          
  ![landing page](/assets/readme-images/lighthouse-landing.png)
     
   **Cocktails Page**
     
  ![responsive image](/assets/readme-images/lighthouse-cocktails.png)
  
   **Events Page**
     
  ![responsive image](/assets/readme-images/lighthouse-events.png)
  
  **About Page**
     
  ![responsive image](/assets/readme-images/lighthouse-about.png)
  
  **Contact Page**
     
  ![responsive image](/assets/readme-images/lighthouse-contact.png)
  
  **Confirmation Page**
     
  ![responsive image](/assets/readme-images/lighthouse-confirmation.png)
   
   


# Languages and Programs
* [HTML5](https://en.wikipedia.org/wiki/HTML5)
   * Used for structure.
* [CSS](https://en.wikipedia.org/wiki/CSS)
   * Used for styling.
* [JS](https://en.wikipedia.org/wiki/JavaScript)
  * Used to create bar menu for mobile divices.
*  [Vs Code and Codespaces](https://en.wikipedia.org/wiki/Visual_Studio_Code)
  * Used as code editor.
* [MS Word](https://en.wikipedia.org/wiki/Microsoft_Word)
  * Used to write content and detect grammatical errors in a text.
* [MS Clipchamp](https://en.wikipedia.org/wiki/Clipchamp)
  * Used for video editing.
* [Adobe photoshop](https://en.wikipedia.org/wiki/Adobe_Photoshop)
   * Used for image editing.
* [Balsamiq Wireframes](https://en.wikipedia.org/wiki/Balsamiq)
   * Used to create wire frame.


# Credits
## Code

## Content

## Media

# Acknowledgements
