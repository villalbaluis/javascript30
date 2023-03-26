const cientificos = [
    {
        nombre: "Albert",
        apellido: "Einstein",
        nacimiento: 1879,
        muerte: 1955
    },
    {
        nombre: "Marie",
        apellido: "Curie",
        nacimiento: 1867,
        muerte: 1934
    },
    {
        nombre: "Isaac",
        apellido: "Newton",
        nacimiento: 1643,
        muerte: 1727
    },
    {
        nombre: "Charles",
        apellido: "Darwin",
        nacimiento: 1809,
        muerte: 1882
    },
    {
        nombre: "Nikola",
        apellido: "Tesla",
        nacimiento: 1856,
        muerte: 1943
    },
    {
        nombre: "Stephen",
        apellido: "Hawking",
        nacimiento: 1942,
        muerte: 2018
    },
    {
        nombre: "Galileo",
        apellido: "Galilei",
        nacimiento: 1564,
        muerte: 1642
    },
    {
        nombre: "Ada",
        apellido: "Lovelace",
        nacimiento: 1815,
        muerte: 1852
    },
    {
        nombre: "Richard",
        apellido: "Feynman",
        nacimiento: 1918,
        muerte: 1988
    }
];

const personas = [
    "Pérez, Juan",
    "Gómez, María",
    "Rodríguez, Pedro",
    "García, Sofía",
    "López, Diego",
    "Torres, Ana",
    "Sánchez, Marta",
    "Jiménez, Carlos",
    "Fernández, Lucía",
    "Díaz, Pablo",
    "Ortiz, Laura",
    "Ruiz, Miguel",
    "Moreno, Isabel",
    "Medina, Federico",
    "Vega, Clara",
    "Núñez, Luis",
    "Castro, Alicia",
    "Molina, Javier",
    "Rubio, Carmen",
    "López, Gabriel",
    "Ortiz, Elena",
    "Sánchez, Manuel",
    "García, Victoria",
    "Hernández, Roberto",
    "López, Teresa"
];

/**
 * Filtrar aquellos inventores que nacieron en el siglo 16
 * usamos cientificos.filter e iteramos por cada cientifico
 * cuando encuentra uno que cumpla la condición del nacimiento
 * retornamos true, de manera que se mantenga ese dato.
 */
let primera_forma_nacidos_xvi = cientificos.filter(function(cientifico) {
    if (cientifico.nacimiento >= 1500 && cientifico.nacimiento < 1600) {
        return true;
    }
});
let segunda_forma_nacidos_xvi = cientificos.filter(cientifico => (cientifico.nacimiento >= 1500 && cientifico.nacimiento < 1600));
console.log("--------------------------------------");
console.log("1. Ejercicio, filtrar nacimientos cientificos");
console.table(primera_forma_nacidos_xvi);
console.table(segunda_forma_nacidos_xvi);

console.log("--------------------------------------");

const nombres_completos_cientificos = cientificos.map(cientifico => `${cientifico.nombre} ${cientifico.apellido}`);
console.log("2. Ejercicio, mostrar solo nombre ccompleto");
console.table(nombres_completos_cientificos);

console.log("--------------------------------------");

let primera_forma_ordenar_cumple = cientificos.sort(function(a, b) {
    if (a.nacimiento > b.nacimiento) {
        return 1;
    } else {
        return -1;
    }
});
let segunda_forma_ordenar_cumple = cientificos.sort((a, b) => a.nacimiento > b.nacimiento ? 1 : -1);
console.log("3. Ejercicio, Ordenar nacimientos de mayor a menor");
console.table(primera_forma_ordenar_cumple);
console.table(segunda_forma_ordenar_cumple);

console.log("--------------------------------------");

const vida_total = cientificos.reduce((total_anios, cientifico) => {
    return total_anios + (cientifico.muerte - cientifico.nacimiento);
}, 0);
console.log("4. Ejercicio, Sumar todos los años vividos de los cientificos");
console.table(vida_total);

console.log("--------------------------------------");

const tiempo_vivido = cientificos.sort((a, b) => (a.muerte - a.nacimiento) < (b.muerte - b.nacimiento) ? 1 : -1);
console.log("5. Ejercicio, Ordenar los cientificos por los años vividos");
console.table(tiempo_vivido);

console.log("--------------------------------------");

/**
 * El siguiente ejercicio hará una pequeña extracción
 * de datos desde la URL: https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
 * para permitir funcionar estas lineas, debemos estar parados sobre
 * la consola del navegador de esa URL especificada.
 */
// const categorias = document.querySelector('.mw-category');
// const enlaces = Array.from(categorias.querySelectorAll('a'));
// const incluyen_De = enlaces
//                     .map(enlace => enlace.textContent)
//                     .filter(calle => calle.includes('de'));


const ordenar_alfabeto = personas.sort((a, b) => {
    const [a_nom, a_ape] = a.split(", ");
    const [b_nom, b_ape] = b.split(", ");
    return a_nom > b_nom ? 1 : -1;
});
console.log("7. Ejercicio, Ordenar alfabeticamente la lista de nombres");
console.table(ordenar_alfabeto);

console.log("--------------------------------------");

const medios = ['carro', 'carro', 'camion', 'camion', 'bici', 'caminata', 'carro', 'van', 'bici', 'caminata', 'carro', 'van', 'carro', 'camion', 'patineta'];
const transportes = medios.reduce(function(obj, item) {
    if (!obj[item]) {
        obj[item] = 0;
    };
    obj[item]++;
    return obj;
}, {});
console.log("8. Ejercicio, Sumar la cantidad de veces que se repite un elemento");
console.table(transportes);

console.log("--------------------------------------");
