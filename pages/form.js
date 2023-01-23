import Image from "next/image";
import { useEffect, useState } from "react";
import { BsXLg } from "react-icons/bs";

import Layout from "../components/Layout";
import Saction from "../components/Saction";
import Input from "../components/Input";
import LogoImage from "../public/images/form-page/whiteLogo.png";
import FormStyle from "../styles/Form.module.css";
import Button from "../components/button";

//////////////////////////////////// check mark component

function InputCheck({
  placeholder = "Enter Here",
  label = "",
  name = "",
  id = "",
  className = "",
  key = "",
  onChange,
}) {
  return (
    <div className=" flex justify-center items-center ">
      <label
        htmlFor={id}
        className="text-white text-xl flex justify-center items-center "
      >
        <h1>{label}</h1>
        <input
          type="checkbox"
          placeholder={placeholder}
          name={name}
          key={key}
          className={className}
          id={id}
          onChange={onChange}
        />
        <div className="hidden" id={id}>
          <Image src={"CheckImage"} className={FormStyle.checkImage} />
        </div>
      </label>
    </div>
  );
}

//////////////////////////////////// check mark component

function Preloder() {
  return (
    <div className="main-preloder" id="main-preloder">
      <svg>
        <circle r="40"></circle>
      </svg>
    </div>
  );
}

function FormHeader() {
  return (
    <div className="px-4">
      <div className={FormStyle.logo}>
        <div className=" py-3 flex justify-center">
          <div className="h-auto w-44">
            <Image src={LogoImage} alt="LOGO" />
          </div>
        </div>
        <h3 className="text-center text-[28px] text-4xl text-white pb-[5rem] font-[poppins,Source Sans Pro]   ">
          Hello Evaluator ! Welcome To TesnTrack
        </h3>
      </div>
    </div>
  );
}

