import express from 'express';
import {
  faker
} from '@faker-js/faker';
import cors from 'cors';

const app = express();
const port = 5137;

app.use(cors());

const createUser = () => {
  const user = {
    password: faker.internet.password(),
    email: faker.internet.email(),
    firstName: faker.person.firstName(),
    phoneNumber: faker.phone.number('501-###-###'),
    lastName: faker.person.lastName(),
    _id: faker.string.uuid()
  };
  return user;
};

const createCompany = () => {
  const company = {
    _id: faker.string.uuid(),
    companyName: faker.company.name(),
    street: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.location.state(),
    zipCode: faker.location.zipCode(),
    country: faker.location.country(),

  };
  return company;
};

app.get('/api/users/new', (req, res) => {
  const newUser = createUser();
  res.json(newUser);
});

app.get('/api/companies/new', (req, res) => {
  const newCompany = createCompany();
  res.json(newCompany);
});

app.get('/api/user/company', (req, res) => {
  const newUser = createUser();
  const newCompany = createCompany();
  res.json({
    user: newUser,
    company: newCompany
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
