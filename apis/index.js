const router = require("express").Router();

router.use("/auth", require("./auth"));

router.use("/ipfs", require("./ipfs"));

router.use("/info", require("./info"));

router.use("/nftitems", require("./nftitems"));

router.use("/account", require("./account"));

router.use("/collection", require("./collection"));
router.use("/tradehistory", require("./tradehistory"));
router.use("/notifications", require("./notification"));
// console.log('here is OKay.')
router.use("/erc721", require("./erc721"));
router.use("/offer", require("./offer"));
router.use("/ban", require("./ban"));
router.use("/bundle", require("./bundle"));
// console.log('here is OKay.')
router.use("/marketplace", require("./marketplace"));
router.use("/auction", require("./auction"));
router.use("/bundlemarketplace", require("./bundleMarketplace"));
router.use("/follow", require("./follow"));
router.use("/like", require("./like"));
router.use("/factorycollection", require("./factorycollection"));

router.use("/mod", require("./moderator"));
router.use("/turk", require("./turk"));
router.use("/lock", require("./lock"));
router.use("/payToken", require("./paytoken"));
router.use("/mail", require("./mail"));

router.use("/unlockable", require("./unlockable"));
router.use("/transfer", require("./transfertracker"));
module.exports = router;
