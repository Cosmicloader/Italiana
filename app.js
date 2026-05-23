/* ITALIANA RESTAURANT */
'use strict';

const CONFIG = {
  endpoint: 'https://script.google.com/macros/s/AKfycby2Vcr_oR8Uzj4_5lxVjdcq8gKbWYoKgsajvokXE6udHNgJbxqrSVsvUW1yFmxnzGQ/exec',
  googleClientId: '716608462221-ocis934eme5uuokkd5fd5rkf506p1f4t.apps.googleusercontent.com',
  storageKeys: {
    cart: 'italiana_cart',
    user: 'italiana_user',
    session: 'italiana_session',
    reservations: 'italiana_reservations',
    orders: 'italiana_orders',
    payments: 'italiana_payments',
    lastPayment: 'italiana_last_payment',
    pendingOrder: 'italiana_pending_order',
    addresses: 'italiana_addresses',
    loyalty: 'italiana_loyalty',
    wishlist: 'italiana_wishlist',
    activeCoupon: 'italiana_active_coupon'
  }
};

const MENU_ITEMS = [
  { id: 1, category: 'starters', name: 'Mulligatawny Soup', price: 320, desc: 'A classic Anglo-Indian spiced lentil soup with coconut cream and fresh coriander.', img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80', badge: 'veg', badgeText: 'Veg' },
  { id: 2, category: 'starters', name: 'Scotch Eggs (Desi Style)', price: 380, desc: 'Soft-boiled eggs wrapped in spiced minced lamb, breadcrumbed and deep-fried golden.', img: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80', badge: '', badgeText: '' },
  { id: 3, category: 'starters', name: 'Paneer Tikka Bruschetta', price: 350, desc: 'Chargrilled paneer on toasted sourdough with mint chutney and pickled onions.', img: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=600&q=80', badge: 'veg', badgeText: 'Veg' },
  { id: 4, category: 'mains', name: 'Gobhi Paratha Royale', price: 280, desc: 'Freshly cut cauliflower in spiced wheat dough, served with cultured butter and house yogurt.', img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80', badge: 'veg', badgeText: 'Veg' },
  { id: 5, category: 'mains', name: 'Lamb Rogan Josh', price: 580, desc: 'Slow-braised Kashmiri lamb in aromatic spices, served with saffron basmati rice.', img: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=600&q=80', badge: 'spicy', badgeText: 'Spicy' },
  { id: 6, category: 'mains', name: 'Butter Chicken Wellington', price: 640, desc: 'Tender chicken breast in butter masala, wrapped in golden puff pastry — our signature fusion.', img: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=600&q=80', badge: '', badgeText: '' },
  { id: 7, category: 'mains', name: 'Dal Makhani & Naan', price: 260, desc: 'Slow-cooked black lentils in rich tomato cream sauce, served with hand-rolled butter naan.', img: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80', badge: 'veg', badgeText: 'Veg' },
  { id: 8, category: 'grills', name: 'Rack of Lamb Tandoor', price: 860, desc: 'French-trimmed lamb rack marinated in yogurt and spices, grilled in a traditional tandoor.', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80', badge: '', badgeText: '' },
  { id: 9, category: 'grills', name: 'Seekh Kebab Platter', price: 520, desc: 'Hand-minced lamb seekh kebabs with mint raita, pickled slaw, and warm pita.', img: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=600&q=80', badge: 'spicy', badgeText: 'Spicy' },
  { id: 10, category: 'pasta', name: 'Aglio Olio Pasta', price: 380, desc: 'Al dente spaghetti tossed in extra-virgin olive oil, garlic, chilli flakes and fresh parsley.', img: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=600&q=80', badge: 'veg', badgeText: 'Veg' },
  { id: 11, category: 'pasta', name: 'Pizza Diavola', price: 480, desc: 'San Marzano tomato base, buffalo mozzarella, spicy salami and chilli oil on thin crust.', img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80', badge: 'spicy', badgeText: 'Spicy' },
  { id: 12, category: 'pasta', name: 'Truffle Mushroom Risotto', price: 520, desc: 'Arborio rice slow-cooked with wild mushrooms, truffle oil and aged parmesan.', img: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=600&q=80', badge: 'veg', badgeText: 'Veg' },
  { id: 13, category: 'desserts', name: 'Sticky Toffee Pudding', price: 280, desc: 'Warm date sponge cake drenched in butterscotch toffee sauce, served with clotted cream.', img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=600&q=80', badge: 'veg', badgeText: 'Veg' },
  { id: 14, category: 'desserts', name: 'Gulab Jamun Trifle', price: 240, desc: 'A decadent fusion — classic gulab jamun layered with custard, cream and rose petals.', img: 'https://images.unsplash.com/photo-1571506165871-ee72a35bc9d4?auto=format&fit=crop&w=600&q=80', badge: 'veg', badgeText: 'Veg' },
  { id: 15, category: 'drinks', name: 'Masala Chai Latte', price: 120, desc: 'House-blend spiced tea with steamed milk — the perfect start or end to your meal.', img: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=600&q=80', badge: 'veg', badgeText: 'Veg' }
];

const COUPONS = {
  FIRST10: { code: 'FIRST10', type: 'percent', value: 10, minOrder: 399, firstOrderOnly: true, label: '10% off on your first order' },
  SAVE50: { code: 'SAVE50', type: 'flat', value: 50, minOrder: 499, firstOrderOnly: false, label: '₹50 off above ₹499' },
  ITALIANA20: { code: 'ITALIANA20', type: 'percent', value: 20, minOrder: 899, returningOnly: true, label: '20% off for returning guests' },
  WELCOME: { code: 'WELCOME', type: 'flat', value: 100, minOrder: 699, firstOrderOnly: true, label: '₹100 off above ₹699' }
};

const memoryStore = {};
const storageAvailable = (() => {
  try {
    const key = '__italiana_storage_test__';
    window.localStorage.setItem(key, '1');
    window.localStorage.removeItem(key);
    return true;
  } catch {
    return false;
  }
})();

function storageGet(key) {
  if (storageAvailable) return window.localStorage.getItem(key);
  return Object.prototype.hasOwnProperty.call(memoryStore, key) ? memoryStore[key] : null;
}
function storageSet(key, value) {
  if (storageAvailable) { window.localStorage.setItem(key, value); return; }
  memoryStore[key] = value;
}
function storageRemove(key) {
  if (storageAvailable) { window.localStorage.removeItem(key); return; }
  delete memoryStore[key];
}
function readJSON(key, fallback = null) {
  try { const raw = storageGet(key); return raw ? JSON.parse(raw) : fallback; } catch { return fallback; }
}
function writeJSON(key, value) { storageSet(key, JSON.stringify(value)); }
function uid(prefix = 'ITL') { return `${prefix}-${Date.now()}-${Math.floor(Math.random() * 1000)}`; }
function deepCopy(value) { return JSON.parse(JSON.stringify(value)); }
function formatPrice(value) { return `₹${Number(value || 0).toLocaleString('en-IN')}`; }
function qs(selector, scope = document) { return scope.querySelector(selector); }
function qsa(selector, scope = document) { return [...scope.querySelectorAll(selector)]; }
function byId(id) { return document.getElementById(id); }
function setText(id, text) { const el = byId(id); if (el) el.textContent = text; }
let toastTimer = null;
function showToast(message = 'Done', iconChar = '✓') {
  const toast = byId('toast');
  const text = byId('toastText');
  const icon = byId('toastIcon');
  if (!toast || !text) return;
  text.textContent = message;
  if (icon) icon.textContent = iconChar;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
}
function showLoader() { const loader = byId('loader'); if (loader) loader.classList.remove('hidden'); }
function hideLoader() { const loader = byId('loader'); if (loader) loader.classList.add('hidden'); }
function validatePhone(phone) { return /^[6-9]\d{9}$/.test(String(phone || '').trim()); }
function validateEmail(email) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email || '').trim()); }
function safeJsonParse(value, fallback = []) { try { return JSON.parse(value || JSON.stringify(fallback)); } catch { return fallback; } }
function normalizeStatus(status) { return String(status || '').toLowerCase().replace(/\s+/g, '-'); }
function formatDateTime(value) { if (!value) return '--'; const date = new Date(value); if (Number.isNaN(date.getTime())) return value; return date.toLocaleString('en-IN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }); }

const APP = {
  state: {
    cart: readJSON(CONFIG.storageKeys.cart, []),
    currentUser: readJSON(CONFIG.storageKeys.user, null),
    session: readJSON(CONFIG.storageKeys.session, null),
    reservations: readJSON(CONFIG.storageKeys.reservations, []),
    orders: readJSON(CONFIG.storageKeys.orders, []),
    payments: readJSON(CONFIG.storageKeys.payments, []),
    addresses: readJSON(CONFIG.storageKeys.addresses, []),
    loyalty: readJSON(CONFIG.storageKeys.loyalty, { points: 0, lifetimeSpent: 0, lifetimeOrders: 0 }),
    wishlist: readJSON(CONFIG.storageKeys.wishlist, []),
    orderType: 'delivery',
    activeCoupon: readJSON(CONFIG.storageKeys.activeCoupon, null),
    useLoyaltyPoints: false,
    menuFilter: 'all',
    menuSearch: ''
  }
};

function syncState() {
  writeJSON(CONFIG.storageKeys.cart, APP.state.cart);
  writeJSON(CONFIG.storageKeys.user, APP.state.currentUser);
  writeJSON(CONFIG.storageKeys.session, APP.state.session);
  writeJSON(CONFIG.storageKeys.reservations, APP.state.reservations);
  writeJSON(CONFIG.storageKeys.orders, APP.state.orders);
  writeJSON(CONFIG.storageKeys.payments, APP.state.payments);
  writeJSON(CONFIG.storageKeys.addresses, APP.state.addresses);
  writeJSON(CONFIG.storageKeys.loyalty, APP.state.loyalty);
  writeJSON(CONFIG.storageKeys.wishlist, APP.state.wishlist);
  writeJSON(CONFIG.storageKeys.activeCoupon, APP.state.activeCoupon);
}
function getCurrentUser() { return APP.state.currentUser || APP.state.session || null; }

async function postToBackend(action, payload = {}) {
  if (!CONFIG.endpoint || CONFIG.endpoint.includes('PASTE_YOUR')) {
    return { success: true, offlineDemo: true, action, ...payload };
  }

  try {
    const response = await fetch(CONFIG.endpoint, {
      method: 'POST',
      headers: { 
        'Content-Type': 'text/plain;charset=utf-8' // ✅ FIXED for CORS
      },
      redirect: 'follow', // ✅ FIXED for Google Apps Script 302 redirects
      body: JSON.stringify({ action, ...payload })
    });

    console.log('Status:', response.status, response.statusText);

    let result = { success: true };
    try {
      result = await response.json();
    } catch (e) {
      console.error('JSON parse error:', e);
      result = { success: false, message: 'Invalid JSON from server' };
    }

    if (!result.success) {
      throw new Error(result.message || 'Backend request failed');
    }

    return result;
  } catch (error) {
    console.error('FE fetch error:', error);
    showToast(`❌ ${error.message || 'Request failed'}`);
    throw error;
  }
}

function getCartTotal() { return APP.state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0); }
function getCartCount() { return APP.state.cart.reduce((sum, item) => sum + item.qty, 0); }
function saveCart() { writeJSON(CONFIG.storageKeys.cart, APP.state.cart); }
function getAvailablePoints() { return Number(APP.state.loyalty?.points || 0); }

function getCouponDiscount(subtotal) {
  const coupon = APP.state.activeCoupon;
  if (!coupon) return 0;

  const rawCoupon = COUPONS[coupon.code];
  if (!rawCoupon || subtotal < Number(rawCoupon.minOrder || 0)) return 0;

  return rawCoupon.type === 'percent'
    ? Math.round((subtotal * Number(rawCoupon.value || 0)) / 100)
    : Number(rawCoupon.value || 0);
}

function getLoyaltyDiscount(subtotal) {
  if (!APP.state.useLoyaltyPoints) return 0;
  const available = getAvailablePoints();
  if (!available) return 0;
  return Math.min(available, 100, Math.floor(subtotal * 0.15));
}

function getOrderTotals() {
  const subtotal = getCartTotal();
  const deliveryFee = APP.state.orderType === 'delivery' ? (subtotal >= 699 ? 0 : (subtotal > 0 ? 49 : 0)) : 0;
  const gst = Math.round(subtotal * 0.05);
  const couponDiscount = getCouponDiscount(subtotal);
  const loyaltyDiscount = getLoyaltyDiscount(subtotal);
  const discount = couponDiscount + loyaltyDiscount;
  const total = Math.max(subtotal + deliveryFee + gst - discount, 0);
  return { subtotal, deliveryFee, gst, couponDiscount, loyaltyDiscount, discount, total };
}

function addToCart(id) {
  const item = MENU_ITEMS.find(menuItem => menuItem.id === id);
  if (!item) return;
  const existing = APP.state.cart.find(cartItem => cartItem.id === id);
  if (existing) existing.qty += 1;
  else APP.state.cart.push({ ...item, qty: 1 });
  saveCart();
  renderCart();
  renderOrderSummary();
  updateCartCount();
  showToast(`Added ${item.name} to cart`);
}

function removeFromCart(id) {
  APP.state.cart = APP.state.cart.filter(item => item.id !== id);
  saveCart();
  renderCart();
  renderOrderSummary();
  updateCartCount();
}

function changeQty(id, delta) {
  const item = APP.state.cart.find(cartItem => cartItem.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) return removeFromCart(id);
  saveCart();
  renderCart();
  renderOrderSummary();
  updateCartCount();
}

function clearCart() {
  APP.state.cart = [];
  saveCart();
  renderCart();
  renderOrderSummary();
  updateCartCount();
}

function updateCartCount() {
  const count = getCartCount();
  qsa('#cartCount').forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });
}

function renderCart() {
  const container = byId('cartItems');
  const footer = byId('cartFooter');
  const totalEl = byId('cartTotal');
  if (!container) return;

  if (!APP.state.cart.length) {
    container.innerHTML = `<div class="cart-empty"><span>🍽</span><p>Your cart is empty.<br>Browse our menu to add items.</p></div>`;
    if (footer) footer.style.display = 'none';
    return;
  }

  container.innerHTML = APP.state.cart.map(item => `
    <div class="cart-item">
      <img src="${item.img}" alt="${item.name}">
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <span>${formatPrice(item.price)}</span>
        <div class="qty-control">
          <button class="qty-btn" data-action="decrease" data-id="${item.id}">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" data-action="increase" data-id="${item.id}">+</button>
          <button class="qty-btn" data-action="remove" data-id="${item.id}">×</button>
        </div>
      </div>
    </div>
  `).join('');

  if (footer) footer.style.display = 'block';
  if (totalEl) totalEl.textContent = formatPrice(getCartTotal());
}

function renderMenuItems(filter = 'all', targetId = 'menuGrid') {
  const menuGrid = byId(targetId);
  if (!menuGrid) return;

  const items = filter === 'all' ?
    MENU_ITEMS :
    MENU_ITEMS.filter(item => item.category === filter);

  menuGrid.innerHTML = items.map((item, index) => `
    <article class="menu-card" style="animation-delay:${(index % 6) * 0.08}s">
      ${item.badge ? `<span class="badge ${item.badge}">${item.badgeText}</span>` : ''}
      <div class="card-img">
        <img src="${item.img}" alt="${item.name}" loading="lazy">
      </div>
      <div class="card-body">
        <div class="card-top">
          <h3>${item.name}</h3>
          <div class="price">${formatPrice(item.price)}</div>
        </div>
        <p>${item.desc}</p>
        <div class="card-actions">
          <button class="btn-add" data-add-cart="${item.id}">Add to Cart</button>
          <button class="btn-wishlist" type="button">♡</button>
        </div>
      </div>
    </article>
  `).join('');
}

function renderOrderSummary() {
  const listEl = byId('orderSummaryList');
  const totalDisplay = byId('orderTotalDisplay');
  if (!listEl) return;

  if (!APP.state.cart.length) {
    listEl.innerHTML = `<p style="color:var(--text-muted);text-align:center;padding:20px 0;">Add items to see your order summary...</p>`;
    if (totalDisplay) totalDisplay.style.display = 'none';
    return;
  }

  const { subtotal, deliveryFee, gst, couponDiscount, loyaltyDiscount, discount, total } = getOrderTotals();
  listEl.innerHTML = APP.state.cart.map(item => `
    <div class="order-sum-item">
      <span>${item.name} × ${item.qty}</span>
      <span>${formatPrice(item.price * item.qty)}</span>
    </div>
  `).join('');

  setText('subtotalValue', formatPrice(subtotal));
  setText('deliveryFeeValue', deliveryFee === 0 ? 'Free' : formatPrice(deliveryFee));
  setText('gstValue', formatPrice(gst));
  setText('couponDiscountValue', `- ${formatPrice(couponDiscount)}`);
  setText('loyaltyDiscountValue', `- ${formatPrice(loyaltyDiscount)}`);
  setText('discountValue', `- ${formatPrice(discount)}`);
  setText('orderTotal', formatPrice(total));

  if (totalDisplay) totalDisplay.style.display = 'block';
}

function getPendingOrder() { return readJSON(CONFIG.storageKeys.pendingOrder, null); }
function savePendingOrder(snapshot) { writeJSON(CONFIG.storageKeys.pendingOrder, snapshot); }
function clearPendingOrder() { storageRemove(CONFIG.storageKeys.pendingOrder); }

async function processPayment(method, detailData = {}) {
  const pendingOrder = getPendingOrder();
  if (!pendingOrder || !Array.isArray(pendingOrder.items) || !pendingOrder.items.length)
    throw new Error('No pending order found. Please return to takeaway page.');

  const orderId = uid('ORD');
  const paymentAmount = pendingOrder.total;
  const orderPayload = {
    ...pendingOrder,
    orderId,
    status: 'Confirmed',
    paymentMethod: method,
    paidAmount: paymentAmount,
    placedAt: new Date().toISOString()
  };

  await postToBackend('createOrder', { ...orderPayload, itemsJson: JSON.stringify(orderPayload.items) });
  APP.state.orders.push(orderPayload);

  const paymentRecord = {
    paymentId: uid('PAY'),
    userId: getCurrentUser()?.userId || 'GUEST',
    orderId,
    method,
    amount: paymentAmount,
    details: detailData,
    status: 'Success',
    createdAt: new Date().toISOString()
  };

  await postToBackend('createPayment', paymentRecord);
  APP.state.payments.push(paymentRecord);
  writeJSON(CONFIG.storageKeys.lastPayment, paymentRecord);

  APP.state.cart = [];
  saveCart();
  clearPendingOrder();
  syncState();

  return { order: orderPayload, payment: paymentRecord };
}

function fillProfileFields() {
  const user = getCurrentUser();
  if (!user) return;
  [['resName', user.name], ['resPhone', user.phone], ['resEmail', user.email], ['payerName', user.name], ['payerPhone', user.phone], ['payerEmail', user.email], ['contactName', user.name], ['contactPhone', user.phone], ['contactEmail', user.email]].forEach(([id, value]) => {
    const field = byId(id);
    if (field && !field.value) field.value = value;
  });
}

async function handleSignup(formData) {
  const { name, phone, email, password } = formData;
  if (!name || !phone || !email || !password) throw new Error('Please complete all signup fields');
  if (!validatePhone(phone)) throw new Error('Enter a valid phone number');
  if (!validateEmail(email)) throw new Error('Enter a valid email address');
  const user = {
    userId: uid('USR'),
    name,
    phone,
    email,
    password,
    createdAt: new Date().toISOString(),
    preferences: [],
    reservationIds: [],
    orderIds: []
  };
  await postToBackend('signupUser', user);
  APP.state.currentUser = user;
  APP.state.session = { userId: user.userId, name: user.name, email: user.email, loginAt: new Date().toISOString() };
  syncState();
  return user;
}

async function handleLogin(email, password) {
  let user = null;
  const localUser = readJSON(CONFIG.storageKeys.user, null);
  if (localUser && localUser.email === email && localUser.password === password) {
    user = localUser;
  } else {
    const response = await postToBackend('loginUser', { email, password });
    user = response.user || null;
  }
  if (!user) throw new Error('Invalid email or password');
  APP.state.currentUser = user;
  APP.state.session = { userId: user.userId, name: user.name, email: user.email, loginAt: new Date().toISOString() };
  syncState();
  return user;
}

function logoutUser() {
  APP.state.currentUser = null;
  APP.state.session = null;
  writeJSON(CONFIG.storageKeys.user, null);
  writeJSON(CONFIG.storageKeys.session, null);
  showToast('Logged out successfully');
  setTimeout(() => { window.location.href = 'index.html'; }, 700);
}

async function submitReservation(form) {
  const user = getCurrentUser();
  const reservation = {
    reservationId: uid('RSV'),
    userId: user?.userId || 'GUEST',
    name: byId('resName')?.value.trim(),
    phone: byId('resPhone')?.value.trim(),
    email: byId('resEmail')?.value.trim(),
    branch: byId('resBranch')?.value,
    date: byId('resDate')?.value,
    time: byId('resTime')?.value,
    guests: byId('resGuests')?.value,
    occasion: byId('resOccasion')?.value || 'Casual Dining',
    notes: byId('resNotes')?.value.trim() || '',
    status: 'Confirmed',
    createdAt: new Date().toISOString()
  };
  if (!reservation.name || !reservation.phone || !reservation.email || !reservation.branch || !reservation.date || !reservation.time || !reservation.guests) throw new Error('Please fill all reservation details');
  if (!validatePhone(reservation.phone)) throw new Error('Enter a valid phone number');
  if (!validateEmail(reservation.email)) throw new Error('Enter a valid email address');
  await postToBackend('createReservation', reservation);
  APP.state.reservations.push(reservation);
  syncState();
  setText('sumName', reservation.name);
  setText('sumBranch', reservation.branch);
  setText('sumDate', reservation.date);
  setText('sumTime', reservation.time);
  setText('sumGuests', reservation.guests);
  const modal = byId('reservationModal');
  if (modal) modal.classList.add('show');
  form.reset();
  fillProfileFields();
  showToast('Reservation confirmed successfully');
}

async function submitContact(form) {
  const payload = {
    contactId: uid('CNT'),
    userId: getCurrentUser()?.userId || 'GUEST',
    name: byId('contactName')?.value.trim(),
    phone: byId('contactPhone')?.value.trim(),
    email: byId('contactEmail')?.value.trim(),
    subject: byId('contactSubject')?.value,
    branch: byId('contactBranch')?.value || '',
    message: byId('contactMessage')?.value.trim(),
    createdAt: new Date().toISOString()
  };
  if (!payload.name || !payload.phone || !payload.email || !payload.subject || !payload.message) throw new Error('Please complete the contact form');
  if (!validatePhone(payload.phone)) throw new Error('Enter a valid phone number');
  if (!validateEmail(payload.email)) throw new Error('Enter a valid email address');
  await postToBackend('createContact', payload);
  form.reset();
  fillProfileFields();
  showToast('Message sent successfully');
}

function initCartUI() {
  const cartBtn = byId('cartBtn');
  const cartSidebar = byId('cartSidebar');
  const cartClose = byId('cartClose');

  if (cartBtn && cartSidebar) {
    cartBtn.addEventListener('click', e => {
      e.preventDefault();
      cartSidebar.classList.add('open');
    });
  }

  if (cartClose && cartSidebar) {
    cartClose.addEventListener('click', e => {
      e.preventDefault();
      cartSidebar.classList.remove('open');
    });
  }

  document.addEventListener('click', e => {
    if (!cartSidebar.contains(e.target) && cartSidebar.classList.contains('open')) {
      cartSidebar.classList.remove('open');
    }
  }, true);

  document.addEventListener('click', e => {
    const addBtn = e.target.closest('[data-add-cart]');
    if (addBtn) addToCart(Number(addBtn.dataset.addCart));

    const qtyBtn = e.target.closest('.qty-btn');
    if (qtyBtn) {
      const id = Number(qtyBtn.dataset.id);
      const action = qtyBtn.dataset.action;
      if (action === 'increase') changeQty(id, 1);
      if (action === 'decrease') changeQty(id, -1);
      if (action === 'remove') removeFromCart(id);
    }
  }, true);

  const couponInput = byId('couponInput');
  const couponApplyBtn = byId('applyCouponBtn');

  couponApplyBtn?.addEventListener('click', () => {
    const code = String(couponInput?.value || '').trim().toUpperCase();
    const coupon = COUPONS[code];

    if (!coupon || !APP.state.cart.length) {
      showToast('Invalid coupon or empty cart', '!');
      return;
    }

    const subtotal = getCartTotal();

    if (subtotal < Number(coupon.minOrder || 0)) {
      showToast(`Minimum order ₹${coupon.minOrder} required for this coupon`, '!');
      return;
    }

    const firstOrderOnly = Boolean(coupon.firstOrderOnly);
    const hasPreviousOrders = APP.state.orders.length > 0;

    if (firstOrderOnly && hasPreviousOrders) {
      showToast('Coupon valid only on first order', '!');
      return;
    }

    const returningOnly = Boolean(coupon.returningOnly);
    const isReturningUser = APP.state.orders.length >= 2;

    if (returningOnly && !isReturningUser) {
      showToast('Coupon for returning guests only', '!');
      return;
    }

    APP.state.activeCoupon = { code, minOrder: coupon.minOrder, type: coupon.type, value: coupon.value };
    writeJSON(CONFIG.storageKeys.activeCoupon, APP.state.activeCoupon);
    renderOrderSummary();
    couponInput.value = '';
    showToast(`Coupon ${code} applied`);
  });

  const couponRemoveBtn = byId('removeCouponBtn');
  couponRemoveBtn?.addEventListener('click', () => {
    APP.state.activeCoupon = null;
    writeJSON(CONFIG.storageKeys.activeCoupon, null);
    renderOrderSummary();
    showToast('Coupon removed');
  });
}

function initMenuFilters() {
  const filterButtons = qsa('.filter-btn');
  if (!filterButtons.length) return;
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(button => button.classList.remove('active'));
      btn.classList.add('active');
      const targetId = byId('menuGrid') ? 'menuGrid' : 'miniMenuGrid';
      renderMenuItems(btn.dataset.filter || 'all', targetId);
    });
  });
  if (byId('menuGrid')) renderMenuItems('all', 'menuGrid');
  if (byId('miniMenuGrid')) renderMenuItems('all', 'miniMenuGrid');
}

function initReservationForm() {
  const form = byId('reservationForm');
  if (!form) return;
  const dateInput = byId('resDate');
  if (dateInput) dateInput.min = new Date().toISOString().split('T')[0];
  form.addEventListener('submit', async e => {
    e.preventDefault();
    try { await submitReservation(form); } catch (error) { showToast(`❌ ${error.message}`); }
  });
}

function initContactForm() {
  const form = byId('contactForm');
  if (!form) return;
  form.addEventListener('submit', async e => {
    e.preventDefault();
    try { await submitContact(form); } catch (error) { showToast(`❌ ${error.message}`); }
  });
}

function initTakeawayPage() {
  const deliveryTypeSelect = byId('deliveryType');
  const proceedBtn = byId('proceedPaymentBtn');
  const useLoyaltyCheckbox = byId('useLoyaltyPointsCheckbox');

  if (deliveryTypeSelect) {
    deliveryTypeSelect.addEventListener('change', e => {
      APP.state.orderType = e.target.value;
      renderOrderSummary();
    });
  }

  if (useLoyaltyCheckbox) {
    useLoyaltyCheckbox.addEventListener('change', () => {
      APP.state.useLoyaltyPoints = useLoyaltyCheckbox.checked;
      writeJSON(CONFIG.storageKeys.useLoyaltyPoints, APP.state.useLoyaltyPoints);
      renderOrderSummary();
    });
  }

  if (proceedBtn) {
    proceedBtn.addEventListener('click', () => {
      if (!APP.state.cart.length) { showToast('❌ Add items before continuing'); return; }
      const totals = getOrderTotals();
      const snapshot = {
        pendingOrderId: uid('PND'),
        userId: getCurrentUser()?.userId || 'GUEST',
        items: deepCopy(APP.state.cart),
        orderType: APP.state.orderType,
        subtotal: totals.subtotal,
        deliveryFee: totals.deliveryFee,
        gst: totals.gst,
        couponDiscount: totals.couponDiscount,
        loyaltyDiscount: totals.loyaltyDiscount,
        discount: totals.discount,
        total: totals.total,
        createdAt: new Date().toISOString()
      };
      savePendingOrder(snapshot);
      window.location.href = 'payments.html';
    });
  }
}

function initAuthStatusInNav() {
  const navLinks = byId('navLinks');
  if (!navLinks) return;
  const user = getCurrentUser();
  const existingWelcome = byId('navProfileWelcome');
  const existingLogout = byId('navLogout');
  if (existingWelcome) existingWelcome.remove();
  if (existingLogout) existingLogout.remove();
  if (!user) return;
  const profileNode = document.createElement('a');
  profileNode.id = 'navProfileWelcome';
  profileNode.href = 'account.html';
  profileNode.textContent = `Hi, ${user.name.split(' ')[0]}`;
  const logoutNode = document.createElement('a');
  logoutNode.id = 'navLogout';
  logoutNode.href = '#';
  logoutNode.textContent = 'Logout';
  logoutNode.addEventListener('click', e => { e.preventDefault(); logoutUser(); });
  navLinks.appendChild(profileNode);
  navLinks.appendChild(logoutNode);
}

function initHamburger() {
  const hamburger = byId('hamburger');
  const navLinks = byId('navLinks');
  if (!hamburger || !navLinks) return;
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
}

function initPageTransitions() { window.addEventListener('load', () => setTimeout(hideLoader, 500)); }

function initAnimations() {
  const animated = qsa('[data-animate]');
  if (!animated.length) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.15 });
  animated.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
  });
}

function renderAccountOverview() {
  const user = getCurrentUser();
  const totalSpent = APP.state.orders.reduce((sum, order) => sum + Number(order.total || 0), 0);
  setText('accountUserName', user?.name || 'Guest User');
  setText('accountUserEmail', user?.email || 'guest@example.com');
  setText('accountAvatarText', String(user?.name || 'U').split(' ').filter(Boolean).slice(0, 2).map(part => part[0]?.toUpperCase()).join('') || 'U');
  setText('loyaltyPointsText', getAvailablePoints());
  setText('loyaltyPointsTextDuplicate', getAvailablePoints());
  setText('overviewOrdersCount', APP.state.orders.length);
  setText('overviewReservationsCount', APP.state.reservations.length);
  setText('overviewSpentTotal', formatPrice(totalSpent));
  const offerContainer = byId('accountOffersGrid');
  if (offerContainer) offerContainer.innerHTML = Object.values(COUPONS).map(coupon => `
    <div class="offer-card">
      <div class="offer-code">${coupon.code}</div>
      <p>${coupon.label}</p>
      <small>Min order ${formatPrice(coupon.minOrder)}</small>
    </div>
  `).join('');
}

function renderOrdersHistory() {
  const container = byId('ordersHistoryContainer');
  if (!container) return;
  if (!APP.state.orders.length) {
    container.innerHTML = `<div class="empty-state"><div class="empty-icon">🍽️</div><h3>No previous orders yet</h3><p>Your completed and upcoming orders will appear here for quick reorder.</p><a href="takeaway.html" class="btn-primary">Start Ordering</a></div>`;
    return;
  }
  container.innerHTML = APP.state.orders.map(order => {
    const items = order.items || safeJsonParse(order.itemsJson, []);
    return `<div class="order-card">
      <div class="order-card-header">
        <div>
          <div class="order-id">ORDER ID ${order.orderId}</div>
          <div class="order-date">${formatDateTime(order.createdAt)}</div>
        </div>
        <span class="order-status status-${normalizeStatus(order.status)}">${order.status || 'Confirmed'}</span>
      </div>
      <div class="order-items-list">${items.map(item => `
        <span class="order-item-chip">${item.name} × ${item.qty || 1}</span>
      `).join('')}</div>
      <div class="order-card-footer">
        <div class="order-total">${formatPrice(order.total)}</div>
        <div class="order-type-badge">${order.orderType || 'delivery'}</div>
        <button class="btn-gold-sm btn-sm" data-reorder="${order.orderId}">Reorder</button>
        <button class="btn-outline-sm btn-sm" data-cancel-order="${order.orderId}">Cancel</button>
      </div>
    </div>`;
  }).join('');
}

function renderReservationsHistory() {
  const container = byId('reservationsHistoryContainer');
  if (!container) return;
  if (!APP.state.reservations.length) {
    container.innerHTML = `<div class="empty-state"><div class="empty-icon">📅</div><h3>No reservations yet</h3><p>Reserve your next dinner and manage all bookings from here.</p><a href="reservation.html" class="btn-primary">Reserve Now</a></div>`;
    return;
  }
  container.innerHTML = APP.state.reservations.map(res => `
    <div class="reservation-history-card">
      <div class="res-card-header">
        <div class="order-id">RESERVATION ID ${res.reservationId}</div>
        <div class="order-date">${formatDateTime(res.createdAt)}</div>
        <span class="order-status status-${normalizeStatus(res.status)}">${res.status || 'Confirmed'}</span>
      </div>
      <div class="res-card-body">
        <div class="res-detail"><div class="label">Branch</div><div class="value">${res.branch}</div></div>
        <div class="res-detail"><div class="label">Date</div><div class="value">${res.date}</div></div>
        <div class="res-detail"><div class="label">Time</div><div class="value">${res.time}</div></div>
        <div class="res-detail"><div class="label">Guests</div><div class="value">${res.guests}</div></div>
        <div class="res-detail"><div class="label">Occasion</div><div class="value">${res.occasion || 'Casual Dining'}</div></div>
        <div class="res-detail"><div class="label">Name</div><div class="value">${res.name}</div></div>
      </div>
    </div>
  `).join('');
}

function renderAddresses() {
  const container = byId('savedAddressesContainer');
  const select = byId('savedAddressSelect');
  if (container) {
    if (!APP.state.addresses.length) container.innerHTML = `<div class="empty-state"><div class="empty-icon">🏠</div><h3>No saved addresses</h3><p>Add your home, hostel, or office address for faster checkout.</p><button type="button" class="btn-primary" id="openAddAddressInline">Add Address</button></div>`;
    else container.innerHTML = APP.state.addresses.map(address => `
      <div class="address-card-item ${address.isDefault ? 'default' : ''}">
        <div class="address-info">
          <h4>${address.label}${address.isDefault ? '<span class="address-badge">Default</span>' : ''}</h4>
          <p>${address.fullAddress}</p>
        </div>
        <div class="address-actions">
          ${!address.isDefault ? `<button class="btn-outline-sm btn-sm" data-default-address="${address.id}">Default</button>` : ''}
          <button class="btn-danger-sm btn-sm" data-delete-address="${address.id}">Delete</button>
        </div>
      </div>
    `).join('');
  }
  if (select) select.innerHTML = APP.state.addresses.length === 0
    ? `<option value="">No saved addresses</option>`
    : APP.state.addresses.map(address => `
      <option value="${address.id}" ${address.isDefault ? 'selected' : ''}>${address.label} - ${address.fullAddress}</option>
    `).join('');
}

function renderProfileForm() {
  const user = getCurrentUser();
  if (!user) return;
  const name = byId('profileName');
  const phone = byId('profilePhone');
  const email = byId('profileEmail');
  if (name && !name.value) name.value = user.name || '';
  if (phone && !phone.value) phone.value = user.phone || '';
  if (email && !email.value) email.value = user.email || '';
}

function renderLoyaltyUI() {
  const pointsText = byId('availableLoyaltyPoints');
  const pointsDiscountText = byId('loyaltyDiscountPreview');
  const pointsCheckbox = byId('useLoyaltyPointsCheckbox');
  const totals = getOrderTotals();
  const available = getAvailablePoints();
  if (pointsText) pointsText.textContent = available;
  if (pointsDiscountText) pointsDiscountText.textContent = formatPrice(totals.loyaltyDiscount);
  if (pointsCheckbox) {
    pointsCheckbox.checked = APP.state.useLoyaltyPoints;
    pointsCheckbox.disabled = !available || !APP.state.cart.length;
  }
}

function renderAccountPage() {
  renderAccountOverview();
  renderOrdersHistory();
  renderReservationsHistory();
  renderAddresses();
  renderProfileForm();
  renderLoyaltyUI();
}

function renderDeliveryTracking() {
  const container = byId('deliveryTrackingContainer');
  if (!container) return;
  const deliveryOrders = (APP.state.orders || []).filter(order => String(order.orderType || '').toLowerCase() === 'delivery').slice(0, 5);
  if (!deliveryOrders.length) {
    container.innerHTML = `<div class="empty-state"><div class="empty-icon">🚚</div><h3>No delivery orders yet</h3><p>Your live delivery updates will appear here after checkout.</p><a href="takeaway.html" class="btn-primary">Order Food</a></div>`;
    return;
  }
  const latest = deliveryOrders[0];
  const status = latest.status || 'Confirmed';
  setText('currentDeliveryStatus', status);
  container.innerHTML = `<div class="delivery-tracking-card">
    <div class="tracking-header">
      <div><span class="account-mini-label">Live Delivery</span><h3>Order ${latest.orderId}</h3></div>
      <span class="order-status status-${normalizeStatus(status)}">${status}</span>
    </div>
    <div class="tracking-progress">
      <div class="tracking-step active"><span>1</span><p>Confirmed</p></div>
      <div class="tracking-line"></div>
      <div class="tracking-step ${['preparing', 'confirmed', 'paid', 'placed'].includes(normalizeStatus(status)) ? 'active' : ''}"><span>2</span><p>Preparing</p></div>
      <div class="tracking-line"></div>
      <div class="tracking-step ${['out-for-delivery', 'delivered'].includes(normalizeStatus(status)) ? 'active' : ''}"><span>3</span><p>Out for delivery</p></div>
      <div class="tracking-line"></div>
      <div class="tracking-step ${normalizeStatus(status) === 'delivered' ? 'active' : ''}"><span>4</span><p>Delivered</p></div>
    </div>
    <div class="tracking-summary-grid">
      <div><span>Placed On</span><strong>${formatDateTime(latest.createdAt)}</strong></div>
      <div><span>Total</span><strong>${formatPrice(latest.total)}</strong></div>
      <div><span>Payment</span><strong>${latest.paymentMethod || '--'}</strong></div>
      <div><span>Items</span><strong>${latest.items?.length || 0}</strong></div>
    </div>
  </div>`;
}

async function hydrateUserData() {
  const user = getCurrentUser();
  if (!user?.userId) return;
  
  try {
    const ordersResult = await postToBackend('getUserOrders', { userId: user.userId });
    const reservationsResult = await postToBackend('getUserReservations', { userId: user.userId });
    
    // ✅ PROTECT LOCAL DATA: Only overwrite if the backend actually found some orders, 
    // OR if we locally have 0 orders anyway.
    if (Array.isArray(ordersResult.orders)) {
      const fetchedOrders = ordersResult.orders.map(order => ({ ...order, items: safeJsonParse(order.itemsJson, []) }));
      if (fetchedOrders.length > 0 || APP.state.orders.length === 0) {
         APP.state.orders = fetchedOrders;
      }
    }
    
    // ✅ PROTECT LOCAL RESERVATIONS: Same logic here
    if (Array.isArray(reservationsResult.reservations)) {
      if (reservationsResult.reservations.length > 0 || APP.state.reservations.length === 0) {
         APP.state.reservations = reservationsResult.reservations;
      }
    }
    
    syncState();
    renderAccountPage();
  } catch (error) {
    console.error("Backend sync failed, keeping local data safe:", error);
  }
}
function reorderOrder(orderId) {
  const order = APP.state.orders.find(item => item.orderId === orderId);
  if (!order) return;
  const items = order.items || safeJsonParse(order.itemsJson, []);
  if (!items.length) return;
  APP.state.cart = items.map(item => {
    const matched = MENU_ITEMS.find(menuItem => menuItem.id === Number(item.id));
    return matched ? { ...matched, qty: Number(item.qty || 1) } : null;
  }).filter(Boolean);
  saveCart();
  updateCartCount();
  renderCart();
  renderOrderSummary();
  showToast('Order added back to cart');
  setTimeout(() => window.location.href = 'takeaway.html', 500);
}

function setDefaultAddress(addressId) {
  APP.state.addresses = APP.state.addresses.map(address => ({ ...address, isDefault: address.id === addressId }));
  syncState();
  renderAddresses();
  showToast('Default address updated');
}

function deleteAddress(addressId) {
  APP.state.addresses = APP.state.addresses.filter(address => address.id !== addressId);
  if (APP.state.addresses.length && !APP.state.addresses.some(address => address.isDefault))
    APP.state.addresses[0].isDefault = true;
  syncState();
  renderAddresses();
  showToast('Address removed');
}

function saveAddressFromForm() {
  const label = byId('addressLabel')?.value.trim();
  const fullAddress = byId('addressText')?.value.trim();
  if (!label || !fullAddress) throw new Error('Please complete address label and address');
  const address = {
    id: uid('ADR'),
    label,
    fullAddress,
    isDefault: APP.state.addresses.length === 0
  };
  APP.state.addresses.unshift(address);
  syncState();
  renderAddresses();
  byId('addAddressForm')?.reset();
  byId('addAddressWrap')?.classList.remove('open');
  showToast('Address saved successfully');
}

function updateProfile() {
  const user = getCurrentUser();
  if (!user) throw new Error('You must be logged in');
  const name = byId('profileName')?.value.trim();
  const phone = byId('profilePhone')?.value.trim();
  const email = byId('profileEmail')?.value.trim().toLowerCase();
  if (!name || !phone || !email) throw new Error('Please complete profile details');
  if (!validatePhone(phone)) throw new Error('Enter a valid phone number');
  if (!validateEmail(email)) throw new Error('Enter a valid email address');
  APP.state.currentUser = { ...APP.state.currentUser, name, phone, email };
  APP.state.session = { ...APP.state.session, name, email };
  syncState();
  fillProfileFields();
  renderAccountPage();
  initAuthStatusInNav();
  showToast('Profile updated successfully');
}

function parseJwt(token) {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join(''));
    return JSON.parse(jsonPayload);
  } catch { return null; }
}

