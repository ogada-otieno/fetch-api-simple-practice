// function for endpoint to fetch data
// will fetch promises, and jsonify them
function getPosts() {
    let baseURL = "https://jsonplaceholder.typicode.com";
    let postsEndpoint = "/posts";

    // post url [baseurl + endpoint]
    let url = `${baseURL}${postsEndpoint}`;
    
    fetch(url)
    .then(resp => resp.json())
    .then(renderPosts)
}
getPosts()

// function that access the resources given and renders them
// iterates through the given data and returns all the items using forEach
function renderPosts(users) {
    users.forEach(addTitles);
}

// function that creates the required list of titles
// appends desired content to the desired destination
const titleList = document.getElementById('parentList'); // destination parent element
// const divElement = document.getElementById('parentId'); 

function addTitles (posts) {
    let listElement = document.createElement("li")
    listElement.innerText = posts.title
    titleList.appendChild(listElement)
    
    // testing for capturing IDs
    // let spanElement = document.createElement("span")
    // spanElement.innerText = posts.id
    // divElement.appendChild(spanElement)
}
addTitles(posts)





