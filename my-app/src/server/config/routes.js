import express from 'express'


import {allProjectsAPI} from '../controllers/projects'


let router = express.Router()

export function configureRoutes(app){
 
    router.get('/api/projects', allProjectsAPI)
    app.use('/', router)
}