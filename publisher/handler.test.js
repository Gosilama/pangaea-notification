const req = require('supertest');
const { pub } = require('../servers');

describe('Pub/Sub endpoints', () => {
    it('happy path - should save a subscriber to a topic', async () => {
        const res = await req(pub).post('/subscribe/test_topic').send({ url: 'http://test_url/test_subscriber' });
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('topic');
        expect(res.body).toHaveProperty('url');
    });
    it('unhappy path - should return an error if subscriber url is invalid', async () => {
        const res = await req(pub).post('/subscribe/test_topic').send({ url: 'invalid_url' });
        expect(res.statusCode).toBe(400);
    });
})
