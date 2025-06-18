import { customRef } from "vue";

const formatDate = (date: Date, format: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };

  switch (format) {
    case "MM-DD-YYYY":
      return date.toLocaleDateString("en-US", options).replace(/\//g, "-");

    case "MM/DD/YYYY":
      return date.toLocaleDateString("en-US", options);

    case "DD/MM/YYYY":
      return date.toLocaleDateString("en-GB", options);

    case "DD-MM-YYYY":
      return date.toLocaleDateString("en-GB", options).replace(/\//g, "-");
    default:
      console.log("Format String not implemented");
      return date.toString();
  }
};

const useDateFormat = (date: Date, format: string) => {
  return customRef((track, trigger) => {
    let value: string = formatDate(date, format);

    return {
      get() {
        track();
        return value;
      },
      set(newValue) {
        value = newValue;
        trigger();
      },
    };
  });
};

export default useDateFormat;
