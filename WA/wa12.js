document.querySelector("#js-show-art").addEventListener("click", getRandomArtwork);
document.querySelector("#js-show-medium-date").addEventListener("click", showMediumAndDate);

let currentArtwork = null;
const objectListURL = "https://collectionapi.metmuseum.org/public/collection/v1/objects";
const objectDetailsURL = id => `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`;
let objectIDs = [];

async function getObjectIDs() {
  try {
    const response = await fetch(objectListURL);
    objectIDs = (await response.json()).objectIDs;
  } catch (error) {
    console.error("Failed to load object IDs:", error);
    alert("Unable to fetch artwork list.");
  }
}

async function getRandomArtwork() {
  if (objectIDs.length === 0) await getObjectIDs();
  const randomID = objectIDs[Math.floor(Math.random() * objectIDs.length)];
  try {
    const response = await fetch(objectDetailsURL(randomID));
    const data = await response.json();
    if (!data.title || !data.primaryImageSmall) return getRandomArtwork();
    currentArtwork = data;
    displayArtInfo(`${data.title} by ${data.artistDisplayName || "Unknown Artist"}`);
    displayArtImage(data.primaryImageSmall);
    displayArtDetail(""); 
  } catch (error) {
    console.error("Error loading artwork:", error);
    alert("Unable to fetch artwork.");
  }
}

function showMediumAndDate() {
  if (!currentArtwork) return;
  displayArtDetail(`Medium: ${currentArtwork.medium || "Medium unknown"} | Era: ${currentArtwork.objectDate || "Date unknown"}`);
}

function displayArtInfo(text) {
  document.querySelector("#js-art-info").textContent = text;
}

function displayArtDetail(text) {
  document.querySelector("#js-art-detail").textContent = text;
}

function displayArtImage(url) {
  document.querySelector("#js-art-image").src = url;
}

getObjectIDs().then(getRandomArtwork);
