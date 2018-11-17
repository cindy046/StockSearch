$(function() {

  // Start buttons array
  const stocksList = [
    'GOOG', 'AAPL', 'PG', 'TWTR'
  ];
  // GE BAC F T PFE PFE twtr

  // Empty array to hold all available stock symbols to compare against later
  const validationList = [];

  // API call to fill out validationList array
  // This returns a full list of stock symbols to check user input against
  $.ajax({
    url: 'https://api.iextrading.com/1.0/ref-data/symbols',
    method: 'GET'
  }).then(function(response) {
    response.forEach(function(element) {
      validationList.push(element.symbol)
    });
  });

  // function to make buttons and add to page
  const populateButtons = function (arrayToUse, classToAdd, areaToAddTo) {
    $(areaToAddTo).empty();

    // Loop through the array and a button for each element
    arrayToUse.forEach(function(stock) {
      const newButton = $('<button>')
        .addClass(classToAdd)
        .attr('data-type', stock)
        .text(stock);
      $(areaToAddTo).append(newButton);
    })
  }

  // Creates and returns element for stock articles
  const buildArticle = function(article) {

    // Create an element for the article
    const articleDiv = $('<div class="column1">').addClass('stock-item');

    // Create elements for the title and article summary
    const title = $('<strong>').text(article.headline);
    const summary = $('<p>').text(article.summary);

    // Append title and summary to article Div
    articleDiv.append(title, summary);

    return articleDiv;
  }

  // Render stock info and articles to the DOM
  const render = function(response) {

    // Retrieve company info
    const name = response.company.companyName;
    const price = response.price;
    const logo = response.logo.url;
    const description = response.company.description;
    
    // Create and append elements for company info
    $('#stocks').append(
      $('<img>').attr('src', logo),
      $('<h1>').text(name),
      $('<h3>').text(description),
      $('<h3>').text(`Current Price: ${price}`)
    );

    // Variable to hold the first 10 news articles
    const news = response.news.slice(0, 10);

    // Loops through related articles and appends them to the page
    news.forEach(function(article) {
      $('#stock-news').append(buildArticle(article));
    });
  }

  // Retrieve company stock info
  const search = function() {
    $('#stocks').empty();
    $('#stock-news').empty();
    $('.stock-button').removeClass('active');
    $(this).addClass('active');

    const type = $(this).attr('data-type');
    const queryURL = `https://api.iextrading.com/1.0/stock/${type}/batch?types=quote,news,chart,logo,price,company`

    $.ajax({
      url: queryURL,
      method: 'GET'
    }).then(render);
  }

  // Validates and adds stock button
  const addButton = function (event) {
    event.preventDefault();
    const newStock = $('input').val().toUpperCase();

    // Add the input stock if it is in the validation list and not already in the stock list
    if (validationList.includes(newStock) && !stocksList.includes(newStock)) {
      stocksList.push(newStock);
      $('#stock-input').val('');
    }

    populateButtons(stocksList, 'stock-button', '#stock-buttons');
  }

  //==================================
  // Event Listeners
  //==================================
  $('#stock-buttons').on('click', '.stock-button', search);

  $('#add-stock').on('click', addButton);

  // Renders initial list of stocks to the button area
  populateButtons(stocksList, 'stock-button', '#stock-buttons');
});
