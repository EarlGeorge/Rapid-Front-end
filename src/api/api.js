// https://github.com/marak/Faker.js/
const faker = require('faker');

module.exports = () => {
  const employess = [];

  for (let id = 0; id < 1000; id++) {
    const firstName = faker.name.findName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email();
    const pic = faker.internet.avatar();
    const zip = faker.address.zipCode();
    const country = faker.address.country();

    employess.push({
      id,
      first_name: firstName,
      lastName,
      email,
      pic,
      zipCode: zip,
      Location: country,
    });
  }

  const finance = [];

  for (let id = 0; id < 100; id++) {
    const account = faker.finance.account();
    const accountName = faker.finance.accountName();
    const transactionType = faker.finance.transactionType();
    const currencySymbol = faker.finance.currencySymbol();

    finance.push({
      id,
      account,
      accountName,
      transactionType,
      'currencySymbol ': currencySymbol,
    });
  }

  const contactform = [];

  for (let id = 0; id < 4; id++) {
    const firstName = faker.name.firstName();
    const email = faker.internet.email();
    const text = faker.lorem.text();
    const phoneNumber = faker.phone.phoneNumber();

    contactform.push({
      id,
      'Full name': firstName,
      email,
      'Contact phone': phoneNumber,
      message: text,

    });
  }

  const pictures = [];

  for (let id = 0; id < 30; id++) {
    const image = faker.image.image();
    const imageUrl = faker.image.imageUrl();
    const people = faker.image.people();

    pictures.push({
      id,
      image,
      imageUrl,
      people,

    });
  }


  return {
    employess, finance, contactform, pictures,
  };
};
