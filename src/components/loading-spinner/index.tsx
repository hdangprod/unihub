interface ILoadingSpinnerProps {
  size?: "large" | "medium" | "small";
  position: "center" | "absolute";
}

export default function LoadingSpinner({
  size = "large",
  position,
}: ILoadingSpinnerProps) {
  let loadingSize;
  let loadingPosition;
  if (size === "large") {
    loadingSize = "h-20 w-20";
  } else if (size === "medium") {
    loadingSize = "h-10 w-10";
  } else {
    loadingSize = "h-5 w-5";
  }

  if (position === "center") {
    loadingPosition =
      "fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2";
  } else {
    loadingPosition = "relative";
  }

  return (
    <div className={loadingPosition}>
      <div
        className={`${loadingSize} rounded-full border-2 border-sky-100`}
      ></div>
      <div
        className={`absolute left-0 top-0 ${loadingSize} animate-spin rounded-full border-t-2 border-sky-500`}
      ></div>
    </div>
  );
}
