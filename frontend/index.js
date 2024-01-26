function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  //  ✨ add your code here
  const widgets = document.querySelectorAll("section>div");
  widgets.forEach((widget, index) => {
    widget.classList.add("widget");
    widget.setAttribute("tabindex", index + 1); // Setting tabindex for Task 6
  });
  // // 👉 TASK 2 - Build a "Quote of the Day" widget
  // //  ✨ add your code here
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  const quote = document.createElement("div");
  quote.textContent = randomQuote.quote;
  const widgetQuote = document.querySelector(".quoteoftheday");
  widgetQuote.appendChild(quote);
  const authorDate = document.createElement("div");
  authorDate.textContent = `${randomQuote.author} in ${randomQuote.date || "an unknown date"}`;
  widgetQuote.appendChild(authorDate);
  // // 👉 TASK 3 - Build a "Corporate Speak" widget
  // //  ✨ add your code here
  const randomVerb1 = verbs[Math.floor(Math.random() * verbs.length)];
  const randomVerb2 = verbs[Math.floor(Math.random() * verbs.length)];
  const randomAdverb1 = adverbs[Math.floor(Math.random() * adverbs.length)];
  const randomAdverb2 = adverbs[Math.floor(Math.random() * adverbs.length)];
  const randomNoun1 = nouns[Math.floor(Math.random() * nouns.length)];
  const randomNoun2 = nouns[Math.floor(Math.random() * nouns.length)];
  const mumboJumbo = `We need to ${randomVerb1} our ${randomNoun1} ${randomAdverb1} in order to ${randomVerb2} our ${randomNoun2} ${randomAdverb2}.`;
  const paragraph = document.createElement("p");
  paragraph.textContent = mumboJumbo;
  document.querySelector(".corporatespeak").appendChild(paragraph);

  // // 👉 TASK 4 - Build a "Countdown" widget
  // //  ✨ add your code here
  const countdownWidget = document.querySelector(".countdown");
  let count = 5;
  const countdownElement = document.createElement("p");
  countdownElement.textContent = `T-minus ${count}...`;
  countdownWidget.appendChild(countdownElement);
  const intervalId = setInterval(() => {
    if (count === 1) {
      countdownElement.textContent = "Liftoff! 🚀";
      clearInterval(intervalId);
    } else {
      count--;
      countdownElement.textContent = `T-minus ${count}...`;
    }
  }, 1000);
  // // 👉 TASK 5 - Build a "Friends" widget
  // //  ✨ add your code here
  const person = people[Math.floor(Math.random() * people.length)];
  const personParagraph = document.createElement("p");
  const friendsWidget = document.querySelector(".friends");
  friendsWidget.appendChild(personParagraph);
  const year = person.dateOfBirth.split("-")[0];
  let sentence = `${person.fname} ${person.lname} was born in ${year} and`;
  if (!person.friends.length) {
    sentence += " has no friends."
  } else {
    sentence += " is friends with ";
    person.friends.forEach((friendId, index) => {
      const friend = people.find(p => p.id === friendId);
      sentence += `${friend.fname} ${friend.lname}`;
      if (index === person.friends.length - 2) {
        sentence += " and ";
      } else if (index < person.friends.length - 2) {
        sentence += ", ";
      }
    });
    sentence += ".";
  }
  personParagraph.textContent = sentence;
  // to check the div's content
  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here

  // 👆 WORK WORK ABOVE THIS LINE 👆

}
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
