function fetchJSONFile(path, callback) {
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function() {
      if (httpRequest.readyState === 4) {
          if (httpRequest.status === 200) {
              var data = JSON.parse(httpRequest.responseText);
              if (callback) callback(data);
          }
      }
  };
  httpRequest.open('GET', path);
  httpRequest.send();
}

// curl 'https://api.meetup.com/self/groups?page=20&access_token=c7343ae906e6ab44797193666e50fc1e&only=name' -H 'Accept: */*' -H 'Referer: http://127.0.0.1:3000/rsvp' -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36' -H 'Sec-Fetch-Mode: cors' --compressed
fetchJSONFile('https://api.meetup.com/self/events?page=1&scroll=next_upcoming&access_token=12900eeff1d07a0e05a3b9fdc06e35bc', function(data){
    console.log({data})
    
    const { link, venue, local_date, name }  = data[0];

    const address = (venue.address_1 + " " + venue.city + ", "  + venue.state);
    const nextEventDate = new Date(local_date);

    const nextEventDayString = 
        new Intl.DateTimeFormat('en-US', {month: "short"}).format(nextEventDate) + ' ' +
        nextEventDate.getDate() 
    
    document.getElementById("whereami").innerHTML = `
    <span>
        Find me <a href=${link}>${nextEventDayString}</a> at 
        ${name} 
        <br/>location: 
        <a href=${link}>
            ${address}
        </a>
        
    <span/>
    `
});
