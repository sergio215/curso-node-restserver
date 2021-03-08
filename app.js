require('dotenv').config();
// const express=require('express');


const Server=require('./models/server');

// const clase=class prueba{
//  constructor(){}
//  hola(saludo){
// console.log('Hola mundo')
//  }
// }
// const fisica=new clase();
// fisica.hola();

const server= new Server();


server.listen();




