document.addEventListener("DOMContentLoaded", () => {
    setInterval(() => {
        chrome.runtime.sendMessage({ action: "getInstagramData" }, (response) => {
            const followers = response.followers;
            const following = response.following;
            const followersNumber = response.followersNumber;
            const followingNumber = response.followingNumber;

            sortAlphabetically(followers);
            sortAlphabetically(following);

            document.getElementById("followerlist").innerHTML = "";
            document.getElementById("followinglist").innerHTML = "";

            // if ((followersNumber > followers.length || followersNumber < followers.length) || (followingNumber > following.length || followingNumber < following.length)) {
            //     document.getElementById('error').innerHTML = "Instagram data inaccuracy, Please keep scrolling or reload the page"
            // }
            document.getElementById("followerstitle").innerHTML = "Followers (" + followers.length + " shown/" + followersNumber + ")";
            document.getElementById("followingtitle").innerHTML = "Following (" + following.length + " shown/" + followingNumber + ")";

            const biggerCount = followers.length > following.length ? followers.length : following.length;
            for (let i = 0; i < biggerCount; i++) {
                if (followers[i] != undefined) {
                    if (following.includes(followers[i])) {
                        makeGreenName(followers[i], document.getElementById("followerlist"));
                    } else {
                        makeRedName(followers[i], document.getElementById("followerlist"));
                    }
                }
                if (following[i] != undefined) {
                    if (followers.includes(following[i])) {
                        makeGreenName(following[i], document.getElementById("followinglist"));
                    } else {
                        makeRedName(following[i], document.getElementById("followinglist"));
                    }
                }
            }

            function makeRedName(name, section) {
                const newText = document.createElement('li')
                newText.innerHTML = name
                newText.className = "red"
                section.appendChild(newText)
            }
            function makeGreenName(name, section) {
                const newText = document.createElement('li')
                newText.innerHTML = name
                newText.className = "green"
                section.appendChild(newText)
            }
            // for (let username in followers) {
            //     const newText = document.createElement('li')
            //     newText.innerHTML = followers[username]
            //     document.getElementById("followerlist").appendChild(newText)
            // }
            // for (let username in following) {
            //     const newText = document.createElement('li')
            //     newText.innerHTML = following[username]
            //     document.getElementById("followinglist").appendChild(newText)
            // }
        });
    }, 300)
});

function sortAlphabetically(data) {
    data.sort((a, b) => a.localeCompare(b))
}