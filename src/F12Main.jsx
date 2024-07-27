const tableHeaderStyle = {
  backgroundColor: "#f2f2f2",
  padding: 8,
  border: "1px solid #ddd",
}

const tableCellStyle = {
  padding: 8,
  border: "1px solid #ddd",
  color: "blue",
}

export default function F12Main() {
  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ marginBottom: 20, fontSize: 20 }}>Page List</h1>
      <table style={{ borderCollapse: 'collapse', border: '1px solid #ddd' }}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>URL</th>
            <th style={tableHeaderStyle}>Page</th>
          </tr>
        </thead>
        <tbody>
<tr>
            <td style={tableCellStyle}><a href='/HiFiWireframe'>/HiFiWireframe</a></td>
            <td style={tableCellStyle}><a href='/HiFiWireframe'>Hi-Fi Wireframe</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/HiFiWireframeCart'>/HiFiWireframeCart</a></td>
            <td style={tableCellStyle}><a href='/HiFiWireframeCart'>Hi-Fi Wireframe Cart</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/HiFiWireframeCheckout'>/HiFiWireframeCheckout</a></td>
            <td style={tableCellStyle}><a href='/HiFiWireframeCheckout'>Hi-Fi Wireframe Checkout</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/HiFiWireframePayment'>/HiFiWireframePayment</a></td>
            <td style={tableCellStyle}><a href='/HiFiWireframePayment'>Hi-Fi Wireframe Payment</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/HiFiWireframePayment1'>/HiFiWireframePayment1</a></td>
            <td style={tableCellStyle}><a href='/HiFiWireframePayment1'>Hi-Fi Wireframe Payment</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/HiFiWireframeProduct'>/HiFiWireframeProduct</a></td>
            <td style={tableCellStyle}><a href='/HiFiWireframeProduct'>Hi-Fi Wireframe Product</a></td>
          </tr>
</tbody>
      </table>
    </div>
  );
}