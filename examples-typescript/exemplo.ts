interface User {
    name: string,
    bio: string,
    age: number
}

function sumAge(users: User[]) {
    let sum = 0;
    for (const user of users) {
        sum += user.age;
    }

    return sum;
}

let resultado = sumAge([
    {
        name: 'João',
        bio: 'João é legal',
        age: 10
    },
    {
        name: 'Maria',
        bio: 'Maria é legal',
        age: 15
    },
    {
        name: 'José',
        bio: 'José é legal',
        age: 20
    }
]);

console.log(resultado);


/**
 * for of se usa em casos onde queremos iterar sobre um array ou objeto iterável
 * for in se usa em casos onde queremos iterar sobre as propriedades de um objeto
 */

/**
 * Necessidades que justificam TS:
 * Como que vc pode dizer com certeza que tem uma prop age?
 * Como você pode dizer com certeza que tem uma prop nome?
 * JS não te bloqueia de mandar uma string no lugar dos objetos
 */