import axios from "axios";
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";
import "./page.css";

export default async function Home() {
  let products = [];

  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    products = response?.data;
  } catch (err) {
    console.log(err);
  }

  return (
    <div className="container">
      {/* Page Description */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="page_description">
          <h1 className="page_description_heading">Discover Our Products</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>

      {/* Entire filter + toggle + products section */}
      <ClientLayoutWrapper products={products} />
    </div>
  );
}
