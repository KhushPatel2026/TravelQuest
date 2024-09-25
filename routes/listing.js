const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const {isLoggedIn, isOwner, validateListing, saveRedirectUrl} = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer = require("multer");
const {storage} = require("../cloudConfig.js");
const upload = multer({storage});

//All Listing
router
  .route("/")
  .get( wrapAsync(listingController.index))
  .post(isLoggedIn, upload.single('listing[image]'), validateListing,wrapAsync(listingController.createListing));

//New Listing
router
  .get("/new",isLoggedIn, listingController.renderNewForm);

//Show Listing
router
  .route("/:id")
  .get( wrapAsync(listingController.showListing))
  .put(isLoggedIn, isOwner, upload.single('listing[image]'), validateListing,wrapAsync(listingController.updateListing))
  .delete(isLoggedIn, isOwner,wrapAsync(listingController.distroyListing));

//Edit Lisitng
router
  .get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm));

module.exports = router;