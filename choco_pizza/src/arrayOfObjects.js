export const dogs = [
    {
        type: 'chihuahua',
        name: 'fluff',
        age: 2,
    },
    {
        type: 'lab',
        name: 'scooby',
        age: 8,
    },
    {
        type: 'golden retriver',
        name: 'sunny',
        age: 6,
    },
    {
        type: 'lab',
        name: 'pookie',
        age: 10,
    }
]
// Example 1
const dogsOverTwo = dogs.filter((dog) => {
    if (dog.age > 2) {
        return true
    }
    return false
})

// Refactor
const dogsOverTwo = dogs.filter(dog => dog.age > 2) 


// Example 2
const labDogs = dogs.filter((dog) => {
    if (dog.type ==='lab') {
        return true
    }
    return false
})

//Refactor
const labDogs = dogs.filter(dog => dog.type === 'lab')

// Example 3

const dogsWithNamesLongerThanFourLetters = dogs.filter(dog => dog.name.length > 4)