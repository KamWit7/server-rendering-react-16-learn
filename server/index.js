// const express = require('express') ES5
import express from 'express'

const app = new express()

app.use(express.static('dist')) // everything in dist will be served to backend

app.get('/', (_req, res) => {
  res.send(`<h1>Hello Word!!!!</h1>`)
})

app.listen(7777)
console.log('sever is listing.')
