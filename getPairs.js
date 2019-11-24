exports.getPairs = getPairs = people => {
  const unmatchedList = people.map(person => person.name);
  arrange(unmatchedList);
  // shuffle(people).forEach((person, index) => {
  //   let assignedPersonIndex = -1;
  //   assignedPersonIndex = Math.floor(Math.random() * unmatchedList.length);
  //   while (person.name === unmatchedList[assignedPersonIndex]) {
  //     assignedPersonIndex = -1;
  //     assignedPersonIndex = Math.floor(Math.random() * unmatchedList.length);
  //   }

  //   person.assigned = unmatchedList[assignedPersonIndex];
  //   unmatchedList.splice(assignedPersonIndex, 1);
  // });
};

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function arrange(people) {
  let list = [];
  for (i = 0; i < people.length; i++) {
    for (k = 0; k < people.length; k++) {
      if (k !== i) {
        list.push([people[i], people[k]]);
      }
    }
  }
  console.log({ list });
}
