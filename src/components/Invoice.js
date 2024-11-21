import React from 'react'
import InvoiceDetails from './InvoiceDetails'
import Items from './Items'

function Invoice() {
  return (
    <>
    <header className="Invoice">Invoice</header>
    <InvoiceDetails/>
    <Items/>
    </>

  )
}

export default Invoice