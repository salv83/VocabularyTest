# VocabularyTest

Write an Application that lets the user manage vocabulary for a foreign language to be learned. It consists of a Form where the user can insert two words, one for the native language (let's say English) and one for the foreign language (let's say German). The vocabulary pairs are appended to a List and can be deleted.

At any time the user can start a Test mode (add a button next to the list for it) which randomly chooses 20 words from the List in a random order. The Test mode then only shows one word at a time together with an input field where the user needs to insert the translated word. Submitting the translated word then shows the next word. The progress in the Test is indicated through a progress bar on top of the Test view. If no word is left, the Application will go to the Result view.

When the Test is finished, the Application calculates the results (hit ratio) and renders a Result view that shows the percentage of hits and a table showing all tested words together with the translation and the user input. Every row should have a visual indication if the word was a hit or a miss. With a Back button the user can return to the List.

## Link

http://vocabularytest.my-board.org/

The application is composed by three components:
- Learning component, on the left side there is the form where the user can add a new translation to the list, the Save button is initially disabled, to enable it the user has to insert at least one letter in both form fields. On the right there is a table where are displayed all the translation inserted by the user, as default the list is filled with 18 items. On the right top of the component there is the button that allows to the user to access to the Test Mode, it is initially disabled and it will be enabled only when the list contains more than 20 items. 

- Test Component, it display the progress bar on the top and the form in the center of the page, the form has a disabled input field that is the word that the user should translate and another fields  where the user should insert the translation. Once the user click on save the compoenent save the translation inserted and check if the translation provided by the user is the same that has been inserted in the Learning component, the result of this check is stored in the structure called 'answer' that is an array of object structured like this [{'native_word', 'translated_word', 'word_provided_by_the_user', 'result_of_the_check'}]. At the end of the test this structure is passed to the Result Component.

- Result Component, it display on the top the pecentage of the right answers and the button to go back to the list. And to the bottom there is the table that displays the structure 'answer' provided by the Test Component. 
