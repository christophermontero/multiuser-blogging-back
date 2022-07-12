const express = require('express');
const router = express.Router();
const { requireSignin } = require('../../contollers/auth.controller');
const { authController, categoryController } = require('../../contollers');
const { runValidation } = require('../../validators');
const {
  createCategoryValidator
} = require('../../validators/category.validator');

router.post(
  '/',
  createCategoryValidator,
  runValidation,
  requireSignin,
  authController.adminMiddleware,
  categoryController.create
);
router.get('/', categoryController.list);
router.get('/:slug', categoryController.read);
router.delete(
  '/:slug',
  requireSignin,
  authController.adminMiddleware,
  categoryController.remove
);
module.exports = router;
