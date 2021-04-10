const router = require('express').Router();
// const { Item, User, List } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    res.render('landing');
  });

  router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/list');
      return;
    }
  
    res.render('login');
  });

  router.get('/signup', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    res.render('createAccount');
  });

  router.get('/list', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    res.render('list');
  });

// router.get('/', async (req, res) => {
//     try {
//       // Get all projects and JOIN with user data
//       const projectData = await List.findAll({
//         include: [
//           {
//             model: User,
//             attributes: ['name'],
//           },
//         ],
//       });
  
//       // Serialize data so the template can read it
//       const projects = projectData.map((project) => project.get({ plain: true }));
  
//       // Pass serialized data and session flag into template
//       res.render('landing', { 
//         projects, 
//         logged_in: req.session.logged_in 
//       });
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });
  
//   router.get('/list/:id', async (req, res) => {
//     try {
//       const projectData = await Project.findByPk(req.params.id, {
//         include: [
//           {
//             model: User,
//             attributes: ['name'],
//           },
//         ],
//       });
  
//       const project = projectData.get({ plain: true });
  
//       res.render('list', {
//         ...project,
//         logged_in: req.session.logged_in
//       });
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });
  
//   // Use withAuth middleware to prevent access to route
//   router.get('/list', withAuth, async (req, res) => {
//     try {
//       // Find the logged in user based on the session ID
//       const userData = await User.findByPk(req.session.user_id, {
//         attributes: { exclude: ['password'] },
//         include: [{ model: List }],
//       });
  
//       const user = userData.get({ plain: true });
  
//       res.render('list', {
//         ...user,
//         logged_in: true
//       });
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });
  

  
  module.exports = router;