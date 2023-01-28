import { useRouter } from "next/router";

// components
import Home from "../../../components/profile/home";
import About from "../../../components/profile/about";
import Education from "../../../components/profile/education";
import Experince from "../../../components/profile/experince";
import Testimonials from "../../../components/profile/testimonial";
import Contact from "../../../components/profile/contact";
import NotFound from "../../../components/profile/notfound";

// components / wrap
import ProfileWrap from "../../../components/profileWrap";
import CenterSection from "../../../components/centersection";

const firstdata = {
  image: "image",
  username: "kaushal",
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
      studentname: "shikha khandal",
      studentclass: "10",
    },
    {
      studentname: "shikha khandal",
      studentclass: "11",
    },
    {
      studentname: "shikha khandal",
      studentclass: "12",
    },
    {
      studentname: "shikha khandal",
      studentclass: "13",
    },
  ],
};

const seconddata = {
  image: "image",
  username: "bhanu",
  contact: "1234567890",
  email: "bhanu@gmail.com",
  faculty: "science",
  dataofbirth: "pata nahe",
  address: "i don't no ",
  workshops: [
    {
      workshopname: "bhanu name 1",
      workshopplace: "Delhi",
    },
    {
      workshopname: "bhanu name 2",
      workshopplace: "Delhi",
    },
    {
      workshopname: "bhanu name 3",
      workshopplace: "Delhi",
    },
    {
      workshopname: "bhanu name 4",
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
      unversity: "rajasthan university",
      degree: "B-tech",
    },
    {
      year: "2016",
      unversity: "rajasthan university",
      degree: "B-tech",
    },
    {
      year: "2017",
      unversity: "rajasthan university",
      degree: "B-tech",
    },
    {
      year: "2018",
      unversity: "rajasthan university",
      degree: "B-tech",
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
      studentname: "shikha khandal",
      studentclass: "10",
    },
    {
      studentname: "shikha khandal",
      studentclass: "11",
    },
    {
      studentname: "shikha khandal",
      studentclass: "12",
    },
    {
      studentname: "shikha khandal",
      studentclass: "13",
    },
  ],
};

export async function getServerSideProps() {
  return { props: { profileDetails: firstdata } };
}

const ComponentSwitcher = ({ profileDetails }) => {
  const router = useRouter();
  const { pages } = router.query;

  if (pages === "home") {
    return <Home profileDetails={profileDetails} />;
  } else if (pages === "about") {
    return <About profileDetails={profileDetails} />;
  } else if (pages === "education") {
    return <Education profileDetails={profileDetails} />;
  } else if (pages === "experince") {
    return <Experince profileDetails={profileDetails} />;
  } else if (pages === "testimonials") {
    return <Testimonials profileDetails={profileDetails} />;
  } else if (pages === "contact") {
    return <Contact profileDetails={profileDetails} />;
  } else {
    return <NotFound profileDetails={profileDetails} />;
  }
};

export default function Pages({ profileDetails }) {
  return (
    <ProfileWrap profileDetails={profileDetails}>
      <CenterSection>
        <ComponentSwitcher profileDetails={profileDetails} />
      </CenterSection>
    </ProfileWrap>
  );
}
