# Stock Search Application 

## Overview

Dynamic web page that populates with stock information based on the stock symbols that the user inputs. 
Web app uses the iexTrading API,  JavaScript, jQuery, HTML, & CSS.


## Instructions

1. Create an array of strings(each one related to a stock symbol)
   & Save it to a variable called `stocksList`.

2. Take the stocks in this array and create buttons in HTML.
   Try using a loop that appends a button for each string in the array.

3. When the user clicks on a button, the page should grab the company name, logo, price, 
   and up to 10 news articles related to the stock from the iexTrading API and place them on the page.

4. Make a seperate iexTrading API call that will retrieve 
   all stock symbols available in iexTrading and store it into an array called `validationList`. 

5. Add form to page that takes the value from a user input box 
   and adds it into `stocksList` array if the input exists in our `validationList`. 
   *Make sure the user input is always capitalized. 
   Then make a function call that takes each topic in the array remakes the buttons on the page.

   https://cindy046.github.io/StockSearch