async function handleGoogleCredential(response) {
  const credential = response?.credential;
  if (!credential) throw new Error('Google sign-in failed');
  const payload = parseJwt(credential);
  const user = {
    userId: uid('GGL'),
    name: payload.name || 'Google User',
    email: String(payload.email || '').toLowerCase(),
    phone: APP.state.currentUser?.phone || '',
    authProvider: 'google',
    googleSub: payload.sub,
    avatar: payload.picture || '',
    createdAt: new Date().toISOString(),
    password: uid('PWD')
  };
  if (!validateEmail(user.email)) throw new Error('Google account email not available');
  try {
    await postToBackend('signupUser', user);
  } catch (error) {
    if (!String(error.message).toLowerCase().includes('exists')) {
      try {
        await postToBackend('loginUser', { email: user.email, password: user.password });
      } catch {}
    }
  }
  delete user.password;
  APP.state.currentUser = user;
  APP.state.session = { userId: user.userId, name: user.name, email: user.email, loginAt: new Date().toISOString() };
  syncState();
  await hydrateUserData();
  showToast('Signed in with Google successfully');
  setTimeout(() => window.location.href = 'account.html', 600);
}

function initGoogleAuth() {
  const googleWrapper = byId('googleSignInBtn');
  if (!googleWrapper) return;
  const initialize = () => {
    if (!window.google?.accounts?.id) return;
    try {
      window.google.accounts.id.initialize({
        client_id: CONFIG.googleClientId,
        callback: async response => {
          try { await handleGoogleCredential(response); } catch (error) { showToast(error.message || 'Google sign-in failed', '!'); }
        }
      });
      window.google.accounts.id.renderButton(googleWrapper, { theme: 'outline', size: 'large', shape: 'rectangular', text: 'signin_with' });
    } catch {
      googleWrapper.innerHTML = '<button type="button" class="btn-google">Continue with Google</button>';
    }
  };
  if (window.google?.accounts?.id) initialize();
  else {
    const poll = setInterval(() => {
      if (window.google?.accounts?.id) { clearInterval(poll); initialize(); }
    }, 300);
    setTimeout(() => clearInterval(poll), 8000);
  }
}

