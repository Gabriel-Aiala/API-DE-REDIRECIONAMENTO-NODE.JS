import  express  from "express";
import links from "./linksRoutes.js";

const routes = (app) => {
    app.route('/').get((req,res) =>{
        res.status(200).send({nome:"api do vicente"})
    })

    app.use(
        express.json(),
        links
    )
}
export default routes

