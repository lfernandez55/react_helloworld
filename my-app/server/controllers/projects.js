import { request } from 'express'
import { Project } from '../models/project'
// import { Movie as Project } from '../models/movie'

export const allProjectsAPI = (req, res, next) => {
    Project.find().exec((err, projects)=> {
        if(err){
            res.json({success: false, message: "Query failed"})
            res.end()
        }else{
            // res.write(JSON.stringify(movies))
            // res.end
            // res.write plus res.end is supposed to be equivalent to res.send
            // and the above is what Abdulmalek uses in his video.  But for me
            // only the below works.
            console.log("DEBUG projects....:")
            console.log(projects)
            res.send(JSON.stringify(projects))
        }
    })
}

export const delProjectAPI = (req, res, next) => {
    console.log("DEBUG DELETE PROJECT", req.params.id)
    Project.deleteOne({_id: req.params.id }).exec((err, projects)=> {
        if(err){
            res.json({success: false, message: "Delete Query failed"})
            res.end()
        }else{
            let msgStr = "Project with id " + req.params.id + " deleted"
            let debugObj = {msg : msgStr}
            res.send(JSON.stringify(debugObj))
        }
    })

}

export const addProjectAPI = (req, res, next) => {
    console.log("DEBUG ADD PROJECT")

    let randomNumber = Math.floor(Math.random() * 1000);


    let newProj = {
          "id": randomNumber,
          "title": "Dupe titled records (but diff ids)",
          "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ipsa error maxime alias id quisquam, quos commodi! Ex minus, molestias explicabo exercitationem ea voluptatum, itaque ipsum quos doloribus id quae?",
          "creator": "Mark Smith",
          "type": "static",
          "status": "in-progress",
          "progress": 85,
          "beginDate": new Date("2009-05-07"),
          "finishDate": new Date("2010-05-07"),
          "added_at": new Date("1990-05-07"),
          "updated_at": new Date("2020-05-07"),
          "create_by": ""
    }

    Project.create(newProj, (err, doc) => {
        if (err) {
          console.log(err)
        } else {
          console.log("successful")
        }
      });

}


export const updateProjectAPI = (req, res, next) => {
    console.log("DEBUG UPDATE PROJECT")

    Project.updateOne({id:80},{title: "Beef"}, (err, doc) => {
        if (err) {
          console.log(err)
        } else {
          console.log("successful")
        }
      });

}