export default class GitService {  
  static getGif(search) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `http://api.giphy.com/v1/gifs/search?q=${search}&limit=1&api_key=${process.env.API_KEY}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}

/*
<iframe src="https://giphy.com/embed/gxxlowyvtfS0M" width="480" height="357" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/puppy-dog-run-gxxlowyvtfS0M">via GIPHY</a></p>
*/
