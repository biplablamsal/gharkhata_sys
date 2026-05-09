/* =====================================================
   GharKhata v2 — script.js
   Complete Household Management System
   ===================================================== */

// ============================================================
//  BIKRAM SAMBAT (BS) ↔ AD CONVERSION
// ============================================================

const BS_DATA = {
  2000: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  2001: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2002: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2003: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2004: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  2005: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2006: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2007: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2008: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31],
  2009: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2010: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2011: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2012: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
  2013: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2014: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2015: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2016: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
  2017: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2018: [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2019: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  2020: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  2021: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2022: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2023: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2024: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  2025: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2026: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2027: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2028: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
  2029: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2030: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2031: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2032: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
  2033: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2034: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2035: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2036: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
  2037: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2038: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2039: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2040: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
  2041: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2042: [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2043: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  2044: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  2045: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2046: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2047: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2048: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
  2049: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2050: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2051: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2052: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
  2053: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2054: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2055: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2056: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
  2057: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2058: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2059: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  2060: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  2061: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2062: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2063: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2064: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
  2065: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2066: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2067: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2068: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
  2069: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2070: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2071: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2072: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
  2073: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2074: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2075: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2076: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
  2077: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2078: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2079: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  2080: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  2081: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2082: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2083: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2084: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
  2085: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2086: [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2087: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  2088: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  2089: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2090: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
};

const BS_MONTH_NAMES_NP = [
  "बैशाख",
  "जेठ",
  "असार",
  "श्रावण",
  "भाद्र",
  "आश्विन",
  "कार्तिक",
  "मंसिर",
  "पुष",
  "माघ",
  "फाल्गुन",
  "चैत्र",
];
const BS_MONTH_NAMES_EN = [
  "Baisakh",
  "Jestha",
  "Ashadh",
  "Shrawan",
  "Bhadra",
  "Ashwin",
  "Kartik",
  "Mansir",
  "Poush",
  "Magh",
  "Falgun",
  "Chaitra",
];

const KEYS = {
  household: "ghk_household",
  income: "ghk_income",
  agriculture: "ghk_agriculture",
  livestock: "ghk_livestock",
  labour: "ghk_labour",
  vehicle: "ghk_vehicle",
  medical: "ghk_medical",
  family: "ghk_family",
  users: "ghk_users",
  session: "ghk_session",
};

const HOUSEHOLD_ITEM_TYPES = [
  "Grains & Cereals",
  "Pulses & Lentils",
  "Vegetables",
  "Fruits",
  "Dairy Products",
  "Meat & Protein",
  "Oil & Ghee",
  "Spices & Masala",
  "Packaged Food / Snacks",
  "Beverages (Tea, Coffee, etc.)",
  "Cooking Fuel (Gas, Firewood)",
  "Household Essentials",
  "Agriculture Inputs (Seeds, Fertilizer, etc.)",
  "Livestock Feed",
  "Other",
];

const MIXED_BILL_CAT = "Mixed bill";
const LEGACY_HOUSE_CAT_MAP = {
  Groceries: "Grains & Cereals",
  Utilities: "Household Essentials",
  Rent: "Household Essentials",
  Education: "Other",
  Entertainment: "Packaged Food / Snacks",
  Clothing: "Household Essentials",
  Other: "Other",
};

let householdBillNextRowId = 0;
let currentPage = "dashboard";
let editingId = null,
  editingMod = null;
let charts = {};
let labourCharts = {};
let vehicleCharts = {};
let medicalCharts = {};
let currentVehicleFilter = "";
let toastTimer;

// ============================================================
//  BS DATE CONVERSION FUNCTIONS
// ============================================================

function adToBS(adDate) {
  const startAD = new Date(1943, 3, 14);
  let totalDays = Math.floor((adDate - startAD) / 86400000);
  let bsY = 2000,
    bsM = 1,
    bsD = 1;
  outer: for (let y = 2000; y <= 2090; y++) {
    const days = BS_DATA[y];
    if (!days) break;
    for (let m = 0; m < 12; m++) {
      if (totalDays < days[m]) {
        bsY = y;
        bsM = m + 1;
        bsD = totalDays + 1;
        break outer;
      }
      totalDays -= days[m];
    }
  }
  return { y: bsY, m: bsM, d: bsD };
}

function bsToAD(bsY, bsM, bsD) {
  const startAD = new Date(1943, 3, 14);
  let totalDays = 0;
  for (let y = 2000; y < bsY; y++) {
    const days = BS_DATA[y];
    if (!days) break;
    totalDays += days.reduce((s, d) => s + d, 0);
  }
  const months = BS_DATA[bsY];
  if (!months) return startAD;
  for (let m = 0; m < bsM - 1; m++) totalDays += months[m];
  totalDays += bsD - 1;
  const result = new Date(startAD);
  result.setDate(result.getDate() + totalDays);
  return result;
}

function fmtBS(bsY, bsM, bsD, english = false) {
  const m = english ? BS_MONTH_NAMES_EN[bsM - 1] : BS_MONTH_NAMES_NP[bsM - 1];
  return `${bsY} ${m} ${bsD}`;
}

function todayBS() {
  return adToBS(new Date());
}
function currentBSYear() {
  return todayBS().y;
}

function makeDateObj(bsY, bsM, bsD) {
  const ad = bsToAD(parseInt(bsY), parseInt(bsM), parseInt(bsD));
  return {
    bsY: parseInt(bsY),
    bsM: parseInt(bsM),
    bsD: parseInt(bsD),
    ad: ad.toISOString().split("T")[0],
  };
}

function bsDisplay(r) {
  if (!r.bsY) return "—";
  return `${r.bsY} ${BS_MONTH_NAMES_NP[r.bsM - 1]} ${r.bsD}`;
}

// ============================================================
//  STORAGE & UTILITIES
// ============================================================

function loadData(k) {
  try {
    const user = getCurrentUser();
    const key = user ? `${KEYS[k]}_${user.username}` : KEYS[k];
    return JSON.parse(localStorage.getItem(key)) || [];
  } catch {
    return [];
  }
}
function saveData(k, d) {
  const user = getCurrentUser();
  const key = user ? `${KEYS[k]}_${user.username}` : KEYS[k];
  localStorage.setItem(key, JSON.stringify(d));
}
function getCurrentUser() {
  try {
    const session = localStorage.getItem(KEYS.session);
    return session ? JSON.parse(session) : null;
  } catch {
    return null;
  }
}
function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}
function fmt(n) {
  return (parseFloat(n) || 0).toLocaleString("en-IN", {
    maximumFractionDigits: 2,
  });
}

function emptyRow(cols) {
  return `<tr><td colspan="${cols}" style="text-align:center;padding:40px;color:var(--text-3)">
    <div style="font-size:2rem;margin-bottom:8px">📭</div>No records found. Add one using the button above.</td></tr>`;
}

function escapeHtml(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");
}
function escHtmlAttrVal(s) {
  return String(s || "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;");
}

function filterBS(records, yearSel, monthSel) {
  let data = records;
  if (yearSel) data = data.filter((r) => r.bsY == yearSel);
  if (monthSel) data = data.filter((r) => r.bsM == monthSel);
  return data;
}

function getYMFilter(prefix) {
  return {
    year: document.getElementById(prefix + "BSYear")?.value || "",
    month: document.getElementById(prefix + "BSMonth")?.value || "",
  };
}

function sortByDate(data) {
  return [...data].sort((a, b) => (b.ad || "").localeCompare(a.ad || ""));
}

function editBtn(mod, r) {
  return `<button class="btn-action edit" onclick='openModal("${mod}",${JSON.stringify(r).replace(/'/g, "&#39;")})'>✏️</button>`;
}
function delBtn(mod, id) {
  return `<button class="btn-action del" onclick="deleteRecord('${mod}','${id}')">🗑</button>`;
}
function fv(r, f, def = "") {
  return r && r[f] !== undefined ? r[f] : def;
}

// ============================================================
//  AUTHENTICATION
// ============================================================

function loadUsers() {
  try {
    const raw = localStorage.getItem(KEYS.users);
    if (!raw) {
      const defaultUsers = [
        { username: "admin", password: "1234", name: "Admin" },
      ];
      localStorage.setItem(KEYS.users, JSON.stringify(defaultUsers));
      return defaultUsers;
    }

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) throw new Error("Invalid users storage");

    if (!parsed.find((u) => u.username === "admin")) {
      parsed.unshift({ username: "admin", password: "1234", name: "Admin" });
      localStorage.setItem(KEYS.users, JSON.stringify(parsed));
    }

    return parsed;
  } catch {
    const defaultUsers = [
      { username: "admin", password: "1234", name: "Admin" },
    ];
    localStorage.setItem(KEYS.users, JSON.stringify(defaultUsers));
    return defaultUsers;
  }
}
function saveUsers(u) {
  localStorage.setItem(KEYS.users, JSON.stringify(u));
}

function doLogin() {
  const loginUserEl = document.getElementById("loginUser");
  const loginPassEl = document.getElementById("loginPass");
  const err = document.getElementById("loginError");
  const user = loginUserEl ? loginUserEl.value.trim() : "";
  const pass = loginPassEl ? loginPassEl.value : "";

  if (!user || !pass) {
    err.textContent = "Please enter username and password.";
    return;
  }

  const users = loadUsers();
  const found = users.find((u) => u.username === user && u.password === pass);

  if (!found) {
    if (err) err.textContent = "Incorrect username or password.";
    return;
  }

  localStorage.setItem(
    KEYS.session,
    JSON.stringify({ username: found.username, name: found.name }),
  );
  if (err) err.textContent = "";
  startApp(found);
}

function doRegister() {
  const name = document.getElementById("regName").value.trim();
  const user = document.getElementById("regUser").value.trim();
  const pass = document.getElementById("regPass").value;
  const err = document.getElementById("regError");
  if (!name || !user || !pass) {
    err.textContent = "All fields are required.";
    return;
  }
  if (pass.length < 3) {
    err.textContent = "Password must be at least 3 characters.";
    return;
  }
  const users = loadUsers();
  if (users.find((u) => u.username === user)) {
    err.textContent = "Username already taken.";
    return;
  }
  users.push({ username: user, password: pass, name });
  saveUsers(users);
  localStorage.setItem(KEYS.session, JSON.stringify({ username: user, name }));
  err.textContent = "";
  startApp({ username: user, name });
}

function doLogout() {
  localStorage.removeItem(KEYS.session);
  const appShell = document.getElementById("appShell");
  const loginScreen = document.getElementById("loginScreen");
  const loginUser = document.getElementById("loginUser");
  const loginPass = document.getElementById("loginPass");
  const loginError = document.getElementById("loginError");

  if (appShell) appShell.style.display = "none";
  if (loginScreen) loginScreen.style.display = "flex";
  if (loginUser) loginUser.value = "";
  if (loginPass) loginPass.value = "";
  if (loginError) loginError.textContent = "";
  showLogin();
}

function showRegister() {
  const loginForm =
    document.getElementById("loginForm") ||
    document.getElementById("loginFormModern");
  const registerForm =
    document.getElementById("registerForm") ||
    document.getElementById("registerFormModern");

  if (loginForm) loginForm.style.display = "none";
  if (registerForm) registerForm.style.display = "block";
}
function showLogin() {
  const loginForm =
    document.getElementById("loginForm") ||
    document.getElementById("loginFormModern");
  const registerForm =
    document.getElementById("registerForm") ||
    document.getElementById("registerFormModern");

  if (registerForm) registerForm.style.display = "none";
  if (loginForm) loginForm.style.display = "block";
}

function togglePw(id, btn) {
  const el = document.getElementById(id);
  if (!el) return;
  if (el.type === "password") {
    el.type = "text";
    btn.textContent = "🙈";
  } else {
    el.type = "password";
    btn.textContent = "👁";
  }
}

function migrateHouseholdLegacyData() {
  const records = loadData("household");
  let migrated = false;
  const normalized = records.map((record) => {
    const category = record.category || "";
    const mapped = LEGACY_HOUSE_CAT_MAP[category];
    if (mapped && mapped !== category) {
      migrated = true;
      return { ...record, category: mapped };
    }
    return record;
  });
  if (migrated) saveData("household", normalized);
}

// ============================================================
//  NAVIGATION
// ============================================================

function updateTopbarDates() {
  const now = new Date();
  const bs = adToBS(now);
  document.getElementById("topbarDateBS").textContent =
    `${bs.y} ${BS_MONTH_NAMES_NP[bs.m - 1]} ${bs.d}`;
  document.getElementById("topbarDateAD").textContent = now.toLocaleDateString(
    "en-IN",
    { day: "numeric", month: "short", year: "numeric" },
  );
}

function closeSidebarMobile() {
  document.getElementById("sidebar").classList.remove("open");
  document.getElementById("sidebarBackdrop").classList.remove("open");
}

function navigate(page) {
  console.log("Navigate called to page:", page);
  const pageEl = document.getElementById("page-" + page);
  if (!pageEl) {
    console.warn(`navigate: page '#page-${page}' not found`);
    return;
  }

  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.remove("active"));
  pageEl.classList.add("active");
  document
    .querySelectorAll(".nav-item")
    .forEach((n) => n.classList.toggle("active", n.dataset.page === page));
  const titles = {
    dashboard: "Dashboard",
    household: "Household Expenses",
    income: "Income Records",
    agriculture: "Agriculture Records",
    livestock: "Livestock Records",
    labour: "Labour Records",
    vehicle: "Vehicle Expenses",
    medical: "Medical Records",
    family: "Family Members",
  };
  const titleEl = document.getElementById("topbarTitle");
  if (titleEl) titleEl.textContent = titles[page] || page;
  currentPage = page;
  if (page === "dashboard") renderDashboard();
  else if (page === "family") renderFamily();
  else {
    renderTable(page);
    if (page === "labour") renderLabourCharts();
  }
  closeSidebarMobile();
}

function populateBSYears() {
  const curY = currentBSYear();
  const prefixes = ["dash", "hh", "inc", "agri", "ls", "lab", "veh", "med"];
  prefixes.forEach((prefix) => {
    const el = document.getElementById(prefix + "BSYear");
    if (!el) return;
    el.innerHTML = '<option value="">All Years</option>';
    for (let y = curY + 1; y >= 2070; y--)
      el.innerHTML += `<option value="${y}" ${y === curY ? "selected" : ""}>${y}</option>`;
  });
}

// Event listeners will be set in DOMContentLoaded

// ============================================================
//  FAMILY MEMBERS
// ============================================================

function renderFamily() {
  const data = loadData("family");
  const grid = document.getElementById("familyGrid");
  const relEmoji = {
    Grandfather: "👴",
    Grandmother: "👵",
    Father: "👨",
    Mother: "👩",
    Son: "👦",
    Daughter: "👧",
    Brother: "🧑",
    Sister: "👧",
    Husband: "👨",
    Wife: "👩",
    Other: "🧑",
  };
  if (!data.length) {
    grid.innerHTML = `<div class="family-empty"><div class="empty-icon">👨‍👩‍👧‍👦</div><p>No family members added yet.<br>Click "+ Add Member" to start.</p></div>`;
    return;
  }
  grid.innerHTML = data
    .map((m) => {
      const gClass =
        m.gender === "Male"
          ? "male"
          : m.gender === "Female"
            ? "female"
            : "other";
      const emoji = relEmoji[m.relation] || "🧑";
      return `<div class="family-card"><div class="family-avatar ${gClass}">${emoji}</div><div class="family-name">${m.name}</div><div class="family-rel">${m.relation || "—"}</div><div class="family-age">Age: ${m.age || "—"} &nbsp;|&nbsp; ${m.gender}</div>${m.phone ? `<div class="family-phone">📞 ${m.phone}</div>` : ""}${m.notes ? `<div style="font-size:0.78rem;color:var(--text-3);margin-top:6px">${m.notes}</div>` : ""}<div class="family-actions"><button class="btn-action edit" onclick="openModal('family', ${JSON.stringify(m).replace(/"/g, "&quot;")})">✏️ Edit</button><button class="btn-action del" onclick="deleteRecord('family','${m.id}')">🗑 Del</button></div></div>`;
    })
    .join("");
}

function getFamilyNames() {
  return loadData("family").map((m) => m.name);
}

function populateMemberDropdowns() {
  const names = getFamilyNames();
  ["incMemberFilter", "medMemberFilter"].forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const curVal = el.value;
    el.innerHTML = '<option value="">All Members</option>';
    names.forEach(
      (n) =>
        (el.innerHTML += `<option value="${n}" ${n === curVal ? "selected" : ""}>${n}</option>`),
    );
  });
}

// ============================================================
//  MODAL & BS DATE PICKER
// ============================================================

function openModal(module, record = null) {
  editingId = record ? record.id : null;
  editingMod = module;
  const names = {
    household: "Household",
    income: "Income",
    agriculture: "Agriculture",
    livestock: "Livestock",
    labour: "Labour",
    vehicle: "Vehicle",
    medical: "Medical",
    family: "Family Member",
  };
  document.getElementById("modalTitle").textContent =
    (record ? "Edit " : "Add ") + names[module];
  document.getElementById("modalBody").innerHTML = buildForm(module, record);
  if (module === "household") initHouseholdBillForm();
  document.getElementById("modalOverlay").classList.add("open");
  document.getElementById("modal").classList.add("open");
  setTimeout(() => {
    const first = document.querySelector(
      "#modalBody input:not([readonly]), #modalBody select",
    );
    if (first) first.focus();
  }, 80);
}

function closeModal() {
  document.getElementById("modalOverlay").classList.remove("open");
  document.getElementById("modal").classList.remove("open");
  editingId = editingMod = null;
}

function bsDatePicker(bsY, bsM, bsD) {
  const curY = currentBSYear();
  let yearOpts = "";
  for (let y = curY + 2; y >= 2070; y--)
    yearOpts += `<option value="${y}" ${y === (bsY || curY) ? "selected" : ""}>${y}</option>`;
  let monthOpts = "";
  BS_MONTH_NAMES_NP.forEach((n, i) => {
    monthOpts += `<option value="${i + 1}" ${i + 1 === (bsM || todayBS().m) ? "selected" : ""}>${n} (${i + 1})</option>`;
  });
  const selY = bsY || curY,
    selM = bsM || todayBS().m;
  const daysInMonth = BS_DATA[selY] ? BS_DATA[selY][selM - 1] : 30;
  let dayOpts = "";
  for (let d = 1; d <= daysInMonth; d++)
    dayOpts += `<option value="${d}" ${d === (bsD || todayBS().d) ? "selected" : ""}>${d}</option>`;
  return `<div class="form-row three" style="margin-bottom:13px"><div class="form-group"><label>BS Year / वर्ष</label><select id="f_bsy" onchange="updateDayOptions()">${yearOpts}</select></div><div class="form-group"><label>BS Month / महिना</label><select id="f_bsm" onchange="updateDayOptions()">${monthOpts}</select></div><div class="form-group"><label>Day / गते</label><select id="f_bsd">${dayOpts}</select></div></div>`;
}

function updateDayOptions() {
  const y = parseInt(document.getElementById("f_bsy")?.value);
  const m = parseInt(document.getElementById("f_bsm")?.value);
  const dayEl = document.getElementById("f_bsd");
  if (!dayEl || !y || !m) return;
  const days = BS_DATA[y] ? BS_DATA[y][m - 1] : 30;
  const cur = parseInt(dayEl.value) || 1;
  dayEl.innerHTML = "";
  for (let d = 1; d <= days; d++)
    dayEl.innerHTML += `<option value="${d}" ${d === Math.min(cur, days) ? "selected" : ""}>${d}</option>`;
}

// ============================================================
//  FORM BUILDER
// ============================================================

function memberOptions(selectedMember = "") {
  const names = getFamilyNames();
  let opts = '<option value="">— Select —</option>';
  names.forEach(
    (n) =>
      (opts += `<option value="${n}" ${n === selectedMember ? "selected" : ""}>${n}</option>`),
  );
  opts += `<option value="Other" ${selectedMember === "Other" ? "selected" : ""}>Other (type below)</option>`;
  return opts;
}

function householdItemTypeOptions(selected = "") {
  return HOUSEHOLD_ITEM_TYPES.map(
    (t) =>
      `<option value="${escHtmlAttrVal(t)}" ${t === selected ? "selected" : ""}>${t}</option>`,
  ).join("");
}

function householdItemsForForm(r) {
  if (r && Array.isArray(r.items) && r.items.length > 0)
    return r.items.map((it) => ({
      itemType: HOUSEHOLD_ITEM_TYPES.includes(it.itemType)
        ? it.itemType
        : "Other",
      itemName: it.itemName ?? "",
      quantity: it.quantity ?? 0,
      rate: it.rate ?? 0,
      lineTotal: it.lineTotal ?? (it.quantity || 0) * (it.rate || 0),
    }));
  if (r && (r.amount > 0 || r.category || r.notes)) {
    const mapped = LEGACY_HOUSE_CAT_MAP[r.category] || r.category || "Other";
    const itemType = HOUSEHOLD_ITEM_TYPES.includes(mapped) ? mapped : "Other";
    const itemName =
      LEGACY_HOUSE_CAT_MAP[r.category] &&
      !HOUSEHOLD_ITEM_TYPES.includes(r.category)
        ? String(r.category)
        : (r.notes || "Expense").slice(0, 80);
    return [
      {
        itemType,
        itemName,
        quantity: 1,
        rate: Number(r.amount) || 0,
        lineTotal: Number(r.amount) || 0,
      },
    ];
  }
  return [{}];
}

function renderHouseholdBillRowHtml(idx, row = {}) {
  const qty = row.quantity ?? "",
    rate = row.rate ?? "",
    line = row.lineTotal != null ? Number(row.lineTotal).toFixed(2) : "";
  return `<div class="household-bill-row" data-idx="${idx}"><div class="form-group"><label>Type</label><select id="f_h_type_${idx}">${householdItemTypeOptions(row.itemType || HOUSEHOLD_ITEM_TYPES[0])}</select></div><div class="form-group"><label>Item</label><input type="text" id="f_h_item_${idx}" value="${escHtmlAttrVal(row.itemName || "")}" placeholder="e.g. Rice 25kg" /></div><div class="form-group"><label>Qty</label><input type="number" id="f_h_qty_${idx}" value="${qty}" min="0" step="0.01" oninput="calcHouseholdBillTotal()" /></div><div class="form-group"><label>Rate (₹)</label><input type="number" id="f_h_rate_${idx}" value="${rate}" min="0" step="0.01" oninput="calcHouseholdBillTotal()" /></div><div class="form-group"><label>Total (₹)</label><input type="number" id="f_h_line_${idx}" value="${line}" readonly style="background:var(--bg-2);" /></div><div class="form-group household-bill-remove-wrap"><label class="invisible-label">−</label><button type="button" class="btn-outline btn-sm household-remove-line" tabindex="-1" onclick="householdBillRemoveRow(this)" title="Remove row">✕</button></div></div>`;
}

function initHouseholdBillForm() {
  const rows = document.querySelectorAll(
    "#householdBillRows .household-bill-row",
  );
  let maxId = -1;
  rows.forEach((row) => {
    const id = parseInt(row.getAttribute("data-idx"), 10);
    if (!Number.isNaN(id)) maxId = Math.max(maxId, id);
  });
  householdBillNextRowId = maxId + 1;
  calcHouseholdBillTotal();
}

function householdBillAddRow() {
  const container = document.getElementById("householdBillRows");
  if (!container) return;
  const idx = householdBillNextRowId++;
  container.insertAdjacentHTML(
    "beforeend",
    renderHouseholdBillRowHtml(String(idx), {}),
  );
  calcHouseholdBillTotal();
  const inp = container.querySelector(`#f_h_item_${idx}, #f_h_qty_${idx}`);
  if (inp) inp.focus();
}

function householdBillRemoveRow(btn) {
  const rows = document.querySelectorAll(
    "#householdBillRows .household-bill-row",
  );
  if (rows.length <= 1) {
    showToast("At least one item row is required.", "error");
    return;
  }
  btn.closest(".household-bill-row").remove();
  calcHouseholdBillTotal();
}

function calcHouseholdBillTotal() {
  let sum = 0;
  document
    .querySelectorAll("#householdBillRows .household-bill-row")
    .forEach((row) => {
      const idx = row.getAttribute("data-idx");
      const qty =
        parseFloat(document.getElementById(`f_h_qty_${idx}`)?.value) || 0;
      const rate =
        parseFloat(document.getElementById(`f_h_rate_${idx}`)?.value) || 0;
      const line = parseFloat((qty * rate).toFixed(2));
      const lineEl = document.getElementById(`f_h_line_${idx}`);
      if (lineEl) lineEl.value = line.toFixed(2);
      sum += line;
    });
  const tot = document.getElementById("f_h_billTotal");
  if (tot) tot.value = sum.toFixed(2);
}

function collectHouseholdBillItems() {
  const out = [];
  document
    .querySelectorAll("#householdBillRows .household-bill-row")
    .forEach((row) => {
      const idx = row.getAttribute("data-idx");
      const itemType =
        document.getElementById(`f_h_type_${idx}`)?.value || "Other";
      const itemName =
        document.getElementById(`f_h_item_${idx}`)?.value?.trim() || "";
      const qty =
        parseFloat(document.getElementById(`f_h_qty_${idx}`)?.value) || 0;
      const rate =
        parseFloat(document.getElementById(`f_h_rate_${idx}`)?.value) || 0;
      out.push({
        itemType,
        itemName,
        quantity: qty,
        rate,
        lineTotal: parseFloat((qty * rate).toFixed(2)),
      });
    });
  return out;
}

function householdBillSummaryHtml(r) {
  if (r.items && r.items.length) {
    const parts = r.items
      .filter((i) => (i.lineTotal || 0) > 0)
      .map(
        (i) =>
          `${escapeHtml(i.itemName || "—")} (${i.quantity ?? 0}×₹${fmt(i.rate)})`,
      );
    if (!parts.length) return "—";
    const short = parts.slice(0, 2).join("<br>");
    return parts.length > 2
      ? short +
          `<br><small style="color:var(--text-3)">+${parts.length - 2} more</small>`
      : short;
  }
  return escapeHtml(String(r.category || "—"));
}

function householdMatchesSearch(r, qLower) {
  if (!qLower) return true;
  const notes = (r.notes || "").toLowerCase(),
    cats = (r.category || "").toLowerCase();
  const itemBlob =
    (r.items || [])
      .map((i) => `${i.itemType || ""} ${i.itemName || ""}`)
      .join(" ")
      .toLowerCase() || "";
  return (
    notes.includes(qLower) || cats.includes(qLower) || itemBlob.includes(qLower)
  );
}

// ============================================================
//  AGRICULTURE FORM INTERACTIONS
// ============================================================

function selectAgriType(type) {
  const typeInput = document.getElementById("f_type");
  if (typeInput) typeInput.value = type;

  const incomeCard = document.getElementById("agriTypeIncome");
  const expenseCard = document.getElementById("agriTypeExpense");

  if (incomeCard) {
    if (type === "Income") {
      incomeCard.classList.add("selected-income");
    } else {
      incomeCard.classList.remove("selected-income");
    }
  }
  if (expenseCard) {
    if (type === "Expense") {
      expenseCard.classList.add("selected-expense");
    } else {
      expenseCard.classList.remove("selected-expense");
    }
  }

  // Update insight panel
  if (typeof updateAgriInsightPanel === "function") {
    updateAgriInsightPanel();
  }
}
function selectCrop(crop) {
  document.getElementById("f_crop").value = crop;
  document.querySelectorAll(".crop-chip").forEach((chip) => {
    chip.classList.remove("selected");
    if (chip.getAttribute("data-crop") === crop) chip.classList.add("selected");
  });
}

function selectSeason(season) {
  document.getElementById("f_season").value = season;
  document.querySelectorAll(".season-chip").forEach((chip) => {
    chip.classList.remove("selected");
    if (chip.getAttribute("data-season") === season)
      chip.classList.add("selected");
  });
}

function calculateAgriTotal() {
  const q = parseFloat(document.getElementById("f_quantity")?.value) || 0,
    a = parseFloat(document.getElementById("f_amount")?.value) || 0;
  const rate = q > 0 ? (a / q).toFixed(2) : 0;
  const hint = document.getElementById("rateHint");
  if (hint) hint.innerHTML = `Rate per kg: ₹${rate}`;
  updateAgriInsight();
}
function calculateAgriRate() {
  const q = parseFloat(document.getElementById("f_quantity")?.value) || 0,
    a = parseFloat(document.getElementById("f_amount")?.value) || 0;
  const rate = q > 0 ? (a / q).toFixed(2) : 0;
  const hint = document.getElementById("rateHint");
  if (hint) hint.innerHTML = `Rate per kg: ₹${rate}`;
  updateAgriInsight();
}

function updateAgriInsight() {
  const type = document.getElementById("f_type")?.value,
    quantity = parseFloat(document.getElementById("f_quantity")?.value) || 0,
    amount = parseFloat(document.getElementById("f_amount")?.value) || 0,
    crop = document.getElementById("f_crop")?.value;
  const insightDiv = document.getElementById("agriInsight"),
    insightMessage = document.getElementById("insightMessage");
  if (!insightDiv || !insightMessage) return;
  if (quantity > 0 && amount > 0) {
    const rate = (amount / quantity).toFixed(2);
    insightDiv.style.display = "flex";
    if (type === "Income") {
      insightMessage.innerHTML = `💰 You will earn ₹${amount.toFixed(2)} from selling ${quantity} kg of ${crop} (₹${rate}/kg)`;
      insightDiv.style.borderLeftColor = "var(--green)";
    } else {
      insightMessage.innerHTML = `💸 You spent ₹${amount.toFixed(2)} on ${crop} (${quantity} kg at ₹${rate}/kg)`;
      insightDiv.style.borderLeftColor = "var(--red)";
    }
  } else if (quantity > 0 && amount === 0) {
    insightDiv.style.display = "flex";
    insightMessage.innerHTML = `⚖️ Enter amount to calculate rate per kg`;
    insightDiv.style.borderLeftColor = "var(--amber)";
  } else if (amount > 0 && quantity === 0) {
    insightDiv.style.display = "flex";
    insightMessage.innerHTML = `📦 Enter quantity to calculate rate per kg`;
    insightDiv.style.borderLeftColor = "var(--amber)";
  } else {
    insightDiv.style.display = "none";
  }
}

