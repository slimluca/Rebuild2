# Category Filter Audit

Phase 16 category rule: category pages must not silently display generic live models when a category filter cannot match current profile data. `LiveModelGrid` now uses category-specific matches only when `categoryHint` is present. If no current matches exist, the page shows the unavailable-preview state instead of unrelated models.

| Slug | Visible title | Actual profile field/filter | Exact support | Partial support | Fallback behavior | Accurate display | Recommended action |
|---|---|---|---:|---:|---|---|---|
| live-cam-models | Live Cam Models | no category filter; online live preview set | Yes | Yes | Broad page, no category fallback needed | Yes | Keep indexable |
| blonde-cam-models | Blonde Cam Models | `persons.body.hairColor` text match | Partial | Yes | No generic fallback | Yes when matches exist | Keep, describe as live preview |
| brunette-cam-models | Brunette Cam Models | `persons.body.hairColor` text match | Partial | Yes | No generic fallback | Yes when matches exist | Keep |
| asian-cam-models | Asian Cam Models | ethnicity/profile text match | Partial | Yes | No generic fallback | Yes when matches exist | Keep |
| latina-cam-models | Latina Cam Models | ethnicity/profile text match for latin/latina | Partial | Yes | No generic fallback | Yes when matches exist | Keep and monitor |
| milf-cam-models | MILF Cam Models | profile text or age >= 30 | Partial | Yes | No generic fallback | Approximate | Keep with non-exact wording |
| new-cam-models | New Cam Models | `isNewbie` | Yes | Yes | No generic fallback | Yes | Keep |
| private-show-models | Private Show Models | status in private/group/member/vip | Yes | Yes | No generic fallback | Yes | Keep |
| verified-cam-models | Verified Cam Models | no verified-only profile field; quality/platform-signal page | No | Yes | General sorted preview, not verified-only | Honest if framed as signals | Keep, avoid exact-result claims |
| hd-cam-models | HD Cam Models | `details.streamQuality >= 80` | Yes | Yes | No generic fallback | Yes | Keep |
| mobile-cam-models | Mobile Cam Models | `isMobileStream` | Yes | Yes | No generic fallback | Yes | Keep |
| trending-cam-models | Trending Cam Models | status/quality sort, no fixed trend field | No | Yes | Broad sorted preview | Honest if framed as current discovery | Keep with non-ranking wording |
| mature-cam-models | Mature Cam Models | profile text or age >= 35 | Partial | Yes | No generic fallback | Approximate | Keep with non-exact wording |
| redhead-cam-models | Redhead Cam Models | `persons.body.hairColor` text match | Partial | Yes | No generic fallback | Yes when matches exist | Keep |
| ebony-cam-models | Ebony Cam Models | ethnicity/profile text match | Partial | Yes | No generic fallback | Yes when matches exist | Keep |
| petite-cam-models | Petite Cam Models | body/build/profile text | Partial | Yes | No generic fallback | Approximate | Keep |
| curvy-cam-models | Curvy Cam Models | body/build/profile text | Partial | Yes | No generic fallback | Approximate | Keep |
| tattooed-cam-models | Tattooed Cam Models | appearance/about text | No | Yes | No generic fallback | Only when tagged | Keep only with broad wording |
| cosplay-cam-models | Cosplay Cam Models | appearance/about text | No | Yes | No generic fallback | Only when tagged | Keep only with broad wording |
| gamer-cam-models | Gamer Cam Models | appearance/about text | No | Yes | No generic fallback | Only when tagged | Keep only with broad wording |
| college-cam-models | College Cam Models | appearance/about text | No | Yes | No generic fallback | Only when tagged | Keep only with broad wording |
| couple-cam-models | Couple Cam Models | `persons.length > 1` or profile text | Partial | Yes | No generic fallback | Yes when data indicates couple | Keep |
| european-cam-models | European Cam Models | country/profile text list | Partial | Yes | No generic fallback | Yes when country data exists | Keep |
| american-cam-models | American Cam Models | country/profile text list | Partial | Yes | No generic fallback | Yes when country data exists | Keep |
| british-cam-models | British Cam Models | country/profile text list | Partial | Yes | No generic fallback | Yes when country data exists | Keep |
| french-cam-models | French Cam Models | country/profile text list | Partial | Yes | No generic fallback | Yes when country data exists | Keep |
| spanish-cam-models | Spanish Cam Models | country/profile text list | Partial | Yes | No generic fallback | Yes when country data exists | Keep |
| italian-cam-models | Italian Cam Models | country/profile text list | Partial | Yes | No generic fallback | Yes when country data exists | Keep |
| german-cam-models | German Cam Models | country/profile text list | Partial | Yes | No generic fallback | Yes when country data exists | Keep |
| brazilian-cam-models | Brazilian Cam Models | country/profile text list | Partial | Yes | No generic fallback | Yes when country data exists | Keep |
| fitness-cam-models | Fitness Cam Models | appearance/about text | No | Yes | No generic fallback | Only when tagged | Keep only with broad wording |
| chatty-cam-models | Chatty Cam Models | appearance/about text | No | Yes | No generic fallback | Only when tagged | Keep only with broad wording |
| english-speaking-cam-models | English Speaking Cam Models | `details.languages` includes English | Yes | Yes | No generic fallback | Yes | Keep |
| free-preview-cam-models | Free Preview Cam Models | `status === free_chat` | Yes | Yes | No generic fallback | Yes | Keep |
| premium-cam-models | Premium Cam Models | private/group/member/vip statuses and quality sort | Partial | Yes | No generic fallback | Yes for premium-style rooms | Keep |
| desktop-cam-models | Desktop Cam Models | no desktop-only field | No | No | Broad preview with device guidance | Not an exact model category | Reframe as desktop browsing guide or noindex later |
| tablet-friendly-cam-models | Tablet Friendly Cam Models | mobile stream signal as proxy | No | Yes | No generic fallback | Approximate | Keep with proxy wording |
| online-now-cam-models | Online Now Cam Models | status not offline | Yes | Yes | No generic fallback | Yes | Keep |
| popular-cam-models | Popular Cam Models | status/quality sort, no popularity count | No | Yes | Broad sorted preview | Honest if not called a ranking | Keep with non-ranking wording |
| featured-cam-models | Featured Cam Models | quality sort, no featured flag | No | Yes | Broad sorted preview | Honest if framed as preview quality | Keep with non-ranking wording |

Unsupported legacy category URLs handled as 410: `/bbw`, `/feet`, `/gay`, `/trans`, and `/teens`.
