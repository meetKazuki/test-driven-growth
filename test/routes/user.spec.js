const { expect } = require('chai');
const supertest = require('supertest');
const logger = require('../../src/config/logger');

const TEST_URL = 'https://gorest.co.in/public-api';
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
});
