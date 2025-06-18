import { customRef } from "vue";

export const capitalizeInput = (init: string) => {
  return customRef((track, trigger) => {
    let value: string = init;

    return {
      get() {
        track();
        return value.toUpperCase();
      },
      set(newValue) {
        value = newValue;
        trigger();
      },
    };
  });
};
