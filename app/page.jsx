const products = [
  {
    name: "Noir Blanc",
    notes: "Tiare flower, coconut, warm cedarwood",
    tags: ["Tiare", "Coconut", "Cedar"],
    price: "Rs849",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1000&q=80"
  },
  {
    name: "Amber Mist",
    notes: "Golden amber, cardamom, driftwood",
    tags: ["Amber", "Cardamom", "Wood"],
    price: "Rs549",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1000&q=80"
  },
  {
    name: "Sea Salt & Sun",
    notes: "Refreshing aquatic, energizing burst",
    tags: ["Sea Salt", "Lime", "Sugarcane"],
    price: "Rs229",
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=1000&q=80"
  },
  {
    name: "Bergamot & Mint",
    notes: "Fresh, green, everyday uplift",
    tags: ["Bergamot", "Mint", "Tea Tree"],
    price: "Rs79",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1000&q=80"
  },
  {
    name: "Vanilla Amber",
    notes: "Sweet, warm and universally adored",
    tags: ["Vanilla", "Amber", "Benzoin"],
    price: "Rs139",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1000&q=80"
  },
  {
    name: "Fresh Linen",
    notes: "Clean, airy, everyday essential",
    tags: ["Linen", "Aqua", "Light Musk"],
    price: "Rs139",
    image: "https://images.unsplash.com/photo-1619451334792-150fd785ee74?auto=format&fit=crop&w=1000&q=80"
  }
];

function Logo() {
  return (
    <div className="logo" aria-label="https://res.cloudinary.com/nqotqftf/image/upload/v1788372111/simple_logo_black_gold_v2.jpg">
      <div className="logo-mark">SF</div>
      <span>SCENTFUSED</span>
    </div>
  );
}

function ProductCard({ product, index }) {
  return (
    <article className="product-card">
      <div className="product-image" style={{ backgroundImage: `url(${product.image})` }}>
        {index === 0 && <span className="new-badge">NEW</span>}
        <span className="unisex-badge">UNISEX</span>
      </div>
      <div className="product-info">
        <div className="product-title-row">
          <h3>{product.name}</h3>
          <small>30ml</small>
        </div>
        <p>{product.notes}</p>
        <div className="tags">
          {product.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
        <div className="product-bottom">
          <strong>{product.price}</strong>
          <button>+ Cart</button>
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main>
      <header className="navbar">
        <Logo />
        <div className="nav-actions">
          <button className="admin">⌘ ADMIN</button>
          <button className="bag">▢</button>
        </div>
      </header>

      <section className="hero">
        <div className="eyebrow"><span /> FUSED BY SCENT, DEFINED BY YOU</div>
        <h1>Fused by Scent, <em>Defined</em> by You</h1>
        <p>Curated fragrances, grooming rituals, and skin care essentials<br />for men, women, and everyone in between.</p>
        <div className="hero-actions">
          <button className="primary">SHOP NOW</button>
          <button className="text-button">Our Story&nbsp; ›</button>
        </div>

        <div className="stats">
          <div><strong>21</strong><span>Products</span></div>
          <div><strong>6</strong><span>Categories</span></div>
          <div><strong>100%</strong><span>Premium Quality</span></div>
        </div>
      </section>

      <nav className="categories">
        {["PERFUMES", "BODY WASH", "SOAPS", "BEARD OILS", "ROLL-ONS"].map(item => (
          <button key={item}>◆&nbsp; {item}</button>
        ))}
      </nav>

      <section className="catalog">
        <div className="catalog-top">
          <div className="search">⌕&nbsp; Search fragrances, notes...</div>
          <div className="filters">
            <span>FOR:</span>
            {["ALL", "MEN", "WOMEN", "UNISEX"].map((item, i) => (
              <button className={i === 3 ? "active" : ""} key={item}>{item}</button>
            ))}
          </div>
        </div>

        <div className="catalog-heading">
          <h2>All Products <em>— for unisex</em></h2>
          <span>6 items</span>
        </div>

        <div className="product-grid">
          {products.map((product, index) => <ProductCard key={product.name} product={product} index={index} />)}
        </div>
      </section>

      <section className="collection">
        <div>
          <h2>Crafted to <em>linger.</em></h2>
          <p>Every ScentFused product is blended with premium-grade fragrance<br />oils for intensity that outlasts the day.</p>
        </div>
        <button className="outline">EXPLORE ALL</button>
      </section>

      <footer>
        <div className="footer-brand">
          <Logo />
          <p>A luxury fragrance house crafting<br />bold, intimate, and long-lasting<br />scents for every soul.</p>
        </div>
        <div>
          <h4>SHOP</h4>
          <a>Perfumes</a><a>Body Wash</a><a>Soaps</a><a>Beard Oils</a><a>Roll-Ons</a>
        </div>
        <div>
          <h4>HELP</h4>
          <a>Shipping Policy</a><a>Returns</a><a>FAQs</a><a>Contact Us</a>
        </div>
        <div>
          <h4>CONNECT</h4>
          <a>Instagram</a><a>TikTok</a><a>Facebook</a><a>WhatsApp</a>
        </div>
      </footer>
    </main>
  );
}
