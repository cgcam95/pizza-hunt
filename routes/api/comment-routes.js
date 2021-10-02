const router = require('express').Router();

const {
    addComment,
    removeComment,
    addReply,
    removeReply
} = require('../../controllers/comment-controller');

// set up the /api/comments/:pizzaId/:commentId
router
.route('/:pizzaId/:commentId')
.put(addReply)
.delete(removeComment)

// set up the /api/comments/<pizzaId>
router.route('/:pizzaId').post(addComment);             // how does it know its api/comments/pizzaid

// /api/comments/<pizzaId>/<commentId>/<replyId>
router.route('/:pizzaId/:commentId/:replyId').delete(removeReply);

module.exports = router;
