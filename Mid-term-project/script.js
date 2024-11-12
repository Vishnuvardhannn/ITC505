// Story object with an additional step at the end
const story = {
    start: {
        text: "You land on a mysterious planet. Do you want to explore the area or stay near the ship?",
        choices: ["Explore the Area", "Stay Near the Ship"],
        consequence: ["exploreArea", "stayNearShip"],
        image: "mysteriousplanet.jpeg",
    },
    exploreArea: {
        text: "You see an alien village. Do you approach the aliens or observe from a distance?",
        choices: ["Approach Aliens", "Observe from Distance"],
        consequence: ["approachAliens", "observeFromDistance"],
        image: "planet.jpeg",
    },
    stayNearShip: {
        text: "You receive a distress signal from another part of the planet. Do you investigate or stay put?",
        choices: ["Investigate Signal", "Stay Put"],
        consequence: ["investigateSignal", "stayPut"],
        image: "investigate.jpeg",
    },
    approachAliens: {
        text: "The aliens offer you a mysterious artifact. Do you accept it or decline?",
        choices: ["Accept Artifact", "Decline Artifact"],
        consequence: ["acceptArtifact", "declineArtifact"],
        image: "alienartifact.jpeg",
    },
    observeFromDistance: {
        text: "The aliens notice you. Do you run back to the ship or hide?",
        choices: ["Run to Ship", "Hide"],
        consequence: ["runToShip", "hide"],
        image: "aliensnoticed.jpeg",
    },
    acceptArtifact: {
        text: "You gain magical powers. Do you use them to help the aliens or explore deeper mysteries?",
        choices: ["Help Aliens", "Explore Mysteries"],
        consequence: ["helpAliens", "exploreMysteries"],
        image: "superhero.jpeg",
    },
    declineArtifact: {
        text: "The aliens guide you safely. Do you share knowledge with Earth or keep it secret?",
        choices: ["Share Knowledge", "Keep Secret"],
        consequence: ["shareKnowledge", "keepSecret"],
        image: "safereturn.jpg",
    },
    helpAliens: {
        text: "You become a legend among the aliens, aiding their civilization. The end.",
        choices: [],
        consequence: [],
        image: "legend.jpeg",
    },
    exploreMysteries: {
        text: "You discover a hidden temple with advanced technology. The end.",
        choices: [],
        consequence: [],
        image: "hiddentemple.jpeg",
    },
    shareKnowledge: {
        text: "Earth gains advanced technology, sparking a new era. The end.",
        choices: [],
        consequence: [],
        image: "newera.jpeg",
    },
    keepSecret: {
        text: "You decide to keep the secret, living with mysterious memories. The end.",
        choices: [],
        consequence: [],
        image: "secretmemories.jpeg",
    },
    runToShip: {
        text: "You flee safely but wonder what could have been. The end.",
        choices: [],
        consequence: [],
        image: "escapetoship.jpeg",
    },
    hide: {
        text: "The aliens capture you, but you become a key diplomat. The end.",
        choices: [],
        consequence: [],
        image: "diplomat.jpeg",
    },
    investigateSignal: {
        text: "You find survivors. Do you build a new base or repair your ship?",
        choices: ["Build Base", "Repair Ship"],
        consequence: ["buildBase", "repairShip"],
        image: "survivors.jpeg",
    },
    stayPut: {
        text: "A meteor shower starts. Do you take off or take shelter?",
        choices: ["Take Off", "Take Shelter"],
        consequence: ["takeOff", "takeShelter"],
        image: "meteorshower.jpeg",
    },
    buildBase: {
        text: "You build a base and become the planet's new leader. The end.",
        choices: [],
        consequence: [],
        image: "newleader.jpeg",
    },
    repairShip: {
        text: "You repair the ship and take off safely. The end.",
        choices: [],
        consequence: [],
        image: "takeoff.jpeg",
    },
    takeOff: {
        text: "You escape the meteor shower, heading home. The end.",
        choices: [],
        consequence: [],
        image: "escapetoearth.jpeg",
    },
    takeShelter: {
        text: "You are stranded but find hidden treasures. The end.",
        choices: [],
        consequence: [],
        image: "stranded.jpeg",
    },
    // New Additional Ending Step - Extra Step
    finalStep: {
        text: "As the new leader of the planet, you start a new civilization that thrives for centuries. The end.",
        choices: [],
        consequence: [],
        image: "newcivilization.jpeg",
    }
};

// Modify the choice from 'buildBase' to link to this new final step
story.buildBase = {
    text: "You build a base and become the planet's new leader. Would you like to rule for eternity?",
    choices: ["Rule Eternally", "Leave"],
    consequence: ["finalStep", "takeOff"],  // Now leads to finalStep
    image: "newleader.jpeg",
};

let currentStage = "start";

function startGame() {
    currentStage = "start";
    updatePage();
}

function updatePage() {
    const stage = story[currentStage];
    document.getElementById("story-text").textContent = stage.text;
    document.getElementById("story-image").src = stage.image;
    const choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = "";

    stage.choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.onclick = () => {
            currentStage = stage.consequence[index];
            updatePage();
        };
        choicesDiv.appendChild(button);
    });

    if (stage.choices.length === 0) {
        const restartButton = document.createElement("button");
        restartButton.textContent = "Restart";
        restartButton.onclick = startGame;
        choicesDiv.appendChild(restartButton);
    }
}

startGame();
