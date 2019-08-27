var things_i_do = [
  "feasting on sushi",
  "reading <a href='https://leanpub.com/javascriptallongesix/readjavascript'>JavaScript Allongé</a>",
  "playing games on Steam</a>",
  "writing <a href='https://medium.com/@michaelgdimmitt'>blogs</a>",
  "reading books</a>",
  "chilling in local coffee shops",
  "learning japanese",
  "learning more stuff about programming",
  "discovering new things that interests me",
  "singing in the shower",
  "freestyling on piano",
  "binge watching on <a href='http://netflix.com'>Netflix</a>",
  "learning new programming languages",
  "teaching programming to beginners",
  "exploring Vancouver, BC",
  "teaching programming at <a href='https://www.meetup.com/members/194133663/'>Local Meetups</a>",
  "learning functional programming",
  "thinking about future travel plans",
  "in the <a href='https://twitter.com/m_dimmitt'>twitter-sphere</a>",
  "mentoring at <a href='https://www.meetup.com/jax-code-and-coffee'>Code and Coffee</a>",
  "glitching images on <a href='http://revisit.link'>revisit.link</a>"
];

function display_things_i_do() {
  what_i_do = things_i_do[Math.floor(Math.random() * things_i_do.length)];
  document.getElementById("what_i_do").innerHTML = what_i_do;
  // setBackgroundImage();
}

// function setBackgroundImage() {
//   var image_random_number = Math.floor((Math.random() * 26) + 1);
//   var imageHolder = document.getElementById("floating-image")

//   imageHolder.style.backgroundImage = "url(images/image_" + image_random_number + ".gif)";
// }


document.getElementById("what_i_do").addEventListener("click", function(){
  display_things_i_do();
}, false);

display_things_i_do();