// ============================================================
//  LABOUR FORM INTERACTIONS
// ============================================================

function calcLabourTotal() {
  const days = parseFloat(document.getElementById("f_days")?.value) || 0;
  const wage = parseFloat(document.getElementById("f_wage")?.value) || 0;
  const total = days * wage;
  const amountField = document.getElementById("f_amount");
  if (amountField) amountField.value = total.toFixed(2);
  const display = document.getElementById("labourTotalDisplay");
  if (display) display.innerHTML = "₹" + total.toLocaleString("en-IN");
  return total;
}

// REPLACE this entire function
function selectLabourGender(gender) {
  document.getElementById("f_gender").value = gender;

  const maleOption = document.querySelector('.gender-option[onclick*="Male"]');
  const femaleOption = document.querySelector(
    '.gender-option[onclick*="Female"]',
  );

  if (gender === "Male") {
    if (maleOption) maleOption.classList.add("selected-male");
    if (femaleOption) femaleOption.classList.remove("selected-female");
  } else {
    if (femaleOption) femaleOption.classList.add("selected-female");
    if (maleOption) maleOption.classList.remove("selected-male");
  }
}

// REPLACE this entire function
function calcLabourTotal() {
  const days = parseFloat(document.getElementById("f_days")?.value) || 0;
  const wage = parseFloat(document.getElementById("f_wage")?.value) || 0;
  const total = days * wage;
  const amountField = document.getElementById("f_amount");
  if (amountField) amountField.value = total.toFixed(2);
  const display = document.getElementById("labourTotalDisplay");
  if (display) display.innerHTML = "₹" + total.toLocaleString("en-IN");
  return total;
}

// REPLACE this entire function
function selectTask(task) {
  document.getElementById("f_task").value = task;
  document.querySelectorAll(".task-btn").forEach((btn) => {
    btn.classList.remove("active");
    if (btn.getAttribute("data-task") === task || btn.innerText.includes(task))
      btn.classList.add("active");
  });
}

// REPLACE this entire function
function adjustDays(change) {
  const input = document.getElementById("f_days");
  let val = parseFloat(input.value) || 0;
  val = Math.max(0.5, val + change);
  input.value = val;
  calcLabourTotal();
}

// REPLACE this entire function
function setWage(amount) {
  document.getElementById("f_wage").value = amount;
  calcLabourTotal();
}

// REPLACE this entire function
function setLabourDate(type) {
  const today = new Date();
  let target = new Date(today);
  if (type === "yesterday") target.setDate(today.getDate() - 1);
  const bs = adToBS(target);
  document.getElementById("f_bsy").value = bs.y;
  document.getElementById("f_bsm").value = bs.m;
  updateDayOptions();
  setTimeout(() => {
    document.getElementById("f_bsd").value = bs.d;
  }, 50);
}

function selectTask(task) {
  document.getElementById("f_task").value = task;
  document.querySelectorAll(".task-btn").forEach((btn) => {
    btn.classList.remove("active");
    if (btn.getAttribute("data-task") === task || btn.innerText.includes(task))
      btn.classList.add("active");
  });
}

function adjustDays(change) {
  const input = document.getElementById("f_days");
  let val = parseFloat(input.value) || 0;
  val = Math.max(0.5, val + change);
  input.value = val;
  calcLabourTotal();
}
function setWage(amount) {
  document.getElementById("f_wage").value = amount;
  calcLabourTotal();
}

function setLabourDate(type) {
  const today = new Date();
  let target = new Date(today);
  if (type === "yesterday") target.setDate(today.getDate() - 1);
  const bs = adToBS(target);
  document.getElementById("f_bsy").value = bs.y;
  document.getElementById("f_bsm").value = bs.m;
  updateDayOptions();
  setTimeout(() => {
    document.getElementById("f_bsd").value = bs.d;
  }, 50);
}

// ============================================================
//  VEHICLE FORM INTERACTIONS
// ============================================================

function selectVehicle(vehicle) {
  document.getElementById("f_vehicle").value = vehicle;
  document.querySelectorAll(".vehicle-option").forEach((opt) => {
    opt.classList.remove("selected");
    if (opt.innerText.includes(vehicle)) opt.classList.add("selected");
  });
}

function selectCategory(category) {
  document.getElementById("f_category").value = category;
  document.querySelectorAll(".category-option").forEach((opt) => {
    opt.classList.remove(
      "selected-fuel",
      "selected-maintenance",
      "selected-repair",
      "selected-insurance",
      "selected-other",
    );
    if (opt.innerText.includes(category))
      opt.classList.add(`selected-${category.toLowerCase()}`);
  });
}

function setVehicleAmount(amount) {
  document.getElementById("f_amount").value = amount;
}

function toggleMemberInput(sel) {
  const wrap = document.getElementById("memberInputWrap");
  if (wrap) wrap.style.display = sel.value === "Other" ? "block" : "none";
}
function selectGender(g) {
  document.getElementById("f_gender").value = g;
  document.getElementById("genderMale").className =
    "gender-card" + (g === "Male" ? " selected-male" : "");
  document.getElementById("genderFemale").className =
    "gender-card" + (g === "Female" ? " selected-female" : "");
}

// ============================================================
//  BUILD FORM - COMPLETE
// ============================================================

function buildForm(module, r) {
  const bsY = fv(r, "bsY", todayBS().y),
    bsM = fv(r, "bsM", todayBS().m),
    bsD = fv(r, "bsD", todayBS().d);

  if (module === "household") {
    const billRows = householdItemsForForm(r)
      .map((row, idx) => renderHouseholdBillRowHtml(String(idx), row))
      .join("");
    return `${bsDatePicker(bsY, bsM, bsD)}<div class="form-row full"><div class="form-group"><label>📋 Bill Items (add each item from receipt)</label><p style="font-size:0.7rem;color:var(--text-3);margin:0 0 8px 0;">Fill quantity and rate for each item - total auto-calculates below</p><div id="householdBillRows">${billRows}</div><button type="button" class="btn-outline btn-sm" style="margin-top:10px;width:100%" onclick="householdBillAddRow()">+ Add another item</button></div></div><div class="form-row full"><div class="form-group" style="background:var(--green-light);padding:12px;border-radius:var(--radius-sm);border:1px solid var(--green);margin-top:8px"><label style="font-size:0.85rem;color:var(--green);font-weight:700">💰 TOTAL BILL AMOUNT (₹)</label><input type="number" id="f_h_billTotal" value="0" min="0" step="0.01" readonly style="background:white;font-weight:700;font-size:1.3rem;padding:12px;text-align:center;color:var(--green);border:1px solid var(--green)" /></div></div><div class="form-row full"><div class="form-group"><label>📝 Notes (optional)</label><textarea id="f_notes" placeholder="Any additional notes..." style="min-height:50px">${fv(r, "notes")}</textarea></div></div>`;
  }

  if (module === "income") {
    return `${bsDatePicker(bsY, bsM, bsD)}<div class="form-row"><div class="form-group"><label>Source / स्रोत <span class="required-star">*</span></label><select id="f_source">${["Salary", "Business", "Agriculture", "Livestock", "Rental", "Remittance", "Government Aid", "Other"].map((s) => `<option ${fv(r, "source") === s ? "selected" : ""}>${s}</option>`).join("")}</select></div><div class="form-group"><label>Amount (₹)<span class="required-star">*</span></label><input type="number" id="f_amount" value="${fv(r, "amount", 0)}" min="0" step="0.01" /></div></div><div class="form-row"><div class="form-group"><label>Family Member</label><select id="f_member" onchange="toggleMemberInput(this)">${memberOptions(fv(r, "member"))}</select></div><div class="form-group" id="memberInputWrap" style="${fv(r, "member") === "Other" ? "" : "display:none"}"><label>Member Name</label><input type="text" id="f_memberName" value="${fv(r, "memberName")}" placeholder="Enter name" /></div></div><div class="form-row full"><div class="form-group"><label>Notes</label><textarea id="f_notes">${fv(r, "notes")}</textarea></div></div>`;
  }
  if (module === "agriculture") {
    return `
        <div class="agri-form-container">
            <!-- Date Section -->
            <div class="form-section">
                <div class="form-section-title">
                    <span class="section-icon">📅</span>
                    <span>Date Information</span>
                </div>
                <div class="date-picker-grid">
                    <div class="input-group-modern">
                        <label>BS Year</label>
                        <select id="f_bsy" onchange="updateDayOptions()" class="modern-select">
                            ${(() => {
                              const curY = currentBSYear();
                              let opts = "";
                              for (let y = curY + 2; y >= 2070; y--) {
                                opts += `<option value="${y}" ${y === (bsY || curY) ? "selected" : ""}>${y}</option>`;
                              }
                              return opts;
                            })()}
                        </select>
                    </div>
                    <div class="input-group-modern">
                        <label>BS Month</label>
                        <select id="f_bsm" onchange="updateDayOptions()" class="modern-select">
                            ${BS_MONTH_NAMES_NP.map((name, i) => {
                              const monthNum = i + 1;
                              return `<option value="${monthNum}" ${monthNum === (bsM || todayBS().m) ? "selected" : ""}>${name} (${monthNum})</option>`;
                            }).join("")}
                        </select>
                    </div>
                    <div class="input-group-modern">
                        <label>BS Day</label>
                        <select id="f_bsd" class="modern-select">
                            ${(() => {
                              const days =
                                BS_DATA[bsY || currentBSYear()]?.[
                                  (bsM || todayBS().m) - 1
                                ] || 30;
                              let opts = "";
                              for (let d = 1; d <= days; d++) {
                                opts += `<option value="${d}" ${d === (bsD || todayBS().d) ? "selected" : ""}>${d}</option>`;
                              }
                              return opts;
                            })()}
                        </select>
                    </div>
                    <div class="input-group-modern">
                        <label>Quick Date</label>
                        <div class="quick-date-btns">
                            <button type="button" class="quick-date-btn" onclick="setTodayDate()">Today</button>
                            <button type="button" class="quick-date-btn" onclick="setYesterdayDate()">Yesterday</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Transaction Type Section -->
            <div class="form-section">
                <div class="form-section-title">
                    <span class="section-icon">📋</span>
                    <span>Transaction Type</span>
                </div>
                <div class="type-selector-agri">
                    <div class="type-card-agri ${fv(r, "type") === "Income" ? "selected-income" : ""}" id="agriTypeIncome" onclick="selectAgriType('Income')">
                        <div class="type-icon">💰</div>
                        <div class="type-name">Income</div>
                        <div class="type-desc">Money received from crop sales</div>
                        <span class="type-check">✓</span>
                    </div>
                    <div class="type-card-agri ${fv(r, "type") === "Expense" ? "selected-expense" : ""}" id="agriTypeExpense" onclick="selectAgriType('Expense')">
                        <div class="type-icon">💸</div>
                        <div class="type-name">Expense</div>
                        <div class="type-desc">Costs for seeds, fertilizer, labour</div>
                        <span class="type-check">✓</span>
                    </div>
                </div>
                <input type="hidden" id="f_type" value="${fv(r, "type", "Income")}">
            </div>

            <!-- Crop Section -->
            <div class="form-section">
                <div class="form-section-title">
                    <span class="section-icon">🌱</span>
                    <span>Crop / बाली</span>
                </div>
                <div class="crop-selector-agri">
                    ${[
                      "Rice",
                      "Wheat",
                      "Maize",
                      "Jaighas",
                      "Vegetables",
                      "Other",
                    ]
                      .map(
                        (crop) => `
                        <div class="crop-chip-agri ${fv(r, "crop") === crop ? "selected" : ""}" data-crop="${crop}" onclick="selectCrop('${crop}')">
                            ${crop === "Rice" ? "🍚" : crop === "Wheat" ? "🌾" : crop === "Maize" ? "🌽" : crop === "Vegetables" ? "🥬" : crop === "Jaighas" ? "🌿" : "📦"} ${crop}
                        </div>
                    `,
                      )
                      .join("")}
                </div>
                <input type="hidden" id="f_crop" value="${fv(r, "crop", "Rice")}">
            </div>

            <!-- Season Section -->
            <div class="form-section">
                <div class="form-section-title">
                    <span class="section-icon">🌤️</span>
                    <span>Season / मौसम</span>
                </div>
                <div class="season-selector-agri">
                    ${[
                      "Kharif (Monsoon)",
                      "Rabi (Winter)",
                      "Zaid (Summer)",
                      "Year-round",
                    ]
                      .map(
                        (season) => `
                        <div class="season-chip-agri ${fv(r, "season") === season ? "selected" : ""}" data-season="${season}" onclick="selectSeason('${season}')">
                            ${season === "Kharif (Monsoon)" ? "☔" : season === "Rabi (Winter)" ? "❄️" : season === "Zaid (Summer)" ? "☀️" : "🔄"} ${season}
                        </div>
                    `,
                      )
                      .join("")}
                </div>
                <input type="hidden" id="f_season" value="${fv(r, "season", "Kharif (Monsoon)")}">
            </div>

            <!-- Quantity, Rate, Amount Section -->
            <div class="form-section">
                <div class="form-section-title">
                    <span class="section-icon">⚖️</span>
                    <span>Quantity & Amount Details</span>
                </div>
                
                <!-- Quantity Input -->
                <div class="agri-field-group">
                    <label class="agri-field-label">Quantity (kg)</label>
                    <div class="agri-input-wrapper">
                        <input type="number" id="f_quantity" class="agri-number-input" value="${fv(r, "quantity", 0)}" min="0" step="0.1" placeholder="Enter quantity" oninput="calculateAgriFromQuantity()">
                        <span class="agri-unit">kg</span>
                    </div>
                </div>

                <!-- Rate per kg Input -->
                <div class="agri-field-group">
                    <label class="agri-field-label">Rate per kg (₹)</label>
                    <div class="agri-input-wrapper">
                        <span class="agri-currency">₹</span>
                        <input type="number" id="f_rate" class="agri-number-input" value="${fv(r, "rate", 0)}" min="0" step="0.01" placeholder="Enter rate" oninput="calculateAgriFromRate()">
                    </div>
                </div>

                <!-- Total Amount (Auto-calculated) -->
                <div class="agri-field-group highlight">
                    <label class="agri-field-label">💰 Total Amount (₹)</label>
                    <div class="agri-input-wrapper">
                        <span class="agri-currency">₹</span>
                        <input type="number" id="f_amount" class="agri-total-input" value="${fv(r, "amount", 0)}" readonly style="background: var(--green-light); font-weight: 700; color: var(--green);">
                    </div>
                    <div class="agri-field-hint">Auto-calculated from Quantity × Rate</div>
                </div>

                <!-- Quick Amount Presets -->
                <div class="agri-presets">
                    <span class="agri-preset-label">Quick presets:</span>
                    <button type="button" class="agri-preset-btn" onclick="setAgriAmount(500)">₹500</button>
                    <button type="button" class="agri-preset-btn" onclick="setAgriAmount(1000)">₹1,000</button>
                    <button type="button" class="agri-preset-btn" onclick="setAgriAmount(5000)">₹5,000</button>
                    <button type="button" class="agri-preset-btn" onclick="setAgriAmount(10000)">₹10,000</button>
                    <button type="button" class="agri-preset-btn" onclick="setAgriAmount(25000)">₹25,000</button>
                </div>
            </div>

            <!-- Insight Panel -->
            <div class="agri-insight-panel" id="agriInsightPanel" style="display: ${fv(r, "quantity", 0) > 0 && fv(r, "amount", 0) > 0 ? "flex" : "none"}">
                <div class="insight-icon">📊</div>
                <div class="insight-text" id="agriInsightMessage">
                    ${
                      fv(r, "quantity", 0) > 0 && fv(r, "amount", 0) > 0
                        ? fv(r, "type") === "Income"
                          ? `💰 You will earn ₹${fv(r, "amount", 0)} from selling ${fv(r, "quantity", 0)} kg at ₹${(fv(r, "amount", 0) / fv(r, "quantity", 0)).toFixed(2)}/kg`
                          : `💸 You spent ₹${fv(r, "amount", 0)} on ${fv(r, "quantity", 0)} kg at ₹${(fv(r, "amount", 0) / fv(r, "quantity", 0)).toFixed(2)}/kg`
                        : "Add quantity and amount to see insights"
                    }
                </div>
            </div>

            <!-- Notes Section -->
            <div class="form-section">
                <div class="form-section-title">
                    <span class="section-icon">📝</span>
                    <span>Notes / Remarks</span>
                </div>
                <textarea id="f_notes" class="agri-textarea" placeholder="e.g., Sold to market, Used organic fertilizer, etc...">${fv(r, "notes")}</textarea>
            </div>
        </div>
    `;
  }
  if (module === "livestock") {
    const animalOptions = `
        <option value="Red Cow" ${fv(r, "animal") === "Red Cow" ? "selected" : ""}>🔴 Red Cow</option>
        <option value="Black Cow" ${fv(r, "animal") === "Black Cow" ? "selected" : ""}>⚫ Black Cow</option>
        <option value="Buffalo" ${fv(r, "animal") === "Buffalo" ? "selected" : ""}>🐃 Buffalo</option>
        <option value="Chicken" ${fv(r, "animal") === "Chicken" ? "selected" : ""}>🐔 Chicken (4)</option>
    `;

    const isMilkRecord = fv(r, "type") === "Milk Production";

    if (isMilkRecord) {
      const morningQty = fv(r, "morningQuantity", 0);
      const eveningQty = fv(r, "eveningQuantity", 0);
      const totalQty = morningQty + eveningQty || fv(r, "quantity", 0);

      return `
            <div class="livestock-form-container">
                <div class="form-section">
                    <div class="form-section-title">
                        <span class="section-icon">🥛</span>
                        <span>दुध उत्पादन (Milk Production)</span>
                    </div>
                    ${bsDatePicker(bsY, bsM, bsD)}
                    <div class="form-row">
                        <div class="form-group">
                            <label>Animal <span class="required-star">*</span></label>
                            <select id="f_animal" class="modern-select">${animalOptions}</select>
                        </div>
                    </div>
                    <div class="form-row two-col">
                        <div class="form-group">
                            <label>🌅 बिहान (Morning) Liters</label>
                            <input type="number" id="f_morning_qty" class="modern-input" value="${morningQty}" min="0" step="0.5" oninput="calculateTotalMilk()" placeholder="0">
                        </div>
                        <div class="form-group">
                            <label>🌙 साँझ (Evening) Liters</label>
                            <input type="number" id="f_evening_qty" class="modern-input" value="${eveningQty}" min="0" step="0.5" oninput="calculateTotalMilk()" placeholder="0">
                        </div>
                    </div>
                    <div class="total-milk-display">
                        <span>📊 जम्मा (Total): </span>
                        <strong id="totalMilkDisplay">${totalQty} L</strong>
                    </div>
                    <input type="hidden" id="f_quantity" value="${totalQty}">
                    <input type="hidden" id="f_type" value="Milk Production">
                    <input type="hidden" id="f_amount" value="0">
                    <div class="form-group">
                        <label>📝 Notes</label>
                        <textarea id="f_notes" class="modern-textarea">${fv(r, "notes")}</textarea>
                    </div>
                </div>
            </div>
        `;
    } else {
      return `
            <div class="livestock-form-container">
                <div class="form-section">
                    <div class="form-section-title">
                        <span class="section-icon">💰</span>
                        <span>खर्च (Expense)</span>
                    </div>
                    ${bsDatePicker(bsY, bsM, bsD)}
                    <div class="form-row two-col">
                        <div class="form-group">
                            <label>Animal <span class="required-star">*</span></label>
                            <select id="f_animal" class="modern-select">${animalOptions}</select>
                        </div>
                        <div class="form-group">
                            <label>Type</label>
                            <select id="f_type" class="modern-select">
                                <option value="दाना" ${fv(r, "type") === "दाना" ? "selected" : ""}>🌾 दाना (Grain)</option>
                                <option value="चोकर" ${fv(r, "type") === "चोकर" ? "selected" : ""}>🌽 चोकर (Feed)</option>
                                <option value="मकै" ${fv(r, "type") === "मकै" ? "selected" : ""}>🌽 मकै (Corn)</option>
                                <option value="औषधि" ${fv(r, "type") === "औषधि" ? "selected" : ""}>💊 औषधि (Medicine)</option>
                                <option value="पशु चिकित्सक" ${fv(r, "type") === "पशु चिकित्सक" ? "selected" : ""}>🩺 पशु चिकित्सक (Vet)</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-row two-col">
                        <div class="form-group">
                            <label>Quantity (kg/liters)</label>
                            <input type="number" id="f_quantity" class="modern-input" value="${fv(r, "quantity", 0)}" min="0" step="0.5" placeholder="Enter quantity">
                        </div>
                        <div class="form-group">
                            <label>Amount (₹) <span class="required-star">*</span></label>
                            <input type="number" id="f_amount" class="modern-input" value="${fv(r, "amount", 0)}" min="0" step="10" placeholder="Enter amount">
                        </div>
                    </div>
                    <div class="form-group">
                        <label>📝 Notes</label>
                        <textarea id="f_notes" class="modern-textarea">${fv(r, "notes")}</textarea>
                    </div>
                </div>
            </div>
        `;
    }
  }
  if (module === "labour") {
    const initDays = parseFloat(fv(r, "days", 1)),
      initWage = parseFloat(fv(r, "wage", 400)),
      initTotal = initDays * initWage;
    return `<div class="labour-form-container"><div class="form-card"><div class="form-card-title">📅 Date Information</div>${bsDatePicker(bsY, bsM, bsD)}<div class="date-shortcuts"><button type="button" class="date-shortcut" onclick="setLabourDate('today')">Today</button><button type="button" class="date-shortcut" onclick="setLabourDate('yesterday')">Yesterday</button></div></div><div class="form-card"><div class="form-card-title">👤 Gender</div><div class="gender-options"><div class="gender-option ${fv(r, "gender", "Male") === "Male" ? "selected-male" : ""}" onclick="selectLabourGender('Male')"><span class="gender-icon">👨</span><span class="gender-name">Male</span><span class="gender-check">✓</span></div><div class="gender-option ${fv(r, "gender") === "Female" ? "selected-female" : ""}" onclick="selectLabourGender('Female')"><span class="gender-icon">👩</span><span class="gender-name">Female</span><span class="gender-check">✓</span></div></div><input type="hidden" id="f_gender" value="${fv(r, "gender", "Male")}" /></div><div class="form-card"><div class="form-card-title">👷 Worker Details</div><input type="text" id="f_name" class="worker-input" value="${fv(r, "name")}" placeholder="Full name of worker" /></div><div class="form-card"><div class="form-card-title">🌾 Task Type</div><div class="task-grid"><button type="button" class="task-btn ${fv(r, "task") === "Grass Cutting" ? "active" : ""}" data-task="Grass Cutting" onclick="selectTask('Grass Cutting')">🌿 Grass Cutting</button><button type="button" class="task-btn ${fv(r, "task") === "Ploughing" ? "active" : ""}" data-task="Ploughing" onclick="selectTask('Ploughing')">🚜 Ploughing</button><button type="button" class="task-btn ${fv(r, "task") === "Harvesting" ? "active" : ""}" data-task="Harvesting" onclick="selectTask('Harvesting')">🌾 Harvesting</button><button type="button" class="task-btn ${fv(r, "task") === "Planting" ? "active" : ""}" data-task="Planting" onclick="selectTask('Planting')">🌱 Planting</button><button type="button" class="task-btn ${fv(r, "task") === "Weeding" ? "active" : ""}" data-task="Weeding" onclick="selectTask('Weeding')">🌿 Weeding</button><button type="button" class="task-btn ${fv(r, "task") === "Other" ? "active" : ""}" data-task="Other" onclick="selectTask('Other')">🔧 Other</button></div><input type="hidden" id="f_task" value="${fv(r, "task", "Grass Cutting")}" /></div><div class="form-card"><div class="form-card-title">💰 Payment Calculation</div><div class="payment-row"><div class="payment-field"><label>Days Worked</label><div class="number-input-group"><button type="button" class="num-btn" onclick="adjustDays(-0.5)">−</button><input type="number" id="f_days" value="${initDays}" step="0.5" oninput="calcLabourTotal()" /><button type="button" class="num-btn" onclick="adjustDays(0.5)">+</button></div></div><div class="payment-field"><label>Wage per Day (₹)</label><div class="wage-input-group"><input type="number" id="f_wage" value="${initWage}" step="50" oninput="calcLabourTotal()" /><div class="wage-presets"><span onclick="setWage(300)">300</span><span onclick="setWage(400)">400</span><span onclick="setWage(500)">500</span><span onclick="setWage(600)">600</span></div></div></div></div></div><div class="total-card"><div class="total-label">TOTAL PAYMENT</div><div class="total-amount" id="labourTotalDisplay">₹${initTotal.toLocaleString("en-IN")}</div><input type="hidden" id="f_amount" value="${initTotal.toFixed(2)}" /></div><details class="notes-collapsible"><summary>📝 Add Notes</summary><textarea id="f_notes" placeholder="Any additional information..." rows="2">${fv(r, "notes")}</textarea></details></div>`;
  }

  if (module === "vehicle") {
    return `<div class="vehicle-form-container">${bsDatePicker(bsY, bsM, bsD)}<div class="form-row full"><label class="form-label-main">🚗 Vehicle</label><div class="vehicle-selector"><div class="vehicle-option ${fv(r, "vehicle") === "Tractor" ? "selected" : ""}" onclick="selectVehicle('Tractor')"><span class="vehicle-icon">🚜</span><span class="vehicle-name">Tractor</span></div><div class="vehicle-option ${fv(r, "vehicle") === "Bike" ? "selected" : ""}" onclick="selectVehicle('Bike')"><span class="vehicle-icon">🏍️</span><span class="vehicle-name">Bike</span></div><div class="vehicle-option ${fv(r, "vehicle") === "Scooter" ? "selected" : ""}" onclick="selectVehicle('Scooter')"><span class="vehicle-icon">🛵</span><span class="vehicle-name">Scooter</span></div><div class="vehicle-option ${fv(r, "vehicle") === "Other" ? "selected" : ""}" onclick="selectVehicle('Other')"><span class="vehicle-icon">🚗</span><span class="vehicle-name">Other</span></div></div><input type="hidden" id="f_vehicle" value="${fv(r, "vehicle", "Tractor")}" /></div><div class="form-row full"><label class="form-label-main">📋 Category</label><div class="category-selector"><div class="category-option ${fv(r, "category") === "Fuel" ? "selected-fuel" : ""}" onclick="selectCategory('Fuel')">⛽ Fuel</div><div class="category-option ${fv(r, "category") === "Maintenance" ? "selected-maintenance" : ""}" onclick="selectCategory('Maintenance')">🔧 Maintenance</div><div class="category-option ${fv(r, "category") === "Repair" ? "selected-repair" : ""}" onclick="selectCategory('Repair')">🔨 Repair</div><div class="category-option ${fv(r, "category") === "Insurance" ? "selected-insurance" : ""}" onclick="selectCategory('Insurance')">📄 Insurance</div><div class="category-option ${fv(r, "category") === "Other" ? "selected-other" : ""}" onclick="selectCategory('Other')">📦 Other</div></div><input type="hidden" id="f_category" value="${fv(r, "category", "Fuel")}" /></div><div class="form-row full"><label class="form-label-main">💰 Amount (₹)</label><input type="number" id="f_amount" value="${fv(r, "amount", 0)}" min="0" step="10" placeholder="Enter amount" /><div class="amount-presets"><span onclick="setVehicleAmount(500)">₹500</span><span onclick="setVehicleAmount(1000)">₹1000</span><span onclick="setVehicleAmount(1500)">₹1500</span><span onclick="setVehicleAmount(2000)">₹2000</span><span onclick="setVehicleAmount(3000)">₹3000</span></div></div><div class="form-row full"><label class="form-label-main">📝 Notes</label><textarea id="f_notes" placeholder="e.g., Diesel 20L, Oil change, etc..." style="min-height:60px;">${fv(r, "notes")}</textarea></div></div>`;
  }

  if (module === "medical") {
    return `${bsDatePicker(bsY, bsM, bsD)}<div class="form-row"><div class="form-group"><label>Family Member</label><select id="f_member" onchange="toggleMemberInput(this)">${memberOptions(fv(r, "member"))}</select></div><div class="form-group" id="memberInputWrap" style="${fv(r, "member") === "Other" ? "" : "display:none"}"><label>Member Name</label><input type="text" id="f_memberName" value="${fv(r, "memberName")}" placeholder="Enter name" /></div></div><div class="form-row"><div class="form-group"><label>Type</label><select id="f_type">${["Doctor Visit", "Medicine", "Lab Test", "Hospital", "Surgery", "Other"].map((t) => `<option ${fv(r, "type") === t ? "selected" : ""}>${t}</option>`).join("")}</select></div><div class="form-group"><label>Amount (₹)</label><input type="number" id="f_amount" value="${fv(r, "amount", 0)}" min="0" step="0.01" /></div></div><div class="form-row full"><div class="form-group"><label>Doctor / Hospital</label><input type="text" id="f_doctor" value="${fv(r, "doctor")}" placeholder="e.g. Dr. Sharma" /></div></div><div class="form-row full"><div class="form-group"><label>Notes / Diagnosis</label><textarea id="f_notes">${fv(r, "notes")}</textarea></div></div>`;
  }

  if (module === "family") {
    return `<div class="form-row"><div class="form-group"><label>Full Name</label><input type="text" id="f_name" value="${fv(r, "name")}" placeholder="e.g. Ram Prasad Sharma" /></div><div class="form-group"><label>Relation</label><select id="f_relation">${["Father", "Mother", "Son", "Daughter", "Brother", "Sister", "Grandfather", "Grandmother", "Husband", "Wife", "Other"].map((rel) => `<option ${fv(r, "relation") === rel ? "selected" : ""}>${rel}</option>`).join("")}</select></div></div><div class="form-row"><div class="form-group"><label>Gender</label><select id="f_gender"><option ${fv(r, "gender") === "Male" ? "selected" : ""}>Male</option><option ${fv(r, "gender") === "Female" ? "selected" : ""}>Female</option><option ${fv(r, "gender") === "Other" ? "selected" : ""}>Other</option></select></div><div class="form-group"><label>Age</label><input type="number" id="f_age" value="${fv(r, "age")}" min="0" max="120" /></div></div><div class="form-row"><div class="form-group"><label>Phone Number</label><input type="tel" id="f_phone" value="${fv(r, "phone")}" placeholder="e.g. 9800000000" /></div></div><div class="form-row full"><div class="form-group"><label>Notes</label><textarea id="f_notes">${fv(r, "notes")}</textarea></div></div>`;
  }

  return "<p>Unknown module</p>";
}

