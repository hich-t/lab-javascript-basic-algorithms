// Iteration 1: Names and Input

let hacker1 = 'Dumdul'
console.log(`The driver's name is ${hacker1}`)

let hacker2 = 'Dumdum'
console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}



// Iteration 3: Loops

    let split = hacker1.toUpperCase().split("").join(" ")
    console.log(split)


let reverse = hacker2.split("").reverse().join("")
console.log(reverse)


if ( hacker2 > hacker1 ){
    console.log(`${hacker1} goes first.`)
} else if (hacker2 < hacker1 ) {
    console.log(`Yo, ${hacker2} goes first definetely`)
 } else {
    console.log("What?! You both have the same name ?")
 }

 let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus augue ut ligula condimentum, id commodo odio vehicula. In quis turpis aliquet, auctor diam quis, varius metus. Maecenas placerat scelerisque elit quis tincidunt. Donec aliquam nunc eu augue mollis, sed maximus massa imperdiet. Suspendisse quis vestibulum lacus, non interdum lacus. Vestibulum posuere tempus urna, id malesuada metus convallis ac. Duis a cursus magna.

 Phasellus dictum magna leo, eget luctus risus euismod id. Pellentesque pharetra, risus fermentum accumsan auctor, justo ex lobortis nulla, at semper dui dui ut leo. Nunc in fermentum urna, sed tristique dolor. Etiam tincidunt ligula ut eros malesuada interdum. Fusce vehicula, nisl a sollicitudin posuere, elit metus posuere nulla, et bibendum tellus leo eget enim. Donec et urna ultrices, tempus neque et, semper lectus. Ut lectus lacus, ultrices quis nibh non, varius iaculis tortor. Cras eleifend leo eget felis scelerisque varius. Nullam facilisis magna at quam ultricies, sed condimentum sem elementum. Duis et cursus diam, sit amet hendrerit nibh. Suspendisse commodo, velit vel ullamcorper ornare, eros dolor pellentesque nibh, et scelerisque velit ante id ante. Duis nec fermentum elit. Aliquam et porttitor sem. Aliquam eleifend accumsan tellus sit amet porta.
 
 Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque mi purus, imperdiet eu eleifend sed, hendrerit sit amet leo. Vivamus imperdiet est urna, vel placerat erat maximus a. Aliquam elit ex, volutpat ut augue egestas, maximus dictum leo. Suspendisse ullamcorper non felis at posuere. Donec venenatis, odio id consectetur condimentum, nisi purus dapibus justo, quis suscipit odio tellus vehicula nulla. Aenean laoreet velit nibh, suscipit pretium sem rhoncus vitae.`

console.log(longText.length)

let count = longText.match(/et/g).length
console.log(count)


