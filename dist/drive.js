// document.getElementsByClassName("x9f619 xjbqb8w x78zum5 x15mokao x1ga7v0g x16uus16 xbiv7yw xwib8y2 x1y1aw1k x1uhb9sk x1plvlek xryxfnj x1c4vz4f x2lah0s xdt5ytf xqjyukv x1qjc9v5 x1oa3qoh x1nhvcw1")[0].remove();

function logChanges() {
    const suggestedList = document.querySelectorAll(".x9f619.xjbqb8w.x78zum5.x15mokao.x1ga7v0g.x16uus16.xbiv7yw.xwib8y2.x1y1aw1k.x1uhb9sk.x1plvlek.xryxfnj.x1c4vz4f.x2lah0s.xdt5ytf.xqjyukv.x1qjc9v5.x1oa3qoh.x1nhvcw1");
    const suggestedText = document.getElementsByClassName("x9f619 xjbqb8w x78zum5 x15mokao x1ga7v0g x16uus16 xbiv7yw xw7yly9 xod5an3 xpdmqnj x1g0dm76 x1uhb9sk x1plvlek xryxfnj x1c4vz4f x2lah0s xdt5ytf xqjyukv x1cy8zhl x1oa3qoh x1nhvcw1")[0];
    const seeAllSuggestions = document.getElementsByClassName("x9f619 xjbqb8w x78zum5 x15mokao x1ga7v0g x16uus16 xbiv7yw xv54qhq xf7dkkf xsag5q8 xz9dl7a x1n2onr6 x1plvlek xryxfnj x1c4vz4f x2lah0s xdt5ytf xqjyukv x1qjc9v5 x1oa3qoh x1nhvcw1")[0];

    if (suggestedList != undefined && suggestedText != undefined && seeAllSuggestions != undefined) {
        for (let element of suggestedList) {
            if (element.className == "x9f619 xjbqb8w x78zum5 x15mokao x1ga7v0g x16uus16 xbiv7yw xwib8y2 x1y1aw1k x1uhb9sk x1plvlek xryxfnj x1c4vz4f x2lah0s xdt5ytf xqjyukv x1qjc9v5 x1oa3qoh x1nhvcw1") {
                element.remove();
            }
        }
        suggestedText.remove();
        seeAllSuggestions.remove();
    }

    if (chrome.runtime != undefined) {
        const section = document.querySelector("._ac78");
        const numbers = document.getElementsByClassName("html-span xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1hl2dhg x16tdsg8 x1vvkbs");
        if (numbers != undefined) {
            const followingNumber = numbers[3].innerHTML;
            const followersNumber = numbers[2].innerHTML;
            chrome.runtime.sendMessage({ action: 'instagramNumbers', followingNumber: followingNumber, followersNumber: followersNumber })
            if (section != null && section != undefined) {

                const sectionName = section.children[0].innerHTML

                const usernames = document.getElementsByClassName('_ap3a _aaco _aacw _aacx _aad7 _aade');

                let following = [];
                let followers = [];

                if (usernames.length > 0) {
                    switch (sectionName) {
                        case "Following":
                            following = [];
                            for (let i = 0; i < usernames.length; i++) {
                                following.push(usernames[i].innerHTML);
                            }
                            chrome.runtime.sendMessage({ action: "instagramData", usernamesText: following, sectionName: sectionName });
                            break;
                        case "Followers":
                            followers = [];
                            for (let i = 0; i < usernames.length; i++) {
                                followers.push(usernames[i].innerHTML);
                            }
                            chrome.runtime.sendMessage({ action: "instagramData", usernamesText: followers, sectionName: sectionName });
                            break;
                    }
                }
            }
        }
    }
}

const observerOptions = {
    childList: true,
    subtree: true,
};

const observer = new MutationObserver(logChanges);
observer.observe(document, observerOptions);

//x7r02ix x15fl9t6 x1yw9sn2 x1evh3fb x4giqqa xb88tzc xw2csxc x1odjw0f x5fp0pe following list
//x7r02ix x15fl9t6 x1yw9sn2 x1evh3fb x4giqqa xb88tzc xw2csxc x1odjw0f x5fp0pe