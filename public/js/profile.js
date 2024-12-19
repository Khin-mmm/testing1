document.addEventListener("DOMContentLoaded", function () {
    const token = localStorage.getItem("token");
    const userProfile = document.getElementById("userProfile");
    const userProfileText = document.getElementById("userProfileText");

    const userProfileCallback = (responseStatus, responseData) => {
      console.log("responseStatus:", responseStatus);
      console.log("responseData:", responseData);

      if (responseStatus == 200) { 
        userProfileText.classList.add('d-none')
        const displayItem = document.createElement("div");
          displayItem.className =
            "col-xl-6 col-lg-12 col-md-12 col-sm-12 p-3 mx-auto";
          displayItem.innerHTML = `
            <div class="card">
                <div class="card-header">
                    <h3><strong>User Profile</strong></h3>
                </div>
                <div class="card-body">
                    <p class="card-text"><strong>Username:</strong> ${responseData.username}</p>
                    <p class="card-text"><strong>Email:</strong> ${responseData.email}</p>
                    <p class="card-text"><strong>Amount Donated:</strong> ${responseData.amount_donated}</p>
                    <p class="card-text"><strong>Rank:</strong> ${responseData.amount_donated <= 30 ? 'Seedling' : 'Sapling'}</p>
                </div>
            </div>
            `;
        userProfile.appendChild(displayItem);
      }
      else if (responseStatus == 404) { 
        userProfileText.classList.remove('d-none')
        userProfileText.innerHTML = responseData.message
      }
      else {
        userProfileText.classList.remove('d-none')
        userProfileText.innerHTML = "An error occurred."
      }
    }     

    print(window.currentUserId)

    const fetchUserData = () => {
        if (window.currentUserId) { 
            fetchMethod(currentUrl + "/api/users/" + window.currentUserId, userProfileCallback, "GET", null, token); // get user's profile data
        } else {
            console.error("currentUserId is not defined");
        }
    };

    if (window.currentUserId) { // if we have the currentuserid
        fetchUserData(); // execute the callback to fetch the profiles 
    } else { // if not, set window.onuseridset to a callback 
        window.onUserIdSet = fetchUserData;
    }   
});