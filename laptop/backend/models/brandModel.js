const mongoose = require("mongoose");

const brandSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, "Hãy nhập tên thương hiệu"],
  },
  logo: {
    type: String,
    default: 'https://yumenohoshi.jp/wp-content/uploads/2020/01/noimage.png'
  },
  image: {
    type: String,
    default: 'https://tse4.mm.bing.net/th?id=OIP.p0WAlcQXPdY_rVmq7_ynOwHaDW&pid=Api&P=0'
  },
  sold: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Brand", brandSchema);
