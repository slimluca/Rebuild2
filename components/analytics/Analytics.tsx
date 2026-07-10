"use client";

import Script from "next/script";
import { useEffect } from "react";

const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

type WindowWithGtag = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
};

function eventNamesForHref(href: string) {
  const eventNames: string[] = [];

  if (href.includes("/go/")) {
    eventNames.push("affiliate_route_click");
  }

  if (href.includes("/go/become-model")) {
    eventNames.push("become_model_click");
  }

  if (href.includes("/go/signup") || href.includes("/go/livejasmin")) {
    eventNames.push("compare_join_click");
  }

  if (href.includes("/go/model/") || href.includes("/go/random")) {
    eventNames.push("live_model_click");
  }

  if (href.includes("/tools/cam-site-chooser")) {
    eventNames.push("cam_site_chooser_start");
  }

  return eventNames;
}

export default function Analytics() {
  useEffect(() => {
    if (!measurementId) {
      return;
    }

    const handleClick = (event: MouseEvent) => {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const link = target.closest("a[href]");
      const href = link?.getAttribute("href") ?? "";
      const eventNames = eventNamesForHref(href);

      if (!eventNames.length) {
        return;
      }

      eventNames.forEach((eventName) => {
        (window as WindowWithGtag).gtag?.("event", eventName, {
          link_path: href.split("?")[0],
        });
      });
    };

    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, []);

  if (!measurementId) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}');
        `}
      </Script>
    </>
  );
}
