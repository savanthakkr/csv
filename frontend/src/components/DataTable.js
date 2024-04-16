import React, { useState, useEffect } from 'react';
import axios from 'axios';
import $ from 'jquery';
import 'datatables.net';
import * as XLSX from "xlsx";
import '../components/excel.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const DataTable = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/data');
        setProducts(response.data);
        $('#dataTable').DataTable();
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);


  // const handleDownload = () => {
  //   const rows = products.map((Products) => ({
  //     id: Products.id,
      
  //     product_name: Products.product_name,
  //     product_id: Products.product_id,
  //     sku: Products.sku,
  //     variant_id: Products.variant_id,
  //     price: Products.price,
  //     discount_percentage: Products.discount_percentage,
  //     description: Products.description,
  //     category: Products.category,
  //     discount_price: Products.discount_price
  //   }));

  //   const workbook = XLSX.utils.book_new();
  //   const worksheet = XLSX.utils.json_to_sheet(rows);

  //   XLSX.utils.book_append_sheet(workbook, worksheet, "Products");

  //   XLSX.utils.sheet_add_aoa(worksheet, [
  //     ["Product ID", "product_name", "product_id", "sku", "variant_id", "price", "discount_percentage", "description", "category", "discount_price"],
  //   ]);

  //   let d = new Date();
  //   let dformat = `${d.getHours()}-${d.getMinutes()}-${d.getSeconds()}`;

  //   XLSX.writeFile(workbook, `${Date.now()}.xlsx`, { compression: true });
  // };



  const handleDownload = async () => {
    const rows = products.map((Products) => ({
      id: Products.id,
      product_name: Products.product_name,
      product_id: Products.product_id,
      sku: Products.sku,
      variant_id: Products.variant_id,
      price: Products.price,
      discount_percentage: Products.discount_percentage,
      description: Products.description,
      category: Products.category,
      discount_price: Products.discount_price
    }));
  
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(rows);
  
    XLSX.utils.book_append_sheet(workbook, worksheet, "Products");
  
    XLSX.utils.sheet_add_aoa(worksheet, [
      ["Product ID", "product_name", "product_id", "sku", "variant_id", "price", "discount_percentage", "description", "category", "discount_price"],
    ]);
  
  
    const filePath = `${Date.now()}.xlsx`;
    XLSX.writeFile(workbook, filePath, { compression: true });
  
    // try {
    //   const response = await axios.post('http://localhost:5000/api/export/excel', { filePath });
    //   console.log(response.data);
    // } catch (error) {
    //   console.error(error);
    // }
  };


  // when user download file i want to send a mail also this downloaded file using node js react js 

  return (
    <div className="container text-center">
      <table className="table table-center table-hover table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Product Name</th>
            <th>Product ID</th>
            <th>SKU</th>
            <th>Variant ID</th>
            <th>Price</th>
            <th>Discount</th>
            <th>Description</th>
            <th>Category ID</th>
            <th>discount_price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} className='excel-column'>
              <td>{product.product_name}</td>
              <td>{product.product_id}</td>
              <td>{product.sku}</td>
              <td>{product.variant_id}</td>
              <td>{product.price}</td>
              <td>{product.discount_percentage}</td>
              <td>{product.description}</td>
              <td>{product.category_name}</td>
              <th>{product.discount_price}</th>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleDownload}>DOWNLOAD EXCEL</button>
    </div>
  );
};

export default DataTable;