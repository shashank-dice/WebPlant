let array = [
    {
        name: "shashank sharma",
        age: 25
    },

    {
        name: "Vishal",
        age: 21
    },

    {
        name: "Rajendra",
        age: 12
    }
]
let result = array.map((item) => {
        return {
            ...item,
            name: item.name.split(' ').length  === 1 ? `${item.name} ${prompt(`${item.name} last name`)}` : item.name
        }
}
);

console.log(result);