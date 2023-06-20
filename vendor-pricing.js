function getProductPrice(productLink) {
  // Use UrlFetchApp to fetch the product page
  var response = UrlFetchApp.fetch(productLink);
  
  // Use regex to extract the product price from the page
  var regex = /\$\d+\.\d{2}/g;
  var match = regex.exec(response.getContentText());
  if (match) {
    return match[0];
  } else {
    return "";
  }
}
