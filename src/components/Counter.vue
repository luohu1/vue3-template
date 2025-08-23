<script setup lang="ts">
import useCounterStore from '@/stores/counter'

const counterStore = useCounterStore()

// 使用storeToRefs保持响应式
const { count, doubleCount, isPositive, history, historyCount } = storeToRefs(counterStore)

// 计算计数器的奇偶性
const parity = computed(() => count.value % 2 === 0 ? '偶数' : '奇数')
</script>

<template>
  <div>
    <h2>Vue 3 + Pinia 计数器</h2>

    <div class="counter-value" :class="{ positive: isPositive, negative: !isPositive }">
      {{ count }}
    </div>

    <div class="counter-info">
      <div class="info-box">
        <div class="info-label">
          两倍值
        </div>
        <div class="info-value">
          {{ doubleCount }}
        </div>
      </div>
      <div class="info-box">
        <div class="info-label">
          奇偶性
        </div>
        <div class="info-value">
          {{ parity }}
        </div>
      </div>
    </div>

    <div class="button-group">
      <button class="decrement" @click="counterStore.decrement">
        减少
      </button>
      <button class="increment" @click="counterStore.increment">
        增加
      </button>
      <button class="reset" @click="counterStore.reset">
        重置
      </button>
    </div>

    <div class="history">
      <h2>
        操作历史
        <span class="history-badge">{{ historyCount }} 条记录</span>
      </h2>
      <ul v-if="historyCount > 0">
        <li v-for="(record, index) in history" :key="index">
          <div>
            <span class="action-badge" :class="[`action-${record.action}`]">
              {{ record.action === 'increment' ? '增加' : record.action === 'decrement' ? '减少' : '重置' }}
            </span>
            → {{ record.value }}
          </div>
          <span class="timestamp">{{ record.timestamp }}</span>
        </li>
      </ul>
      <p v-else>
        暂无操作历史
      </p>
    </div>
  </div>
</template>