// ============================================================
//  AGRICULTURE FORM - AUTO-CALCULATION FUNCTIONS (ADD THIS)
// ============================================================

function calculateAgriFromQuantity() {
  const quantity =
    parseFloat(document.getElementById("f_quantity")?.value) || 0;
  const rate = parseFloat(document.getElementById("f_rate")?.value) || 0;
  const amount = quantity * rate;

  const amountField = document.getElementById("f_amount");
  if (amountField) amountField.value = amount.toFixed(2);

  updateAgriInsightPanel();
}

function calculateAgriFromRate() {
  const quantity =
    parseFloat(document.getElementById("f_quantity")?.value) || 0;
  const rate = parseFloat(document.getElementById("f_rate")?.value) || 0;
  const amount = quantity * rate;

  const amountField = document.getElementById("f_amount");
  if (amountField) amountField.value = amount.toFixed(2);

  updateAgriInsightPanel();
}

function setAgriAmount(amount) {
  const quantity =
    parseFloat(document.getElementById("f_quantity")?.value) || 0;
  const amountField = document.getElementById("f_amount");
  if (amountField) amountField.value = amount;

  if (quantity > 0) {
    const rate = amount / quantity;
    const rateField = document.getElementById("f_rate");
    if (rateField) rateField.value = rate.toFixed(2);
  }

  updateAgriInsightPanel();
}

function updateAgriInsightPanel() {
  const type = document.getElementById("f_type")?.value;
  const quantity =
    parseFloat(document.getElementById("f_quantity")?.value) || 0;
  const amount = parseFloat(document.getElementById("f_amount")?.value) || 0;
  const crop = document.getElementById("f_crop")?.value;
  const insightPanel = document.getElementById("agriInsightPanel");
  const insightMessage = document.getElementById("agriInsightMessage");

  if (!insightPanel || !insightMessage) return;

  if (quantity > 0 && amount > 0) {
    const rate = (amount / quantity).toFixed(2);
    insightPanel.style.display = "flex";
    if (type === "Income") {
      insightMessage.innerHTML = `💰 You will earn ₹${amount.toFixed(2)} from selling ${quantity} kg of ${crop} (₹${rate}/kg)`;
      insightPanel.style.borderLeftColor = "var(--green)";
    } else {
      insightMessage.innerHTML = `💸 You spent ₹${amount.toFixed(2)} on ${crop} (${quantity} kg at ₹${rate}/kg)`;
      insightPanel.style.borderLeftColor = "var(--red)";
    }
  } else if (quantity > 0 && amount === 0) {
    insightPanel.style.display = "flex";
    insightMessage.innerHTML = `⚖️ Enter amount to calculate rate per kg`;
    insightPanel.style.borderLeftColor = "var(--amber)";
  } else if (amount > 0 && quantity === 0) {
    insightPanel.style.display = "flex";
    insightMessage.innerHTML = `📦 Enter quantity to calculate rate per kg`;
    insightPanel.style.borderLeftColor = "var(--amber)";
  } else {
    insightPanel.style.display = "none";
  }
}

// Make functions available globally
window.calculateAgriFromQuantity = calculateAgriFromQuantity;
window.calculateAgriFromRate = calculateAgriFromRate;
window.setAgriAmount = setAgriAmount;
window.updateAgriInsightPanel = updateAgriInsightPanel;

// ============================================================
//  SAVE & DELETE RECORDS
// ============================================================

function saveRecord() {
  const module = editingMod;
  if (!module) {
    showToast("Error: No module selected", "error");
    return;
  }

  // ========== VALIDATION ==========
  let isValid = false;

  switch (module) {
    case "household":
      isValid = validateHousehold();
      break;
    case "income":
      isValid = validateIncome();
      break;
    case "agriculture":
      isValid = validateAgriculture();
      break;
    case "livestock":
      isValid = validateLivestock();
      break;
    case "labour":
      isValid = validateLabour();
      break;
    case "vehicle":
      isValid = validateVehicle();
      break;
    case "medical":
      isValid = validateMedical();
      break;
    case "family":
      isValid = validateFamily();
      break;
    default:
      isValid = true;
  }

  if (!isValid) {
    showToast("Please fix the errors above", "error");
    return;
  }

  // ========== EXISTING SAVE LOGIC ==========
  const fval = (id) => document.getElementById(id)?.value?.trim() || "";
  const fnum = (id) => parseFloat(document.getElementById(id)?.value) || 0;
  let record = { id: editingId || uid() };

  if (module !== "family") {
    const bsY = parseInt(fval("f_bsy")),
      bsM = parseInt(fval("f_bsm")),
      bsD = parseInt(fval("f_bsd"));
    if (!bsY || !bsM || !bsD) {
      showToast("Please select a valid BS date.", "error");
      return;
    }
    Object.assign(record, makeDateObj(bsY, bsM, bsD));
  }

  if (module === "household") {
    const rawItems = collectHouseholdBillItems();
    const filled = rawItems.filter((i) => i.lineTotal > 0);
    const amount = filled.reduce((s, i) => s + i.lineTotal, 0);
    const types = [...new Set(filled.map((i) => i.itemType))];
    Object.assign(record, {
      items: filled,
      amount: parseFloat(amount.toFixed(2)),
      category: types.length === 1 ? types[0] : MIXED_BILL_CAT,
      notes: fval("f_notes"),
    });
  } else if (module === "income") {
    let member = fval("f_member");
    if (member === "Other") member = fval("f_memberName") || "Other";
    Object.assign(record, {
      source: fval("f_source"),
      amount: fnum("f_amount"),
      member,
      notes: fval("f_notes"),
    });
  } else if (module === "agriculture") {
    let agriType = fval("f_type");
    if (agriType === "income") agriType = "Income";
    if (agriType === "expense") agriType = "Expense";
    Object.assign(record, {
      type: agriType,
      crop: fval("f_crop"),
      season: fval("f_season"),
      quantity: fnum("f_quantity"),
      rate: fnum("f_rate"),
      amount: fnum("f_amount"),
      notes: fval("f_notes"),
    });
  } else if (module === "livestock") {
    // Get morning and evening quantities
    const morningQty =
      parseFloat(document.getElementById("f_morning_qty")?.value) || 0;
    const eveningQty =
      parseFloat(document.getElementById("f_evening_qty")?.value) || 0;
    const totalQty = morningQty + eveningQty;

    // Get regular quantity (for expenses)
    const regularQty =
      parseFloat(document.getElementById("f_quantity")?.value) || 0;

    // Determine which quantity to use
    let finalQuantity = 0;
    let finalMorningQty = 0;
    let finalEveningQty = 0;
    let finalType = fval("f_type");

    // If this is milk production (has morning or evening fields)
    if (morningQty > 0 || eveningQty > 0) {
      finalQuantity = totalQty;
      finalMorningQty = morningQty;
      finalEveningQty = eveningQty;
      finalType = "Milk Production";
    } else {
      finalQuantity = regularQty;
    }

    // Get amount (for milk production it's 0, for expenses it's the entered amount)
    let finalAmount =
      parseFloat(document.getElementById("f_amount")?.value) || 0;

    // If amount is empty and it's milk production, set to 0
    if (finalType === "Milk Production") {
      finalAmount = 0;
    }

    Object.assign(record, {
      animal: fval("f_animal") || "Unknown",
      type: finalType,
      quantity: finalQuantity,
      morningQuantity: finalMorningQty,
      eveningQuantity: finalEveningQty,
      totalQuantity: finalQuantity,
      amount: finalAmount,
      notes: fval("f_notes"),
    });

    console.log("Saving livestock record:", record);
  } else if (module === "labour") {
    const days = fnum("f_days"),
      wage = fnum("f_wage");
    Object.assign(record, {
      name: fval("f_name"),
      gender: fval("f_gender"),
      task: fval("f_task"),
      hours: fnum("f_hours"),
      days,
      wage,
      amount: parseFloat((days * wage).toFixed(2)),
      notes: fval("f_notes"),
    });
  } else if (module === "vehicle") {
    Object.assign(record, {
      vehicle: fval("f_vehicle"),
      category: fval("f_category"),
      amount: fnum("f_amount"),
      notes: fval("f_notes"),
    });
  } else if (module === "medical") {
    let member = fval("f_member");
    if (member === "Other") member = fval("f_memberName") || "Other";
    Object.assign(record, {
      member,
      type: fval("f_type"),
      amount: fnum("f_amount"),
      doctor: fval("f_doctor"),
      notes: fval("f_notes"),
    });
  } else if (module === "family") {
    Object.assign(record, {
      name: fval("f_name"),
      relation: fval("f_relation"),
      gender: fval("f_gender"),
      age: fnum("f_age") || "",
      phone: fval("f_phone"),
      notes: fval("f_notes"),
    });
  }

  const data = loadData(module);
  if (editingId) {
    const idx = data.findIndex((d) => d.id === editingId);
    if (idx >= 0) data[idx] = record;
    else data.push(record);
  } else {
    data.push(record);
  }
  saveData(module, data);
  closeModal();

  if (module === "family") renderFamily();
  else if (module === "livestock") {
    if (typeof renderLivestockTable === "function") renderLivestockTable();
  } else {
    if (module === "household" && typeof renderHouseholdTable === "function")
      renderHouseholdTable();
    else renderTable(module);
    if (module === "labour") renderLabourCharts();
  }
  if (currentPage === "dashboard") renderDashboard();
  if (typeof refreshRecentTransactions === "function")
    refreshRecentTransactions();
  showToast(editingId ? "Record updated!" : "Record added!", "success");
  populateMemberDropdowns();
}

function deleteRecord(module, id) {
  if (!confirm("Delete this record? Cannot be undone.")) return;
  saveData(
    module,
    loadData(module).filter((d) => d.id !== id),
  );
  if (module === "family") renderFamily();
  else {
    if (module === "household" && typeof renderHouseholdTable === "function")
      renderHouseholdTable();
    else renderTable(module);
    if (module === "labour") renderLabourCharts();
  }
  if (currentPage === "dashboard") renderDashboard();
  if (typeof refreshRecentTransactions === "function")
    refreshRecentTransactions();
  showToast("Record deleted.", "success");
  populateMemberDropdowns();
}

// ============================================================
//  TABLE RENDERERS
// ============================================================

function renderTable(module) {
  const map = {
    household: renderHousehold,
    income: renderIncome,
    agriculture: renderAgriculture,
    livestock: renderLivestock,
    labour: renderLabour,
    vehicle: renderVehicle,
    medical: renderMedical,
  };
  if (map[module]) map[module]();
}

function renderHousehold() {
  const { year, month } = getYMFilter("hh");
  let data = filterBS(loadData("household"), year, month);
  const cat = document.getElementById("hhCatFilter")?.value || "";
  const srch = (document.getElementById("hhSearch")?.value || "").toLowerCase();
  if (cat) data = data.filter((r) => r.category === cat);
  if (srch) data = data.filter((r) => householdMatchesSearch(r, srch));
  data = sortByDate(data);
  document.getElementById("householdBody").innerHTML = data.length
    ? data
        .map(
          (r) =>
            `<tr><td class="mono">${bsDisplay(r)}</td><td><span style="font-size:0.78rem;color:var(--accent);font-weight:600;display:block">${escapeHtml(r.category || "—")}</span><span style="font-size:0.82rem;line-height:1.35;display:block">${householdBillSummaryHtml(r)}</span></td><td class="mono">₹${fmt(r.amount)}</td><td style="max-width:200px;overflow:hidden;text-overflow:ellipsis">${r.notes || "—"}</td><td>${editBtn("household", r)} ${delBtn("household", r.id)}</td></tr>`,
        )
        .join("")
    : emptyRow(5);
  const total = data.reduce((s, r) => s + r.amount, 0);
  document.getElementById("householdSummary").innerHTML =
    `<span class="sum-item">Total Expenses: <strong>₹${fmt(total)}</strong></span><span class="sum-item">Records: <strong>${data.length}</strong></span>`;
}

function renderHouseholdTable() {
  const year = document.getElementById("hhBSYear")?.value || "",
    month = document.getElementById("hhBSMonth")?.value || "",
    category = document.getElementById("hhCatFilter")?.value || "",
    search = (document.getElementById("hhSearch")?.value || "").toLowerCase();
  let data = loadData("household");
  if (year && year !== "") data = data.filter((r) => r.bsY == year);
  if (month && month !== "") data = data.filter((r) => r.bsM == month);
  if (category && category !== "")
    data = data.filter((r) => r.category === category);
  if (search && search !== "")
    data = data.filter((r) => householdMatchesSearch(r, search));
  data = sortByDate(data);
  const tbody = document.getElementById("householdBody"),
    emptyDiv = document.getElementById("householdEmpty"),
    tableContainer = document.querySelector(".table-container");
  if (!data.length) {
    if (tbody) tbody.innerHTML = "";
    if (emptyDiv) emptyDiv.style.display = "block";
    if (tableContainer) tableContainer.style.display = "none";
    updateHouseholdSummary(data);
    updateHouseholdStats();
    return;
  }
  if (emptyDiv) emptyDiv.style.display = "none";
  if (tableContainer) tableContainer.style.display = "block";
  if (tbody) {
    tbody.innerHTML = data
      .map(
        (r) =>
          `<tr><td class="mono">${bsDisplay(r)}</td><td><span class="category-badge ${getCategoryClass(r.category)}">${escapeHtml(r.category || "—")}</span></td><td>${householdBillSummaryHtml(r)}</td><td class="amount-positive">₹${fmt(r.amount)}</td><td style="max-width:150px;overflow:hidden;text-overflow:ellipsis">${escapeHtml(r.notes || "—")}</td><td class="action-buttons"><button class="btn-icon edit" onclick='openModal("household", ${JSON.stringify(r).replace(/'/g, "&#39;")})' title="Edit">✏️</button><button class="btn-icon delete" onclick="deleteRecord('household','${r.id}')" title="Delete">🗑️</button></td></tr>`,
      )
      .join("");
  }
  updateHouseholdSummary(data);
  updateHouseholdStats();
}

function getCategoryClass(category) {
  const cat = String(category || "").toLowerCase();
  if (cat.includes("grain") || cat.includes("cereal")) return "grains";
  if (cat.includes("vegetable")) return "vegetables";
  if (cat.includes("dairy") || cat.includes("milk")) return "dairy";
  if (cat.includes("meat") || cat.includes("protein")) return "meat";
  if (cat.includes("essential") || cat.includes("household"))
    return "essentials";
  return "";
}

function updateHouseholdSummary(data) {
  const total = data.reduce((s, r) => s + r.amount, 0),
    count = data.length,
    avg = count ? total / count : 0;
  const categoryCount = {};
  data.forEach((r) => {
    const cat = r.category || "Other";
    categoryCount[cat] = (categoryCount[cat] || 0) + 1;
  });
  const topCat = Object.entries(categoryCount).sort((a, b) => b[1] - a[1])[0];
  const totalEl = document.getElementById("totalHouseholdExpense"),
    avgEl = document.getElementById("avgHouseholdExpense"),
    countEl = document.getElementById("householdRecordCount"),
    topCatEl = document.getElementById("topCategory");
  if (totalEl) totalEl.innerHTML = "₹" + fmt(total);
  if (avgEl) avgEl.innerHTML = "₹" + fmt(avg);
  if (countEl) countEl.innerHTML = count;
  if (topCatEl) topCatEl.innerHTML = topCat ? topCat[0] : "—";
}

function updateHouseholdStats() {
  const allData = loadData("household"),
    now = todayBS();
  const thisMonth = allData
    .filter((r) => r.bsY === now.y && r.bsM === now.m)
    .reduce((s, r) => s + r.amount, 0);
  const thisYear = allData
    .filter((r) => r.bsY === now.y)
    .reduce((s, r) => s + r.amount, 0);
  document.getElementById("hhThisMonth").innerHTML = "₹" + fmt(thisMonth);
  document.getElementById("hhThisYear").innerHTML = "₹" + fmt(thisYear);
}

function populateHouseholdYear() {
  const curY = currentBSYear(),
    el = document.getElementById("hhBSYear");
  if (el) {
    el.innerHTML = '<option value="">All Years</option>';
    for (let y = curY + 1; y >= 2070; y--)
      el.innerHTML += `<option value="${y}" ${y === curY ? "selected" : ""}>${y}</option>`;
  }
}

function renderIncome() {
  const { year, month } = getYMFilter("inc");
  let data = filterBS(loadData("income"), year, month);
  const src = document.getElementById("incSourceFilter")?.value || "",
    mem = document.getElementById("incMemberFilter")?.value || "";
  if (src) data = data.filter((r) => r.source === src);
  if (mem) data = data.filter((r) => r.member === mem);
  data = sortByDate(data);
  document.getElementById("incomeBody").innerHTML = data.length
    ? data
        .map(
          (r) =>
            `<tr><td class="mono">${bsDisplay(r)}</td><td><span class="badge badge-income">${r.source}</span></td><td>${r.member || "—"}</td><td class="mono" style="color:var(--green);font-weight:600">₹${fmt(r.amount)}</td><td style="max-width:180px;overflow:hidden;text-overflow:ellipsis">${r.notes || "—"}</td><td>${editBtn("income", r)} ${delBtn("income", r.id)}</td></tr>`,
        )
        .join("")
    : emptyRow(6);
  const total = data.reduce((s, r) => s + r.amount, 0);
  document.getElementById("incomeSummary").innerHTML =
    `<span class="sum-item">Total Income: <strong style="color:var(--green)">₹${fmt(total)}</strong></span><span class="sum-item">Records: <strong>${data.length}</strong></span>`;
}

function renderAgriculture() {
  const { year, month } = getYMFilter("agri");
  let data = filterBS(loadData("agriculture"), year, month);
  const type = document.getElementById("agriTypeFilter")?.value || "",
    crop = document.getElementById("agriCropFilter")?.value || "";
  if (type) data = data.filter((r) => r.type === type);
  if (crop) data = data.filter((r) => r.crop === crop);
  data = sortByDate(data);
  document.getElementById("agricultureBody").innerHTML = data.length
    ? data
        .map(
          (r) =>
            `<table><td class="mono">${bsDisplay(r)}</td><td>${r.crop}</td><td style="font-size:0.75rem;color:var(--text-3)">${r.season || "—"}</td><td class="mono">${r.quantity || 0} kg</td><td class="mono">₹${fmt(r.amount)}</td><td><span class="badge ${r.type === "Income" ? "badge-income" : "badge-expense"}">${r.type}</span></td><td style="max-width:150px;overflow:hidden;text-overflow:ellipsis">${r.notes || "—"}</td><td>${editBtn("agriculture", r)} ${delBtn("agriculture", r.id)}</td></tr>`,
        )
        .join("")
    : emptyRow(8);
  const inc = data
      .filter((r) => r.type === "Income")
      .reduce((s, r) => s + r.amount, 0),
    exp = data
      .filter((r) => r.type === "Expense")
      .reduce((s, r) => s + r.amount, 0),
    qty = data.reduce((s, r) => s + (r.quantity || 0), 0);
  document.getElementById("agricultureSummary").innerHTML =
    `<span class="sum-item">Income: <strong>₹${fmt(inc)}</strong></span><span class="sum-item">Expenses: <strong>₹${fmt(exp)}</strong></span><span class="sum-item">Total Yield: <strong>${fmt(qty)} kg</strong></span><span class="sum-item">Records: <strong>${data.length}</strong></span>`;
}

function renderAgricultureTable() {
  const year = document.getElementById("agriBSYear")?.value || "",
    month = document.getElementById("agriBSMonth")?.value || "",
    type = document.getElementById("agriTypeFilter")?.value || "",
    crop = document.getElementById("agriCropFilter")?.value || "";
  let data = loadData("agriculture");
  if (year) data = data.filter((r) => r.bsY == year);
  if (month) data = data.filter((r) => r.bsM == month);
  if (type) data = data.filter((r) => r.type === type);
  if (crop) data = data.filter((r) => r.crop === crop);
  data = sortByDate(data);
  const tbody = document.getElementById("agricultureBody"),
    emptyDiv = document.getElementById("agricultureEmpty"),
    tableContainer = document.querySelector(
      "#page-agriculture .table-container",
    );
  if (!data.length) {
    if (tbody) tbody.innerHTML = "";
    if (emptyDiv) emptyDiv.style.display = "block";
    if (tableContainer) tableContainer.style.display = "none";
  } else {
    if (emptyDiv) emptyDiv.style.display = "none";
    if (tableContainer) tableContainer.style.display = "block";
    if (tbody) {
      tbody.innerHTML = data
        .map(
          (r) =>
            `<tr><td class="mono">${bsDisplay(r)}</td><td><span class="category-badge">${escapeHtml(r.crop || "—")}</span></td><td>${r.season || "—"}</td><td class="mono">${(r.quantity || 0).toFixed(1)} kg</td><td class="mono" style="color:${r.type === "Income" ? "var(--green)" : "var(--red)"};font-weight:600;">₹${fmt(r.amount)}</td><td><span class="badge ${r.type === "Income" ? "badge-income" : "badge-expense"}">${r.type}</span></td><td style="max-width:150px;overflow:hidden;text-overflow:ellipsis">${escapeHtml(r.notes || "—")}</td><td class="action-buttons"><button class="btn-icon edit" onclick='openModal("agriculture", ${JSON.stringify(r).replace(/'/g, "&#39;")})'>✏️</button><button class="btn-icon delete" onclick="deleteRecord('agriculture','${r.id}')">🗑️</button></td></tr>`,
        )
        .join("");
    }
  }
  updateAgricultureSummary(data);
  renderAgricultureCharts(data);
}

function updateAgricultureSummary(data) {
  const income = data
      .filter((r) => r.type === "Income")
      .reduce((s, r) => s + r.amount, 0),
    expense = data
      .filter((r) => r.type === "Expense")
      .reduce((s, r) => s + r.amount, 0),
    profit = income - expense,
    totalYield = data.reduce((s, r) => s + (r.quantity || 0), 0);
  const cropIncome = {};
  data
    .filter((r) => r.type === "Income")
    .forEach((r) => {
      cropIncome[r.crop] = (cropIncome[r.crop] || 0) + r.amount;
    });
  const bestCrop = Object.entries(cropIncome).sort((a, b) => b[1] - a[1])[0];

  const agriIncomeTotal = document.getElementById("agriIncomeTotal");
  const agriExpenseTotal = document.getElementById("agriExpenseTotal");
  const agriProfit = document.getElementById("agriProfit");
  const agriYieldTotal = document.getElementById("agriYieldTotal");
  const totalAgriIncome = document.getElementById("totalAgriIncome");
  const totalAgriExpense = document.getElementById("totalAgriExpense");
  const agriRecordCount = document.getElementById("agriRecordCount");
  const bestCropEl = document.getElementById("bestCrop");

  if (agriIncomeTotal) agriIncomeTotal.innerHTML = "₹" + fmt(income);
  if (agriExpenseTotal) agriExpenseTotal.innerHTML = "₹" + fmt(expense);
  if (agriProfit)
    agriProfit.innerHTML = (profit >= 0 ? "₹" : "-₹") + fmt(Math.abs(profit));
  if (agriYieldTotal) agriYieldTotal.innerHTML = fmt(totalYield) + " kg";
  if (totalAgriIncome) totalAgriIncome.innerHTML = "₹" + fmt(income);
  if (totalAgriExpense) totalAgriExpense.innerHTML = "₹" + fmt(expense);
  if (agriRecordCount) agriRecordCount.innerHTML = data.length;
  if (bestCropEl) bestCropEl.innerHTML = bestCrop ? bestCrop[0] : "—";
}

