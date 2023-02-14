import React from "react";
import jsPDF from "jspdf";

import autoTable from "jspdf-autotable";

class CreatePDF extends React.Component {
  generatePDF = () => {
    const pdf = new jsPDF();
    const w = pdf.internal.pageSize.getWidth();
    // add a border
    pdf.setLineWidth(1);
    pdf.rect(5, 5, 200, 287);
    console.log(pdf.getFontList());

    // add an image in the top-middle
    const imgData = "https://i.postimg.cc/C5yc8zQn/MUJ-LOGO-Final-3.png";
    // pdf.addImage(imgData, "PNG", 50, 15, 150, 40);
    //align this image in middle
    pdf.addImage(imgData, "PNG", 50, 30, 120, 35, undefined, "FAST");

    // add a heading
    pdf.setFontSize(20);
    pdf.setFont("Times-Roman", "bold");
    pdf.text("Faculty of Engineering and Technology", w / 2, 90, {
      align: "center",
      //text wrap
      maxWidth: 180,
    });

    pdf.setFontSize(20);
    //school name
    pdf.text("School of Computer and communication Engineering", w / 2, 110, {
      align: "center",
      fontStyle: "bold",
      font: "times",
    });
    //Department name
    pdf.setFontSize(20);
    pdf.text(
      "Department of Computer and communication Engineering",
      w / 2,
      130,
      {
        align: "center",
        fontStyle: "bold",
        font: "times",
      }
    );
    //Name of event with text wrap

    pdf.setFontSize(20);
    pdf.text("Lecture on Blockchain and Technology", w / 2, 150, {
      align: "center",
      fontStyle: "bold",
      font: "times",
      //text wrap
      maxWidth: 180,
    });

    //Event Type
    pdf.setFontSize(15);
    pdf.text("Event Type: Lecture", w / 2, 170, {
      align: "center",
      fontStyle: "bold",
      font: "times",
      //text wrap
      maxWidth: 180,
    });
    //Event Date
    pdf.setFontSize(15);
    pdf.text("20/10/2020", w / 2, 190, {
      align: "center",

      fontStyle: "bold",
      font: "times",

      maxWidth: 180,
    });

    //page no
    pdf.setFontSize(10);
    pdf.setFont("Times-Roman", "");
    pdf.text("Page 1 of 2", w / 2, 290, {
      align: "center",
      fontStyle: "bold",
      font: "times",
      //text wrap
      maxWidth: 180,
    });

    pdf.addPage();
    pdf.setLineWidth(1);
    pdf.rect(5, 5, 200, 287);

    pdf.addImage(imgData, "PNG", 10, 10, 100, 20, undefined, "FAST");
    pdf.setFontSize(20);
    pdf.setFont("Times-Roman", "bold", "underline");
    pdf.text("INDEX", w / 2, 50, {
      align: "center",
      fontStyle: "underline",
      maxWidth: 180,
    });
    autoTable(pdf, { html: "#my-table" });
    autoTable(pdf, { html: "#my-table" });
    autoTable(pdf, { html: "#my-table" });
    autoTable(pdf, { html: "#my-table" });
    autoTable(pdf, { html: "#my-table" });
    autoTable(pdf, { html: "#my-table" });
    autoTable(pdf, { html: "#my-table" });
    autoTable(pdf, { html: "#my-table" });

    autoTable(pdf, {
      head: [["S.No", "Title "]],
      body: [
        ["1", "Introduction of the event"],
        ["2", "Objective of the event"],
        ["3", "Organizing Committee / Faculty "],
        ["4", "Details of Guests"],
        ["5", "Brief Discription of the event"],
        ["6", "Schedule of the event "],
        ["7", "Event Photographs"],
        ["8", "Attendees"],
        ["9", "News Publications"],
        ["10", "Feedback"],
      ],
    });
    pdf.setFontSize(10);
    pdf.setFont("Times-Roman", "");
    pdf.text("Lecture on Blockchain and Technology", 200, 275, {
      align: "right",

      fontStyle: "bold",
      font: "times",
      //text wrap
      maxWidth: 50,
    });

    pdf.setFontSize(10);
    pdf.setFont("Times-Roman", "");
    pdf.text("Page 2 of 2", w / 2, 290, {
      align: "center",
      fontStyle: "bold",
      font: "times",
      //text wrap
      maxWidth: 180,
    });

    /////////page 3///////////

    pdf.addPage();
    pdf.setLineWidth(1);
    pdf.rect(5, 5, 200, 287);

    //image
    pdf.addImage(imgData, "PNG", 10, 10, 100, 20, undefined, "FAST");
    //title
    pdf.setFontSize(14);
    pdf.setFont("Times", "bold");
    pdf.setFont("underline");
    pdf.text("1. Introduction of the event :-", 20, 50, {
      maxWidth: 180,
    });
    //text

    pdf.setFontSize(12);
    pdf.setFont("Times-Roman", "");
    pdf.text(
      "The Department of Computer and Communication Engineering, MUJ, organized a lecture on Blockchain and Technology on 20th October 2020. The lecture was delivered by Mr. Prashant Kumar, Founder and CEO of Blockchain and Technology. The lecture was attended by 100 students and faculty members of the department. The lecture was organized to provide the students with an insight into the Blockchain and Technology.",
      20,
      60,
      {
        align: "justify",
        //justify

        maxWidth: 170,
      }
    );
    //Add bullets like Mode, Timne, Venue, etc
    pdf.setFontSize(13);
    pdf.setFont("Times", "bold");
    pdf.text("Mode :- Online", 30, 90, {
      maxWidth: 180,
    });
    pdf.text("Time :- 11:00 AM to 12:00 PM", 30, 100, {
      maxWidth: 180,
    });
    pdf.text("Venue :- MS Teams", 30, 110, {
      maxWidth: 180,
    });
    pdf.text("Date :- 20/10/2020", 30, 120, {
      maxWidth: 180,
    });
    //duration
    pdf.setFontSize(13);
    pdf.setFont("Times", "bold");
    pdf.text("Duration :- 1 hour", 30, 130, {
      maxWidth: 180,
    });

    //title
    pdf.setFontSize(14);
    pdf.setFont("Times", "bold");
    pdf.setFont("underline");
    pdf.text("2. Objective of the event :-", 20, 150, {
      maxWidth: 180,
    });
    //text

    pdf.setFontSize(12);
    pdf.setFont("Times-Roman", "");
    pdf.text(
      "The objective of the event was to provide the students with an insight into the Blockchain and Technology.",
      20,
      160,
      {
        align: "justify",
        //justify

        maxWidth: 170,
      }
    );

    //title
    pdf.setFontSize(14);
    pdf.setFont("Times", "bold");
    pdf.setFont("underline");
    pdf.text("3. Organizing Committee / Faculty :-", 20, 180, {
      maxWidth: 180,
    });
    //using auto table
    autoTable(pdf, { html: "#my-table" });
    autoTable(pdf, { html: "#my-table" });
    autoTable(pdf, { html: "#my-table" });
    autoTable(pdf, { html: "#my-table" });
    autoTable(pdf, { html: "#my-table" });
    autoTable(pdf, { html: "#my-table" });
    autoTable(pdf, { html: "#my-table" });
    autoTable(pdf, { html: "#my-table" });
    autoTable(pdf, { html: "#my-table" });
    autoTable(pdf, { html: "#my-table" });
    autoTable(pdf, { html: "#my-table" });
    autoTable(pdf, { html: "#my-table" });
    autoTable(pdf, { html: "#my-table" });
    autoTable(pdf, { html: "#my-table" });
    autoTable(pdf, { html: "#my-table" });
    autoTable(pdf, { html: "#my-table" });
    autoTable(pdf, { html: "#my-table" });
    autoTable(pdf, { html: "#my-table" });
    autoTable(pdf, { html: "#my-table" });
    autoTable(pdf, { html: "#my-table" });
    autoTable(pdf, { html: "#my-table" });
    autoTable(pdf, { html: "#my-table" });
    autoTable(pdf, { html: "#my-table" });
    autoTable(pdf, { html: "#my-table" });
    autoTable(pdf, { html: "#my-table" });

    autoTable(
      pdf,
      {
        head: [["S.No", "Name", "Designation", "Contact No"]],
        body: [
          ["1", "Dr. S. K. Singh", "HOD", "1234567890"],
          ["2", "Dr. Vijay Sharma", "Assistant Professor", "1234567890"],
          ["3", "Prof. Manoj Singh", "Assistant Professor", "1234567890"],
          ["4", "Prof. Anil Kumar", "Assistant Professor", "1234567890"],
        ],
      },
      {
        margin: { top: 190 },
      }
    );
    //page no
    pdf.setFontSize(10);
    pdf.setFont("Times-Roman", "");
    pdf.text("Page 3 of 3", w / 2, 290, {
      align: "center",
      fontStyle: "bold",
      font: "times",
      //text wrap
      maxWidth: 180,
    });
    pdf.setFontSize(10);
    pdf.setFont("Times-Roman", "");
    pdf.text("Lecture on Blockchain and Technology", 200, 275, {
      align: "right",

      fontStyle: "bold",
      font: "times",
      //text wrap
      maxWidth: 50,
    });
    //add page
    pdf.addPage();
    pdf.setLineWidth(1);
    pdf.rect(5, 5, 200, 287);
    //image
    pdf.addImage(imgData, "PNG", 10, 10, 100, 20, undefined, "FAST");
    //title
    pdf.setFontSize(14);
    pdf.setFont("Times", "bold");
    pdf.setFont("underline");
    pdf.text("4. Details of Guests :-", 20, 50, {
      maxWidth: 180,
    });
    //using auto table
    const ProfileLink = "https://www.linkedin.com/in/sunil-prakash-5b0b";
    autoTable(pdf, { html: "#my-table" });
    autoTable(pdf, { html: "#my-table" });
    autoTable(pdf, { html: "#my-table" });
    autoTable(pdf, { html: "#my-table" });
    autoTable(pdf, { html: "#my-table" });
    autoTable(pdf, { html: "#my-table" });
    autoTable(
      pdf,
      {
        head: [["S.No", "Name", "Designation", "Organization", "Profile link"]],
        body: [
          [
            "1",
            "Mr. Prashant Kumar",
            "Senior Manager",
            "TCS",
            {
              content: ProfileLink,
              styles: { textColor: [0, 0, 255] },
            },
            //add link
          ],
          [
            "2",
            "Mr. Sunil Prakash",
            "Senior Manager",
            "TCS",
            {
              content: ProfileLink,
              styles: { textColor: [0, 0, 255] },
            },
          ],
          [
            "3",
            "Mr. Sunil Prakash",
            "Senior Manager",
            "TCS",
            {
              content: ProfileLink,
              styles: { textColor: [0, 0, 255] },
            },
          ],
        ],
      },
      {
        margin: { top: 60 },
      }
    );
    //Brief Description of event
    pdf.setFontSize(14);
    pdf.setFont("Times", "bold");
    pdf.setFont("underline");
    pdf.text("5. Brief Description of event :-", 20, 120, {
      maxWidth: 180,
    });
    //text
    pdf.setFontSize(12);
    pdf.setFont("Times-Roman", "");
    pdf.text(
      "The Department of Computer and Communication Engineering, MUJ, organized a lecture on Blockchain and Technology on 20th October 2020. The lecture was delivered by Mr. Prashant Kumar, Founder and CEO of Blockchain and Technology. The lecture was attended by 100 students and faculty members of the department. The lecture was organized to provide the students with an insight into the Blockchain and Technology.The lecture was delivered by Mr. Prashant Kumar, Founder and CEO of Blockchain and Technology. The lecture was attended by 100 students and faculty members of the department. The lecture was organized to provide the students with an insight into the Blockchain and Technology.",
      20,
      130,
      {
        align: "justify",
        //justify
        maxWidth: 170,
      }
    );
    //Schedule of the event
    pdf.setFontSize(14);
    pdf.setFont("Times", "bold");
    pdf.setFont("underline");
    pdf.text("6. Schedule of the event :-", 20, 200, {
      maxWidth: 180,
    });
    //using auto table

    autoTable(pdf, { html: "#my-table" });
    autoTable(pdf, { html: "#my-table" });
    autoTable(pdf, { html: "#my-table" });
    autoTable(pdf, { html: "#my-table" });
    autoTable(pdf, { html: "#my-table" });
    autoTable(pdf, { html: "#my-table" });
    autoTable(pdf, { html: "#my-table" });
    autoTable(pdf, { html: "#my-table" });
    autoTable(pdf, { html: "#my-table" });
    autoTable(pdf, { html: "#my-table" });
    autoTable(pdf, { html: "#my-table" });
    autoTable(pdf, { html: "#my-table" });
    autoTable(pdf, { html: "#my-table" });
    autoTable(pdf, { html: "#my-table" });
    autoTable(pdf, { html: "#my-table" });
    autoTable(pdf, { html: "#my-table" });
    autoTable(pdf, {
      head: [["S.No", "Time", "Activity"]],
      body: [
        ["1", "10:00 AM", "Registration"],
        ["2", "10:30 AM", "Lecture"],
        ["3", "11:30 AM", "Q&A"],
        ["4", "12:00 PM", "End"],
      ],
    });

    //page no
    pdf.setFontSize(10);
    pdf.setFont("Times-Roman", "");
    pdf.text("Page 4 of 4", w / 2, 290, {
      align: "center",
      fontStyle: "bold",
      font: "times",
      //text wrap
      maxWidth: 180,
    });
    pdf.setFontSize(10);
    pdf.setFont("Times-Roman", "");
    pdf.text("Lecture on Blockchain and Technology", 200, 275, {
      align: "right",

      fontStyle: "bold",
      font: "times",
      //text wrap
      maxWidth: 50,
    });
    //add page
    pdf.addPage();
    pdf.setLineWidth(1);
    pdf.rect(5, 5, 200, 287);
    //image
    pdf.addImage(imgData, "PNG", 10, 10, 100, 20, undefined, "FAST");
    //title
    pdf.setFontSize(14);
    pdf.setFont("Times", "bold");
    pdf.setFont("underline");
    //Photographs
    pdf.text("7. Photographs :-", 20, 50, {
      maxWidth: 180,
    });
    //image with border and caption
    pdf.addImage(
      "https://i.postimg.cc/VvTn5z14/1.jpg",
      "PNG",
      70,
      50,
      70,
      70,
      undefined,
      "FAST"
    );
    pdf.rect(70, 50, 70, 70);
    pdf.text("Guest Giving Speech in Seminar Hall", w / 2, 130, {
      maxWidth: 180,
      align: "center",
    });

    //add image
    pdf.addImage(
      "https://i.postimg.cc/pLpvhMHb/3.jpg",
      "PNG",
      30,
      145,
      70,
      70,
      undefined,
      "FAST"
    );
    pdf.rect(30, 145, 70, 70);
    pdf.text("Post-Meating Discussions", 30, 230, {
      maxWidth: 70,
    });

    //add image
    pdf.addImage(
      "https://i.postimg.cc/SN4jMsT0/2.jpg",
      "PNG",
      115,
      145,
      70,
      70,
      undefined,
      "FAST"
    );
    pdf.rect(115, 145, 70, 70);
    pdf.text("Q&A Session Glimps", 115, 230, {
      maxWidth: 70,
    });
    pdf.setFontSize(10);
    pdf.setFont("Times-Roman", "");
    pdf.text("Page 3 of 4", w / 2, 290, {
      align: "center",
      fontStyle: "bold",
      font: "times",
      //text wrap
      maxWidth: 180,
    });
    pdf.setFontSize(10);
    pdf.setFont("Times-Roman", "");
    pdf.text("Lecture on Blockchain and Technology", 200, 275, {
      align: "right",

      //text wrap
      maxWidth: 50,
    });
    //add page
    pdf.addPage();
    pdf.setLineWidth(1);
    pdf.rect(5, 5, 200, 287);
    //image
    pdf.addImage(imgData, "PNG", 10, 10, 100, 20, undefined, "FAST");
    //title
    pdf.setFontSize(14);
    pdf.setFont("Times", "bold");
    pdf.setFont("underline");
    //attendees
    pdf.text("8. Attendees :-", 20, 40, {
      maxWidth: 180,
    });
    //image with border and caption
    pdf.addImage(
      "https://i.postimg.cc/DzVkDjSB/Screenshot-2023-02-07-at-3-41-54-PM.png",
      "PNG",
      20,
      50,
      170,
      230,
      undefined,
      "FAST"
    );
    pdf.rect(20, 50, 170, 230);
    //add page
    pdf.addPage();
    pdf.setLineWidth(1);
    pdf.rect(5, 5, 200, 287);
    //image
    pdf.addImage(imgData, "PNG", 10, 10, 100, 20, undefined, "FAST");
    //title
    pdf.setFontSize(14);
    pdf.setFont("Times", "bold");
    pdf.setFont("underline");
    //feedback
    pdf.text("9. Feedback Report of event:-", 20, 40, {
      maxWidth: 180,
    });
    //text
    pdf.setFontSize(13);
    pdf.setFont("Times-Roman", "");
    pdf.text(
      "The event was a great success and we received a lot of positive feedback from the attendees. The event was well organized and the speakers were very knowledgeable. We would like to thank you for your support and look forward to working with you again in the future.The event was a great success and we received a lot of positive feedback from the attendees. The event was well organized and the speakers were very knowledgeable. We would like to thank you for your support and look forward to working with you again in the future.",
      20,
      50,
      {
        maxWidth: 180,
      }
    );
    //Signature and seal at right down
    //add image above
    pdf.addImage(
      "https://i.postimg.cc/0j50NsBZ/Snew.png",
      "PNG",
      150,
      250,
      50,
      20,
      undefined,
      "FAST"
    );
    pdf.setFontSize(14);
    pdf.setFont("Times-Roman", "bold");
    pdf.text("Signature and Seal", 160, 275, {
      maxWidth: 180,
    });

    pdf.save("sampleReport.pdf");
  };
  //page no

  render() {
    return (
      <div>
        <button onClick={this.generatePDF}>Generate PDF</button>
      </div>
    );
  }
}

export default CreatePDF;
