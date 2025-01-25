
import Template from "../components/Template"
import {Card, CardWrapper} from "../components/Card"
import { MdOutlineHistoryEdu } from "react-icons/md";
import { FaPersonShelter } from "react-icons/fa6";
const Page = () => {
   return(

    <Template title="About">

    <h2><MdOutlineHistoryEdu className="h2-icon" />Our History</h2>
<p>The Enterprise Bible Baptist Church was started by a Baptist missionary pastor from the United states, John McLean and his family together with Johann Blackman who himself was an ordained minister, and his family.</p>
<p>The first service was held on December 1999 in a rented building at the corner of Freedom Street and the Southern Main Road, Enterprise. In June of 2002, Pastor McLean and his family went back to the United States and Johann Blackman was installed as the Pastor of the Enterprise Bible Baptist Church where he is still residing as the pastor.</p>
<p>In April of 2009 the first service was held in the new building owned by the church, at the corner of Dass Trace and Nimblette Street, Enterprise. God has been good to us as He has allowed us to reach many souls in the Enterprise and Chaguanas areas and we are still in the business of winning souls for Jesus. We celebrated our 20th Anniversary as a local assembly in November of 2019. We believe that God has a purpose for us in this area as we continue to reach out to the people of this community.</p>

<h2><FaPersonShelter />The Pastor</h2>
<p>Pastor Johann Blackman, is married to his wife one and only Indira, since 1986. He has two children girls and they are all involved in the ministry of the gospel of Jesus Christ.</p>

<p>Pastor Johann Blackman was born on July 15 1966 in Point Fortin and moved to Central Trinidad in the year 1976. He accepted Jesus Christ as his personal Saviour in the year 1986 and was later baptized at the Kelly Community Bible Church where he served there until 1999. He attended the Trinidad Bible Institute and subsequently the Solid Rock Theological Seminary and graduated with a Bachelors degree in Theology in 1998. He was later ordained that year to Ministry and to preach the Gospel.</p>

<p>Pastor Johann Blackman has a burden for people, and a desire that they may be saved and guided by God in this life. In November of 1999 God led him to work alongside Missionary John Mc lean to start the Enterprise Bible Baptist Church to further spread the good news of the gospel.</p>

<p>In 2002 the Mc Leans went back to the USA and Pastor Johann Blackman surrendered to Pastor the church and he is still the pastor of this church.</p>

<CardWrapper center={false}>
   <Card 
   title="Our Statement of Faith" 
   desc="Our Statement of Faith does not cover the full extent of what we believe but here is a good outline of the doctrines our church holds to."
   bname="What we believe"
   blink="/beliefs"
   visible={true}
   />
</CardWrapper>
    </Template>
   )
}

export default Page;