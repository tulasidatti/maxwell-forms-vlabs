var models = require('../models');
var express = require('express');
var router = express.Router();

var s3uploader = require("../services/amazonS3UploadAPI");
var multiparty = require('multiparty');

router.post('/forms', function(req, res) {

	var form = new multiparty.Form();
    form.parse(req, function(err, fields, files) {      
           
		if(files) {
			var file =  files.file[0];     
			var templateName = typeof fields.name == 'undefined' ? null : fields.name[0]  
			file.originalFilename = Math.round(Date.now() / 1000) + "_" + file.originalFilename;  
			s3uploader.fileUpload(file).then(function(filepath){       
	      
				models.FormTemplate.create({
				name: templateName,
				notes: fields.notes[0],
				filePath: file.originalFilename,
				formType: 'Product',
				eTag: filepath.ETag,
				dateCreated: Math.floor(new Date() / 1000),
				dateModified: Math.floor(new Date() / 1000),  
				active: 1
				}).then(function(createdFormTemplate) { 
				models.FormTemplateToVendor.create({vendorId: 2})
				.then(function(createdFormTemplateToVendor) { 
				return createdFormTemplate.addFormTemplateToVendor(createdFormTemplateToVendor);  
				});
				 models.FormTemplateToState.create({stateId: 1})
				.then(function(createdFormTemplateToState) { 
				 return  createdFormTemplate.addFormTemplateToState(createdFormTemplateToState);  
				}).then(function(result){
					res.redirect(302, '/#/addFormTemplate/success');			
				})
				}).catch(function(err){			      
					//res.status(500)
					res.redirect(302, '/#/addFormTemplate/failure');
					//res.send("Fail to create FormTemplate with error : " + err )  
				});  
			}).catch(function(err){					
				res.redirect(302, '/#/addFormTemplate/failure');				
			});  
			
		}    
    });  
});


router.post('/forms/:form_id', function(req, res) {

	var form = new multiparty.Form();
	form.parse(req, function(err, fields, files) {      
           
	if(files) {
		var file =  files.file[0];  
		console.log(fields.name)
		var templateName = typeof fields.name == 'undefined' ? null : fields.name[0]  
		file.originalFilename = Math.round(Date.now() / 1000) + "_" + file.originalFilename;  
		var filepath = s3uploader.fileUpload(file);        
	        
		models.FormTemplate.update({
			name: templateName,
			notes: fields.notes[0],
			filePath: file.originalFilename,
			formType: 'Product',
			dateCreated: Math.floor(new Date() / 1000),
			dateModified: Math.floor(new Date() / 1000),  
			active: 1
		}, 
		{where: {id: req.params.form_id}})
			.then(function(result){
			          res.redirect(302, '/#/addFormTemplate');
			}).catch(function(err){  
				console.log(err)      
				res.status(500)
				res.send("Fail to create form template with error : " + err )  
			});  
		}    
    });  
});

router.get('/forms', function(req, res) {
		models.FormTemplate.findAll().then(function(forms) {
		res.send(forms);
	});
});

router.get('/forms/:form_id', function(req, res) {
		models.FormTemplate.findOne({
		where: {id: req.params.form_id}
	}).then(function(form) {
		res.send(form);
	});
});

router.delete('/forms/:form_id', function(req, res) {
		models.FormTemplate.destroy({
		where: {id: req.params.form_id}
	}).then(function() {
		res.send([]);
	});
});

module.exports = router;