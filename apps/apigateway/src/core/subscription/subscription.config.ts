export enum SubscriptionTier {
  Free = "free",
  One = "one",
}

export interface SubscriptionConfig {
  subscriptionTier: SubscriptionTier
  price: number
  platformDelay: number
  features: string[]
}

export const subscriptionPricing: SubscriptionConfig[] = [
  {
    subscriptionTier: SubscriptionTier.Free,
    price: 0,
    platformDelay: 1000,
    features: [
      "Good for exploration",
      "Delayed API response",
      "200 API calls per day",
      "Includes Only Free Models",
    ],
  },
  {
    subscriptionTier: SubscriptionTier.One,
    price: 19,
    platformDelay: 0,
    features: [
      "Good for developers",
      "Priority API response",
      "Unlimited API calls subject to abuse guardrails",
      "Includes Pro Models",
      "Ability to build & train own model",
    ],
  },
]
