(function () {
  "use strict";

  var PHONE = "917096067532";

  /* ---------------- PRODUCT DATA ---------------- */
  var PRODUCTS = [
    /* ===== MEN — KURTAS ===== */
    {
      id: "gulal-bandhani",
      category: "men",
      type: "Kurta Set",
      name: "Gulal Bandhani Kurta Set",
      color: "pink",
      colorLabel: "Rani Pink",
      swatch: "#9c2049",
      price: 2499,
      mrp: 3199,
      tag: "Bestseller",
      images: ["images/1000373776.jpg", "images/1000373778.jpg"],
      desc: "Classic bandhani tie-dye in a deep rani pink, cut as a straight kurta and paired with a relaxed white pajama. The go-to for the first night of garba.",
      fabric: "Pure cotton kurta, cotton pajama"
    },
    {
      id: "raat-bandhani",
      category: "men",
      type: "Kurta Set",
      name: "Raat Bandhani Kurta Set",
      color: "navy",
      colorLabel: "Midnight Navy",
      swatch: "#1c2b4a",
      price: 2499,
      mrp: 3199,
      tag: "",
      images: ["images/1000373782.jpg", "images/1000373784.jpg", "images/1000373780.jpg"],
      desc: "The same bandhani wave print in ink navy with gold-toned dots — pairs easily with juttis or mojaris. Comes with a matching white pajama.",
      fabric: "Pure cotton kurta, cotton pajama"
    },
    {
      id: "basanti-bandhani",
      category: "men",
      type: "Kurta Set",
      name: "Basanti Bandhani Kurta Set",
      color: "orange",
      colorLabel: "Marigold Orange",
      swatch: "#cc6a1c",
      price: 2399,
      mrp: 2999,
      tag: "",
      images: ["images/1000373786.jpg", "images/1000373788.jpg"],
      desc: "A marigold-orange bandhani that photographs beautifully under mandap lights. Straight fit, mandarin collar, worn here with an off-white salwar.",
      fabric: "Pure cotton kurta, cotton salwar"
    },
    {
      id: "haveli-print",
      category: "men",
      type: "Kurta",
      name: "Haveli Print Kurta",
      color: "white",
      colorLabel: "Ivory White",
      swatch: "#f3ecdb",
      price: 1999,
      mrp: 2599,
      tag: "New",
      images: ["images/1000373812.jpg", "images/1000373801.jpg", "images/1000373804.jpg", "images/1000373799.jpg", "images/1000373806.jpg"],
      desc: "Ivory kurta with a hand-drawn haveli, elephant and peacock border in coral and sage, finished with a gold jacquard hem. Shown here in both the long and short kurta lengths.",
      fabric: "Cotton linen blend"
    },
    {
      id: "pallavi-embroidered",
      category: "men",
      type: "Kurta",
      name: "Pallavi Embroidered Kurta",
      color: "green",
      colorLabel: "Pista Green",
      swatch: "#a8c98a",
      price: 2899,
      mrp: 3699,
      tag: "",
      images: ["images/1000373819.jpg", "images/1000373846.jpg", "images/1000373821.jpg", "images/1000373817.jpg"],
      desc: "Pista green kurta with scattered booti embroidery and a wide gold-woven hem depicting a courtly dance scene. Dressy enough for ashtami without needing a jacket.",
      fabric: "Silk-cotton blend"
    },
    {
      id: "kutch-mirror",
      category: "men",
      type: "Kurta",
      name: "Kutch Mirror Kurta",
      color: "black",
      colorLabel: "Jet Black",
      swatch: "#191919",
      price: 2199,
      mrp: 2799,
      tag: "Bestseller",
      images: ["images/1000373791.jpg", "images/1000373793.jpg", "images/1000373795.jpg", "images/1000373797.jpg"],
      desc: "Solid black kurta lifted by four hand-appliquéd Kutch mirror-work diamonds and a matching trim at the collar and hem. The one that gets noticed on the dandiya floor.",
      fabric: "Cotton, mirror embroidery"
    },
    {
      id: "ajrakh-patchwork",
      category: "men",
      type: "Kurta",
      name: "Ajrakh Patchwork Kurta",
      color: "multicolor",
      colorLabel: "Patchwork Multi",
      swatch: "linear-gradient(135deg,#2b3a55,#8a2c2c,#2b6b63)",
      price: 2699,
      mrp: 3399,
      tag: "New",
      images: ["images/1000373894.jpg", "images/1000373903.jpg", "images/1000373896.jpg", "images/1000373898.jpg"],
      desc: "An Ajrakh-inspired patchwork of block-printed panels in indigo, rust and teal, styled here over tapered black trousers for a more contemporary Navratri look.",
      fabric: "Pure cotton"
    },
    {
      id: "kachhi-tile",
      category: "men",
      type: "Kurta",
      name: "Kachhi Tile Shirt-Kurta",
      color: "white",
      colorLabel: "Ivory White",
      swatch: "#f3ecdb",
      price: 1799,
      mrp: 2299,
      tag: "",
      images: ["images/1000373921.jpg", "images/1000373917.jpg", "images/1000373919.jpg"],
      desc: "A short, shirt-length kurta covered edge to edge in a multicolour Kachhi diamond-tile print. Layers well over churidars or jeans for the after-party.",
      fabric: "Pure cotton"
    },
    {
      id: "van-vihar",
      category: "men",
      type: "Kurta",
      name: "Van Vihar Print Kurta",
      color: "green",
      colorLabel: "Bottle Green",
      swatch: "#2f4a34",
      price: 2099,
      mrp: 2699,
      tag: "",
      images: ["images/1000373923.jpg", "images/1000373927.jpg", "images/1000373925.jpg"],
      desc: "Bottle green ground with a white block-printed diamond grid of elephants, birds and trees — a quieter cousin of our bandhani sets, in a short kurta cut.",
      fabric: "Pure cotton"
    },
    {
      id: "haldi-elephant",
      category: "men",
      type: "Kurta Set",
      name: "Haldi Elephant Kurta Set",
      color: "yellow",
      colorLabel: "Haldi Yellow",
      swatch: "#f3b620",
      price: 1899,
      mrp: 2399,
      tag: "",
      images: ["images/1000373915.jpg"],
      desc: "Turmeric-yellow straight kurta kept plain through the body with a single embroidered elephant-and-rider motif above the hem. Comes with a white pajama.",
      fabric: "Pure cotton kurta, cotton pajama"
    },
    {
      id: "midnight-ikat",
      category: "men",
      type: "Kurta",
      name: "Midnight Ikat Kurta",
      color: "navy",
      colorLabel: "Midnight Navy",
      swatch: "#1c2b4a",
      price: 1999,
      mrp: 2499,
      tag: "",
      images: ["images/1000373931.jpg", "images/1000373929.jpg", "images/1000373933.jpg"],
      desc: "Navy short kurta in a gold-and-coral diamond ikat print with a mandarin collar. A sharper, shorter alternative to our full-length bandhani sets.",
      fabric: "Pure cotton"
    },
    {
      id: "ganpati-bappa",
      category: "men",
      type: "Kurta",
      name: "Ganpati Bappa Kurta",
      color: "multicolor",
      colorLabel: "Hand-painted Multi",
      swatch: "linear-gradient(135deg,#cc6a1c,#9c2049,#0e5c52)",
      price: 2999,
      mrp: 3799,
      tag: "New",
      images: ["images/1000373935.jpg", "images/1000373937.jpg", "images/1000373941.jpg", "images/1000373939.jpg", "images/1000373943.jpg"],
      desc: "An ivory kurta given over almost entirely to a hand-painted Ganesha portrait in watercolour-style splashes of red, teal and gold. A statement piece for the ashtami visit to the pandal.",
      fabric: "Premium cotton blend"
    },

    /* ===== WOMEN — LEHENGA SETS ===== */
    {
      id: "kaaya-black-patola",
      category: "women",
      type: "Lehenga Set",
      name: "Kaaya Black Patola Lehenga",
      color: "black",
      colorLabel: "Black & Red",
      swatch: "#191919",
      price: 5499,
      mrp: 6999,
      tag: "Bestseller",
      images: ["images/1000374779.jpg", "images/1000374775.jpg", "images/1000374777.jpg", "images/1000374781.jpg", "images/1000374783.jpg", "images/1000374827.jpg"],
      desc: "A black patola-print skirt bordered in a red-and-gold elephant motif, paired with a fitted red blouse and a tasselled dupatta in the same border print. Full circle flare, built for garba twirls.",
      fabric: "Pure cotton skirt & blouse, art-silk dupatta"
    },
    {
      id: "teal-ikat-lehenga",
      category: "women",
      type: "Lehenga Set",
      name: "Teal Ikat Lehenga Set",
      color: "teal",
      colorLabel: "Peacock Teal",
      swatch: "#0e5c52",
      price: 5799,
      mrp: 7299,
      tag: "New",
      images: ["images/1000374787.jpg", "images/1000374799.jpg", "images/1000374795.jpg", "images/1000374797.jpg", "images/1000374793.jpg", "images/1000374791.jpg"],
      desc: "A deep peacock-teal skirt with a wine-red patola dupatta edged in tasselled pom-poms, worn over a fitted maroon blouse. The combination that photographs best under evening dandiya lights.",
      fabric: "Pure cotton skirt & blouse, art-silk dupatta"
    },
    {
      id: "rani-green-patola",
      category: "women",
      type: "Lehenga Set",
      name: "Rani Green Patola Lehenga",
      color: "green",
      colorLabel: "Emerald Green",
      swatch: "#1f6b3f",
      price: 5299,
      mrp: 6799,
      tag: "",
      images: ["images/1000374804.jpg", "images/1000374806.jpg", "images/1000374808.jpg", "images/1000374801.jpg"],
      desc: "Emerald green skirt bordered in a red ikat elephant print, with a matching tasselled dupatta draped over a fitted red blouse. A festive standout for ashtami.",
      fabric: "Pure cotton skirt & blouse, art-silk dupatta"
    },
    {
      id: "noir-mirror-lehenga",
      category: "women",
      type: "Lehenga Set",
      name: "Noir Mirror Lehenga",
      color: "black",
      colorLabel: "Solid Black",
      swatch: "#141414",
      price: 4499,
      mrp: 5799,
      tag: "",
      images: ["images/1000374815.jpg", "images/1000374810.jpg", "images/1000374812.jpg"],
      desc: "A minimal, modern take on the lehenga — solid black skirt and blouse trimmed in silver gota, with a single hand-embroidered mirror-work medallion on the blouse. No dupatta needed.",
      fabric: "Pure cotton, mirror embroidery"
    },
    {
      id: "kaaya-wrap-lehenga",
      category: "women",
      type: "Lehenga Set",
      name: "Kaaya Wrap Lehenga",
      color: "black",
      colorLabel: "Black & Red",
      swatch: "#191919",
      price: 5199,
      mrp: 6599,
      tag: "",
      images: ["images/1000374817.jpg", "images/1000374819.jpg", "images/1000374821.jpg", "images/1000374823.jpg"],
      desc: "The same black patola skirt, styled here with the dupatta wrapped cross-body for a saree-inspired silhouette. Easy to drape yourself, no pins needed.",
      fabric: "Pure cotton skirt & blouse, art-silk dupatta"
    },
    {
      id: "purple-marigold-patola",
      category: "women",
      type: "Lehenga Set",
      name: "Purple & Marigold Patola Lehenga",
      color: "purple",
      colorLabel: "Purple & Marigold",
      swatch: "linear-gradient(135deg,#5a2d7a,#d98a1f)",
      price: 5599,
      mrp: 6999,
      tag: "New",
      images: ["images/1000374831.jpg", "images/1000374833.jpg", "images/1000374829.jpg", "images/1000374825.jpg"],
      desc: "A marigold-orange skirt bordered in deep purple ikat elephants, with a matching purple blouse and dupatta. A rich colour pairing that stands out against every other look on the floor.",
      fabric: "Pure cotton skirt & blouse, art-silk dupatta"
    }
  ];

  var CATEGORIES = [
    { key: "all", label: "All" },
    { key: "men", label: "Men — Kurtas" },
    { key: "women", label: "Women — Lehengas" }
  ];

  var COLOR_FILTERS = [
    { key: "all", label: "All colours", swatch: null },
    { key: "pink", label: "Pink", swatch: "#9c2049" },
    { key: "navy", label: "Navy", swatch: "#1c2b4a" },
    { key: "orange", label: "Orange", swatch: "#cc6a1c" },
    { key: "white", label: "Ivory", swatch: "#f3ecdb" },
    { key: "green", label: "Green", swatch: "#3f7a4f" },
    { key: "teal", label: "Teal", swatch: "#0e5c52" },
    { key: "black", label: "Black", swatch: "#191919" },
    { key: "yellow", label: "Yellow", swatch: "#f3b620" },
    { key: "purple", label: "Purple", swatch: "#5a2d7a" },
    { key: "multicolor", label: "Multicolour", swatch: "linear-gradient(135deg,#cc6a1c,#9c2049,#0e5c52)" }
  ];

  var SIZES = ["S", "M", "L", "XL", "XXL"];

  var INR = new Intl.NumberFormat("en-IN");
  function fmt(n) { return "\u20B9" + INR.format(n); }

  var byId = function (i) { return document.getElementById(i); };

  /* ---------------- STATE (in-memory only, no storage APIs) ---------------- */
  var state = {
    category: "all",
    filter: "all",
    cart: [], // {productId, size, qty}
    modal: { productId: null, activeImage: 0, size: null, qty: 1 }
  };

  /* ---------------- RENDER: CATEGORY TABS ---------------- */
  function renderCategoryTabs() {
    var el = byId("categoryTabs");
    el.innerHTML = "";
    CATEGORIES.forEach(function (c) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = state.category === c.key ? "is-active" : "";
      btn.textContent = c.label;
      btn.addEventListener("click", function () {
        state.category = c.key;
        renderCategoryTabs();
        renderGrid();
      });
      el.appendChild(btn);
    });
  }

  /* ---------------- RENDER: FILTER CHIPS ---------------- */
  function renderFilters() {
    var el = byId("filters");
    el.innerHTML = "";
    COLOR_FILTERS.forEach(function (f) {
      var btn = document.createElement("button");
      btn.className = "chip" + (state.filter === f.key ? " is-active" : "");
      btn.type = "button";
      btn.dataset.key = f.key;
      var swatchHtml = f.swatch
        ? '<i class="swatch" style="background:' + f.swatch + '"></i>'
        : "";
      btn.innerHTML = swatchHtml + "<span>" + f.label + "</span>";
      btn.addEventListener("click", function () {
        state.filter = f.key;
        renderFilters();
        renderGrid();
      });
      el.appendChild(btn);
    });
  }

  /* ---------------- RENDER: PRODUCT GRID ---------------- */
  function renderGrid() {
    var grid = byId("productGrid");
    grid.innerHTML = "";
    var list = PRODUCTS.filter(function (p) {
      var catOk = state.category === "all" || p.category === state.category;
      var colorOk = state.filter === "all" || p.color === state.filter;
      return catOk && colorOk;
    });

    if (!list.length) {
      grid.innerHTML = '<p style="grid-column:1/-1;color:#7a6c95;padding:40px 0;">No pieces match this combination yet — try another filter.</p>';
      return;
    }

    list.forEach(function (p) {
      var card = document.createElement("div");
      card.className = "card";
      card.innerHTML =
        '<div class="card__media" data-open="' + p.id + '">' +
          (p.tag ? '<span class="card__badge">' + p.tag + "</span>" : "") +
          '<img src="' + p.images[0] + '" alt="' + p.name + ', ' + p.colorLabel + '" loading="lazy">' +
          (p.images.length > 1
            ? '<span class="card__count"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="15" height="15" rx="1"/><path d="M8 21h10a2 2 0 0 0 2-2V9"/></svg>' + p.images.length + "</span>"
            : "") +
        "</div>" +
        '<div class="card__body">' +
          '<div><span class="card__sub">' + p.colorLabel + " \u00B7 " + p.type + '</span>' +
          '<h3 class="card__title" data-open="' + p.id + '">' + p.name + "</h3></div>" +
          '<div class="card__row">' +
            '<div class="card__price"><b>' + fmt(p.price) + "</b><s>" + fmt(p.mrp) + "</s></div>" +
            '<button class="card__add" data-quickadd="' + p.id + '"><svg viewBox="0 0 24 24"><path d="M4 6h2l1.4 10.5A2 2 0 0 0 9.4 18h7.2a2 2 0 0 0 2-1.7L20 8H6"/></svg>Add</button>' +
          "</div>" +
        "</div>";
      grid.appendChild(card);
    });
  }

  /* ---------------- MODAL ---------------- */
  function openModal(productId) {
    var p = getProduct(productId);
    if (!p) return;
    state.modal = { productId: productId, activeImage: 0, size: null, qty: 1 };
    byId("modalEyebrow").textContent = p.colorLabel.toUpperCase() + " \u00B7 " + p.type.toUpperCase();
    byId("modalTitle").textContent = p.name;
    byId("modalPrice").textContent = fmt(p.price);
    byId("modalMrp").textContent = fmt(p.mrp);
    var savePct = Math.round((1 - p.price / p.mrp) * 100);
    byId("modalSave").textContent = savePct > 0 ? savePct + "% off" : "";
    byId("modalDesc").textContent = p.desc;
    byId("modalQtyVal").textContent = "1";

    renderModalSizes(p);
    renderModalGallery(p);
    renderRelated(p);

    byId("modal").classList.add("is-visible");
    byId("backdrop").classList.add("is-visible");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    byId("modal").classList.remove("is-visible");
    if (!byId("cartDrawer").classList.contains("is-open")) {
      byId("backdrop").classList.remove("is-visible");
      document.body.style.overflow = "";
    }
  }

  function renderModalSizes(p) {
    var el = byId("modalSizes");
    el.innerHTML = "";
    SIZES.forEach(function (s) {
      var b = document.createElement("button");
      b.className = "size-opt";
      b.type = "button";
      b.textContent = s;
      b.addEventListener("click", function () {
        state.modal.size = s;
        Array.prototype.forEach.call(el.children, function (c) { c.classList.remove("is-active"); });
        b.classList.add("is-active");
      });
      el.appendChild(b);
    });
  }

  function renderModalGallery(p) {
    setModalImage(0);
    var thumbs = byId("modalThumbs");
    thumbs.innerHTML = "";
    p.images.forEach(function (_, idx) {
      var b = document.createElement("button");
      b.type = "button";
      if (idx === 0) b.classList.add("is-active");
      b.setAttribute("aria-label", "Photo " + (idx + 1));
      b.addEventListener("click", function () { setModalImage(idx); });
      thumbs.appendChild(b);
    });
    var arrowsVisible = p.images.length > 1;
    byId("modalPrev").style.display = arrowsVisible ? "flex" : "none";
    byId("modalNext").style.display = arrowsVisible ? "flex" : "none";
  }

  function setModalImage(idx) {
    var p = getProduct(state.modal.productId);
    if (!p) return;
    var total = p.images.length;
    idx = ((idx % total) + total) % total;
    state.modal.activeImage = idx;
    byId("modalImg").src = p.images[idx];
    byId("modalImg").alt = p.name + " \u2014 photo " + (idx + 1) + " of " + total;
    var thumbs = byId("modalThumbs").children;
    Array.prototype.forEach.call(thumbs, function (t, i) {
      t.classList.toggle("is-active", i === idx);
    });
  }

  function renderRelated(p) {
    var related = PRODUCTS.filter(function (o) { return o.color === p.color && o.category === p.category && o.id !== p.id; });
    var title = byId("modalRelatedTitle");
    var row = byId("relatedRow");
    row.innerHTML = "";

    var source = related.length
      ? related
      : PRODUCTS.filter(function (o) { return o.category === p.category && o.id !== p.id; }).slice(0, 4);
    title.textContent = related.length ? "More in " + p.colorLabel : "You may also like";

    source.slice(0, 6).forEach(function (o) {
      var item = document.createElement("div");
      item.className = "related-item";
      item.innerHTML = '<img src="' + o.images[0] + '" alt="' + o.name + '"><span>' + o.name + "</span>";
      item.addEventListener("click", function () { openModal(o.id); });
      row.appendChild(item);
    });
  }

  function getProduct(id) {
    return PRODUCTS.filter(function (p) { return p.id === id; })[0];
  }

  /* ---------------- CART ---------------- */
  function addToCart(productId, size, qty) {
    size = size || "M";
    qty = qty || 1;
    var existing = state.cart.filter(function (l) { return l.productId === productId && l.size === size; })[0];
    if (existing) {
      existing.qty += qty;
    } else {
      state.cart.push({ productId: productId, size: size, qty: qty });
    }
    renderCart();
    showToast(getProduct(productId).name + " added \u2014 size " + size);
  }

  function updateLineQty(index, dir) {
    var line = state.cart[index];
    if (!line) return;
    line.qty += dir;
    if (line.qty <= 0) state.cart.splice(index, 1);
    renderCart();
  }

  function removeLine(index) {
    state.cart.splice(index, 1);
    renderCart();
  }

  function cartTotals() {
    var subtotal = 0, count = 0;
    state.cart.forEach(function (l) {
      var p = getProduct(l.productId);
      if (!p) return;
      subtotal += p.price * l.qty;
      count += l.qty;
    });
    return { subtotal: subtotal, count: count };
  }

  function renderCart() {
    var totals = cartTotals();
    var countEl = byId("cartCount");
    if (totals.count > 0) {
      countEl.style.display = "flex";
      countEl.textContent = totals.count;
    } else {
      countEl.style.display = "none";
    }

    var itemsEl = byId("cartItems");
    var footEl = byId("cartFoot");
    itemsEl.innerHTML = "";

    if (!state.cart.length) {
      itemsEl.innerHTML =
        '<div class="cart-empty">' +
          '<svg viewBox="0 0 24 24"><path d="M4 6h2l1.4 10.5A2 2 0 0 0 9.4 18h7.2a2 2 0 0 0 2-1.7L20 8H6"/><circle cx="9.5" cy="21" r="1.3"/><circle cx="17" cy="21" r="1.3"/></svg>' +
          "<p>Your cart is empty. Add a kurta or lehenga to get started.</p>" +
          '<button class="btn btn--ghost btn--sm" id="cartEmptyShop">Browse the edit</button>' +
        "</div>";
      footEl.style.display = "none";
      var shopBtn = byId("cartEmptyShop");
      if (shopBtn) shopBtn.addEventListener("click", function () { closeCart(); document.getElementById("shop").scrollIntoView({ behavior: "smooth" }); });
      return;
    }

    footEl.style.display = "block";

    state.cart.forEach(function (line, idx) {
      var p = getProduct(line.productId);
      if (!p) return;
      var row = document.createElement("div");
      row.className = "cart-line";
      row.innerHTML =
        '<img src="' + p.images[0] + '" alt="' + p.name + '">' +
        '<div class="cart-line__info">' +
          "<b>" + p.name + "</b>" +
          '<span class="meta">Size ' + line.size + " \u00B7 " + fmt(p.price) + " each</span>" +
          '<div class="cart-line__bottom">' +
            '<div class="qty-row" data-idx="' + idx + '">' +
              '<button data-dir="-1">\u2212</button><span>' + line.qty + "</span><button data-dir=\"1\">+</button>" +
            "</div>" +
            '<span class="cart-line__price">' + fmt(p.price * line.qty) + "</span>" +
          "</div>" +
        "</div>" +
        '<button class="cart-line__remove" data-remove="' + idx + '" aria-label="Remove">Remove</button>';
      itemsEl.appendChild(row);
    });

    byId("cartSubtotal").textContent = fmt(totals.subtotal);
    byId("cartTotal").textContent = fmt(totals.subtotal);
    updateCheckoutLink(totals);
  }

  function updateCheckoutLink(totals) {
    var lines = state.cart.map(function (l) {
      var p = getProduct(l.productId);
      return "\u2022 " + p.name + " (Size " + l.size + ") x" + l.qty + " \u2014 " + fmt(p.price * l.qty);
    });
    var msg = "Hi! I'd like to order from the Navratri Edit:\n\n" +
      lines.join("\n") +
      "\n\nTotal: " + fmt(totals.subtotal) +
      "\n\nPlease confirm availability and delivery.";
    byId("cartCheckout").href = "https://wa.me/" + PHONE + "?text=" + encodeURIComponent(msg);
  }

  function openCart() {
    byId("cartDrawer").classList.add("is-open");
    byId("backdrop").classList.add("is-visible");
    document.body.style.overflow = "hidden";
  }
  function closeCart() {
    byId("cartDrawer").classList.remove("is-open");
    if (!byId("modal").classList.contains("is-visible")) {
      byId("backdrop").classList.remove("is-visible");
      document.body.style.overflow = "";
    }
  }

  /* ---------------- TOAST ---------------- */
  var toastTimer = null;
  function showToast(msg) {
    var t = byId("toast");
    byId("toastMsg").textContent = msg;
    t.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove("is-visible"); }, 2600);
  }

  /* ---------------- EVENTS ---------------- */
  function bindEvents() {
    // grid clicks (open modal / quick add)
    byId("productGrid").addEventListener("click", function (e) {
      var openTarget = e.target.closest("[data-open]");
      if (openTarget) { openModal(openTarget.dataset.open); return; }
      var addTarget = e.target.closest("[data-quickadd]");
      if (addTarget) { addToCart(addTarget.dataset.quickadd, "M", 1); }
    });

    // modal gallery arrows
    byId("modalPrev").addEventListener("click", function () { setModalImage(state.modal.activeImage - 1); });
    byId("modalNext").addEventListener("click", function () { setModalImage(state.modal.activeImage + 1); });

    // modal qty
    byId("modalQty").addEventListener("click", function (e) {
      var btn = e.target.closest("button");
      if (!btn) return;
      var dir = parseInt(btn.dataset.dir, 10);
      state.modal.qty = Math.max(1, state.modal.qty + dir);
      byId("modalQtyVal").textContent = state.modal.qty;
    });

    // modal add to cart
    byId("modalAdd").addEventListener("click", function () {
      var m = state.modal;
      if (!m.size) {
        showToast("Pick a size first");
        return;
      }
      addToCart(m.productId, m.size, m.qty);
    });

    // modal close
    byId("modalClose").addEventListener("click", closeModal);

    // cart open/close
    byId("cartToggle").addEventListener("click", openCart);
    byId("cartClose").addEventListener("click", closeCart);

    // backdrop closes whichever is open
    byId("backdrop").addEventListener("click", function () {
      closeModal();
      closeCart();
    });

    // esc key
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") { closeModal(); closeCart(); }
    });

    // cart item interactions (delegated)
    byId("cartItems").addEventListener("click", function (e) {
      var qtyBtn = e.target.closest(".qty-row button");
      if (qtyBtn) {
        var idx = parseInt(qtyBtn.closest(".qty-row").dataset.idx, 10);
        var dir = parseInt(qtyBtn.dataset.dir, 10);
        updateLineQty(idx, dir);
        return;
      }
      var rmBtn = e.target.closest("[data-remove]");
      if (rmBtn) { removeLine(parseInt(rmBtn.dataset.remove, 10)); }
    });

    // mobile nav toggle
    var navToggle = byId("navToggle");
    var navLinks = byId("navLinks");
    navToggle.addEventListener("click", function () {
      var open = navLinks.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    navLinks.addEventListener("click", function (e) {
      if (e.target.tagName === "A") { navLinks.classList.remove("is-open"); navToggle.setAttribute("aria-expanded", "false"); }
    });

    // floating action button
    var fab = byId("fab");
    byId("fabMain").addEventListener("click", function () { fab.classList.toggle("is-open"); });

    // size guide placeholder
    var sizeGuideLink = document.querySelector("[data-size-guide]");
    if (sizeGuideLink) {
      sizeGuideLink.addEventListener("click", function (e) {
        e.preventDefault();
        showToast("Message us your usual size — we'll match it to our fit");
      });
    }
  }

  /* ---------------- INIT ---------------- */
  function init() {
    renderCategoryTabs();
    renderFilters();
    renderGrid();
    renderCart();
    bindEvents();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
