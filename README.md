# Overview

The project was intended to have a minimally-styled layout in order to focus on aspects of an ecommerce site: JSON-sourced product listings, product cart, and product sorting.

Base layout was established with HTML and CSS, with product listings generated with Vue.js (from a JSON-formatted hash of products). Cart functionality was provided with JavaScript. Product sorting was accomplished with additional use of Vue.js.

#  Current version includes:
  1. the ability to add/remove items from the cart
  2. a visual indicator above the cart icon to represent the number of items in the cart
  3. a tracker for the cost of all items in the cart
  4. a functional 'purchase' button that for now links to a dummy page (the button is inactive when no items are in the cart)
  5. the ability to scroll through images in the cart
  6. responsive layout for the cart
  7. an on-hover feature to add products to the cart
  8. main product listings re-factored using Vue.js
  9. product sort re-factored using Vue.js


=======================================================
# Site Audience Classification Analysis

The nature/pricing of the products (at least in the Scarves section) suggest that this is a niche boutique e-store.
Directed primarily towards young, trendy, fashion-and-socially conscious urban professionals, 25-40 and predominantly women, living in areas where the climate supports warmer clothing (e.g. probably not Florida or Arizona). 
As the Winter Wear Warehouse name suggests, this site has a fairly narrow focus, with products directed towards accessorizing for cooler temperatures.
Despite the name, the site has the potential to attract customers seasonally, specifically at those times locally where the temperature is cool enough to consider purchasing their products. 
With a traffic flow that is defined by seasonal purchases, site access will predominantly occur from larger mobile (tablets/laptops) and home computers. While it’s probable that these urban consumers will be browsing their site on smaller mobile devices (phones/phablets) for comparison shopping, the primary focus will be on tailoring the site for larger screens. However, efforts will be made to be mobile-friendly so encourage access to the site and capture any potential impulse buys.
In keeping with the target demographic, the expectation is that the site will be accessed on late-model devices with broadband access. 
Additionally, site consumers will have an eye for quality and color, so product images should be kept large and at higher-than-standard resolution to best make use of high-end monitors to showcase the items.

# Testing

responsive.designchecker.com:  
responds well at all device and screen sizes except the very smallest (some side-to-side scrolling)

webpagetest.org: 

results: A,A,C,A,F with the F score coming from the caching of static content.
Overall though, the metrics seems to point to a quickly-loading page.
Website speed test: grade 90 (A) … again, it’s the issue of browser caching that’s the reported concern. 

Google page speed tester: 
Similar results, but more insights into how to modify the page for caching. Unfortunately, it requires a server-side adjustment to page headers which is beyond the scope of this class. Presumably, in a real-world implementation of this site this situation would be accounted for.

Browsers:

The site appears to work properly in current versions of Chrome, Firefox, Edge and IE

Future enhancements:
Will continue to build out functionality of product cart to add swipe-enabled functionality for mobile users. This will address some of the usability concerns. 

Additionally,  will look into image compression as per Google analytic results to decrease page load times.


