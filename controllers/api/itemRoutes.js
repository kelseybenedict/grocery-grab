const router = require('express').Router();
const { Item } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newItem = await Item.create({
        ...req.body,
      project_id: req.body.project_id,
    });

    res.status(200).json(newItem);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const ItemData = await Item.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!ItemData) {
      res.status(404).json({ message: 'No item found with this id!' });
      return;
    }

    res.status(200).json(ItemData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;