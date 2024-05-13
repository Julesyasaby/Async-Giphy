require('dotenv').config();

async function getImage(query){
  try{
  const endpoint = 'https://api.giphy.com/v1/gifs/search?api_key=OUaici4OhPOQUO36XZB4Wt6SWHrBBWJ5&q=dog&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips'
  const response = await fetch(endpoint);
  const data = await response.json();
  return data;
  } 
  catch (error){
    console.error('There was an error fetching the image', error);
  }
}

getImage('llama').then(data => console.log(data));

// Print out value of API key stored in .env file
console.log(process.env.API_KEY)