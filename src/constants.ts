export const apiUrl = process.env.NEXT_PUBLIC_API_URI!;

export const sentryDsn = process.env.NEXT_PUBLIC_SENTRY_DSN;

const sampleRate = parseFloat(process.env.NEXT_PUBLIC_SENTRY_APM || "");

export const sentrySampleRate = isNaN(sampleRate) ? 0 : sampleRate;

export const serviceWorkerTimeout =
  parseInt(process.env.SERVICE_WORKER_TIMEOUT || "", 10) || 60 * 1000;

export const demoMode = process.env.NEXT_PUBLIC_DEMO_MODE === "true";

export const channelSlug = process.env.NEXT_PUBLIC_SALEOR_CHANNEL_SLUG!;

export const exportMode = process.env.NEXT_EXPORT === "true";

export const shopName = process.env.NEXT_PUBLIC_WEBSITE_NAME;

export const awsMediaBucket = process.env.NEXT_PUBLIC_AWS_MEDIA_BUCKET_NAME!;

export const ssrMode = typeof window === "undefined";

export const underConstruction =
  process.env.NEXT_PUBLIC_SHOP_UNDER_CONSTRUCTION;

export const incrementalStaticRegenerationRevalidate = parseInt(
  process.env.INCREMENTAL_STATIC_REGENERATION_REVALIDATE!,
  10
);

export const staticPathsFetchBatch =
  parseInt(process.env.NEXT_PUBLIC_STATIC_PATHS_FETCH_BATCH, 10) || 0;

export const staticPathsFallback = (
  exportMode ? false : process.env.NEXT_PUBLIC_STATIC_PATHS_FALLBACK
) as boolean | "blocking";

export const hostUrl = process.env.NEXT_PUBLIC_HOST_URL;

export const paymentGatewayNames = {
  dummy: "mirumee.payments.dummy",
  adyen: "mirumee.payments.adyen",
  stripe: "saleor.payments.stripe",
  cod: "salingo.payments.cod",
  payu: "salingo.payments.payu",
};
