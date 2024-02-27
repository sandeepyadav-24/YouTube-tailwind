const VideoCard = (props: {
  title: string;
  channelName: string;
  views: string;
  time: string;
  image: string;
}) => {
  return (
    <div className=" px-5">
      <img src={props.image} alt="thumbnail" className="rounded-sm" />
      <div className=" grid grid-cols-12">
        <div className="logo col-span-2">
          <img
            src="./thumbnail.png"
            alt=""
            className="rounded-full h-[50px] w-[50px]"
          />
        </div>
        <div className="written col-span-10">
          <h1 className="text-bold">{props.title}</h1>
          <h1>{props.channelName}</h1>
          <h1>
            <span>{props.views}</span> | <span>{props.time}</span>
          </h1>
        </div>
      </div>
    </div>
  );
};
export default VideoCard;
