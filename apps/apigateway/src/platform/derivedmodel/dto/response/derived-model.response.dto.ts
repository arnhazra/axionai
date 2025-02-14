import { BaseModel } from "@/platform/basemodel/schemas/basemodel.schema"

export class DerivedModelResponseDto {
  _id: string
  displayName: string
  description: string
  category: string
  baseModel: BaseModel
  isFineTuned: boolean
  promptStyle: string
  systemPrompt: string
  isPro: boolean
  responseFormat: string
}
