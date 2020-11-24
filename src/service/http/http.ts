import Taro from '@tarojs/taro'

interface Response {
  code: number
  msg?: string
}
export interface HttpResponse extends Response {
  data?: object | string
}

export interface DownloadResponse extends Response {
  tempFilePath?: string
}

export interface UploadResponse extends Response {
  data?: object | string
}

const Request = (
  method:
    | 'GET'
    | 'POST'
    | 'PUT'
    | 'DELETE'
    | 'CONNECT'
    | 'HEAD'
    | 'OPTIONS'
    | 'TRACE',
  url: string,
  data?: string | object,
  header?: { 'Content-Type': 'application/x-www-form-urlencoded' }
): Promise<HttpResponse> => {
  return new Promise((resolve, reject) => {
    Taro.request({
      method,
      url,
      data,
      header,
      success: (res: Taro.request.SuccessCallbackResult) => {
        resolve(res.data as HttpResponse)
      },
      fail: (err: Taro.General.CallbackResult) => {
        const resp: HttpResponse = { code: -1, msg: err.errMsg }
        reject(resp)
      },
    })
  })
}

const Get = (url: string, data?: string | object) => Request('GET', url, data)

const Post = (url: string, data?: string | object) => Request('POST', url, data)

const DownloadFile = (url: string, header?: {}): Promise<DownloadResponse> => {
  return new Promise((resolve, reject) => {
    Taro.downloadFile({
      url,
      header,
      success: (res: Taro.downloadFile.FileSuccessCallbackResult) => {
        resolve({
          code: res.statusCode,
          tempFilePath: res.tempFilePath,
        })
      },
      fail: (err: Taro.General.CallbackResult) => {
        const resp: DownloadResponse = { code: -1, msg: err.errMsg }
        reject(resp)
      },
    })
  })
}

const UploadFile = (
  url: string,
  filePath: string,
  name: string,
  header?: { 'content-type': 'multipart/form-data' },
  formData?: Object
): Promise<UploadResponse> => {
  return new Promise((resolve, reject) => {
    Taro.uploadFile({
      url,
      filePath,
      name,
      header,
      formData,
      success: (res: Taro.uploadFile.SuccessCallbackResult) => {
        resolve({ code: res.statusCode, data: res.data })
      },
      fail: (err: Taro.General.CallbackResult) => {
        const resp: UploadResponse = { code: -1, msg: err.errMsg }
        reject(resp)
      },
    })
  })
}

export { Request, Get, Post, DownloadFile, UploadFile }
