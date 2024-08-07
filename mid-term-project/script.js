const story = {
    start: {
        text: "You find yourself at the entrance of a mysterious mansion. What do you do?",
        choices: ["Enter the mansion", "Walk away"],
        consequence: ["enterMansion", "walkAway"],
        image: "https://static1.bigstockphoto.com/3/8/9/large1500/98358920.jpg",
    },
    enterMansion: {
        text: "As you enter, the door slams shut behind you. You hear eerie whispers in the hallway. What do you do?",
        choices: ["Investigate whispers", "Look for an exit"],
        consequence: ["investigateWhispers", "lookForExit"],
        image: "https://ik.imagekit.io/storybird/images/a8f04694-4d8b-44e1-a5e4-427ebd8c1abc/0_230509537.png",
    },
    walkAway: {
        text: "You decide to leave the mansion and return another day. The end.",
        choices: ["Restart"],
        consequence: ["start"],
        image: "https://www.pixilart.com/images/art/cfbcd4336297cdd.png",
    },
    investigateWhispers: {
        text: "You follow the whispers and encounter a ghostly figure. What do you do?",
        choices: ["Confront the ghost", "Run away"],
        consequence: ["confrontGhost", "runAway"],
        image: "https://otherworldlyoracle.com/wp-content/uploads/2018/06/ghost-2857971_960_720.jpg",
    },
    lookForExit: {
        text: "You search for an exit and discover a hidden staircase going down. Do you descend?",
        choices: ["Descend the staircase", "Stay on current floor"],
        consequence: ["descendStaircase", "stayOnFloor"],
        image: "https://images.everydayhealth.com/images/healthy-living/fitness/benefits-of-going-down-stairs-722x406.jpg?sfvrsn=89b684b1_0",
    },
    confrontGhost: {
        text: "You confront the ghost and help it find peace. The end.",
        choices: ["Restart"],
        consequence: ["start"],
        image: "https://www.pixilart.com/images/art/cfbcd4336297cdd.png",
    },
    runAway: {
        text: "You run away from the ghost and find a secret passage. What do you do?",
        choices: ["Enter the passage", "Keep running"],
        consequence: ["enterPassage", "keepRunning"],
        image: "https://th.bing.com/th/id/OIP.DGcINh5VlectVtrCr6NHqAHaE7?w=247&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
    },
    descendStaircase: {
        text: "You descend the staircase and discover a hidden chamber. What do you find inside?",
        choices: ["Ancient artifact", "Treasure chest"],
        consequence: ["findArtifact", "findTreasure"],
        image: "https://wooderice.com/wp-content/uploads/2020/06/treasure-chest.jpg",
    },
    stayOnFloor: {
        text: "You stay on the current floor and find a library with ancient books. What do you do?",
        choices: ["Read the books", "Leave the library"],
        consequence: ["readBooks", "leaveLibrary"],
        image: "https://th.bing.com/th?id=OIP.ojYwXPuLQyJ49D4za7jWegHaDc&w=349&h=163&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2",
    },
    enterPassage: {
        text: "You enter the passage and discover a hidden garden. What do you find there?",
        choices: ["Rare flowers", "Statue of a ghost"],
        consequence: ["findFlowers", "findStatue"],
        image: "https://i.pinimg.com/originals/2f/4f/47/2f4f47f58bad3ab76e515854d347f860.jpg",
    },
    keepRunning: {
        text: "You keep running and find yourself outside the mansion. You escaped. The end.",
        choices: ["Restart"],
        consequence: ["start"],
        image: "https://www.pixilart.com/images/art/cfbcd4336297cdd.png",
    },
    findArtifact: {
        text: "You find an ancient artifact that grants you a mysterious power. What do you do with it?",
        choices: ["Use its power", "Leave it behind"],
        consequence: ["usePower", "leaveArtifact"],
        image: "https://x-default-stgec.uplynk.com/ausw/slices/f37/51d61e80c20d4f009f311dfdef7a8a31/f37a01dcff574f45aa7b12fb9c0397f7/poster_8b335f17e83048dd829b5ef234c26c10.jpg",
    },
    findTreasure: {
        text: "You find a treasure chest filled with riches. What will you do with the treasure?",
        choices: ["Take the treasure", "Leave it behind"],
        consequence: ["takeTreasure", "leaveTreasure"],
        image: "https://th.bing.com/th/id/OIP.NKfaudsHznNY6CIg7yPWggHaEK?w=273&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
    },
    readBooks: {
        text: "You read ancient books and gain forbidden knowledge. What do you do with your newfound knowledge?",
        choices: ["Use it wisely", "Forget what you read"],
        consequence: ["useKnowledge", "forgetBooks"],
        image: "https://lauragraceweldon.files.wordpress.com/2021/04/a-1.jpg",
    },
    leaveLibrary: {
        text: "You leave the library and stumble upon a hidden passage to the mansion's history. What do you learn?",
        choices: ["Dark secrets", "Heroic tales"],
        consequence: ["learnSecrets", "learnTales"],
        image: "https://th.bing.com/th/id/R.213609ecc16edb509d0a138732ecbaae?rik=No1i0AkNwsyX%2fg&pid=ImgRaw&r=0",
    },
    findFlowers: {
        text: "You find rare flowers that only bloom in moonlight. What do you do with them?",
        choices: ["Take them with you", "Leave them in the garden"],
        consequence: ["takeFlowers", "leaveFlowers"],
        image: "https://www.northshoremahomeprograms.com/wp-content/uploads/2018/01/house3-700x467.jpeg",
    },
    findStatue: {
        text: "You find a statue of a ghost that eerily resembles the one you encountered. What significance does it hold?",
        choices: ["Spirit guardian", "Cursed artifact"],
        consequence: ["spiritGuardian", "cursedArtifact"],
        image: "https://th.bing.com/th/id/OIGP.9CCxhxvi1PInbZEgTyqZ?w=270&h=270&c=6&r=0&o=5&pid=ImgGn",
    },
    usePower: {
        text: "You use the artifact's power to banish evil spirits from the mansion. The end.",
        choices: ["Restart"],
        consequence: ["start"],
        image: "https://www.pixilart.com/images/art/cfbcd4336297cdd.png",
    },
    leaveArtifact: {
        text: "You leave the artifact behind and return to the mansion's entrance. The end.",
        choices: ["Restart"],
        consequence: ["start"],
        image: "https://www.pixilart.com/images/art/cfbcd4336297cdd.png",
    },
    takeTreasure: {
        text: "You take the treasure and become the new owner of the haunted mansion. The end.",
        choices: ["Restart"],
        consequence: ["start"],
        image: "https://www.pixilart.com/images/art/cfbcd4336297cdd.png",
    },
    leaveTreasure: {
        text: "You leave the treasure behind and exit the mansion with newfound wisdom. The end.",
        choices: ["Restart"],
        consequence: ["start"],
        image: "https://www.pixilart.com/images/art/cfbcd4336297cdd.png",
    },
    useKnowledge: {
        text: "You use the forbidden knowledge to protect the mansion from future intruders. The end.",
        choices: ["Restart"],
        consequence: ["start"],
        image: "https://www.pixilart.com/images/art/cfbcd4336297cdd.png",
    },
    forgetBooks: {
        text: "You try to forget what you read, but the knowledge haunts your dreams. The end.",
        choices: ["Restart"],
        consequence: ["start"],
        image: "https://www.pixilart.com/images/art/cfbcd4336297cdd.png",
    },
    learnSecrets: {
        text: "You learn dark secrets about the mansion's past. What will you do with this information?",
        choices: ["Expose the truth", "Keep it hidden"],
        consequence: ["exposeTruth", "hideSecrets"],
        image: "https://live.staticflickr.com/3944/14917632324_142735ce55_b.jpg",
    },
    learnTales: {
        text: "You learn heroic tales of those who once lived in the mansion. How will you honor their legacy?",
        choices: ["Create a memorial", "Carry on their legacy"],
        consequence: ["createMemorial", "carryLegacy"],
        image: "https://fastly.4sqi.net/img/general/600x600/26369519_2WJf9KZjRwoDiB0trtTRujzKHnZvV9qukRaOg0YCzYU.jpg",
    },
    takeFlowers: {
        text: "You take the rare flowers and cultivate them in your garden. They bring peace to your home. The end.",
        choices: ["Restart"],
        consequence: ["start"],
        image: "https://www.pixilart.com/images/art/cfbcd4336297cdd.png",
    },
    leaveFlowers: {
        text: "You leave the rare flowers in the garden, ensuring their beauty flourishes for years to come. The end.",
        choices: ["Restart"],
        consequence: ["start"],
        image: "https://www.pixilart.com/images/art/cfbcd4336297cdd.png",
    },
    spiritGuardian: {
        text: "You believe the statue is a spirit guardian, protecting the mansion from evil. The end.",
        choices: ["Restart"],
        consequence: ["start"],
        image: "https://www.pixilart.com/images/art/cfbcd4336297cdd.png",
    },
    cursedArtifact: {
        text: "You fear the statue is a cursed artifact, and decide to leave the mansion immediately. The end.",
        choices: ["Restart"],
        consequence: ["start"],
        image: "https://www.pixilart.com/images/art/cfbcd4336297cdd.png",
    },
    exposeTruth: {
        text: "You expose the mansion's dark secrets to the world, bringing closure to its troubled history. The end.",
        choices: ["Restart"],
        consequence: ["start"],
        image: "https://www.pixilart.com/images/art/cfbcd4336297cdd.png",
    },
    hideSecrets: {
        text: "You keep the mansion's dark secrets hidden, preserving its mysterious allure. The end.",
        choices: ["Restart"],
        consequence: ["start"],
        image: "https://www.pixilart.com/images/art/cfbcd4336297cdd.png",
    },
    createMemorial: {
        text: "You create a memorial to honor the heroic souls who once lived in the mansion. The end.",
        choices: ["Restart"],
        consequence: ["start"],
        image: "https://www.pixilart.com/images/art/cfbcd4336297cdd.png",
    },
    carryLegacy: {
        text: "You carry on the legacy of the mansion's heroes, ensuring their bravery is never forgotten. The end.",
        choices: ["Restart"],
        consequence: ["start"],
        image: "https://www.pixilart.com/images/art/cfbcd4336297cdd.png",
    },
};

let currentStage = story.start;

function updatePage() {
    // Update story text
    document.getElementById("story").innerHTML = currentStage.text;

    // Update image
    document.getElementById(
        "image"
    ).innerHTML = `<img src="${currentStage.image}" alt="Story Image">`;

    // Clear previous choices
    document.getElementById("choices").innerHTML = "";

    // Display choices
    currentStage.choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.addEventListener("click", () => {
            currentStage = story[currentStage.consequence[index]];
            updatePage();
        });
        document.getElementById("choices").appendChild(button);
    });

    // Check if it's the end of the story to show the restart button
    if (currentStage.consequence[0] === "start") {
        endGame();
    }
}

function endGame() {
    // Display final message and restart button
    document.getElementById("story").innerHTML =
        "The end. What will you do next?";
    document.getElementById("image").innerHTML = "";

    const restartButton = document.createElement("button");
    restartButton.textContent = "Restart";
    restartButton.addEventListener("click", () => {
        currentStage = story.start;
        updatePage();
    });

    document.getElementById("choices").appendChild(restartButton);
}

// Initial page setup
updatePage();