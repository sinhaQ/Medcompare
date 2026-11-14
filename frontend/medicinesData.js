/**
 * medicinesData.js - Client-side database of 48+ medicines with multi-pharmacy pricing
 * Loaded directly by index.html for instant autocomplete, search, and comparisons.
 */
window.ALL_MEDICINES = [
  // ── 1. ANALGESICS, PAIN & FEVER ─────────────────────────────────
  {
    id: 'med-paracetamol',
    name: 'Paracetamol 500mg Tablet',
    slug: 'paracetamol-500mg',
    genericName: 'Acetaminophen 500mg',
    icon: '💊',
    type: 'Analgesic / Antipyretic',
    packSize: 'Strip of 15',
    mrp: 23.50,
    requiresRx: false,
    avgRating: 4.6,
    totalReviews: 2840,
    description: 'Relieves mild to moderate pain including headache, body ache, toothache, and effectively brings down fever.',
    prices: [
      { storeId: 'pe', storeName: 'PharmEasy', logoText: 'PE', bgColor: '#e6f9f7', textColor: '#00b5a3', price: 14.60, mrp: 23.50, stock: 'in', isBest: true, delivery: { mainLabel: 'Today by 8 PM', subLabel: 'Express Delivery', pill: '⚡ Express', speed: 'express' } },
      { storeId: '1mg', storeName: '1mg', logoText: '1mg', bgColor: '#fdeaea', textColor: '#e8393c', price: 16.25, mrp: 23.50, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 10 AM', pill: '🚀 Fast', speed: 'fast' } },
      { storeId: 'nm', storeName: 'Netmeds', logoText: 'NM', bgColor: '#eceeff', textColor: '#4254af', price: 17.10, mrp: 23.50, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 12 PM', pill: '🚀 Fast', speed: 'fast' } },
      { storeId: 'ap', storeName: 'Apollo Pharmacy', logoText: 'AP', bgColor: '#e5f1fb', textColor: '#0061a4', price: 18.80, mrp: 23.50, stock: 'limited', isBest: false, delivery: { mainLabel: '2–3 Days', subLabel: 'by Thu', pill: '📦 Std', speed: 'standard' } },
      { storeId: 'mp', storeName: 'MedPlus', logoText: 'MP', bgColor: '#e6f7ef', textColor: '#007f4e', price: 19.25, mrp: 23.50, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 11 AM', pill: '📦 Std', speed: 'standard' } },
      { storeId: 'az', storeName: 'Amazon Pharmacy', logoText: 'AZ', bgColor: '#fff4e0', textColor: '#ff9900', price: 22.00, mrp: 23.50, stock: 'out', isBest: false, delivery: { mainLabel: 'Unavailable', subLabel: 'Out of Stock', pill: '', speed: 'slow' } }
    ]
  },
  {
    id: 'med-dolo650',
    name: 'Dolo 650mg Tablet',
    slug: 'dolo-650mg',
    genericName: 'Paracetamol 650mg',
    icon: '💊',
    type: 'Analgesic / Antipyretic',
    packSize: 'Strip of 15',
    mrp: 33.60,
    requiresRx: false,
    avgRating: 4.8,
    totalReviews: 6420,
    description: 'Gold-standard fever reducer and body ache relief recommended for viral fever, dengue, flu, and common cold.',
    prices: [
      { storeId: 'pe', storeName: 'PharmEasy', logoText: 'PE', bgColor: '#e6f9f7', textColor: '#00b5a3', price: 26.88, mrp: 33.60, stock: 'in', isBest: true, delivery: { mainLabel: 'Today by 7 PM', subLabel: 'Express Delivery', pill: '⚡ Express', speed: 'express' } },
      { storeId: '1mg', storeName: '1mg', logoText: '1mg', bgColor: '#fdeaea', textColor: '#e8393c', price: 27.50, mrp: 33.60, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 9 AM', pill: '🚀 Fast', speed: 'fast' } },
      { storeId: 'ap', storeName: 'Apollo Pharmacy', logoText: 'AP', bgColor: '#e5f1fb', textColor: '#0061a4', price: 28.50, mrp: 33.60, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 11 AM', pill: '🚀 Fast', speed: 'fast' } },
      { storeId: 'nm', storeName: 'Netmeds', logoText: 'NM', bgColor: '#eceeff', textColor: '#4254af', price: 29.00, mrp: 33.60, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 2 PM', pill: '📦 Std', speed: 'standard' } },
      { storeId: 'mp', storeName: 'MedPlus', logoText: 'MP', bgColor: '#e6f7ef', textColor: '#007f4e', price: 30.20, mrp: 33.60, stock: 'in', isBest: false, delivery: { mainLabel: '2 Days', subLabel: 'by Fri', pill: '📦 Std', speed: 'standard' } },
      { storeId: 'az', storeName: 'Amazon Pharmacy', logoText: 'AZ', bgColor: '#fff4e0', textColor: '#ff9900', price: 31.00, mrp: 33.60, stock: 'limited', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 8 PM', pill: '📦 Std', speed: 'standard' } }
    ]
  },
  {
    id: 'med-crocin500',
    name: 'Crocin 500mg Advance Tablet',
    slug: 'crocin-500mg',
    genericName: 'Paracetamol with Optizorb',
    icon: '💊',
    type: 'Analgesic / Antipyretic',
    packSize: 'Strip of 20',
    mrp: 30.50,
    requiresRx: false,
    avgRating: 4.7,
    totalReviews: 3890,
    description: 'Fast-release Optizorb technology provides pain relief in as fast as 15 minutes without upsetting the stomach.',
    prices: [
      { storeId: '1mg', storeName: '1mg', logoText: '1mg', bgColor: '#fdeaea', textColor: '#e8393c', price: 23.50, mrp: 30.50, stock: 'in', isBest: true, delivery: { mainLabel: 'Today by 8 PM', subLabel: 'Express Delivery', pill: '⚡ Express', speed: 'express' } },
      { storeId: 'pe', storeName: 'PharmEasy', logoText: 'PE', bgColor: '#e6f9f7', textColor: '#00b5a3', price: 24.40, mrp: 30.50, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 10 AM', pill: '🚀 Fast', speed: 'fast' } },
      { storeId: 'ap', storeName: 'Apollo Pharmacy', logoText: 'AP', bgColor: '#e5f1fb', textColor: '#0061a4', price: 25.80, mrp: 30.50, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 12 PM', pill: '📦 Std', speed: 'standard' } },
      { storeId: 'nm', storeName: 'Netmeds', logoText: 'NM', bgColor: '#eceeff', textColor: '#4254af', price: 26.50, mrp: 30.50, stock: 'in', isBest: false, delivery: { mainLabel: '2 Days', subLabel: 'Standard', pill: '📦 Std', speed: 'standard' } }
    ]
  },
  {
    id: 'med-calpol500',
    name: 'Calpol 500mg Tablet',
    slug: 'calpol-500mg',
    genericName: 'Paracetamol 500mg IP',
    icon: '💊',
    type: 'Analgesic / Antipyretic',
    packSize: 'Strip of 15',
    mrp: 22.80,
    requiresRx: false,
    avgRating: 4.6,
    totalReviews: 2150,
    description: 'Trusted paracetamol formulation for pain relief and fever control in adults and adolescents.',
    prices: [
      { storeId: 'pe', storeName: 'PharmEasy', logoText: 'PE', bgColor: '#e6f9f7', textColor: '#00b5a3', price: 16.50, mrp: 22.80, stock: 'in', isBest: true, delivery: { mainLabel: 'Today by 9 PM', subLabel: 'Express Delivery', pill: '⚡ Express', speed: 'express' } },
      { storeId: '1mg', storeName: '1mg', logoText: '1mg', bgColor: '#fdeaea', textColor: '#e8393c', price: 17.80, mrp: 22.80, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 11 AM', pill: '🚀 Fast', speed: 'fast' } },
      { storeId: 'mp', storeName: 'MedPlus', logoText: 'MP', bgColor: '#e6f7ef', textColor: '#007f4e', price: 18.50, mrp: 22.80, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 4 PM', pill: '📦 Std', speed: 'standard' } },
      { storeId: 'nm', storeName: 'Netmeds', logoText: 'NM', bgColor: '#eceeff', textColor: '#4254af', price: 19.00, mrp: 22.80, stock: 'limited', isBest: false, delivery: { mainLabel: '2 Days', subLabel: 'by Thu', pill: '📦 Std', speed: 'standard' } }
    ]
  },
  {
    id: 'med-combiflam',
    name: 'Combiflam Tablet',
    slug: 'combiflam',
    genericName: 'Ibuprofen 400mg + Paracetamol 325mg',
    icon: '💊',
    type: 'NSAID / Pain Relief',
    packSize: 'Strip of 20',
    mrp: 47.80,
    requiresRx: false,
    avgRating: 4.7,
    totalReviews: 5120,
    description: 'Dual-action pain killer and anti-inflammatory medicine for dental pain, muscle aches, joint pain, and period cramps.',
    prices: [
      { storeId: 'pe', storeName: 'PharmEasy', logoText: 'PE', bgColor: '#e6f9f7', textColor: '#00b5a3', price: 36.20, mrp: 47.80, stock: 'in', isBest: true, delivery: { mainLabel: 'Today by 8 PM', subLabel: 'Express Delivery', pill: '⚡ Express', speed: 'express' } },
      { storeId: '1mg', storeName: '1mg', logoText: '1mg', bgColor: '#fdeaea', textColor: '#e8393c', price: 37.80, mrp: 47.80, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 10 AM', pill: '🚀 Fast', speed: 'fast' } },
      { storeId: 'ap', storeName: 'Apollo Pharmacy', logoText: 'AP', bgColor: '#e5f1fb', textColor: '#0061a4', price: 39.50, mrp: 47.80, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 12 PM', pill: '📦 Std', speed: 'standard' } },
      { storeId: 'nm', storeName: 'Netmeds', logoText: 'NM', bgColor: '#eceeff', textColor: '#4254af', price: 41.00, mrp: 47.80, stock: 'limited', isBest: false, delivery: { mainLabel: '2 Days', subLabel: 'by Thu', pill: '📦 Std', speed: 'standard' } }
    ]
  },
  {
    id: 'med-ibuprofen400',
    name: 'Ibuprofen 400mg Tablet',
    slug: 'ibuprofen-400mg',
    genericName: 'Ibuprofen IP 400mg',
    icon: '🟠',
    type: 'NSAID / Pain Relief',
    packSize: 'Strip of 10',
    mrp: 18.75,
    requiresRx: false,
    avgRating: 4.5,
    totalReviews: 1840,
    description: 'Non-steroidal anti-inflammatory drug (NSAID) for swelling, joint inflammation, backache, and arthritis pain.',
    prices: [
      { storeId: '1mg', storeName: '1mg', logoText: '1mg', bgColor: '#fdeaea', textColor: '#e8393c', price: 12.80, mrp: 18.75, stock: 'in', isBest: true, delivery: { mainLabel: 'Today by 9 PM', subLabel: 'Express', pill: '⚡ Express', speed: 'express' } },
      { storeId: 'pe', storeName: 'PharmEasy', logoText: 'PE', bgColor: '#e6f9f7', textColor: '#00b5a3', price: 13.50, mrp: 18.75, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 10 AM', pill: '🚀 Fast', speed: 'fast' } },
      { storeId: 'nm', storeName: 'Netmeds', logoText: 'NM', bgColor: '#eceeff', textColor: '#4254af', price: 14.50, mrp: 18.75, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 3 PM', pill: '📦 Std', speed: 'standard' } }
    ]
  },
  {
    id: 'med-zerodolsp',
    name: 'Zerodol-SP Tablet',
    slug: 'zerodol-sp',
    genericName: 'Aceclofenac 100mg + Paracetamol 325mg + Serratiopeptidase 15mg',
    icon: '💊',
    type: 'Anti-Inflammatory & Pain',
    packSize: 'Strip of 10',
    mrp: 118.00,
    requiresRx: true,
    avgRating: 4.8,
    totalReviews: 4710,
    description: 'Triple active formula that targets deep tissue swelling, post-surgical pain, sports injuries, and severe back pain.',
    prices: [
      { storeId: 'pe', storeName: 'PharmEasy', logoText: 'PE', bgColor: '#e6f9f7', textColor: '#00b5a3', price: 89.50, mrp: 118.00, stock: 'in', isBest: true, delivery: { mainLabel: 'Today by 8 PM', subLabel: 'Express Delivery', pill: '⚡ Express', speed: 'express' } },
      { storeId: '1mg', storeName: '1mg', logoText: '1mg', bgColor: '#fdeaea', textColor: '#e8393c', price: 92.00, mrp: 118.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 10 AM', pill: '🚀 Fast', speed: 'fast' } },
      { storeId: 'ap', storeName: 'Apollo Pharmacy', logoText: 'AP', bgColor: '#e5f1fb', textColor: '#0061a4', price: 96.50, mrp: 118.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 1 PM', pill: '📦 Std', speed: 'standard' } },
      { storeId: 'nm', storeName: 'Netmeds', logoText: 'NM', bgColor: '#eceeff', textColor: '#4254af', price: 99.00, mrp: 118.00, stock: 'in', isBest: false, delivery: { mainLabel: '2 Days', subLabel: 'Standard', pill: '📦 Std', speed: 'standard' } }
    ]
  },
  {
    id: 'med-voveran50',
    name: 'Voveran 50mg Tablet',
    slug: 'voveran-50mg',
    genericName: 'Diclofenac Sodium 50mg',
    icon: '💊',
    type: 'NSAID / Joint Pain',
    packSize: 'Strip of 15',
    mrp: 92.50,
    requiresRx: true,
    avgRating: 4.6,
    totalReviews: 2900,
    description: 'Fast-acting anti-arthritic painkiller for osteoarthritis, rheumatoid arthritis, sprains, and acute fractures.',
    prices: [
      { storeId: '1mg', storeName: '1mg', logoText: '1mg', bgColor: '#fdeaea', textColor: '#e8393c', price: 69.50, mrp: 92.50, stock: 'in', isBest: true, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 10 AM', pill: '🚀 Fast', speed: 'fast' } },
      { storeId: 'pe', storeName: 'PharmEasy', logoText: 'PE', bgColor: '#e6f9f7', textColor: '#00b5a3', price: 71.00, mrp: 92.50, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 11 AM', pill: '🚀 Fast', speed: 'fast' } },
      { storeId: 'ap', storeName: 'Apollo Pharmacy', logoText: 'AP', bgColor: '#e5f1fb', textColor: '#0061a4', price: 74.00, mrp: 92.50, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 2 PM', pill: '📦 Std', speed: 'standard' } }
    ]
  },
  {
    id: 'med-volini',
    name: 'Volini Pain Relief Gel (50g)',
    slug: 'volini-gel-50g',
    genericName: 'Diclofenac Diethylamine + Methyl Salicylate',
    icon: '🧴',
    type: 'Topical Pain Relief',
    packSize: 'Tube of 50g',
    mrp: 165.00,
    requiresRx: false,
    avgRating: 4.8,
    totalReviews: 8120,
    description: 'Deep penetrating pain relief gel for quick recovery from joint pain, neck pain, sprains, and athletic muscle strains.',
    prices: [
      { storeId: 'pe', storeName: 'PharmEasy', logoText: 'PE', bgColor: '#e6f9f7', textColor: '#00b5a3', price: 124.00, mrp: 165.00, stock: 'in', isBest: true, delivery: { mainLabel: 'Today by 7 PM', subLabel: 'Express Delivery', pill: '⚡ Express', speed: 'express' } },
      { storeId: '1mg', storeName: '1mg', logoText: '1mg', bgColor: '#fdeaea', textColor: '#e8393c', price: 128.50, mrp: 165.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 10 AM', pill: '🚀 Fast', speed: 'fast' } },
      { storeId: 'nm', storeName: 'Netmeds', logoText: 'NM', bgColor: '#eceeff', textColor: '#4254af', price: 132.00, mrp: 165.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 12 PM', pill: '📦 Std', speed: 'standard' } },
      { storeId: 'ap', storeName: 'Apollo Pharmacy', logoText: 'AP', bgColor: '#e5f1fb', textColor: '#0061a4', price: 138.00, mrp: 165.00, stock: 'in', isBest: false, delivery: { mainLabel: '2 Days', subLabel: 'Standard', pill: '📦 Std', speed: 'standard' } }
    ]
  },
  {
    id: 'med-ultracet',
    name: 'Ultracet Tablet',
    slug: 'ultracet',
    genericName: 'Tramadol Hydrochloride 37.5mg + Acetaminophen 325mg',
    icon: '💊',
    type: 'Prescription Analgesic',
    packSize: 'Strip of 15',
    mrp: 245.00,
    requiresRx: true,
    avgRating: 4.7,
    totalReviews: 1420,
    description: 'Centrally acting analgesic for the management of moderate to severe acute postoperative and orthopedic pain.',
    prices: [
      { storeId: 'ap', storeName: 'Apollo Pharmacy', logoText: 'AP', bgColor: '#e5f1fb', textColor: '#0061a4', price: 198.00, mrp: 245.00, stock: 'in', isBest: true, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 10 AM', pill: '🚀 Fast', speed: 'fast' } },
      { storeId: '1mg', storeName: '1mg', logoText: '1mg', bgColor: '#fdeaea', textColor: '#e8393c', price: 204.00, mrp: 245.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 11 AM', pill: '🚀 Fast', speed: 'fast' } },
      { storeId: 'pe', storeName: 'PharmEasy', logoText: 'PE', bgColor: '#e6f9f7', textColor: '#00b5a3', price: 210.00, mrp: 245.00, stock: 'limited', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 4 PM', pill: '📦 Std', speed: 'standard' } }
    ]
  },

  // ── 2. ANTIBIOTICS & INFECTION ──────────────────────────────────
  {
    id: 'med-amoxicillin250',
    name: 'Amoxicillin 250mg Capsule',
    slug: 'amoxicillin-250mg',
    genericName: 'Amoxicillin Trihydrate 250mg',
    icon: '💊',
    type: 'Antibiotic',
    packSize: 'Strip of 10',
    mrp: 65.00,
    requiresRx: true,
    avgRating: 4.5,
    totalReviews: 1450,
    description: 'Penicillin-type antibiotic used to treat bacterial infections of ear, nose, throat, chest, and urinary tract.',
    prices: [
      { storeId: '1mg', storeName: '1mg', logoText: '1mg', bgColor: '#fdeaea', textColor: '#e8393c', price: 42.00, mrp: 65.00, stock: 'in', isBest: true, delivery: { mainLabel: 'Today by 9 PM', subLabel: 'Express Delivery', pill: '⚡ Express', speed: 'express' } },
      { storeId: 'pe', storeName: 'PharmEasy', logoText: 'PE', bgColor: '#e6f9f7', textColor: '#00b5a3', price: 44.50, mrp: 65.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 10 AM', pill: '🚀 Fast', speed: 'fast' } },
      { storeId: 'ap', storeName: 'Apollo Pharmacy', logoText: 'AP', bgColor: '#e5f1fb', textColor: '#0061a4', price: 48.00, mrp: 65.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 12 PM', pill: '📦 Std', speed: 'standard' } }
    ]
  },
  {
    id: 'med-augmentin625',
    name: 'Augmentin 625 Duo Tablet',
    slug: 'augmentin-625-duo',
    genericName: 'Amoxicillin 500mg + Clavulanic Acid 125mg',
    icon: '💊',
    type: 'Broad Spectrum Antibiotic',
    packSize: 'Strip of 10',
    mrp: 204.00,
    requiresRx: true,
    avgRating: 4.8,
    totalReviews: 5410,
    description: 'High-efficacy broad-spectrum antibiotic that overcomes bacterial resistance to treat skin, lung, and dental infections.',
    prices: [
      { storeId: 'pe', storeName: 'PharmEasy', logoText: 'PE', bgColor: '#e6f9f7', textColor: '#00b5a3', price: 158.00, mrp: 204.00, stock: 'in', isBest: true, delivery: { mainLabel: 'Today by 8 PM', subLabel: 'Express Delivery', pill: '⚡ Express', speed: 'express' } },
      { storeId: '1mg', storeName: '1mg', logoText: '1mg', bgColor: '#fdeaea', textColor: '#e8393c', price: 164.50, mrp: 204.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 10 AM', pill: '🚀 Fast', speed: 'fast' } },
      { storeId: 'ap', storeName: 'Apollo Pharmacy', logoText: 'AP', bgColor: '#e5f1fb', textColor: '#0061a4', price: 172.00, mrp: 204.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 12 PM', pill: '📦 Std', speed: 'standard' } },
      { storeId: 'nm', storeName: 'Netmeds', logoText: 'NM', bgColor: '#eceeff', textColor: '#4254af', price: 175.00, mrp: 204.00, stock: 'in', isBest: false, delivery: { mainLabel: '2 Days', subLabel: 'Standard', pill: '📦 Std', speed: 'standard' } }
    ]
  },
  {
    id: 'med-azithral500',
    name: 'Azithral 500mg Tablet',
    slug: 'azithral-500mg',
    genericName: 'Azithromycin 500mg IP',
    icon: '💊',
    type: 'Macrolide Antibiotic',
    packSize: 'Strip of 5',
    mrp: 125.00,
    requiresRx: true,
    avgRating: 4.7,
    totalReviews: 4120,
    description: '3-to-5 day short-course antibiotic for throat infection, tonsillitis, sinus, and lower respiratory tract infections.',
    prices: [
      { storeId: 'pe', storeName: 'PharmEasy', logoText: 'PE', bgColor: '#e6f9f7', textColor: '#00b5a3', price: 92.50, mrp: 125.00, stock: 'in', isBest: true, delivery: { mainLabel: 'Today by 8 PM', subLabel: 'Express Delivery', pill: '⚡ Express', speed: 'express' } },
      { storeId: '1mg', storeName: '1mg', logoText: '1mg', bgColor: '#fdeaea', textColor: '#e8393c', price: 95.00, mrp: 125.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 10 AM', pill: '🚀 Fast', speed: 'fast' } },
      { storeId: 'nm', storeName: 'Netmeds', logoText: 'NM', bgColor: '#eceeff', textColor: '#4254af', price: 99.00, mrp: 125.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 1 PM', pill: '📦 Std', speed: 'standard' } },
      { storeId: 'ap', storeName: 'Apollo Pharmacy', logoText: 'AP', bgColor: '#e5f1fb', textColor: '#0061a4', price: 104.00, mrp: 125.00, stock: 'limited', isBest: false, delivery: { mainLabel: '2 Days', subLabel: 'Standard', pill: '📦 Std', speed: 'standard' } }
    ]
  },
  {
    id: 'med-cifran500',
    name: 'Cifran 500mg Tablet',
    slug: 'cifran-500mg',
    genericName: 'Ciprofloxacin 500mg',
    icon: '💊',
    type: 'Fluoroquinolone Antibiotic',
    packSize: 'Strip of 10',
    mrp: 44.50,
    requiresRx: true,
    avgRating: 4.5,
    totalReviews: 1820,
    description: 'Antibacterial medication commonly prescribed for urinary tract infections (UTI), typhoid fever, and infectious diarrhea.',
    prices: [
      { storeId: '1mg', storeName: '1mg', logoText: '1mg', bgColor: '#fdeaea', textColor: '#e8393c', price: 32.50, mrp: 44.50, stock: 'in', isBest: true, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 10 AM', pill: '🚀 Fast', speed: 'fast' } },
      { storeId: 'pe', storeName: 'PharmEasy', logoText: 'PE', bgColor: '#e6f9f7', textColor: '#00b5a3', price: 34.00, mrp: 44.50, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 11 AM', pill: '🚀 Fast', speed: 'fast' } },
      { storeId: 'ap', storeName: 'Apollo Pharmacy', logoText: 'AP', bgColor: '#e5f1fb', textColor: '#0061a4', price: 36.50, mrp: 44.50, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 2 PM', pill: '📦 Std', speed: 'standard' } }
    ]
  },
  {
    id: 'med-taximo200',
    name: 'Taxim-O 200mg Tablet',
    slug: 'taxim-o-200mg',
    genericName: 'Cefixime 200mg IP',
    icon: '💊',
    type: 'Cephalosporin Antibiotic',
    packSize: 'Strip of 10',
    mrp: 108.00,
    requiresRx: true,
    avgRating: 4.6,
    totalReviews: 2980,
    description: 'Oral 3rd-generation cephalosporin for respiratory, typhoid, and uncomplicated urinary tract infections.',
    prices: [
      { storeId: 'pe', storeName: 'PharmEasy', logoText: 'PE', bgColor: '#e6f9f7', textColor: '#00b5a3', price: 81.00, mrp: 108.00, stock: 'in', isBest: true, delivery: { mainLabel: 'Today by 8 PM', subLabel: 'Express Delivery', pill: '⚡ Express', speed: 'express' } },
      { storeId: '1mg', storeName: '1mg', logoText: '1mg', bgColor: '#fdeaea', textColor: '#e8393c', price: 84.50, mrp: 108.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 10 AM', pill: '🚀 Fast', speed: 'fast' } },
      { storeId: 'ap', storeName: 'Apollo Pharmacy', logoText: 'AP', bgColor: '#e5f1fb', textColor: '#0061a4', price: 89.00, mrp: 108.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 12 PM', pill: '📦 Std', speed: 'standard' } }
    ]
  },
  {
    id: 'med-betadine',
    name: 'Betadine 10% Ointment (20g)',
    slug: 'betadine-ointment-20g',
    genericName: 'Povidone Iodine 10% w/w',
    icon: '🧴',
    type: 'Antiseptic & Wound Care',
    packSize: 'Tube of 20g',
    mrp: 120.00,
    requiresRx: false,
    avgRating: 4.8,
    totalReviews: 6710,
    description: 'Broad-spectrum microbicidal antiseptic for treating cuts, burns, wounds, and minor surgical incisions.',
    prices: [
      { storeId: 'pe', storeName: 'PharmEasy', logoText: 'PE', bgColor: '#e6f9f7', textColor: '#00b5a3', price: 96.00, mrp: 120.00, stock: 'in', isBest: true, delivery: { mainLabel: 'Today by 7 PM', subLabel: 'Express Delivery', pill: '⚡ Express', speed: 'express' } },
      { storeId: '1mg', storeName: '1mg', logoText: '1mg', bgColor: '#fdeaea', textColor: '#e8393c', price: 99.50, mrp: 120.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 10 AM', pill: '🚀 Fast', speed: 'fast' } },
      { storeId: 'nm', storeName: 'Netmeds', logoText: 'NM', bgColor: '#eceeff', textColor: '#4254af', price: 102.00, mrp: 120.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 2 PM', pill: '📦 Std', speed: 'standard' } }
    ]
  },
  {
    id: 'med-candid',
    name: 'Candid Mouth Paint (15ml)',
    slug: 'candid-mouth-paint',
    genericName: 'Clotrimazole 1% w/v',
    icon: '🧪',
    type: 'Antifungal Oral Solution',
    packSize: 'Bottle of 15ml',
    mrp: 142.00,
    requiresRx: false,
    avgRating: 4.7,
    totalReviews: 2190,
    description: 'Effective local treatment for oral thrush, fungal mouth sores, and candidal infections of the tongue and gums.',
    prices: [
      { storeId: '1mg', storeName: '1mg', logoText: '1mg', bgColor: '#fdeaea', textColor: '#e8393c', price: 112.00, mrp: 142.00, stock: 'in', isBest: true, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 10 AM', pill: '🚀 Fast', speed: 'fast' } },
      { storeId: 'pe', storeName: 'PharmEasy', logoText: 'PE', bgColor: '#e6f9f7', textColor: '#00b5a3', price: 115.00, mrp: 142.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 12 PM', pill: '🚀 Fast', speed: 'fast' } },
      { storeId: 'ap', storeName: 'Apollo Pharmacy', logoText: 'AP', bgColor: '#e5f1fb', textColor: '#0061a4', price: 120.00, mrp: 142.00, stock: 'in', isBest: false, delivery: { mainLabel: '2 Days', subLabel: 'Standard', pill: '📦 Std', speed: 'standard' } }
    ]
  },

  // ── 3. GASTROINTESTINAL & ACID REFLUX (GERD/PPI) ───────────────
  {
    id: 'med-omeprazole20',
    name: 'Omeprazole 20mg Capsule',
    slug: 'omeprazole-20mg',
    genericName: 'Omeprazole 20mg IP',
    icon: '💊',
    type: 'Antacid / PPI',
    packSize: 'Strip of 15',
    mrp: 52.00,
    requiresRx: false,
    avgRating: 4.6,
    totalReviews: 1680,
    description: 'Proton-pump inhibitor that decreases the amount of stomach acid produced, relieving heartburn and preventing ulcers.',
    prices: [
      { storeId: 'pe', storeName: 'PharmEasy', logoText: 'PE', bgColor: '#e6f9f7', textColor: '#00b5a3', price: 31.00, mrp: 52.00, stock: 'in', isBest: true, delivery: { mainLabel: 'Today by 8 PM', subLabel: 'Express Delivery', pill: '⚡ Express', speed: 'express' } },
      { storeId: 'ap', storeName: 'Apollo Pharmacy', logoText: 'AP', bgColor: '#e5f1fb', textColor: '#0061a4', price: 35.00, mrp: 52.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 10 AM', pill: '🚀 Fast', speed: 'fast' } },
      { storeId: '1mg', storeName: '1mg', logoText: '1mg', bgColor: '#fdeaea', textColor: '#e8393c', price: 36.50, mrp: 52.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 11 AM', pill: '📦 Std', speed: 'standard' } }
    ]
  },
  {
    id: 'med-pan40',
    name: 'Pan 40 Tablet',
    slug: 'pan-40',
    genericName: 'Pantoprazole Gastro-Resistant 40mg',
    icon: '💊',
    type: 'Acid Reflux / GERD',
    packSize: 'Strip of 15',
    mrp: 155.00,
    requiresRx: true,
    avgRating: 4.8,
    totalReviews: 7320,
    description: 'First-line prescription medication for gastroesophageal reflux disease (GERD), hyperacidity, and peptic ulcer healing.',
    prices: [
      { storeId: 'pe', storeName: 'PharmEasy', logoText: 'PE', bgColor: '#e6f9f7', textColor: '#00b5a3', price: 118.00, mrp: 155.00, stock: 'in', isBest: true, delivery: { mainLabel: 'Today by 8 PM', subLabel: 'Express Delivery', pill: '⚡ Express', speed: 'express' } },
      { storeId: '1mg', storeName: '1mg', logoText: '1mg', bgColor: '#fdeaea', textColor: '#e8393c', price: 122.50, mrp: 155.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 10 AM', pill: '🚀 Fast', speed: 'fast' } },
      { storeId: 'nm', storeName: 'Netmeds', logoText: 'NM', bgColor: '#eceeff', textColor: '#4254af', price: 126.00, mrp: 155.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 1 PM', pill: '📦 Std', speed: 'standard' } },
      { storeId: 'ap', storeName: 'Apollo Pharmacy', logoText: 'AP', bgColor: '#e5f1fb', textColor: '#0061a4', price: 131.00, mrp: 155.00, stock: 'in', isBest: false, delivery: { mainLabel: '2 Days', subLabel: 'Standard', pill: '📦 Std', speed: 'standard' } }
    ]
  },
  {
    id: 'med-pand',
    name: 'Pan-D Capsule',
    slug: 'pan-d',
    genericName: 'Pantoprazole 40mg + Domperidone 30mg SR',
    icon: '💊',
    type: 'Acidity & Nausea / Prokinetic',
    packSize: 'Strip of 15',
    mrp: 199.00,
    requiresRx: true,
    avgRating: 4.7,
    totalReviews: 6140,
    description: 'Dual therapy combining an acid suppressor with a prokinetic to relieve acidity, nausea, vomiting, and acid regurgitation.',
    prices: [
      { storeId: 'pe', storeName: 'PharmEasy', logoText: 'PE', bgColor: '#e6f9f7', textColor: '#00b5a3', price: 149.00, mrp: 199.00, stock: 'in', isBest: true, delivery: { mainLabel: 'Today by 8 PM', subLabel: 'Express Delivery', pill: '⚡ Express', speed: 'express' } },
      { storeId: '1mg', storeName: '1mg', logoText: '1mg', bgColor: '#fdeaea', textColor: '#e8393c', price: 154.00, mrp: 199.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 10 AM', pill: '🚀 Fast', speed: 'fast' } },
      { storeId: 'ap', storeName: 'Apollo Pharmacy', logoText: 'AP', bgColor: '#e5f1fb', textColor: '#0061a4', price: 162.00, mrp: 199.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 12 PM', pill: '📦 Std', speed: 'standard' } },
      { storeId: 'nm', storeName: 'Netmeds', logoText: 'NM', bgColor: '#eceeff', textColor: '#4254af', price: 168.00, mrp: 199.00, stock: 'in', isBest: false, delivery: { mainLabel: '2 Days', subLabel: 'Standard', pill: '📦 Std', speed: 'standard' } }
    ]
  },
  {
    id: 'med-razo20',
    name: 'Razo 20mg Tablet',
    slug: 'razo-20mg',
    genericName: 'Rabeprazole Sodium 20mg',
    icon: '💊',
    type: 'Antacid / PPI',
    packSize: 'Strip of 15',
    mrp: 140.00,
    requiresRx: true,
    avgRating: 4.6,
    totalReviews: 2410,
    description: 'Rapid-onset acid blocker for immediate daytime and nighttime relief from stomach burning, gas, and reflux.',
    prices: [
      { storeId: '1mg', storeName: '1mg', logoText: '1mg', bgColor: '#fdeaea', textColor: '#e8393c', price: 105.00, mrp: 140.00, stock: 'in', isBest: true, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 10 AM', pill: '🚀 Fast', speed: 'fast' } },
      { storeId: 'pe', storeName: 'PharmEasy', logoText: 'PE', bgColor: '#e6f9f7', textColor: '#00b5a3', price: 108.50, mrp: 140.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 11 AM', pill: '🚀 Fast', speed: 'fast' } },
      { storeId: 'ap', storeName: 'Apollo Pharmacy', logoText: 'AP', bgColor: '#e5f1fb', textColor: '#0061a4', price: 115.00, mrp: 140.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 2 PM', pill: '📦 Std', speed: 'standard' } }
    ]
  },
  {
    id: 'med-gelusil',
    name: 'Gelusil Antacid Syrup (200ml)',
    slug: 'gelusil-syrup-200ml',
    genericName: 'Aluminium Hydroxide + Magnesium Hydroxide + Simethicone',
    icon: '🧪',
    type: 'Antacid & Antigas Liquid',
    packSize: 'Bottle of 200ml',
    mrp: 132.00,
    requiresRx: false,
    avgRating: 4.8,
    totalReviews: 4890,
    description: 'Soothing mint-flavored liquid providing instant relief in 30 seconds from severe heartburn, acid surge, and gas bloating.',
    prices: [
      { storeId: 'pe', storeName: 'PharmEasy', logoText: 'PE', bgColor: '#e6f9f7', textColor: '#00b5a3', price: 104.00, mrp: 132.00, stock: 'in', isBest: true, delivery: { mainLabel: 'Today by 7 PM', subLabel: 'Express Delivery', pill: '⚡ Express', speed: 'express' } },
      { storeId: '1mg', storeName: '1mg', logoText: '1mg', bgColor: '#fdeaea', textColor: '#e8393c', price: 108.00, mrp: 132.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 10 AM', pill: '🚀 Fast', speed: 'fast' } },
      { storeId: 'nm', storeName: 'Netmeds', logoText: 'NM', bgColor: '#eceeff', textColor: '#4254af', price: 112.00, mrp: 132.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 1 PM', pill: '📦 Std', speed: 'standard' } }
    ]
  },
  {
    id: 'med-digene',
    name: 'Digene Gel Antacid (200ml)',
    slug: 'digene-gel-200ml',
    genericName: 'Magnesium Aluminium Silicate + Simethicone',
    icon: '🧪',
    type: 'Antacid Suspension',
    packSize: 'Bottle of 200ml',
    mrp: 148.00,
    requiresRx: false,
    avgRating: 4.7,
    totalReviews: 5310,
    description: 'Doctor-recommended orange flavor antacid gel with dual soothing action against gas bubbles and gastric pain.',
    prices: [
      { storeId: 'pe', storeName: 'PharmEasy', logoText: 'PE', bgColor: '#e6f9f7', textColor: '#00b5a3', price: 118.00, mrp: 148.00, stock: 'in', isBest: true, delivery: { mainLabel: 'Today by 8 PM', subLabel: 'Express Delivery', pill: '⚡ Express', speed: 'express' } },
      { storeId: '1mg', storeName: '1mg', logoText: '1mg', bgColor: '#fdeaea', textColor: '#e8393c', price: 121.00, mrp: 148.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 10 AM', pill: '🚀 Fast', speed: 'fast' } },
      { storeId: 'ap', storeName: 'Apollo Pharmacy', logoText: 'AP', bgColor: '#e5f1fb', textColor: '#0061a4', price: 126.00, mrp: 148.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 12 PM', pill: '📦 Std', speed: 'standard' } }
    ]
  },
  {
    id: 'med-liv52',
    name: 'Himalaya Liv.52 DS Tablet',
    slug: 'liv-52-ds',
    genericName: 'Herbal Hepatoprotective Formulation',
    icon: '🌿',
    type: 'Ayurvedic Liver Care',
    packSize: 'Bottle of 60',
    mrp: 175.00,
    requiresRx: false,
    avgRating: 4.8,
    totalReviews: 9400,
    description: 'Double-strength herbal hepatoprotective that promotes healthy liver function, metabolism, appetite, and detox.',
    prices: [
      { storeId: 'pe', storeName: 'PharmEasy', logoText: 'PE', bgColor: '#e6f9f7', textColor: '#00b5a3', price: 140.00, mrp: 175.00, stock: 'in', isBest: true, delivery: { mainLabel: 'Today by 7 PM', subLabel: 'Express Delivery', pill: '⚡ Express', speed: 'express' } },
      { storeId: '1mg', storeName: '1mg', logoText: '1mg', bgColor: '#fdeaea', textColor: '#e8393c', price: 144.00, mrp: 175.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 10 AM', pill: '🚀 Fast', speed: 'fast' } },
      { storeId: 'nm', storeName: 'Netmeds', logoText: 'NM', bgColor: '#eceeff', textColor: '#4254af', price: 149.00, mrp: 175.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 2 PM', pill: '📦 Std', speed: 'standard' } },
      { storeId: 'ap', storeName: 'Apollo Pharmacy', logoText: 'AP', bgColor: '#e5f1fb', textColor: '#0061a4', price: 155.00, mrp: 175.00, stock: 'in', isBest: false, delivery: { mainLabel: '2 Days', subLabel: 'Standard', pill: '📦 Std', speed: 'standard' } }
    ]
  },

  // ── 4. DIABETES CARE ────────────────────────────────────────────
  {
    id: 'med-metformin500',
    name: 'Metformin 500mg Tablet',
    slug: 'metformin-500mg',
    genericName: 'Metformin Hydrochloride 500mg IP',
    icon: '💊',
    type: 'Anti-Diabetic',
    packSize: 'Strip of 10',
    mrp: 38.00,
    requiresRx: true,
    avgRating: 4.7,
    totalReviews: 1920,
    description: 'Biguanide antidiabetic that improves insulin sensitivity and reduces hepatic glucose output in Type 2 Diabetes.',
    prices: [
      { storeId: 'pe', storeName: 'PharmEasy', logoText: 'PE', bgColor: '#e6f9f7', textColor: '#00b5a3', price: 24.50, mrp: 38.00, stock: 'in', isBest: true, delivery: { mainLabel: 'Today by 8 PM', subLabel: 'Express Delivery', pill: '⚡ Express', speed: 'express' } },
      { storeId: '1mg', storeName: '1mg', logoText: '1mg', bgColor: '#fdeaea', textColor: '#e8393c', price: 26.00, mrp: 38.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 11 AM', pill: '🚀 Fast', speed: 'fast' } },
      { storeId: 'nm', storeName: 'Netmeds', logoText: 'NM', bgColor: '#eceeff', textColor: '#4254af', price: 28.50, mrp: 38.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 2 PM', pill: '🚀 Fast', speed: 'fast' } },
      { storeId: 'ap', storeName: 'Apollo Pharmacy', logoText: 'AP', bgColor: '#e5f1fb', textColor: '#0061a4', price: 30.00, mrp: 38.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 10 AM', pill: '📦 Std', speed: 'standard' } }
    ]
  },
  {
    id: 'med-glycometgp2',
    name: 'Glycomet-GP 2 Tablet',
    slug: 'glycomet-gp-2',
    genericName: 'Glimepiride 2mg + Metformin 500mg SR',
    icon: '💊',
    type: 'Anti-Diabetic Combination',
    packSize: 'Strip of 15',
    mrp: 145.00,
    requiresRx: true,
    avgRating: 4.8,
    totalReviews: 5120,
    description: 'Synergistic combination of sulfonylurea and biguanide for rigorous 24-hour glycemic control.',
    prices: [
      { storeId: 'pe', storeName: 'PharmEasy', logoText: 'PE', bgColor: '#e6f9f7', textColor: '#00b5a3', price: 108.00, mrp: 145.00, stock: 'in', isBest: true, delivery: { mainLabel: 'Today by 8 PM', subLabel: 'Express Delivery', pill: '⚡ Express', speed: 'express' } },
      { storeId: '1mg', storeName: '1mg', logoText: '1mg', bgColor: '#fdeaea', textColor: '#e8393c', price: 112.50, mrp: 145.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 10 AM', pill: '🚀 Fast', speed: 'fast' } },
      { storeId: 'ap', storeName: 'Apollo Pharmacy', logoText: 'AP', bgColor: '#e5f1fb', textColor: '#0061a4', price: 119.00, mrp: 145.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 1 PM', pill: '📦 Std', speed: 'standard' } },
      { storeId: 'nm', storeName: 'Netmeds', logoText: 'NM', bgColor: '#eceeff', textColor: '#4254af', price: 122.00, mrp: 145.00, stock: 'in', isBest: false, delivery: { mainLabel: '2 Days', subLabel: 'Standard', pill: '📦 Std', speed: 'standard' } }
    ]
  },
  {
    id: 'med-januvia100',
    name: 'Januvia 100mg Tablet',
    slug: 'januvia-100mg',
    genericName: 'Sitagliptin Phosphate 100mg',
    icon: '💊',
    type: 'DPP-4 Inhibitor / Diabetes',
    packSize: 'Strip of 7',
    mrp: 360.00,
    requiresRx: true,
    avgRating: 4.9,
    totalReviews: 1890,
    description: 'Advanced once-daily DPP-4 inhibitor that stimulates natural insulin release with very low risk of hypoglycemia.',
    prices: [
      { storeId: '1mg', storeName: '1mg', logoText: '1mg', bgColor: '#fdeaea', textColor: '#e8393c', price: 295.00, mrp: 360.00, stock: 'in', isBest: true, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 10 AM', pill: '🚀 Fast', speed: 'fast' } },
      { storeId: 'pe', storeName: 'PharmEasy', logoText: 'PE', bgColor: '#e6f9f7', textColor: '#00b5a3', price: 302.00, mrp: 360.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 12 PM', pill: '🚀 Fast', speed: 'fast' } },
      { storeId: 'ap', storeName: 'Apollo Pharmacy', logoText: 'AP', bgColor: '#e5f1fb', textColor: '#0061a4', price: 315.00, mrp: 360.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 4 PM', pill: '📦 Std', speed: 'standard' } }
    ]
  },
  {
    id: 'med-galvusmet',
    name: 'Galvus Met 50/500mg Tablet',
    slug: 'galvus-met-50-500',
    genericName: 'Vildagliptin 50mg + Metformin 500mg',
    icon: '💊',
    type: 'Anti-Diabetic Combination',
    packSize: 'Strip of 10',
    mrp: 285.00,
    requiresRx: true,
    avgRating: 4.7,
    totalReviews: 3100,
    description: 'Comprehensive blood sugar management combining incretin enhancer with insulin sensitizer.',
    prices: [
      { storeId: 'pe', storeName: 'PharmEasy', logoText: 'PE', bgColor: '#e6f9f7', textColor: '#00b5a3', price: 228.00, mrp: 285.00, stock: 'in', isBest: true, delivery: { mainLabel: 'Today by 8 PM', subLabel: 'Express Delivery', pill: '⚡ Express', speed: 'express' } },
      { storeId: '1mg', storeName: '1mg', logoText: '1mg', bgColor: '#fdeaea', textColor: '#e8393c', price: 235.00, mrp: 285.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 10 AM', pill: '🚀 Fast', speed: 'fast' } },
      { storeId: 'ap', storeName: 'Apollo Pharmacy', logoText: 'AP', bgColor: '#e5f1fb', textColor: '#0061a4', price: 245.00, mrp: 285.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 2 PM', pill: '📦 Std', speed: 'standard' } }
    ]
  },
  {
    id: 'med-amaryl1',
    name: 'Amaryl 1mg Tablet',
    slug: 'amaryl-1mg',
    genericName: 'Glimepiride 1mg IP',
    icon: '💊',
    type: 'Sulfonylurea / Diabetes',
    packSize: 'Strip of 30',
    mrp: 185.00,
    requiresRx: true,
    avgRating: 4.6,
    totalReviews: 1420,
    description: 'Long-acting sulfonylurea that stimulates pancreatic beta cells to produce more insulin after meals.',
    prices: [
      { storeId: 'pe', storeName: 'PharmEasy', logoText: 'PE', bgColor: '#e6f9f7', textColor: '#00b5a3', price: 142.00, mrp: 185.00, stock: 'in', isBest: true, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 10 AM', pill: '🚀 Fast', speed: 'fast' } },
      { storeId: '1mg', storeName: '1mg', logoText: '1mg', bgColor: '#fdeaea', textColor: '#e8393c', price: 148.00, mrp: 185.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 11 AM', pill: '🚀 Fast', speed: 'fast' } },
      { storeId: 'nm', storeName: 'Netmeds', logoText: 'NM', bgColor: '#eceeff', textColor: '#4254af', price: 154.00, mrp: 185.00, stock: 'in', isBest: false, delivery: { mainLabel: '2 Days', subLabel: 'Standard', pill: '📦 Std', speed: 'standard' } }
    ]
  },

  // ── 5. CARDIOVASCULAR & HYPERTENSION ────────────────────────────
  {
    id: 'med-telma40',
    name: 'Telma 40mg Tablet',
    slug: 'telma-40mg',
    genericName: 'Telmisartan 40mg IP',
    icon: '💊',
    type: 'Antihypertensive / BP',
    packSize: 'Strip of 30',
    mrp: 220.00,
    requiresRx: true,
    avgRating: 4.8,
    totalReviews: 6180,
    description: 'Angiotensin receptor blocker (ARB) providing smooth 24-hour blood pressure control and cardiovascular protection.',
    prices: [
      { storeId: 'pe', storeName: 'PharmEasy', logoText: 'PE', bgColor: '#e6f9f7', textColor: '#00b5a3', price: 165.00, mrp: 220.00, stock: 'in', isBest: true, delivery: { mainLabel: 'Today by 8 PM', subLabel: 'Express Delivery', pill: '⚡ Express', speed: 'express' } },
      { storeId: '1mg', storeName: '1mg', logoText: '1mg', bgColor: '#fdeaea', textColor: '#e8393c', price: 172.00, mrp: 220.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 10 AM', pill: '🚀 Fast', speed: 'fast' } },
      { storeId: 'ap', storeName: 'Apollo Pharmacy', logoText: 'AP', bgColor: '#e5f1fb', textColor: '#0061a4', price: 180.00, mrp: 220.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 1 PM', pill: '📦 Std', speed: 'standard' } },
      { storeId: 'nm', storeName: 'Netmeds', logoText: 'NM', bgColor: '#eceeff', textColor: '#4254af', price: 185.00, mrp: 220.00, stock: 'in', isBest: false, delivery: { mainLabel: '2 Days', subLabel: 'Standard', pill: '📦 Std', speed: 'standard' } }
    ]
  },
  {
    id: 'med-telmah',
    name: 'Telma-H Tablet',
    slug: 'telma-h',
    genericName: 'Telmisartan 40mg + Hydrochlorothiazide 12.5mg',
    icon: '💊',
    type: 'Antihypertensive + Diuretic',
    packSize: 'Strip of 30',
    mrp: 295.00,
    requiresRx: true,
    avgRating: 4.7,
    totalReviews: 3820,
    description: 'Combination medication for patients whose blood pressure is not adequately controlled on single therapy.',
    prices: [
      { storeId: 'pe', storeName: 'PharmEasy', logoText: 'PE', bgColor: '#e6f9f7', textColor: '#00b5a3', price: 225.00, mrp: 295.00, stock: 'in', isBest: true, delivery: { mainLabel: 'Today by 8 PM', subLabel: 'Express Delivery', pill: '⚡ Express', speed: 'express' } },
      { storeId: '1mg', storeName: '1mg', logoText: '1mg', bgColor: '#fdeaea', textColor: '#e8393c', price: 232.00, mrp: 295.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 10 AM', pill: '🚀 Fast', speed: 'fast' } },
      { storeId: 'ap', storeName: 'Apollo Pharmacy', logoText: 'AP', bgColor: '#e5f1fb', textColor: '#0061a4', price: 245.00, mrp: 295.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 2 PM', pill: '📦 Std', speed: 'standard' } }
    ]
  },
  {
    id: 'med-amlong5',
    name: 'Amlong 5mg Tablet',
    slug: 'amlong-5mg',
    genericName: 'Amlodipine Besylate 5mg',
    icon: '💊',
    type: 'Calcium Channel Blocker',
    packSize: 'Strip of 15',
    mrp: 48.00,
    requiresRx: true,
    avgRating: 4.6,
    totalReviews: 2410,
    description: 'Relaxes arterial blood vessels, lowering high blood pressure and preventing angina (chest pain).',
    prices: [
      { storeId: '1mg', storeName: '1mg', logoText: '1mg', bgColor: '#fdeaea', textColor: '#e8393c', price: 34.00, mrp: 48.00, stock: 'in', isBest: true, delivery: { mainLabel: 'Today by 9 PM', subLabel: 'Express Delivery', pill: '⚡ Express', speed: 'express' } },
      { storeId: 'pe', storeName: 'PharmEasy', logoText: 'PE', bgColor: '#e6f9f7', textColor: '#00b5a3', price: 36.50, mrp: 48.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 10 AM', pill: '🚀 Fast', speed: 'fast' } },
      { storeId: 'nm', storeName: 'Netmeds', logoText: 'NM', bgColor: '#eceeff', textColor: '#4254af', price: 38.00, mrp: 48.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 1 PM', pill: '📦 Std', speed: 'standard' } }
    ]
  },
  {
    id: 'med-atorva20',
    name: 'Atorva 20mg Tablet',
    slug: 'atorva-20mg',
    genericName: 'Atorvastatin Calcium 20mg IP',
    icon: '💊',
    type: 'Cholesterol / Statin',
    packSize: 'Strip of 15',
    mrp: 190.00,
    requiresRx: true,
    avgRating: 4.8,
    totalReviews: 4900,
    description: 'Potent statin that substantially lowers LDL cholesterol and triglycerides while reducing heart attack risks.',
    prices: [
      { storeId: 'pe', storeName: 'PharmEasy', logoText: 'PE', bgColor: '#e6f9f7', textColor: '#00b5a3', price: 142.00, mrp: 190.00, stock: 'in', isBest: true, delivery: { mainLabel: 'Today by 8 PM', subLabel: 'Express Delivery', pill: '⚡ Express', speed: 'express' } },
      { storeId: '1mg', storeName: '1mg', logoText: '1mg', bgColor: '#fdeaea', textColor: '#e8393c', price: 148.00, mrp: 190.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 10 AM', pill: '🚀 Fast', speed: 'fast' } },
      { storeId: 'ap', storeName: 'Apollo Pharmacy', logoText: 'AP', bgColor: '#e5f1fb', textColor: '#0061a4', price: 158.00, mrp: 190.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 12 PM', pill: '📦 Std', speed: 'standard' } },
      { storeId: 'nm', storeName: 'Netmeds', logoText: 'NM', bgColor: '#eceeff', textColor: '#4254af', price: 162.00, mrp: 190.00, stock: 'in', isBest: false, delivery: { mainLabel: '2 Days', subLabel: 'Standard', pill: '📦 Std', speed: 'standard' } }
    ]
  },
  {
    id: 'med-rosuvas10',
    name: 'Rosuvas 10mg Tablet',
    slug: 'rosuvas-10mg',
    genericName: 'Rosuvastatin 10mg',
    icon: '💊',
    type: 'Cholesterol Lowering / Statin',
    packSize: 'Strip of 15',
    mrp: 215.00,
    requiresRx: true,
    avgRating: 4.7,
    totalReviews: 3200,
    description: 'High-potency lipid regulator for prevention of cardiovascular events in hyperlipidemia patients.',
    prices: [
      { storeId: '1mg', storeName: '1mg', logoText: '1mg', bgColor: '#fdeaea', textColor: '#e8393c', price: 165.00, mrp: 215.00, stock: 'in', isBest: true, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 10 AM', pill: '🚀 Fast', speed: 'fast' } },
      { storeId: 'pe', storeName: 'PharmEasy', logoText: 'PE', bgColor: '#e6f9f7', textColor: '#00b5a3', price: 170.00, mrp: 215.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 11 AM', pill: '🚀 Fast', speed: 'fast' } },
      { storeId: 'ap', storeName: 'Apollo Pharmacy', logoText: 'AP', bgColor: '#e5f1fb', textColor: '#0061a4', price: 179.00, mrp: 215.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 2 PM', pill: '📦 Std', speed: 'standard' } }
    ]
  },
  {
    id: 'med-ecosprin75',
    name: 'Ecosprin 75mg Tablet',
    slug: 'ecosprin-75mg',
    genericName: 'Aspirin Gastro-Resistant 75mg',
    icon: '💊',
    type: 'Blood Thinner / Antiplatelet',
    packSize: 'Strip of 14',
    mrp: 5.50,
    requiresRx: true,
    avgRating: 4.9,
    totalReviews: 9200,
    description: 'Low-dose enteric-coated aspirin preventing abnormal blood clots in coronary arteries and stents.',
    prices: [
      { storeId: 'pe', storeName: 'PharmEasy', logoText: 'PE', bgColor: '#e6f9f7', textColor: '#00b5a3', price: 4.60, mrp: 5.50, stock: 'in', isBest: true, delivery: { mainLabel: 'Today by 8 PM', subLabel: 'Express Delivery', pill: '⚡ Express', speed: 'express' } },
      { storeId: '1mg', storeName: '1mg', logoText: '1mg', bgColor: '#fdeaea', textColor: '#e8393c', price: 4.80, mrp: 5.50, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 10 AM', pill: '🚀 Fast', speed: 'fast' } },
      { storeId: 'ap', storeName: 'Apollo Pharmacy', logoText: 'AP', bgColor: '#e5f1fb', textColor: '#0061a4', price: 5.00, mrp: 5.50, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 12 PM', pill: '📦 Std', speed: 'standard' } }
    ]
  },
  {
    id: 'med-concor5',
    name: 'Concor 5mg Tablet',
    slug: 'concor-5mg',
    genericName: 'Bisoprolol Fumarate 5mg',
    icon: '💊',
    type: 'Beta Blocker / Cardiac',
    packSize: 'Strip of 10',
    mrp: 128.00,
    requiresRx: true,
    avgRating: 4.8,
    totalReviews: 2100,
    description: 'Cardioselective beta-blocker that slows heart rate, lowers blood pressure, and relieves heart strain.',
    prices: [
      { storeId: 'pe', storeName: 'PharmEasy', logoText: 'PE', bgColor: '#e6f9f7', textColor: '#00b5a3', price: 98.00, mrp: 128.00, stock: 'in', isBest: true, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 10 AM', pill: '🚀 Fast', speed: 'fast' } },
      { storeId: '1mg', storeName: '1mg', logoText: '1mg', bgColor: '#fdeaea', textColor: '#e8393c', price: 102.50, mrp: 128.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 11 AM', pill: '🚀 Fast', speed: 'fast' } },
      { storeId: 'ap', storeName: 'Apollo Pharmacy', logoText: 'AP', bgColor: '#e5f1fb', textColor: '#0061a4', price: 108.00, mrp: 128.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 3 PM', pill: '📦 Std', speed: 'standard' } }
    ]
  },

  // ── 6. ALLERGY, ASTHMA & RESPIRATORY ────────────────────────────
  {
    id: 'med-allegra120',
    name: 'Allegra 120mg Tablet',
    slug: 'allegra-120mg',
    genericName: 'Fexofenadine Hydrochloride 120mg',
    icon: '💊',
    type: 'Non-Drowsy Antihistamine',
    packSize: 'Strip of 10',
    mrp: 218.00,
    requiresRx: false,
    avgRating: 4.8,
    totalReviews: 5310,
    description: 'Non-sedating 24-hour allergy medicine for runny nose, sneezing, itchy watery eyes, and skin hives.',
    prices: [
      { storeId: 'pe', storeName: 'PharmEasy', logoText: 'PE', bgColor: '#e6f9f7', textColor: '#00b5a3', price: 168.00, mrp: 218.00, stock: 'in', isBest: true, delivery: { mainLabel: 'Today by 8 PM', subLabel: 'Express Delivery', pill: '⚡ Express', speed: 'express' } },
      { storeId: '1mg', storeName: '1mg', logoText: '1mg', bgColor: '#fdeaea', textColor: '#e8393c', price: 174.00, mrp: 218.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 10 AM', pill: '🚀 Fast', speed: 'fast' } },
      { storeId: 'nm', storeName: 'Netmeds', logoText: 'NM', bgColor: '#eceeff', textColor: '#4254af', price: 179.00, mrp: 218.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 1 PM', pill: '📦 Std', speed: 'standard' } },
      { storeId: 'ap', storeName: 'Apollo Pharmacy', logoText: 'AP', bgColor: '#e5f1fb', textColor: '#0061a4', price: 186.00, mrp: 218.00, stock: 'in', isBest: false, delivery: { mainLabel: '2 Days', subLabel: 'Standard', pill: '📦 Std', speed: 'standard' } }
    ]
  },
  {
    id: 'med-cetirizine10',
    name: 'Cetirizine 10mg Tablet',
    slug: 'cetirizine-10mg',
    genericName: 'Cetirizine Dihydrochloride 10mg',
    icon: '💊',
    type: 'Antiallergic',
    packSize: 'Strip of 10',
    mrp: 21.00,
    requiresRx: false,
    avgRating: 4.6,
    totalReviews: 3100,
    description: 'Fast-acting antiallergy tablet for seasonal rhinitis, dust allergy, insect bites, and urticaria.',
    prices: [
      { storeId: 'pe', storeName: 'PharmEasy', logoText: 'PE', bgColor: '#e6f9f7', textColor: '#00b5a3', price: 14.50, mrp: 21.00, stock: 'in', isBest: true, delivery: { mainLabel: 'Today by 8 PM', subLabel: 'Express Delivery', pill: '⚡ Express', speed: 'express' } },
      { storeId: '1mg', storeName: '1mg', logoText: '1mg', bgColor: '#fdeaea', textColor: '#e8393c', price: 15.80, mrp: 21.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 10 AM', pill: '🚀 Fast', speed: 'fast' } },
      { storeId: 'ap', storeName: 'Apollo Pharmacy', logoText: 'AP', bgColor: '#e5f1fb', textColor: '#0061a4', price: 17.00, mrp: 21.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 12 PM', pill: '📦 Std', speed: 'standard' } }
    ]
  },
  {
    id: 'med-montairlc',
    name: 'Montair-LC Tablet',
    slug: 'montair-lc',
    genericName: 'Montelukast 10mg + Levocetirizine 5mg',
    icon: '💊',
    type: 'Respiratory & Allergy Care',
    packSize: 'Strip of 15',
    mrp: 320.00,
    requiresRx: true,
    avgRating: 4.8,
    totalReviews: 4890,
    description: 'Blocks leukotrienes and histamines to prevent asthma attacks, wheezing, and chronic allergic rhinitis.',
    prices: [
      { storeId: 'pe', storeName: 'PharmEasy', logoText: 'PE', bgColor: '#e6f9f7', textColor: '#00b5a3', price: 242.00, mrp: 320.00, stock: 'in', isBest: true, delivery: { mainLabel: 'Today by 8 PM', subLabel: 'Express Delivery', pill: '⚡ Express', speed: 'express' } },
      { storeId: '1mg', storeName: '1mg', logoText: '1mg', bgColor: '#fdeaea', textColor: '#e8393c', price: 249.00, mrp: 320.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 10 AM', pill: '🚀 Fast', speed: 'fast' } },
      { storeId: 'ap', storeName: 'Apollo Pharmacy', logoText: 'AP', bgColor: '#e5f1fb', textColor: '#0061a4', price: 260.00, mrp: 320.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 1 PM', pill: '📦 Std', speed: 'standard' } },
      { storeId: 'nm', storeName: 'Netmeds', logoText: 'NM', bgColor: '#eceeff', textColor: '#4254af', price: 268.00, mrp: 320.00, stock: 'in', isBest: false, delivery: { mainLabel: '2 Days', subLabel: 'Standard', pill: '📦 Std', speed: 'standard' } }
    ]
  },
  {
    id: 'med-asthalin',
    name: 'Asthalin Inhaler (100mcg)',
    slug: 'asthalin-inhaler',
    genericName: 'Salbutamol (Albuterol) 100mcg',
    icon: '💨',
    type: 'Bronchodilator / Rescue Inhaler',
    packSize: '200 Metered Doses',
    mrp: 165.00,
    requiresRx: true,
    avgRating: 4.9,
    totalReviews: 8120,
    description: 'Fast-acting emergency rescue inhaler that immediately opens up constricted airways during asthma or COPD episodes.',
    prices: [
      { storeId: 'pe', storeName: 'PharmEasy', logoText: 'PE', bgColor: '#e6f9f7', textColor: '#00b5a3', price: 132.00, mrp: 165.00, stock: 'in', isBest: true, delivery: { mainLabel: 'Today by 7 PM', subLabel: 'Express Delivery', pill: '⚡ Express', speed: 'express' } },
      { storeId: '1mg', storeName: '1mg', logoText: '1mg', bgColor: '#fdeaea', textColor: '#e8393c', price: 136.00, mrp: 165.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 10 AM', pill: '🚀 Fast', speed: 'fast' } },
      { storeId: 'ap', storeName: 'Apollo Pharmacy', logoText: 'AP', bgColor: '#e5f1fb', textColor: '#0061a4', price: 142.00, mrp: 165.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 12 PM', pill: '📦 Std', speed: 'standard' } }
    ]
  },
  {
    id: 'med-budecort200',
    name: 'Budecort 200 Inhaler',
    slug: 'budecort-200-inhaler',
    genericName: 'Budesonide 200mcg Inhalation Aerosol',
    icon: '💨',
    type: 'Corticosteroid Inhaler',
    packSize: '200 Metered Doses',
    mrp: 380.00,
    requiresRx: true,
    avgRating: 4.8,
    totalReviews: 3100,
    description: 'Daily maintenance controller inhaler reducing swelling and inflammation in the bronchial airways.',
    prices: [
      { storeId: '1mg', storeName: '1mg', logoText: '1mg', bgColor: '#fdeaea', textColor: '#e8393c', price: 304.00, mrp: 380.00, stock: 'in', isBest: true, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 10 AM', pill: '🚀 Fast', speed: 'fast' } },
      { storeId: 'pe', storeName: 'PharmEasy', logoText: 'PE', bgColor: '#e6f9f7', textColor: '#00b5a3', price: 312.00, mrp: 380.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 11 AM', pill: '🚀 Fast', speed: 'fast' } },
      { storeId: 'ap', storeName: 'Apollo Pharmacy', logoText: 'AP', bgColor: '#e5f1fb', textColor: '#0061a4', price: 328.00, mrp: 380.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 3 PM', pill: '📦 Std', speed: 'standard' } }
    ]
  },
  {
    id: 'med-otrivin',
    name: 'Otrivin Oxy Fast Relief Nasal Spray (10ml)',
    slug: 'otrivin-nasal-spray',
    genericName: 'Oxymetazoline Hydrochloride 0.05% w/v',
    icon: '🧪',
    type: 'Nasal Decongestant',
    packSize: 'Bottle of 10ml',
    mrp: 98.00,
    requiresRx: false,
    avgRating: 4.7,
    totalReviews: 6190,
    description: 'Unblocks stuffy nose in 25 seconds and provides up to 12 hours of breathing relief from cold and sinus congestion.',
    prices: [
      { storeId: 'pe', storeName: 'PharmEasy', logoText: 'PE', bgColor: '#e6f9f7', textColor: '#00b5a3', price: 78.00, mrp: 98.00, stock: 'in', isBest: true, delivery: { mainLabel: 'Today by 7 PM', subLabel: 'Express Delivery', pill: '⚡ Express', speed: 'express' } },
      { storeId: '1mg', storeName: '1mg', logoText: '1mg', bgColor: '#fdeaea', textColor: '#e8393c', price: 81.50, mrp: 98.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 10 AM', pill: '🚀 Fast', speed: 'fast' } },
      { storeId: 'nm', storeName: 'Netmeds', logoText: 'NM', bgColor: '#eceeff', textColor: '#4254af', price: 84.00, mrp: 98.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 1 PM', pill: '📦 Std', speed: 'standard' } }
    ]
  },
  {
    id: 'med-alexcough',
    name: 'Alex Cough Syrup (100ml)',
    slug: 'alex-cough-syrup',
    genericName: 'Chlorpheniramine + Dextromethorphan + Phenylephrine',
    icon: '🧪',
    type: 'Dry Cough Relief Syrup',
    packSize: 'Bottle of 100ml',
    mrp: 145.00,
    requiresRx: false,
    avgRating: 4.6,
    totalReviews: 3200,
    description: 'Soothes throat tickle and controls unproductive dry cough without heavy sedation.',
    prices: [
      { storeId: 'pe', storeName: 'PharmEasy', logoText: 'PE', bgColor: '#e6f9f7', textColor: '#00b5a3', price: 114.00, mrp: 145.00, stock: 'in', isBest: true, delivery: { mainLabel: 'Today by 8 PM', subLabel: 'Express Delivery', pill: '⚡ Express', speed: 'express' } },
      { storeId: '1mg', storeName: '1mg', logoText: '1mg', bgColor: '#fdeaea', textColor: '#e8393c', price: 118.00, mrp: 145.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 10 AM', pill: '🚀 Fast', speed: 'fast' } },
      { storeId: 'ap', storeName: 'Apollo Pharmacy', logoText: 'AP', bgColor: '#e5f1fb', textColor: '#0061a4', price: 124.00, mrp: 145.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 12 PM', pill: '📦 Std', speed: 'standard' } }
    ]
  },

  // ── 7. THYROID CARE ─────────────────────────────────────────────
  {
    id: 'med-thyronorm50',
    name: 'Thyronorm 50mcg Tablet',
    slug: 'thyronorm-50mcg',
    genericName: 'Levothyroxine Sodium 50mcg',
    icon: '🦋',
    type: 'Thyroid Hormone',
    packSize: 'Bottle of 120',
    mrp: 145.00,
    requiresRx: true,
    avgRating: 4.8,
    totalReviews: 7890,
    description: 'Synthetic thyroid hormone replacement therapy restoring optimal basal metabolic rate and energy levels in hypothyroidism.',
    prices: [
      { storeId: 'pe', storeName: 'PharmEasy', logoText: 'PE', bgColor: '#e6f9f7', textColor: '#00b5a3', price: 112.00, mrp: 145.00, stock: 'in', isBest: true, delivery: { mainLabel: 'Today by 8 PM', subLabel: 'Express Delivery', pill: '⚡ Express', speed: 'express' } },
      { storeId: '1mg', storeName: '1mg', logoText: '1mg', bgColor: '#fdeaea', textColor: '#e8393c', price: 116.50, mrp: 145.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 10 AM', pill: '🚀 Fast', speed: 'fast' } },
      { storeId: 'ap', storeName: 'Apollo Pharmacy', logoText: 'AP', bgColor: '#e5f1fb', textColor: '#0061a4', price: 122.00, mrp: 145.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 12 PM', pill: '📦 Std', speed: 'standard' } },
      { storeId: 'nm', storeName: 'Netmeds', logoText: 'NM', bgColor: '#eceeff', textColor: '#4254af', price: 125.00, mrp: 145.00, stock: 'in', isBest: false, delivery: { mainLabel: '2 Days', subLabel: 'Standard', pill: '📦 Std', speed: 'standard' } }
    ]
  },
  {
    id: 'med-thyronorm100',
    name: 'Thyronorm 100mcg Tablet',
    slug: 'thyronorm-100mcg',
    genericName: 'Levothyroxine Sodium 100mcg',
    icon: '🦋',
    type: 'Thyroid Hormone',
    packSize: 'Bottle of 120',
    mrp: 195.00,
    requiresRx: true,
    avgRating: 4.8,
    totalReviews: 6410,
    description: 'Targeted maintenance dosage for adult hypothyroidism maintaining stable TSH and T4 levels.',
    prices: [
      { storeId: 'pe', storeName: 'PharmEasy', logoText: 'PE', bgColor: '#e6f9f7', textColor: '#00b5a3', price: 152.00, mrp: 195.00, stock: 'in', isBest: true, delivery: { mainLabel: 'Today by 8 PM', subLabel: 'Express Delivery', pill: '⚡ Express', speed: 'express' } },
      { storeId: '1mg', storeName: '1mg', logoText: '1mg', bgColor: '#fdeaea', textColor: '#e8393c', price: 157.00, mrp: 195.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 10 AM', pill: '🚀 Fast', speed: 'fast' } },
      { storeId: 'ap', storeName: 'Apollo Pharmacy', logoText: 'AP', bgColor: '#e5f1fb', textColor: '#0061a4', price: 165.00, mrp: 195.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 2 PM', pill: '📦 Std', speed: 'standard' } }
    ]
  },
  {
    id: 'med-eltroxin50',
    name: 'Eltroxin 50mcg Tablet',
    slug: 'eltroxin-50mcg',
    genericName: 'Thyroxine Sodium 50mcg',
    icon: '🦋',
    type: 'Thyroid Hormone',
    packSize: 'Bottle of 120',
    mrp: 138.00,
    requiresRx: true,
    avgRating: 4.7,
    totalReviews: 2980,
    description: 'Bioequivalent thyroxine substitute used extensively for managing thyroid hormone deficiency.',
    prices: [
      { storeId: '1mg', storeName: '1mg', logoText: '1mg', bgColor: '#fdeaea', textColor: '#e8393c', price: 108.00, mrp: 138.00, stock: 'in', isBest: true, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 10 AM', pill: '🚀 Fast', speed: 'fast' } },
      { storeId: 'pe', storeName: 'PharmEasy', logoText: 'PE', bgColor: '#e6f9f7', textColor: '#00b5a3', price: 112.00, mrp: 138.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 11 AM', pill: '🚀 Fast', speed: 'fast' } },
      { storeId: 'nm', storeName: 'Netmeds', logoText: 'NM', bgColor: '#eceeff', textColor: '#4254af', price: 118.00, mrp: 138.00, stock: 'in', isBest: false, delivery: { mainLabel: '2 Days', subLabel: 'Standard', pill: '📦 Std', speed: 'standard' } }
    ]
  },

  // ── 8. VITAMINS, MINERALS & DAILY SUPPLEMENTS ───────────────────
  {
    id: 'med-vitamind3',
    name: 'Vitamin D3 60K IU Capsule',
    slug: 'vitamin-d3',
    genericName: 'Cholecalciferol 60,000 IU',
    icon: '🟠',
    type: 'Vitamin Supplement',
    packSize: 'Pack of 4',
    mrp: 140.00,
    requiresRx: false,
    avgRating: 4.8,
    totalReviews: 8120,
    description: 'Weekly high-potency vitamin D3 capsule addressing bone softening, muscle fatigue, and immunity deficits.',
    prices: [
      { storeId: 'pe', storeName: 'PharmEasy', logoText: 'PE', bgColor: '#e6f9f7', textColor: '#00b5a3', price: 89.00, mrp: 140.00, stock: 'in', isBest: true, delivery: { mainLabel: 'Today by 7 PM', subLabel: 'Express Delivery', pill: '⚡ Express', speed: 'express' } },
      { storeId: '1mg', storeName: '1mg', logoText: '1mg', bgColor: '#fdeaea', textColor: '#e8393c', price: 95.00, mrp: 140.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 9 AM', pill: '🚀 Fast', speed: 'fast' } },
      { storeId: 'nm', storeName: 'Netmeds', logoText: 'NM', bgColor: '#eceeff', textColor: '#4254af', price: 99.00, mrp: 140.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 1 PM', pill: '📦 Std', speed: 'standard' } },
      { storeId: 'ap', storeName: 'Apollo Pharmacy', logoText: 'AP', bgColor: '#e5f1fb', textColor: '#0061a4', price: 105.00, mrp: 140.00, stock: 'in', isBest: false, delivery: { mainLabel: '2 Days', subLabel: 'Standard', pill: '📦 Std', speed: 'standard' } }
    ]
  },
  {
    id: 'med-becosulesz',
    name: 'Becosules Z Capsules',
    slug: 'becosules-z',
    genericName: 'Vitamin B-Complex + Vitamin C + Zinc',
    icon: '💊',
    type: 'Multivitamin / Immunity',
    packSize: 'Strip of 20',
    mrp: 48.00,
    requiresRx: false,
    avgRating: 4.8,
    totalReviews: 6890,
    description: 'Classic therapeutic multivitamin for mouth ulcers, fatigue, energy restoration, and post-antibiotic recovery.',
    prices: [
      { storeId: 'pe', storeName: 'PharmEasy', logoText: 'PE', bgColor: '#e6f9f7', textColor: '#00b5a3', price: 36.50, mrp: 48.00, stock: 'in', isBest: true, delivery: { mainLabel: 'Today by 8 PM', subLabel: 'Express Delivery', pill: '⚡ Express', speed: 'express' } },
      { storeId: '1mg', storeName: '1mg', logoText: '1mg', bgColor: '#fdeaea', textColor: '#e8393c', price: 38.00, mrp: 48.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 10 AM', pill: '🚀 Fast', speed: 'fast' } },
      { storeId: 'ap', storeName: 'Apollo Pharmacy', logoText: 'AP', bgColor: '#e5f1fb', textColor: '#0061a4', price: 40.00, mrp: 48.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 12 PM', pill: '📦 Std', speed: 'standard' } },
      { storeId: 'nm', storeName: 'Netmeds', logoText: 'NM', bgColor: '#eceeff', textColor: '#4254af', price: 42.00, mrp: 48.00, stock: 'in', isBest: false, delivery: { mainLabel: '2 Days', subLabel: 'Standard', pill: '📦 Std', speed: 'standard' } }
    ]
  },
  {
    id: 'med-neurobion',
    name: 'Neurobion Forte Tablet',
    slug: 'neurobion-forte',
    genericName: 'Vitamin B1 + B2 + B3 + B5 + B6 + B12',
    icon: '💊',
    type: 'Nerve Health & B-Vitamins',
    packSize: 'Strip of 30',
    mrp: 42.50,
    requiresRx: false,
    avgRating: 4.7,
    totalReviews: 7420,
    description: 'Nerve-strengthening formulation treating numbness, tingling sensations in hands and feet, and chronic weakness.',
    prices: [
      { storeId: 'pe', storeName: 'PharmEasy', logoText: 'PE', bgColor: '#e6f9f7', textColor: '#00b5a3', price: 33.00, mrp: 42.50, stock: 'in', isBest: true, delivery: { mainLabel: 'Today by 8 PM', subLabel: 'Express Delivery', pill: '⚡ Express', speed: 'express' } },
      { storeId: '1mg', storeName: '1mg', logoText: '1mg', bgColor: '#fdeaea', textColor: '#e8393c', price: 34.50, mrp: 42.50, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 10 AM', pill: '🚀 Fast', speed: 'fast' } },
      { storeId: 'ap', storeName: 'Apollo Pharmacy', logoText: 'AP', bgColor: '#e5f1fb', textColor: '#0061a4', price: 36.00, mrp: 42.50, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 1 PM', pill: '📦 Std', speed: 'standard' } }
    ]
  },
  {
    id: 'med-shelcal500',
    name: 'Shelcal 500mg Tablet',
    slug: 'shelcal-500mg',
    genericName: 'Calcium 500mg + Vitamin D3 250 IU',
    icon: '💊',
    type: 'Bone Health / Calcium',
    packSize: 'Strip of 15',
    mrp: 131.00,
    requiresRx: false,
    avgRating: 4.8,
    totalReviews: 5490,
    description: 'Daily dietary calcium supplement with natural oyster shell source for strong bones, joints, and osteoporosis prevention.',
    prices: [
      { storeId: 'pe', storeName: 'PharmEasy', logoText: 'PE', bgColor: '#e6f9f7', textColor: '#00b5a3', price: 101.00, mrp: 131.00, stock: 'in', isBest: true, delivery: { mainLabel: 'Today by 8 PM', subLabel: 'Express Delivery', pill: '⚡ Express', speed: 'express' } },
      { storeId: '1mg', storeName: '1mg', logoText: '1mg', bgColor: '#fdeaea', textColor: '#e8393c', price: 105.00, mrp: 131.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 10 AM', pill: '🚀 Fast', speed: 'fast' } },
      { storeId: 'ap', storeName: 'Apollo Pharmacy', logoText: 'AP', bgColor: '#e5f1fb', textColor: '#0061a4', price: 111.00, mrp: 131.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 12 PM', pill: '📦 Std', speed: 'standard' } },
      { storeId: 'nm', storeName: 'Netmeds', logoText: 'NM', bgColor: '#eceeff', textColor: '#4254af', price: 114.00, mrp: 131.00, stock: 'in', isBest: false, delivery: { mainLabel: '2 Days', subLabel: 'Standard', pill: '📦 Std', speed: 'standard' } }
    ]
  },
  {
    id: 'med-limcee',
    name: 'Limcee 500mg Chewable Tablet',
    slug: 'limcee-500mg',
    genericName: 'Vitamin C 500mg (Ascorbic Acid + Sodium Ascorbate)',
    icon: '🟠',
    type: 'Immunity / Vitamin C',
    packSize: 'Strip of 15',
    mrp: 24.00,
    requiresRx: false,
    avgRating: 4.9,
    totalReviews: 9810,
    description: 'Delicious orange-flavored chewable vitamin C providing powerful antioxidant defence, glowing skin, and cold resistance.',
    prices: [
      { storeId: 'pe', storeName: 'PharmEasy', logoText: 'PE', bgColor: '#e6f9f7', textColor: '#00b5a3', price: 18.00, mrp: 24.00, stock: 'in', isBest: true, delivery: { mainLabel: 'Today by 7 PM', subLabel: 'Express Delivery', pill: '⚡ Express', speed: 'express' } },
      { storeId: '1mg', storeName: '1mg', logoText: '1mg', bgColor: '#fdeaea', textColor: '#e8393c', price: 19.20, mrp: 24.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 10 AM', pill: '🚀 Fast', speed: 'fast' } },
      { storeId: 'ap', storeName: 'Apollo Pharmacy', logoText: 'AP', bgColor: '#e5f1fb', textColor: '#0061a4', price: 20.50, mrp: 24.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 1 PM', pill: '📦 Std', speed: 'standard' } }
    ]
  },
  {
    id: 'med-zincovit',
    name: 'Zincovit Tablet',
    slug: 'zincovit',
    genericName: 'Multivitamin with Essential Minerals + Grape Seed Extract',
    icon: '💊',
    type: 'Nutritional Multivitamin',
    packSize: 'Strip of 15',
    mrp: 110.00,
    requiresRx: false,
    avgRating: 4.7,
    totalReviews: 7600,
    description: 'Comprehensive daily multivitamin with zinc and antioxidants to fight daily fatigue and boost metabolic immunity.',
    prices: [
      { storeId: 'pe', storeName: 'PharmEasy', logoText: 'PE', bgColor: '#e6f9f7', textColor: '#00b5a3', price: 84.00, mrp: 110.00, stock: 'in', isBest: true, delivery: { mainLabel: 'Today by 8 PM', subLabel: 'Express Delivery', pill: '⚡ Express', speed: 'express' } },
      { storeId: '1mg', storeName: '1mg', logoText: '1mg', bgColor: '#fdeaea', textColor: '#e8393c', price: 88.00, mrp: 110.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 10 AM', pill: '🚀 Fast', speed: 'fast' } },
      { storeId: 'ap', storeName: 'Apollo Pharmacy', logoText: 'AP', bgColor: '#e5f1fb', textColor: '#0061a4', price: 92.00, mrp: 110.00, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 12 PM', pill: '📦 Std', speed: 'standard' } },
      { storeId: 'nm', storeName: 'Netmeds', logoText: 'NM', bgColor: '#eceeff', textColor: '#4254af', price: 95.00, mrp: 110.00, stock: 'in', isBest: false, delivery: { mainLabel: '2 Days', subLabel: 'Standard', pill: '📦 Std', speed: 'standard' } }
    ]
  },
  {
    id: 'med-evion400',
    name: 'Evion 400mg Vitamin E Capsule',
    slug: 'evion-400mg',
    genericName: 'Tocopheryl Acetate 400mg',
    icon: '🟢',
    type: 'Antioxidant & Skin/Hair Health',
    packSize: 'Strip of 10',
    mrp: 35.90,
    requiresRx: false,
    avgRating: 4.8,
    totalReviews: 8940,
    description: 'Pure vitamin E antioxidant capsule popular for cellular protection, glowing skin, hair strength, and muscle health.',
    prices: [
      { storeId: 'pe', storeName: 'PharmEasy', logoText: 'PE', bgColor: '#e6f9f7', textColor: '#00b5a3', price: 28.50, mrp: 35.90, stock: 'in', isBest: true, delivery: { mainLabel: 'Today by 8 PM', subLabel: 'Express Delivery', pill: '⚡ Express', speed: 'express' } },
      { storeId: '1mg', storeName: '1mg', logoText: '1mg', bgColor: '#fdeaea', textColor: '#e8393c', price: 29.80, mrp: 35.90, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 10 AM', pill: '🚀 Fast', speed: 'fast' } },
      { storeId: 'ap', storeName: 'Apollo Pharmacy', logoText: 'AP', bgColor: '#e5f1fb', textColor: '#0061a4', price: 31.00, mrp: 35.90, stock: 'in', isBest: false, delivery: { mainLabel: 'Tomorrow', subLabel: 'by 12 PM', pill: '📦 Std', speed: 'standard' } },
      { storeId: 'nm', storeName: 'Netmeds', logoText: 'NM', bgColor: '#eceeff', textColor: '#4254af', price: 32.50, mrp: 35.90, stock: 'in', isBest: false, delivery: { mainLabel: '2 Days', subLabel: 'Standard', pill: '📦 Std', speed: 'standard' } }
    ]
  }
];
