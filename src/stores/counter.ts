import { defineStore } from 'pinia'

interface HistoryItem {
  action: string
  value: number
  timestamp: string
}

const useCounterStore = defineStore('conuter', () => {
  // 状态
  const count = ref(0)
  const history = ref([] as HistoryItem[])
  // Getter（计算属性）
  const doubleCount = computed(() => count.value * 2)
  const isPositive = computed(() => count.value >= 0)
  const historyCount = computed(() => history.value.length)

  // Actions
  function increment() {
    count.value++
    recordChange('increment')
  }
  function decrement() {
    count.value--
    recordChange('decrement')
  }
  function reset() {
    count.value = 0
    recordChange('reset')
  }

  function recordChange(action: string) {
    history.value.unshift({
      action,
      value: count.value,
      timestamp: new Date().toLocaleTimeString(),
    })

    // 只保留最近10条历史记录
    if (history.value.length > 10) {
      history.value.pop()
    }
  }

  return { count, history, doubleCount, isPositive, historyCount, increment, decrement, reset }
})

export default useCounterStore
