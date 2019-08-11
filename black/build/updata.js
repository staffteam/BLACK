var fs = require("fs");
let datas = require('./routes');
datas._routes_().then(data => {
  fs.writeFile(__dirname+'/data.json', JSON.stringify({router:['/',...data]}), function (err) {
    if (err) {
      res.status(500).send('Server is error...')
    };
    console.log('更新成功！');
  });
});