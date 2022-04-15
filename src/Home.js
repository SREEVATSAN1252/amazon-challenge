import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/S/sonata-images-prod/UK_Superhero_Acquisition_FT_April_2021_V2/ec12117a-ee48-453c-9a64-4453031d477a._UR3000,600_.jpeg"
        />
        <div className="home__row">
          <Product id="1524518" price={799} star="⭐⭐⭐⭐" description="Fur Jaden Anti Theft Backpack 15.6 Inch Laptop Bag with USB Charging Port and Water Resistant Fabric" img="https://m.media-amazon.com/images/I/91v9NqOYqML._AC_UL480_FMwebp_QL65_.jpg" />
          <Product id="148454" price={1999} star="⭐⭐⭐" description="OFIXO Multi-Purpose Laptop Table/Study Table/Bed Table/Foldable and Portable Wooden/Writing Desk (Wooden)" img="https://m.media-amazon.com/images/I/61Li8vJ+7iL._AC_UL480_FMwebp_QL65_.jpg" />
          <Product id="148924"price={21000} star="⭐⭐⭐⭐⭐" description="Samsung The Serif Series 108 cm (43 inches) 4K Ultra HD Smart QLED TV QA43LS01TAKXXL (Cloud White) (2020 Model)" img="https://m.media-amazon.com/images/I/61GwJAhftvS._AC_UY327_FMwebp_QL65_.jpg" />
        </div>
        <div className="home__row">
        <Product id="178454"price={1799} star="⭐⭐⭐⭐" description="ASGARD Multi Functional Sports Digital Dial Men's Watch" img="https://m.media-amazon.com/images/I/71yUJm6cjvL._AC_UL480_FMwebp_QL65_.jpg" />
          <Product id="173461"price={129999} star="⭐⭐⭐⭐⭐" description="Apple iPhone 13 Pro Max (128 GB) - Alpine Green" img="https://m.media-amazon.com/images/I/611ovP2GkrL._AC_UY327_FMwebp_QL65_.jpg" />
          <Product  id="787454"price={185999} star="⭐⭐⭐⭐⭐" description="2021 Apple iPad Pro with Apple M1 chip (12.9-inch/32.77 cm, Wi-Fi, 2TB) - Space Grey (5th Generation)" img="https://m.media-amazon.com/images/I/81+N4PFF7jS._AC_UY327_FMwebp_QL65_.jpg" />

        </div>
        <div className="home__row">
        <Product id="254643" price={219999} star="⭐⭐⭐⭐" description="2021 Apple iMac with 4.5K Retina Display (24-inch/60.96 cm, Apple M1 chip with 8‑core CPU and 8‑core GPU, 8GB RAM, 512GB) - Blue" img="https://m.media-amazon.com/images/I/61p-ADlugUS._AC_UY327_FMwebp_QL65_.jpg" />
          <Product id="667985" price={129999} star="⭐⭐⭐⭐⭐" description="Echo Dot (3rd Gen) - #1 smart speaker brand in India with Alexa (Black)" img="https://m.media-amazon.com/images/I/61EXU8BuGZL._AC_UL480_FMwebp_QL65_.jpg" />
          <Product id="464984" price={1599} star="⭐⭐⭐⭐⭐" description="MI Super Bass Bluetooth Wireless On Ear Headphones with Mic" img="https://m.media-amazon.com/images/I/711DagBh+SL._AC_UL480_FMwebp_QL65_.jpg" />
        </div>
      </div>
    </div>
  );
}

export default Home;
