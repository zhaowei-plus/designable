import 'requestidlecallback'

export interface IIdleDeadline {
  didTimeout: boolean
  timeRemaining: () => DOMHighResTimeStamp
}

export interface IdleCallbackOptions {
  timeout?: number
}

// 类型支持提示：
export const requestIdle = (
  callback: (params: IIdleDeadline) => void,
  options?: IdleCallbackOptions
): number => {
  return window['requestIdleCallback'](callback, options)
}

export const cancelIdle = (id: number) => {
  window['cancelIdleCallback'](id)
}
