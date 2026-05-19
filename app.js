/* ITALIANA RESTAURANT */
'use strict';

/* =========================
   CONFIG
========================= */
const CONFIG = {
  endpoint: 'https://script.google.com/macros/s/AKfycbxlGrCXgE3xoH2YN5XGCdsS-_JIAyJSEzOt8EUe1MJflWzODbYLpfF65HbRvkXvnE12/exec',
  storageKeys: {
    cart: 'italiana_cart',
    user: 'italiana_user',
    session: 'italiana_session',
    reservations: 'italiana_reservations',
    orders: 'italiana_orders',
    payments: 'italiana_payments',
    lastPayment: 'italiana_last_payment',
    pendingOrder: 'italiana_pending_order'
  }
};

/* =========================
   MENU DATA
========================= */
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

/* =========================
   HELPERS
========================= */
function readJSON(key, fallback = null) {
  try {
    return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback));
  } catch {
    return fallback;
  }
}

function writeJSON(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function uid(prefix = 'ITL') {
  return `${prefix}-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
}

function shallowCopyArray(arr) {
  return [...arr];
}

function deepCopy(value) {
  return JSON.parse(JSON.stringify(value));
}

function formatPrice(value) {
  return `₹${Number(value || 0).toLocaleString('en-IN')}`;
}

function qs(selector, scope = document) {
  return scope.querySelector(selector);
}

function qsa(selector, scope = document) {
  return [...scope.querySelectorAll(selector)];
}

function byId(id) {
  return document.getElementById(id);
}

function setText(id, text) {
  const el = byId(id);
  if (el) el.textContent = text;
}

function showToast(message = 'Done') {
  const toast = byId('toast');
  const text = byId('toastText');
  if (!toast || !text) return;
  text.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2600);
}

function showLoader() {
  const loader = byId('loader');
  if (loader) loader.classList.remove('hidden');
}

function hideLoader() {
  const loader = byId('loader');
  if (loader) loader.classList.add('hidden');
}

function validatePhone(phone) {
  return /^[6-9]\d{9}$/.test(phone);
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/* =========================
   APP STATE
========================= */
const APP = {
  state: {
    cart: readJSON(CONFIG.storageKeys.cart, []),
    currentUser: readJSON(CONFIG.storageKeys.user, null),
    session: readJSON(CONFIG.storageKeys.session, null),
    reservations: readJSON(CONFIG.storageKeys.reservations, []),
    orders: readJSON(CONFIG.storageKeys.orders, []),
    payments: readJSON(CONFIG.storageKeys.payments, []),
    orderType: 'delivery',
    activeCoupon: null
  }
};

function getCurrentUser() {
  return APP.state.currentUser || APP.state.session || null;
}

function syncState() {
  writeJSON(CONFIG.storageKeys.cart, APP.state.cart);
  writeJSON(CONFIG.storageKeys.user, APP.state.currentUser);
  writeJSON(CONFIG.storageKeys.session, APP.state.session);
  writeJSON(CONFIG.storageKeys.reservations, APP.state.reservations);
  writeJSON(CONFIG.storageKeys.orders, APP.state.orders);
  writeJSON(CONFIG.storageKeys.payments, APP.state.payments);
}

async function postToBackend(action, payload = {}) {
  if (!CONFIG.endpoint || CONFIG.endpoint.includes('PASTE_YOUR')) {
    return { success: true, offlineDemo: true, action, data: payload };
  }

  const response = await fetch(CONFIG.endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify({ action, ...payload })
  });

  let result = { success: true };
  try {
    result = await response.json();
  } catch {
    result = { success: true };
  }

  if (result.success === false) {
    throw new Error(result.message || 'Request failed');
  }

  return result;
}

/* =========================
   CART
========================= */
function saveCart() {
  writeJSON(CONFIG.storageKeys.cart, APP.state.cart);
}

function getCartTotal() {
  return APP.state.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function getCartCount() {
  return APP.state.cart.reduce((sum, item) => sum + item.qty, 0);
}

function addToCart(id) {
  const item = MENU_ITEMS.find(menuItem => menuItem.id === id);
  if (!item) return;

  const existing = APP.state.cart.find(cartItem => cartItem.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    APP.state.cart.push({ ...item, qty: 1 });
  }

  saveCart();
  renderCart();
  renderOrderSummary();
  updateCartCount();
  showToast(`✅ ${item.name} added to cart`);
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
  if (item.qty <= 0) {
    removeFromCart(id);
    return;
  }
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
    container.innerHTML = `
      <div class="cart-empty">
        <span>🍽</span>
        <p>Your cart is empty.<br>Browse our menu to add items.</p>
      </div>
    `;
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

/* =========================
   MENU
========================= */
function renderMenuItems(filter = 'all', targetId = 'menuGrid') {
  const menuGrid = byId(targetId);
  if (!menuGrid) return;

  const items = filter === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter(item => item.category === filter);

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

/* =========================
   ORDERS
========================= */
function getOrderTotals() {
  const subtotal = getCartTotal();
  const deliveryFee = APP.state.orderType === 'delivery' ? (subtotal >= 699 ? 0 : 49) : 0;
  const gst = Math.round(subtotal * 0.05);
  const discount = APP.state.activeCoupon?.discount || 0;
  const total = Math.max(subtotal + deliveryFee + gst - discount, 0);
  return { subtotal, deliveryFee, gst, discount, total };
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

  const { subtotal, deliveryFee, gst, discount, total } = getOrderTotals();
  listEl.innerHTML = APP.state.cart.map(item => `
    <div class="order-sum-item">
      <span>${item.name} × ${item.qty}</span>
      <span>${formatPrice(item.price * item.qty)}</span>
    </div>
  `).join('');

  setText('subtotalValue', formatPrice(subtotal));
  setText('deliveryFeeValue', deliveryFee === 0 ? 'Free' : formatPrice(deliveryFee));
  setText('gstValue', formatPrice(gst));
  setText('discountValue', `- ${formatPrice(discount)}`);
  setText('orderTotal', formatPrice(total));

  if (totalDisplay) totalDisplay.style.display = 'block';
}

async function createOrderRecord(extraData = {}) {
  const user = getCurrentUser();
  const cartDeepCopy = deepCopy(APP.state.cart);
  const cartShallowCopy = shallowCopyArray(APP.state.cart);
  const { subtotal, deliveryFee, gst, discount, total } = getOrderTotals();

  const order = {
    orderId: uid('ORD'),
    userId: user?.userId || 'GUEST',
    items: cartDeepCopy,
    itemsCount: cartShallowCopy.length,
    orderType: APP.state.orderType,
    subtotal,
    deliveryFee,
    gst,
    discount,
    total,
    status: 'Placed',
    createdAt: new Date().toISOString(),
    ...extraData
  };

  await postToBackend('createOrder', { ...order, itemsJson: JSON.stringify(order.items) });
  APP.state.orders.push(order);
  syncState();
  return order;
}

async function createPaymentRecord(paymentData = {}) {
  const payment = {
    paymentId: uid('PAY'),
    userId: getCurrentUser()?.userId || 'GUEST',
    ...paymentData,
    createdAt: new Date().toISOString()
  };

  await postToBackend('createPayment', payment);
  APP.state.payments.push(payment);
  writeJSON(CONFIG.storageKeys.lastPayment, payment);
  syncState();
  return payment;
}

/* =========================
   AUTH
========================= */
function fillProfileFields() {
  const user = getCurrentUser();
  if (!user) return;

  const fieldMap = [
    ['resName', user.name],
    ['resPhone', user.phone],
    ['resEmail', user.email],
    ['payerName', user.name],
    ['payerPhone', user.phone],
    ['payerEmail', user.email],
    ['contactName', user.name],
    ['contactPhone', user.phone],
    ['contactEmail', user.email]
  ];

  fieldMap.forEach(([id, value]) => {
    const field = byId(id);
    if (field && !field.value) field.value = value;
  });
}

async function handleSignup(formData) {
  const { name, phone, email, password } = formData;

  if (!name || !phone || !email || !password) {
    throw new Error('Please complete all signup fields');
  }
  if (!validatePhone(phone)) {
    throw new Error('Enter a valid phone number');
  }
  if (!validateEmail(email)) {
    throw new Error('Enter a valid email address');
  }

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
  APP.state.session = {
    userId: user.userId,
    name: user.name,
    email: user.email,
    loginAt: new Date().toISOString()
  };

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
  APP.state.session = {
    userId: user.userId,
    name: user.name,
    email: user.email,
    loginAt: new Date().toISOString()
  };

  syncState();
  return user;
}

function logoutUser() {
  APP.state.currentUser = null;
  APP.state.session = null;
  writeJSON(CONFIG.storageKeys.user, null);
  writeJSON(CONFIG.storageKeys.session, null);
  showToast('👋 Logged out successfully');
  setTimeout(() => {
    window.location.href = 'index.html';
  }, 700);
}

/* =========================
   RESERVATION
========================= */
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

  if (!reservation.name || !reservation.phone || !reservation.email || !reservation.branch || !reservation.date || !reservation.time || !reservation.guests) {
    throw new Error('Please fill all reservation details');
  }

  if (!validatePhone(reservation.phone)) {
    throw new Error('Enter a valid phone number');
  }

  if (!validateEmail(reservation.email)) {
    throw new Error('Enter a valid email address');
  }

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
  showToast('✅ Reservation confirmed successfully');
}

/* =========================
   CONTACT
========================= */
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

  if (!payload.name || !payload.phone || !payload.email || !payload.subject || !payload.message) {
    throw new Error('Please complete the contact form');
  }

  if (!validatePhone(payload.phone)) {
    throw new Error('Enter a valid phone number');
  }

  if (!validateEmail(payload.email)) {
    throw new Error('Enter a valid email address');
  }

  await postToBackend('createContact', payload);
  form.reset();
  fillProfileFields();
  showToast('✅ Message sent successfully');
}

/* =========================
   PAYMENTS
========================= */
function getPendingOrder() {
  return readJSON(CONFIG.storageKeys.pendingOrder, null);
}

function savePendingOrder(snapshot) {
  writeJSON(CONFIG.storageKeys.pendingOrder, snapshot);
}

function clearPendingOrder() {
  localStorage.removeItem(CONFIG.storageKeys.pendingOrder);
}

async function processPayment(method, detailData = {}) {
  const pendingOrder = getPendingOrder();
  if (!pendingOrder || !Array.isArray(pendingOrder.items) || !pendingOrder.items.length) {
    throw new Error('No pending order found. Please return to takeaway page.');
  }

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

  await postToBackend('createOrder', {
    ...orderPayload,
    itemsJson: JSON.stringify(orderPayload.items)
  });

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

/* =========================
   UI INIT
========================= */
function initCartUI() {
  const cartBtn = byId('cartBtn');
  const cartClose = byId('cartClose');
  const sidebar = byId('cartSidebar');

  if (cartBtn && sidebar) {
    cartBtn.addEventListener('click', () => sidebar.classList.add('open'));
  }

  if (cartClose && sidebar) {
    cartClose.addEventListener('click', () => sidebar.classList.remove('open'));
  }

  document.addEventListener('click', e => {
    const addBtn = e.target.closest('[data-add-cart]');
    if (addBtn) {
      addToCart(Number(addBtn.dataset.addCart));
    }

    const qtyBtn = e.target.closest('.qty-btn');
    if (qtyBtn) {
      const id = Number(qtyBtn.dataset.id);
      const action = qtyBtn.dataset.action;
      if (action === 'increase') changeQty(id, 1);
      if (action === 'decrease') changeQty(id, -1);
      if (action === 'remove') removeFromCart(id);
    }
  }, true);
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
  if (dateInput) {
    dateInput.min = new Date().toISOString().split('T')[0];
  }

  form.addEventListener('submit', async e => {
    e.preventDefault();
    try {
      await submitReservation(form);
    } catch (error) {
      showToast(`❌ ${error.message}`);
    }
  });

  const closeBtn = byId('closeReservationModal');
  const modal = byId('reservationModal');
  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => modal.classList.remove('show'));
  }
}

function initContactForm() {
  const form = byId('contactForm');
  if (!form) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();
    try {
      await submitContact(form);
    } catch (error) {
      showToast(`❌ ${error.message}`);
    }
  });
}

function initTakeawayPage() {
  const deliveryTypeSelect = byId('deliveryType');
  const proceedBtn = byId('proceedPaymentBtn');

  if (deliveryTypeSelect) {
    deliveryTypeSelect.addEventListener('change', e => {
      APP.state.orderType = e.target.value;
      renderOrderSummary();
    });
  }

  if (proceedBtn) {
    proceedBtn.addEventListener('click', () => {
      if (!APP.state.cart.length) {
        showToast('❌ Add items before continuing');
        return;
      }

      const totals = getOrderTotals();
      const snapshot = {
        pendingOrderId: uid('PND'),
        userId: getCurrentUser()?.userId || 'GUEST',
        items: deepCopy(APP.state.cart),
        orderType: APP.state.orderType,
        subtotal: totals.subtotal,
        deliveryFee: totals.deliveryFee,
        gst: totals.gst,
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
  profileNode.href = 'login.html';
  profileNode.textContent = `Hi, ${user.name.split(' ')[0]}`;

  const logoutNode = document.createElement('a');
  logoutNode.id = 'navLogout';
  logoutNode.href = '#';
  logoutNode.textContent = 'Logout';
  logoutNode.addEventListener('click', e => {
    e.preventDefault();
    logoutUser();
  });

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

function initPageTransitions() {
  window.addEventListener('load', () => setTimeout(hideLoader, 500));
}

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
}

document.addEventListener('DOMContentLoaded', init);

/* =========================
   WINDOW EXPORTS
========================= */
window.CONFIG = CONFIG;
window.APP = APP;
window.showToast = showToast;
window.handleLogin = handleLogin;
window.handleSignup = handleSignup;
window.processPayment = processPayment;
window.getPendingOrder = getPendingOrder;
window.formatPrice = formatPrice;