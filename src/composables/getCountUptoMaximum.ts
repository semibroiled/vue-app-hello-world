import * as vue from "vue";

export const getCountUptoMaximum = (max: number) => {
  return vue.customRef((track, trigger) => {
    let init = 0;

    return {
      get() {
        track();
        return init;
      },

      set(newValue) {
        if (newValue <= max) {
          init = newValue;
        }
        trigger();
      },
    };
  });
};
