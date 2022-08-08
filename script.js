//use formContent to change from input field form to mad lib story.
  let formContent = document.getElementById("inputs");

//first see story button action:
function run(){

//variables for inputs below:
  let adj1 = document.getElementById("adj1").value;
  let adj2 = document.getElementById("adj2").value;
  let color = document.getElementById("color").value;
  let verb1 = document.getElementById("verb1").value;
  let adj3 = document.getElementById("adj3").value;
  let veg = document.getElementById("veg").value;
  let ex1 = document.getElementById("ex1").value;
  let verb2 = document.getElementById("verb2").value;
  let verb3 = document.getElementById("verb3").value;
  let noun1 = document.getElementById("noun1").value;
  let verb4 = document.getElementById("verb4").value;
  let place = document.getElementById("place").value;
  let adj4 = document.getElementById("adj4").value;
  let num = document.getElementById("num").value;
  let verb5 = document.getElementById("verb5").value;
  let noun2 = document.getElementById("noun2").value;
  let noun3 = document.getElementById("noun3").value;
  let noun4 = document.getElementById("noun4").value;
  let veg2 = document.getElementById("veg2").value;
  let person = document.getElementById("person").value;
  let ex2 = document.getElementById("ex2").value;
  let adj5 = document.getElementById("adj5").value;
  let noun5 = document.getElementById("noun5").value;
//update form:
  formContent.remove();
  let title = document.createElement("h3");
  title.setAttribute('id', 'title');
  title.textContent = "Mr. Snowman!";
  const container = document.getElementById("container");
  container.style.flexDirection = "column";
  container.appendChild(title); 
  let madLib = document.createElement("p");
  container.appendChild(madLib); 
  madLib.setAttribute('id', 'madLib');
  madLib.textContent = `Let's build a snowman! First we need to have a really ${adj1} 
  snowstorm, of course on a ${adj2} day. Watching all that ${color} snow fall makes me ${verb1} 
  for a bowl of ${adj3} ${veg}! ${ex1} it's still ${verb2} and there's a lot of it! Let's go! Next is ${verb3}
  to go out in the cold. Once that is done, we need to get busy. We make a ${noun1} and ${verb4} it in the ${place}.
  It gets so ${adj4} we can't roll it anymore. Then we do ${num} more and stack them on top of each other.
  We ${verb5} for ${noun2} in the driveway for the ${noun2}, eyes and ${noun3}.
  Mom gives us a scarf, hat, and ${veg2} to complete Mr. ${person}!
  ${ex2} he's done! 
  Finally. Now the best part, ${adj5} ${noun5}.`;
  const snowMan = document.createElement("img");
  container.appendChild(snowMan);
  snowMan.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkK3EbAmCck7DxbHvaZwIEBiR74dh9gRAvzQ&usqp=CAU");
  snowMan.setAttribute('id', 'snowman');
  document.getElementById('snowman').style.boxShadow = "5px 5px 5px 5px darkblue";
  document.getElementById('snowman').style.borderRadius = "15px";
  const nextButton = document.createElement("button");
  nextButton.setAttribute('id', 'next');
  nextButton.style.marginTop = "2em";
  nextButton.textContent = "Next Story";
  nextButton.onclick = function next(){
  //first clear form of previous content
    snowman.remove();
    madLib.remove();
    title.remove();
    nextButton.remove();
    //set-up new inputs
    let newForm = document.createElement("form");
    newForm.setAttribute('id', 'inputs');
    container.appendChild(newForm);
  
    let row1 = document.createElement('div');
    row1.setAttribute('id', 'row');
    newForm.appendChild(row1);
    let adjOneLabel = document.createElement("label"); 
    adjOneLabel.setAttribute('for', 'adjOne');
    adjOneLabel.textContent = 'Adjective';
    row1.appendChild(adjOneLabel);
    let adjOneInput = document.createElement('input');
    adjOneInput.setAttribute('type', 'text');
    adjOneInput.setAttribute('id', 'adjOne');
    adjOneInput.setAttribute('name', 'adjOne');
    row1.appendChild(adjOneInput);
    
    let row2 = document.createElement('div');
    row2.setAttribute('id', 'row');
    newForm.appendChild(row2);
    let adjTwoLabel = document.createElement("label"); 
    adjTwoLabel.setAttribute('for', 'adjTwo');
    adjTwoLabel.textContent = 'Adjective';
    row2.appendChild(adjTwoLabel);
    let adjTwoInput = document.createElement('input');
    adjTwoInput.setAttribute('type', 'text');
    adjTwoInput.setAttribute('id', 'adjTwo');
    adjTwoInput.setAttribute('name', 'adjTwo');
    row2.appendChild(adjTwoInput);  

    let row3 = document.createElement('div');
    row3.setAttribute('id', 'row');
    newForm.appendChild(row3);
    let birdLabel = document.createElement("label"); 
    birdLabel.setAttribute('for', 'bird');
    birdLabel.textContent = 'Type of Bird';
    row3.appendChild(birdLabel);
    let birdInput = document.createElement('input');
    birdInput.setAttribute('type', 'text');
    birdInput.setAttribute('id', 'bird');
    birdInput.setAttribute('name', 'bird');
    row3.appendChild(birdInput);  
  
    let row4 = document.createElement('div');
    row4.setAttribute('id', 'row');
    newForm.appendChild(row4);
    let roomLabel = document.createElement("label"); 
    roomLabel.setAttribute('for', 'room');
    roomLabel.textContent = 'Room';
    row4.appendChild(roomLabel);
    let roomInput = document.createElement('input');
    roomInput.setAttribute('type', 'text');
    roomInput.setAttribute('id', 'room');
    roomInput.setAttribute('name', 'room');
    row4.appendChild(roomInput);  

    let row5 = document.createElement('div');
    row5.setAttribute('id', 'row');
    newForm.appendChild(row5);
    let vptLabel = document.createElement("label"); 
    vptLabel.setAttribute('for', 'vpt');
    vptLabel.textContent = 'Verb (past tense)';
    row5.appendChild(vptLabel);
    let vptInput = document.createElement('input');
    vptInput.setAttribute('type', 'text');
    vptInput.setAttribute('id', 'vpt');
    vptInput.setAttribute('name', 'vpt');
    row5.appendChild(vptInput);

    let row6 = document.createElement('div');
    row6.setAttribute('id', 'row');
    newForm.appendChild(row6);
    let verbOneLabel = document.createElement("label"); 
    verbOneLabel.setAttribute('for', 'verbOne');
    verbOneLabel.textContent = 'Verb';
    row6.appendChild(verbOneLabel);
    let verbOneInput = document.createElement('input');
    verbOneInput.setAttribute('type', 'text');
    verbOneInput.setAttribute('id', 'verbOne');
    verbOneInput.setAttribute('name', 'verbOne');
    row6.appendChild(verbOneInput);

    let row7 = document.createElement('div');
    row7.setAttribute('id', 'row');
    newForm.appendChild(row7);
    let rNameLabel = document.createElement("label"); 
    rNameLabel.setAttribute('for', 'rName');
    rNameLabel.textContent = 'Relative\'s Name';
    row7.appendChild(rNameLabel);
    let rNameInput = document.createElement('input');
    rNameInput.setAttribute('type', 'text');
    rNameInput.setAttribute('id', 'rName');
    rNameInput.setAttribute('name', 'rName');
    row7.appendChild(rNameInput);

    let row8 = document.createElement('div');
    row8.setAttribute('id', 'row');
    newForm.appendChild(row8);
    let nounOneLabel = document.createElement("label"); 
    nounOneLabel.setAttribute('for', 'nounOne');
    nounOneLabel.textContent = 'Noun';
    row8.appendChild(nounOneLabel);
    let nounOneInput = document.createElement('input');
    nounOneInput.setAttribute('type', 'text');
    nounOneInput.setAttribute('id', 'nounOne');
    nounOneInput.setAttribute('name', 'nounOne');
    row8.appendChild(nounOneInput);

    let row9= document.createElement('div');
    row9.setAttribute('id', 'row');
    newForm.appendChild(row9);
    let liqLabel = document.createElement("label"); 
    liqLabel.setAttribute('for', 'liq');
    liqLabel.textContent = 'Liquid';
    row9.appendChild(liqLabel);
    let liqInput = document.createElement('input');
    liqInput.setAttribute('type', 'text');
    liqInput.setAttribute('id', 'liq');
    liqInput.setAttribute('name', 'liq');
    row9.appendChild(liqInput);

    let row10 = document.createElement('div');
    row10.setAttribute('id', 'row');
    newForm.appendChild(row10);
    let verbingLabel = document.createElement("label"); 
    verbingLabel.setAttribute('for', 'verbing');
    verbingLabel.textContent = 'Verb (ending in -ing)';
    row10.appendChild(verbingLabel);
    let verbingInput = document.createElement('input');
    verbingInput.setAttribute('type', 'text');
    verbingInput.setAttribute('id', 'verbing');
    verbingInput.setAttribute('name', 'verbing');
    row10.appendChild(verbingInput);

    let row11 = document.createElement('div');
    row11.setAttribute('id', 'row');
    newForm.appendChild(row11);
    let bodyPartLabel = document.createElement("label"); 
    bodyPartLabel.setAttribute('for', 'bodyPart');
    bodyPartLabel.textContent = 'Body Part (Plural)';
    row11.appendChild(bodyPartLabel);
    let bodyPartInput = document.createElement('input');
    bodyPartInput.setAttribute('type', 'text');
    bodyPartInput.setAttribute('id', 'bodyPart');
    bodyPartInput.setAttribute('name', 'bodyPart');
    row11.appendChild(bodyPartInput);

    let row12 = document.createElement('div');
    row12.setAttribute('id', 'row');
    newForm.appendChild(row12);
    let pNounLabel = document.createElement("label"); 
    pNounLabel.setAttribute('for', 'pNoun');
    pNounLabel.textContent = 'Noun (Plural)';
    row12.appendChild(pNounLabel);
    let pNounInput = document.createElement('input');
    pNounInput.setAttribute('type', 'text');
    pNounInput.setAttribute('id', 'pNoun');
    pNounInput.setAttribute('name', 'pNoun');
    row12.appendChild(pNounInput);

    let row13 = document.createElement('div');
    row13.setAttribute('id', 'row');
    newForm.appendChild(row13);
    let verbing2Label = document.createElement("label"); 
    verbing2Label.setAttribute('for', 'verbing2');
    verbing2Label.textContent = 'Verb (ending in -ing)';
    row13.appendChild(verbing2Label);
    let verbing2Input = document.createElement('input');
    verbing2Input.setAttribute('type', 'text');
    verbing2Input.setAttribute('id', 'verbing2');
    verbing2Input.setAttribute('name', 'verbing2');
    row13.appendChild(verbing2Input);

    let row14 = document.createElement('div');
    row14.setAttribute('id', 'row');
    newForm.appendChild(row14);
    let noun2Label = document.createElement("label"); 
    noun2Label.setAttribute('for', 'nounTwo');
    noun2Label.textContent = 'Noun';
    row14.appendChild(noun2Label);
    let noun2Input = document.createElement('input');
    noun2Input.setAttribute('type', 'text');
    noun2Input.setAttribute('id', 'nounTwo');
    noun2Input.setAttribute('name', 'nounTwo');
    row14.appendChild(noun2Input);
  
    let sub = document.createElement('button');
    sub.setAttribute('type', 'button');
    sub.setAttribute('id', 'secStry');
    sub.textContent = "See Story";
    newForm.appendChild(sub);
    subBtn = document.getElementById('secStry');
    subBtn.addEventListener("click",
    
      function seeStory(){
        let adjOne = document.getElementById("adjOne").value;
        let adjTwo = document.getElementById("adjTwo").value;
        let bird = document.getElementById("bird").value;
        let room = document.getElementById("room").value;
        let vpt = document.getElementById("vpt").value;
        let verbOne = document.getElementById("verbOne").value;
        let rName = document.getElementById("rName").value;
        let nounOne = document.getElementById("nounOne").value;
        let liq = document.getElementById("liq").value;
        let verbing = document.getElementById("verbing").value;
        let bodyPart = document.getElementById("bodyPart").value;
        let pNoun = document.getElementById("pNoun").value;
        let verbing2 = document.getElementById("verbing2").value;
        let nounTwo = document.getElementById("nounTwo").value;
        newForm.remove();
        let title = document.createElement("h3");
        title.setAttribute('id', 'title');
        title.textContent = "November";
        const container = document.getElementById("container");
        container.style.flexDirection = "column";
        container.appendChild(title); 
        let madLib = document.createElement("p");
        container.appendChild(madLib); 
        madLib.setAttribute('id', 'madLib');
        madLib.textContent = `
        It was a ${adjOne}, cold November day. I woke up to the ${adjTwo} smell of ${bird} roasting in the ${room} downstairs.
        I ${vpt} down the stairs to see if I could help ${verbOne} the dinner. My mom said, "See if ${rName} needs a fresh ${nounOne}." So I carried a tray of glass full of ${liq} into the ${verbing} room. When I got there,
        I couldn't believe my ${bodyPart}! There were ${pNoun} ${verbing2} on the ${nounTwo}! 
  
        `;
        container.style.background = "url(data:image/jpeg;base64,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)";
        container.style.backgroundRepeat = "no-repeat";
        container.style.backgroundSize = "cover";
       }, false);

   };

  container.appendChild(nextButton); 

};
 

