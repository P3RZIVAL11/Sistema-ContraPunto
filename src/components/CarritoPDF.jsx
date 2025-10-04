// components/CarritoPDF.jsx
import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: { padding: 30, fontSize: 12 },
  header: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  logo: { width: 80, height: 80 },
  companyInfo: { textAlign: 'right' },
  tableHeader: {
    flexDirection: 'row',
    borderBottom: '1px solid #ccc',
    paddingBottom: 5,
    marginBottom: 5,
    fontWeight: 'bold'
  },
  tableRow: { flexDirection: 'row', marginBottom: 5 },
  colProducto: { width: '40%' },
  colCantidad: { width: '20%', textAlign: 'center' },
  colUnitario: { width: '20%', textAlign: 'right' },
  colTotal: { width: '20%', textAlign: 'right', color: '#4CB752' },
  total: { marginTop: 20, fontSize: 14, textAlign: 'right', color: '#4CB752' }
});

const CarritoPDF = ({ cartItems }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Document>
      <Page style={styles.page}>
      <View style={styles.header}>
        <Image
          src= "/src/assets/images/logo contra1.jpg"// reemplaza con tu URL o base64
          style={styles.logo}
        />
        <View style={styles.companyInfo}>
          <Text>Contrapunto Creativos</Text>
          <Text>Av. Creatividad 123, Puebla, México</Text>
          <Text>Tel: (222) 123-4567</Text>
          <Text>Email: contacto@contrapunto.mx</Text>
        </View>
      </View>
        <View style={styles.tableHeader}>
          <Text style={styles.colProducto}>Producto</Text>
          <Text style={styles.colCantidad}>Cantidad</Text>
          <Text style={styles.colUnitario}>Precio Unitario</Text>
          <Text style={styles.colTotal}>Precio Total</Text>
        </View>

        {cartItems.map((item, i) => (
          <View key={i} style={styles.tableRow}>
            <Text style={styles.colProducto}>{item.name}</Text>
            <Text style={styles.colCantidad}>{item.quantity}</Text>
            <Text style={styles.colUnitario}>${item.price.toFixed(2)}</Text>
            <Text style={styles.colTotal}>${(item.price * item.quantity).toFixed(2)}</Text>
          </View>
        ))}
        <Text style={styles.total}>Total: ${total.toFixed(2)}</Text>
      </Page>
    </Document>
  );
};

export default CarritoPDF;
