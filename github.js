const url = "https://api.github.com/users";
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
let loadingContainerEL = document.getElementById("loadingContainer");//loadingContaine


const profileContainer = document.getElementById("profileContainer"); // Ensure this exists in your HTML

const generateProfile = (profile) => {
  return `<div class="profile-box">
        <div class="top-section">
            <div class="left-side">
                <div class="avtar">
                    <img src="${profile.avatar_url}" alt="avatar">
                </div>
                <div class="self">
                    <h1>${profile.name || "No Name Provided"}</h1>
                    <h3>${profile.login}</h3>
                </div>
            </div>
            <a href="${profile.html_url}" target="_blank">
                <button class="btn">Check Profile</button>
            </a>
        </div>
        <div class="about">
            <h1>About</h1>
            <p>${profile.bio || "No bio available."}</p>
        </div>
        <div class="status">
            <div class="status-items">
                <h3>Followers</h3>
                <p>${profile.followers}</p>
            </div>
            <div class="status-items">
                <h3>Following</h3>
                <p>${profile.following}</p>
            </div>
            <div class="status-items">
                <h3>Repositories</h3>
                <p>${profile.public_repos}</p>
            </div>
        </div>
    </div>`;
};

const fetchProfile = async () => {
  const username = searchInput.value; // Remove extra spaces
  
  try {
    const res = await fetch(`${url}/${username}`);
    const data = await res.json();

    if (res.ok) {
      loadingContainerEL = ""; // Clear loading text
      profileContainer.innerHTML = generateProfile(data); // Pass the `data` object
    } else {
      loadingContainerEL.innerText = data.message; // Display error message from API
      loadingContainerEL.style.color = "red";
    }
  } catch (error) {
    console.log({ error });
    loadingContainerEL.innerText = "Something went wrong!";
    loadingContainerEL.style.color = "red";
  }
};

searchBtn.addEventListener("click", fetchProfile);
