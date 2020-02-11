const express = require("express");
const cors = require("cors");
const Mentor = require("../models/Mentor");

const router = express.Router();
router.use(cors());

router.get("/", async (req, res) => {
   let mentor_list = await Mentor.find();
   console.log(mentor_list);
   res.json({ mentor_list: mentor_list });
});

router.post("/one", async (req, res) => {
   const { name } = req.body;
   try {
      let mentor = await Mentor.findOne({ name: name });
      res.json({ mentor: mentor });
   } catch (err) {
      res.status(500).send("Server error.");
   }
});

router.post("/", async (req, res) => {
   const { name, email } = req.body;
   try {
      let m = new Mentor({ name: name, email: email });
      await m.save();
      res.json({ message: "Mentor added!" });
   } catch (e) {
      res.status(500).send("Server error.");
   }
});

router.post("/addtask", async (req, res) => {
   const { name, task } = req.body;
   let m = await Mentor.findOne({ name: name });
   if (m) {
      m.tasks.push(task);
      await m.save();
      res.json({ message: "Task added." });
   } else {
      res.status(500).send("Server error.");
   }
});

module.exports = router;
