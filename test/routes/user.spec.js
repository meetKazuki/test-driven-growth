const { expect } = require('chai');
const supertest = require('supertest');
const logger = require('../../src/config/logger');

let TEST_URL = 'https://gorest.co.in/public-api';
const request = supertest(TEST_URL);

describe('User test suite', () => {
  it('should GET /users', (done) => {
    request
      .get('/users')
      .end((err, res) => {
        expect(res.body.data).to.not.be.empty;
        done();
      });
  });

  it('should GET /users/:id', (done) => {
    request
      .get('/users/1')
      .end((err, res) => {
        expect(res.body.data.id).to.be.eq(1);
        done(err);
      });
  });

  it('should GET /users with query params', (done) => {
    TEST_URL = 'users&page=5&gender=Female&status=Active';

    request
      .get(TEST_URL)
      .end((err, res) => {
        expect(res.body.data).to.not.be.empty;
        res.body.data.forEach((data) => {
          expect(data.gender).to.eq('Female');
          expect(data.status).to.eq('Active');
        });
        done(err);
      });
  });
});
