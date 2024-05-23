import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
			// not allow to show in google
		},
		sitemap: "https://www.nailstudiopro.com/sitemap.xml",
	};
}
