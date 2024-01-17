const cloudinary = require('cloudinary').v2;

const deleteImg = (imgUrl) => {

  const imgSplited = imgUrl.split('/');
  const folderName = imgSplited.slice(-2, -1)[0];
  const fieldName = imgSplited.slice(-1)[0].split('.');

  const publicId = `family-tasks/${folderName}/${fieldName[0]}`;

  console.log(publicId);

  cloudinary.uploader.destroy(publicId, () => {
    console.log('Imagen eliminada');
  });

};

module.exports = { deleteImg };