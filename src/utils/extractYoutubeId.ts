export function extractYouTubeId(url: string) {
  if (typeof url !== "string") {
    return null;
  }

  const pattern =
    /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|watch\?v=|v\/)|youtu\.be\/)([\w-]{11})/;
  const match = url.match(pattern);
  if (match && match[1]) {
    return match[1];
  }
  return null;
}
