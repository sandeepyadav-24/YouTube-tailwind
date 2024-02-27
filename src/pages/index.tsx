import VideoGrid from "@/components/VideoGrid";
import AppBar from "@/components/AppBar";
export default function Home() {
  return (
    <div className=" flex flex-row flex-wrap">
      <AppBar />
      <VideoGrid />
    </div>
  );
}
