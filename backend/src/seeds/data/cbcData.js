// CBC lab test, its 6 hospitals and the 6 existing CBC prices.
// Copied from the demo data in the frontend (FALLBACK_LAB). Nothing here is invented.
//
// Not stored on purpose (the API will calculate them later):
//   discountPercent, isBestPrice / isFastest / isNearest, distanceLabel,
//   homeCollection.isFree, and each price's MRP (same as the test's MRP).
//
// distanceKm is the distance from the demo location (Mumbai 400001) used in
// the frontend demo data. Real distance logic comes in a later phase.
module.exports = {
  test: {
    "legacyId": "test-cbc",
    "name": "Complete Blood Count (CBC) with ESR",
    "slug": "cbc",
    "category": "Routine Blood Test",
    "icon": "🩸",
    "parametersCount": 28,
    "sampleType": "Blood (EDTA Whole Blood)",
    "fastingRequired": false,
    "fastingHours": 0,
    "mrp": 450,
    "description": "Measures red blood cells, white blood cells, platelets, and ESR. Essential test for detecting anemia, infections, fever, and general immunity."
  },
  hospitals: [
    {
      "hospital": {
        "code": "hosp-apollo",
        "name": "Apollo Diagnostics",
        "tagline": "Apollo Hospitals Enterprise Ltd.",
        "logoText": "AP",
        "bgColor": "#e5f1fb",
        "textColor": "#0061a4",
        "accreditations": [
          "NABL",
          "CAP",
          "ISO 15189"
        ],
        "avgRating": 4.8,
        "totalReviews": 4210,
        "address": "Apollo Health Plaza, Near Central Metro, Mumbai",
        "city": "Mumbai",
        "distanceKm": 1.8,
        "homeCollection": {
          "available": true,
          "fee": 0,
          "estimatedArrivalMins": 45,
          "slots": [
            "06:30 AM - 07:30 AM",
            "07:30 AM - 08:30 AM",
            "08:30 AM - 09:30 AM"
          ],
          "cutoffNotice": "Book by 8 PM for 6:30 AM morning fasting slot"
        },
        "labVisit": {
          "available": true,
          "openTime": "06:30 AM - 08:30 PM"
        }
      },
      "price": {
        "price": 280,
        "turnaroundHours": 6,
        "turnaroundLabel": "⚡ Today by 5 PM (6 hrs)"
      }
    },
    {
      "hospital": {
        "code": "hosp-tata1mg",
        "name": "Tata 1mg Diagnostic Labs",
        "tagline": "Tata Digital Health",
        "logoText": "1mg",
        "bgColor": "#fdeaea",
        "textColor": "#e8393c",
        "accreditations": [
          "NABL",
          "ISO 9001"
        ],
        "avgRating": 4.5,
        "totalReviews": 5310,
        "address": "Tata 1mg Diagnostic Hub, Sector 14, Mumbai",
        "city": "Mumbai",
        "distanceKm": 2.8,
        "homeCollection": {
          "available": true,
          "fee": 0,
          "estimatedArrivalMins": 35,
          "slots": [
            "06:30 AM - 07:30 AM",
            "07:30 AM - 08:30 AM",
            "08:30 AM - 09:30 AM"
          ],
          "cutoffNotice": "Free home sample pickup with zero contact delivery"
        },
        "labVisit": {
          "available": false,
          "openTime": "Collection Hub Only"
        }
      },
      "price": {
        "price": 249,
        "turnaroundHours": 12,
        "turnaroundLabel": "Tomorrow Morning"
      }
    },
    {
      "hospital": {
        "code": "hosp-citycare",
        "name": "City Care Multi-Speciality Hospital",
        "tagline": "Community Hospital & Trauma Centre Lab",
        "logoText": "CC",
        "bgColor": "#f5f3ff",
        "textColor": "#6d28d9",
        "accreditations": [
          "NABH",
          "NABL Accredited Lab"
        ],
        "avgRating": 4.4,
        "totalReviews": 890,
        "address": "City Care Hospital Ground Floor Lab, Mumbai",
        "city": "Mumbai",
        "distanceKm": 1.2,
        "homeCollection": {
          "available": true,
          "fee": 50,
          "estimatedArrivalMins": 30,
          "slots": [
            "07:00 AM - 08:00 AM",
            "08:00 AM - 09:00 AM"
          ],
          "cutoffNotice": "Quick turnaround for neighbourhood residents"
        },
        "labVisit": {
          "available": true,
          "openTime": "24 Hours Open"
        }
      },
      "price": {
        "price": 260,
        "turnaroundHours": 4,
        "turnaroundLabel": "⚡ Superfast in 4 hrs"
      }
    },
    {
      "hospital": {
        "code": "hosp-drlal",
        "name": "Dr Lal PathLabs",
        "tagline": "National Reference Laboratory",
        "logoText": "LAL",
        "bgColor": "#fff4e6",
        "textColor": "#d96a00",
        "accreditations": [
          "NABL",
          "CAP"
        ],
        "avgRating": 4.7,
        "totalReviews": 6850,
        "address": "Main Road Diagnostic Complex, Mumbai",
        "city": "Mumbai",
        "distanceKm": 2.4,
        "homeCollection": {
          "available": true,
          "fee": 50,
          "estimatedArrivalMins": 40,
          "slots": [
            "06:00 AM - 07:00 AM",
            "07:00 AM - 08:00 AM",
            "08:00 AM - 09:00 AM"
          ],
          "cutoffNotice": "Certified phlebotomists with temperature-controlled sample carriers"
        },
        "labVisit": {
          "available": true,
          "openTime": "06:00 AM - 09:00 PM"
        }
      },
      "price": {
        "price": 299,
        "turnaroundHours": 8,
        "turnaroundLabel": "⚡ Today by 7 PM (8 hrs)"
      }
    },
    {
      "hospital": {
        "code": "hosp-agilus",
        "name": "Agilus Diagnostics (SRL)",
        "tagline": "Fortis Healthcare Diagnostic Network",
        "logoText": "AG",
        "bgColor": "#e6f9f7",
        "textColor": "#0a8f7c",
        "accreditations": [
          "NABL",
          "CAP"
        ],
        "avgRating": 4.7,
        "totalReviews": 3490,
        "address": "Opposite Civil Hospital Gate 2, Mumbai",
        "city": "Mumbai",
        "distanceKm": 3.1,
        "homeCollection": {
          "available": true,
          "fee": 0,
          "estimatedArrivalMins": 50,
          "slots": [
            "06:30 AM - 07:30 AM",
            "07:30 AM - 08:30 AM"
          ],
          "cutoffNotice": "Smart report with doctor tele-consultation included"
        },
        "labVisit": {
          "available": true,
          "openTime": "07:00 AM - 08:00 PM"
        }
      },
      "price": {
        "price": 310,
        "turnaroundHours": 6,
        "turnaroundLabel": "⚡ Today by 6 PM (6 hrs)"
      }
    },
    {
      "hospital": {
        "code": "hosp-max",
        "name": "Max Lab (Max Healthcare)",
        "tagline": "Super Speciality Hospital Pathology",
        "logoText": "MAX",
        "bgColor": "#f0fdf4",
        "textColor": "#15803d",
        "accreditations": [
          "NABL",
          "NABH",
          "JCI"
        ],
        "avgRating": 4.9,
        "totalReviews": 1840,
        "address": "Max Super Speciality Hospital Wing B, Mumbai",
        "city": "Mumbai",
        "distanceKm": 5,
        "homeCollection": {
          "available": true,
          "fee": 0,
          "estimatedArrivalMins": 60,
          "slots": [
            "07:00 AM - 08:00 AM",
            "08:00 AM - 09:00 AM"
          ],
          "cutoffNotice": "Verified by senior MD pathologists"
        },
        "labVisit": {
          "available": true,
          "openTime": "24 Hours Emergency & Routine"
        }
      },
      "price": {
        "price": 380,
        "turnaroundHours": 5,
        "turnaroundLabel": "⚡ Today by 4 PM (5 hrs)"
      }
    }
  ]
};
