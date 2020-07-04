interface Person {
    readonly name: string;
    age: number;
    [key: string]: any;
    greeting(): string;
}

let p: Person = {
    name: 'Ilgsson',
    age: 25,
    greeting(): string{
        return `Hello, i'm ${this.name}`
    }
}

console.log(p.greeting());