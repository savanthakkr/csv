const db = require('../db');
const fs = require('fs');
const xlsx = require('xlsx')
const express = require("express");
const fileUpload = require("express-fileupload");
const nodemailer = require("nodemailer");
const app = express();

app.use(fileUpload());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "sponda.netclues@gmail.com",
    pass: "qzfm wlmf ukeq rvvb"
  },
});


const uploadFile = (req, res) => {

  console.log(req.files);
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  const file = req.files.file;
  const fileName = `./public/uploads/${Date.now()}_${file.name}`;
  console.log(file);

  const mailOptions = {
    from: "sponda.netclues@gmail.com",
    to: "savanponda11@gmail.com",
    subject: "Downloaded File",
    text: "Please find the attached file.",
    attachments: [
      {
        filename: file.name,
        path: path.join(path.join(__dirname, '..', fileName)),
      },
    ],
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Error sending email" });
    } else {
      console.log("Email sent: " + info.response);
      res.json({ message: "Email sent successfully" });
      fs.unlinkSync(filePath);
    }
  });


  

  file.mv(fileName, (err) => {
    if (err) {
      return res.status(500).send(err);
    }

    const workbook = xlsx.readFile(fileName);
    const sheetName = workbook.SheetNames[0];
    const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

      let values = [];
      sheetData.forEach((row) => {
        values.push([
          row.product_name,
          row.product_id,
          row.sku,
          row.variant_id,
          row.price,
          row.discount_percentage,
          row.description,
          row.category
        ]);
      });


      const insertQuery = 'INSERT INTO products (product_name, product_id, sku, variant_id, price, discount_percentage, description, category) VALUES ?';

      db.query(insertQuery, [values], (err, result) => {

        


        if (err) {
          console.error(err);
          return res.status(500).send('Internal Server Error');
        } else {
          res.send('File uploaded successfully.');
        }
      });
    });
};



// all products 
const getAllProducts = (req, res) => {

  db.query(`SELECT products.*, category_list.category_name, (price - (price * discount_percentage / 100)) AS discount_price
  FROM products
  JOIN category_list ON products.category = category_list.category;
  `, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(results);
      
    }
  });
};



const exportToExcel = (req, res) => {
  const { file } = req.files;

  // Save the file to the server
  const filePath = `./${file.name}`;
  fs.writeFileSync(filePath, file.data);

  // Send email with attachment
 
};

// const exportToExcel = (req, res) => {
//   db.query('SELECT *, (price - (price * discount_percentage / 100)) AS discount_price FROM products', (err, results) => {
//     if (err) {
//       console.error(err);
//       res.status(500).send('Internal Server Error');
//     } else {
      
//       const workbook = new excel.Workbook();
//       const worksheet = workbook.addWorksheet('Products');

//       // columns define
//       worksheet.columns = [
//         { header: 'Product Name', key: 'product_name' },
//         { header: 'Product ID', key: 'product_id' },
//         { header: 'SKU', key: 'sku' },
//         { header: 'Variant ID', key: 'variant_id' },
//         { header: 'Price', key: 'price' },
//         { header: 'Discount', key: 'discount_percentage' },
//         { header: 'Price After Discount', key: 'price_after_discount' } // New column for price after discount
//       ];

   
//       results.forEach((product) => {
//         worksheet.addRow(product);
//       });

   
//       res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
//       res.setHeader('Content-Disposition', 'attachment; filename="products.xlsx"');

    
//       workbook.xlsx.write(res)
//         .then(() => {
//           res.end();
//         })
//         .catch((error) => {
//           console.error(error);
//           res.status(500).send('Error exporting to Excel');
//         });
//     }
//   });
// };

module.exports = { exportToExcel };


module.exports = {
  uploadFile,
  getAllProducts,
  exportToExcel,
};
