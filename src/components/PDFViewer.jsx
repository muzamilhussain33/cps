import companyProfile from "../assets/Company Profile.pdf"

function PDFViewer() {
  return (
    <div className="pl-15 pt-10 pb-10">
      <h5 className="text-white text-[30px]">Company Profile</h5>
      <div>
        <a href={companyProfile} download>
          <button className="px-2"> Download PDF</button>
        </a>
        &nbsp;&nbsp;
        <a href={companyProfile} target="_blank" rel="noopener noreferrer">
          <button className="px-2">View Fullscreen</button>
        </a>
      </div>
    </div>
  );
}

export default PDFViewer;
