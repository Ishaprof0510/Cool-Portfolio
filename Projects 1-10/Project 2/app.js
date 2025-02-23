let data = [
    {
    name: 'Aisha',
    age: '39'
},
{
    name: 'Alok',
    age: '44'
},
{
    name: 'Ishalok',
    age: '40',
    address: 'Phoenix'
},
{
    name: 'Aloksha',
    age: '45'
},
{
    name: 'Pushpa Ji',
    age: '82',
    address: 'Delhi'
},
{
    name: 'Roshan',
    age: '70'
}
]

const info = document.querySelector('#info');

const details = data.map(function(item) {
return (
    '<div>' + item.name + ' ' + item.age + ' ' + 'years old' + ' ' + 'Lives in ' + item.address +
     '</div>'
)
})

info.innerHTML = details.join('\n');

