import type { AxiosProgressEvent, GenericAbortSignal } from 'axios'
import { post } from '@/utils/request'

export function fetchChatConfig<T = any>() {
  return post<T>({
    url: '/config',
  })
}

export async function fetchChatAPIProcess<T = any>(
  params: {
    model: string
    prompt: string
    memory: number
    top_p: number
    max_length: number
    temperature: number
    is_knowledge: boolean
    options?: { conversationId?: string; parentMessageId?: string }
    signal?: GenericAbortSignal
    onDownloadProgress?: (progressEvent: AxiosProgressEvent) => void
  },
) {
  return post<T>({
    url: '/worker_generate_stream',
    data: {
      model: params.model,
      prompt: params.prompt,
      options: params.options,
      memory: params.memory,
      top_p: params.top_p / 100,
      max_length: params.max_length,
      max_new_tokens: 512,
      repetition_penalty: 1.0,
      temperature: params.temperature,
      stop: null,
      stop_token_ids: null,
      echo: false,
      is_knowledge: params.is_knowledge,
    },
    signal: params.signal,
    onDownloadProgress: params.onDownloadProgress,
  })
}

export function fetchAudioChatAPIProcess<T = any>(
  params: {
    formData: FormData
    options?: { conversationId?: string; parentMessageId?: string }
    onDownloadProgress?: (progressEvent: AxiosProgressEvent) => void
  },
) {
  return post<T>({
    url: '/audio-chat-process',
    data: params.formData,
    onDownloadProgress: params.onDownloadProgress,
  })
}
