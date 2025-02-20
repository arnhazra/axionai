export type BaseModel = {
  _id: string
  genericName: string
  displayName: string
  series: string
  vendor: string
  defaultTemperature: number
  defaultTopP: number
  architecture: string
  contextWindow: string
  parameters: string
}

export type DerivedModel = {
  _id: string
  displayName: string
  description: string
  category: string
  baseModel: BaseModel
  isFineTuned: boolean
  promptStyle: string
  isPro: boolean
  responseFormat: string
}

export type User = {
  _id: string
  email: string
  name: string
  role: string
  reduceCarbonEmissions: boolean
  activityLog: boolean
  createdAt: string
}

export type Subscription = {
  _id: string
  subscriptionTier: string
  price: number
  platformDelay: number
  features: string[]
  createdAt: string
  endsAt: string
}

export type APIKey = {
  _id: string
  userId: string
  apiKey: string
  createdAt: string
}

export type FilterAndSortOptions = {
  filters: string[]
  sortOptions: {
    value: string
    label: string
  }[]
}

export type ActivityTrends = {
  totalUsage: number
}
