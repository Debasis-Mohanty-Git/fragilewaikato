const fs = require('fs');
fetch('https://new.fragileremovals.co.nz/')
  .then(res => res.text())
  .then(body => {
    fs.writeFileSync('e:/Waikato_Movers/pages/scraped.html', body);
    console.log("Scraped successfully");
  })
  .catch(err => console.error(err));
