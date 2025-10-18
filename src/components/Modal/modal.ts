import { ref } from "vue";

export function useModal() {
  const isOpen = ref(false);

  function openModal() {
    if (isOpen.value) return;
    isOpen.value = true;
  }

  function closeModal() {
    if (!isOpen.value) return;
    isOpen.value = false;
  }

  return {
    isOpen,
    openModal,
    closeModal,
  };
}
