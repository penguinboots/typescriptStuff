// passing functions into other functions

const addListener = (onFocusChange: (isFocused: Boolean) => void) => {
  window.addEventListener("focus", () => {
    onFocusChange(true);
  });

  window.addEventListener("blur", () => {
    onFocusChange(false);
  });
};

type FocusListener = (isFocused: boolean) => void;
const addListener2 = (onFocusChange: FocusListener) => {
  window.addEventListener("focus", () => {
    onFocusChange(true);
  });

  window.addEventListener("blur", () => {
    onFocusChange(false);
  });
};

addListener((isFocused) => {
  console.log({ isFocused });

  // type tests = [Expect<Equal<typeof isFocused, boolean>>];
});
