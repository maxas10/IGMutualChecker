let latestInstagramData;
let followers = [];
let following = [];
let followersNumber;
let followingNumber;
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "instagramData") {
    latestInstagramData = message.usernamesText;

    switch (message.sectionName) {
      case "Following":
        following = message.usernamesText;
        break;
      case "Followers":
        followers = message.usernamesText;
        break;
      default:
        console.log("Unknown section name: " + message.sectionName);
        break;
    }
  }
  if(message.action === "instagramNumbers") {
    followingNumber = message.followingNumber;
    followersNumber = message.followersNumber;
  }
  if (message.action === "getInstagramData") {
    sendResponse({followers: followers, following: following, followersNumber: followersNumber, followingNumber: followingNumber}); 
  }
});