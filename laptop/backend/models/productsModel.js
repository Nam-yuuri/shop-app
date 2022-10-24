const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  //sau này phải tự tính
//   promotion_money: {
//     type: Number,
//     require: true,
//     required: [true, "Hãy nhập số tiền khuyến mãi sản phẩm"],
//   },
  name: {
    type: String,
    required: [true, "Hãy nhập tên sản phẩm"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Hãy nhập giới thiệu của sản phẩm"],
  },
  cost: {
    type: Number,
    required: [true, "Hãy nhập giá gốc của sản phẩm"],
  },
  promotional_price: {
    type: Number,
    required: [true, "Hãy nhập giá khuyến mãi của sản phẩm"],
  },
  //sau này phải tự tính
//   percent: {
//     type: String,
//     require: true,
//   },
//   brand: {
//     type: String,
//     required: [true, "Hãy nhập thương hiệu của sản phẩm"],
//   },
//   SKU: {
//     type: String,
//     required: [true, "Hãy nhập mã của sản phẩm"],
//   },
//   gift_image: {
//     type: String,
//     // required: [true, "Hãy nhập giá khuyến mãi của sản phẩm"],
//   },
//   gift_image_name: {
//     type: String,
//     required: [true, "Hãy nhập tên quà"],
//   },
//   gift_image_count: {
//     type: Number,
//     required: [true, "Hãy nhập số lượng quà"],
//   },
// //   images: [
// //     {
// //       public_id: {
// //         type: String,
// //         required: true,
// //       },
// //       url: {
// //         type: String,
// //         required: true,
// //       },
// //     },
// //   ],
//   Insurance: {
//     type: Number,
//     required: [true, "Hãy nhập số tháng bảo hành của sản phẩm"],
//   },
//   Color: {
//     type: String,
//     required: [true, "Hãy nhập màu sắc của sản phẩm"],
//   },
//   CPU_The_system: {
//     type: String,
//     required: [true, "Hãy nhập thế hệ CPU của sản phẩm"],
//   },
//   CPU: {
//     type: String,
//     required: [true, "Hãy nhập CPU của sản phẩm"],
//   },
//   Card_Graphic: {
//     type: String,
//     required: [true, "Hãy nhập chip đồ họa của sản phẩm"],
//   },
//   RAM: {
//     type: String,
//     required: [true, "Hãy nhập RAM của sản phẩm"],
//   },
//   Monitor: {
//     type: String,
//     required: [true, "Hãy nhập kích thước màn hình của sản phẩm"],
//   },
//   Storage: {
//     type: String,
//     required: [true, "Hãy nhập mức độ lưu trữ của sản phẩm"],
//   },
//   Port_number: {
//     type: String,
//     required: [true, "Hãy nhập số cổng tối đa của sản phẩm"],
//   },
//   Support_slot_type: {
//     type: String,
//     required: [true, "Hãy nhập cổng hỗ trợ của sản phẩm"],
//   },
//   Output_port: {
//     type: String,
//     required: [true, "Hãy nhập cổng xuất hình của sản phẩm"],
//   },
//   Connector: {
//     type: String,
//     required: [true, "Hãy nhập cổng kết nối của sản phẩm"],
//   },
//   Wireless_Connectivity: {
//     type: String,
//     required: [true, "Hãy nhập kết nối không dây của sản phẩm"],
//   },
//   Keyboard: {
//     type: String,
//     required: [true, "Hãy nhập kiểu bàn phím của sản phẩm"],
//   },
//   Operating_system: {
//     type: String,
//     required: [true, "Hãy nhập hệ điều hành của sản phẩm"],
//   },
//   Size: {
//     type: String,
//     required: [true, "Hãy nhập kích thước của sản phẩm"],
//   },
//   Battery: {
//     type: String,
//     required: [true, "Hãy nhập pin của sản phẩm"],
//   },
//   Mass: {
//     type: String,
//     required: [true, "Hãy nhập khối lượng của sản phẩm"],
//   },
//   Led: {
//     type: Boolean,
//     required: [true, "Đèn led trên máy"],
//     default: false,
//   },
//   Accessories_included: {
//     type: String,
//     required: [true, "Phụ kiện đi kèm"],
//   },
//   Stock: {
//     type: Number,
//     required: [true, "Hãy nhập số lượng trong kho của sản phẩm"],
//     // maxLength: [4, "Stock cannot exceed 4 characters"],
//     default: 1,
//   },
  sold: {
    type: Number,
    default: 0,
  },
  category: {
    type: mongoose.Schema.ObjectId,
    ref: "Category",
    required: true,
  },
//   Product_Description: [
//     {
//       title: {
//         type: String,
//         default: "Null",
//       },
//       image: {
//         type: String,
//         default: "Null",
//       },
//     },
//   ],
// //   user: {
// //     type: mongoose.Schema.ObjectId,
// //     ref: "User",
// //     required: true,
// //   },
});

module.exports = mongoose.model("Product", productSchema);
