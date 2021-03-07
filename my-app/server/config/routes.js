import express from 'express'


import {allProjectsAPI, delProjectAPI} from '../controllers/projects'


let router = express.Router()

export function configureRoutes(app){
 
    router.get('/api/projects', allProjectsAPI)
    router.delete('/api/projects/:id', delProjectAPI);
    app.use('/', router)
}