function Generaldetails() {
  const [getImage, setgetImage] = useState("");
  const [imgError, setimsgError] = useState(FormStyle.imageErrorMsgHide);

  useEffect(() => console.log(getImage));

  function imageUploder(event) {
    // jpg png checker
    let image = event.target;
    let File = image.files[0];
    if (
      (File.size < 100000 && File.type === "image/jpeg") ||
      File.type === "image/jpg"
    ) {
      let reader = new FileReader();
      reader.onloadend = function () {
        let convertedimage = reader.result;
        setgetImage((prev) => ({
          ...prev,
          [event.target.name]: convertedimage,
        }));
      };
      reader.readAsDataURL(File);
    } else {
      setgetImage((prev) => ({
        ...prev,
        [event.target.name]: (event.target.value = null),
      }));
      // alert("please select small size image or jpg");
      setimsgError((prev) => ({ ...prev, ...FormStyle.imageErrorMsg }));
    }
  }

  const generalDatalist = {
    Userhandle: "",
    Username: "",
    Date: "",
    Address: "",
    Pincode: "",
    Email: "",
    Contact: "",
  };

  const [UserDetails, setUserDetails] = useState(generalDatalist);

  function catchData(event) {
    setUserDetails((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <Saction>
      <h2 className=" p-4 text-white pb-0">Select your image:-</h2>
      <h5 className=" p-4 text-white h3 text-sm pt-0 ">
        only JPG formate and 500 x 500 Size:-
      </h5>
      <div className="">
        <Input
          required
          padding="0.6rem"
          type="file"
          name="Userimage"
          onChange={imageUploder}
          placeholder="image*"
        />{" "}
        <h3 className={` text-[red] flex  ${imgError}`}>
          Please Select an image size less than 100kb and format JPEG or JPG{" "}
          <BsXLg className="m-1 ml-2 text-white" />
        </h3>
        <h2 className="px-3 pt-3 text-white ">Make Profile ID:-</h2>
        <Input
          required
          name="Userhandle"
          type="text"
          placeholder="Example: rahul_123*"
        />
      </div>

      <h2 className="text-white p-4 ">Your Details:-</h2>
      <div className="h-[7rem] md:flex md:h-[3.5rem] lg:flex lg:h-[3.5rem] justify-center items-center w-full  ">
        <Input
          required
          name="Username"
          onChange={catchData}
          id="name"
          type="text"
          placeholder="Your name*"
        />

        <Input
          required
          name="Date"
          id=""
          onChange={catchData}
          type="date"
          placeholder="Your name*"
        />
      </div>
      <div className="h-[7rem] md:flex md:h-[3.5rem] lg:flex lg:h-[3.5rem] justify-center items-center w-full">
        <Input
          required
          className="p-5 mx-1"
          name="Address"
          id="address"
          onChange={catchData}
          type="text"
          placeholder="Address*"
        />

        <Input
          required
          className="p-5 mx-1"
          name="Pincode"
          id="pincode"
          onChange={catchData}
          type="number"
          placeholder="Pin code*"
        />
      </div>
      <div className="h-[7rem] md:flex md:h-[3.5rem] lg:flex lg:h-[3.5rem] justify-center items-center w-full">
        <Input
          required
          className="p-5 mx-1"
          name="Email"
          id="email"
          onChange={catchData}
          type="text"
          placeholder="Your Email*"
        />
        <Input
          required
          className="p-5 mx-1"
          name="Contact"
          id="contact"
          onChange={catchData}
          type="number"
          placeholder="Contact No.*"
        />
      </div>
    </Saction>
  );
}

function Hobbies() {
  const [checkBox, setCheckBox] = useState(false);

  useEffect(() => {
    console.log(checkBox);
  });

  function checkvalue(event) {
    let boxChecked = event.target.checked;

    if (boxChecked) {
      setCheckBox((prev) => ({
        ...prev,
        [event.target.name]: (event.target.value = "true"),
      }));
    } else {
      setCheckBox((prev) => ({
        ...prev,
        [event.target.name]: (event.target.value = "false"),
      }));
    }
  }

  /////////////////////////////////////////////// main output
  return (
    <Saction>
      <h2 className="pb-0 text-white">HOBBIES :-</h2>
      <h5 className="h3 text-xs text-white ">Click On Hobbies :-</h5>
      <div className="grid  lg:grid-cols-5 grid-cols-2  w-full  h-[8rem] justify-around items-center ">
        <div className="flex justify-around items-center col-span-1 ">
          <InputCheck
            className=" m-2 "
            onChange={checkvalue}
            name="Music"
            id="music"
            type="checkbox"
            label="Music"
          />
        </div>
        <div className="flex justify-around items-center col-span-1 ">
          <InputCheck
            className=" m-2 "
            onChange={checkvalue}
            name="Travel"
            id="travel"
            type="checkbox"
            label="Travel"
          />
        </div>
        <div className="flex justify-around items-center col-span-1 ">
          <InputCheck
            className=" m-2 "
            onChange={checkvalue}
            name="Movie"
            id="movie"
            type="checkbox"
            label="Movie"
          />
        </div>
        <div className="flex justify-around items-center col-span-1 ">
          <InputCheck
            className=" m-2 "
            onChange={checkvalue}
            name="Sports"
            id="sports"
            type="checkbox"
            label="Sports"
          />
        </div>
        <div className="flex justify-around items-center col-span-2 lg:col-span-1 ">
          <InputCheck
            className=" m-2 "
            onChange={checkvalue}
            name="Reading"
            id="reading"
            type="checkbox"
            label="Reading"
          />
        </div>
      </div>
    </Saction>
  );
}

function Education() {
  const storeEducationValues = {
    Degree: "",
    EducationYear: "",
    Board: "",
    Result: "",
  };

  const [educationData, setEducationData] = useState(storeEducationValues);
  const [educationDataList, setEducationDataList] = useState([]);

  useEffect(() => {
    console.log(educationDataList);
  });

  const onChangeInput = (event) => {
    setEducationData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  function addPost() {
    if (educationDataList.length < 4) {
      setEducationDataList((prevList) => [
        ...prevList,
        {
          Degree: educationData.Degree,
          EducationYear: educationData.EducationYear,
          Board: educationData.Board,
          Result: educationData.Result,
        },
      ]);
    }
  }

  return (
    <Saction>
      <h2 className="pb-0 text-white ">Education:-</h2>
      <h5 className="h3 text-sm pb-2  text-white ">
        Recomended only FOUR(4) :-
      </h5>
      <div className=" block  ">
        <div className="h-[7rem] md:flex md:h-[3.5rem] lg:flex lg:h-[3.5rem] justify-center items-center w-full    ">
          <Input
            type="text"
            value={educationData}
            onChange={onChangeInput}
            name="Degree"
            placeholder="Your degree*"
          />
          <Input
            type="text"
            value={educationData}
            onChange={onChangeInput}
            name="EducationYear"
            placeholder="Year*"
          />
        </div>
        <div className="h-[7rem] md:flex md:h-[3.5rem] lg:flex lg:h-[3.5rem] justify-center items-center w-full    ">
          <Input
            type="text"
            value={educationData}
            onChange={onChangeInput}
            name="Board"
            placeholder="university/board*"
          />
          <Input
            type="text"
            value={educationData}
            onChange={onChangeInput}
            name="Result"
            placeholder="Result*"
          />
        </div>
      </div>
      <h1
        className={
          educationDataList.length < 4
            ? FormStyle.errorMsgHide
            : FormStyle.errorMsg
        }
      >
        Maximum Length Reached ✖
      </h1>
      <div className="app">
        <table
          id="table"
          className=""
          style={{
            width: "100%",
            marginTop: "2rem",
            marginBottom: "2rem",
            color: "white",
          }}
        >
          <thead>
            <tr className="border-[1px] border-white">
              <td className="border-2 border-white text-center">Degree</td>
              <td className="border-2 border-white text-center">Year</td>
              <td className="border-2 border-white text-center">
                University/Board
              </td>
              <td className="border-2 border-white text-center">Result</td>
              <td className="border-2 border-white text-center w-[2rem] "></td>
            </tr>
          </thead>
          <tbody>
            {educationDataList.map((value, i) => {
              return (
                <tr key={i}>
                  <td className="border-[1px] border-gray-400 text-center">
                    {value.Degree}
                  </td>
                  <td className="border-[1px] border-gray-400 text-center">
                    {value.EducationYear}
                  </td>
                  <td className="border-[1px] border-gray-400 text-center">
                    {value.Board}
                  </td>
                  <td className="border-[1px] border-gray-400 text-center">
                    {value.Result}
                  </td>
                  <td className="border-[1px] border-gray-400 text-center cursor-pointer ">
                    ✖
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Button label="ADD" width="10rem" height="3.5rem" onclick={addPost} />
    </Saction>
  );
}

function Experince() {
  const ExperinceEmptyValues = {
    Organization: "",
    Designation: "",
    ExperinceYear: "",
    Subject: "",
  };

  const [experinceData, setexperinceData] = useState(ExperinceEmptyValues);
  const [experinceDataList, setexperinceDataList] = useState([]);

  useEffect(() => {
    console.log(experinceDataList);
  });

  const onInputchange = (event) => {
    setexperinceData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  function addExperince() {
    if (experinceDataList.length < 4) {
      setexperinceDataList((prev) => [
        ...prev,
        {
          id: Date.now(),
          Organization: experinceData.Organization,
          Designation: experinceData.Designation,
          ExperinceYear: experinceData.ExperinceYear,
          Subject: experinceData.Subject,
        },
      ]);
    }
  }

  function removeExperince() {
    console.log("NO FUNCTION");
  }

  return (
    <Saction>
      <h2 className=" text-white pb-0">Experince:-</h2>
      <h5 className=" text-white h3 text-sm  ">Recomended only FOUR(4) :-</h5>
      <div className="block ">
        <div className="h-[7rem] md:flex md:h-[3.5rem] lg:flex lg:h-[3.5rem] justify-center items-center w-full  ">
          <Input
            type="text"
            onChange={onInputchange}
            name="Organization"
            placeholder="Organization*"
          />
          <Input
            type="text"
            onChange={onInputchange}
            name="Designation"
            placeholder="Designation*"
          />
        </div>
        <div className="h-[7rem] md:flex md:h-[3.5rem] lg:flex lg:h-[3.5rem] justify-center items-center w-full  ">
          <Input
            type="text"
            onChange={onInputchange}
            name="ExperinceYear"
            placeholder="Year*"
          />
          <Input
            type="text"
            onChange={onInputchange}
            name="Subject"
            placeholder="Subject*"
          />
        </div>
      </div>
      <h1
        className={
          experinceDataList.length < 4
            ? FormStyle.errorMsgHide
            : FormStyle.errorMsg
        }
      >
        Maximum Length Reached ✖
      </h1>
      <table
        id="table2"
        style={{ width: "100%", marginTop: "2rem", marginBottom: "2rem" }}
      >
        <thead>
          <tr>
            <td className="border-2 border-white text-center text-white ">
              Year
            </td>
            <td className="border-2 border-white text-center text-white ">
              Organization
            </td>
            <td className="border-2 border-white text-center text-white ">
              Year
            </td>
            <td className="border-2 border-white text-center text-white ">
              Subject
            </td>
            <td className="border-2 border-white text-center w-[2rem] "></td>
          </tr>
        </thead>
        <tbody>
          {experinceDataList.map((expData, index) => {
            return (
              <tr key={index}>
                <td className="border-[1px] border-gray-400 text-center text-white ">
                  {expData.Organization}
                </td>
                <td className="border-[1px] border-gray-400 text-center text-white ">
                  {expData.Designation}
                </td>
                <td className="border-[1px] border-gray-400 text-center text-white ">
                  {expData.ExperinceYear}
                </td>
                <td className="border-[1px] border-gray-400 text-center text-white ">
                  {expData.Subject}
                </td>
                <td
                  key={Date.now()}
                  className="remove  border-[1px] border-gray-400 text-center cursor-pointer"
                  onClick={removeExperince}
                >
                  ✖
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Button
        label="ADD"
        width="10rem"
        height="3.5rem"
        onclick={addExperince}
      />
    </Saction>
  );
}

function Awards() {
  const awardsStructure = {
    AwardYear: "",
    AwardName: "",
  };

  const [awardsData, setAwardsData] = useState(awardsStructure);
  const [awardsList, setAwardsList] = useState([]);

  useEffect(() => console.log(awardsList));

  function dataAwards(event) {
    setAwardsData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  function AwardsDataPost() {
    setAwardsList((prev) => [
      ...prev,
      { AwardYear: awardsData.AwardYear, AwardName: awardsData.AwardName },
    ]);
  }

  return (
    <Saction>
      <h2 className="p-4 pl-0 pb-0 text-white">
        Awards/Certificates/Participation:-
      </h2>
      <div className="h-[7rem] md:flex md:h-[3.5rem] lg:flex lg:h-[3.5rem] justify-center items-center w-full">
        <Input
          placeholder="Award year"
          onChange={dataAwards}
          type="number"
          name="AwardYear"
        />
        <Input
          placeholder="Award name"
          onChange={dataAwards}
          type="text"
          name="AwardName"
        />
      </div>
      <table className="w-full my-4  ">
        <thead>
          <tr>
            <td className="border-2 border-white text-white text-center ">
              Award year
            </td>
            <td className="border-2 border-white text-white text-center ">
              Award name
            </td>
            <td className="border-2 border-white w-[2rem] "></td>
          </tr>
        </thead>
        <tbody>
          {awardsList.map((awards, index) => {
            return (
              <tr key={index}>
                <td className="border-[1px] border-gray-400 text-white text-center ">
                  {awards.AwardYear}
                </td>
                <td className="border-[1px] border-gray-400 text-white text-center ">
                  {awards.AwardName}
                </td>
                <td className="border-[1px] border-gray-400 text-center ">✖</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Button
        label="ADD"
        width="10rem"
        height="3.5rem"
        onclick={AwardsDataPost}
      />
    </Saction>
  );
}

function Skills() {
  const Skill = {
    Skills: "",
  };

  const [skillData, setskillsData] = useState(Skill);

  useEffect(() => console.log(skillData));

  function skillsData(event) {
    setskillsData(() => ({
      ...skillData,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <Saction>
      <>
        <h2 className="p-4 pl-0 pb-0  text-white ">Skills:-</h2>
        <div className="h-max md:flex md:h-max lg:flex lg:h-max justify-center items-center w-full ">
          <textarea
            onChange={skillsData}
            name="Skills"
            maxLength="199"
            className="my-1 p-4 w-full xl:w-[80%] rounded-xl resize-none h-[8rem]"
            placeholder="Write here*"
            id="sills-text-area"
            cols="30"
            rows="10"
          />
        </div>
      </>
    </Saction>
  );
}

function Testimonials() {
  const testimoialsStructure = {
    StudentName: "",
    StudentClass: "",
    ForStudents: "",
  };

  const [testimonialData, settestimonialData] = useState(testimoialsStructure);
  const [testimonialsList, settestimonialsList] = useState([]);

  useEffect(() => console.log(testimonialsList));

  function onChangeInput(event) {
    settestimonialData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  function addTestimonials() {
    settestimonialsList((prev) => [
      ...prev,
      {
        StudentName: testimonialData.StudentName,
        StudentClass: testimonialData.StudentClass,
        ForStudents: testimonialData.ForStudents,
      },
    ]);
  }

  return (
    <Saction>
      <h2 className="p-4 pb-0 text-white ">Testimonials(Optional):-</h2>
      <h1
        id="testimonial-toggle-arrow"
        className="cursor-pointer pl-10 text-white flex text-2xl"
      ></h1>
      <div id="" className="my-8">
        <div
          id="tastimonial-container"
          className="h-[7rem] md:flex md:h-[3.5rem] lg:flex lg:h-[3.5rem] justify-center items-center w-full"
        >
          <Input
            className=" testimonals1 mt-[2rem] m-1 p-4 w-80 md:w-80 "
            placeholder="Student Name*"
            type="text"
            name="StudentName"
            onChange={onChangeInput}
          />
          <Input
            className=" testimonals2 mt-[2rem] m-1 p-4 w-80 md:w-80 "
            placeholder="Student Class"
            type="number"
            name="StudentClass"
            onChange={onChangeInput}
          />
        </div>
        <div
          id=""
          className="h-max md:flex md:h-max lg:flex lg:h-max justify-center items-center w-full"
        >
          <textarea
            id="testimonals3"
            name="ForStudents"
            onChange={onChangeInput}
            minLength=""
            maxLength="188"
            className="my-1 p-4 w-full xl:w-[80%] rounded-xl resize-none h-[8rem]"
            placeholder="For Student*"
            cols="30"
            rows="1"
          ></textarea>
        </div>
        <table className="w-full my-4 ">
          <thead>
            <tr>
              <td className="border-2 border-white text-center text-white ">
                Student Name
              </td>
              <td className="border-2 border-white text-center text-white ">
                Student Class
              </td>
              <td className="border-2 border-white text-center text-white ">
                For Student
              </td>
              <td className="border-2 border-white text-center text-white w-8 "></td>
            </tr>
          </thead>
          <tbody id="testimonial-body">
            {testimonialsList.map((data, index) => {
              return (
                <tr key={index}>
                  <td className="border-[1px] border-gray-400 text-center text-white ">
                    {data.StudentName}
                  </td>
                  <td className="border-[1px] border-gray-400 text-center text-white ">
                    {data.StudentClass}
                  </td>
                  <td className="border-[1px] border-gray-400 text-center text-white ">
                    {data.ForStudents}
                  </td>
                  <td className="border-[1px] border-gray-400 text-center text-white w-8 ">
                    ✖
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Button
          label="ADD"
          width="10rem"
          height="3.5rem"
          onclick={addTestimonials}
        />
      </div>
    </Saction>
  );
}

function UserSocials() {
  // return(
  //    <Saction>
  //           <h2 className="px-4" >Social Media Handles:-</h2>
  //           <div className="social-media-handlers justify-center grid lg:flex items-center h-max ">
  //             <div className="handlers-dropdown-wrap grid lg:block  justify-center items-center ">
  //               <Input className="p-5 m-1 "  type="text" autocomplete="off" id="drop-input" style={{fontSize:"15px"}} placeholder="Select*"/>
  //               <div className="handlers-dropdown relative lg:absolute mb-2 "  id="handlers-dropdown">
  //                 <option onclick={passValue('Website')}  className="handlers-dropdown-list">Website</option>
  //                 <option onclick={passValue('Facebook')}  className="handlers-dropdown-list">Facebook</option>
  //                 <option onclick={passValue('Instagram')}  className="handlers-dropdown-list">Instagram</option>
  //                 <option onclick={passValue('Youtube')}  className="handlers-dropdown-list">Youtube</option>
  //                 <option onclick={passValue('Telegram')}  className="handlers-dropdown-list">Telegram</option>
  //                 <option onclick={passValue('Linked In')}  className="handlers-dropdown-list">Linked In</option>
  //                 <option onclick={passValue('Twitter')}  className="handlers-dropdown-list">Twitter</option>
  //                 <option onclick={passValue('Quora')}  className="handlers-dropdown-list">Quora</option>
  //               </div>
  //             </div>
  //             <textarea style={{height: "3rem"}} placeholder="Your ID*"  className="text-area p-3 mx-1 w-[20rem] lg:w-[35rem] " name="media" id="text-area-hadlers" cols="30" rows="10"></textarea>
  //           </div>
  //           <div className="w-full flex justify-center items-center my-4 ">
  //             <div id="Social-media-button" className="cursor-pointer" >ADD</div>
  //           </div>
  //         <div className="social-media-handlers-list">
  //             <table id ="handlers">
  //               <tr>
  //                 <td className="Handlers" >Social Media Handles</td>
  //                 <td className="Handlers-Id" >ID</td>
  //                 <td></td>
  //               </tr>
  //               <tbody id="handles"></tbody>
  //             </table>
  //           </div>
  //       </Saction>
  // )
}

// onsubmit

function formonSubmit(event) {
  event.preventDefault();

  function completeformdata() {}

  const form = event.target;
  let formData = new FormData(form);
  formData = Object.fromEntries([...formData.entries()]);

  console.log(formData);
}

// onsubmit

export default function Form() {
  return (
    <Layout>
      <div className=" w-full h-max bg-[#000000]">
        <div className=" container bg-[#000000] mx-auto xl:px-[15rem] lg:px-[12rem] md:px-[7rem] sm:px-[7rem] px-[2rem] ">
          <FormHeader />
          <form onSubmit={formonSubmit} className="">
            <Generaldetails GeneralData IMAGE />
            <Hobbies />
            <Education />
            <Experince />
            <Awards />
            <Skills />
            <Testimonials />
            {/* <UserSocials/> */}
            <Button label="Submit" type="submit" />
          </form>
        </div>
      </div>
    </Layout>
  );
}
