const router = require('express').Router();
const {
    addComment,
    removeComment
} = require('../../controllers/comment-controller');

// set up the /api/comments/<pizzaId>

router.route('/:pizzaId').post(addComment);             // how does it know its api/comments/pizzaid

// set up the /api/comments/<pizzaId>/<commentId>

router.route('/:pizzaId/:commentId').delete(removeComment);

module.exports = router;