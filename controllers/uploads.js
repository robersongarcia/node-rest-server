const path = require('path')
const { dirname } = require('path');
const appDir = dirname(require.main.filename);

const uploadFiles = (req, res) => {

    if (!req.files || Object.keys(req.files).length === 0 || !req.files.file) {
      return res.status(400).json({
        msg: 'No files uploaded'
      });
    }

    const {file} = req.files

    const nameSplit = file.name.split('.')

    console.log(nameSplit[nameSplit.length - 1])

    uploadPath = path.join(appDir + '/uploads/' + file.name)
  
    // Use the mv() method to place the file somewhere on your server
    file.mv(uploadPath, function(err) {
      if (err)
        return res.status(500).json({err});
  
      res.json({msg: 'file uploaded ok' + uploadPath});
    });
}

module.exports = {
    uploadFiles
}