# Stock Search Application 

## Overview

Dynamic web page that populates with stock information based on the stock symbols that the user input. 
Web app uses the iexTrading API, JavaScript, jQuery, HTML, & CSS.


## Description 

1. Page features an array of strings related to stock symbols
   & saves them in a variable called `stocksList`.

2. Take the stocks in this array and create buttons in HTML.
   Try using a loop that appends a button for each string in the array.

3. When the user clicks on a button, the page grabs the company name, logo, price, 
   and news articles related to the stock from the iexTrading API and places them on the page.

4. iexTrading API call retrieves 
   all stock symbols available in iexTrading and store it into an array. 

5. Form takes the value from a user input box 
   and adds it into `stocksList` array if the input exists as a stock symbol. 
   *user input is always capitalized. 
   *a function call takes each topic in the array remakes the buttons on the page.

   https://cindy046.github.io/StockSearch
