import VideoCard from "./VideoCard";
const videoData = [
  {
    title: "Why NO job in 2024 | Recession andd tech Layoff",
    channelName: "Arsh Goyal",
    views: "4.6k views",
    time: "13 hour ago",
    image: "./thumbnail1.png",
  },
  {
    title: "OMR Sheet Scanning Process | Jee Mains 2024 | NTA",
    channelName: "Arsh Goyal",
    views: "11M views",
    time: "1 year ago",
    image: "./thumbnail2.png",
  },
  {
    title: "Cycling Event in Delhi NCR | Reliance Event ",
    channelName: "Buisness Insiders",
    views: "1.3M views",
    time: "2 weeks ago",
    image: "./thumbnail3.png",
  },
  {
    title: "Why do we need an Ocean? | Hostile Planet | Full Episode - 01",
    channelName: "National Geographic India",
    views: "2.8M views",
    time: "7 months ago",
    image: "./thumbnail.png",
  },
  {
    title: "Building a rs 3000 Crore Buisness | Bangalore | YourStory",
    channelName: "YourStory",
    views: "4.6k views",
    time: "13 hour ago",
    image: "./thumbnail6.png",
  },
  {
    title: "How Pinterest Scale to 11 Million with only 6 Engineer",
    channelName: "GitHub",
    views: "4.6k views",
    time: "13 hour ago",
    image: "./thumbnail5.png",
  },
  {
    title: "Why NO job in 2024 | Recession andd tech Layoff",
    channelName: "Arsh Goyal",
    views: "4.6k views",
    time: "13 hour ago",
    image: "./thumbnail1.png",
  },
  {
    title: "OMR Sheet Scanning Process | Jee Mains 2024 | NTA",
    channelName: "Arsh Goyal",
    views: "11M views",
    time: "1 year ago",
    image: "./thumbnail2.png",
  },
  {
    title: "Cycling Event in Delhi NCR | Reliance Event ",
    channelName: "Buisness Insiders",
    views: "1.3M views",
    time: "2 weeks ago",
    image: "./thumbnail3.png",
  },
  {
    title: "Why do we need an Ocean? | Hostile Planet | Full Episode - 01",
    channelName: "National Geographic India",
    views: "2.8M views",
    time: "7 months ago",
    image: "./thumbnail.png",
  },
  {
    title: "Building a rs 3000 Crore Buisness | Bangalore | YourStory",
    channelName: "YourStory",
    views: "4.6k views",
    time: "13 hour ago",
    image: "./thumbnail6.png",
  },
  {
    title: "How Pinterest Scale to 11 Million with only 6 Engineer",
    channelName: "GitHub",
    views: "4.6k views",
    time: "13 hour ago",
    image: "./thumbnail5.png",
  },
  {
    title: "Why NO job in 2024 | Recession andd tech Layoff",
    channelName: "Arsh Goyal",
    views: "4.6k views",
    time: "13 hour ago",
    image: "./thumbnail1.png",
  },
  {
    title: "OMR Sheet Scanning Process | Jee Mains 2024 | NTA",
    channelName: "Arsh Goyal",
    views: "11M views",
    time: "1 year ago",
    image: "./thumbnail2.png",
  },
  {
    title: "Cycling Event in Delhi NCR | Reliance Event ",
    channelName: "Buisness Insiders",
    views: "1.3M views",
    time: "2 weeks ago",
    image: "./thumbnail3.png",
  },
  {
    title: "Why do we need an Ocean? | Hostile Planet | Full Episode - 01",
    channelName: "National Geographic India",
    views: "2.8M views",
    time: "7 months ago",
    image: "./thumbnail.png",
  },
  {
    title: "Building a rs 3000 Crore Buisness | Bangalore | YourStory",
    channelName: "YourStory",
    views: "4.6k views",
    time: "13 hour ago",
    image: "./thumbnail6.png",
  },
  {
    title: "How Pinterest Scale to 11 Million with only 6 Engineer",
    channelName: "GitHub",
    views: "4.6k views",
    time: "13 hour ago",
    image: "./thumbnail5.png",
  },
];
const VideoGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {videoData.map((video) => {
        return (
          <VideoCard
            title={video.title}
            channelName={video.channelName}
            views={video.views}
            time={video.time}
            image={video.image}
          />
        );
      })}
    </div>
  );
};
export default VideoGrid;
