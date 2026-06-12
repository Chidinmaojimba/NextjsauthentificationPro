"use client";

import Link from "next/link";
import styles from "../styles/dashboard.module.css";
import Button from "../components/table";

export default function Dashboard() {
  const totalProducts = 1284;
  const monthlySales = 12420;
  const customers = 842;

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <h2 className={styles.logo}>ProManager</h2>

        <ul className={styles.menu}>
          <li className={styles.active}>
            <Link href="/dashboard">Home</Link>
          </li>

          <li>
            <Link href="/products">Products</Link>
          </li>

          <li>
            <Link href="/sales">Sales</Link>
          </li>

          <li>
            <Link href="/profile">Profile</Link>
          </li>
        </ul>
      </div>

      <div className={styles.main}>
        <div className={styles.header}>
          <input
            type="text"
            placeholder="Search products..."
            className={styles.search}
          />

          <h2>Dashboard</h2>
        </div>

        <div className={styles.cards}>
          <div className={styles.card}>
            <div className="iconn">
              <i className="fa-regular fa-calendar calender-icon"></i>
            </div>

            <p>Total Products</p>
            <h1>{totalProducts}</h1>
          </div>

          <div className={styles.card}>
            <div className="iconn">
              <i className="fa-regular fa-money-bill-1 calender-icon"></i>
            </div>

            <p>Monthly Sales</p>
            <h1>${monthlySales}</h1>
          </div>

          <div className={styles.card}>
            <div className="iconn">
              <i className="fa-solid fa-envelope-circle-check calender-icon"></i>
            </div>

            <p>Customers</p>
            <h1>{customers}</h1>
          </div>
        </div>

        <div className={styles.tableBox}>
          <h3>Product Catalog</h3>

          <table className={styles.table}>
            <thead>
              <tr>
                <th>PRODUCT</th>
                <th>CATEGORY</th>
                <th>PRICE</th>
                <th>STATUS</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Acoustic Pro X1</td>
                <td>Audio Hardware</td>
                <td>$299</td>
                <td>
                  <span className={styles.instock}>In Stock</span>
                </td>
              </tr>

              <tr>
                <td>Modernist Watch</td>
                <td>Accessories</td>
                <td>$150</td>
                <td>
                  <span className={styles.lowstock}>Low Stock</span>
                </td>
              </tr>

              <tr>
                <td>HydroSmart 2.0</td>
                <td>Smart Home</td>
                <td>$45</td>
                <td>
                  <span className={styles.outstock}>Out of Stock</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