function renderAgricultureCharts(data) {
  const crops = [...new Set(data.map((r) => r.crop))];
  if (crops.length === 0) return;
  const incomeByCrop = crops.map((c) =>
    data
      .filter((r) => r.type === "Income" && r.crop === c)
      .reduce((s, r) => s + r.amount, 0),
  );
  const expenseByCrop = crops.map((c) =>
    data
      .filter((r) => r.type === "Expense" && r.crop === c)
      .reduce((s, r) => s + r.amount, 0),
  );
  const cropCtx = document.getElementById("cropComparisonChart");
  if (cropCtx) {
    if (window.cropChart) window.cropChart.destroy();
    window.cropChart = new Chart(cropCtx, {
      type: "bar",
      data: {
        labels: crops,
        datasets: [
          {
            label: "Income",
            data: incomeByCrop,
            backgroundColor: "rgba(58,125,68,0.8)",
            borderRadius: 8,
          },
          {
            label: "Expense",
            data: expenseByCrop,
            backgroundColor: "rgba(192,57,43,0.8)",
            borderRadius: 8,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: { legend: { position: "bottom" } },
        scales: {
          y: { beginAtZero: true, ticks: { callback: (v) => "₹" + v } },
        },
      },
    });
  }
  const yieldData = crops.map((c) =>
    data.filter((r) => r.crop === c).reduce((s, r) => s + (r.quantity || 0), 0),
  );
  const yieldCtx = document.getElementById("cropYieldChart");
  if (yieldCtx) {
    if (window.yieldChart) window.yieldChart.destroy();
    window.yieldChart = new Chart(yieldCtx, {
      type: "doughnut",
      data: {
        labels: crops,
        datasets: [
          {
            data: yieldData,
            backgroundColor: [
              "#3a7d44",
              "#d97706",
              "#1a6fa8",
              "#7c3aed",
              "#0f766e",
              "#c0392b",
            ],
            borderWidth: 2,
            borderColor: "#faf7f2",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: { legend: { position: "bottom" } },
        cutout: "55%",
      },
    });
  }
}

function populateAgricultureYear() {
  const curY = currentBSYear(),
    el = document.getElementById("agriBSYear");
  if (el) {
    el.innerHTML = '<option value="">All Years</option>';
    for (let y = curY + 1; y >= 2070; y--)
      el.innerHTML += `<option value="${y}" ${y === curY ? "selected" : ""}>${y}</option>`;
  }
}

function renderLivestockTable() {
  const year = document.getElementById("lsBSYear")?.value || "";
  const month = document.getElementById("lsBSMonth")?.value || "";
  const type = document.getElementById("lsTypeFilter")?.value || "";
  const animal = document.getElementById("lsAnimalFilter")?.value || "";
  const search = (
    document.getElementById("lsSearch")?.value || ""
  ).toLowerCase();

  let data = loadData("livestock");

  console.log("All livestock data:", data);

  if (year) data = data.filter((r) => r.bsY == year);
  if (month) data = data.filter((r) => r.bsM == month);
  if (type) data = data.filter((r) => r.type === type);
  if (animal) data = data.filter((r) => r.animal === animal);
  if (search)
    data = data.filter(
      (r) =>
        (r.notes || "").toLowerCase().includes(search) ||
        (r.animal || "").toLowerCase().includes(search) ||
        (r.type || "").toLowerCase().includes(search),
    );

  data = sortByDate(data);

  console.log("Filtered livestock data:", data);

  const tbody = document.getElementById("livestockBody");
  const emptyState = document.getElementById("livestockEmptyState");
  const recordsCount = document.getElementById("livestockRecordsCount");

  // Calculate totals
  let totalMilk = 0;
  let totalSale = 0;
  let totalFeed = 0;
  let totalMedical = 0;

  data.forEach((r) => {
    // Use totalQuantity or quantity
    const qty = r.totalQuantity || r.quantity || 0;

    if (r.type === "Milk Production") {
      totalMilk += qty;
    } else if (r.type === "Milk Sale") {
      totalSale += r.amount || 0;
    } else if (["दाना", "चोकर", "मकै"].includes(r.type)) {
      totalFeed += r.amount || 0;
    } else if (["औषधि", "पशु चिकित्सक"].includes(r.type)) {
      totalMedical += r.amount || 0;
    }
  });

  // Update summary stats
  const totalMilkEl = document.getElementById("livestockTotalMilk");
  const totalSaleEl = document.getElementById("livestockTotalSale");
  const totalFeedEl = document.getElementById("livestockTotalFeed");
  const totalMedicalEl = document.getElementById("livestockTotalMedical");
  const totalRecordsEl = document.getElementById("livestockTotalRecords");

  if (totalMilkEl) totalMilkEl.innerHTML = totalMilk.toFixed(1) + " L";
  if (totalSaleEl) totalSaleEl.innerHTML = "₹" + fmt(totalSale);
  if (totalFeedEl) totalFeedEl.innerHTML = "₹" + fmt(totalFeed);
  if (totalMedicalEl) totalMedicalEl.innerHTML = "₹" + fmt(totalMedical);
  if (totalRecordsEl) totalRecordsEl.innerHTML = data.length;

  // Today's milk
  const today = todayBS();
  const todayMilk = data
    .filter(
      (r) =>
        r.type === "Milk Production" &&
        r.bsY === today.y &&
        r.bsM === today.m &&
        r.bsD === today.d,
    )
    .reduce((s, r) => s + (r.totalQuantity || r.quantity || 0), 0);
  const todayMilkEl = document.getElementById("livestockTodayMilk");
  if (todayMilkEl) todayMilkEl.innerHTML = todayMilk.toFixed(1) + " L";

  // This month milk
  const monthMilk = data
    .filter(
      (r) =>
        r.type === "Milk Production" && r.bsY === today.y && r.bsM === today.m,
    )
    .reduce((s, r) => s + (r.totalQuantity || r.quantity || 0), 0);
  const monthMilkEl = document.getElementById("livestockMonthMilk");
  if (monthMilkEl) monthMilkEl.innerHTML = monthMilk.toFixed(1) + " L";

  // Milk income (using rate)
  const milkIncome = monthMilk * (currentMilkRate || 60);
  const milkIncomeEl = document.getElementById("livestockMilkIncome");
  if (milkIncomeEl) milkIncomeEl.innerHTML = "₹" + fmt(milkIncome);

  const feedExpenseEl = document.getElementById("livestockFeedExpense");
  if (feedExpenseEl) feedExpenseEl.innerHTML = "₹" + fmt(totalFeed);

  if (recordsCount) recordsCount.textContent = `${data.length} record(s)`;

  if (!data.length) {
    if (tbody) tbody.innerHTML = "";
    if (emptyState) emptyState.style.display = "block";
    if (tbody && tbody.parentElement)
      tbody.parentElement.style.display = "none";
    return;
  }

  if (emptyState) emptyState.style.display = "none";
  if (tbody) {
    if (tbody.parentElement) tbody.parentElement.style.display = "block";

    tbody.innerHTML = data
      .map((r) => {
        // Safely get values with defaults
        const morningDisplay =
          r.morningQuantity && r.morningQuantity > 0
            ? r.morningQuantity.toFixed(1)
            : "-";
        const eveningDisplay =
          r.eveningQuantity && r.eveningQuantity > 0
            ? r.eveningQuantity.toFixed(1)
            : "-";
        const qtyDisplay = (r.totalQuantity || r.quantity || 0).toFixed(1);

        let typeClass = "";
        let typeDisplay = r.type || "Unknown";

        if (r.type === "Milk Production") {
          typeClass = "milk";
          typeDisplay = "🥛 Milk Production";
        } else if (r.type === "दाना") {
          typeClass = "dana";
          typeDisplay = "🌾 दाना";
        } else if (r.type === "चोकर") {
          typeClass = "chokkar";
          typeDisplay = "🌽 चोकर";
        } else if (r.type === "मकै") {
          typeClass = "makai";
          typeDisplay = "🌽 मकै";
        } else if (r.type === "औषधि") {
          typeClass = "medicine";
          typeDisplay = "💊 औषधि";
        } else if (r.type === "पशु चिकित्सक") {
          typeClass = "vet";
          typeDisplay = "🩺 पशु चिकित्सक";
        } else if (r.type === "Milk Sale") {
          typeClass = "sale";
          typeDisplay = "💰 Milk Sale";
        }

        const amountDisplay = (r.amount || 0).toFixed(0);
        const animalDisplay = r.animal || "Unknown";
        const notesDisplay = r.notes || "-";

        return `
                <tr data-id="${r.id}">
                    <td class="mono">${bsDisplay(r)}</td>
                    <td>${escapeHtml(animalDisplay)}</td>
                    <td><span class="type-badge ${typeClass}">${typeDisplay}</span></td>
                    <td>${morningDisplay}</td>
                    <td>${eveningDisplay}</td>
                    <td>${qtyDisplay} ${r.type === "Milk Production" ? "L" : r.quantity ? "kg" : ""}</td>
                    <td class="amount-positive">₹${fmt(amountDisplay)}</td>
                    <td style="max-width:150px; overflow:hidden; text-overflow:ellipsis;">${escapeHtml(notesDisplay)}</td>
                    <td class="action-icons">
                        <button class="action-icon edit" onclick='openModal("livestock", ${JSON.stringify(r).replace(/'/g, "&#39;")})' title="Edit">✏️</button>
                        <button class="action-icon delete" onclick="deleteRecord('livestock','${r.id}')" title="Delete">🗑️</button>
                    </td>
                </tr>
            `;
      })
      .join("");
  }

  // Update charts and performance
  if (typeof loadMilkChart === "function") loadMilkChart(7);
  if (typeof renderAnimalPerformance === "function") renderAnimalPerformance();
}

function renderLabour() {
  const { year, month } = getYMFilter("lab");
  let data = filterBS(loadData("labour"), year, month);
  const gender = document.getElementById("labGenderFilter")?.value || "",
    task = document.getElementById("labTaskFilter")?.value || "";
  if (gender) data = data.filter((r) => r.gender === gender);
  if (task) data = data.filter((r) => r.task === task);
  data = sortByDate(data);
  document.getElementById("labourBody").innerHTML = data.length
    ? data
        .map(
          (r) =>
            `<tr><td class="mono">${bsDisplay(r)}</td><td>${r.name || "Unknown"}</td><td><span class="badge ${r.gender === "Female" ? "badge-purple" : "badge-info"}">${r.gender}</span></td><td>${r.task}</td><td class="mono">${r.hours || "—"} hrs</td><td class="mono">${r.days}</td><td class="mono">₹${fmt(r.wage)}</td><td class="mono" style="color:var(--red);font-weight:600">₹${fmt(r.amount)}</td><td>${r.notes || "—"}</td><td>${editBtn("labour", r)} ${delBtn("labour", r.id)}</td></tr>`,
        )
        .join("")
    : emptyRow(10);
  const total = data.reduce((s, r) => s + r.amount, 0),
    male = data
      .filter((r) => r.gender === "Male")
      .reduce((s, r) => s + r.amount, 0),
    female = data
      .filter((r) => r.gender === "Female")
      .reduce((s, r) => s + r.amount, 0),
    days = data.reduce((s, r) => s + (parseFloat(r.days) || 0), 0),
    hours = data.reduce((s, r) => s + (parseFloat(r.hours) || 0), 0);
  document.getElementById("labourSummary").innerHTML =
    `<span class="sum-item">Total Wages: <strong>₹${fmt(total)}</strong></span><span class="sum-item">Male Workers: <strong>₹${fmt(male)}</strong></span><span class="sum-item">Female Workers: <strong>₹${fmt(female)}</strong></span><span class="sum-item">Total Days: <strong>${fmt(days)}</strong></span><span class="sum-item">Total Hours: <strong>${fmt(hours)}</strong></span><span class="sum-item">Records: <strong>${data.length}</strong></span>`;
}

function renderLabourCharts() {
  const allData = loadData("labour"),
    curBS = todayBS();
  const months6Labels = [],
    maleArr = [],
    femaleArr = [];
  for (let i = 5; i >= 0; i--) {
    let m = curBS.m - i,
      y = curBS.y;
    while (m <= 0) {
      m += 12;
      y--;
    }
    months6Labels.push(`${BS_MONTH_NAMES_EN[m - 1]} ${y}`);
    const slice = allData.filter((r) => r.bsY === y && r.bsM === m);
    maleArr.push(
      slice
        .filter((r) => r.gender === "Male")
        .reduce((s, r) => s + r.amount, 0),
    );
    femaleArr.push(
      slice
        .filter((r) => r.gender === "Female")
        .reduce((s, r) => s + r.amount, 0),
    );
  }
  const trendCtx = document.getElementById("labourTrendChart");
  if (trendCtx) {
    if (labourCharts.trend) labourCharts.trend.destroy();
    labourCharts.trend = new Chart(trendCtx, {
      type: "bar",
      data: {
        labels: months6Labels,
        datasets: [
          {
            label: "Male",
            data: maleArr,
            backgroundColor: "rgba(26,111,168,0.75)",
            borderRadius: 6,
          },
          {
            label: "Female",
            data: femaleArr,
            backgroundColor: "rgba(124,58,237,0.75)",
            borderRadius: 6,
          },
        ],
      },
      options: {
        plugins: { legend: { labels: { font: { size: 11 } } } },
        scales: { y: { ticks: { callback: (v) => "₹" + fmt(v) } } },
      },
    });
  }
  const tasks = [
      "Grass Cutting",
      "Ploughing",
      "Harvesting",
      "Planting",
      "Weeding",
      "Other",
    ],
    taskTotals = tasks.map((t) =>
      allData.filter((r) => r.task === t).reduce((s, r) => s + r.amount, 0),
    );
  const taskCtx = document.getElementById("labourTaskChart");
  if (taskCtx) {
    if (labourCharts.task) labourCharts.task.destroy();
    labourCharts.task = new Chart(taskCtx, {
      type: "doughnut",
      data: {
        labels: tasks,
        datasets: [
          {
            data: taskTotals,
            backgroundColor: [
              "#3a7d44",
              "#1a6fa8",
              "#d97706",
              "#7c3aed",
              "#0f766e",
              "#c0392b",
            ],
            borderWidth: 2,
            borderColor: "#faf7f2",
          },
        ],
      },
      options: { plugins: { legend: { position: "bottom" } }, cutout: "55%" },
    });
  }
}

function renderVehicle() {
  const { year, month } = getYMFilter("veh");
  let data = filterBS(loadData("vehicle"), year, month);
  const veh = document.getElementById("vehTypeFilter")?.value || "",
    cat = document.getElementById("vehCatFilter")?.value || "";
  if (veh) data = data.filter((r) => r.vehicle === veh);
  if (cat) data = data.filter((r) => r.category === cat);
  data = sortByDate(data);
  const vIcon = (v) =>
    ({ Tractor: "🚜", Bike: "🏍️", Scooter: "🛵" })[v] || "🚗";
  const cBadge = (c) =>
    ({
      Fuel: "badge-warning",
      Maintenance: "badge-info",
      Repair: "badge-expense",
      Insurance: "badge-purple",
    })[c] || "badge-info";
  document.getElementById("vehicleBody").innerHTML = data.length
    ? data
        .map(
          (r) =>
            `<tr><td class="mono">${bsDisplay(r)}</td><td>${vIcon(r.vehicle)} ${r.vehicle}</td><td><span class="badge ${cBadge(r.category)}">${r.category}</span></td><td class="mono">₹${fmt(r.amount)}</td><td>${r.notes || "—"}</td><td>${editBtn("vehicle", r)} ${delBtn("vehicle", r.id)}</td></tr>`,
        )
        .join("")
    : emptyRow(6);
  const total = data.reduce((s, r) => s + r.amount, 0);
  document.getElementById("vehicleSummary").innerHTML =
    `<span class="sum-item">Total: <strong>₹${fmt(total)}</strong></span>${["Tractor", "Bike", "Scooter"].map((v) => `<span class="sum-item">${vIcon(v)} ${v}: <strong>₹${fmt(data.filter((r) => r.vehicle === v).reduce((s, r) => s + r.amount, 0))}</strong></span>`).join("")}<span class="sum-item">Records: <strong>${data.length}</strong></span>`;
}

function renderVehicleTable() {
  const year = document.getElementById("vehBSYear")?.value || "",
    month = document.getElementById("vehBSMonth")?.value || "",
    category = document.getElementById("vehCatFilter")?.value || "",
    search = (document.getElementById("vehSearch")?.value || "").toLowerCase(),
    activeVehicle = currentVehicleFilter || "";
  let data = loadData("vehicle");
  if (year) data = data.filter((r) => r.bsY == year);
  if (month) data = data.filter((r) => r.bsM == month);
  if (category) data = data.filter((r) => r.category === category);
  if (activeVehicle) data = data.filter((r) => r.vehicle === activeVehicle);
  if (search)
    data = data.filter((r) => (r.notes || "").toLowerCase().includes(search));
  data = sortByDate(data);
  const tbody = document.getElementById("vehicleBody"),
    emptyDiv = document.getElementById("vehicleEmpty"),
    tableContainer = document.querySelector("#page-vehicle .table-container");
  if (!data.length) {
    if (tbody) tbody.innerHTML = "";
    if (emptyDiv) emptyDiv.style.display = "block";
    if (tableContainer) tableContainer.style.display = "none";
  } else {
    if (emptyDiv) emptyDiv.style.display = "none";
    if (tableContainer) tableContainer.style.display = "block";
    if (tbody) {
      tbody.innerHTML = data
        .map((r) => {
          const vehicleIcon =
              r.vehicle === "Tractor"
                ? "🚜"
                : r.vehicle === "Bike"
                  ? "🏍️"
                  : r.vehicle === "Scooter"
                    ? "🛵"
                    : "🚗",
            vehicleClass =
              r.vehicle === "Tractor"
                ? "tractor"
                : r.vehicle === "Bike"
                  ? "bike"
                  : r.vehicle === "Scooter"
                    ? "scooter"
                    : "other";
          return `<tr><td class="mono">${bsDisplay(r)}</td><td><span class="vehicle-badge ${vehicleClass}">${vehicleIcon} ${r.vehicle}</span></td><td><span class="badge category-badge-${r.category?.toLowerCase() || "other"}">${r.category || "—"}</span></td><td class="amount-positive" style="color:var(--red);font-weight:600">₹${fmt(r.amount)}</td><td style="max-width:150px;overflow:hidden;text-overflow:ellipsis">${escapeHtml(r.notes || "—")}</td><td class="action-buttons"><button class="btn-icon edit" onclick='openModal("vehicle", ${JSON.stringify(r).replace(/'/g, "&#39;")})' title="Edit">✏️</button><button class="btn-icon delete" onclick="deleteRecord('vehicle','${r.id}')" title="Delete">🗑️</button></td></tr>`;
        })
        .join("");
    }
  }
  const vehicleSummaryEl = document.getElementById("vehicleSummary");
  if (vehicleSummaryEl) {
    const total = data.reduce((s, r) => s + r.amount, 0);
    vehicleSummaryEl.innerHTML = `<span class="sum-item">Total: <strong>₹${fmt(total)}</strong></span>${["Tractor", "Bike", "Scooter"].map((v) => `<span class="sum-item">${vIcon(v)} ${v}: <strong>₹${fmt(data.filter((r) => r.vehicle === v).reduce((s, r) => s + r.amount, 0))}</strong></span>`).join("")}<span class="sum-item">Records: <strong>${data.length}</strong></span>`;
  }
  updateVehicleSummary(data);
  updateVehicleStats();
  renderVehicleCharts(data);
}

function filterByVehicle(vehicle) {
  currentVehicleFilter = vehicle;
  document.querySelectorAll(".vehicle-chip").forEach((chip) => {
    chip.classList.remove("active");
    if (chip.getAttribute("data-vehicle") === vehicle)
      chip.classList.add("active");
  });
  renderVehicleTable();
}

function updateVehicleSummary(data) {
  const total = data.reduce((s, r) => s + r.amount, 0),
    tractorTotal = data
      .filter((r) => r.vehicle === "Tractor")
      .reduce((s, r) => s + r.amount, 0),
    bikeTotal = data
      .filter((r) => r.vehicle === "Bike")
      .reduce((s, r) => s + r.amount, 0),
    scooterTotal = data
      .filter((r) => r.vehicle === "Scooter")
      .reduce((s, r) => s + r.amount, 0),
    fuelTotal = data
      .filter((r) => r.category === "Fuel")
      .reduce((s, r) => s + r.amount, 0),
    maintenanceTotal = data
      .filter((r) => r.category === "Maintenance" || r.category === "Repair")
      .reduce((s, r) => s + r.amount, 0);
  const vehicles = {
      Tractor: tractorTotal,
      Bike: bikeTotal,
      Scooter: scooterTotal,
    },
    topVehicle = Object.entries(vehicles).sort((a, b) => b[1] - a[1])[0];
  const vehicleTotalExpenseEl = document.getElementById("vehicleTotalExpense");
  const vehicleFuelTotalEl = document.getElementById("vehicleFuelTotal");
  const vehicleMaintenanceTotalEl = document.getElementById(
    "vehicleMaintenanceTotal",
  );
  const topVehicleNameEl = document.getElementById("topVehicleName");
  const tractorTotalEl = document.getElementById("tractorTotal");
  const bikeTotalEl = document.getElementById("bikeTotal");
  const scooterTotalEl = document.getElementById("scooterTotal");
  const vehicleRecordCountEl = document.getElementById("vehicleRecordCount");

  if (vehicleTotalExpenseEl) vehicleTotalExpenseEl.innerHTML = "₹" + fmt(total);
  if (vehicleFuelTotalEl) vehicleFuelTotalEl.innerHTML = "₹" + fmt(fuelTotal);
  if (vehicleMaintenanceTotalEl)
    vehicleMaintenanceTotalEl.innerHTML = "₹" + fmt(maintenanceTotal);
  if (topVehicleNameEl)
    topVehicleNameEl.innerHTML =
      topVehicle && topVehicle[1] > 0 ? topVehicle[0] : "—";
  if (tractorTotalEl) tractorTotalEl.innerHTML = "₹" + fmt(tractorTotal);
  if (bikeTotalEl) bikeTotalEl.innerHTML = "₹" + fmt(bikeTotal);
  if (scooterTotalEl) scooterTotalEl.innerHTML = "₹" + fmt(scooterTotal);
  if (vehicleRecordCountEl) vehicleRecordCountEl.innerHTML = data.length;
}

function updateVehicleStats() {
  const allData = loadData("vehicle"),
    now = todayBS();
  const thisMonth = allData
      .filter((r) => r.bsY === now.y && r.bsM === now.m)
      .reduce((s, r) => s + r.amount, 0),
    thisYear = allData
      .filter((r) => r.bsY === now.y)
      .reduce((s, r) => s + r.amount, 0);
  document.getElementById("vehicleThisMonth").innerHTML = "₹" + fmt(thisMonth);
  document.getElementById("vehicleThisYear").innerHTML = "₹" + fmt(thisYear);
}

function renderVehicleCharts(data) {
  const categories = ["Fuel", "Maintenance", "Repair", "Insurance", "Other"],
    categoryTotals = categories.map((cat) =>
      data.filter((r) => r.category === cat).reduce((s, r) => s + r.amount, 0),
    );
  const categoryCtx = document.getElementById("vehicleCategoryChart");
  if (categoryCtx && categoryTotals.some((v) => v > 0)) {
    if (vehicleCharts.category) vehicleCharts.category.destroy();
    vehicleCharts.category = new Chart(categoryCtx, {
      type: "doughnut",
      data: {
        labels: categories,
        datasets: [
          {
            data: categoryTotals,
            backgroundColor: [
              "#d97706",
              "#7c3aed",
              "#c0392b",
              "#3a7d44",
              "#6c757d",
            ],
            borderWidth: 2,
            borderColor: "#faf7f2",
          },
        ],
      },
      options: { plugins: { legend: { position: "bottom" } }, cutout: "60%" },
    });
  }
  const curBS = todayBS(),
    months6Labels = [],
    monthlyTotals = [];
  for (let i = 5; i >= 0; i--) {
    let m = curBS.m - i,
      y = curBS.y;
    while (m <= 0) {
      m += 12;
      y--;
    }
    months6Labels.push(BS_MONTH_NAMES_EN[m - 1].slice(0, 3));
    monthlyTotals.push(
      data
        .filter((r) => r.bsY === y && r.bsM === m)
        .reduce((s, r) => s + r.amount, 0),
    );
  }
  const trendCtx = document.getElementById("vehicleTrendChart");
  if (trendCtx) {
    if (vehicleCharts.trend) vehicleCharts.trend.destroy();
    vehicleCharts.trend = new Chart(trendCtx, {
      type: "line",
      data: {
        labels: months6Labels,
        datasets: [
          {
            label: "Expenses (₹)",
            data: monthlyTotals,
            borderColor: "#1a6fa8",
            backgroundColor: "rgba(26,111,168,0.1)",
            fill: true,
            tension: 0.3,
            pointRadius: 4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: { legend: { position: "bottom" } },
      },
    });
  }
}

function populateVehicleYear() {
  const curY = currentBSYear(),
    el = document.getElementById("vehBSYear");
  if (el) {
    el.innerHTML = '<option value="">All Years</option>';
    for (let y = curY + 1; y >= 2070; y--)
      el.innerHTML += `<option value="${y}" ${y === curY ? "selected" : ""}>${y}</option>`;
  }
}

function renderMedical() {
  const year = document.getElementById("medBSYear")?.value || "",
    month = document.getElementById("medBSMonth")?.value || "",
    member = document.getElementById("medMemberFilter")?.value || "",
    type = document.getElementById("medTypeFilter")?.value || "",
    search = (document.getElementById("medSearch")?.value || "").toLowerCase();
  let data = loadData("medical");
  if (year) data = data.filter((r) => r.bsY == year);
  if (month) data = data.filter((r) => r.bsM == month);
  if (member) data = data.filter((r) => r.member === member);
  if (type) data = data.filter((r) => r.type === type);
  if (search)
    data = data.filter(
      (r) =>
        (r.notes || "").toLowerCase().includes(search) ||
        (r.doctor || "").toLowerCase().includes(search),
    );
  data = sortByDate(data);
  const tbody = document.getElementById("medicalBody"),
    emptyDiv = document.getElementById("medicalEmpty"),
    tableContainer = document.querySelector("#page-medical .table-container");
  if (!data.length) {
    if (tbody) tbody.innerHTML = "";
    if (emptyDiv) emptyDiv.style.display = "block";
    if (tableContainer) tableContainer.style.display = "none";
  } else {
    if (emptyDiv) emptyDiv.style.display = "none";
    if (tableContainer) tableContainer.style.display = "block";
    if (tbody) {
      tbody.innerHTML = data
        .map((r) => {
          const typeIcon =
            {
              "Doctor Visit": "👨‍⚕️",
              Medicine: "💊",
              "Lab Test": "🔬",
              Hospital: "🏥",
              Surgery: "⚕️",
              Other: "📋",
            }[r.type] || "🏥";
          const typeClass =
            {
              "Doctor Visit": "doctor-visit",
              Medicine: "medicine",
              "Lab Test": "lab-test",
              Hospital: "hospital",
              Surgery: "surgery",
              Other: "other",
            }[r.type] || "other";
          return `<tr><td class="mono">${bsDisplay(r)}</td><td><span class="member-badge">${escapeHtml(r.member || "—")}</span></td><td><span class="medical-badge ${typeClass}">${typeIcon} ${r.type}</span></td><td class="amount-positive" style="color:var(--red);font-weight:600">₹${fmt(r.amount)}</td><tr><td>${r.doctor ? `<span class="doctor-name">👨‍⚕️ ${escapeHtml(r.doctor)}</span>` : "—"}</td></td><td style="max-width:150px;overflow:hidden;text-overflow:ellipsis">${escapeHtml(r.notes || "—")}</td></td><td class="action-buttons"><button class="btn-icon edit" onclick='openModal("medical", ${JSON.stringify(r).replace(/'/g, "&#39;")})' title="Edit">✏️</button><button class="btn-icon delete" onclick="deleteRecord('medical','${r.id}')" title="Delete">🗑️</button></td></tr>`;
        })
        .join("");
    }
  }
  updateMedicalSummary(data);
  updateMedicalStats();
  renderMedicalCharts(data);
}

function getMedicalTypeIcon(type) {
  const icons = {
    "Doctor Visit": "👨‍⚕️",
    Medicine: "💊",
    "Lab Test": "🔬",
    Hospital: "🏥",
    Surgery: "⚕️",
    Other: "📋",
  };
  return icons[type] || "🏥";
}
function getMedicalTypeClass(type) {
  const classes = {
    "Doctor Visit": "doctor-visit",
    Medicine: "medicine",
    "Lab Test": "lab-test",
    Hospital: "hospital",
    Surgery: "surgery",
    Other: "other",
  };
  return classes[type] || "other";
}

function updateMedicalSummary(data) {
  const total = data.reduce((s, r) => s + r.amount, 0),
    doctorVisits = data.filter((r) => r.type === "Doctor Visit").length,
    medicineTotal = data
      .filter((r) => r.type === "Medicine")
      .reduce((s, r) => s + r.amount, 0),
    hospitalTotal = data
      .filter((r) => r.type === "Hospital")
      .reduce((s, r) => s + r.amount, 0);
  const memberCount = {};
  data.forEach((r) => {
    memberCount[r.member] = (memberCount[r.member] || 0) + 1;
  });
  const topMember = Object.entries(memberCount).sort((a, b) => b[1] - a[1])[0];
  document.getElementById("medicalTotalExpense").innerHTML = "₹" + fmt(total);
  document.getElementById("doctorVisitsCount").innerHTML = doctorVisits;
  document.getElementById("medicineExpense").innerHTML =
    "₹" + fmt(medicineTotal);
  document.getElementById("topMedicalMember").innerHTML = topMember
    ? topMember[0]
    : "—";
  document.getElementById("hospitalTotal").innerHTML = "₹" + fmt(hospitalTotal);
  document.getElementById("medicineTotal").innerHTML = "₹" + fmt(medicineTotal);
  document.getElementById("doctorVisitsTotal").innerHTML = doctorVisits;
  document.getElementById("medicalRecordCount").innerHTML = data.length;
}

function updateMedicalStats() {
  const allData = loadData("medical"),
    now = todayBS();
  const thisMonth = allData
      .filter((r) => r.bsY === now.y && r.bsM === now.m)
      .reduce((s, r) => s + r.amount, 0),
    thisYear = allData
      .filter((r) => r.bsY === now.y)
      .reduce((s, r) => s + r.amount, 0);
  document.getElementById("medicalThisMonth").innerHTML = "₹" + fmt(thisMonth);
  document.getElementById("medicalThisYear").innerHTML = "₹" + fmt(thisYear);
}

function renderMedicalCharts(data) {
  const types = [
      "Doctor Visit",
      "Medicine",
      "Lab Test",
      "Hospital",
      "Surgery",
      "Other",
    ],
    typeTotals = types.map((type) =>
      data.filter((r) => r.type === type).reduce((s, r) => s + r.amount, 0),
    );
  const typeCtx = document.getElementById("medicalTypeChart");
  if (typeCtx && typeTotals.some((v) => v > 0)) {
    if (medicalCharts.type) medicalCharts.type.destroy();
    medicalCharts.type = new Chart(typeCtx, {
      type: "doughnut",
      data: {
        labels: types,
        datasets: [
          {
            data: typeTotals,
            backgroundColor: [
              "#1a6fa8",
              "#7c3aed",
              "#d97706",
              "#c0392b",
              "#0f766e",
              "#6c757d",
            ],
            borderWidth: 2,
            borderColor: "#faf7f2",
          },
        ],
      },
      options: { plugins: { legend: { position: "bottom" } }, cutout: "60%" },
    });
  }
  const curBS = todayBS(),
    months6Labels = [],
    monthlyTotals = [];
  for (let i = 5; i >= 0; i--) {
    let m = curBS.m - i,
      y = curBS.y;
    while (m <= 0) {
      m += 12;
      y--;
    }
    months6Labels.push(BS_MONTH_NAMES_EN[m - 1].slice(0, 3));
    monthlyTotals.push(
      data
        .filter((r) => r.bsY === y && r.bsM === m)
        .reduce((s, r) => s + r.amount, 0),
    );
  }
  const trendCtx = document.getElementById("medicalTrendChart");
  if (trendCtx) {
    if (medicalCharts.trend) medicalCharts.trend.destroy();
    medicalCharts.trend = new Chart(trendCtx, {
      type: "line",
      data: {
        labels: months6Labels,
        datasets: [
          {
            label: "Medical Expenses (₹)",
            data: monthlyTotals,
            borderColor: "#c0392b",
            backgroundColor: "rgba(192,57,43,0.1)",
            fill: true,
            tension: 0.3,
            pointRadius: 4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: { legend: { position: "bottom" } },
      },
    });
  }
}

function populateMedicalYear() {
  const curY = currentBSYear(),
    el = document.getElementById("medBSYear");
  if (el) {
    el.innerHTML = '<option value="">All Years</option>';
    for (let y = curY + 1; y >= 2070; y--)
      el.innerHTML += `<option value="${y}" ${y === curY ? "selected" : ""}>${y}</option>`;
  }
}

// ============================================================
//  DASHBOARD
// ============================================================

function renderDashboard() {
  const year = document.getElementById("dashBSYear")?.value || "",
    month = document.getElementById("dashBSMonth")?.value || "";
  const hh = filterBS(loadData("household"), year, month),
    inc = filterBS(loadData("income"), year, month),
    agri = filterBS(loadData("agriculture"), year, month),
    ls = filterBS(loadData("livestock"), year, month),
    lab = filterBS(loadData("labour"), year, month),
    veh = filterBS(loadData("vehicle"), year, month),
    med = filterBS(loadData("medical"), year, month);
  const incomeTotal =
    inc.reduce((s, r) => s + r.amount, 0) +
    agri.filter((r) => r.type === "Income").reduce((s, r) => s + r.amount, 0) +
    ls.filter((r) => r.type === "Milk Sale").reduce((s, r) => s + r.amount, 0);
  const hhExp = hh.reduce((s, r) => s + r.amount, 0),
    agriExp = agri
      .filter((r) => r.type === "Expense")
      .reduce((s, r) => s + r.amount, 0),
    lsExp = ls
      .filter((r) => !["Milk Production", "Milk Sale"].includes(r.type))
      .reduce((s, r) => s + r.amount, 0),
    labExp = lab.reduce((s, r) => s + r.amount, 0),
    vehExp = veh.reduce((s, r) => s + r.amount, 0),
    medExp = med.reduce((s, r) => s + r.amount, 0),
    expTotal = hhExp + agriExp + lsExp + labExp + vehExp + medExp;
  const milkL = ls
      .filter((r) => r.type === "Milk Production")
      .reduce((s, r) => s + (r.quantity || 0), 0),
    cropKg = agri.reduce((s, r) => s + (r.quantity || 0), 0),
    milkIncome = milkL * 60,
    bal = incomeTotal - expTotal;

  // ===== UPDATE WELCOME MESSAGE AND DASHBOARD DATES =====
  const user = getCurrentUser();
  const welcomeNameSpan = document.getElementById("welcomeUserName");
  if (welcomeNameSpan && user) {
    welcomeNameSpan.textContent = user.name || user.username;
  }

  const now = new Date();
  const bsToday = adToBS(now);
  const dateBsEl = document.getElementById("dashboardDateBS");
  const dateAdEl = document.getElementById("dashboardDateAD");
  if (dateBsEl) {
    dateBsEl.innerHTML = `📅 ${bsToday.y} ${BS_MONTH_NAMES_NP[bsToday.m - 1]} ${bsToday.d}`;
  }
  if (dateAdEl) {
    dateAdEl.innerHTML = now.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }
  // ===== END OF ADDED CODE =====

  document.getElementById("totalIncome").innerHTML = "₹" + fmt(incomeTotal);
  document.getElementById("totalExpense").innerHTML = "₹" + fmt(expTotal);
  document.getElementById("vehicleTotal").innerHTML = "₹" + fmt(vehExp);
  document.getElementById("medicalTotal").innerHTML = "₹" + fmt(medExp);
  const balEl = document.getElementById("netBalance");
  balEl.innerHTML = (bal < 0 ? "−" : "") + "₹" + fmt(Math.abs(bal));
  balEl.style.color = bal >= 0 ? "var(--green)" : "var(--red)";
  document.getElementById("milkTotal").innerHTML = fmt(milkL) + " L";
  document.getElementById("labourTotal").innerHTML = "₹" + fmt(labExp);
  document.getElementById("cropYield").innerHTML = fmt(cropKg) + " kg";
  document.getElementById("milkValueTotal").innerHTML = "₹" + fmt(milkIncome);
  document.getElementById("milkValueBar").style.width =
    Math.min(100, (milkIncome / (incomeTotal || 1)) * 100) + "%";
  const sources = {
    Salary: inc.reduce((s, r) => s + r.amount, 0),
    Agriculture: agri
      .filter((r) => r.type === "Income")
      .reduce((s, r) => s + r.amount, 0),
    Livestock: ls
      .filter((r) => r.type === "Milk Sale")
      .reduce((s, r) => s + r.amount, 0),
  };
  const topSource = Object.entries(sources).sort((a, b) => b[1] - a[1])[0];
  document.getElementById("topIncomeSource").innerHTML = topSource[0];
  document.getElementById("topIncomeAmount").innerHTML =
    "₹" + fmt(topSource[1]);
  document.getElementById("topIncomeBar").style.width =
    Math.min(100, (topSource[1] / (incomeTotal || 1)) * 100) + "%";
  const expenses = {
    Household: hhExp,
    Agriculture: agriExp,
    Livestock: lsExp,
    Labour: labExp,
    Vehicle: vehExp,
    Medical: medExp,
  };
  const topExpense = Object.entries(expenses).sort((a, b) => b[1] - a[1])[0];
  document.getElementById("topExpenseCat").innerHTML = topExpense[0];
  document.getElementById("topExpenseAmount").innerHTML =
    "₹" + fmt(topExpense[1]);
  document.getElementById("topExpenseBar").style.width =
    Math.min(100, (topExpense[1] / (expTotal || 1)) * 100) + "%";
  document.getElementById("netProfit").innerHTML =
    "Net: " + (bal >= 0 ? "₹" + fmt(bal) : "-₹" + fmt(Math.abs(bal)));
  document.getElementById("totalExpensesLabel").innerHTML =
    "Total: ₹" + fmt(expTotal);
  document.getElementById("labourTotalLabel").innerHTML =
    "Total: ₹" + fmt(labExp);
  document.getElementById("avgMilkLabel").innerHTML =
    "Avg: " + fmt(milkL / 30) + " L/day";
  destroyChart("expensePie");
  charts["expensePie"] = new Chart(document.getElementById("expensePieChart"), {
    type: "doughnut",
    data: {
      labels: [
        "Household",
        "Agriculture",
        "Livestock",
        "Labour",
        "Vehicle",
        "Medical",
      ],
      datasets: [
        {
          data: [hhExp, agriExp, lsExp, labExp, vehExp, medExp],
          backgroundColor: [
            "#3a7d44",
            "#d97706",
            "#7c3aed",
            "#1a6fa8",
            "#e67e22",
            "#e74c3c",
          ],
          borderWidth: 2,
          borderColor: "#faf7f2",
        },
      ],
    },
    options: {
      plugins: {
        legend: { position: "bottom", labels: { font: { size: 10 } } },
      },
      cutout: "60%",
    },
  });
  const curBS = todayBS(),
    bar6Labels = [],
    incArr = [],
    expArr = [];
  for (let i = 5; i >= 0; i--) {
    let m = curBS.m - i,
      y = curBS.y;
    while (m <= 0) {
      m += 12;
      y--;
    }
    bar6Labels.push(BS_MONTH_NAMES_EN[m - 1].slice(0, 3));
    incArr.push(calculateMonthlyIncome(y, m));
    expArr.push(calculateMonthlyExpense(y, m));
  }
  destroyChart("incExpBar");
  charts["incExpBar"] = new Chart(document.getElementById("incomeExpenseBar"), {
    type: "bar",
    data: {
      labels: bar6Labels,
      datasets: [
        {
          label: "Income",
          data: incArr,
          backgroundColor: "rgba(58,125,68,0.8)",
          borderRadius: 6,
        },
        {
          label: "Expense",
          data: expArr,
          backgroundColor: "rgba(192,57,43,0.8)",
          borderRadius: 6,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: { legend: { position: "bottom" } },
    },
  });
  const allLS = loadData("livestock").filter(
      (r) => r.type === "Milk Production",
    ),
    milkLabels = [],
    milkVals = [];
  for (let i = 29; i >= 0; i--) {
    const dt = new Date();
    dt.setDate(dt.getDate() - i);
    const ds = dt.toISOString().split("T")[0];
    milkLabels.push(dt.getDate() + "/" + (dt.getMonth() + 1));
    milkVals.push(
      allLS
        .filter((r) => r.ad === ds)
        .reduce((s, r) => s + (r.quantity || 0), 0),
    );
  }
  destroyChart("milkLine");
  charts["milkLine"] = new Chart(document.getElementById("milkLineChart"), {
    type: "line",
    data: {
      labels: milkLabels,
      datasets: [
        {
          label: "Liters",
          data: milkVals,
          borderColor: "#d97706",
          backgroundColor: "rgba(217,119,6,0.1)",
          fill: true,
          tension: 0.3,
        },
      ],
    },
    options: {
      plugins: { legend: { display: false } },
      responsive: true,
      maintainAspectRatio: true,
    },
  });
  const maleWage = lab
      .filter((r) => r.gender === "Male")
      .reduce((s, r) => s + r.amount, 0),
    femaleWage = lab
      .filter((r) => r.gender === "Female")
      .reduce((s, r) => s + r.amount, 0);
  destroyChart("labourD");
  charts["labourD"] = new Chart(document.getElementById("labourDoughnut"), {
    type: "doughnut",
    data: {
      labels: ["Male Workers", "Female Workers"],
      datasets: [
        {
          data: [maleWage, femaleWage],
          backgroundColor: ["#1a6fa8", "#7c3aed"],
          borderWidth: 2,
          borderColor: "#faf7f2",
        },
      ],
    },
    options: { plugins: { legend: { position: "bottom" } }, cutout: "60%" },
  });
  const all = [
    ...hh.map((r) => ({
      ...r,
      mod: "Household",
      icon: "🏠",
      iconBg: "#e8d5b5",
      isExp: true,
      detail: r.category || (r.items ? r.items[0]?.itemName : "Expense"),
    })),
    ...inc.map((r) => ({
      ...r,
      mod: "Income",
      icon: "💰",
      iconBg: "#d4edda",
      isExp: false,
      detail: r.source,
    })),
    ...agri.map((r) => ({
      ...r,
      mod: "Agriculture",
      icon: "🌾",
      iconBg: "#fef3c7",
      isExp: r.type === "Expense",
      detail: r.type === "Income" ? `Sold ${r.crop}` : `Bought ${r.crop}`,
    })),
    ...ls.map((r) => ({
      ...r,
      mod: "Livestock",
      icon: "🐄",
      iconBg: "#ede9fe",
      isExp: !["Milk Sale"].includes(r.type),
      detail:
        r.type === "Milk Production" ? `${r.quantity || 0} L Milk` : r.type,
    })),
    ...lab.map((r) => ({
      ...r,
      mod: "Labour",
      icon: "👷",
      iconBg: "#e8f4fd",
      isExp: true,
      detail: `${r.task} - ${r.name || "Worker"}`,
    })),
    ...veh.map((r) => ({
      ...r,
      mod: "Vehicle",
      icon: "🚜",
      iconBg: "#fdecea",
      isExp: true,
      detail: `${r.vehicle} - ${r.category}`,
    })),
    ...med.map((r) => ({
      ...r,
      mod: "Medical",
      icon: "🏥",
      iconBg: "#fce4ec",
      isExp: true,
      detail: `${r.type} - ${r.member || "Family"}`,
    })),
  ]
    .sort((a, b) => (b.ad || "").localeCompare(a.ad || ""))
    .slice(0, 10);
  document.getElementById("recentActivity").innerHTML = all.length
    ? all
        .map(
          (r) =>
            `<div class="recent-item-enhanced"><div class="recent-icon-enhanced" style="background:${r.iconBg}20;border-left-color:${r.isExp ? "var(--red)" : "var(--green)"}"><span>${r.icon}</span></div><div class="recent-info"><div class="recent-module">${r.mod}</div><div class="recent-desc">${escapeHtml(r.detail || "Transaction")}</div><div class="recent-date-sm">📅 ${bsDisplay(r)}</div></div><div class="recent-amount-enhanced" style="color:${r.isExp ? "var(--red)" : "var(--green)"}"><span class="amount-sign">${r.isExp ? "−" : "+"}</span><span class="amount-value">₹${fmt(r.amount)}</span></div></div>`,
        )
        .join("")
    : `<div class="empty-recent"><span class="empty-icon">📭</span><p>No recent transactions</p><small>Add records to see them here</small></div>`;
}

function calculateMonthlyIncome(y, m) {
  return (
    filterBS(loadData("income"), String(y), String(m)).reduce(
      (s, r) => s + r.amount,
      0,
    ) +
    filterBS(loadData("agriculture"), String(y), String(m))
      .filter((r) => r.type === "Income")
      .reduce((s, r) => s + r.amount, 0) +
    filterBS(loadData("livestock"), String(y), String(m))
      .filter((r) => r.type === "Milk Sale")
      .reduce((s, r) => s + r.amount, 0)
  );
}
function calculateMonthlyExpense(y, m) {
  return (
    filterBS(loadData("household"), String(y), String(m)).reduce(
      (s, r) => s + r.amount,
      0,
    ) +
    filterBS(loadData("agriculture"), String(y), String(m))
      .filter((r) => r.type === "Expense")
      .reduce((s, r) => s + r.amount, 0) +
    filterBS(loadData("livestock"), String(y), String(m))
      .filter((r) => !["Milk Production", "Milk Sale"].includes(r.type))
      .reduce((s, r) => s + r.amount, 0) +
    filterBS(loadData("labour"), String(y), String(m)).reduce(
      (s, r) => s + r.amount,
      0,
    ) +
    filterBS(loadData("vehicle"), String(y), String(m)).reduce(
      (s, r) => s + r.amount,
      0,
    ) +
    filterBS(loadData("medical"), String(y), String(m)).reduce(
      (s, r) => s + r.amount,
      0,
    )
  );
}
function calculatePrevPeriodIncome(y, m) {
  return (
    filterBS(loadData("income"), String(y), String(m)).reduce(
      (s, r) => s + r.amount,
      0,
    ) +
    filterBS(loadData("agriculture"), String(y), String(m))
      .filter((r) => r.type === "Income")
      .reduce((s, r) => s + r.amount, 0) +
    filterBS(loadData("livestock"), String(y), String(m))
      .filter((r) => r.type === "Milk Sale")
      .reduce((s, r) => s + r.amount, 0)
  );
}
function calculatePrevPeriodExpense(y, m) {
  return (
    filterBS(loadData("household"), String(y), String(m)).reduce(
      (s, r) => s + r.amount,
      0,
    ) +
    filterBS(loadData("agriculture"), String(y), String(m))
      .filter((r) => r.type === "Expense")
      .reduce((s, r) => s + r.amount, 0) +
    filterBS(loadData("livestock"), String(y), String(m))
      .filter((r) => !["Milk Production", "Milk Sale"].includes(r.type))
      .reduce((s, r) => s + r.amount, 0) +
    filterBS(loadData("labour"), String(y), String(m)).reduce(
      (s, r) => s + r.amount,
      0,
    ) +
    filterBS(loadData("vehicle"), String(y), String(m)).reduce(
      (s, r) => s + r.amount,
      0,
    ) +
    filterBS(loadData("medical"), String(y), String(m)).reduce(
      (s, r) => s + r.amount,
      0,
    )
  );
}

function destroyChart(k) {
  if (charts[k]) {
    charts[k].destroy();
    delete charts[k];
  }
}

// ============================================================
//  EXPORT FUNCTIONS
// ============================================================

function exportCSV(module) {
  const data = loadData(module);
  if (!data.length) {
    showToast("No data in " + module, "error");
    return;
  }
  const headers = {
    household: [
      "BS_Date",
      "AD_Date",
      "Bill_category",
      "Amount",
      "Items_detail",
      "Notes",
    ],
    income: ["BS_Date", "AD_Date", "Source", "Member", "Amount", "Notes"],
    agriculture: [
      "BS_Date",
      "AD_Date",
      "Type",
      "Crop",
      "Season",
      "Qty_kg",
      "Amount",
      "Notes",
    ],
    livestock: [
      "BS_Date",
      "AD_Date",
      "Animal",
      "Type",
      "Qty_Liters",
      "Amount",
      "Notes",
    ],
    labour: [
      "BS_Date",
      "AD_Date",
      "Name",
      "Gender",
      "Task",
      "Hours",
      "Days",
      "Wage_per_Day",
      "Total_Amount",
      "Notes",
    ],
    vehicle: ["BS_Date", "AD_Date", "Vehicle", "Category", "Amount", "Notes"],
    medical: [
      "BS_Date",
      "AD_Date",
      "Member",
      "Type",
      "Amount",
      "Doctor_Hospital",
      "Notes",
    ],
    family: ["Name", "Relation", "Gender", "Age", "Phone", "Notes"],
  };
  const bsStr = (r) =>
    r.bsY
      ? `${r.bsY}-${String(r.bsM).padStart(2, "0")}-${String(r.bsD).padStart(2, "0")}`
      : "";
  const fields = {
    household: (r) => [
      bsStr(r),
      r.ad || "",
      r.category || "",
      r.amount,
      (r.items || [])
        .map(
          (i) =>
            `${i.itemType}: ${i.itemName} ${i.quantity}×${i.rate}=${i.lineTotal}`,
        )
        .join(" | "),
      r.notes || "",
    ],
    income: (r) => [
      bsStr(r),
      r.ad || "",
      r.source,
      r.member || "",
      r.amount,
      r.notes || "",
    ],
    agriculture: (r) => [
      bsStr(r),
      r.ad || "",
      r.type,
      r.crop,
      r.season,
      r.quantity,
      r.amount,
      r.notes || "",
    ],
    livestock: (r) => [
      bsStr(r),
      r.ad || "",
      r.animal,
      r.type,
      r.quantity,
      r.amount,
      r.notes || "",
    ],
    labour: (r) => [
      bsStr(r),
      r.ad || "",
      r.name,
      r.gender,
      r.task,
      r.hours || "",
      r.days,
      r.wage,
      r.amount,
      r.notes || "",
    ],
    vehicle: (r) => [
      bsStr(r),
      r.ad || "",
      r.vehicle,
      r.category,
      r.amount,
      r.notes || "",
    ],
    medical: (r) => [
      bsStr(r),
      r.ad || "",
      r.member,
      r.type,
      r.amount,
      r.doctor || "",
      r.notes || "",
    ],
    family: (r) => [
      r.name,
      r.relation,
      r.gender,
      r.age || "",
      r.phone || "",
      r.notes || "",
    ],
  };
  const rows = [headers[module], ...data.map((r) => fields[module](r))];
  const csv = rows
    .map((row) =>
      row.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(","),
    )
    .join("\n");
  const blob = new Blob([csv], { type: "text/csv" }),
    url = URL.createObjectURL(blob),
    a = document.createElement("a");
  a.href = url;
  a.download = `GharKhata_${module}_${new Date().toISOString().split("T")[0]}.csv`;
  a.click();
  URL.revokeObjectURL(url);
  showToast(module + " exported!", "success");
}

function refreshRecentTransactions() {
  const year = document.getElementById("dashBSYear")?.value || "",
    month = document.getElementById("dashBSMonth")?.value || "";
  const hh = filterBS(loadData("household"), year, month),
    inc = filterBS(loadData("income"), year, month),
    agri = filterBS(loadData("agriculture"), year, month),
    ls = filterBS(loadData("livestock"), year, month),
    lab = filterBS(loadData("labour"), year, month),
    veh = filterBS(loadData("vehicle"), year, month),
    med = filterBS(loadData("medical"), year, month);
  const all = [
    ...hh.map((r) => ({ ...r, mod: "Household", icon: "🏠", isExp: true })),
    ...inc.map((r) => ({ ...r, mod: "Income", icon: "💵", isExp: false })),
    ...agri.map((r) => ({
      ...r,
      mod: "Agriculture",
      icon: "🌾",
      isExp: r.type === "Expense",
    })),
    ...ls.map((r) => ({
      ...r,
      mod: "Livestock",
      icon: "🐄",
      isExp: !["Milk Sale"].includes(r.type),
    })),
    ...lab.map((r) => ({ ...r, mod: "Labour", icon: "👷", isExp: true })),
    ...veh.map((r) => ({ ...r, mod: "Vehicle", icon: "🚜", isExp: true })),
    ...med.map((r) => ({ ...r, mod: "Medical", icon: "🏥", isExp: true })),
  ]
    .sort((a, b) => (b.ad || "").localeCompare(a.ad || ""))
    .slice(0, 8);
  const recentContainer = document.getElementById("recentActivity");
  if (recentContainer) {
    recentContainer.innerHTML = all.length
      ? all
          .map(
            (r) =>
              `<div class="recent-item-modern"><div class="recent-icon">${r.icon}</div><div class="recent-details"><div class="recent-title">${r.mod}</div><div class="recent-sub">${r.category || r.source || r.type || r.task || r.vehicle || "Transaction"}</div></div><div class="recent-amount ${r.isExp ? "expense" : "income"}">${r.isExp ? "-" : "+"}₹${fmt(r.amount)}</div><div class="recent-date">${bsDisplay(r)}</div></div>`,
          )
          .join("")
      : `<div style="text-align:center;padding:40px;color:var(--text-3)">📭 No recent transactions</div>`;
  }
}

function showToast(msg, type = "") {
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.className = "toast " + type + " show";
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 3200);
}

// ============================================================
//  SEED DEMO DATA
// ============================================================

function seedDemoIfEmpty() {
  const hasAny = Object.keys(KEYS).some(
    (k) => !["users", "session"].includes(k) && loadData(k).length > 0,
  );
  if (hasAny) return;
  const makeD = (bsY, bsM, bsD) => makeDateObj(bsY, bsM, bsD);
  saveData("family", [
    {
      id: uid(),
      name: "Ram Prasad Sharma",
      relation: "Father",
      gender: "Male",
      age: 55,
      phone: "9801234567",
      notes: "Head of household",
    },
    {
      id: uid(),
      name: "Sita Devi Sharma",
      relation: "Mother",
      gender: "Female",
      age: 50,
      phone: "9807654321",
      notes: "",
    },
    {
      id: uid(),
      name: "Hari Sharma",
      relation: "Son",
      gender: "Male",
      age: 25,
      phone: "9800011223",
      notes: "Working in Kathmandu",
    },
    {
      id: uid(),
      name: "Gita Sharma",
      relation: "Daughter",
      gender: "Female",
      age: 20,
      phone: "",
      notes: "Student",
    },
  ]);
  saveData("income", [
    {
      id: uid(),
      ...makeD(2081, 1, 15),
      source: "Remittance",
      member: "Hari Sharma",
      amount: 25000,
      notes: "Monthly from Hari",
    },
    {
      id: uid(),
      ...makeD(2081, 1, 5),
      source: "Agriculture",
      member: "Ram Prasad Sharma",
      amount: 17000,
      notes: "Rice sale",
    },
    {
      id: uid(),
      ...makeD(2080, 12, 20),
      source: "Livestock",
      member: "Sita Devi Sharma",
      amount: 4500,
      notes: "Milk sale this month",
    },
  ]);
  saveData("household", [
    {
      id: uid(),
      ...makeD(2081, 1, 10),
      category: MIXED_BILL_CAT,
      amount: 2950,
      items: [
        {
          itemType: "Grains & Cereals",
          itemName: "Rice 25kg",
          quantity: 1,
          rate: 1800,
          lineTotal: 1800,
        },
        {
          itemType: "Vegetables",
          itemName: "Potato",
          quantity: 5,
          rate: 70,
          lineTotal: 350,
        },
        {
          itemType: "Oil & Ghee",
          itemName: "Mustard oil",
          quantity: 2,
          rate: 400,
          lineTotal: 800,
        },
      ],
      notes: "Monthly market run",
    },
    {
      id: uid(),
      ...makeD(2081, 1, 8),
      category: "Household Essentials",
      amount: 1200,
      items: [
        {
          itemType: "Household Essentials",
          itemName: "Electricity bill",
          quantity: 1,
          rate: 1200,
          lineTotal: 1200,
        },
      ],
      notes: "",
    },
    {
      id: uid(),
      ...makeD(2080, 12, 15),
      category: "Other",
      amount: 3500,
      items: [
        {
          itemType: "Other",
          itemName: "School fees Gita",
          quantity: 1,
          rate: 3500,
          lineTotal: 3500,
        },
      ],
      notes: "",
    },
    {
      id: uid(),
      ...makeD(2080, 12, 28),
      category: MIXED_BILL_CAT,
      amount: 1800,
      items: [
        {
          itemType: "Household Essentials",
          itemName: "Cloth",
          quantity: 1,
          rate: 1100,
          lineTotal: 1100,
        },
        {
          itemType: "Packaged Food / Snacks",
          itemName: "Sweets",
          quantity: 1,
          rate: 700,
          lineTotal: 700,
        },
      ],
      notes: "Festival shopping",
    },
  ]);
  saveData("agriculture", [
    {
      id: uid(),
      ...makeD(2081, 1, 1),
      type: "Income",
      crop: "Rice",
      season: "Kharif (Monsoon)",
      quantity: 850,
      amount: 17000,
      notes: "Paddy sold to market",
    },
    {
      id: uid(),
      ...makeD(2081, 1, 3),
      type: "Expense",
      crop: "Jaighas",
      season: "Rabi (Winter)",
      quantity: 0,
      amount: 2400,
      notes: "Fertilizer",
    },
    {
      id: uid(),
      ...makeD(2080, 12, 5),
      type: "Income",
      crop: "Wheat",
      season: "Rabi (Winter)",
      quantity: 600,
      amount: 13200,
      notes: "Wheat sold",
    },
    {
      id: uid(),
      ...makeD(2080, 12, 2),
      type: "Expense",
      crop: "Rice",
      season: "Kharif (Monsoon)",
      quantity: 0,
      amount: 1800,
      notes: "Seeds purchased",
    },
  ]);
  saveData("livestock", [
    {
      id: uid(),
      ...makeD(2081, 1, 5),
      animal: "Cow",
      type: "Milk Production",
      quantity: 12,
      amount: 0,
      notes: "Morning + evening",
    },
    {
      id: uid(),
      ...makeD(2081, 1, 6),
      animal: "Cow",
      type: "Milk Production",
      quantity: 11,
      amount: 0,
      notes: "",
    },
    {
      id: uid(),
      ...makeD(2081, 1, 7),
      animal: "Cow",
      type: "Milk Sale",
      quantity: 20,
      amount: 1000,
      notes: "Sold to neighbor",
    },
    {
      id: uid(),
      ...makeD(2081, 1, 4),
      animal: "Cow",
      type: "Feed Expense",
      quantity: 0,
      amount: 800,
      notes: "Hay and feed",
    },
    {
      id: uid(),
      ...makeD(2080, 12, 25),
      animal: "Cow",
      type: "Vet Expense",
      quantity: 0,
      amount: 600,
      notes: "Routine checkup",
    },
  ]);
  saveData("labour", [
    {
      id: uid(),
      ...makeD(2081, 1, 3),
      name: "Ram Bahadur",
      gender: "Male",
      task: "Grass Cutting",
      hours: 8,
      days: 3,
      wage: 500,
      amount: 1500,
      notes: "",
    },
    {
      id: uid(),
      ...makeD(2081, 1, 8),
      name: "Sita Devi",
      gender: "Female",
      task: "Weeding",
      hours: 6,
      days: 2,
      wage: 400,
      amount: 800,
      notes: "Upper field",
    },
    {
      id: uid(),
      ...makeD(2080, 12, 20),
      name: "Hari Prasad",
      gender: "Male",
      task: "Ploughing",
      hours: 8,
      days: 2.5,
      wage: 600,
      amount: 1500,
      notes: "With tractor",
    },
    {
      id: uid(),
      ...makeD(2081, 1, 12),
      name: "Maya Thapa",
      gender: "Female",
      task: "Harvesting",
      hours: 7,
      days: 4,
      wage: 420,
      amount: 1680,
      notes: "Rice harvest",
    },
  ]);
  saveData("vehicle", [
    {
      id: uid(),
      ...makeD(2081, 1, 2),
      vehicle: "Tractor",
      category: "Fuel",
      amount: 1200,
      notes: "Diesel 20L",
    },
    {
      id: uid(),
      ...makeD(2081, 1, 9),
      vehicle: "Bike",
      category: "Maintenance",
      amount: 450,
      notes: "Oil change",
    },
    {
      id: uid(),
      ...makeD(2080, 12, 18),
      vehicle: "Scooter",
      category: "Fuel",
      amount: 300,
      notes: "Petrol",
    },
    {
      id: uid(),
      ...makeD(2080, 12, 25),
      vehicle: "Tractor",
      category: "Repair",
      amount: 3500,
      notes: "Hydraulic repair",
    },
  ]);
  saveData("medical", [
    {
      id: uid(),
      ...makeD(2081, 1, 6),
      member: "Ram Prasad Sharma",
      type: "Doctor Visit",
      amount: 500,
      doctor: "Dr. Sharma",
      notes: "BP checkup",
    },
    {
      id: uid(),
      ...makeD(2081, 1, 11),
      member: "Sita Devi Sharma",
      type: "Medicine",
      amount: 820,
      doctor: "City Pharmacy",
      notes: "Thyroid medicine",
    },
    {
      id: uid(),
      ...makeD(2080, 12, 28),
      member: "Gita Sharma",
      type: "Lab Test",
      amount: 1200,
      doctor: "Pathology Lab",
      notes: "Blood test",
    },
  ]);
}

// ============================================================
//  INITIALIZATION
// ============================================================

function clearAllUI() {
  // Clear all table bodies
  const tableIds = [
    "householdBody",
    "incomeBody",
    "agricultureBody",
    "livestockBody",
    "labourBody",
    "vehicleBody",
    "medicalBody",
  ];
  tableIds.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = "";
  });

  // Destroy all chart instances (only if they have a destroy method)
  const chartIds = [
    "incomeChart",
    "expensePieChart",
    "milkLineChart",
    "labourTrendChart",
    "labourTaskChart",
  ];
  chartIds.forEach((id) => {
    if (window[id] && typeof window[id].destroy === "function") {
      try {
        window[id].destroy();
      } catch (e) {
        console.error("Error destroying chart " + id, e);
      }
      window[id] = null;
    }
  });

  // Clear labour charts
  if (typeof labourCharts !== "undefined" && labourCharts) {
    Object.keys(labourCharts).forEach((key) => {
      if (
        labourCharts[key] &&
        typeof labourCharts[key].destroy === "function"
      ) {
        try {
          labourCharts[key].destroy();
        } catch (e) {}
      }
    });
    labourCharts = {};
  }

  // Clear vehicle charts
  if (typeof vehicleCharts !== "undefined" && vehicleCharts) {
    Object.keys(vehicleCharts).forEach((key) => {
      if (
        vehicleCharts[key] &&
        typeof vehicleCharts[key].destroy === "function"
      ) {
        try {
          vehicleCharts[key].destroy();
        } catch (e) {}
      }
    });
    vehicleCharts = {};
  }

  // Clear medical charts
  if (typeof medicalCharts !== "undefined" && medicalCharts) {
    Object.keys(medicalCharts).forEach((key) => {
      if (
        medicalCharts[key] &&
        typeof medicalCharts[key].destroy === "function"
      ) {
        try {
          medicalCharts[key].destroy();
        } catch (e) {}
      }
    });
    medicalCharts = {};
  }
}

function initApp() {
  console.log("0. initApp started");
  updateTopbarDates();
  populateBSYears();
  populateMemberDropdowns();
  populateHouseholdYear();
  populateAgricultureYear();
  populateVehicleYear();
  populateMedicalYear();
  loadMilkRateSettings();
  const curY = currentBSYear();
  const dashYEl = document.getElementById("dashBSYear");
  if (dashYEl) dashYEl.value = curY;

  // Make sure dashboard is rendered and active
  renderDashboard();
  renderHouseholdTable();
  renderAgricultureTable();
  renderVehicleTable();
  renderMedical();
  updateHouseholdStats();

  // Ensure dashboard page is active
  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.remove("active"));
  const dashboardPage = document.getElementById("page-dashboard");
  if (dashboardPage) dashboardPage.classList.add("active");

  // Update nav active state
  document.querySelectorAll(".nav-item").forEach((n) => {
    n.classList.remove("active");
    if (n.dataset.page === "dashboard") n.classList.add("active");
  });

  // Update topbar title
  const titleEl = document.getElementById("topbarTitle");
  if (titleEl) titleEl.textContent = "Dashboard";

  // Reset currentPage variable
  currentPage = "dashboard";

  // Setup navigation event listeners
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const page = item.dataset.page;
      if (page) navigate(page);
    });
  });

  // Add event listeners for buttons that need them
  const backupBtn = document.getElementById("backupBtn");
  if (backupBtn) backupBtn.onclick = backupAllData;

  const restoreBtn = document.getElementById("restoreBtn");
  if (restoreBtn) restoreBtn.onclick = restoreBackup;

  const searchBtn = document.getElementById("globalSearchBtn");
  if (searchBtn) searchBtn.onclick = showGlobalSearch;

  const exportAllBtn = document.getElementById("exportAllBtn");
  if (exportAllBtn) exportAllBtn.onclick = exportAllCSV;
}

function startApp(user) {
  clearAllUI();
  document.getElementById("loginScreen").style.display = "none";
  document.getElementById("appShell").style.display = "flex";
  document.getElementById("sidebarUser").textContent =
    user.name || user.username;
  seedDemoIfEmpty();
  migrateHouseholdLegacyData();
  try {
    initApp();
  } catch (err) {
    console.error("initApp() failed during startApp:", err);
  }

  // FORCE NAVIGATE TO DASHBOARD FOR EVERY USER
  navigate("dashboard");
}

// Override renderTable for household, agriculture, vehicle, medical
const originalRenderTable = window.renderTable;
window.renderTable = function (module) {
  if (module === "household") renderHouseholdTable();
  else if (module === "agriculture") renderAgricultureTable();
  else if (module === "vehicle") renderVehicleTable();
  else if (module === "medical") renderMedical();
  else if (originalRenderTable) originalRenderTable(module);
};

// ============================================================
//  FEATURE 1: DATA BACKUP & RESTORE
// ============================================================

function backupAllData() {
  try {
    const allData = {};
    const modules = [
      "household",
      "income",
      "agriculture",
      "livestock",
      "labour",
      "vehicle",
      "medical",
      "family",
    ];

    modules.forEach((module) => {
      allData[module] = loadData(module);
    });

    allData["users"] = loadUsers();

    const dataStr = JSON.stringify(allData, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `GharKhata_Backup_${new Date().toISOString().split("T")[0]}.json`;

    // Add the link to the document temporarily
    document.body.appendChild(a);

    // Trigger the download
    a.click();

    // Clean up
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    showToast("✅ Full backup downloaded! Keep it safe.", "success");
  } catch (error) {
    console.error("Backup error:", error);
    showToast("❌ Failed to create backup. Please try again.", "error");
  }
}

function restoreBackup() {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".json";
  input.onchange = function (e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (evt) {
      try {
        const backup = JSON.parse(evt.target.result);
        let restoredCount = 0;

        const modules = [
          "household",
          "income",
          "agriculture",
          "livestock",
          "labour",
          "vehicle",
          "medical",
          "family",
          "users",
        ];
        modules.forEach((module) => {
          if (backup[module] && Array.isArray(backup[module])) {
            if (module === "users") {
              saveUsers(backup[module]);
            } else {
              saveData(module, backup[module]);
            }
            restoredCount++;
          }
        });

        showToast(
          `✅ Restored ${restoredCount} modules! Refreshing...`,
          "success",
        );
        setTimeout(() => location.reload(), 1500);
      } catch (err) {
        console.error("Restore error:", err);
        showToast("❌ Invalid backup file or corrupted data", "error");
      }
    };
    reader.readAsText(file);
  };
  input.click();
}

function exportAllCSV() {
  const modules = [
    "household",
    "income",
    "agriculture",
    "livestock",
    "labour",
    "vehicle",
    "medical",
  ];

  let csvContent = "Module,BS_Date,AD_Date,Details,Amount,Notes\n";

  modules.forEach((module) => {
    const data = loadData(module);
    data.forEach((record) => {
      const bsDate = bsDisplay(record);
      const adDate = record.ad || "";
      const amount = record.amount || 0;
      const notes = (record.notes || "").replace(/"/g, '""');

      let details = "";
      if (module === "household") {
        details = `${record.category || ""}`;
        if (record.items && record.items.length) {
          details += ` (${record.items.length} items)`;
        }
      } else if (module === "income") {
        details = `${record.source || ""} - ${record.member || ""}`;
      } else if (module === "agriculture") {
        details = `${record.type || ""} - ${record.crop || ""} (${record.quantity || 0} kg)`;
      } else if (module === "livestock") {
        details = `${record.type || ""} - ${record.animal || ""} (${record.quantity || 0} L)`;
      } else if (module === "labour") {
        details = `${record.name || ""} - ${record.task || ""} (${record.days || 0} days)`;
      } else if (module === "vehicle") {
        details = `${record.vehicle || ""} - ${record.category || ""}`;
      } else if (module === "medical") {
        details = `${record.member || ""} - ${record.type || ""}`;
      }

      csvContent += `"${module}","${bsDate}","${adDate}","${details.replace(/"/g, '""')}","${amount}","${notes}"\n`;
    });
  });

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `GharKhata_All_Data_${new Date().toISOString().split("T")[0]}.csv`;

  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  showToast("✅ All data exported to CSV!", "success");
}

// ============================================================
//  FEATURE 2: PRINT REPORTS
// ============================================================

function printModuleReport(module) {
  let data = loadData(module);
  const user = getCurrentUser();
  const now = new Date();
  const bsNow = todayBS();

  if (module === "income") {
    return `
        <div class="modern-form-container">
            <!-- Date Section -->
            <div class="form-section">
                <div class="form-section-title">
                    <span class="section-icon">📅</span>
                    <span>Date Information</span>
                </div>
                <div class="date-picker-grid">
                    <div class="input-group-modern">
                        <label>BS Year</label>
                        <select id="f_bsy" onchange="updateDayOptions()" class="modern-select">
                            ${(() => {
                              const curY = currentBSYear();
                              let opts = "";
                              for (let y = curY + 2; y >= 2070; y--) {
                                opts += `<option value="${y}" ${y === (bsY || curY) ? "selected" : ""}>${y}</option>`;
                              }
                              return opts;
                            })()}
                        </select>
                    </div>
                    <div class="input-group-modern">
                        <label>BS Month</label>
                        <select id="f_bsm" onchange="updateDayOptions()" class="modern-select">
                            ${BS_MONTH_NAMES_NP.map((name, i) => {
                              const monthNum = i + 1;
                              return `<option value="${monthNum}" ${monthNum === (bsM || todayBS().m) ? "selected" : ""}>${name} (${monthNum})</option>`;
                            }).join("")}
                        </select>
                    </div>
                    <div class="input-group-modern">
                        <label>BS Day</label>
                        <select id="f_bsd" class="modern-select">
                            ${(() => {
                              const days =
                                BS_DATA[bsY || currentBSYear()]?.[
                                  (bsM || todayBS().m) - 1
                                ] || 30;
                              let opts = "";
                              for (let d = 1; d <= days; d++) {
                                opts += `<option value="${d}" ${d === (bsD || todayBS().d) ? "selected" : ""}>${d}</option>`;
                              }
                              return opts;
                            })()}
                        </select>
                    </div>
                    <div class="input-group-modern">
                        <label>Quick Date</label>
                        <div class="quick-date-btns">
                            <button type="button" class="quick-date-btn" onclick="setTodayDate()">Today</button>
                            <button type="button" class="quick-date-btn" onclick="setYesterdayDate()">Yesterday</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Source Section -->
            <div class="form-section">
                <div class="form-section-title">
                    <span class="section-icon">💰</span>
                    <span>Income Details</span>
                </div>
                <div class="source-grid">
                    ${[
                      "Salary",
                      "Business",
                      "Agriculture",
                      "Livestock",
                      "Rental",
                      "Remittance",
                      "Other",
                    ]
                      .map(
                        (s) => `
                        <div class="source-card ${fv(r, "source") === s ? "selected" : ""}" onclick="selectSource('${s}')">
                            <span class="source-card-icon">${getSourceIcon(s)}</span>
                            <span class="source-card-name">${s}</span>
                            <span class="source-card-check">✓</span>
                        </div>
                    `,
                      )
                      .join("")}
                    <input type="hidden" id="f_source" value="${fv(r, "source", "Salary")}">
                </div>
            </div>

            <!-- Amount Section -->
            <div class="form-section">
                <div class="form-section-title">
                    <span class="section-icon">💵</span>
                    <span>Amount</span>
                </div>
                <div class="amount-input-group">
                    <div class="amount-wrapper">
                        <span class="currency-symbol">₹</span>
                        <input type="number" id="f_amount" class="amount-input" value="${fv(r, "amount", 0)}" min="0" step="100" placeholder="0" oninput="formatAmount()">
                    </div>
                    <div class="amount-presets-modern">
                        <button type="button" class="preset-btn" onclick="setAmount(500)">₹500</button>
                        <button type="button" class="preset-btn" onclick="setAmount(1000)">₹1,000</button>
                        <button type="button" class="preset-btn" onclick="setAmount(5000)">₹5,000</button>
                        <button type="button" class="preset-btn" onclick="setAmount(10000)">₹10,000</button>
                        <button type="button" class="preset-btn" onclick="setAmount(25000)">₹25,000</button>
                        <button type="button" class="preset-btn" onclick="setAmount(50000)">₹50,000</button>
                    </div>
                </div>
            </div>

            <!-- Member Section -->
            <div class="form-section">
                <div class="form-section-title">
                    <span class="section-icon">👤</span>
                    <span>Family Member</span>
                </div>
                <div class="member-selector">
                    <select id="f_member" class="modern-select" onchange="toggleMemberInput(this)">
                        ${memberOptions(fv(r, "member"))}
                    </select>
                    <div id="memberInputWrap" style="${fv(r, "member") === "Other" ? "display:block" : "display:none"}; margin-top: 12px;">
                        <input type="text" id="f_memberName" class="modern-input" value="${fv(r, "memberName")}" placeholder="Enter member name">
                    </div>
                </div>
            </div>

            <!-- Notes Section -->
            <div class="form-section">
                <div class="form-section-title">
                    <span class="section-icon">📝</span>
                    <span>Notes (Optional)</span>
                </div>
                <textarea id="f_notes" class="modern-textarea" placeholder="Add any additional notes...">${fv(r, "notes")}</textarea>
            </div>
        </div>
    `;
  }

  if (module === "household") {
    const year = document.getElementById("hhBSYear")?.value || "";
    const month = document.getElementById("hhBSMonth")?.value || "";
    if (year) data = data.filter((r) => r.bsY == year);
    if (month) data = data.filter((r) => r.bsM == month);
  } else if (module === "income") {
    const year = document.getElementById("incBSYear")?.value || "";
    const month = document.getElementById("incBSMonth")?.value || "";
    if (year) data = data.filter((r) => r.bsY == year);
    if (month) data = data.filter((r) => r.bsM == month);
  } else if (module === "agriculture") {
    const year = document.getElementById("agriBSYear")?.value || "";
    const month = document.getElementById("agriBSMonth")?.value || "";
    if (year) data = data.filter((r) => r.bsY == year);
    if (month) data = data.filter((r) => r.bsM == month);
  }

  data = sortByDate(data);
  const total = data.reduce((s, r) => s + (r.amount || 0), 0);

  let tableHtml = "";
  let headers = "";

  if (module === "household") {
    headers = "<th>Date</th><th>Category</th><th>Amount</th><th>Notes</th>";
    tableHtml = data
      .map(
        (r) =>
          `<tr><td>${bsDisplay(r)}</td><td>${escapeHtml(r.category || "—")}</td><td style="text-align:right">₹${fmt(r.amount)}</td><td>${escapeHtml((r.notes || "").substring(0, 50))}</td></tr>`,
      )
      .join("");
  } else if (module === "income") {
    headers = "<th>Date</th><th>Source</th><th>Member</th><th>Amount</th>";
    tableHtml = data
      .map(
        (r) =>
          `<tr><td>${bsDisplay(r)}</td><td>${escapeHtml(r.source || "—")}</td><td>${escapeHtml(r.member || "—")}</td><td style="text-align:right">₹${fmt(r.amount)}</td></tr>`,
      )
      .join("");
  } else if (module === "agriculture") {
    headers =
      "<th>Date</th><th>Crop</th><th>Quantity</th><th>Amount</th><th>Type</th>";
    tableHtml = data
      .map(
        (r) =>
          `<tr><td>${bsDisplay(r)}</td><td>${escapeHtml(r.crop || "—")}</td><td>${r.quantity || 0} kg</td><td style="text-align:right">₹${fmt(r.amount)}</td><td>${r.type || "—"}</td></tr>`,
      )
      .join("");
  } else if (module === "vehicle") {
    headers = "<th>Date</th><th>Vehicle</th><th>Category</th><th>Amount</th>";
    tableHtml = data
      .map(
        (r) =>
          `<tr><td>${bsDisplay(r)}</td><td>${escapeHtml(r.vehicle || "—")}</td><td>${escapeHtml(r.category || "—")}</td><td style="text-align:right">₹${fmt(r.amount)}</td></tr>`,
      )
      .join("");
  } else if (module === "medical") {
    headers = "<th>Date</th><th>Member</th><th>Type</th><th>Amount</th>";
    tableHtml = data
      .map(
        (r) =>
          `<tr><td>${bsDisplay(r)}</td><td>${escapeHtml(r.member || "—")}</td><td>${escapeHtml(r.type || "—")}</td><td style="text-align:right">₹${fmt(r.amount)}</td></tr>`,
      )
      .join("");
  }

  const moduleNames = {
    household: "Household Expenses",
    income: "Income Records",
    agriculture: "Agriculture Records",
    livestock: "Livestock Records",
    labour: "Labour Records",
    vehicle: "Vehicle Expenses",
    medical: "Medical Records",
  };

  const printWindow = window.open("", "_blank");
  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>GharKhata - ${moduleNames[module]} Report</title>
      <style>
        body { font-family: Arial, sans-serif; padding: 40px; max-width: 1000px; margin: 0 auto; }
        .header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #b5651d; padding-bottom: 20px; }
        h1 { color: #b5651d; margin: 0; }
        table { width: 100%; border-collapse: collapse; margin: 20px 0; }
        th { background: #f5f0e8; padding: 10px; text-align: left; border-bottom: 2px solid #ddd; }
        td { padding: 8px 10px; border-bottom: 1px solid #eee; }
        .summary { background: #f5f0e8; padding: 15px; border-radius: 8px; margin: 20px 0; }
        .footer { text-align: center; font-size: 11px; color: #999; margin-top: 40px; padding-top: 20px; border-top: 1px solid #ddd; }
        button { margin: 10px; padding: 10px 20px; cursor: pointer; }
      </style>
    </head>
    <body>
      <div class="header">
        <div style="font-size: 48px;">🏡</div>
        <h1>GharKhata - ${moduleNames[module]}</h1>
        <p>Generated: ${now.toLocaleDateString()} | ${bsNow.y} ${BS_MONTH_NAMES_NP[bsNow.m - 1]} ${bsNow.d}</p>
        <p>User: ${user?.name || user?.username || "User"}</p>
        <p>Total Records: ${data.length}</p>
      </div>
      <div class="summary">
        <strong>💰 Total Amount:</strong> ₹${fmt(total)}
      </div>
      <table>
        <thead><tr>${headers}</tr></thead>
        <tbody>${tableHtml || '<tr><td colspan="4" style="text-align:center">No records found</td></tr>'}</tbody>
      </table>
      <div class="footer">
        <p>GharKhata - Household Management System</p>
      </div>
      <div style="text-align: center;">
        <button onclick="window.print()">🖨️ Print</button>
        <button onclick="window.close()">✖️ Close</button>
      </div>
    </body>
    </html>
  `);
  printWindow.document.close();
}

// ============================================================
//  FEATURE 3: GLOBAL SEARCH
// ============================================================

let searchModal = null;

function showGlobalSearch() {
  if (!searchModal) {
    searchModal = document.createElement("div");
    searchModal.id = "globalSearchModal";
    searchModal.style.cssText = `
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,0.7);
      z-index: 1000;
      justify-content: center;
      align-items: flex-start;
      padding-top: 80px;
    `;
    searchModal.innerHTML = `
      <div style="background: white; max-width: 700px; width: 90%; margin: 0 auto; border-radius: 16px; box-shadow: 0 20px 60px rgba(0,0,0,0.3); overflow: hidden;">
        <div style="padding: 20px; border-bottom: 1px solid #ddd;">
          <div style="display: flex; gap: 10px;">
            <input type="text" id="globalSearchInput" placeholder="🔍 Search across all modules... (min 2 characters)" style="flex: 1; padding: 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 16px;">
            <button onclick="closeGlobalSearch()" style="padding: 12px 20px; background: #c0392b; color: white; border: none; border-radius: 8px; cursor: pointer;">✖ Close</button>
          </div>
        </div>
        <div id="globalSearchResults" style="max-height: 500px; overflow-y: auto; padding: 20px;">
          <div style="text-align: center; color: #999; padding: 40px;">Type at least 2 characters to search</div>
        </div>
      </div>
    `;
    document.body.appendChild(searchModal);

    const searchInput = document.getElementById("globalSearchInput");
    if (searchInput) {
      searchInput.addEventListener("input", function (e) {
        performGlobalSearch(e.target.value);
      });
      searchInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") performGlobalSearch(e.target.value);
      });
    }
  }

  searchModal.style.display = "flex";
  const searchInput = document.getElementById("globalSearchInput");
  if (searchInput) {
    searchInput.value = "";
    searchInput.focus();
  }
  const resultsDiv = document.getElementById("globalSearchResults");
  if (resultsDiv) {
    resultsDiv.innerHTML =
      '<div style="text-align: center; color: #999; padding: 40px;">Type at least 2 characters to search</div>';
  }
}

function closeGlobalSearch() {
  if (searchModal) searchModal.style.display = "none";
}

function performGlobalSearch(query) {
  const resultsDiv = document.getElementById("globalSearchResults");
  if (!resultsDiv) return;

  if (!query || query.length < 2) {
    resultsDiv.innerHTML =
      '<div style="text-align: center; color: #999; padding: 40px;">Type at least 2 characters to search</div>';
    return;
  }

  const results = [];
  const modules = [
    "household",
    "income",
    "agriculture",
    "livestock",
    "labour",
    "vehicle",
    "medical",
  ];
  const moduleIcons = {
    household: "🏠",
    income: "💰",
    agriculture: "🌾",
    livestock: "🐄",
    labour: "👷",
    vehicle: "🚜",
    medical: "🏥",
  };
  const moduleNames = {
    household: "Household",
    income: "Income",
    agriculture: "Agriculture",
    livestock: "Livestock",
    labour: "Labour",
    vehicle: "Vehicle",
    medical: "Medical",
  };

  const searchLower = query.toLowerCase();

  modules.forEach((module) => {
    const data = loadData(module);
    data.forEach((record) => {
      const searchableText = JSON.stringify(record).toLowerCase();
      if (searchableText.includes(searchLower)) {
        results.push({
          module,
          moduleIcon: moduleIcons[module],
          moduleName: moduleNames[module],
          record,
          date: bsDisplay(record),
          amount: record.amount || 0,
          description: getRecordDescription(module, record),
        });
      }
    });
  });

  results.sort((a, b) => (b.record.ad || "").localeCompare(a.record.ad || ""));

  if (results.length === 0) {
    resultsDiv.innerHTML = `<div style="text-align: center; color: #999; padding: 40px;">🔍 No results found for "${escapeHtml(query)}"</div>`;
    return;
  }

  const totalAmount = results.reduce((sum, r) => sum + (r.amount || 0), 0);

  resultsDiv.innerHTML = `
    <div style="margin-bottom: 15px; padding-bottom: 10px; border-bottom: 1px solid #ddd;">
      <strong>📊 ${results.length} result(s)</strong> found for "${escapeHtml(query)}"
      <span style="float: right;">💰 Total: ₹${fmt(totalAmount)}</span>
    </div>
    ${results
      .map(
        (r) => `
      <div style="padding: 12px; margin-bottom: 10px; background: #f9f9f9; border-radius: 8px; border-left: 4px solid #b5651d; cursor: pointer;" onclick="goToRecord('${r.module}', '${r.record.id}')">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div>
            <span style="font-size: 20px;">${r.moduleIcon}</span>
            <strong style="margin-left: 8px;">${r.moduleName}</strong>
            <span style="color: #666; font-size: 12px; margin-left: 10px;">${r.date}</span>
          </div>
          <span style="color: ${r.amount >= 0 ? "#c0392b" : "#3a7d44"}; font-weight: bold;">₹${fmt(Math.abs(r.amount))}</span>
        </div>
        <div style="margin-top: 8px; color: #555; font-size: 13px;">
          ${r.description}
        </div>
      </div>
    `,
      )
      .join("")}
  `;
}

function getRecordDescription(module, record) {
  if (module === "household") {
    return `${record.category || "Expense"}${record.items ? ` - ${record.items.length} items` : ""} ${record.notes ? `: ${record.notes.substring(0, 60)}` : ""}`;
  } else if (module === "income") {
    return `${record.source || "Income"} from ${record.member || "unknown"} ${record.notes ? `- ${record.notes.substring(0, 60)}` : ""}`;
  } else if (module === "agriculture") {
    return `${record.type || "Transaction"} - ${record.crop || "crop"} (${record.quantity || 0} kg) ${record.notes ? `: ${record.notes.substring(0, 60)}` : ""}`;
  } else if (module === "livestock") {
    return `${record.type || "Record"} - ${record.animal || "animal"} ${record.quantity ? `(${record.quantity} L)` : ""} ${record.notes ? `: ${record.notes.substring(0, 60)}` : ""}`;
  } else if (module === "labour") {
    return `${record.task || "Work"} by ${record.name || "worker"} (${record.gender || ""}) for ${record.days || 0} days`;
  } else if (module === "vehicle") {
    return `${record.vehicle || "Vehicle"} - ${record.category || "expense"} ${record.notes ? `: ${record.notes.substring(0, 60)}` : ""}`;
  } else if (module === "medical") {
    return `${record.type || "Medical"} for ${record.member || "family member"} ${record.doctor ? `- Dr. ${record.doctor}` : ""}`;
  }
  return "";
}

function goToRecord(module, recordId) {
  closeGlobalSearch();
  navigate(module);
  setTimeout(() => {
    const row = document.querySelector(
      `#page-${module} tr[data-id="${recordId}"]`,
    );
    if (row) {
      row.style.backgroundColor = "#fff3cd";
      setTimeout(() => {
        row.style.backgroundColor = "";
      }, 2000);
      row.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, 300);
}

// Make all functions globally accessible
window.saveRecord = saveRecord;
window.deleteRecord = deleteRecord;
window.openModal = openModal;
window.closeModal = closeModal;
window.householdBillAddRow = householdBillAddRow;
window.householdBillRemoveRow = householdBillRemoveRow;
window.calcHouseholdBillTotal = calcHouseholdBillTotal;
window.updateDayOptions = updateDayOptions;
window.selectGender = selectGender;
window.toggleMemberInput = toggleMemberInput;
window.calcLabourTotal = calcLabourTotal;
window.doLogin = doLogin;
window.doRegister = doRegister;
window.doLogout = doLogout;
window.renderHouseholdTable = renderHouseholdTable;
window.refreshRecentTransactions = refreshRecentTransactions;
window.selectAgriType = selectAgriType;
window.selectCrop = selectCrop;
window.selectSeason = selectSeason;
window.calculateAgriTotal = calculateAgriTotal;
window.calculateAgriRate = calculateAgriRate;
window.selectVehicle = selectVehicle;
window.selectCategory = selectCategory;
window.setVehicleAmount = setVehicleAmount;
window.filterByVehicle = filterByVehicle;
window.selectLabourGender = selectLabourGender;
window.selectTask = selectTask;
window.adjustDays = adjustDays;
window.setWage = setWage;
window.setLabourDate = setLabourDate;
window.renderMedical = renderMedical;
window.renderVehicleTable = renderVehicleTable;
window.backupAllData = backupAllData;
window.restoreBackup = restoreBackup;
window.exportAllCSV = exportAllCSV;
window.printModuleReport = printModuleReport;
window.showGlobalSearch = showGlobalSearch;
window.closeGlobalSearch = closeGlobalSearch;
window.goToRecord = goToRecord;

// ============================================================
//  ALL TRANSACTIONS MODAL
// ============================================================

let currentTransactionFilter = "all";

function showAllTransactions() {
  // Create modal if it doesn't exist
  let modal = document.getElementById("allTransactionsModal");

  if (!modal) {
    modal = document.createElement("div");
    modal.id = "allTransactionsModal";
    modal.className = "all-transactions-modal";
    modal.innerHTML = `
      <div class="all-transactions-content">
        <div class="all-transactions-header">
          <h3>📋 All Recent Transactions</h3>
          <button class="all-transactions-close" onclick="closeAllTransactions()">✕</button>
        </div>
        <div class="all-transactions-filters">
          <button class="filter-badge active" data-filter="all" onclick="filterTransactions('all')">All</button>
          <button class="filter-badge" data-filter="household" onclick="filterTransactions('household')">🏠 Household</button>
          <button class="filter-badge" data-filter="income" onclick="filterTransactions('income')">💰 Income</button>
          <button class="filter-badge" data-filter="agriculture" onclick="filterTransactions('agriculture')">🌾 Agriculture</button>
          <button class="filter-badge" data-filter="livestock" onclick="filterTransactions('livestock')">🐄 Livestock</button>
          <button class="filter-badge" data-filter="labour" onclick="filterTransactions('labour')">👷 Labour</button>
          <button class="filter-badge" data-filter="vehicle" onclick="filterTransactions('vehicle')">🚜 Vehicle</button>
          <button class="filter-badge" data-filter="medical" onclick="filterTransactions('medical')">🏥 Medical</button>
        </div>
        <div class="all-transactions-body" id="allTransactionsBody">
          <div style="text-align: center; padding: 40px;">Loading...</div>
        </div>
        <div class="all-transactions-footer">
          <span id="transactionCount">0 transactions</span>
          <span>💰 Total: ₹<span id="totalAmount">0</span></span>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    // Close modal when clicking outside
    modal.addEventListener("click", function (e) {
      if (e.target === modal) closeAllTransactions();
    });
  }

  modal.classList.add("active");
  renderAllTransactions();
}

function closeAllTransactions() {
  const modal = document.getElementById("allTransactionsModal");
  if (modal) modal.classList.remove("active");
}

function filterTransactions(module) {
  currentTransactionFilter = module;

  // Update active filter badge
  document.querySelectorAll(".filter-badge").forEach((badge) => {
    badge.classList.remove("active");
    if (badge.getAttribute("data-filter") === module) {
      badge.classList.add("active");
    }
  });

  renderAllTransactions();
}

function renderAllTransactions() {
  const container = document.getElementById("allTransactionsBody");
  if (!container) return;

  // Collect all transactions from all modules
  const allTransactions = [];

  const modules = [
    { name: "household", icon: "🏠", label: "Household", type: "expense" },
    { name: "income", icon: "💰", label: "Income", type: "income" },
    { name: "agriculture", icon: "🌾", label: "Agriculture", type: "mixed" },
    { name: "livestock", icon: "🐄", label: "Livestock", type: "mixed" },
    { name: "labour", icon: "👷", label: "Labour", type: "expense" },
    { name: "vehicle", icon: "🚜", label: "Vehicle", type: "expense" },
    { name: "medical", icon: "🏥", label: "Medical", type: "expense" },
  ];

  modules.forEach((module) => {
    const data = loadData(module.name);
    data.forEach((record) => {
      let description = "";
      let amount = record.amount || 0;
      let isExpense = true;

      if (module.name === "household") {
        description = record.category || "Expense";
        if (record.items && record.items.length) {
          description += ` (${record.items.length} items)`;
        }
        isExpense = true;
      } else if (module.name === "income") {
        description = `${record.source || "Income"} from ${record.member || "unknown"}`;
        isExpense = false;
      } else if (module.name === "agriculture") {
        description = `${record.type || "Transaction"} - ${record.crop || "crop"} (${record.quantity || 0} kg)`;
        isExpense = record.type === "Expense";
      } else if (module.name === "livestock") {
        description = `${record.type || "Record"} - ${record.animal || "animal"}`;
        if (record.quantity) description += ` (${record.quantity} L)`;
        isExpense = !["Milk Sale", "Milk Production"].includes(record.type);
      } else if (module.name === "labour") {
        description = `${record.task || "Work"} by ${record.name || "worker"}`;
        isExpense = true;
      } else if (module.name === "vehicle") {
        description = `${record.vehicle || "Vehicle"} - ${record.category || "expense"}`;
        isExpense = true;
      } else if (module.name === "medical") {
        description = `${record.type || "Medical"} for ${record.member || "family member"}`;
        if (record.doctor) description += ` (Dr. ${record.doctor})`;
        isExpense = true;
      }

      allTransactions.push({
        module: module.name,
        moduleIcon: module.icon,
        moduleLabel: module.label,
        description,
        amount,
        isExpense,
        date: bsDisplay(record),
        adDate: record.ad || "",
        id: record.id,
        notes: record.notes || "",
      });
    });
  });

  // Filter by selected module
  let filtered = allTransactions;
  if (currentTransactionFilter !== "all") {
    filtered = allTransactions.filter(
      (t) => t.module === currentTransactionFilter,
    );
  }

  // Sort by date (newest first)
  filtered.sort((a, b) => (b.adDate || "").localeCompare(a.adDate || ""));

  // Update counts
  const totalAmount = filtered.reduce((sum, t) => sum + t.amount, 0);
  document.getElementById("transactionCount").innerHTML =
    `${filtered.length} transaction(s)`;
  document.getElementById("totalAmount").innerHTML = fmt(totalAmount);

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 60px;">
        <div style="font-size: 3rem; margin-bottom: 10px;">📭</div>
        <div style="color: var(--text-3);">No transactions found</div>
      </div>
    `;
    return;
  }

  // Render transactions
  container.innerHTML = filtered
    .map(
      (t) => `
    <div class="transaction-item" onclick="goToTransactionModule('${t.module}', '${t.id}')">
      <div class="transaction-module-icon ${t.module}">
        ${t.moduleIcon}
      </div>
      <div class="transaction-details">
        <div class="transaction-module-name">${t.moduleLabel}</div>
        <div class="transaction-description">${escapeHtml(t.description.substring(0, 80))}${t.description.length > 80 ? "..." : ""}</div>
        <div class="transaction-date">📅 ${t.date}</div>
        ${t.notes ? `<div class="transaction-date" style="margin-top: 4px;">📝 ${escapeHtml(t.notes.substring(0, 50))}</div>` : ""}
      </div>
      <div class="transaction-amount ${t.isExpense ? "expense" : "income"}">
        ${t.isExpense ? "-" : "+"}₹${fmt(t.amount)}
      </div>
    </div>
  `,
    )
    .join("");
}

function goToTransactionModule(module, recordId) {
  closeAllTransactions();
  navigate(module);
  setTimeout(() => {
    // Highlight the row if found
    const row = document.querySelector(
      `#page-${module} tr[data-id="${recordId}"]`,
    );
    if (row) {
      row.style.backgroundColor = "#fff3cd";
      setTimeout(() => {
        row.style.backgroundColor = "";
      }, 2000);
      row.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      showToast(`Navigate to ${module} module`, "success");
    }
  }, 300);
}

// Make functions global
window.showAllTransactions = showAllTransactions;
window.closeAllTransactions = closeAllTransactions;
window.filterTransactions = filterTransactions;
window.goToTransactionModule = goToTransactionModule;
// ====================================================
//  VALIDATION FUNCTIONS FOR ALL MODULES
// ====================================================

function clearFieldErrors() {
  document
    .querySelectorAll(".field-error-message")
    .forEach((el) => el.remove());
  document
    .querySelectorAll(".input-error")
    .forEach((el) => el.classList.remove("input-error"));
  document
    .querySelectorAll(".input-valid")
    .forEach((el) => el.classList.remove("input-valid"));
  const summary = document.getElementById("validationSummary");
  if (summary) summary.classList.add("hidden");
}

function showFieldError(fieldId, message) {
  const field = document.getElementById(fieldId);
  if (!field) return;

  field.classList.add("input-error");
  field.classList.remove("input-valid");

  // Remove existing error message for this field
  const existingError = field.parentElement?.querySelector(
    ".field-error-message",
  );
  if (existingError) existingError.remove();

  // Add new error message
  const errorDiv = document.createElement("div");
  errorDiv.className = "field-error-message";
  errorDiv.innerHTML = `⚠️ ${message}`;
  field.parentElement?.appendChild(errorDiv);
}

function showFieldSuccess(fieldId) {
  const field = document.getElementById(fieldId);
  if (!field) return;

  field.classList.remove("input-error");
  field.classList.add("input-valid");

  // Remove error message
  const existingError = field.parentElement?.querySelector(
    ".field-error-message",
  );
  if (existingError) existingError.remove();
}

function showValidationSummary(message) {
  let summary = document.getElementById("validationSummary");
  if (!summary) {
    summary = document.createElement("div");
    summary.id = "validationSummary";
    summary.className = "validation-summary hidden";
    const modalBody = document.getElementById("modalBody");
    if (modalBody && modalBody.firstChild) {
      modalBody.insertBefore(summary, modalBody.firstChild);
    }
  }
  summary.innerHTML = `❌ ${message}`;
  summary.classList.remove("hidden");

  // Auto-hide after 5 seconds
  setTimeout(() => {
    if (summary) summary.classList.add("hidden");
  }, 5000);
}

// ====================================================
//  MODULE-SPECIFIC VALIDATIONS
// ====================================================

function validateHousehold() {
  clearFieldErrors();

  const items = collectHouseholdBillItems();
  const filled = items.filter((i) => i.lineTotal > 0);

  if (filled.length === 0) {
    showValidationSummary("Add at least one item with quantity and rate");
    return false;
  }

  for (let i = 0; i < filled.length; i++) {
    if (!filled[i].itemName || !filled[i].itemName.trim()) {
      showValidationSummary(`Item ${i + 1}: Please enter item name`);
      return false;
    }
    if (filled[i].quantity <= 0) {
      showValidationSummary(`Item ${i + 1}: Quantity must be greater than 0`);
      return false;
    }
    if (filled[i].rate <= 0) {
      showValidationSummary(`Item ${i + 1}: Rate must be greater than 0`);
      return false;
    }
  }

  return true;
}

function validateIncome() {
  clearFieldErrors();

  const source = document.getElementById("f_source")?.value;
  const amount = parseFloat(document.getElementById("f_amount")?.value) || 0;
  const bsY = document.getElementById("f_bsy")?.value;
  const bsM = document.getElementById("f_bsm")?.value;
  const bsD = document.getElementById("f_bsd")?.value;

  if (!source || source === "") {
    showValidationSummary("Please select an income source");
    return false;
  }

  if (amount <= 0) {
    showFieldError("f_amount", "Amount must be greater than 0");
    showValidationSummary("Please enter a valid amount");
    return false;
  }

  if (!bsY || !bsM || !bsD) {
    showValidationSummary("Please select a valid date");
    return false;
  }

  showFieldSuccess("f_amount");
  return true;
}

function validateAgriculture() {
  clearFieldErrors();

  const type = document.getElementById("f_type")?.value;
  const crop = document.getElementById("f_crop")?.value;
  const quantity =
    parseFloat(document.getElementById("f_quantity")?.value) || 0;
  const amount = parseFloat(document.getElementById("f_amount")?.value) || 0;
  const rate = parseFloat(document.getElementById("f_rate")?.value) || 0;
  const bsY = document.getElementById("f_bsy")?.value;
  const bsM = document.getElementById("f_bsm")?.value;
  const bsD = document.getElementById("f_bsd")?.value;

  if (!type || type === "") {
    showValidationSummary("Please select transaction type (Income or Expense)");
    return false;
  }

  if (!crop || crop === "") {
    showValidationSummary("Please select a crop");
    return false;
  }

  if (quantity <= 0 && amount <= 0 && rate <= 0) {
    showValidationSummary("Please enter Quantity or Rate/Amount");
    showFieldError("f_quantity", "Either Quantity or Amount is required");
    return false;
  }

  if (quantity > 0 && amount <= 0 && rate <= 0) {
    showFieldError("f_amount", "Please enter Amount or Rate");
    showValidationSummary("Please enter amount for the given quantity");
    return false;
  }

  if (quantity <= 0 && (amount > 0 || rate > 0)) {
    showFieldError("f_quantity", "Please enter quantity");
    showValidationSummary("Please enter quantity for the amount");
    return false;
  }

  if (!bsY || !bsM || !bsD) {
    showValidationSummary("Please select a valid date");
    return false;
  }

  showFieldSuccess("f_quantity");
  showFieldSuccess("f_amount");
  return true;
}

function validateLivestock() {
  clearFieldErrors();

  const animal = document.getElementById("f_animal")?.value;
  const type = document.getElementById("f_type")?.value;
  const quantity =
    parseFloat(document.getElementById("f_quantity")?.value) || 0;
  const amount = parseFloat(document.getElementById("f_amount")?.value) || 0;
  const bsY = document.getElementById("f_bsy")?.value;
  const bsM = document.getElementById("f_bsm")?.value;
  const bsD = document.getElementById("f_bsd")?.value;

  if (!animal || animal === "") {
    showValidationSummary("Please select an animal");
    return false;
  }

  if (!type || type === "") {
    showValidationSummary("Please select record type");
    return false;
  }

  // Milk Production requires quantity
  if (type === "Milk Production" && quantity <= 0) {
    showFieldError("f_quantity", "Please enter milk quantity in liters");
    showValidationSummary("Milk Production requires quantity in liters");
    return false;
  }

  // Milk Sale requires amount
  if (type === "Milk Sale" && amount <= 0) {
    showFieldError("f_amount", "Please enter sale amount");
    showValidationSummary("Milk Sale requires amount");
    return false;
  }

  // Expense types require amount
  if (
    ["Feed Expense", "Vet Expense", "Medicine", "Other"].includes(type) &&
    amount <= 0
  ) {
    showFieldError("f_amount", "Please enter expense amount");
    showValidationSummary(`${type} requires an amount`);
    return false;
  }

  if (!bsY || !bsM || !bsD) {
    showValidationSummary("Please select a valid date");
    return false;
  }

  if (type === "Milk Production") showFieldSuccess("f_quantity");
  if (amount > 0) showFieldSuccess("f_amount");
  return true;
}

function validateLabour() {
  clearFieldErrors();

  const name = document.getElementById("f_name")?.value?.trim();
  const gender = document.getElementById("f_gender")?.value;
  const task = document.getElementById("f_task")?.value;
  const days = parseFloat(document.getElementById("f_days")?.value) || 0;
  const wage = parseFloat(document.getElementById("f_wage")?.value) || 0;
  const amount = parseFloat(document.getElementById("f_amount")?.value) || 0;
  const bsY = document.getElementById("f_bsy")?.value;
  const bsM = document.getElementById("f_bsm")?.value;
  const bsD = document.getElementById("f_bsd")?.value;

  if (!name || name === "") {
    showFieldError("f_name", "Please enter worker name");
    showValidationSummary("Worker name is required");
    return false;
  }

  if (!gender || gender === "") {
    showValidationSummary("Please select gender (Male/Female)");
    return false;
  }

  if (!task || task === "") {
    showValidationSummary("Please select a task");
    return false;
  }

  if (days <= 0) {
    showFieldError("f_days", "Days worked must be greater than 0");
    showValidationSummary("Days worked is required");
    return false;
  }

  if (wage <= 0) {
    showFieldError("f_wage", "Wage per day must be greater than 0");
    showValidationSummary("Wage per day is required");
    return false;
  }

  if (amount <= 0) {
    showValidationSummary("Payment amount must be greater than 0");
    return false;
  }

  if (!bsY || !bsM || !bsD) {
    showValidationSummary("Please select a valid date");
    return false;
  }

  showFieldSuccess("f_name");
  showFieldSuccess("f_days");
  showFieldSuccess("f_wage");
  return true;
}

function validateVehicle() {
  clearFieldErrors();

  const vehicle = document.getElementById("f_vehicle")?.value;
  const category = document.getElementById("f_category")?.value;
  const amount = parseFloat(document.getElementById("f_amount")?.value) || 0;
  const bsY = document.getElementById("f_bsy")?.value;
  const bsM = document.getElementById("f_bsm")?.value;
  const bsD = document.getElementById("f_bsd")?.value;

  if (!vehicle || vehicle === "") {
    showValidationSummary("Please select a vehicle");
    return false;
  }

  if (!category || category === "") {
    showValidationSummary("Please select expense category");
    return false;
  }

  if (amount <= 0) {
    showFieldError("f_amount", "Amount must be greater than 0");
    showValidationSummary("Please enter a valid amount");
    return false;
  }

  if (!bsY || !bsM || !bsD) {
    showValidationSummary("Please select a valid date");
    return false;
  }

  showFieldSuccess("f_amount");
  return true;
}

function validateMedical() {
  clearFieldErrors();

  let member = document.getElementById("f_member")?.value;
  const memberName = document.getElementById("f_memberName")?.value?.trim();
  const type = document.getElementById("f_type")?.value;
  const amount = parseFloat(document.getElementById("f_amount")?.value) || 0;
  const bsY = document.getElementById("f_bsy")?.value;
  const bsM = document.getElementById("f_bsm")?.value;
  const bsD = document.getElementById("f_bsd")?.value;

  if (member === "Other") {
    if (!memberName || memberName === "") {
      showFieldError("f_memberName", "Please enter member name");
      showValidationSummary("Please enter family member name");
      return false;
    }
  } else if (!member || member === "") {
    showValidationSummary("Please select or enter a family member");
    return false;
  }

  if (!type || type === "") {
    showValidationSummary("Please select medical type");
    return false;
  }

  if (amount <= 0) {
    showFieldError("f_amount", "Amount must be greater than 0");
    showValidationSummary("Please enter a valid amount");
    return false;
  }

  if (!bsY || !bsM || !bsD) {
    showValidationSummary("Please select a valid date");
    return false;
  }

  showFieldSuccess("f_amount");
  return true;
}

function validateFamily() {
  clearFieldErrors();

  const name = document.getElementById("f_name")?.value?.trim();
  const relation = document.getElementById("f_relation")?.value;
  const gender = document.getElementById("f_gender")?.value;
  const age = parseInt(document.getElementById("f_age")?.value) || 0;

  if (!name || name === "") {
    showFieldError("f_name", "Please enter full name");
    showValidationSummary("Name is required");
    return false;
  }

  if (!relation || relation === "") {
    showValidationSummary("Please select relation");
    return false;
  }

  if (!gender || gender === "") {
    showValidationSummary("Please select gender");
    return false;
  }

  if (age < 0 || age > 120) {
    showFieldError("f_age", "Age must be between 0 and 120");
    showValidationSummary("Please enter a valid age");
    return false;
  }

  showFieldSuccess("f_name");
  return true;
}

// ============================================================
//  LIVESTOCK MODULE - HELPER FUNCTIONS
// ============================================================

let livestockMilkChart = null;
let currentQuickType = null;

// Store quick type when opening modal
const originalOpenModal = window.openModal;
window.openModal = function (module, record = null, quickType = null) {
  currentQuickType = quickType;
  originalOpenModal(module, record);
};

// Calculate total milk from morning and evening
function calculateTotalMilk() {
  const morning =
    parseFloat(document.getElementById("f_morning_qty")?.value) || 0;
  const evening =
    parseFloat(document.getElementById("f_evening_qty")?.value) || 0;
  const total = morning + evening;
  const totalDisplay = document.getElementById("totalMilkDisplay");
  const totalField = document.getElementById("f_quantity");

  if (totalDisplay) totalDisplay.innerHTML = total.toFixed(1) + " L";
  if (totalField) totalField.value = total.toFixed(1);
}

// Milk Rate Settings
let currentMilkRate = 60;
let lastTestDate = null;

function loadMilkRateSettings() {
  const savedRate = localStorage.getItem("ghk_milk_rate");
  const savedDate = localStorage.getItem("ghk_milk_test_date");
  if (savedRate) currentMilkRate = parseInt(savedRate);
  if (savedDate) lastTestDate = savedDate;

  const rateDisplay = document.getElementById("displayMilkRate");
  const testDateDisplay = document.getElementById("lastTestDate");
  if (rateDisplay) rateDisplay.innerHTML = "₹" + currentMilkRate;
  if (testDateDisplay) testDateDisplay.innerHTML = lastTestDate || "Not set";
}

function openMilkRateSettings() {
  const newRate = prompt("Enter milk rate per liter (₹):", currentMilkRate);
  if (newRate && !isNaN(newRate) && newRate > 0) {
    currentMilkRate = parseInt(newRate);
    localStorage.setItem("ghk_milk_rate", currentMilkRate);

    const testDate = prompt(
      "Enter last SNF/Lacto test date (YYYY-MM-DD):",
      lastTestDate || new Date().toISOString().split("T")[0],
    );
    if (testDate) {
      lastTestDate = testDate;
      localStorage.setItem("ghk_milk_test_date", lastTestDate);
    }

    loadMilkRateSettings();
    renderLivestockTable();
    showToast("Milk rate updated to ₹" + currentMilkRate, "success");
  }
}

// Load Milk Chart
function loadMilkChart(days = 7) {
  const data = loadData("livestock");
  const milkRecords = data.filter((r) => r.type === "Milk Production");

  // Group by date
  const milkByDate = {};
  milkRecords.forEach((record) => {
    const dateKey =
      record.ad || record.bsY + "-" + record.bsM + "-" + record.bsD;
    if (!milkByDate[dateKey]) milkByDate[dateKey] = 0;
    milkByDate[dateKey] += record.totalQuantity || record.quantity || 0;
  });

  // Get last N days
  const labels = [];
  const values = [];
  const today = new Date();

  for (let i = days - 1; i >= 0; i--) {
    const date = new Date();
    date.setDate(today.getDate() - i);
    const dateKey = date.toISOString().split("T")[0];
    const displayDate = date.getDate() + "/" + (date.getMonth() + 1);
    labels.push(displayDate);
    values.push(milkByDate[dateKey] || 0);
  }

  const ctx = document.getElementById("livestockMilkChart");
  if (!ctx) return;

  if (livestockMilkChart) livestockMilkChart.destroy();

  livestockMilkChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Milk (Liters)",
          data: values,
          borderColor: "#d97706",
          backgroundColor: "rgba(217, 119, 6, 0.1)",
          fill: true,
          tension: 0.3,
          pointRadius: 4,
          pointBackgroundColor: "#d97706",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: { position: "bottom" },
      },
      scales: {
        y: { beginAtZero: true, title: { display: true, text: "Liters" } },
      },
    },
  });

  // Update active button state
  document.querySelectorAll(".chart-period-btn").forEach((btn) => {
    btn.classList.remove("active");
    if (btn.getAttribute("data-days") == days) btn.classList.add("active");
  });
}

// Render Animal Performance Cards
function renderAnimalPerformance() {
  const data = loadData("livestock");
  const milkRecords = data.filter((r) => r.type === "Milk Production");
  const now = todayBS();

  const animalMilk = {
    "Red Cow": 0,
    "Black Cow": 0,
    Buffalo: 0,
  };

  milkRecords.forEach((record) => {
    if (record.bsY === now.y && record.bsM === now.m) {
      const animal = record.animal;
      if (animalMilk[animal] !== undefined) {
        animalMilk[animal] += record.totalQuantity || record.quantity || 0;
      }
    }
  });

  const container = document.getElementById("animalPerformanceCards");
  if (!container) return;

  const animalIcons = {
    "Red Cow": "🔴",
    "Black Cow": "⚫",
    Buffalo: "🐃",
  };

  container.innerHTML = Object.entries(animalMilk)
    .map(
      ([animal, milk]) => `
        <div class="animal-card">
            <div class="animal-icon">${animalIcons[animal]}</div>
            <div class="animal-info">
                <div class="animal-name">${animal}</div>
                <div class="animal-milk">This month milk</div>
            </div>
            <div class="animal-amount">${milk.toFixed(1)} L</div>
        </div>
    `,
    )
    .join("");
}

// Render Livestock Table (Updated)
function renderLivestockTable() {
  const year = document.getElementById("lsBSYear")?.value || "";
  const month = document.getElementById("lsBSMonth")?.value || "";
  const type = document.getElementById("lsTypeFilter")?.value || "";
  const animal = document.getElementById("lsAnimalFilter")?.value || "";
  const search = (
    document.getElementById("lsSearch")?.value || ""
  ).toLowerCase();

  let data = loadData("livestock");

  if (year) data = data.filter((r) => r.bsY == year);
  if (month) data = data.filter((r) => r.bsM == month);
  if (type) data = data.filter((r) => r.type === type);
  if (animal) data = data.filter((r) => r.animal === animal);
  if (search)
    data = data.filter(
      (r) =>
        (r.notes || "").toLowerCase().includes(search) ||
        (r.animal || "").toLowerCase().includes(search) ||
        (r.type || "").toLowerCase().includes(search),
    );

  data = sortByDate(data);

  const tbody = document.getElementById("livestockBody");
  const emptyState = document.getElementById("livestockEmptyState");
  const recordsCount = document.getElementById("livestockRecordsCount");

  // Calculate totals
  let totalMilk = 0;
  let totalSale = 0;
  let totalFeed = 0;
  let totalMedical = 0;

  data.forEach((r) => {
    const qty = r.totalQuantity || r.quantity || 0;
    if (r.type === "Milk Production") totalMilk += qty;
    else if (r.type === "Milk Sale") totalSale += r.amount;
    else if (["दाना", "चोकर", "मकै"].includes(r.type)) totalFeed += r.amount;
    else if (["औषधि", "पशु चिकित्सक"].includes(r.type))
      totalMedical += r.amount;
  });

  // Update summary stats
  document.getElementById("livestockTotalMilk").innerHTML =
    totalMilk.toFixed(1) + " L";
  document.getElementById("livestockTotalSale").innerHTML =
    "₹" + fmt(totalSale);
  document.getElementById("livestockTotalFeed").innerHTML =
    "₹" + fmt(totalFeed);
  document.getElementById("livestockTotalMedical").innerHTML =
    "₹" + fmt(totalMedical);
  document.getElementById("livestockTotalRecords").innerHTML = data.length;

  // Today's milk
  const today = todayBS();
  const todayMilk = data
    .filter(
      (r) =>
        r.type === "Milk Production" &&
        r.bsY === today.y &&
        r.bsM === today.m &&
        r.bsD === today.d,
    )
    .reduce((s, r) => s + (r.totalQuantity || r.quantity || 0), 0);
  document.getElementById("livestockTodayMilk").innerHTML =
    todayMilk.toFixed(1) + " L";

  // This month milk
  const monthMilk = data
    .filter(
      (r) =>
        r.type === "Milk Production" && r.bsY === today.y && r.bsM === today.m,
    )
    .reduce((s, r) => s + (r.totalQuantity || r.quantity || 0), 0);
  document.getElementById("livestockMonthMilk").innerHTML =
    monthMilk.toFixed(1) + " L";

  // Milk income (using rate)
  const milkIncome = monthMilk * currentMilkRate;
  document.getElementById("livestockMilkIncome").innerHTML =
    "₹" + fmt(milkIncome);
  document.getElementById("livestockFeedExpense").innerHTML =
    "₹" + fmt(totalFeed);

  if (recordsCount) recordsCount.textContent = `${data.length} record(s)`;

  if (!data.length) {
    if (tbody) tbody.innerHTML = "";
    if (emptyState) emptyState.style.display = "block";
    return;
  }

  if (emptyState) emptyState.style.display = "none";
  if (tbody) {
    tbody.innerHTML = data
      .map((r) => {
        const morningDisplay = r.morningQuantity
          ? r.morningQuantity.toFixed(1)
          : "-";
        const eveningDisplay = r.eveningQuantity
          ? r.eveningQuantity.toFixed(1)
          : "-";
        const qtyDisplay = (r.totalQuantity || r.quantity || 0).toFixed(1);

        let typeClass = "";
        if (r.type === "Milk Production") typeClass = "milk";
        else if (r.type === "दाना") typeClass = "dana";
        else if (r.type === "चोकर") typeClass = "chokkar";
        else if (r.type === "मकै") typeClass = "makai";
        else if (r.type === "औषधि") typeClass = "medicine";
        else if (r.type === "पशु चिकित्सक") typeClass = "vet";
        else if (r.type === "Milk Sale") typeClass = "sale";

        return `
                <tr data-id="${r.id}">
                    <td class="mono">${bsDisplay(r)}</td>
                    <td>${escapeHtml(r.animal || "-")}</td>
                    <td><span class="type-badge ${typeClass}">${escapeHtml(r.type || "-")}</span></td>
                    <td>${morningDisplay}</td>
                    <td>${eveningDisplay}</td>
                    <td>${qtyDisplay} ${r.type === "Milk Production" ? "L" : r.quantity ? "kg" : ""}</td>
                    <td class="amount-positive">₹${fmt(r.amount)}</td>
                    <td style="max-width:150px; overflow:hidden; text-overflow:ellipsis;">${escapeHtml(r.notes || "-")}</td>
                    <td class="action-icons">
                        <button class="action-icon edit" onclick='openModal("livestock", ${JSON.stringify(r).replace(/'/g, "&#39;")})' title="Edit">✏️</button>
                        <button class="action-icon delete" onclick="deleteRecord('livestock','${r.id}')" title="Delete">🗑️</button>
                    </td>
                </tr>
            `;
      })
      .join("");
  }

  // Update charts and performance
  loadMilkChart(7);
  renderAnimalPerformance();
}

function clearLivestockFilters() {
  document.getElementById("lsBSYear").value = "";
  document.getElementById("lsBSMonth").value = "";
  document.getElementById("lsTypeFilter").value = "";
  document.getElementById("lsAnimalFilter").value = "";
  document.getElementById("lsSearch").value = "";
  renderLivestockTable();
}

// Make functions global
window.calculateTotalMilk = calculateTotalMilk;
window.loadMilkRateSettings = loadMilkRateSettings;
window.openMilkRateSettings = openMilkRateSettings;
window.loadMilkChart = loadMilkChart;
window.renderAnimalPerformance = renderAnimalPerformance;
window.renderLivestockTable = renderLivestockTable;
window.clearLivestockFilters = clearLivestockFilters;

// Override renderTable for livestock
const originalRenderTableLivestock = window.renderTable;
window.renderTable = function (module) {
  if (module === "livestock") {
    if (typeof renderLivestockTable === "function") renderLivestockTable();
  } else {
    originalRenderTableLivestock(module);
  }
};

// ============================================================
//  LIVESTOCK MODAL HELPER - FIXED
// ============================================================

function openLivestockModal(quickType) {
  // Store the quick type globally
  window.currentLivestockType = quickType;

  // Open modal with livestock module and pass the type
  editingId = null;
  editingMod = "livestock";

  const names = {
    livestock: "Livestock",
  };

  document.getElementById("modalTitle").textContent = "Add Livestock Record";

  // Build form with the quick type
  const bsY = todayBS().y;
  const bsM = todayBS().m;
  const bsD = todayBS().d;

  let formHtml = "";

  // Animal options
  const animalOptions = `
    <option value="Red Cow">🔴 Red Cow</option>
    <option value="Black Cow">⚫ Black Cow</option>
    <option value="Buffalo">🐃 Buffalo</option>
    <option value="Chicken">🐔 Chicken (4)</option>
  `;

  // Milk Production Form (with Morning/Evening split)
  if (quickType === "milk") {
    formHtml = `
      <div class="livestock-form-container">
        <div class="form-section">
          <div class="form-section-title">
            <span class="section-icon">🥛</span>
            <span>दुध उत्पादन (Milk Production)</span>
          </div>
          ${bsDatePicker(bsY, bsM, bsD)}
          <div class="form-row">
            <div class="form-group">
              <label>Animal <span class="required-star">*</span></label>
              <select id="f_animal" class="modern-select">${animalOptions}</select>
            </div>
          </div>
          <div class="form-row two-col">
            <div class="form-group">
              <label>🌅 बिहान (Morning) Liters</label>
              <input type="number" id="f_morning_qty" class="modern-input" value="0" min="0" step="0.5" oninput="calculateTotalMilk()" placeholder="0">
            </div>
            <div class="form-group">
              <label>🌙 साँझ (Evening) Liters</label>
              <input type="number" id="f_evening_qty" class="modern-input" value="0" min="0" step="0.5" oninput="calculateTotalMilk()" placeholder="0">
            </div>
          </div>
          <div class="total-milk-display">
            <span>📊 जम्मा (Total): </span>
            <strong id="totalMilkDisplay">0 L</strong>
          </div>
          <input type="hidden" id="f_quantity" value="0">
          <input type="hidden" id="f_type" value="Milk Production">
          <input type="hidden" id="f_amount" value="0">
          <div class="form-group">
            <label>📝 Notes</label>
            <textarea id="f_notes" class="modern-textarea" placeholder="Any notes about today's milk..."></textarea>
          </div>
        </div>
      </div>
    `;
  }
  // Feed/Expense Forms (दाना, चोकर, मकै, औषधि, पशु चिकित्सक)
  else {
    let typeLabel = "";
    let typeValue = "";
    let icon = "";
    let placeholder = "";

    switch (quickType) {
      case "dana":
        typeLabel = "🌾 दाना (Grain)";
        typeValue = "दाना";
        icon = "🌾";
        placeholder = "Enter grain amount in kg or cost";
        break;
      case "chokkar":
        typeLabel = "🌽 चोकर (Feed)";
        typeValue = "चोकर";
        icon = "🌽";
        placeholder = "Enter feed amount in kg or cost";
        break;
      case "makai":
        typeLabel = "🌽 मकै (Corn)";
        typeValue = "मकै";
        icon = "🌽";
        placeholder = "Enter corn amount in kg or cost";
        break;
      case "medicine":
        typeLabel = "💊 औषधि (Medicine)";
        typeValue = "औषधि";
        icon = "💊";
        placeholder = "Medicine name and cost";
        break;
      case "vet":
        typeLabel = "🩺 पशु चिकित्सक (Vet Visit)";
        typeValue = "पशु चिकित्सक";
        icon = "🩺";
        placeholder = "Vet visit details and cost";
        break;
      default:
        typeLabel = "खर्च (Expense)";
        typeValue = "दाना";
        icon = "📦";
        placeholder = "Enter expense details";
    }

    formHtml = `
      <div class="livestock-form-container">
        <div class="form-section">
          <div class="form-section-title">
            <span class="section-icon">${icon}</span>
            <span>${typeLabel}</span>
          </div>
          ${bsDatePicker(bsY, bsM, bsD)}
          <div class="form-row two-col">
            <div class="form-group">
              <label>Animal <span class="required-star">*</span></label>
              <select id="f_animal" class="modern-select">${animalOptions}</select>
            </div>
            <div class="form-group">
              <label>Type</label>
              <select id="f_type" class="modern-select">
                <option value="दाना" ${typeValue === "दाना" ? "selected" : ""}>🌾 दाना (Grain)</option>
                <option value="चोकर" ${typeValue === "चोकर" ? "selected" : ""}>🌽 चोकर (Feed)</option>
                <option value="मकै" ${typeValue === "मकै" ? "selected" : ""}>🌽 मकै (Corn)</option>
                <option value="औषधि" ${typeValue === "औषधि" ? "selected" : ""}>💊 औषधि (Medicine)</option>
                <option value="पशु चिकित्सक" ${typeValue === "पशु चिकित्सक" ? "selected" : ""}>🩺 पशु चिकित्सक (Vet)</option>
              </select>
            </div>
          </div>
          <div class="form-row two-col">
            <div class="form-group">
              <label>Quantity (kg/liters) <span class="required-star">*</span></label>
              <input type="number" id="f_quantity" class="modern-input" value="0" min="0" step="0.5" placeholder="Enter quantity">
            </div>
            <div class="form-group">
              <label>Amount (₹) <span class="required-star">*</span></label>
              <input type="number" id="f_amount" class="modern-input" value="0" min="0" step="10" placeholder="Enter amount">
            </div>
          </div>
          <div class="form-group">
            <label>📝 Notes</label>
            <textarea id="f_notes" class="modern-textarea" placeholder="${placeholder}"></textarea>
          </div>
        </div>
      </div>
    `;
  }

  document.getElementById("modalBody").innerHTML = formHtml;
  document.getElementById("modalOverlay").classList.add("open");
  document.getElementById("modal").classList.add("open");

  // Initialize date picker values
  setTimeout(() => {
    updateDayOptions();
    if (quickType === "milk") {
      calculateTotalMilk();
    }
    const firstInput = document.querySelector(
      "#modalBody input:not([readonly])",
    );
    if (firstInput) firstInput.focus();
  }, 50);
}

// Also update the calculateTotalMilk function
function calculateTotalMilk() {
  const morning =
    parseFloat(document.getElementById("f_morning_qty")?.value) || 0;
  const evening =
    parseFloat(document.getElementById("f_evening_qty")?.value) || 0;
  const total = morning + evening;
  const totalDisplay = document.getElementById("totalMilkDisplay");
  const totalField = document.getElementById("f_quantity");

  if (totalDisplay) totalDisplay.innerHTML = total.toFixed(1) + " L";
  if (totalField) totalField.value = total.toFixed(1);
}

// ============================================================
//  MODERN LOGIN - TAB SWITCHING (ADD THIS)
// ============================================================

function initModernLoginTabs() {
  const tabs = document.querySelectorAll(".login-modern-tab");
  if (tabs.length === 0) return;

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      const tabName = this.getAttribute("data-tab");

      tabs.forEach((t) => t.classList.remove("active"));
      this.classList.add("active");

      const loginPanel = document.getElementById("loginPanel");
      const registerPanel = document.getElementById("registerPanel");

      if (tabName === "login") {
        if (loginPanel) loginPanel.classList.add("active");
        if (registerPanel) registerPanel.classList.remove("active");
      } else {
        if (loginPanel) loginPanel.classList.remove("active");
        if (registerPanel) registerPanel.classList.add("active");
      }
    });
  });
}

