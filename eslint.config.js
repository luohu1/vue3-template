import antfu from '@antfu/eslint-config'

export default antfu({
  type: 'app',
  vue: true,
  typescript: true,

  stylistic: {
    indent: 2,
    quotes: 'single',
  },
})
  .override(
    'antfu/sort/tsconfig-json',
    {
      rules: {
        'jsonc/sort-keys': 0,
      },
    },
  )
