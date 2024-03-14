const request = require('supertest');
const app = require('../app');

describe('API de Canciones', () => {
    let cancionId;
    
    test('Debería crear una nueva canción', async () => {
        const res = await request(app)
        .post('/canciones')
        .send({ titulo: 'Canción de prueba', artista: 'Artista de prueba' });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('id');
        cancionId = res.body.id;
    });
    
    test('Debería obtener todas las canciones', async () => {
        const res = await request(app).get('/canciones');
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toBeGreaterThan(0);
    });
    
    test('Debería obtener una canción por su ID', async () => {
        const res = await request(app).get(`/canciones/${cancionId}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('titulo', 'Canción de prueba');
        expect(res.body).toHaveProperty('artista', 'Artista de prueba');
    });
    
    test('Debería actualizar una canción existente', async () => {
        // Enviar una solicitud para actualizar la canción
        const res = await request(app)
        .put(`/canciones/${cancionId}`)
        .send({ titulo: 'Canción actualizada', artista: 'Artista actualizado' });
        // Verificar que la canción fue actualizada
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('titulo', 'Canción actualizada');
        expect(res.body).toHaveProperty('artista', 'Artista actualizado');
    });
    
    test('Debería eliminar una canción', async () => {
        // Enviar una solicitud para eliminar la canción
        const res = await request(app).delete(`/canciones/${cancionId}`);
        // Verificar que la canción fue eliminada
        expect(res.statusCode).toEqual(204);
    });
});