function initLoginPage() {
  const signupForm = byId('signupForm');
  const loginForm = byId('loginForm');
  signupForm?.addEventListener('submit', async e => {
    e.preventDefault();
    try {
      const name = byId('signupName')?.value.trim();
      const phone = byId('signupPhone')?.value.trim();
      const email = byId('signupEmail')?.value.trim().toLowerCase();
      const password = byId('signupPassword')?.value.trim();
      if (!name || !phone || !email || !password) throw new Error('Please complete all signup fields');
      if (!validatePhone(phone)) throw new Error('Enter a valid phone number');
      if (!validateEmail(email)) throw new Error('Enter a valid email address');
      const user = {
        userId: uid('USR'),
        name, phone, email, password,
        authProvider: 'email',
        createdAt: new Date().toISOString()
      };
      const response = await postToBackend('signupUser', user);
      const savedUser = response.user || user;
      delete savedUser.password;
      APP.state.currentUser = savedUser;
      APP.state.session = { userId: savedUser.userId, name: savedUser.name, email: savedUser.email, loginAt: new Date().toISOString() };
      syncState();
      showToast('Account created successfully');
      setTimeout(() => window.location.href = 'account.html', 500);
    } catch (error) { showToast(error.message, '!'); }
  });
  loginForm?.addEventListener('submit', async e => {
    e.preventDefault();
    try {
      const email = byId('loginEmail')?.value.trim().toLowerCase();
      const password = byId('loginPassword')?.value.trim();
      if (!email || !password) throw new Error('Email and password are required');
      const response = await postToBackend('loginUser', { email, password });
      const user = response.user || { userId: uid('USR'), name: email.split('@')[0] || 'Guest', email, phone: '', authProvider: 'email' };
      delete user.password;
      APP.state.currentUser = user;
      APP.state.session = { userId: user.userId, name: user.name, email: user.email, loginAt: new Date().toISOString() };
      syncState();
      await hydrateUserData();
      showToast('Logged in successfully');
      setTimeout(() => window.location.href = 'account.html', 500);
    } catch (error) { showToast(error.message || 'Invalid email or password', '!'); }
  });
  initGoogleAuth();
}

