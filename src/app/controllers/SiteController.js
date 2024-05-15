const Course = require('../models/Course');

class SiteController {
    // [GET] /
    home(req, res, next) {

        Course.find({})
            .then(courses => res.render('home', {courses}))
            .catch(next);
        // res.render('home');
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }

    // [GET] /contact
    contact(req, res) {
        res.render('contact');
    }
}

module.exports = new SiteController();
