/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

// users

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

//declare the users as an array
const followersArray = ['Mohamed-Essamaali','tetondan','dustinmyers','justsml','luishrd','bigknell'];

//get request
followersArray.forEach(e=>{
  axios.get(`https://api.github.com/users/${e}`)

.then((response)=>{

showData(response.data);//  call the function
})
.catch((err)=>{
console.log("here is the error ", err)
});
})


// function takes an object as argument to create DOM's elements
const showData = (object)=>{
  const card = document.createElement('div');
  card.classList.add('card');
  const image = document.createElement('img');
  image.src= object.avatar_url;
  card.appendChild(image);

  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');
  card.appendChild(cardInfo);

  

   const name = document.createElement('h3');
  name.classList.add('name');
  cardInfo.appendChild(name);

  const username = document.createElement('div');
  username.classList.add('user-name');
  cardInfo.appendChild(username);

  const location = document.createElement('p');
  location.textContent = `Location: ${object.location}`
  cardInfo.appendChild(location);

  const profile = document.createElement('p');

  const link = document.createElement('a');
  link.textContent= `Profile: ${object.url}`;
  profile.appendChild(link);

 
  cardInfo.appendChild(profile);

  const followers = document.createElement('p');
  followers.textContent = `Followers: ${object.followers}`;
  cardInfo.appendChild(followers);

  const following = document.createElement('p');
  following.textContent = `Following: ${object.following}`;
  cardInfo.appendChild(following);

  const bio = document.createElement('p');
  bio.textContent = `Bio: ${object.bio}`
  cardInfo.appendChild(bio);

  const cards = document.querySelector('.cards');
  cards.appendChild(card);



return cards;
}

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/



/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
