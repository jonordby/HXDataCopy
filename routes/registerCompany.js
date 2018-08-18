const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const db = require('../models/index');


router.get('', (req, res) => {
    res.render("registerCompany", {});
});

router.post("registerCompany", (req, res) => {
	db.Companies.findOrCreate({
	  where: {
		name: req.body.name
	  },
	  defaults: {
		logo: req.body.logo,
		description: req.body.description,
		category: req.body.category,
		location: req.body.location,
		employees: req.body.employees,
		fundingstage: req.body.fundingstage,
		foundedDate: req.body.foundedDate,
		productStage: req.body.productStage,
		businessModel: req.body.businessModel,
		websiteUrl: req.body.websiteUrl,
		contact: req.body.contact,
		bio: req.body.bio,
	  }
	}).spread((company, created) => {
	  if (created) {
		res.render("companies", {});
	  } else {
		res.render("registerCompany", {
		  message: "Company already exists"
		});
	  }
	});
  });
module.exports = router;