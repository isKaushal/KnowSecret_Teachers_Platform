import Image from "next/image";
import Img from "../public/images/profilepage/download.jpg";
import styled from "styled-components";

const firstdata = {
  image: "image",
  username: "Kaushal Kumar Soni ",
  contact: "9799170635",
  email: "kaushalkumar@gmail.com",
  faculty: "maths",
  dataofbirth: "31.12.2001",
  address: "nehru nagar panipech jaipur",
  workshops: [
    {
      workshopname: "Demo name 1",
      workshopplace: "Delhi",
    },
    {
      workshopname: "Demo name 2",
      workshopplace: "Delhi",
    },
    {
      workshopname: "Demo name 3",
      workshopplace: "Delhi",
    },
    {
      workshopname: "Demo name 4",
      workshopplace: "Delhi",
    },
  ],
  rating: {
    computer: "2",
    language: "3",
    sports: "4",
    photography: "1",
    others: "2",
  },
  hobbies: "Music, Travel, Movie, Sports, Reading",
  awards: [{ award: "one" }, { award: "two" }, { award: "three" }],
  education: [
    {
      year: "2015",
      university: "rajasthan university",
      degree: "bakwass degree",
    },
    {
      year: "2016",
      university: "rajasthan university",
      degree: "bakwass degree",
    },
    {
      year: "2017",
      university: "rajasthan university",
      degree: "bakwass degree",
    },
    {
      year: "2018",
      university: "rajasthan university",
      degree: "bakwass degree",
    },
  ],
  experince: [
    {
      year: "2015",
      organization: "testntrack institute",
      designation: "principal",
      subject: "science",
    },
    {
      year: "2016",
      organization: "testntrack institute",
      designation: "principal",
      subject: "science",
    },
    {
      year: "2017",
      organization: "testntrack institute",
      designation: "principal",
      subject: "science",
    },
    {
      year: "2018",
      organization: "testntrack institute",
      designation: "principal",
      subject: "science",
    },
    {
      year: "2019",
      organization: "testntrack institute",
      designation: "principal",
      subject: "science",
    },
    {
      year: "2020",
      organization: "testntrack institute",
      designation: "principal",
      subject: "science",
    },
    {
      year: "2021",
      organization: "testntrack institute",
      designation: "principal",
      subject: "science",
    },
    {
      year: "2022",
      organization: "testntrack institute",
      designation: "principal",
      subject: "science",
    },
  ],
  testimonials: [
    {
      image: Img,
      studentname: "shikha khandal",
      studentclass: "10",
    },
    {
      image: Img,
      studentname: "shikha khandal",
      studentclass: "11",
    },
    {
      image: Img,
      studentname: "shikha khandal",
      studentclass: "12",
    },
    {
      image: Img,
      studentname: "shikha khandal",
      studentclass: "13",
    },
  ],
};

const InnerRows = styled.div`
  box-shadow: 0px 0px 5px;
`;

export default function UserData() {
  return (
    <div>
      <div>
        <h1 className="text-center text-4xl p-4 text-[#ff9d00] ">
          Secret Data !!!!!!!!!!!!
        </h1>
      </div>
      <div className="mx-auto mt-[5rem] rounded-xl flex  bg-gray-300 w-[95%] h-[30rem]  ">
        <div className="w-[50%] h-full  flex justify-center items-center  ">
          <Image
            width={200}
            height={200}
            alt={firstdata.username}
            src={Img}
            className="rounded-xl"
          />
        </div>
        <div className=" w-[50%] p-2 py-[5rem] grid items-center  ">
          <h1 className="text-2xl uppercase font-medium   ">
            {firstdata.username}
          </h1>
          <h3 className="text-lg uppercase font-medium   ">
            faculty of {firstdata.faculty}
          </h3>

          <h3 className="font-medium leading-[1.9rem] capitalize  ">
            address :-{" "}
            <span className="text-[#ff9d00]">{firstdata.address}</span>
          </h3>
          <h3 className="font-medium leading-[1.9rem] capitalize  ">
            contact :-{" "}
            <span className="text-[#ff9d00]">{firstdata.contact}</span>
          </h3>
          <h3 className="font-medium leading-[1.9rem] capitalize  ">
            data of birth :-{" "}
            <span className="text-[#ff9d00]">{firstdata.dataofbirth}</span>
          </h3>
          <h3 className="font-medium leading-[1.9rem]   ">
            Email :- <span className="text-[#ff9d00]">{firstdata.email}</span>
          </h3>
          <h3 className="font-medium leading-[1.9rem] capitalize  ">
            hobbies :-{" "}
            <span className="text-[#ff9d00]">{firstdata.hobbies}</span>
          </h3>
        </div>
      </div>
      <div className="mx-auto mt-[1rem] rounded-xl bg-gray-300 w-[95%] p-4 flex flex-col items-center  ">
        <InnerRows className="flex w-[50%] justify-evenly h-[3rem]  my-3 items-center p-4 rounded-lg bg-red-300  ">
          <div>Workshop Name</div>
          <div>Workshop Place</div>
        </InnerRows>
        {firstdata.workshops.map((data) => {
          return (
            <InnerRows className="flex w-[50%] justify-evenly h-[3rem]  my-3 items-center p-4 rounded-lg bg-white  ">
              <div>{data.workshopname}</div>
              <div>{data.workshopplace}</div>
            </InnerRows>
          );
        })}
      </div>
      <div className="mx-auto mt-[1rem] rounded-xl bg-gray-300 w-[95%] p-4 flex flex-col items-center  ">
        <InnerRows className="flex w-[50%] justify-between px-[8rem]  h-[3rem]  my-3 items-center p-4 rounded-lg bg-red-300  ">
          <div>Year</div>
          <div>University</div>
          <div>Degree</div>
        </InnerRows>
        {firstdata.education.map((data) => {
          return (
            <InnerRows className="flex w-[50%] justify-between px-[8rem] h-[3rem]  my-3 items-center p-4 rounded-lg bg-white  ">
              <div>{data.year}</div>
              <div>{data.university}</div>
              <div>{data.degree}</div>
            </InnerRows>
          );
        })}
      </div>
      <div className="mx-auto mt-[1rem] rounded-xl bg-gray-300 w-[95%] p-4 flex flex-col items-center  ">
        <InnerRows className="flex w-[50%] justify-between px-[8rem]  h-[3rem]  my-3 items-center p-4 rounded-lg bg-red-300  ">
          <div>Year</div>
          <div>Organization</div>
          <div>Designation</div>
          <div>Subject</div>
        </InnerRows>
        {firstdata.experince.map((data) => {
          return (
            <InnerRows className="flex w-[50%] justify-between px-[8rem] h-[3rem]  my-3 items-center p-4 rounded-lg bg-white  ">
              <div>{data.year}</div>
              <div>{data.organization}</div>
              <div>{data.designation}</div>
              <div>{data.subject}</div>
            </InnerRows>
          );
        })}
      </div>
      <div className="mx-auto mt-[1rem] rounded-xl bg-gray-300 w-[95%] p-4 grid grid-cols-4 ">
        {firstdata.testimonials.map((data) => {
          return (
            <div className="flex  justify-between h-[5rem] col-span-1  m-3 items-center p-4 rounded-lg bg-white  ">
              <Image
                width={50}
                height={50}
                className="rounded-full"
                src={data.image}
              />
              <div>{data.studentname}</div>
              <div>{data.studentclass}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
