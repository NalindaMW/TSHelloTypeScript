
let sales = 123_456_789
let course_name = 'nalinda'
let is_published = true

// any type
let level;
function fetchCourse(title: string) {
    console.log(title)
}
fetchCourse("Maths")

//arrays
let jsArray = [1, 2, '3'] // JS arrays are dynamic, can store different types
let tsArray: number[] = [1, 2, 3]

//tuples
// tuples are key value paired
// can create more than 2 items in a tuple, but not recommanded
let user: [number, string] = [1, 'nalinda']
console.log(user[1].toUpperCase())

//enum
const enum Size1 { Small, Medium, Large } //start with 0 index //use const keyword for more optimise code
enum Size2 { Small = 1, Medium, Large } //start with 1
enum Size3 { Small = 's', Medium = 'm', Large = 'l' } //assign string values

let mySize: Size1 = Size1.Medium
console.log(mySize)

//functions
// if we want to optional taxYear, give the defauklt value
// function calculateTax(income: number, taxYear: number): number {
function calculateTax(income: number, taxYear = 2022): number {
    if (taxYear < 2022) {
        return income * 1.2
    }
    // if not return it will always return undefined
    return income * 1.3
}

calculateTax(10_000, 2022)
calculateTax(10_000)

//Objects
let employee1: {
    id: number,
    name: string
}

let employee2: {
    readonly id: number,
    name: string
} = { id: 1, name: 'Nalinda'}

// employee2.id = 0 //prevent accidently modify by using readonly modifier

// functions in object
let employee3: {
    id: number,
    name: string,
    retire: (date: Date) => void
} = { 
    id: 1,
    name: 'Nalinda',
    retire(date) {
        console.log(date)
    },
}

//type aliases
type Employee = {
    id: number,
    name: string,
    retire: (date: Date) => void
}

let employee4: Employee = { 
    id: 1,
    name: 'Nalinda',
    retire(date) {
        console.log(date)
    },
}

//union types
function kgToLbs(weight: number | string) : number {
    if (typeof weight === 'number') {
        return weight * 1.1
    } else {
        return parseInt(weight) * 1.2
    }
}

kgToLbs(10);
kgToLbs("10kg");

//type instersection
type Draggable = {
    drag: () => void
}

type Resizable = {
    resize: () => void
}

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => { },
    resize: () => { },
}

//Literal types
// set exact or specific values to a variable
let quantity1: 50 | 100 = 50

type Quantity = 50 | 100
let quantity2: Quantity = 50

type Metric = 'cm' | 'inch'

//Nullable types
//function greetings(name: string) { //if you want to pass null or undefined use union type
function greetings(name: string | null | undefined) {
    if (name) {
        console.log(name)
    } else {
        console.log('Hola!')
    }
}

greetings('Nalinda')
greetings(null)

//Optional chaining
type Customer = {
    birthday: Date
}

function getCustomer(id: number): Customer | null {
    return id === 0 ? null : { birthday: new Date() }
}

let customer = getCustomer(1)
//Optional property access operator
console.log(customer?.birthday)

//Optional element access operator
// console.log(customer?.[0])

//Optional call
let log1: any = (message: string) => console.log(message) // normal function 
let log2: any = null

log1('Nalinda')
log2?.('Abc')