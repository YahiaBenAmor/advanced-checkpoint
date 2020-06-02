import React from "react";
import PropTypes from "prop-types";
const ProductTable = props => {
  const content = props.data.map((el, i) => { 
    return (
      <tr key={i} style={{ borderBottom: "2px solid black", backgroundColor:"grey" }}>
        <td
          style={{
            borderRight: "2px solid black",
            color: "red",
            textAlign: "center", 
            padding:"10px"
          }}
        >
          {el.category}
        </td>
        <td
          style={{
            borderRight: "2px solid black",
            color: "red",
            textAlign: "center", 
            padding:"10px"
          }}
        >
          {el.name}
        </td>
        <td style={{  
          borderRight: "2px solid black",
          color: "red",
         textAlign: "center"
         }}>
          {el.price}
        </td>
      </tr>
    );
  }); 
  return (
    <div>
      <table
        style={{
          border: "2px solid black",
          width: "60%",
          textAlign: "center", 
          borderCollapse: "collapse", 
          backgroundColor:"blue"
        }}
      >
        <thead>
          <tr style={{ borderBottom: "2px solid black" }}>
            <td style={{ borderRight: "2px solid black", fontWeight: "bolder" }}>
              Category
            </td>
            <td style={{ borderRight: "2px solid black", fontWeight: "bolder" }}>
              Name
            </td>
            <td style={{ fontWeight: "bolder" }}> 
            Price
            </td>
          </tr>
        </thead>
        <tbody style={{ border: "2px solid black" }}>{content}</tbody>
      </table>
    </div>
  );

};

ProductTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number
    })
  )
};

export default ProductTable;