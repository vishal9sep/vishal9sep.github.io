import "./ResumeButton.css";

function ResumeButton() {
  const resumeUrl = "/VISHAL_SINGH_Resume.pdf";
  return (
    <a
      className="navItem resumeButton"
      href={resumeUrl}
      target="_blank"
      rel="noopener noreferrer"
      download
      onClick={() => {
        window.open(resumeUrl, "_blank");
      }}
    >
      <h3>Resume</h3>
    </a>
  );
}

export default ResumeButton;
