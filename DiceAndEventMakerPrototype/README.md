### INSTRUCTIONS TO RUN
1. You must extract it if you would like to run it
2. Make sure index.html, main.js and styles.css are in the same folder
3. Open index and you can play with the Event Maker Module Prototype

### NOTES
1. some the text fields are only two here "Event Name" and "Event Description", The actual full module will have all the text fields.
2. I don't know if I should mention this but this is not reflective of the GUI
3. The software actually stores data in local storage. We may need to look into a DB or a temporary solution for data storage because we are limited to only about 10 MB to store user info in. What does this mean? it means that the images uploaded in order to create events will be saved but take up some space from the users local storage space (browser based / archeticture based).
4. The code is not pretty since I had to do a lot of spaghetti to get some functions to work (The event creation creates an invisible window in order to take in the form for somereason)
5. The full version should place the events in a graph (the structure we agreed on https://www.simplilearn.com/tutorials/data-structure-tutorial/graphs-in-data-structure#:~:text=A%20graph%20is%20a%20non,%2C(4%2C50%20%7D. )
6. The full version should also have a tab with all of the events

### BRIEF
1. The program has all the features of the Dice Roller Prototype
2. The bottom left is a button that says "EMaker" which stands for Event maker
3. Clicking the button prompts you to complete the form (you must fill in everything and add a picture)
4. Click the create event button and then after that you can see your event
5. Clicking the EMaker button again closes the form. 
6. After the creation, you can see a button that says delete along with a cropped thumbail of the image you uploaded. Clicking it deletes that event
7. reloading the page does nothing because data is stored for the user
8. Clicking the thumbnail hides the event info (probably should keep the title though