// Password toggle for modern form
function togglePasswordModern(fieldId, btn) {
  const field = document.getElementById(fieldId);
  if (field.type === "password") {
    field.type = "text";
    btn.textContent = "🙈";
  } else {
    field.type = "password";
    btn.textContent = "👁";
  }
}

// Modern Login - uses your existing doLogin function
function doLoginModern() {
  // Get values from modern form
  const user = document.getElementById("loginUserModern").value.trim();
  const pass = document.getElementById("loginPassModern").value;
  const err = document.getElementById("loginErrorModern");

  if (!user || !pass) {
    err.textContent = "Please enter username and password.";
    return;
  }

  // Reuse your existing login logic
  const users = loadUsers();
  const found = users.find((u) => u.username === user && u.password === pass);

  if (!found) {
    err.textContent = "Incorrect username or password.";
    return;
  }

  localStorage.setItem(
    KEYS.session,
    JSON.stringify({ username: found.username, name: found.name }),
  );
  err.textContent = "";
  startApp(found);
}

// Modern Register - uses your existing doRegister logic
function doRegisterModern() {
  const name = document.getElementById("regNameModern").value.trim();
  const user = document.getElementById("regUserModern").value.trim();
  const pass = document.getElementById("regPassModern").value;
  const terms = document.getElementById("termsCheckboxModern")?.checked;
  const err = document.getElementById("regErrorModern");

  if (!name || !user || !pass) {
    err.textContent = "All fields are required.";
    return;
  }

  if (!terms) {
    err.textContent = "Please agree to the Terms & Conditions.";
    return;
  }

  if (pass.length < 3) {
    err.textContent = "Password must be at least 3 characters.";
    return;
  }

  // Reuse your existing register logic
  const users = loadUsers();
  if (users.find((u) => u.username === user)) {
    err.textContent = "Username already taken.";
    return;
  }

  users.push({ username: user, password: pass, name });
  saveUsers(users);
  localStorage.setItem(KEYS.session, JSON.stringify({ username: user, name }));
  err.textContent = "";
  startApp({ username: user, name });
}

