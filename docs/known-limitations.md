KL-001: Lab tests other than CBC show CBC data when the backend is offline

Status: Open, to be resolved by backend integration. It is not a frontend defect to patch.
Found in: Phase 1 baseline testing, offline demo mode.
Affects: Lab Tests mode only. Medicines are not affected, because medicinesData.js has 53 local medicines.

Observed behaviour

Searching or selecting Lipid Profile, Thyroid Profile or HbA1c shows the CBC header, price and hospital cards.
The “Server unreachable — showing demo lab test & hospital data” banner appears.

Cause

When GET /lab-tests/:slug/compare fails, loadCompareLabTest() always loads FALLBACK_LAB, which contains only CBC and its 6 hospitals. It ignores the requested slug.
No local lab-test dataset exists, unlike ALL_MEDICINES for medicines.
The same applies to the other quick-search tags (Thyroid, Full Body Checkup, Liver Function, Vitamin D & B12).

Related symptoms in the same offline state

Wrong test can be booked. The booking payload uses currentTestObj.slug, which is cbc while the fallback is showing. Booking from a Lipid Profile search would send testSlug: "cbc" and create a CBC order.
Location is ignored. Hospitals, prices and distances are always the Mumbai demo data, whatever the city or pincode.
Filters and sort do nothing useful. They re-request the API with the current slug, so they fall back to the same CBC data again.
Similar tests are a static list (FALLBACK_SIMILAR_TESTS).

Impact: Offline mode is a demo only for CBC. Lab search is not meaningful until the backend exists.

Resolution (backend integration)

Seed the lab_tests collection with at least these slugs: cbc, lipid-profile, thyroid-profile, hba1c, full-body-checkup, liver-function-test, vitamin-d-b12.
Seed hospitals and lab_test_prices so each test has its own price and turnaround per hospital.
Implement GET /lab-tests/search, GET /lab-tests/:slug/compare, GET /lab-tests?popular=1 and POST /lab-tests/book, matching the response shapes already documented in the API contract.
Return a 404 for an unknown slug, so a missing test is never answered with another test’s data.

Acceptance criteria

[ ] Each of the 7 tests above returns its own name, parameters and hospital prices.
[ ] Lipid Profile, Thyroid Profile and HbA1c each show their own data and never CBC’s.
[ ] A booking created from any test stores that test’s slug, name and price.
[ ] Changing city or pincode changes the hospitals returned.
[ ] All lab filters and sorts change the results.
[ ] An unknown test slug shows a “not found” state, not another test’s data.