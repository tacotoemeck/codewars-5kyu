// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

function domainName(url){
    let newUrl = url.replace('http://','').replace('https://','').replace('www.','');
    console.log(newUrl)
    let dotIndex =  newUrl.indexOf('.')
    return newUrl.substring(0,dotIndex)
  }

  domainName("www.xakep.ru")



  /(?<!['.com'])\w/