const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  //sau này phải tự tính
  // promotion_money: {
  //   type: Number,
  //   // required: [true, "Hãy nhập số tiền khuyến mãi sản phẩm"],
  //   default: 0,
  // },
  name: {
    type: String,
    required: [true, "Hãy nhập tên sản phẩm"],
    trim: true,
    unique: true,
  },
  // name_Compact: {
  //   type: String,
  //   required: [true, "Hãy nhập tên sản phẩm"],
  //   maxLength: [15, "Tên không được quá 30 kí tự"],
  //   trim: true,
  //   unique: true,
  // },
  cost: {
    type: Number,
    required: [true, "Hãy nhập giá gốc của sản phẩm"],
  },
  //sau này phải tự tính
  promotional: {
    type: Number,
    default: 0,
  },
  Status_promotional: {
    type: Boolean,
    default: true,
  },
  brand: {
    // required: [true, "Hãy nhập thương hiệu của sản phẩm"],
    type: mongoose.Schema.Types.ObjectId,
    ref: "Brand",
    required: true,
  },
  RAM: {
    type: String,
    required: [true, "Hãy nhập RAM của sản phẩm"],
  },
  RAM_specs: {
    type: String,
  },
  description: {
    type: String,
    // required: [true, "Hãy nhập giới thiệu của sản phẩm"],
  },
  description_more: {
    type: String,
  },
  gift_images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  gift_image_name: {
    type: String,
  },
  gift_image_count: {
    type: Number,
    default: 1,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  Insurance: {
    type: Number,
    // required: "Hãy nhập số tháng bảo hành của sản phẩm",
    default: 12,
  },
  Color: {
    type: String,
    // required: [true, "Hãy nhập màu sắc của sản phẩm"],
  },
  Demand: {
    type: String,
    // required: [true, "Hãy nhập nhu cầu của sản phẩm"],
  },
  CPU: {
    type: String,
    required: [true, "Hãy nhập CPU của sản phẩm"],
  },
  CPU_The_system: {
    type: String,
    required: [true, "Hãy nhập Nhu cầu của sản phẩm"],
  },
  CPU_specs: {
    type: String,
    // required: [true, "Hãy nhập CPU của sản phẩm"],
  },
  Card_Graphic: {
    type: String,
    required: [true, "Hãy nhập chip đồ họa của sản phẩm"],
  },

  Monitor: {
    type: Number,
    required: [true, "Hãy nhập kích thước màn hình của sản phẩm"],
  },
  Monitor_specs: {
    type: String,
    // required: [true, "Hãy nhập kích thước màn hình của sản phẩm"],
  },
  Storage: {
    type: String,
    required: [true, "Hãy nhập mức độ lưu trữ của sản phẩm"],
  },
  Port_number: {
    type: String,
    // required: [true, "Hãy nhập số cổng tối đa của sản phẩm"],
  },
  Support_slot_type: {
    type: String,
    // required: [true, "Hãy nhập cổng xuất hình của sản phẩm"],
  },
  Output_port: {
    type: String,
    // required: [true, "Hãy nhập cổng xuất hình của sản phẩm"],
  },
  Connector: {
    type: String,
    // required: [true, "Hãy nhập cổng kết nối của sản phẩm"],
  },
  Wireless_Connectivity: {
    type: String,
    // required: [true, "Hãy nhập kết nối không dây của sản phẩm"],
  },
  Keyboard: {
    type: String,
    // required: [true, "Hãy nhập kiểu bàn phím của sản phẩm"],
  },
  Operating_system: {
    type: String,
    required: [true, "Hãy nhập hệ điều hành của sản phẩm"],
  },
  Size: {
    type: String,
    required: [true, "Hãy nhập kích thước của sản phẩm"],
  },
  Battery: {
    type: String,
    required: [true, "Hãy nhập pin của sản phẩm"],
  },
  Mass: {
    type: Number,
    required: [true, "Hãy nhập khối lượng của sản phẩm"],
  },
  Led: {
    type: String,
    // required: [true, "Đèn led trên máy"],
    // default: false,
  },
  Accessories_included: {
    type: String,
    // required: [true, "Phụ kiện đi kèm"],
  },
  Stock: {
    type: Number,
    required: [true, "Hãy nhập số lượng trong kho của sản phẩm"],
    // maxLength: [4, "Stock cannot exceed 4 characters"],
    default: 1,
  },
  sold: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Product", productSchema);
