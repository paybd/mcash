export type RateConfig = {
  country: string;
  currency: string;
  adjustment: number;
};

export const middleEastRateConfig: RateConfig[] = [
  {
    country: "সৌদি আরব",
    currency: "SAR",
    adjustment: 4,
  },
  {
    country: "সংযুক্ত আরব আমিরাত",
    currency: "AED",
    adjustment: 4,
  },
  {
    country: "মালয়েশিয়া",
    currency: "MYR",
    adjustment: 3,
  },
  {
    country: "সিঙ্গাপুর",
    currency: "SGD",
    adjustment: 4,
  },
  {
    country: "কাতার",
    currency: "QAR",
    adjustment: 4,
  },
  {
    country: "লিবিয়া",
    currency: "LYD",
    adjustment: 4,
  },
  {
    country: "কুয়েত",
    currency: "KWD",
    adjustment: 20,
  },
  {
    country: "ওমান",
    currency: "OMR",
    adjustment: 12,
  },
];

