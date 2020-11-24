import { Get, Post, fullUrl } from '../http'

const helloGet = () => Get(fullUrl('hello'))

const helloPost = () => Post(fullUrl('hello'))

export {
  helloGet,
  helloPost,
}
