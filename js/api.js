const githubData = {
    username: "arib10",
    githubToken: "8b31ba0bfd7d8584d6de572f4df5a836d360147a"
}

const body = `query { 
    user(login: "arib10"){
      name,
      avatarUrl,
      repositories (last: 20) {
        nodes {
          name,
          createdAt,
          updatedAt,
          url,
          primaryLanguage {
            id,
            name,
            color
          }
        }
      }
    }
  }`;

const loadProfile = () => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.body.innerHTML = response;
       }
    };
    xhttp.open("GET", "", true);
    xhttp.send();
}