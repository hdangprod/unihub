interface IVideoBackgroundProps {
  id: string;
  isMute?: boolean;
}
export default function VideoBackground({
  id,
  isMute = true,
}: IVideoBackgroundProps) {
  return (
    <div className="relative -z-50 h-screen w-screen overflow-hidden">
      <iframe
        id="video-player"
        className="pointer-events-none absolute left-1/2 top-1/2 box-border h-[56.25vw] min-h-full w-[300%]  min-w-full -translate-x-1/2 -translate-y-1/2"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        title="Deep sleep listening to the sound of the waves on the beach"
        width="640"
        height="360"
        src={`https://www.youtube.com/embed/${id}?start=60&loop=1&controls=0&disablekb=0&fs=0&rel=0&iv_load_policy=3&autoplay=1&mute=${
          isMute ? 1 : 0
        }&modestbranding=1&playsinline=1&enablejsapi=1&autohide=1`}
        data-gtm-yt-inspected-17="true"
      ></iframe>
    </div>
  );
}
