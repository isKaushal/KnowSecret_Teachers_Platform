import CenterContent from "../../components/centersection";

import ProfileWrap from "../../components/profileWrap";
import About from "../../components/profile/about";

export default function Profile() {
  return (
    <ProfileWrap>
      <CenterContent>
        <About />
      </CenterContent>
    </ProfileWrap>
  );
}
