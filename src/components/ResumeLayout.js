import SummarySection from "./SummarySection";

function ResumeLayout() {
  return (
    <div className="grid lg:grid-cols-[65%_35%] gap-5 print:grid-cols-[65%_35%]">
      <div className="space-y-3">
        <SummarySection/>
      </div>
    </div>
  );
}

export default ResumeLayout;
