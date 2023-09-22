// const API_KEY = process.env.REACT_APP_API_KEY;
// const unsplashUrl = `https://api.unsplash.com/photos/?client_id=${API_KEY}`;
const url = 'http://localhost:3001';

// -----------------  Users
export async function getAllUsers() {
  try {
    const response = await fetch(`${url}/users`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getUserById(id) {
  try {
    const response = await fetch(`${url}/users/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

// -----------------  Photos Unsplash
export async function getAllPhotos() {
  try {
    // const response = await fetch(unsplashUrl);
    // const data = await response.json();
    // return data;
  } catch (error) {
    console.log(error);
  }
}

// -----------------  Photos DB
export async function getAllPhotosDb() {
  try {
    const response = await fetch(`${url}/photos`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function addNewPhoto(photo) {
  try {
    const response = await fetch(`${url}/photos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ownerId: photo.ownerId,
        vote: photo.vote,
        photoUrl: photo.photoUrl,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
