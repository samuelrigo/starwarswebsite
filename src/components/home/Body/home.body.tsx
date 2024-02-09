import './Body.css'
export const HomeBody = () => {
    return(
        <div className='body'>
            <video className='star__video' autoPlay disablePictureInPicture muted loop> <source src='./././videos/slow_star_video.mp4' type='video/mp4'></source></video>
            <div className='body__texts'>
                <h1>Welcome to your best Star Wars Wiki!</h1>
                <h3>This website is a project that was used to practice Web Development skills</h3>
            </div>
        </div>
    )
}
export default HomeBody