// Initialize tabs when page loads
document.addEventListener("DOMContentLoaded", function () {
  initModernLoginTabs();
});

// Make functions global
window.togglePasswordModern = togglePasswordModern;
window.doLoginModern = doLoginModern;
window.doRegisterModern = doRegisterModern;
// Boot
(function boot() {
  let users = loadUsers();

  if (
    !users ||
    users.length === 0 ||
    !users.find((u) => u.username === "admin")
  ) {
    users = [{ username: "admin", password: "1234", name: "Admin" }];
    saveUsers(users);
  }

  const session = localStorage.getItem(KEYS.session);

  if (session) {
    try {
      const user = JSON.parse(session);
      document.getElementById("loginScreen").style.display = "none";
      document.getElementById("appShell").style.display = "flex";
      document.getElementById("sidebarUser").textContent =
        user.name || user.username;
      seedDemoIfEmpty();
      migrateHouseholdLegacyData();
      try {
        initApp();
      } catch (err) {
        console.error("initApp() failed during session restore:", err);
      }
      navigate("dashboard");
    } catch (e) {
      localStorage.removeItem(KEYS.session);
    }
  }
  // ============================================================
  //  FIX: CONNECT ALL BUTTONS PROPERLY
  // ============================================================

  // Fix the missing exportAllCSV function
  function exportAllCSV() {
    const modules = [
      "household",
      "income",
      "agriculture",
      "livestock",
      "labour",
      "vehicle",
      "medical",
    ];
    modules.forEach((module) => {
      exportCSV(module);
    });
    showToast("All data exported as CSV!", "success");
  }

  // Force connect all buttons when DOM is ready
  document.addEventListener("DOMContentLoaded", function () {
    console.log("Connecting buttons...");

    // Backup button
    const backupBtn = document.getElementById("backupBtn");
    if (backupBtn) {
      backupBtn.onclick = function (e) {
        e.preventDefault();
        backupAllData();
      };
      console.log("Backup button connected");
    }

    // Restore button
    const restoreBtn = document.getElementById("restoreBtn");
    if (restoreBtn) {
      restoreBtn.onclick = function (e) {
        e.preventDefault();
        restoreBackup();
      };
      console.log("Restore button connected");
    }

    // Export All button
    const exportAllBtn = document.getElementById("exportAllBtn");
    if (exportAllBtn) {
      exportAllBtn.onclick = function (e) {
        e.preventDefault();
        exportAllCSV();
      };
      console.log("Export All button connected");
    }

    // Logout button
    const logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) {
      logoutBtn.onclick = function (e) {
        e.preventDefault();
        doLogout();
      };
      console.log("Logout button connected");
    }

    // Search button
    const searchBtn = document.getElementById("globalSearchBtn");
    if (searchBtn) {
      searchBtn.onclick = function (e) {
        e.preventDefault();
        showGlobalSearch();
      };
      console.log("Search button connected");
    }

    // Fix navigation items
    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach(function (item) {
      item.onclick = function (e) {
        e.preventDefault();
        const page = this.getAttribute("data-page");
        if (page) navigate(page);
      };
    });
    console.log("Navigation items connected");

    // Fix print buttons (they use inline onclick, but ensure function exists)
    window.printModuleReport = printModuleReport;

    console.log("All buttons connected! Ready to use.");
  });

  // Make sure exportAllCSV is available globally
  window.exportAllCSV = exportAllCSV;

  // ============================================================
  //  MODERN LOGIN - TAB SWITCHING & TERMS
  // ============================================================

  // Tab switching for modern login
  function initModernLoginTabs() {
    const tabs = document.querySelectorAll(".login-tab");
    if (tabs.length === 0) return;

    tabs.forEach((tab) => {
      tab.addEventListener("click", function () {
        const tabName = this.getAttribute("data-tab");

        // Update tab active states
        tabs.forEach((t) => t.classList.remove("active"));
        this.classList.add("active");

        // Show/hide panels
        const loginPanel = document.getElementById("loginFormModern");
        const registerPanel = document.getElementById("registerFormModern");

        if (tabName === "login") {
          if (loginPanel) loginPanel.classList.add("active");
          if (registerPanel) registerPanel.classList.remove("active");
        } else {
          if (loginPanel) loginPanel.classList.remove("active");
          if (registerPanel) registerPanel.classList.add("active");
        }
      });
    });
  }

  // Register with terms checkbox
  function doRegisterWithTerms() {
    const termsCheckbox = document.getElementById("termsCheckbox");
    if (!termsCheckbox || !termsCheckbox.checked) {
      const errEl = document.getElementById("regError");
      if (errEl) errEl.textContent = "Please agree to the Terms & Conditions.";
      return;
    }
    // Call the existing doRegister function
    doRegister();
  }

  // Initialize when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initModernLoginTabs);
  } else {
    initModernLoginTabs();
  }

  // ============================================================
  //  FIX MODERN LOGIN - OVERRIDE FUNCTIONS
  // ============================================================

  // Override the old doLogin to work with modern form
  window.doLogin = function () {
    // Try to get values from modern form first
    let user = document.getElementById("loginUserModern")?.value;
    let pass = document.getElementById("loginPassModern")?.value;

    // Fallback to old form
    if (!user) user = document.getElementById("loginUser")?.value;
    if (!pass) pass = document.getElementById("loginPass")?.value;

    const err =
      document.getElementById("loginErrorModern") ||
      document.getElementById("loginError");

    if (!user || !pass) {
      if (err) err.textContent = "Please enter username and password.";
      return;
    }

    const users = loadUsers();
    const found = users.find((u) => u.username === user && u.password === pass);

    if (!found) {
      if (err) err.textContent = "Incorrect username or password.";
      return;
    }

    localStorage.setItem(
      KEYS.session,
      JSON.stringify({ username: found.username, name: found.name }),
    );
    if (err) err.textContent = "";
    startApp(found);
  };

  // Override doRegister for modern form
  window.doRegister = function () {
    // Get values from modern form
    let name = document.getElementById("regNameModern")?.value;
    let user = document.getElementById("regUserModern")?.value;
    let pass = document.getElementById("regPassModern")?.value;

    // Fallback to old form
    if (!name) name = document.getElementById("regName")?.value;
    if (!user) user = document.getElementById("regUser")?.value;
    if (!pass) pass = document.getElementById("regPass")?.value;

    const err =
      document.getElementById("regErrorModern") ||
      document.getElementById("regError");

    if (!name || !user || !pass) {
      if (err) err.textContent = "All fields are required.";
      return;
    }
    if (pass.length < 3) {
      if (err) err.textContent = "Password must be at least 3 characters.";
      return;
    }

    const users = loadUsers();
    if (users.find((u) => u.username === user)) {
      if (err) err.textContent = "Username already taken.";
      return;
    }

    users.push({ username: user, password: pass, name });
    saveUsers(users);
    localStorage.setItem(
      KEYS.session,
      JSON.stringify({ username: user, name }),
    );
    if (err) err.textContent = "";
    startApp({ username: user, name });
  };

  // Make sure old login screen is hidden
  function hideOldLoginScreen() {
    const oldLoginForm = document.getElementById("loginForm");
    const oldRegisterForm = document.getElementById("registerForm");
    if (oldLoginForm) oldLoginForm.style.display = "none";
    if (oldRegisterForm) oldRegisterForm.style.display = "none";
  }

  // Call this when page loads
  document.addEventListener("DOMContentLoaded", function () {
    hideOldLoginScreen();
    initModernLoginTabs();
  });

  console.log("Modern login fixes applied - use admin / 1234");

  // Make the new function global

  // ============================================================
  //  IMPROVED INCOME FUNCTIONS
  // ============================================================

  // Render income table with new styling
  function renderIncomeTable() {
    const year = document.getElementById("incBSYear")?.value || "";
    const month = document.getElementById("incBSMonth")?.value || "";
    const source = document.getElementById("incSourceFilter")?.value || "";
    const member = document.getElementById("incMemberFilter")?.value || "";
    const search = (
      document.getElementById("incSearch")?.value || ""
    ).toLowerCase();

    let data = loadData("income");

    if (year) data = data.filter((r) => r.bsY == year);
    if (month) data = data.filter((r) => r.bsM == month);
    if (source) data = data.filter((r) => r.source === source);
    if (member) data = data.filter((r) => r.member === member);
    if (search)
      data = data.filter(
        (r) =>
          (r.notes || "").toLowerCase().includes(search) ||
          (r.source || "").toLowerCase().includes(search) ||
          (r.member || "").toLowerCase().includes(search),
      );

    data = sortByDate(data);

    const tbody = document.getElementById("incomeBody");
    const emptyState = document.getElementById("incomeEmptyState");
    const recordsCount = document.getElementById("incomeRecordsCount");
    const total = data.reduce((s, r) => s + r.amount, 0);

    if (recordsCount) recordsCount.textContent = `${data.length} record(s)`;

    if (!data.length) {
      if (tbody) tbody.innerHTML = "";
      if (emptyState) emptyState.style.display = "block";
      if (recordsCount) recordsCount.textContent = "0 records";
    } else {
      if (emptyState) emptyState.style.display = "none";
      if (tbody) {
        tbody.innerHTML = data
          .map((r) => {
            const sourceClass = getSourceClass(r.source);
            return `
                    <tr>
                        <td>${bsDisplay(r)}</td>
                        <td><span class="source-badge ${sourceClass}">${escapeHtml(r.source || "—")}</span></td>
                        <td>${escapeHtml(r.member || "—")}</td>
                        <td>₹${fmt(r.amount)}</td>
                        <td style="max-width:200px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${escapeHtml(r.notes || "—")}</td>
                        <td class="action-icons">
                            <button class="action-icon edit" onclick='openModal("income", ${JSON.stringify(r).replace(/'/g, "&#39;")})' title="Edit">✏️</button>
                            <button class="action-icon delete" onclick="deleteRecord('income','${r.id}')" title="Delete">🗑️</button>
                        </td>
                    </tr>
                `;
          })
          .join("");
      }
    }

    // Update summary stats
    document.getElementById("incomeSummaryTotal").innerHTML = "₹" + fmt(total);
    document.getElementById("incomeSummaryCount").innerHTML = data.length;
    document.getElementById("incomeTotalMain").innerHTML = "₹" + fmt(total);

    // Calculate this month total
    const now = todayBS();
    const thisMonthTotal = data
      .filter((r) => r.bsY === now.y && r.bsM === now.m)
      .reduce((s, r) => s + r.amount, 0);
    document.getElementById("incomeThisMonth").innerHTML =
      "₹" + fmt(thisMonthTotal);

    // Find top source
    const sourceTotal = {};
    data.forEach((r) => {
      sourceTotal[r.source] = (sourceTotal[r.source] || 0) + r.amount;
    });
    const topSource = Object.entries(sourceTotal).sort(
      (a, b) => b[1] - a[1],
    )[0];
    document.getElementById("incomeTopSource").innerHTML = topSource
      ? topSource[0]
      : "—";
    document.getElementById("incomeSummaryTopSource").innerHTML = topSource
      ? topSource[0]
      : "—";
  }

  function getSourceClass(source) {
    const classes = {
      Salary: "salary",
      Business: "business",
      Agriculture: "agriculture",
      Livestock: "livestock",
      Remittance: "remittance",
    };
    return classes[source] || "default";
  }

  function clearIncomeFilters() {
    document.getElementById("incBSYear").value = "";
    document.getElementById("incBSMonth").value = "";
    document.getElementById("incSourceFilter").value = "";
    document.getElementById("incMemberFilter").value = "";
    document.getElementById("incSearch").value = "";
    renderIncomeTable();
  }
  // ============================================================
  //  INCOME MODAL HELPER FUNCTIONS
  // ============================================================

  function getSourceIcon(source) {
    const icons = {
      Salary: "💼",
      Business: "🏢",
      Agriculture: "🌾",
      Livestock: "🐄",
      Rental: "🏠",
      Remittance: "✈️",
      Other: "📦",
    };
    return icons[source] || "💰";
  }

  function selectSource(source) {
    document.getElementById("f_source").value = source;
    document.querySelectorAll(".source-card").forEach((card) => {
      card.classList.remove("selected");
      if (card.querySelector(".source-card-name")?.innerText === source) {
        card.classList.add("selected");
      }
    });
  }

  function setAmount(amount) {
    document.getElementById("f_amount").value = amount;
    formatAmount();
  }

  function formatAmount() {
    const input = document.getElementById("f_amount");
    if (input) {
      let val = parseFloat(input.value) || 0;
      // Just for display, keep raw value in input
    }
  }

  function setTodayDate() {
    const today = new Date();
    const bs = adToBS(today);
    document.getElementById("f_bsy").value = bs.y;
    document.getElementById("f_bsm").value = bs.m;
    updateDayOptions();
    setTimeout(() => {
      document.getElementById("f_bsd").value = bs.d;
    }, 50);
  }

  function setYesterdayDate() {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const bs = adToBS(yesterday);
    document.getElementById("f_bsy").value = bs.y;
    document.getElementById("f_bsm").value = bs.m;
    updateDayOptions();
    setTimeout(() => {
      document.getElementById("f_bsd").value = bs.d;
    }, 50);
  }
  // =====================================================
  //  MINIMAL LOGIN FUNCTIONS
  // =====================================================

  function initMinimalLoginTabs() {
    const tabs = document.querySelectorAll(".form-tab");
    if (tabs.length === 0) return;

    tabs.forEach((tab) => {
      tab.addEventListener("click", function () {
        const tabName = this.getAttribute("data-tab");

        tabs.forEach((t) => t.classList.remove("active"));
        this.classList.add("active");

        const loginPanel = document.getElementById("loginFormMinimal");
        const registerPanel = document.getElementById("registerFormMinimal");

        if (tabName === "login") {
          if (loginPanel) loginPanel.classList.add("active");
          if (registerPanel) registerPanel.classList.remove("active");
        } else {
          if (loginPanel) loginPanel.classList.remove("active");
          if (registerPanel) registerPanel.classList.add("active");
        }
      });
    });
  }

  function togglePasswordMinimal(fieldId, btn) {
    const field = document.getElementById(fieldId);
    if (field.type === "password") {
      field.type = "text";
      btn.textContent = "🙈";
    } else {
      field.type = "password";
      btn.textContent = "👁";
    }
  }

  function doLoginMinimal() {
    const user = document.getElementById("loginUserMinimal").value.trim();
    const pass = document.getElementById("loginPassMinimal").value;
    const err = document.getElementById("loginErrorMinimal");

    if (!user || !pass) {
      err.textContent = "Please enter username and password.";
      return;
    }

    const users = loadUsers();
    const found = users.find((u) => u.username === user && u.password === pass);

    if (!found) {
      err.textContent = "Incorrect username or password.";
      return;
    }

    localStorage.setItem(
      KEYS.session,
      JSON.stringify({ username: found.username, name: found.name }),
    );
    err.textContent = "";
    startApp(found);
  }
  // =====================================================
  //  NEW LOGIN FUNCTIONS
  // =====================================================

  function togglePasswordField() {
    const passField = document.getElementById("loginPass");
    const toggleBtn = document.getElementById("togglePasswordVisibility");
    if (passField.type === "password") {
      passField.type = "text";
      toggleBtn.textContent = "🙈";
    } else {
      passField.type = "password";
      toggleBtn.textContent = "👁️";
    }
  }

  function showRegisterForm() {
    document.getElementById("registerModal").style.display = "flex";
  }

  function closeRegisterModal() {
    document.getElementById("registerModal").style.display = "none";
    document.getElementById("regError").textContent = "";
    document.getElementById("regName").value = "";
    document.getElementById("regUser").value = "";
    document.getElementById("regPass").value = "";
    document.getElementById("termsCheckbox").checked = false;
  }

  // Override doRegister to work with modal
  window.doRegister = function () {
    const name = document.getElementById("regName").value.trim();
    const user = document.getElementById("regUser").value.trim();
    const pass = document.getElementById("regPass").value;
    const terms = document.getElementById("termsCheckbox").checked;
    const err = document.getElementById("regError");

    if (!name || !user || !pass) {
      err.textContent = "All fields are required.";
      return;
    }

    if (!terms) {
      err.textContent = "Please agree to the Terms & Conditions.";
      return;
    }

    if (pass.length < 3) {
      err.textContent = "Password must be at least 3 characters.";
      return;
    }

    const users = loadUsers();
    if (users.find((u) => u.username === user)) {
      err.textContent = "Username already taken.";
      return;
    }

    users.push({ username: user, password: pass, name });
    saveUsers(users);
    localStorage.setItem(
      KEYS.session,
      JSON.stringify({ username: user, name }),
    );
    err.textContent = "";
    closeRegisterModal();
    startApp({ username: user, name });
  };

  // Make sure doLogin uses the new form
  window.doLogin = function () {
    const user = document.getElementById("loginUser").value.trim();
    const pass = document.getElementById("loginPass").value;
    const err = document.getElementById("loginError");

    if (!user || !pass) {
      if (err) err.textContent = "Please enter username and password.";
      else alert("Please enter username and password.");
      return;
    }

    const users = loadUsers();
    const found = users.find((u) => u.username === user && u.password === pass);

    if (!found) {
      if (err) err.textContent = "Incorrect username or password.";
      else alert("Incorrect username or password.");
      return;
    }

    localStorage.setItem(
      KEYS.session,
      JSON.stringify({ username: found.username, name: found.name }),
    );
    if (err) err.textContent = "";
    startApp(found);
  };

  // Close modal when clicking outside
  document.addEventListener("click", function (e) {
    const modal = document.getElementById("registerModal");
    if (e.target === modal) {
      closeRegisterModal();
    }
  });
  function doRegisterMinimal() {
    const name = document.getElementById("regNameMinimal").value.trim();
    const user = document.getElementById("regUserMinimal").value.trim();
    const pass = document.getElementById("regPassMinimal").value;
    const terms = document.getElementById("termsMinimal").checked;
    const err = document.getElementById("regErrorMinimal");

    if (!name || !user || !pass) {
      err.textContent = "All fields are required.";
      return;
    }

    if (!terms) {
      err.textContent = "Please agree to the Terms & Conditions.";
      return;
    }

    if (pass.length < 3) {
      err.textContent = "Password must be at least 3 characters.";
      return;
    }

    const users = loadUsers();
    if (users.find((u) => u.username === user)) {
      err.textContent = "Username already taken.";
      return;
    }

    users.push({ username: user, password: pass, name });
    saveUsers(users);
    localStorage.setItem(
      KEYS.session,
      JSON.stringify({ username: user, name }),
    );
    err.textContent = "";
    startApp({ username: user, name });
  }

  // Initialize
  document.addEventListener("DOMContentLoaded", function () {
    initMinimalLoginTabs();
  });

  // ====================================================
  //  MOBILE HAMBURGER MENU FIX FOR TOUCH DEVICES
  // ====================================================

  document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburgerBtn");
    const sidebar = document.getElementById("sidebar");
    const backdrop = document.getElementById("sidebarBackdrop");
    const sidebarClose = document.getElementById("sidebarClose");

    if (!hamburger) {
      console.log("Hamburger button not found!");
      return;
    }

    console.log("Mobile menu initializing...");

    function openSidebar(e) {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      console.log("Opening sidebar");
      sidebar.classList.add("open");
      if (backdrop) backdrop.classList.add("open");
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
    }

    function closeSidebar(e) {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      console.log("Closing sidebar");
      sidebar.classList.remove("open");
      if (backdrop) backdrop.classList.remove("open");
      document.body.style.overflow = "";
      document.body.style.position = "";
    }

    // Use both click and touch events for better mobile support
    hamburger.addEventListener("click", openSidebar);
    hamburger.addEventListener("touchstart", openSidebar);

    if (sidebarClose) {
      sidebarClose.addEventListener("click", closeSidebar);
      sidebarClose.addEventListener("touchstart", closeSidebar);
    }

    if (backdrop) {
      backdrop.addEventListener("click", closeSidebar);
      backdrop.addEventListener("touchstart", closeSidebar);
    }

    // Close sidebar when a nav item is clicked/tapped
    document.querySelectorAll(".nav-item").forEach((item) => {
      item.addEventListener("click", function (e) {
        const page = this.getAttribute("data-page");
        if (page) {
          navigate(page);
        }
        closeSidebar();
      });
      item.addEventListener("touchstart", function (e) {
        const page = this.getAttribute("data-page");
        if (page) {
          navigate(page);
        }
        closeSidebar();
      });
    });

    // Debug: Check if button is visible
    const styles = window.getComputedStyle(hamburger);
    console.log("Hamburger display:", styles.display);
    console.log("Hamburger visibility:", styles.visibility);
  });

  // Make functions global
  window.togglePasswordMinimal = togglePasswordMinimal;
  window.doLoginMinimal = doLoginMinimal;
  window.doRegisterMinimal = doRegisterMinimal;
  window.navigate = navigate;
  // Make functions global
  window.selectSource = selectSource;
  window.setAmount = setAmount;
  window.formatAmount = formatAmount;
  window.setTodayDate = setTodayDate;
  window.setYesterdayDate = setYesterdayDate;

  // Override the original renderIncome to use new function
  window.renderIncome = renderIncomeTable;

  window.doRegisterWithTerms = doRegisterWithTerms;
})();

