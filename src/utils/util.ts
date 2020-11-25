import Taro from '@tarojs/taro'

const showAlert = (title: string, message: string | object) => {
  const content = typeof message === 'string' ? message : toString(message)
  Taro.showModal({
    title: title || '',
    content,
    showCancel: false,
  })
}

const toString = (data: any) => JSON.stringify(data)

export { showAlert, toString }
