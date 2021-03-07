import express from 'express'


import {allProjectsAPI, delProjectAPI, addProjectAPI, updateProjectAPI} from '../controllers/projects'


let router = express.Router()

export function configureRoutes(app){
 
    router.get('/api/projects', allProjectsAPI)
    router.delete('/api/projects/:id', delProjectAPI);
    router.post('/api/projects', addProjectAPI);
    router.put('/api/projects/:id', updateProjectAPI);
    app.use('/', router)
}