// ============================================================
//  GITHUB CLOUD SYNC - Master JSON Database
// ============================================================

const GITHUB_RAW =
  "https://raw.githubusercontent.com/biplablamsal/gharkhata_sys/main/database.json";
const GITHUB_API =
  "https://api.github.com/repos/biplablamsal/gharkhata_sys/contents/database.json";

// Download data from GitHub JSON to current device
async function downloadFromCloud() {
  showToast("📥 Downloading from cloud...", "info");

  try {
    const response = await fetch(GITHUB_RAW + "?t=" + Date.now());

    if (response.ok) {
      const cloudData = await response.json();

      // Save to current device's localStorage
      if (cloudData.household) saveData("household", cloudData.household);
      if (cloudData.income) saveData("income", cloudData.income);
      if (cloudData.agriculture) saveData("agriculture", cloudData.agriculture);
      if (cloudData.livestock) saveData("livestock", cloudData.livestock);
      if (cloudData.labour) saveData("labour", cloudData.labour);
      if (cloudData.vehicle) saveData("vehicle", cloudData.vehicle);
      if (cloudData.medical) saveData("medical", cloudData.medical);
      if (cloudData.family) saveData("family", cloudData.family);
      if (cloudData.users) saveUsers(cloudData.users);

      showToast("✅ Cloud data downloaded! Refreshing...", "success");
      setTimeout(() => location.reload(), 1000);
    } else if (response.status === 404) {
      showToast(
        "⚠️ No cloud database found. Create one by syncing first.",
        "error",
      );
    }
  } catch (error) {
    console.error(error);
    showToast("❌ Failed to download from cloud", "error");
  }
}

