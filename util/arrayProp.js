import { computed, unref } from 'vue'

export default (prop) => {
  return computed(() => {
    const normalizedProp = unref(prop)
    return !normalizedProp
      ? []
      : Array.isArray(normalizedProp)
        ? normalizedProp
        : [normalizedProp]
  })
}
