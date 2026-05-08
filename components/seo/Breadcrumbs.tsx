import Link from "next/link";

import JsonLd from "@/components/seo/JsonLd";
import { buildBreadcrumbJsonLd, type BreadcrumbItem } from "@/lib/seo";

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <>
      <JsonLd data={buildBreadcrumbJsonLd(items)} />
      <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap gap-2 text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <span key={`${item.label}-${index}`} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="text-white/55 transition hover:text-[#8FB7FF]"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-white/72">{item.label}</span>
              )}
              {!isLast ? <span className="text-white/25">/</span> : null}
            </span>
          );
        })}
      </nav>
    </>
  );
}
