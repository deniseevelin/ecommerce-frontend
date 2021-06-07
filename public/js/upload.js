const config = {
  region: "fra1",
  accessKeyId: "OHWGZDT3E6SETY4H2YFY",
  secretAccessKey: "sIT/0oGWJyLPvcIX6JHRu33b776CoCWWSi3rTh96fYQ",
  bucketName: "shineyou",
};

const endpoint = new AWS.Endpoint(config.region + ".digitaloceanspaces.com");

document.addEventListener("DOMContentLoaded", () => {
    window.s3 = new AWS.S3({
        endpoint,
        accessKeyId: config.accessKeyId,
        secretAccessKey: config.secretAccessKey,
        params: {
          Bucket: config.bucketName,
        },
      });
});

const upload = (field) => {
    return new Promise((resolve, reject) => {

        const files = document.getElementById(field).files;

        if (files.length == 0) return null;
    
        const file = files[0];
    
        let extTmp = file.name.substr(-6).split('.');
        const key = (Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)).toUpperCase() + '.' + extTmp[1];
    
        window.s3.upload({
          Key: key,
          Body: file,
          ACL: "public-read",
          ContentType: file.type
        })
        .send((err, res) => {
          resolve(res);
        })
    });
};
