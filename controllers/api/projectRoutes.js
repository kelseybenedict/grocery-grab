const router = require('express').Router();
const { Project } = require('../../models');
const withAuth = require('../../utils/auth');
const {sendText} = require('../../utils/twilio');

router.post('/', withAuth, async (req, res) => {
  try {
    const newProject = await Project.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newProject);
  } catch (err) {
    res.status(400).json(err);
  }
});

// get list info to send through Twilio
router.post('/text/:id', withAuth, async (req, res) => {
  try {
    console.log(req.params.id, req.body)
    // verify .number & .list
    sendText(req.body.number, req.body.project)
  } catch (error) {
    res.status(400).json(err);
  }
});
// router.get('/:id', withAuth, async (req, res) => {
//   try {
//     const projectData = await Project.findByPk(req.params.id, {
//       include: [
//         {
//           model: Project,
//           attributes: ['name'],
//         },
//       ],
//     });

//     const project = projectData.get({ plain: true });
// // ????
//     res.status(200).json(project);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const projectData = await Project.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!projectData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
