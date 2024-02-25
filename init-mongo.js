// init-mongo.js

// Cambiar a la base de datos que deseas utilizar
db = db.getSiblingDB('mydatabase');
db.createUser({
  user: "root",
  pwd: "example",
  roles: [{ role: "readWrite", db: "mydatabase" }],
});
// Crear las colecciones
db.createCollection("users");
db.createCollection("posts");
