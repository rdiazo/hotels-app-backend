const request = require('supertest');
const app = require('../app');

let token;
//let id;

beforeAll(async () => {    
    const res = await request(app).post('/users/login').send({
        email: 'test@mail.com',
        password: 'test1234',
   });
   token = res.body.token;
});

test('GET /hotels', async () => { 
    const res = await request(app).get('/hotels');
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
 });

 test('POST /hotel crear un hotel', async () => { 
    const body = {
        name: "Hotel Jardin",
        description: "Hotel de paso, por 4, 6, 12 o 24 horas",
        price: 20,
        addres: "Turmero edo. Aragua",
        cityId: 1,
        lat: 1111111,
        lon: 22222222,
    }
    const res = await request(app).post('/hotels')
        .send(body)
        .set('Authorization', `Bearer ${token}`);
    id = res.body.id;
    expect(res.status).toBe(201);
    expect(res.body.id).toBeDefined();
    expect(res.body.name).toBe(body.name);
  });

  test('DELETE /hotels debe borrar un hotel', async () => { 
    const res = await request(app)
        .delete(`/hotels/${id}`)
        .set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(204);
   });