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
            let debugObj = {'msg': "Proj Deleted"}
            res.send(JSON.stringify(debugObj))
        }
    })

    // let debugObj = {'msg': "Proj Deleted"}
    // res.send(JSON.stringify(debugObj))
}
