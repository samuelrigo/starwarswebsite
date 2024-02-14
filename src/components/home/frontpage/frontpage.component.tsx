import "./frontpage.styles.css";

export const FrontPage = () => {
  return (
    <section className="body">
      <div className="body__text">
        <h1 className="body__title">
          <b>Welcome</b> to your best <b>Star Wars Wiki!</b>
        </h1>
        <p className="body__p">
          This website is a project that was used to practice Web Development
          skills
        </p>
      </div>
    </section>
  );
};
export default FrontPage;
