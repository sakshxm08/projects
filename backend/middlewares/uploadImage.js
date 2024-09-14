const multer = require("multer");
const multerS3 = require("multer-s3");
const { S3Client } = require("@aws-sdk/client-s3");
const path = require("path");
const config = require("../config");

const s3 = new S3Client({
  credentials: {
    accessKeyId: config.AWS.ACCESS_KEY_ID,
    secretAccessKey: config.AWS.SECRET_ACCESS_KEY,
  },
  region: config.AWS.AWS_REGION,
});

const s3Storage = multerS3({
  s3: s3,
  bucket: "projects.sakshxm08.in",
  contentType: multerS3.AUTO_CONTENT_TYPE,
  acl: "public-read",
  metadata: (req, file, cb) => {
    cb(null, { fieldname: file.fieldname });
  },
  key: (req, file, cb) => {
    console.log(file.originalname);
    console.log(file.fieldname);
    const fileName =
      file.fieldname + "_" + Date.now() + "_" + file.originalname;
    cb(null, fileName);
  },
});

const sanitizeFile = (file, cb) => {
  const fileExts = [".png", ".jpg", ".jpeg", ".svg", ".webp"];

  const isAllowedExt = fileExts.includes(
    path.extname(file.originalname.toLowerCase())
  );

  const isAllowedMimeType = file.mimetype.startsWith("image/");

  if (isAllowedExt && isAllowedMimeType) return cb(null, true);

  cb("Error: File type not allowed!");
};

const uploadImage = multer({
  storage: s3Storage,
  fileFilter: (req, file, cb) => {
    sanitizeFile(file, cb);
  },
  limits: { fileSize: 1024 * 1024 * 5 }, // Adjust limits as needed
}).fields([
  { name: "logo", maxCount: 1 },
  { name: "poster", maxCount: 1 },
]);

module.exports = uploadImage;
