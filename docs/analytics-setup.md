# Analytics Setup

GA4 is optional. Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` to enable analytics. Leave it unset to render no GA script.

Tracked events:

- `compare_join_click` for compare/join platform routes.
- `become_model_click` for model signup routes.
- `live_model_click` for live model/random room routes.
- `cam_site_chooser_start` for chooser links.
- `affiliate_route_click` for all `/go/` route clicks.

The implementation sends only the clicked path. It does not store tool answers, collect sensitive responses, or expose secrets.