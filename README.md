<p align="center">
使用 Tailwind CSS<br/>
</p>

## 注意事项

小程序不支持使用反斜杠和冒号作为类名, 反斜杠修改成使用下划线 `_`（参考 [taro-tailwind](https://github.com/windedge/taro-tailwind)）

```jsx
<View className="w-1/3"></View>
```

应该写成:

```jsx
<View className="w-1_3"></View>
```