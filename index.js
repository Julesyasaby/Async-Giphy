require('dotenv').config();

const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`

async function getImage(query){
  const response = await fetch(endpoint + "&q=" + query );
  const data = await response.json();
  const gifUrl = data.data[0].url
  console.log("Gif Url:", gifUrl)
  return gifUrl
  } 


getImage("cats")

// Print out value of API key stored in .env file
console.log(process.env.API_KEY)