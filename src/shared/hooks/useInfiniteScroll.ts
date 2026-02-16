import { ref, watch, onMounted, onBeforeUnmount, type Ref } from 'vue'

export type UseInfiniteScrollOptions = {
  sentinel: Ref<HTMLElement | null>
  onLoadMore: () => void | Promise<void>
  enabled?: Ref<boolean> | boolean
  rootMargin?: string
  threshold?: number
}

export function useInfiniteScroll(options: UseInfiniteScrollOptions) {
  const { sentinel, onLoadMore, threshold = 0.1 } = options
  const rootMargin = options.rootMargin ?? '200px'

  const enabledRef: Ref<boolean> =
    typeof options.enabled === 'boolean'
      ? ref(options.enabled)
      : (options.enabled as Ref<boolean>) || ref(true)

  const isObserving = ref(false)
  let observer: IntersectionObserver | null = null

  function createObserver() {
    destroyObserver()

    // guard: sentinel must exist and enabled must be true
    const el = sentinel?.value
    if (!el || !enabledRef.value) return

    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            void Promise.resolve(onLoadMore())
          }
        }
      },
      {
        root: null,
        rootMargin,
        threshold
      }
    )

    observer.observe(el)
    isObserving.value = true
  }

  function destroyObserver() {
    if (observer) {
      try {
        observer.disconnect()
      } catch {
        // ignore
      }
      observer = null
    }
    isObserving.value = false
  }

  // watch sentinel element reference and enabled flag
  watch(
    [() => sentinel?.value, () => enabledRef.value],
    ([node, enabled]) => {
      if (observer) {
        if (!node || !enabled) {
          destroyObserver()
          return
        }
      }

      if (node && enabled) {
        createObserver()
      }
    },
    { immediate: true }
  )

  onMounted(() => {
    // initial attach if possible
    if (!observer && sentinel?.value && enabledRef.value) {
      createObserver()
    }
  })

  onBeforeUnmount(() => {
    destroyObserver()
  })

  function start() {
    createObserver()
  }

  function stop() {
    destroyObserver()
  }

  return {
    isObserving,
    start,
    stop
  }
}