function initAccountPage() {
  const page = byId('accountPage');
  if (!page) return;
  let user = getCurrentUser();
  if (!user) {
    const storedUser = readJSON(CONFIG.storageKeys.user, null);
    const storedSession = readJSON(CONFIG.storageKeys.session, null);
    if (storedUser || storedSession) {
      if (storedUser) APP.state.currentUser = storedUser;
      if (storedSession) APP.state.session = storedSession;
      syncState();
      user = getCurrentUser();
    }
  }
  if (!user) { window.location.href = 'login.html'; return; }
  renderAccountPage();
  renderDeliveryTracking();
  qsa('.account-nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      qsa('.account-nav-btn').forEach(item => item.classList.remove('active'));
      qsa('.account-tab').forEach(tab => tab.classList.remove('active'));
      btn.classList.add('active');
      byId(btn.dataset.tab)?.classList.add('active');
      if (btn.dataset.tab === 'trackingTab') renderDeliveryTracking();
    });
  });
  byId('profileForm')?.addEventListener('submit', e => {
    e.preventDefault();
    try { updateProfile(); } catch (error) { showToast(error.message, '!'); }
  });
  byId('logoutBtn')?.addEventListener('click', logoutUser);
  byId('toggleAddressFormBtn')?.addEventListener('click', () => {
    byId('addAddressWrap')?.classList.toggle('open');
  });
  byId('saveAddressBtn')?.addEventListener('click', () => {
    try { saveAddressFromForm(); } catch (error) { showToast(error.message, '!'); }
  });
  document.addEventListener('click', e => {
    const reorderBtn = e.target.closest('[data-reorder]');
    if (reorderBtn) reorderOrder(reorderBtn.dataset.reorder);
    const cancelBtn = e.target.closest('[data-cancel-order]');
    if (cancelBtn) {
      const orderId = cancelBtn.dataset.cancelOrder;
      if (!orderId) return;
      if (!confirm(`Cancel order ${orderId}?`)) return;
      postToBackend('cancelOrder', { orderId }).then(hydrateUserData).then(() => {
        showToast('Order cancelled successfully');
      }).catch(err => showToast(err.message || 'Unable to cancel order', '!'));
    }
    const defaultBtn = e.target.closest('[data-default-address]');
    if (defaultBtn) setDefaultAddress(defaultBtn.dataset.defaultAddress);
    const deleteBtn = e.target.closest('[data-delete-address]');
    if (deleteBtn) deleteAddress(deleteBtn.dataset.deleteAddress);
  }, true);
  hydrateUserData();
}

function init() {
  initPageTransitions();
  initHamburger();
  initCartUI();
  initMenuFilters();
  initReservationForm();
  initContactForm();
  initTakeawayPage();
  initAuthStatusInNav();
  initAnimations();
  fillProfileFields();
  updateCartCount();
  renderCart();
  renderOrderSummary();
  initLoginPage();
  initAccountPage();
}

document.addEventListener('DOMContentLoaded', init);

window.CONFIG = CONFIG;
window.APP = APP;
window.showToast = showToast;
window.handleLogin = handleLogin;
window.handleSignup = handleSignup;
window.processPayment = processPayment;
window.getPendingOrder = getPendingOrder;
window.formatPrice = formatPrice;