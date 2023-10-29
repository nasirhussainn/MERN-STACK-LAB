console.log("CV CReater")

import express from "express";
import router from "./router/router.js";

const app = express();

app.use(express.static("html"));
app.set("views", "./views");
app.set("view engine", "pug");

app.use("/", router);
app.use("/home", router);
app.use("/create_my_cv", router);

app.get("/creating", async (req, res) => {

    const name = req.query.name;
    const email = req.query.email;
    const phone = req.query.phone;
    const address = req.query.address;
    const currentInstitutionName = req.query.current_institution_name;
    const education = req.query.education;
    const aboutMe = req.query.about_me;
    const skills = req.query.skills;
    
    res.render("myCV",{
      name: name,
      email: email,
      phone: phone,
      currentInstitutionName: currentInstitutionName,
      address: address,
      education: education,
      aboutMe: aboutMe,
      skills: skills
    })

    res.send();
});

app.listen(9000, () => {
  console.log(`Server is running on port http://localhost:9000`);
});