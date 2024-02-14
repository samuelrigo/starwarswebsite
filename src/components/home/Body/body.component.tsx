import "./body.styles.css";
export const HomeBody = () => {
  return (
    <div className="body">
      <video
        className="star__video"
        autoPlay
        disablePictureInPicture
        muted
        loop
      >
        {" "}
        <source
          src="./././videos/slow_star_video.mp4"
          type="video/mp4"
        ></source>
      </video>

      <div className="body__texts">
        <h1>Welcome to your best Star Wars Wiki!</h1>

        <p>
          This website is a project that was used to practice Web Development
          skills
        </p>
      </div>
    </div>
  );
};
export default HomeBody;
