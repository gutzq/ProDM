const swordImg = document.getElementById('sword');
const swordContainer = document.getElementById('sword-container');

let isSwordDropped = false;

swordImg.addEventListener('click', handleSwordClick);

function handleSwordClick() {
  if (isSwordDropped) {
    retractSword();
  } else {
    dropSword();
  }
}

function dropSword() {
  swordImg.classList.add('dropped');
  isSwordDropped = true;
}

function retractSword() {
  swordImg.classList.remove('dropped');
  swordImg.classList.add('retracted');
  setTimeout(() => {
    swordImg.classList.remove('retracted');
    isSwordDropped = false;
  }, 1000);
}

const pullTab = document.getElementById('pulltab-container');

let isTabOpen = false;

pullTab.addEventListener('click', handleTabClick);

function handleTabClick() {
  if (isTabOpen) {
    closeTab();
  } else {
    openTab();
  }
}

function openTab() {
  pullTab.classList.add('open');
  isTabOpen = true;
}

function closeTab() {
  pullTab.classList.remove('open');
  isTabOpen = false;
}


const sceneMenuContainer = document.getElementById('scene-menu-container');

function handleTabClick() {
  if (isTabOpen) {
    closeTabAndMenu();
  } else {
    openTabAndMenu();
  }
}

function openTabAndMenu() {
  pullTab.classList.add('open');
  sceneMenuContainer.classList.add('open'); 
  isTabOpen = true;
}

function closeTabAndMenu() {
  pullTab.classList.remove('open');
  sceneMenuContainer.classList.remove('open');
  isTabOpen = false;
}


document.addEventListener('DOMContentLoaded', () => {
    const dragonButton = document.getElementById('dragon-button');
    const diceContainer = document.getElementById('dice-container');

    dragonButton.addEventListener('click', () => {
        // Toggle the "active" class on click
        dragonButton.classList.toggle('active');

        // Toggle the visibility of the dice container
        diceContainer.classList.toggle('hidden');
        diceContainer.classList.toggle('visible');
    });
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("event-maker-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Form submission handling
var form = document.getElementById("event-form");
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission

  // Retrieve form data
  var title = document.getElementById("title").value;
  var narration = document.getElementById("narration").value;
  var image = document.getElementById("image").files[0];

  // Close the modal
  modal.style.display = "none";
});


let selectedDice = {};

function addDie(die, selectedDice, document) {
  if (!selectedDice[die]) {
      selectedDice[die] = 1;
  } else {
      selectedDice[die]++;
  }
  updateSelectedDiceDisplay(selectedDice, document);
  document.getElementById("rollButton").style.display = "block";
}


function updateSelectedDiceDisplay() {
    let selectedDiceDisplay = [];
    for (const die in selectedDice) {
        selectedDiceDisplay.push(`${selectedDice[die]}${die}`);
    }
    document.getElementById("result").innerText = `Rolling: ${selectedDiceDisplay.join(' + ')}`;
}

function rollDice() {
  let totalResult = 0;
  for (const die in selectedDice) {
      switch (die) {
          case 'D4':
              totalResult += rollNDice(selectedDice[die], 4);
              break;
          case 'D6':
              totalResult += rollNDice(selectedDice[die], 6);
              break;
          case 'D8':
              totalResult += rollNDice(selectedDice[die], 8);
              break;
          case 'D10':
              totalResult += rollNDice(selectedDice[die], 10);
              break;
          case 'D12':
              totalResult += rollNDice(selectedDice[die], 12);
              break;
          case 'D20':
              totalResult += rollNDice(selectedDice[die], 20);
              break;
          case 'D100':
              totalResult += rollNDice(selectedDice[die], 100);
              break;
          default:
              break;
      }
  }
  document.getElementById("result").innerText = `Total Result: ${totalResult}`;
  selectedDice = {};
  document.getElementById("rollButton").style.display = "none";
}

function rollNDice(n, sides) {
  let result = 0;
  for (let i = 0; i < n; i++) {
      result += Math.floor(Math.random() * sides) + 1;
  }
  return result;
}



const plusButton = document.getElementById('plus-button');
const eventCardsContainer = document.getElementById('event-cards-container');

plusButton.addEventListener('click', () => {
  const eventCardsImg = document.createElement('img');
  eventCardsImg.src = 'assets/eventCards.png';
  eventCardsImg.alt = 'Event Cards';

  eventCardsContainer.innerHTML = '';
  eventCardsContainer.appendChild(eventCardsImg);
  eventCardsContainer.style.display = eventCardsContainer.style.display === 'none' ? 'block' : 'none';
});