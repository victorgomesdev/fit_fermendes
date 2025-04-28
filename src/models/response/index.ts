export interface BaseResponse<T> {
  error: string | undefined,
  success: boolean | undefined,
  data: boolean,
  message: string | undefined
}