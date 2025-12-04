const admin = require('firebase-admin');

// Carga del archivo de credenciales del service account
const serviceAccount = require('./serviceAccountKey.json');

// Inicializar el SDK de Firebase Admin
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

// TODO: pega aquí el token FCM que te dio la app Flutter
const deviceToken = 'fK2KokdCRT6d79QVAdqI2M:APA91bGbfH4Qf6Lm8bqrCH3RBMaPeIBp6Hh0Tk2kQevZRyW0QtB3vafptn6ZOVeyqm0gStZV2ZYUdsrE-tZNz00JGChIAw-xnHATvdSB0HM0dJe50Za_VJE';

async function sendPush() {

    const message = {
        token: deviceToken,
        notification: {
            title: 'Prueba',
            body: 'JuanJoseRegaladoValdez',
        },
        data: {
            origen: 'node-demo',
            tipo: 'prueba',
        },
    };
    try {
        const response = await admin.messaging().send(message);
        console.log('Mensaje enviado correctamente:', response);
    } catch (error) {
        console.error('Error al enviar mensaje:', error);
    }
}

sendPush();