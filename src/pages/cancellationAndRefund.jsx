import React from "react";

const CancellationAndRefund = () => {
  const styles = {
    container: {
      padding: "20px",
      margin: "0 auto",
    //   maxWidth: "900px",
    width: "80%",
      backgroundColor: "#f9f9f9",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    header: {
      fontSize: "1.8rem",
      fontWeight: "bold",
      color: "#000",
      marginBottom: "20px",
    },
    titleHeading: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      color: "#000",
      marginBottom: "20px",
    },
    superHeader: {
      fontSize: "1.8rem",
      marginTop: "20px",
      color: "#000",
    },
    subHeader: {
      fontSize: "1.5rem",
      marginTop: "15px",
      color: "#000",
    },
    paragraph: {
      fontSize: "1rem",
      lineHeight: "1.6",
      color: "#000",
      marginBottom: "16px",
    },
    listItem: {
      marginLeft: "20px",
    },
    link: {
      color: "#007BFF",
      textDecoration: "none",
    },
  };

  return (
    <div style={styles.container}>
        <h1 style={styles.titleHeading}>Return and Refund Policy</h1>
        <p style={styles.paragraph}>
            Last updated: July 08, 2024
        </p>
        <p style={styles.paragraph}>
            Thank you for shopping at iQpaths.
        </p>
        <p style={styles.paragraph}>
            The following terms are applicable for any products that You purchased with Us.
        </p>

        <h2 style={styles.header}>Interpretation and Definitions</h2>
        <h3 style={styles.subHeader}>Interpretation</h3>
        <p style={styles.paragraph}>
        The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
        </p>
        <h3 style={styles.subHeader}>Definitions</h3>
        <p style={styles.paragraph}>
        For the purposes of this Return and Refund Policy:
        </p>
        <ul>
        <li style={styles.paragraph}>
        <p style={styles.paragraph}> <strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to IQPaths, pricanco colony.</p>
        </li>
        <li style={styles.paragraph}>
        <p style={styles.paragraph}> <strong>Goods</strong> refer to the items offered for sale on the Service.</p>
        </li>
        <li style={styles.paragraph}>
        <p style={styles.paragraph}> <strong>Orders</strong> mean a request by You to purchase Goods from Us.</p>
        </li>
        <li style={styles.paragraph}>
        <p style={styles.paragraph}> <strong>Service</strong> refers to the Website.</p>
        </li>
        <li style={styles.paragraph}>
        <strong>Website</strong> refers to iQpaths, accessible from{" "}
        <a
          href="https://iqpaths.com"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          https://iqpaths.com/
        </a>
        </li>
        <li style={styles.paragraph}>
        <p style={styles.paragraph}> <strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</p>
        </li>
      </ul>

      <h2 style={styles.header}>Your Order Cancellation Rights</h2>
        <p style={styles.paragraph}>
        You are entitled to cancel Your Order within 14 days without giving any reason for doing so.
        </p>
        <p style={styles.paragraph}>
        The deadline for cancelling an Order is 14 days from the date on which You received the Goods or on which a third party you have appointed, who is not the carrier, takes possession of the product delivered.
        </p>
        <p style={styles.paragraph}>
        In order to exercise Your right of cancellation, You must inform Us of your decision by means of a clear statement. You can inform us of your decision by:
        </p>
        <ul>
        <li style={styles.paragraph}>
        <p style={styles.paragraph}> <strong>By email: info@iqpaths.com</strong></p>
        </li>
        </ul>
        <p style={styles.paragraph}>
        We will reimburse You no later than 14 days from the day on which We receive the returned Goods. We will use the same means of payment as You used for the Order, and You will not incur any fees for such reimbursement.
        </p>

        <h2 style={styles.header}>Conditions for Returns</h2>
        <p style={styles.paragraph}>
        In order for the Goods to be eligible for a return, please make sure that:
        </p>
        <ul>
        <li style={styles.paragraph}>
        <p style={styles.paragraph}> <strong>The Goods were purchased in the last 14 days</strong></p>
        </li>
        </ul>
        <p style={styles.paragraph}>
        The following Goods cannot be returned:
        </p>
        <ul>
        <li style={styles.paragraph}>
        <p style={styles.paragraph}> <strong>The supply of Goods made to Your specifications or clearly personalized.</strong></p>
        </li>
        <li style={styles.paragraph}>
        <p style={styles.paragraph}> <strong>The supply of Goods which according to their nature are not suitable to be returned, deteriorate rapidly or where the date of expiry is over.</strong></p>
        </li>
        <li style={styles.paragraph}>
        <p style={styles.paragraph}> <strong>The supply of Goods which are not suitable for return due to health protection or hygiene reasons and were unsealed after delivery.</strong></p>
        </li>
        <li style={styles.paragraph}>
        <p style={styles.paragraph}> <strong>The supply of Goods which are, after delivery, according to their nature, inseparably mixed with other items.</strong></p>
        </li>
        </ul>
        <p style={styles.paragraph}>
        We reserve the right to refuse returns of any merchandise that does not meet the above return conditions in our sole discretion.
        </p>
        <p style={styles.paragraph}>
        Only regular priced Goods may be refunded. Unfortunately, Goods on sale cannot be refunded. This exclusion may not apply to You if it is not permitted by applicable law.
        </p>

        <h2 style={styles.header}>Returning Goods</h2>
        <p style={styles.paragraph}>
        You are responsible for the cost and risk of returning the Goods to Us. You should send the Goods at the following address:
        </p>
        <p style={styles.paragraph}>
        301/74 pricanco colony indore 452009
        </p>
        <p style={styles.paragraph}>
        We cannot be held responsible for Goods damaged or lost in return shipment. Therefore, We recommend an insured and trackable mail service. We are unable to issue a refund without actual receipt of the Goods or proof of received return delivery.
        </p>

        <h2 style={styles.header}>Gifts</h2>
        <p style={styles.paragraph}>
        If the Goods were marked as a gift when purchased and then shipped directly to you, You'll receive a gift credit for the value of your return. Once the returned product is received, a gift certificate will be mailed to You.
        </p>
        <p style={styles.paragraph}>
        If the Goods weren't marked as a gift when purchased, or the gift giver had the Order shipped to themselves to give it to You later, We will send the refund to the gift giver.
        </p>

        <h3 style={styles.subHeader}>Contact Us</h3>
        <p style={styles.paragraph}>
        If you have any questions about our Returns and Refunds Policy, please contact us:
        </p>
        <ul>
        <li style={styles.paragraph}>
        <p style={styles.paragraph}> <strong>By email: info@iqpaths.com</strong></p>
        </li>
        </ul>
    </div>
  );
};

export default CancellationAndRefund;
