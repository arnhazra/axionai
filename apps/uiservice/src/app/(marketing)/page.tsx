"use client"
import Header from "@/shared/components/header"
import FooterSection from "./(components)/footer-section"
import HeroSection from "./(components)/hero-section"
import OpenSourceSection from "./(components)/opensource-section"
import { endPoints } from "@/shared/constants/api-endpoints"
import HTTPMethods from "@/shared/constants/http-methods"
import { BaseModel, Subscription } from "@/shared/types"
import { brandName, uiConstants } from "@/shared/constants/global-constants"
import { CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { cn } from "@/shared/lib/utils"
import { buttonVariants } from "@/shared/components/ui/button"
import Show from "@/shared/components/show"
import Loading from "../loading"
import useFetch from "@/shared/hooks/use-fetch"
import { AIBaseModelCard } from "./(components)/basemodel-card"
import SafetySection from "./(components)/safety-section"

export default function Page() {
  const models = useFetch({
    queryKey: ["models"],
    queryUrl: endPoints.getModels,
    method: HTTPMethods.GET,
  })

  const pricing = useFetch({
    queryKey: ["pricing"],
    queryUrl: endPoints.getSubscriptionPricing,
    method: HTTPMethods.GET,
  })

  const renderBaseModels = models?.data?.map((model: BaseModel) => (
    <AIBaseModelCard key={model._id} model={model} />
  ))

  const renderPricingTiers = pricing?.data?.map((tier: Subscription) => {
    return (
      <div
        className="relative overflow-hidden rounded-lg border bg-white"
        key={tier.subscriptionTier}
      >
        <div className="flex flex-col justify-between rounded-md p-6">
          <div className="space-y-2">
            <h2 className="font-bold text-md capitalize text-slate-700">
              {brandName} {tier.subscriptionTier}
            </h2>
            <div className="flex">
              <h2 className="font-bold text-3xl capitalize">${tier.price}</h2>
              <span className="flex flex-col justify-end text-sm mb-1">
                /month
              </span>
            </div>
          </div>
          <p className="text-slate-600 text-sm mt-4 mb-4">{tier.features[0]}</p>
          <ul className="grid gap-3 text-sm text-muted-foreground">
            {tier.features.slice(1).map((feature) => (
              <li
                className="flex text-xs items-center text-slate-600"
                key={feature}
              >
                <CheckCircle2 className="scale-75 me-2" />
                {feature}
              </li>
            ))}
          </ul>
          <Link
            className={`${cn(buttonVariants({ variant: "default" }))} mt-4`}
            href="/explore"
          >
            Get Started
          </Link>
        </div>
      </div>
    )
  })

  return (
    <Show
      condition={!models.isLoading && !pricing.isLoading}
      fallback={<Loading />}
    >
      <div className="min-h-screen w-full bg-white">
        <Header />
        <HeroSection />
        <section
          id="models"
          className="mt-8 container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24 lg:rounded-lg"
        >
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
              Generic Models
            </h2>
            <p className="max-w-[85%] leading-normal text-slate-600 sm:text-lg sm:leading-7">
              {uiConstants.modelsHeader}
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-1 md:max-w-[35rem] md:grid-cols-2 lg:max-w-[50rem] lg:grid-cols-3 xl:max-w-[68rem] xl:grid-cols-4">
            {renderBaseModels}
          </div>
        </section>
        <OpenSourceSection />
        <section
          id="safety"
          className="mt-8 container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24 lg:rounded-lg"
        >
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
              Safety at every step
            </h2>
            <p className="max-w-[85%] leading-normal text-slate-600 sm:text-lg sm:leading-7">
              {uiConstants.safetyHeader}
            </p>
          </div>
          <SafetySection />
        </section>
        <section id="pricing" className="container py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[70rem] flex-col items-center justify-center gap-4 text-center mb-8">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
              Simple, transparent pricing
            </h2>
            <p className="max-w-[85%] leading-normal text-slate-600 sm:text-lg sm:leading-7">
              {uiConstants.pricingTierHeader}
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 lg:max-w-[40rem]">
            {renderPricingTiers}
          </div>
        </section>
      </div>
      <FooterSection />
    </Show>
  )
}
