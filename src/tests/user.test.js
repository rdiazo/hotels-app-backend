const request = require('supertest');
const app = require('../app');

let id;
let token;

test('POST /users debe crear un usuario', async () => {
    const body = {
        firstName: "Elis",
        lastName: "Mendez",
        email: "elis@hotmail.com",
        password: "1234",
        gender: "Female",
    }
    const res = await request(app).post('/users').send(body);
    id = res.body.id;
    expect(res.status).toBe(201);
    expect(res.body.firstName).toBe(body.firstName);
    expect(res.body.id).toBeDefined();
});

test('POST /users/login hacer un login', async () => {
    const body = {
        email: "elis@hotmail.com",
        password: "1234",
    }
    const res = await request(app).post('/users/login').send(body);
    token = res.body.token;
    console.log(body);
    expect(res.status).toBe(200);
    expect(res.body.token).toBeDefined();
    expect(res.body.user.email).toBe(body.email);
});

test('POST /users/login con credenciales invalidas debe enviar error', async () => {
    const body = {
        email: "elisv@hotmail.com",
        password: "12345",
    }
    const res = await request(app)
        .post('/users/login').send(body)
        .set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(401);
});

test('GET /users deba traer todos los usuarios', async () => {
    const res = await request(app)
        .get('/users')
        .set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
});

test('PUT /users/:id debe actualizar un usuario', async () => {
    const body = {
        firstName: "Elis V",
    }
    const res = await request(app)
        .put(`/users/${id}`).send(body)
        .set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(200);
    expect(res.body.firstName).toBe(body.firstName);
});

test('DELETE /users/:id debe eliminar un usuario', async () => {
    const res = await request(app)
        .delete(`/users/${id}`)
        .set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(204);
});