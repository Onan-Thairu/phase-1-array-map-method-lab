const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  let tutorials2 = []
  tutorials.map(tutorial => {
    let strArray = tutorial.toLowerCase().split(' ')
    for (let i=0; i<strArray.length; i++) {
      strArray[i] = strArray[i][0].toUpperCase() + strArray[i].slice(1)
    }
    strArray = strArray.join(" ")
    tutorials2.push(strArray)
  })
  
  return tutorials2
}

//titleCased()