// Sync current device data to GitHub JSON (overwrites cloud database)
async function syncToCloud() {
  showToast("☁️ Syncing to cloud...", "info");

  // Collect all current data
  const cloudData = {
    household: loadData("household"),
    income: loadData("income"),
    agriculture: loadData("agriculture"),
    livestock: loadData("livestock"),
    labour: loadData("labour"),
    vehicle: loadData("vehicle"),
    medical: loadData("medical"),
    family: loadData("family"),
    users: loadUsers(),
    lastUpdated: new Date().toISOString(),
  };

  const content = JSON.stringify(cloudData, null, 2);
  const encodedContent = btoa(unescape(encodeURIComponent(content)));

  try {
    // Check if file exists to get SHA
    let sha = "";
    const fileCheck = await fetch(GITHUB_API);
    if (fileCheck.ok) {
      const fileInfo = await fileCheck.json();
      sha = fileInfo.sha;
    }

    // IMPORTANT: You need a GitHub token
    const GITHUB_TOKEN = prompt(
      "🔐 Enter your GitHub Personal Access Token (create at github.com/settings/tokens):",
    );

    if (!GITHUB_TOKEN) {
      showToast("❌ Token required to sync to cloud", "error");
      return;
    }

    const response = await fetch(GITHUB_API, {
      method: "PUT",
      headers: {
        Accept: "application/vnd.github.v3+json",
        Authorization: `token ${GITHUB_TOKEN}`,
      },
      body: JSON.stringify({
        message: "Sync data from GharKhata",
        content: encodedContent,
        sha: sha,
        branch: "main",
      }),
    });

    if (response.ok) {
      showToast("✅ Synced to cloud! All devices can now download.", "success");
    } else {
      const error = await response.json();
      showToast(
        "❌ Sync failed: " + (error.message || "Check your token"),
        "error",
      );
    }
  } catch (error) {
    console.error(error);
    showToast("❌ Sync failed. Check console for details.", "error");
  }
}

// Connect buttons
document.addEventListener("DOMContentLoaded", function () {
  const downloadBtn = document.getElementById("downloadFromCloudBtn");
  const syncBtn = document.getElementById("syncToCloudBtn");

  if (downloadBtn) downloadBtn.onclick = downloadFromCloud;
  if (syncBtn) syncBtn.onclick = syncToCloud;

  console.log("✅ Cloud sync buttons ready!");
});

// ====================================================
//  MOBILE NAVIGATION FIX - Touch Events
// ====================================================

document.addEventListener("DOMContentLoaded", function () {
  console.log("Fixing mobile navigation...");

  // Get all navigation items
  const navItems = document.querySelectorAll(".nav-item");

  function handleNavigation(e) {
    e.preventDefault();
    e.stopPropagation();

    const page = this.getAttribute("data-page");
    console.log("Navigating to:", page);

    if (page) {
      navigate(page);
      // Close sidebar on mobile after navigation
      const sidebar = document.getElementById("sidebar");
      const backdrop = document.getElementById("sidebarBackdrop");
      if (sidebar && window.innerWidth <= 820) {
        sidebar.classList.remove("open");
        if (backdrop) backdrop.classList.remove("open");
        document.body.style.overflow = "";
      }
    }
  }

  // Add both click and touchstart events for mobile
  navItems.forEach((item) => {
    // Remove any existing listeners to avoid duplicates
    item.removeEventListener("click", handleNavigation);
    item.removeEventListener("touchstart", handleNavigation);

    // Add both events
    item.addEventListener("click", handleNavigation);
    item.addEventListener("touchstart", handleNavigation, { passive: false });

    // Make sure cursor is pointer on mobile
    item.style.cursor = "pointer";
  });

  console.log(
    "✅ Mobile navigation fixed. Found",
    navItems.length,
    "nav items",
  );
});

// Also fix the navigate function to work on mobile
const originalNavigate = navigate;
window.navigate = function (page) {
  console.log("Navigate function called for page:", page);

  const pageEl = document.getElementById("page-" + page);
  if (!pageEl) {
    console.warn(`Page not found: page-${page}`);
    return;
  }

  // Hide all pages
  document.querySelectorAll(".page").forEach((p) => {
    p.classList.remove("active");
  });

  // Show selected page
  pageEl.classList.add("active");

  // Update active nav state
  document.querySelectorAll(".nav-item").forEach((n) => {
    if (n.getAttribute("data-page") === page) {
      n.classList.add("active");
    } else {
      n.classList.remove("active");
    }
  });

  // Update title
  const titles = {
    dashboard: "Dashboard",
    household: "Household Expenses",
    income: "Income Records",
    agriculture: "Agriculture Records",
    livestock: "Livestock Records",
    labour: "Labour Records",
    vehicle: "Vehicle Expenses",
    medical: "Medical Records",
    family: "Family Members",
  };

  const titleEl = document.getElementById("topbarTitle");
  if (titleEl) titleEl.textContent = titles[page] || page;

  // Close sidebar on mobile
  if (window.innerWidth <= 820) {
    const sidebar = document.getElementById("sidebar");
    const backdrop = document.getElementById("sidebarBackdrop");
    if (sidebar) sidebar.classList.remove("open");
    if (backdrop) backdrop.classList.remove("open");
  }

  // Load page content
  if (page === "dashboard") {
    if (typeof renderDashboard === "function") renderDashboard();
  } else if (page === "family") {
    if (typeof renderFamily === "function") renderFamily();
  } else {
    if (typeof renderTable === "function") renderTable(page);
    if (page === "labour" && typeof renderLabourCharts === "function")
      renderLabourCharts();
  }

  console.log("✅ Navigated to", page);
};
