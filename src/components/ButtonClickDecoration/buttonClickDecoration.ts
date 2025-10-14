import { ref, nextTick } from "vue";

export function useButtonClickDecoration() {
  const showDecoration = ref<boolean>(false);

  function triggerDecoration() {
    if (showDecoration.value) {
      showDecoration.value = false;
      nextTick(() => (showDecoration.value = true));
    } else {
      showDecoration.value = true;
    }
  }

  return {
    showDecoration,
    triggerDecoration,
  };
}
