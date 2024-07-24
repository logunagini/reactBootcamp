import InputField from "./InputField";

export default function TabButton()

{
    return (


       
      <div className="fields-container container-lg">
   
      <div className="fields-section">
        <div className="text-end my-3">
          <button  class="btn btn-primary">தமிழ்</button>
        </div>
        <h2 data-tamil="உங்கள் தரவை உள்ளிடவும்" data-english="Enter Your Data!!!">உங்கள் தரவை உள்ளிடவும்</h2>
        <InputField id="Principal" labelTamil="அசல் (ரூ):" labelEnglish="Principal:" />
        <InputField id="paymentInAdvance" labelTamil="முன் பணம் (ரூ) :" labelEnglish="Advance Payment (₹):" />
        <InputField id="InterestRate" labelTamil="வட்டி விகிதம் (%) (ஆண்டு) :" labelEnglish="Interest Rate (%) (Annual):" />
        <InputField id="month" labelTamil="மாதங்கள் :" labelEnglish="Months:" />
        <InputField id="currentYear" labelTamil="தொடங்கும் ஆண்டு :" labelEnglish="Start Year:" />
     
        
        <InputField id="currentMonth" labelTamil="தொடங்கும் மாதம் :" labelEnglish="Start Month:"
          type="select"
          options={[
         {value:"0" ,labelTamil:"ஜனவரி" , labelEnglish:"January" },
         {value:"1", labelTamil:"பிப்ரவரி", labelEnglish:"February"},
         {value:"2" ,labelTamil:"மார்ச்" , labelEnglish:"March" },
         {value:"3" ,labelTamil:"ஏப்ரல்" ,labelEnglish:"April" },
         {value:"4",labelTamil:"மே" , labelEnglish:"May" },
         {value:"5",labelTamil:"ஜூன்" , labelEnglish:"June"},
         {value:"6",labelTamil:"ஜூலை" , labelEnglish:"July"},
         {value:"7",labelTamil:"ஆகஸ்ட்" , labelEnglish:"August" },
         {value:"8",labelTamil:"செப்டம்பர்" , labelEnglish:"September"},
         {value:"9",labelTamil:"அக்டோம்பர்" , labelEnglish:"October" },
         {value:"10",labelTamil:"நவம்பர்" , labelEnglish:"November" },
         {value:"11" ,labelTamil:"டிசம்பர்" , labelEnglish:"December" }
          ]} />
     
        <InputField id="tax" labelTamil="வரி (ஆண்டு) :" labelEnglish="Tax (Annual):" />

        <div data-tamil="வீட்டு கடன்:" data-english="Home Loan:">வீட்டு கடன்:</div>
        <InputField
          id="homeLoan"
          name="optradio1"
          type="radio"
          options={[
            { value: "option1", labelTamil: "ஆம்", labelEnglish: "Yes" },
            { value: "option2", labelTamil: "இல்லை", labelEnglish: "No" }
          ]}
        />
  
      <div data-tamil="வீட்டுக் கடன் மற்றும் வரி ஒப்புதல்:" data-english="Home Loan and Tax Approval:">வீட்டுக் கடன் மற்றும் வரி ஒப்புதல்:</div>
   <InputField id= "HomeLoanandTaxApproval"  name="optradio2" type="radio"
     options={[
      { value: "option1", labelTamil: "ஆம்", labelEnglish: "Yes" },
      { value: "option2", labelTamil: "இல்லை", labelEnglish: "No" }
    ]}
     />
   
      < button id="calBtn" labelTamil="கணக்கீடு" labelEnglish="Calculate" >கணக்கீடு</button>
      </div>
  

   <div className="fields-section">
   <div className="text-start my-3">
     <button className="btn btn-secondary">English</button>
   </div>
   <h2 data-tamil="உங்கள் தரவு இங்கே காணவும்" data-english="your datas here!!!">உங்கள் தரவு இங்கே காணவும்</h2>
   {[
     { labelTamil: "கடன் தொகை (ரூ) :", labelEnglish: "Loan Amount (₹):" },
     { labelTamil: "முன் பணம் சதவீதம் :", labelEnglish: "Advance Payment Percentage:" },
     { labelTamil: "மாதத் தவணை தொகை :", labelEnglish: "Monthly EMI Amount:" },
     { labelTamil: "மாத வரி :", labelEnglish: "Monthly Tax:" },
     { labelTamil: "மொத்த வரி :", labelEnglish: "Total Tax:" },
     { labelTamil: "மொத்த மாதங்களின் தவணை:", labelEnglish: "Total Installments for Months:" },
     { labelTamil: "ஆண்டின் மொத்தத் தவணை :", labelEnglish: "Total Annual Installments:" },
     { labelTamil: "மொத்த வட்டி :", labelEnglish: "Total Interest:" }
   ].map((field, index) => (
     <div key={index} className="form-group">
       <label className="form-label" data-tamil={field.labelTamil} data-english={field.labelEnglish}>
         {field.labelTamil}
       </label>
       <div className="p-3 form-control"></div>
     </div>
   ))}
 </div>
 </div>

);
}