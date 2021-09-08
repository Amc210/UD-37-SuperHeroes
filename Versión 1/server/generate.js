var faker = require('faker');

var database = { superheroes: [] };

for (var i = 1; i <= 50; i++) {
  database.superheroes.push({
    id: i,
    name: faker.internet.userName(),
    short_name: faker.name.firstName(),
    alt_name: faker.name.lastName(),
    role: faker.lorem.word(),
    new_role: faker.lorem.word(),
    type: faker.lorem.word(),
    release_date: faker.datatype.datetime(),
    rework_date: faker.datatype.datetime(),
    attribute_id: faker.datatype.number(),
    translations: [
      translations1= faker.lorem.word(),
      translations2= faker.lorem.word(),
      translations3= faker.lorem.word(),
      translations4= faker.lorem.word(),
      translations5= faker.lorem.word()
    ]
  });
}

console.log(JSON.stringify(database));
