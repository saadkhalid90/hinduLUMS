import React, { Fragment } from 'react';
import classNames from 'classnames';
import Slide from './Slide';
import Layout from './Layout';
import Overlay from './Overlay';
import HorizontalScroll from './HorizontalScroll';
import SlideHeading from './SlideHeading';
import Quote from './Quote';

import slideStyles from './css-modules/slide.module.css';
import layoutStyles from './css-modules/Layout.module.css';
import imageStyles from './css-modules/image_styles.module.css';

import Slide1Back from '../resources/backgrounds/Chapter 1 SlideLight.jpg';
import Slide2Back from '../resources/backgrounds/Chapter 1 SlideRed.jpg';
import Slide3Back from '../resources/backgrounds/Chapter 1 SlideDark.jpg';
import Slide4Back from '../resources/backgrounds/Chapter 2 Slide1.jpg';
import Slide5Back from '../resources/backgrounds/Chapter 2 Slide2.jpg';
import Slide6Back from '../resources/backgrounds/Chapter 2 Slide4.jpg';
import Slide7Back from '../resources/backgrounds/Chapter 3 Slide1.jpg';
import Slide8Back from '../resources/backgrounds/Chapter 3 Slide2.jpg';
import Slide9Back from '../resources/backgrounds/Chapter 3 Slide3.jpg';
import Slide10Back from '../resources/backgrounds/Chapter 3 Slide4.jpg';

import Agnihotri from '../resources/media/ch1/Agnihotri.png';
import HansRaj from '../resources/media/ch1/HansRaj.png';
import SwamiDyan from '../resources/media/ch1/SwamiDyananda.jpg';
import Lajpat_AS1 from '../resources/media/ch1/Lajpat_AS1.jpg';
import DAVPoem from '../resources/media/ch1/DAVPoem.jpeg';
import DAVStaff from '../resources/media/ch1/DAV/DAVLahoreOldStaff.jpg';
import DAVLahore from '../resources/media/ch1/DAV/DAVLahore.jpg';
import DAVPindi from '../resources/media/ch1/DAV/DAVRawalpindi.jpg';
import DAVMultan from '../resources/media/ch1/DAV/DAVMultan.jpg';
import ASPrint1 from '../resources/media/ch1/ASPrint/ASPrint1.jpg';
import ASPrint2 from '../resources/media/ch1/ASPrint/ASPrint2.jpg';
import ASPrint3 from '../resources/media/ch1/ASPrint/ASPrint3.jpg';
import ASPrint4 from '../resources/media/ch1/ASPrint/ASPrint4.jpg';
import ASPrint5 from '../resources/media/ch1/ASPrint/ASPrint5.jpg';
import ASPrint6 from '../resources/media/ch1/ASPrint/ASPrint6.jpg';
import ASPrint7 from '../resources/media/ch1/ASPrint/ASPrint7.jpg';
import ASPrint8 from '../resources/media/ch1/ASPrint/ASPrint8.jpg';
import AgnihotriJP from '../resources/media/ch1/Agnihotri.jpg';
import MOBrahmo from '../resources/media/ch1/messageofbrahmo.jpg';
import RuchiRam from '../resources/media/ch1/RuchiRam.jpg';
import AOCaste from '../resources/media/ch1/AOCaste.jpg';
import Ambedkar from '../resources/media/ch1/BRAmbedkar.jpg';
import HinduPeeche from '../resources/media/ch1/HinduPeeche.jpg';
import KrishnaFL from '../resources/media/ch1/KrishnaFl.png';
import HansRajBG from '../resources/media/ch1/HansRaj.jpg';
import Gurudatta from '../resources/media/ch1/Gurudatta.jpg';
import IC from '../resources/media/ch1/IslamiaCollege.jpg';
import BrahmoSamajMandir from '../resources/media/ch1/Mandirs/BrahmoSamajMandir.jpg';
import DevSamajMandir from '../resources/media/ch1/Mandirs/DevSamajMandir.jpg';
import SDharam from '../resources/media/ch1/Mandirs/SDharam.jpg';

import LajpatRai from '../resources/media/ch2/LalaStatueWBG.png';
import BadnaseebHindu from '../resources/media/ch2/BadnaseebHindu.jpg';
import PunjabkeHindu from '../resources/media/ch2/PunjabkeHindu.jpg';
import PunjabKaMahajan from '../resources/media/ch2/PunjabKaMahajan.jpg';
import Cartoon from '../resources/media/ch2/Cartoon.jpg';
import MilapFreedomArt from '../resources/media/ch2/MilapFreedomArt.jpg';
import Martyrs from '../resources/media/ch2/Martyrs.jpg';
import LLRai from '../resources/media/ch2/LajpatRai/Lala_Lajpat_Rai.jpg';
import LLRai_Statue from '../resources/media/ch2/LajpatRai/LLRai_Statue.jpg';
import LLR_BM from '../resources/media/ch2/LajpatRai/BandeMatramLLR.jpg';
import LLR_Poem1 from '../resources/media/ch2/LajpatRai/LLR_Poem1.jpg';
import LLR_Poem2 from '../resources/media/ch2/LajpatRai/LLR_Poem2.jpg';
import LLR_Poem3 from '../resources/media/ch2/LajpatRai/LLR_Poem3.jpg';
import LLR_Pratap from '../resources/media/ch2/LajpatRai/LLR_Pratap.jpg';
import LLR_Pict from '../resources/media/ch2/LajpatRai/LLR_Pictures.jpg';
import LLR_Congress from '../resources/media/ch2/LajpatRai/LLR_Congress.jpg';
import LLR_Jalsa from '../resources/media/ch2/LajpatRai/LLR_Jalsa.jpg';
import LLR_Writings from '../resources/media/ch2/LajpatRai/LLR_Writings.jpg';

import PratapCover from '../resources/media/ch3/PartapCover.jpg';
import MilapBasantCover from '../resources/media/ch3/MilapBasantCropped.jpg';
import MilapCover from '../resources/media/ch3/MilapCover.jpg';
import BMCover from '../resources/media/ch3/BMCover.jpg';
import MilapBasant from '../resources/media/ch3/MilapBasant.jpg';
import MilapHoli from '../resources/media/ch3/MilapHoli.jpg';
import PaharNumber from '../resources/media/ch3/PaharNumber.jpg';
import Poem1 from '../resources/media/ch3/Poem1.jpg';
import Poem2 from '../resources/media/ch3/Poem2.jpg';
import Poem3 from '../resources/media/ch3/Poem3.jpg';

import main from '../resources/navbackgrounds/main.jpg';
import political from '../resources/navbackgrounds/political.jpg';
import twomurders from '../resources/navbackgrounds/twomurders.jpg';
import mallroad from '../resources/navbackgrounds/mallroad.jpg';
import literary from '../resources/navbackgrounds/literary.jpg';
import hindu from '../resources/navbackgrounds/hindu.jpg';
import ProjectTitle from '../slide-components/Project_Title';
import ProjectCredits from '../slide-components/Project_Credits';
import ProjectTitleBack from '../resources/backgrounds/Main Title.jpg';
import ProjectCreditsBack from '../resources/backgrounds/Credits.jpg';

import { MdChevronRight } from "react-icons/md";
import { MdChevronLeft } from "react-icons/md";

import ChapterTitle from './Chapter_Title';
import chapter_title_styles from './css-modules/chapter_title.module.css';
import Chapter1Title from '../resources/backgrounds/Hindu Chapter 1 Title1.jpg';
import Chapter2Title from '../resources/backgrounds/Hindu Chapter 2 Title.jpg';
import Chapter3Title from '../resources/backgrounds/Hindu Chapter 3 Title.jpg';

import chTStyles from './css-modules/chTitle.module.css';

//Import Mobile Components
import MobileSlide from './MobileSlide';
import ProjectTitleMobile from './mobile-components/Project_Title_Mob';
import ChapterTitleMobile from './mobile-components/Chapter_Title_Mob';
import MobileSectionTitle from './mobile-components/MobileSectionTitle';
import mobileStyles from './css-modules/mobileStyles.module.css';
import NextChapterTitle from './mobile-components/NextChapterTitle';
import ProjectCreditsMobile from './mobile-components/Project_Credits_Mob';
import MobileQuote from './mobile-components/MobileQuote';
import overlay_styles from './css-modules/overlay.module.css';

const imageArr = [
  Slide1Back,
  Slide2Back,
  Slide3Back,
  Slide4Back,
  Slide5Back,
  Slide6Back,
  Slide7Back,
  Slide8Back,
  Slide9Back,
  Slide10Back,
  Agnihotri,
  HansRaj,
  SwamiDyan,
  Lajpat_AS1,
  DAVPoem,
  DAVStaff,
  DAVLahore,
  DAVPindi,
  DAVMultan,
  ASPrint1,
  ASPrint2,
  ASPrint3,
  ASPrint4,
  ASPrint5,
  ASPrint6,
  ASPrint7,
  ASPrint8,
  AgnihotriJP,
  MOBrahmo,
  RuchiRam,
  AOCaste,
  Ambedkar,
  HinduPeeche,
  KrishnaFL,
  HansRajBG,
  Gurudatta,
  IC,
  LajpatRai,
  BadnaseebHindu,
  PunjabkeHindu,
  PunjabKaMahajan,
  Cartoon,
  MilapFreedomArt,
  Martyrs,
  LLRai,
  LLRai_Statue,
  LLR_BM,
  LLR_Poem1,
  LLR_Poem2,
  LLR_Poem3,
  LLR_Pratap,
  LLR_Pict,
  LLR_Congress,
  LLR_Jalsa,
  LLR_Writings,
  PratapCover,
  MilapBasantCover,
  MilapCover,
  BMCover,
  MilapBasant,
  MilapHoli,
  PaharNumber,
  Poem1,
  Poem2,
  Poem3,
  main,
  political,
  twomurders,
  mallroad,
  literary,
  hindu,
  ProjectTitle,
  ProjectCredits,
  ProjectTitleBack,
  ProjectCreditsBack
];

const slideMap = {
  "home" : {
    name : "Imagining Lahore as a Hindu City",
    slides : {
      "home" : {
        component : (
          <Slide bgImage={ProjectTitleBack}>
            {(props) => {
              return (
                <div className={slideStyles.slideflex} ref={props.addParallaxAndFadeRef(10)}>
                  <div className={slideStyles.slideContent}>
                    <ProjectTitle
                      title="Imagining Lahore as a Hindu City"
                      description=<span>The everyday life of Hindus in pre-partition Lahore, their politics, religious movements and literature</span>
                    />
                  </div>
                </div>
              )}}
          </Slide>
        ),
        prev : "chapter1",
        next : "chapter1",
        menuInverted : false,
        hideChapterNumber: true,
        hideVerticalNav: true,
      },
    }
  },
  "chapter1" : {
    name : "Chapter 1: Religious Movements",
    slides : {
      "chapter1" : {
        component : (
          <Slide bgImage={Chapter1Title}>
            {(props) => {
              return (
                <div ref={props.addFadeRef} className={slideStyles.slideflex}>
                  <div className={slideStyles.slideContent}>
                      <ChapterTitle
                        inverted
                        addParallaxAndFadeRef={props.addParallaxAndFadeRef}
                        chapter_number="1"
                        chapter_title="Religious Movements"
                        images={[
                          {image: Agnihotri, id: chTStyles.Agnihotri , shift : 12},
                          {image: HansRaj, id: chTStyles.HansRaj , shift : -15}
                        ]}
                      />
                  </div>
                  <div className={chapter_title_styles.bottom_gradient} style={{background: 'linear-gradient(to bottom, rgba(10, 89, 159,0) 0%,rgba(10, 89, 159,0.48) 48%,rgba(10, 89, 159,0.97) 97%,rgba(10, 89, 159 ,1) 100%)'}}></div>
                </div>
              )}}
          </Slide>
        ),
        prev : "home",
        next : "chapter1slide1",
        menuInverted : true,
        hideChapterNumber: true,
        bottomBarMessage: ''
      },
      "chapter1slide1" : {
        slideName : "The Rise of Arya Samaj",
        component : (
          <Slide bgImage={Slide1Back}>
             {(props) => {
               return (
                 <div className={slideStyles.slideflex}>
                   <SlideHeading title="The Rise of Arya Samaj"/>
                   <div className={slideStyles.galleryChevrons_container}>
                     <p className={classNames(slideStyles.galleryTitle)}>Gallery</p>
                     <div onClick={props.moveBackward} className={classNames(slideStyles.prevSlideChev)}><MdChevronLeft/></div>
                     <div onClick={props.moveForward} className={classNames(slideStyles.nextSlideChev)}><MdChevronRight/></div>
                   </div>
                   <div className={slideStyles.slideContent}>
                     <HorizontalScroll
                       scrollContainerRef={props.scrollContainerRef}
                       xPos={props.xPos}>
                       <Layout fixed_width layoutClassName="layout_flexed">
                         <div ref={props.addParallaxAndFadeRef(8)} className={classNames(layoutStyles.layout_container, layoutStyles.container_60, layoutStyles.align_center, layoutStyles.justify_center)}>
                            <p className={slideStyles.slidePara}>In the late 19th century, the city of Lahore was at the center of a battle for Hindu identity. Swami Dayananda had established the Arya Samaj in Bombay in 1875 , but it was in Lahore that his ideas inspired a large scale movement. Under the influence of Dayananda’s teachings, young Punjabi Hindus abandoned Brahmo ideals and several traditional Hindu practices.</p>
                            <p className={slideStyles.slidePara}>With a mandir on every corner and a rising awakening of a vast population of Punjabi Hindus, Lahore was the perfect city for Arya Samaj’s cultural and theological revolution. But the Samaj was not working in a religious or political vacuum. Lahore was a bastion of traditional Hinduism and there was a great deal of resistance to Arya Samaj’s reformatory zeal.</p>
                         </div>
                         <div className={classNames(layoutStyles.layout_container, layoutStyles.container_40, layoutStyles.align_center, layoutStyles.justify_center)}>
                            <div ref={props.addParallaxAndFadeRef(10)} id={imageStyles.SwamiDyan} className={classNames(imageStyles.rotate_0_dec_75, imageStyles.effected_image)} onClick={()=> props.setDisplayedOverlay(["1",0])} >
                              <img src={SwamiDyan} alt="A portrait of Swami Dayananda, the founder of Arya Samaj" className={classNames(imageStyles.hover_effect)}/>
                            </div>
                         </div>
                        </Layout>
                       <div className={classNames(slideStyles.galleryItem_container, slideStyles.galleryItem_33)}>
                          <div ref={props.addParallaxAndFadeRef(10)} id={imageStyles.Lajpat_AS1} className={classNames(imageStyles.rotate_0_dec_75, imageStyles.effected_image)} onClick={()=> props.setDisplayedOverlay(["1",1])} >
                            <img src={Lajpat_AS1} alt="Book on the Arya Samaj by Lala Lajpat Rai, a prominent Hindu leader from Lahore" className={classNames(imageStyles.hover_effect)}/>
                          </div>
                       </div>
                      </HorizontalScroll>
                   </div>
                    <Overlay
                      oId="1"
                      displayedOverlay={props.displayedOverlay}
                      closeOverlay={props.closeOverlay}
                      setDisplayedOverlay={props.setDisplayedOverlay}
                      slides={
                        [
                          {
                            description : "A portrait of Swami Dayananda, the founder of the Hindu reformist movement Arya",
                            title : "Sample Title",
                            source : "archive.org",
                            render : ()=> <img alt="A portrait of Swami Dayananda, the founder of Arya Samaj" src={SwamiDyan} style={window.innerHeight > 675 ? {width: '56%', marginLeft: '22%'} : {width: '46%', marginLeft: '27%'}}></img>,
                          },
                          {
                            description : "Book on the Arya Samaj by Lala Lajpat Rai, a prominent Hindu leader from Lahore",
                            title : "Sample Title",
                            source : "archive.org",
                            render : ()=> <img alt="Title page of a book on Arya Samaj by Lala Lajpat Rai" src={Lajpat_AS1} style={window.innerHeight > 675 ? {width: '56%', marginLeft: '22%'} : {width: '46%', marginLeft: '27%'}}></img>,
                          }
                        ]
                      }
                    />
                 </div>
               )
             }}
          </Slide>
        ),
        prev : "chapter1",
        next : "chapter1slide2",
        menuInverted : false,
        bottomBarMessage: 'Click images to enlarge'
      },
      "chapter1slide2" : {
        slideName : "Punjabi Hindus battle for Identity",
        component : (
          <Slide bgImage={Chapter1Title} absoluteImage={{src: KrishnaFL, id: imageStyles.absoluteKrishna}}>
            {(props) => {
              return (
                <div className={slideStyles.slideflex}>
                  <div className={slideStyles.slideContent}>
                    <Layout layoutClassName="layout_flexed">
                      <div ref={props.addFadeRef} className={layoutStyles.layout_100}>
                        <SlideHeading inverted noPadding title="Punjabi Hindus battle for Identity" desc="By the 1890s, the Punjab had witnessed a steep rise in the economic fortunes of the mercantile Hindu community and a professional class of doctors, engineers and educationists. The impact of colonial modernity had transformed Lahore into a major centre for education, trade and cultural activities. These changes were impacting the worldview of the young Hindu students and professionals, and made them question some of the traditionally held religious views. It is no wonder then that a number of religious reform movements emerged during the late nineteenth century with Lahore as the focus of these polemical debates and exchange of ideas."/>
                      </div>
                    </Layout>
                  </div>
                </div>
              )}}
            </Slide>
        ),
        prev : "chapter1slide1",
        next : "chapter1slide3",
        menuInverted : true,
        bottomBarMessage: 'Click images to enlarge'
      },
      "chapter1slide3" : {
        slideName : "D.A.V Schools and Colleges 1",
        component : (
          <Slide bgImage={Slide2Back}>
             {(props) => {
               return (
                 <div className={slideStyles.slideflex}>
                   <SlideHeading inverted title="D.A.V Schools and Colleges"/>
                   <div className={slideStyles.galleryChevrons_container}>
                     <p className={classNames(slideStyles.galleryTitle, slideStyles.white)}>Gallery</p>
                     <div onClick={props.moveBackward} className={classNames(slideStyles.prevSlideChev, slideStyles.invertedChev)}><MdChevronLeft/></div>
                     <div onClick={props.moveForward} className={classNames(slideStyles.nextSlideChev, slideStyles.invertedChev)}><MdChevronRight/></div>
                   </div>
                   <div className={slideStyles.slideContent}>
                     <HorizontalScroll
                       scrollContainerRef={props.scrollContainerRef}
                       xPos={props.xPos}>
                       <Layout fixed_width layoutClassName="layout_flexed">
                         <div ref={props.addParallaxAndFadeRef(8)} className={classNames(layoutStyles.layout_container, layoutStyles.container_60, layoutStyles.align_center, layoutStyles.justify_center)}>
                            <p className = {classNames(slideStyles.slidePara, slideStyles.white)}>The Arya Samaj initially lacked any central organization and each Samaj was independent. Dayananda’s death led to disintegration, but also to a burst of energy, as numerous groups sought to honour their departed teacher. They were nearly unanimous in the desire to establish a school that would impart his Vedic form of Hinduism, and thus be safe from Christian influence. The Lahore Samaj drafted plans for this institution and on 6 December 1883 set up a subcommittee to raise funds. Initially they were quite successful, but by 1884 enthusiasm for the project had waned. In 1885 Lala Hans Raj promised to serve as the principal of the school without pay, which rekindled the enthusiasm for founding the college. He, along with Gurudatta Vidhyarthi, finally established the Dayanand Anglo-Vedic Schools System (D.A.V.) in Lahore in June 1886.</p>
                         </div>
                         <div className={classNames(layoutStyles.layout_container, layoutStyles.container_40, layoutStyles.align_center, layoutStyles.justify_center)}>
                            <div ref={props.addParallaxAndFadeRef(7)} id={imageStyles.DAVPoem} className={classNames(imageStyles.rotate_0_dec_75, imageStyles.effected_image)} onClick={()=> props.setDisplayedOverlay(["1",0])} >
                              <img src={DAVPoem} alt="A poem paying tribute to the D.A.V College is published in Lahore’s Urdu Daily, Milap" className={classNames(imageStyles.hover_effect)}/>
                            </div>
                         </div>
                        </Layout>
                        <div className={classNames(slideStyles.galleryItem_container, slideStyles.galleryItem_33)}>
                           <div ref={props.addParallaxAndFadeRef(7)} id={imageStyles.IC} className={classNames(imageStyles.effected_image)} onClick={()=> props.setDisplayedOverlay(["1",1])} >
                             <img src={IC} alt="Islamia College, Civil Lines Lahore" className={classNames(imageStyles.hover_effect)}/>
                           </div>
                        </div>
                        <div className={classNames(slideStyles.galleryItem_container, slideStyles.galleryItem_25)}>
                           <div ref={props.addParallaxAndFadeRef(-6)} id={imageStyles.HansRaj} className={classNames(imageStyles.effected_image)} onClick={()=> props.setDisplayedOverlay(["1",2])} >
                             <img src={HansRajBG} alt="Mahatma Hans Raj" className={classNames(imageStyles.hover_effect)}/>
                           </div>
                        </div>
                        <div className={classNames(slideStyles.galleryItem_container, slideStyles.galleryItem_25)}>
                           <div ref={props.addParallaxAndFadeRef(7)} id={imageStyles.Gurudatta} className={classNames(imageStyles.effected_image)} onClick={()=> props.setDisplayedOverlay(["1",3])} >
                             <img src={Gurudatta} alt="Pandit Guru Datta Vidhyarthi" className={classNames(imageStyles.hover_effect)}/>
                           </div>
                        </div>

                      </HorizontalScroll>
                   </div>
                    <Overlay
                      oId="1"
                      displayedOverlay={props.displayedOverlay}
                      closeOverlay={props.closeOverlay}
                      setDisplayedOverlay={props.setDisplayedOverlay}
                      slides={
                        [
                          {
                            description : <span>A poem paying tribute to the D.A.V College is published in Lahore’s Urdu Daily, <i>Milap</i></span>,
                            title : "Sample Title",
                            source : "Research Society of Pakistan, University of Punjab",
                            render : ()=> <img alt="A poem paying tribute to the D.A.V College is published in Lahore’s Urdu Daily, Milap" src={DAVPoem} style={window.innerHeight > 675 ? {width: '56%', marginLeft: '22%'} : {width: '46%', marginLeft: '27%'}}></img>,
                          },
                          {
                            description : <span>D.A.V College Lahore's Campus was converted to Islamia College, Civil Lines, Lahore after partition</span>,
                            title : "Sample Title",
                            source : "",
                            render : ()=> <img alt="Islamia College, Civil Lines Lahore" src={IC} style={window.innerHeight > 675 ? {width: '80%', marginLeft: '10%'} : {width: '70%', marginLeft: '15%'}}></img>,
                          },
                          {
                            description : <span>Also known as Mahatama Hansraj, Lala Hans Raj was amongst the prominent leaders of the Arya Samaj in Lahore. He joined the Arya Samaj while a student at Lahore’s Government College. He founded, along with Gurudatta Vidhyarthi, the Dayanand Anglo-Vedic Schools System (D.A.V.) in Lahore in 1886. Hansraj served as the principal of the D.A.V. College for 25 years, and served as the president of the provincial Arya Pradeshik Pratinidhi Sabha. He died in Lahore on 14 November 1938.</span>,
                            title : "Sample Title",
                            source : "Research Society of Pakistan, University of Punjab",
                            render : ()=> <img alt="Mahatma Hans Raj" src={HansRajBG} style={window.innerHeight > 675 ? {width: '56%', marginLeft: '22%'} : {width: '46%', marginLeft: '27%'}}></img>,
                          },
                          {
                            description : <span>Pandit Vidyarth was a prominent leader of the Arya Samaj in Multan, and later moved to Lahore after Dayananda’s death. He was born to a wealthy Arora family in Multan. He received his BA and MA degrees at the Government College Lahore. When the news was received of Dayananda’s illness at Ajmer, the Arya Samaj at Lahore chose him - only nineteen years old at that time - and Lala Kivan Das to go to Ajmer to tend to Swami Dayanand. After returning to Lahore, he actively got involved with the Arya Samaj Chapter in Lahore. Along with others - such as Pandit Lekh Ram and Lala Munshi Ram - Datta wanted the DAV curriculum to focus on Vedic ideology and the study of Sanskrit. Such an approach was contrary to the moderate faction of the Arya Samaj who wished to provide English education to Hindus in an environment where their religious outlook was preserved while they received higher education relevant to the needs of the modern world. By 1893, the Arya Samaj was formally divided. The conservatives (led by Pandit Guru Datta) gained control over most of the local Arya Samaj chapters and the Arya Pratinidhi Sabha, Punjab. The moderates kept their hold on to the Managing Committee and the DAV school.</span>,
                            title : "Sample Title",
                            source : "Wikipedia",
                            render : ()=> <img alt="Pandit Guru Datta Vidhyarthi" src={Gurudatta} style={window.innerHeight > 675 ? {width: '56%', marginLeft: '22%'} : {width: '46%', marginLeft: '27%'}}></img>,
                          }

                        ]
                      }
                    />
                 </div>
               )
             }}
          </Slide>
        ),
        prev : "chapter1slide2",
        next : "chapter1slide4",
        menuInverted : true,
        bottomBarMessage: 'Click images to enlarge'
      },
      "chapter1slide4" : {
        slideName : "D.A.V Schools and Colleges 2",
        component : (
          <Slide bgImage={Slide1Back}>
            {(props) => {
              return (
                <div className={slideStyles.slideflex}>
                  <div ref={props.addFadeRef}>
                    <SlideHeading title="D.A.V Schools and Colleges"
                    desc=
                    <div>
                      <p>
                        Within one month of its founding, 550 students had been enrolled in the newly established Dayananda Anglo-Vedic College. On 18 May 1889, the Punjab University also granted affiliation to the college. The D.A.V High School and College taught a curriculum similar to the government schools, but did so without government support or the participation of Englishmen serving as faculty. The Lahore’s School later became the model for other Arya Samajis as local groups established elementary and secondary schools throughout the Punjab.
                      </p>
                    </div>
                    />
                  </div>
                  <div className={slideStyles.galleryChevrons_container}>
                    <p className={slideStyles.galleryTitle}>Gallery</p>
                    <div onClick={props.moveBackward} className={slideStyles.prevSlideChev}><MdChevronLeft/></div>
                    <div onClick={props.moveForward} className={slideStyles.nextSlideChev}><MdChevronRight/></div>
                  </div>
                  <div className={slideStyles.slideContent}>
                    <HorizontalScroll
                      scrollContainerRef={props.scrollContainerRef}
                      xPos={props.xPos}>
                      <Layout fixed_width layoutClassName="layout_flexed">
                        <div ref={props.addParallaxAndFadeRef(-5)} className={classNames(layoutStyles.layout_container, layoutStyles.container_33, layoutStyles.align_center, layoutStyles.justify_center)}>
                          <div id={imageStyles.DAV1} className={classNames(imageStyles.effected_image)} onClick={()=> props.setDisplayedOverlay(["1",0])}>
                            <img src={DAVStaff} alt="DAV College Old Staff, Lahore" className={classNames(imageStyles.hover_effect)}/>
                          </div>
                        </div>
                        <div ref={props.addParallaxAndFadeRef(4.5)} className={classNames(layoutStyles.layout_container, layoutStyles.container_33, layoutStyles.align_center, layoutStyles.justify_center)}>
                          <div id={imageStyles.DAV2} className={classNames(imageStyles.effected_image)} onClick={()=> props.setDisplayedOverlay(["1",1])}>
                            <img src={DAVLahore} alt="DAV College Lahore" className={classNames(imageStyles.hover_effect)}/>
                          </div>
                        </div>
                        <div ref={props.addParallaxAndFadeRef(-4.5)} className={classNames(layoutStyles.layout_container, layoutStyles.container_33, layoutStyles.align_center, layoutStyles.justify_center)}>
                          <div id={imageStyles.DAV3} className={classNames(imageStyles.effected_image)} onClick={()=> props.setDisplayedOverlay(["1",2])}>
                            <img src={DAVMultan} alt="DAV College Multan" className={classNames(imageStyles.hover_effect)}/>
                          </div>
                        </div>
                      </Layout>
                      <div ref={props.addParallaxAndFadeRef(5)} className={classNames(slideStyles.galleryItem_container, slideStyles.galleryItem_33)}>
                        <div id={imageStyles.DAV4} className={classNames(imageStyles.ilm_gallery, imageStyles.effected_image)} onClick={()=> props.setDisplayedOverlay(["1",3])}>
                          <img alt="DAV College Multan" className={classNames(imageStyles.hover_effect)} src={DAVPindi}/>
                        </div>
                      </div>
                    </HorizontalScroll>
                  </div>
                  <Overlay
                    oId="1"
                    displayedOverlay={props.displayedOverlay}
                    closeOverlay={props.closeOverlay}
                    setDisplayedOverlay={props.setDisplayedOverlay}
                    slides={
                      [
                        {
                          description : <span>D.A.V College Lahore (Published in Daily <i>Milap</i> Lahore)</span>,
                          title : "",
                          source : "Research Society of Pakistan, University of Punjab",
                          render : ()=> <img alt="DAV College Old Staff, Lahore" src={DAVStaff} style={{width: '70%', marginLeft: '15%'}}></img>
                        },
                        {
                          description : <span>D.A.V College Lahore (Published in Daily <i>Milap</i> Lahore)</span>,
                          title : "",
                          source : "Research Society of Pakistan, University of Punjab",
                          render : ()=> <img alt="DAV College Lahore" src={DAVLahore} style={{width: '66%', marginLeft: '17%'}}></img>
                        },
                        {
                          description : <span>D.A.V College Multan (Published in Daily <i>Milap</i> Lahore)</span>,
                          title : "",
                          source : "Research Society of Pakistan, University of Punjab",
                          render : ()=> <img alt="DAV College Multan" src={DAVMultan} style={{width: '66%', marginLeft: '17%'}}></img>
                        },
                        {
                          description : <span>D.A.V College Rawalpindi (Published in Daily <i>Milap</i> Lahore)</span>,
                          title : "",
                          source : "Research Society of Pakistan, University of Punjab",
                          render : ()=> <img alt="DAV College Rawalpindi" src={DAVPindi} style={{width: '60%', marginLeft: '20%'}}></img>
                        }
                      ]
                    }
                  />
                </div>
              )}}
          </Slide>
        ),
        prev : "chapter1slide3",
        next : "chapter1slide5",
        menuInverted : false,
        bottomBarMessage: 'Click images to enlarge'
      },
      "chapter1slide5" : {
        slideName : "Arya Samaj in print",
        component : (
          <Slide bgImage={Slide3Back}>
            {(props) => {
              return (
                <div className={slideStyles.slideflex}>
                  <div ref={props.addFadeRef}>
                    <SlideHeading inverted title="Arya Samaj" subtitle = "In Lahore’s Press and Publications"/>
                  </div>
                  <div className={slideStyles.galleryChevrons_container}>
                    <p className={classNames(slideStyles.galleryTitle, slideStyles.white)}>Gallery</p>
                    <div onClick={props.moveBackward} className={classNames(slideStyles.prevSlideChev, slideStyles.invertedChev)}><MdChevronLeft/></div>
                    <div onClick={props.moveForward} className={classNames(slideStyles.nextSlideChev, slideStyles.invertedChev)}><MdChevronRight/></div>
                  </div>
                  <div className={slideStyles.slideContent}>
                    <HorizontalScroll
                      scrollContainerRef={props.scrollContainerRef}
                      xPos={props.xPos}>
                        <div ref={props.addParallaxAndFadeRef(6)} className={classNames(slideStyles.galleryItem_container, slideStyles.galleryItem_33, layoutStyles.justify_center)}>
                          <div id={imageStyles.ASPrint1} className={classNames(imageStyles.ilm_gallery, imageStyles.effected_image)} onClick={()=> props.setDisplayedOverlay(["1",0])}>
                            <img alt="English Translation of Swami Dayananda’s Satyarth Prakash" className={classNames(imageStyles.hover_effect)} src={ASPrint1}/>
                          </div>
                        </div>
                        <div ref={props.addParallaxAndFadeRef(-5)} className={classNames(slideStyles.galleryItem_container, slideStyles.galleryItem_25, layoutStyles.align_center)}>
                          <div id={imageStyles.ASPrint2} className={classNames(imageStyles.ilm_gallery, imageStyles.effected_image)} onClick={()=> props.setDisplayedOverlay(["1",1])}>
                            <img alt="A biography of Pandit Guru Datta" className={classNames(imageStyles.hover_effect)} src={ASPrint2}/>
                          </div>
                        </div>
                        <div ref={props.addParallaxAndFadeRef(5)} className={classNames(slideStyles.galleryItem_container, slideStyles.galleryItem_33, layoutStyles.align_center, layoutStyles.justify_center)}>
                          <div id={imageStyles.ASPrint3} className={classNames(imageStyles.ilm_gallery, imageStyles.effected_image)} onClick={()=> props.setDisplayedOverlay(["1",2])}>
                            <img alt="Martyrs of Arya Samaj" className={classNames(imageStyles.hover_effect)} src={ASPrint3}/>
                          </div>
                        </div>
                        <div ref={props.addParallaxAndFadeRef(-4)} className={classNames(slideStyles.galleryItem_container, slideStyles.galleryItem_33, layoutStyles.align_center, layoutStyles.justify_center)}>
                          <div id={imageStyles.ASPrint4} className={classNames(imageStyles.ilm_gallery, imageStyles.effected_image)} onClick={()=> props.setDisplayedOverlay(["1",3])}>
                            <img alt="The Best Books of Hindi" className={classNames(imageStyles.hover_effect)} src={ASPrint4}/>
                          </div>
                        </div>
                        <div ref={props.addParallaxAndFadeRef(5)} className={classNames(slideStyles.galleryItem_container, slideStyles.galleryItem_33, layoutStyles.align_center, layoutStyles.justify_center)}>
                          <div id={imageStyles.ASPrint5} className={classNames(imageStyles.ilm_gallery, imageStyles.effected_image)} onClick={()=> props.setDisplayedOverlay(["1",4])}>
                            <img alt="Arya Patrika Advertisement" className={classNames(imageStyles.hover_effect)} src={ASPrint5}/>
                          </div>
                        </div>
                        <div ref={props.addParallaxElsRef(-4)} className={classNames(slideStyles.galleryItem_container, slideStyles.galleryItem_25, layoutStyles.align_center, layoutStyles.justify_center)}>
                          <div id={imageStyles.ASPrint6} className={classNames(imageStyles.ilm_gallery, imageStyles.effected_image)} onClick={()=> props.setDisplayedOverlay(["1",5])}>
                            <img alt="Arya Samaj and Politics" className={classNames(imageStyles.hover_effect)} src={ASPrint6}/>
                          </div>
                        </div>
                        <div ref={props.addParallaxElsRef(5)} className={classNames(slideStyles.galleryItem_container, slideStyles.galleryItem_25, layoutStyles.align_center, layoutStyles.justify_center)}>
                          <div id={imageStyles.ASPrint7} className={classNames(imageStyles.ilm_gallery, imageStyles.effected_image)} onClick={()=> props.setDisplayedOverlay(["1",6])}>
                            <img alt="8th anniversary of the Lahore Arya Samaj" className={classNames(imageStyles.hover_effect)} src={ASPrint7}/>
                          </div>
                        </div>
                        <div ref={props.addParallaxElsRef(5)} className={classNames(slideStyles.galleryItem_container, slideStyles.galleryItem_33, layoutStyles.align_center, layoutStyles.justify_center)}>
                          <div id={imageStyles.ASPrint8} className={classNames(imageStyles.ilm_gallery, imageStyles.effected_image)} onClick={()=> props.setDisplayedOverlay(["1",7])}>
                            <img alt="Article" className={classNames(imageStyles.hover_effect)} src={ASPrint8}/>
                          </div>
                        </div>
                    </HorizontalScroll>
                  </div>
                  <Overlay
                    oId="1"
                    displayedOverlay={props.displayedOverlay}
                    closeOverlay={props.closeOverlay}
                    setDisplayedOverlay={props.setDisplayedOverlay}
                    slides={
                      [{
                        description : <div>
                          <p><span>An English Translation of Swami Dayananda’s <i>Satyarth Prakash</i> published in Lahore (1903)</span></p>
                          <p><a href="https://archive.org/details/englishtranslati00daya/page/n3/mode/2up" target="_blank">Scanned Copy</a></p>
                        </div>,
                        title : "Sample Title",
                        source : "archive.org",
                        render : ()=> <img alt="English Translation of Swami Dayananda’s Satyarth Prakash" src={ASPrint1} style={window.innerHeight > 675 ? {width: '55%', marginLeft: '22.5%'} : {width: '45%', marginLeft: '27.5%'}}></img>,
                      },
                      {
                        description : <div>
                          <p>
                            <span>A biography of Pandit Guru Datta, one of the founders of the D.A.V School published in Lahore (1902)</span>
                          </p>
                          <p><a href="https://archive.org/details/worksofthepandit00vidyuoft/page/n3/mode/2up" target="_blank">Scanned Copy</a></p>
                        </div>
                        ,
                        title : "Sample Title",
                        source : "archive.org",
                        render : ()=> <img alt="A biography of Pandit Guru Datta" src={ASPrint2} style={window.innerHeight > 675 ? {width: '55%', marginLeft: '22.5%'} : {width: '45%', marginLeft: '27.5%'}}></img>,
                      },
                      {
                        description : <span>Hindu newspaper <i>Milap</i> pays tribute to figures like Pandit Lekh Ram, Swami Shraddhanand and Rajpal who had been killed in Punjab because of communal violence</span>,
                        title : "Sample Title2",
                        source : "Research Society of Pakistan, University of Punjab",
                        render : ()=> <img alt="Martyrs of Arya Samaj" src={ASPrint3} style={window.innerHeight > 675 ? {width: '58%', marginLeft: '21%'} : {width: '50%', marginLeft: '25%'}}></img>,
                      },
                      {
                        description : <span>A newspaper advertisement titled <i>‘The Best Books of Hindi’</i> recommends titles published by the infamous Rajpal publishers</span>,
                        title : "Sample Title2",
                        source : "Research Society of Pakistan, University of Punjab",
                        render : ()=> <img alt="The Best Books of Hindi" src={ASPrint4} style={{width: '64%', marginLeft: '18%'}}></img>,
                      },
                      {
                        description : <span>An advertisement for the <i>Arya Patrika</i>, a weekly publication of the Arya Pratinidhi Sabha, Punjab (1908)</span>,
                        title : "",
                        source : "archive.org",
                        render : ()=> <img alt="Arya Patrika Advertisement" src={ASPrint5} style={window.innerHeight > 675 ? {width: '55%', marginLeft: '22.5%'} : {width: '45%', marginLeft: '27.5%'}}></img>,
                      },{
                        description : <div>
                          <p>
                            <span><i>Arya Samaj and Politics</i>, a lecture delivered by Mahatma Munshi Ram on the 31st anniversary of the Lahore Arya Samaj (1908)</span>
                          </p>
                          <p><a href="https://archive.org/details/aryasamajandpoli00rammuoft/page/n3/mode/2up" target="_blank">Scanned Copy</a></p>
                        </div>
                        ,
                        title : "",
                        source : "archive.org",
                        render : ()=> <img alt="Arya Samaj and Politics" src={ASPrint6} style={window.innerHeight > 675 ? {width: '55%', marginLeft: '22.5%'} : {width: '45%', marginLeft: '27.5%'}}></img>,
                      },{
                        description : <span>A newspaper story covering the proceedings of the 8th anniversary of the Lahore Arya Samaj</span>,
                        title : "Sample Title2",
                        source : "https://samardeepnotes.blogspot.com",
                        render : ()=> <img alt="8th anniversary of the Lahore Arya Samaj" src={ASPrint7} style={{width: '50%', marginLeft: '25%'}}></img>,
                      },{
                        description : <span>A newspaper article on Arya Samaj’s claim that only the Samaj has the ideological strength to address the caste issue in Hindu religious traditions</span>,
                        title : "",
                        source : "Research Society of Pakistan, University of Punjab",
                        render : ()=> <img alt="Article" src={ASPrint8} style={{width: '80%', marginLeft: '10%'}}></img>,
                      }]
                    }
                  />
                </div>
              )}}
          </Slide>
        ),
        prev : "chapter1slide4",
        next : "chapter1slide6",
        menuInverted : true,
        hideChapterNumber: true,
        bottomBarMessage: '',
      },
      "chapter1slide6" : {
        slideName : "Brahmo Samaj",
        component : (
          <Slide bgImage={Slide1Back}>
            {(props) => {
              return (
                <div className={slideStyles.slideflex}>
                  <SlideHeading title="Brahmo Samaj" desc="While the Arya Samaj was attempting to make inroads into what it meant to be a Hindu and leading a national movement out of Lahore, it was opposed by various other religious and political organizations. The Brahmo Samaj, for instance, was a reformist movement which advocated a religious ideology that was heavily influenced by the ideas of colonial modernity and rationality. One of the men leading it was Ruchi Ram Sahini, a Hindu scientist and educationist. Initially, he was strongly influenced by Pandit Shiv Narain Agnihotri, his teacher at Government High School in Lahore, and Pandit Navin Chandra Rai, who started the Brahmo Samaj in Lahore. A critic of traditional Hindu practices such as the caste system and idol worship, Ruchi Ram had been prominent as a Hindu leader in Lahore before the schism between the Arya and Brahmo Samaj widened."/>
                  <div className={slideStyles.slideContent}>
                    <Layout layoutClassName="layout_flexed">
                      <div ref={props.addParallaxAndFadeRef(-4)} className={classNames(layoutStyles.layout_container, layoutStyles.container_33, layoutStyles.align_center, layoutStyles.justify_center)}>
                        <div id={imageStyles.BrahmoM} className={classNames(imageStyles.effected_image)} onClick={()=> props.setDisplayedOverlay(["1",0])}>
                          <img src={MOBrahmo} alt="A published lecture on Brahmo Samaj" className={classNames(imageStyles.hover_effect)}/>
                        </div>
                      </div>
                      <div ref={props.addParallaxAndFadeRef(5)} className={classNames(layoutStyles.layout_container, layoutStyles.container_33, layoutStyles.align_center, layoutStyles.justify_center)}>
                        <div id={imageStyles.Agnihotri} className={classNames(imageStyles.effected_image)} onClick={()=> props.setDisplayedOverlay(["1",1])}>
                          <img src={AgnihotriJP} alt="Pandit Shiv Narain Agnihotri" className={classNames(imageStyles.hover_effect)}/>
                        </div>
                      </div>
                      <div ref={props.addParallaxAndFadeRef(-6)} className={classNames(layoutStyles.layout_container, layoutStyles.container_33, layoutStyles.align_center, layoutStyles.justify_center)}>
                        <div id={imageStyles.RuchiRam} className={classNames(imageStyles.effected_image)} onClick={()=> props.setDisplayedOverlay(["1",2])}>
                          <img src={RuchiRam} alt="Ruchi Ram Sahini" className={classNames(imageStyles.hover_effect)}/>
                        </div>
                      </div>
                    </Layout>
                  </div>
                  <Overlay
                    oId="1"
                    displayedOverlay={props.displayedOverlay}
                    closeOverlay={props.closeOverlay}
                    setDisplayedOverlay={props.setDisplayedOverlay}
                    slides={
                      [{
                        description : <div>
                          <p>
                            <span><i>The Message of Brahmo Samaj</i> - a lecture by Kashi Ram published in Lahore (1906)</span>
                          </p>
                          <p><a href="https://archive.org/details/messageofbrahmos00kash/page/n1/mode/2up" target="_blank">Scanned Copy</a></p>
                        </div>
                        ,
                        title : "Sample Title",
                        source : "archive.org",
                        render : ()=> <img alt="A published lecture on Brahmo Samaj" src={MOBrahmo} style={window.innerHeight > 675 ? {width: '60%', marginLeft: '20%'} : {width: '50%', marginLeft: '25%'}}></img>,
                      },
                      {
                        description : <span>An ardent Brahmo and an enthusiastic social reformer, Agnihotri was a key figure in the religious polemics taking place in Lahore. Usually, he conducted the weekly Divine Service in the Brahmo Mandir in Lahore. In 1882, Agnihotri gave up his appointment in the Educational Department and publicly accepted the role of a <i>sanyasi</i> at the Brahmo Mandir in Lahore. His name was changed by Pandit Navin Chandrs Rai to Swami Satyanand Agnihotri. Sahini notes that this was the first occasion when an English-educated person had given up a well-paid post in order to devote his life to public preaching. Agnihotri formed a new centre for his religious activities, called the Dev Samaj, which was another place for preaching Brahmoism with greater zeal than was possible in the neutral Brahmo Samaj. He also published his inspiring work, <i>Ruhani Zindagi</i> (Spiritual Life), copies of which were to be found in many Brahmo households. In 1892, he announced himself as the ‘Deva Guru Bhagwan’, lost complete faith in God, called his religion ‘Science grounded’, and adopted all the symbols of orthodox Hinduism that he had so enthusiastically discarded upon his joining the Brahmo Samaj.
                        </span>,
                        title : "Sample Title",
                        source : "Wikipedia",
                        render : ()=> <img alt="Pandit Shiv Narain Agnihotri" src={AgnihotriJP} style={window.innerHeight > 675 ? {width: '60%', marginLeft: '20%'} : {width: '50%', marginLeft: '25%'}}></img>,
                      },
                      {
                        description : "Admitted as a Brahmo Samaj sympathizer within a year or two after his arrival at Lahore, Sahini established a Young Men’s Religious Association in conjunction with Bhai Kashi Ram, which used to meet weekly in the Mandir. He was the Secretary of the Association which organized prayer meetings, lectures, and debates. ‘Book Revelation’, ‘The Existence of God’, ‘The Existence of Evil’ and ‘Prayer’ were among the chief subjects of discussion. Public debates on religious and social subjects through scholarly works like ‘Tennyson and Science’, ‘Mysticism in English Poetry’, and ‘Shakespeare as a Moralist’ also took place regularly. He was the Assistant Professor of Science (Physics and Chemistry) at Government College Lahore. He retired at the age of 55 in 1918, but continued to live in the city as an active participant in its social and political life till 1947. He died a year after the Partition.",
                        title : "Sample Title",
                        source : "https://ruchiramsahni.wordpress.com/",
                        render : ()=> <img alt="Ruchi Ram Sahini" src={RuchiRam} style={window.innerHeight > 675 ? {width: '65%', marginLeft: '17.5%'} : {width: '55%', marginLeft: '22.5%'}}></img>,
                      }]
                    }
                  />
                </div>
              )}}
          </Slide>
        ),
        prev : "chapter1slide5",
        next : "chapter1slide7",
        menuInverted : false,
        bottomBarMessage: 'Click images to enlarge'
      },
      "chapter1slide7" : {
        slideName : "The Annihilation of Caste",
        component : (
          <Slide bgImage={Slide3Back}>
             {(props) => {
               return (
                 <div className={slideStyles.slideflex}>
                   <SlideHeading inverted title="The Annihilation of Caste"/>
                   <div className={slideStyles.galleryChevrons_container}>
                     <p className={classNames(slideStyles.galleryTitle, slideStyles.white)}>Gallery</p>
                     <div onClick={props.moveBackward} className={classNames(slideStyles.prevSlideChev, slideStyles.invertedChev)}><MdChevronLeft/></div>
                     <div onClick={props.moveForward} className={classNames(slideStyles.nextSlideChev, slideStyles.invertedChev)}><MdChevronRight/></div>
                   </div>
                   <div className={slideStyles.slideContent}>
                     <HorizontalScroll
                       scrollContainerRef={props.scrollContainerRef}
                       xPos={props.xPos}>
                       <Layout fixed_width layoutClassName="layout_flexed">
                         <div ref={props.addParallaxAndFadeRef(8)} className={classNames(layoutStyles.layout_container, layoutStyles.container_60, layoutStyles.align_center, layoutStyles.justify_center)}>
                            <p className = {classNames(slideStyles.slidePara, slideStyles.white)}>The intra-Hindu debates were not limited to polemical exchanges between high caste men. It certainly involved debates by women as well on such issues as widow remarriage, underage marriages and so on. Also, caste politics was a major concern in Hindu religious polemics.</p>
                            <p className = {classNames(slideStyles.slidePara, slideStyles.white)}>In 1935, B. R. Ambedkar – the charismatic leader of Dalits in British India – was invited to deliver a lecture by a Lahore-based organization – Jat-Pat Todak Mandal. Operating out of Gokul Chand Narang’s palatial house on 5 Montgomery Road, the organization was led by affluent and ‘enlightened’ Hindus of Lahore critical of the caste system.</p>
                            <p className = {classNames(slideStyles.slidePara, slideStyles.white)}>However, when the executive committee of the Mandal came to know about the contents of Ambedkar’s lecture – especially the part where he talked of the impossibility “to break Caste without annihilating the religious notions on which it, the Caste system, is founded", an adverse reaction followed. After an exchange of letters between the organizers and Ambedkar, the event was eventually cancelled. The lecture was later published under the title of <i>The Annihilation of Caste</i>, and has since become an iconic text in the struggle of Dalits for equality and fight against caste oppression.</p>

                         </div>
                         <div className={classNames(layoutStyles.layout_container, layoutStyles.container_40, layoutStyles.align_center, layoutStyles.justify_center)}>
                            <div ref={props.addParallaxAndFadeRef(10)} id={imageStyles.AOCaste} className={classNames(imageStyles.effected_image)} onClick={()=> props.setDisplayedOverlay(["1",0])} >
                              <img src={AOCaste} alt="The speech prepared by B.R.Ambedkar (published)" className={classNames(imageStyles.hover_effect)}/>
                            </div>
                         </div>
                        </Layout>
                        <div className={classNames(slideStyles.galleryItem_container, slideStyles.galleryItem_33)}>
                           <div ref={props.addParallaxAndFadeRef(10)} id={imageStyles.Ambedkar} className={classNames(imageStyles.effected_image)} onClick={()=> props.setDisplayedOverlay(["1",1])} >
                             <img src={Ambedkar} alt="Dr. B.R.Ambedkar" className={classNames(imageStyles.hover_effect)}/>
                           </div>
                        </div>
                        <div className={classNames(slideStyles.galleryItem_container, slideStyles.galleryItem_33)}>
                           <div ref={props.addParallaxAndFadeRef(10)} id={imageStyles.HinduPeeche} className={classNames(imageStyles.effected_image)} onClick={()=> props.setDisplayedOverlay(["1",2])} >
                             <img src={HinduPeeche} alt="Gokul Chand Narang" className={classNames(imageStyles.hover_effect)}/>
                           </div>
                        </div>
                      </HorizontalScroll>
                   </div>
                    <Overlay
                      oId="1"
                      displayedOverlay={props.displayedOverlay}
                      closeOverlay={props.closeOverlay}
                      setDisplayedOverlay={props.setDisplayedOverlay}
                      slides={
                        [
                          {
                            description : <div>
                              <p>
                                B.R.Ambedkar’s undelivered speech was later published in 1936
                              </p>
                              <p><a href="https://ccnmtl.columbia.edu/projects/mmt/ambedkar/web/readings/aoc_print_2004.pdf" target="_blank">Digital Copy</a></p>
                            </div>,
                            title : "Sample Title",
                            source : "https://poppyhull.wordpress.com",
                            render : ()=> <img alt="The speech prepared by B.R.Ambedkar (published)" src={AOCaste} style={window.innerHeight > 675 ? {width: '65%', marginLeft: '17.5%'} : {width: '55%', marginLeft: '22.5%'}}></img>,
                          },
                          {
                            description : "Dr. B.R.Ambedkar",
                            title : "Sample Title",
                            source : "Wikipedia",
                            render : ()=> <img alt="Dr. B.R.Ambedkar" src={Ambedkar} style={window.innerHeight > 675 ? {width: '65%', marginLeft: '17.5%'} : {width: '55%', marginLeft: '22.5%'}}></img>,
                          },
                          {
                            description : <span>An illustration of Gokul Chand Narang who hosted the Jat-Pat Todak Mandal Conference at his house (published in Daily <i>Milap</i>)</span>,
                            title : "Sample Title",
                            source : "Centre for South Asian Studies, University of Cambridge",
                            render : ()=> <img alt="Gokul Chand Narang" src={HinduPeeche} style={window.innerHeight > 675 ? {width: '90%', marginLeft: '5%'} : {width: '80%', marginLeft: '10%'}}></img>,
                          }
                        ]
                      }
                    />
                 </div>
               )
             }}
          </Slide>
        ),
        prev : "chapter1slide6",
        next : "chapter1slide8",
        menuInverted : true,
        bottomBarMessage: 'Click images to enlarge'
      },
      "chapter1slide8" : {
        slideName : "Religious Sites",
        component : (
          <Slide bgImage={Slide1Back}>
            {(props) => {
              return (
                <div className={slideStyles.slideflex}>
                  <SlideHeading title="Religious Sites" desc="A few photographs of former sites of importance for traditional Hinduism as well as reformist Hindu movements"/>
                  <div className={slideStyles.slideContent}>
                    <Layout layoutClassName="layout_flexed">
                      <div ref={props.addParallaxAndFadeRef(-4)} className={classNames(layoutStyles.layout_container, layoutStyles.container_33, layoutStyles.align_center, layoutStyles.justify_center)}>
                        <div id={imageStyles.BSMandir} className={classNames(imageStyles.effected_image)} onClick={()=> props.setDisplayedOverlay(["1",0])}>
                          <img src={BrahmoSamajMandir} alt="Brahmo Samaj Mandir" className={classNames(imageStyles.hover_effect)}/>
                        </div>
                      </div>
                      <div ref={props.addParallaxAndFadeRef(5)} className={classNames(layoutStyles.layout_container, layoutStyles.container_33, layoutStyles.align_center, layoutStyles.justify_center)}>
                        <div id={imageStyles.SDMandir} className={classNames(imageStyles.effected_image)} onClick={()=> props.setDisplayedOverlay(["1",1])}>
                          <img src={SDharam} alt="Sanatan Dharam Mandir" className={classNames(imageStyles.hover_effect)}/>
                        </div>
                      </div>
                      <div ref={props.addParallaxAndFadeRef(-6)} className={classNames(layoutStyles.layout_container, layoutStyles.container_33, layoutStyles.align_center, layoutStyles.justify_center)}>
                        <div id={imageStyles.DSMandir} className={classNames(imageStyles.effected_image)} onClick={()=> props.setDisplayedOverlay(["1",2])}>
                          <img src={DevSamajMandir} alt="Dev Samaj Mandir" className={classNames(imageStyles.hover_effect)}/>
                        </div>
                      </div>
                    </Layout>
                  </div>
                  <Overlay
                    oId="1"
                    displayedOverlay={props.displayedOverlay}
                    closeOverlay={props.closeOverlay}
                    setDisplayedOverlay={props.setDisplayedOverlay}
                    slides={
                      [{
                        description : <div>
                          <p>
                            <span>Brahmo Samaj Mandir</span>
                          </p>
                        </div>
                        ,
                        title : "Sample Title",
                        source : "archive.org",
                        render : ()=> <img alt="Brahmo Samaj Mandir" src={BrahmoSamajMandir} style={window.innerHeight > 675 ? {width: '60%', marginLeft: '20%'} : {width: '50%', marginLeft: '25%'}}></img>,
                      },
                      {
                        description : <span>Sanatan Dharam Mandir</span>,
                        title : "Sample Title",
                        source : "Wikipedia",
                        render : ()=> <img alt="Sanatan Dharam Mandir" src={SDharam} style={window.innerHeight > 675 ? {width: '90%', marginLeft: '5%'} : {width: '80%', marginLeft: '10%'}}></img>,
                      },
                      {
                        description : "Dev Samaj Mandir",
                        title : "Sample Title",
                        source : "https://ruchiramsahni.wordpress.com/",
                        render : ()=> <img alt="Dev Samaj Mandir" src={DevSamajMandir} style={window.innerHeight > 675 ? {width: '65%', marginLeft: '17.5%'} : {width: '55%', marginLeft: '22.5%'}}></img>,
                      }]
                    }
                  />
                </div>
              )}}
          </Slide>
        ),
        prev : "chapter1slide7",
        next : "chapter2",
        menuInverted : false,
        bottomBarMessage: 'Click images to enlarge'
      }
    }
  },
  "chapter2" : {
    name : "Chapter 2: Politics",
    slides : {
      "chapter2" : {
        component : (
          <Slide bgImage={Chapter2Title}>
            {(props) => {
              return (
                <div ref={props.addFadeRef} className={slideStyles.slideflex}>
                  <div className={slideStyles.slideContent}>
                      <ChapterTitle
                        inverted
                        chapter_number="2"
                        chapter_title="Politics"
                        addParallaxAndFadeRef={props.addParallaxAndFadeRef}
                        images={[
                          {image: LajpatRai, id: chTStyles.absoluteLajpat, shift : -12},
                        ]}
                      />
                  </div>
                  <div className={chapter_title_styles.bottom_gradient} style={{background: 'linear-gradient(to bottom, rgba(14, 67, 58,0) 0%,rgba(14, 67, 58,0.48) 48%,rgba(14, 67, 58,0.97) 97%,rgba(14, 67, 58, 1) 100%)'}}></div>
                </div>
              )}}
          </Slide>
        ),
        prev : "chapter1slide7",
        next : "chapter2slide1",
        menuInverted : true,
        hideChapterNumber: true,
        bottomBarMessage: ''
      },
      "chapter2slide1" : {
        slideName : "Politics in Punjab 1",
        component : (
          <Slide bgImage={Slide4Back} /*absoluteImage={{src: IndianPenal, id: imageStyles.absolutePenal}}*/>
            {(props) => {
              return (
                <div className={slideStyles.slideflex}>
                  <div className={slideStyles.slideContent}>
                    <Layout layoutClassName="layout_flexed">
                      <div ref={props.addFadeRef} className={layoutStyles.layout_100}>
                        <SlideHeading inverted noPadding title="Politics in Punjab" subtitle="Indian Nationalism and Hindu communalism" desc="Even though Hindus dominated trade and commercial activities in the province, and serviced the professional classes in large numbers, there was a widely held view among the Hindu intelligentsia that their community interests were not being safeguarded. One of the reasons, in their estimation, was the British policy of appeasing the Sikhs - who were disproportionately represented in the military and hence vital for the protection of colonial interests - and the Muslims because of their numerical superiority. For instance, in the government policy for grant of newly established canal colony lands, mostly Muslim and Sikh jats were favored, while moneylending classes - most of whom were Hindus - were denied the opportunity. The policy was biased against the Hindus who did not fit the criteria of ‘ideal cultivator’ perceived by the colonial authorities, and also to make sure that the land was used for agricultural productivity alone rather than traded like a commodity for commercial gains. When representative government was initially introduced at the district, and later at the provincial level, the grant of separate electorate and recognition of Muslim majority in the province was opposed by the Hindu intelligentsia. Their argument was that despite their disproportionate contribution to the social and economic life of the province, they were not being given the representation they deserved. This sentiment was widely shared among urban Hindus as opposed to rural classes who had cultivated a mutually beneficial political alliance with Muslim and Sikh landlords."/>
                      </div>
                    </Layout>
                  </div>
                </div>
              )}}
            </Slide>
        ),
        prev : "chapter2",
        next : "chapter2slide2",
        menuInverted : true,
        bottomBarMessage: 'Click images to enlarge'
      },
      "chapter2slide2" : {
        slideName : "Politics in Punjab 2",
        component : (
          <Slide bgImage={Slide5Back}>
            {(props) => {
              return (
                <div className={slideStyles.slideflex}>
                  <div ref={props.addFadeRef}>
                    <SlideHeading title="Politics in Punjab" subtitle="Indian Nationalism and Hindu communalism" desc="Articles and poems published in Lahore's Hindu newspapers reflected the political sentiment of Punjabi Hindus in pre-partition Lahore"/>
                  </div>
                  <div className={slideStyles.galleryChevrons_container}>
                    <p className={classNames(slideStyles.galleryTitle)}>Gallery</p>
                    <div onClick={props.moveBackward} className={classNames(slideStyles.prevSlideChev)}><MdChevronLeft/></div>
                    <div onClick={props.moveForward} className={classNames(slideStyles.nextSlideChev)}><MdChevronRight/></div>
                  </div>
                  <div className={slideStyles.slideContent}>
                    <HorizontalScroll
                      scrollContainerRef={props.scrollContainerRef}
                      xPos={props.xPos}>
                        <div ref={props.addParallaxAndFadeRef(6)} className={classNames(slideStyles.galleryItem_container, slideStyles.galleryItem_33, layoutStyles.justify_center)}>
                          <div id={imageStyles.Politics1} className={classNames(imageStyles.full_gallery, imageStyles.effected_image)} onClick={()=> props.setDisplayedOverlay(["1",0])}>
                            <img alt="Milap Article" className={classNames(imageStyles.hover_effect)} src={BadnaseebHindu}/>
                          </div>
                        </div>
                        <div ref={props.addParallaxAndFadeRef(-5)} className={classNames(slideStyles.galleryItem_container, slideStyles.galleryItem_33, layoutStyles.align_center)}>
                          <div id={imageStyles.Politics2} className={classNames(imageStyles.full_gallery, imageStyles.effected_image)} onClick={()=> props.setDisplayedOverlay(["1",1])}>
                            <img alt="Poem" className={classNames(imageStyles.hover_effect)} src={PunjabkeHindu}/>
                          </div>
                        </div>
                        <div ref={props.addParallaxAndFadeRef(5)} className={classNames(slideStyles.galleryItem_container, slideStyles.galleryItem_40, layoutStyles.align_center, layoutStyles.justify_center)}>
                          <div id={imageStyles.Politics3} className={classNames(imageStyles.full_gallery, imageStyles.effected_image)} onClick={()=> props.setDisplayedOverlay(["1",2])}>
                            <img alt="Milap Article" className={classNames(imageStyles.hover_effect)} src={HinduPeeche}/>
                          </div>
                        </div>
                        <div ref={props.addParallaxAndFadeRef(-4)} className={classNames(slideStyles.galleryItem_container, slideStyles.galleryItem_33, layoutStyles.align_center, layoutStyles.justify_center)}>
                          <div id={imageStyles.Politics4} className={classNames(imageStyles.full_gallery, imageStyles.effected_image)} onClick={()=> props.setDisplayedOverlay(["1",3])}>
                            <img alt="Poem" className={classNames(imageStyles.hover_effect)} src={PunjabKaMahajan}/>
                          </div>
                        </div>
                    </HorizontalScroll>
                  </div>
                  <Overlay
                    oId="1"
                    displayedOverlay={props.displayedOverlay}
                    closeOverlay={props.closeOverlay}
                    setDisplayedOverlay={props.setDisplayedOverlay}
                    slides={
                      [{
                        description : <span>An editorial titled ‘The unfortunate Hindus of Punjab’ published in Lahore’s Urdu Daily, <i>Milap</i></span>,
                        title : "Sample Title",
                        source : "Centre for South Asian Studies, University of Cambridge",
                        render : ()=> <img alt="Milap Article" src={BadnaseebHindu} style={window.innerHeight > 675 ? {width: '70%', marginLeft: '15%'} : {width: '60%', marginLeft: '30%'}}></img>,
                      },
                      {
                        description : <span>A poem titled ‘the Hindus of Punjab’ published in Lahore’s Urdu Daily, <i>Milap</i></span>,
                        title : "Sample Title",
                        source : "Centre for South Asian Studies, University of Cambridge",
                        render : ()=> <img alt="Poem" src={PunjabkeHindu} style={window.innerHeight > 675 ? {width: '80%', marginLeft: '10%'} : {width: '70%', marginLeft: '15%'}}></img>,
                      },
                      {
                        description : <span>In an article published in Daily <i>Milap</i>, Dr. Gokul Chand argued that the reason behind the apparent weakness of ‘the Hindus’ was that they were not inward oriented, unlike other groups. Focus should be shifted back to Hindu Dharam and the plight of its people instead of focusing on other external affairs, so that the Dharam may prosper</span>,
                        title : "Sample Title2",
                        source : "Centre for South Asian Studies, University of Cambridge",
                        render : ()=> <img alt="Milap Article" src={HinduPeeche} style={window.innerHeight > 675 ? {width: '95%', marginLeft: '2.5%'} : {width: '85%', marginLeft: '7.5%'}}></img>,
                      },
                      {
                        description : <span>A poem published in Daily <i>Milap</i> rues the legislation that unfairly targeted the Hindu moneylenders</span>,
                        title : "Sample Title2",
                        source : "Centre for South Asian Studies, University of Cambridge",
                        render : ()=> <img alt="Poem" src={PunjabKaMahajan} style={{width: '80%', marginLeft: '10%'}}></img>,
                      }]
                    }
                  />
                </div>
              )}}
          </Slide>
        ),
        prev : "chapter2slide1",
        next : "chapter2slide3",
        menuInverted : false,
        hideChapterNumber: true,
        bottomBarMessage: '',
      },
      "chapter2slide3" : {
        slideName : "Political Cartoons and Illustrations ",
        component : (
          <Slide bgImage={Slide4Back}>
            {(props) => {
              return (
                <div className={slideStyles.slideflex}>
                  <SlideHeading inverted title="Political Cartoons and Illustrations" desc="Cartoons and Illustrations published in Hindu-owned newspapers also give a glimpse into the politics of Hindus at the time"/>
                  <div className={slideStyles.slideContent}>
                    <Layout layoutClassName="layout_flexed">
                      <div ref={props.addParallaxAndFadeRef(-4)} className={classNames(layoutStyles.layout_container, layoutStyles.container_33, layoutStyles.align_center, layoutStyles.justify_center)}>
                        <div id={imageStyles.Cartoon} className={classNames(imageStyles.effected_image)} onClick={()=> props.setDisplayedOverlay(["1",0])}>
                          <img src={Cartoon} alt="Cartoon published in Daily Milap" className={classNames(imageStyles.hover_effect)}/>
                        </div>
                      </div>
                      <div ref={props.addParallaxAndFadeRef(5)} className={classNames(layoutStyles.layout_container, layoutStyles.container_33, layoutStyles.align_center, layoutStyles.justify_center)}>
                        <div id={imageStyles.FreedomArt} className={classNames(imageStyles.effected_image)} onClick={()=> props.setDisplayedOverlay(["1",1])}>
                          <img src={MilapFreedomArt} alt="Freedom Art in Daily Milap" className={classNames(imageStyles.hover_effect)}/>
                        </div>
                      </div>
                      <div ref={props.addParallaxAndFadeRef(-6)} className={classNames(layoutStyles.layout_container, layoutStyles.container_33, layoutStyles.align_center, layoutStyles.justify_center)}>
                        <div id={imageStyles.Martyrs} className={classNames(imageStyles.effected_image)} onClick={()=> props.setDisplayedOverlay(["1",2])}>
                          <img src={Martyrs} alt="Full page feature on Hindu Martyrs" className={classNames(imageStyles.hover_effect)}/>
                        </div>
                      </div>
                    </Layout>
                  </div>
                  <Overlay
                    oId="1"
                    displayedOverlay={props.displayedOverlay}
                    closeOverlay={props.closeOverlay}
                    setDisplayedOverlay={props.setDisplayedOverlay}
                    slides={
                      [{
                        description : <span>A cartoon published in <i>Daily Milap</i> ridiculing the hyper-religiosity of some Muslim leaders as the reason for communal tension. This is contrasted by a Fez-wearing, modernist Muslim who is shown as calm and rational, hence more amenable to reason rather than religious passion.</span>,
                        title : "Sample Title",
                        source : "Centre for South Asian Studies, University of Cambridge",
                        render : ()=> <img alt="Cartoon published in Daily Milap" src={Cartoon} style={window.innerHeight > 675 ? {width: '70%', marginLeft: '15%'} : {width: '60%', marginLeft: '20%'}}></img>,
                      },
                      {
                        description : <span>An illustration published in <i>Daily Milap</i> symbolizes the ordeals and sacrifices that are necessary to gain freedom</span>,
                        title : "Sample Title",
                        source : "Research Society of Pakistan, University of Punjab",
                        render : ()=> <img alt="Freedom Art in Daily Milap" src={MilapFreedomArt} style={window.innerHeight > 675 ? {width: '60%', marginLeft: '20%'} : {width: '50%', marginLeft: '25%'}}></img>,
                      },
                      {
                        description : "A full page feature on Hindus who had been victims of ‘Muslim violence’. In particular, the focus is on the figure of Haqiqat Rai - a Hindu boy who was killed in early 18th century Lahore for refusing to change his religion",
                        title : "Sample Title",
                        source : "Research Society of Pakistan, University of Punjab",
                        render : ()=> <img alt="Full page feature on Hindu Martyrs" src={Martyrs} style={window.innerHeight > 675 ? {width: '65%', marginLeft: '17.5%'} : {width: '55%', marginLeft: '22.5%'}}></img>,
                      }]
                    }
                  />
                </div>
              )}}
          </Slide>
        ),
        prev : "chapter2slide2",
        next : "chapter2slide4",
        menuInverted : true,
        bottomBarMessage: 'Click images to enlarge'
      },
      "chapter2slide4" : {
        slideName : "Lala Lajpat Rai",
        component : (
          <Slide bgImage={Slide6Back}>
             {(props) => {
               return (
                 <div className={slideStyles.slideflex}>
                   <SlideHeading inverted title="Lala Lajpat Rai"/>
                   <div className={slideStyles.galleryChevrons_container}>
                     <p className={classNames(slideStyles.galleryTitle, slideStyles.white)}>Gallery</p>
                     <div onClick={props.moveBackward} className={classNames(slideStyles.prevSlideChev, slideStyles.invertedChev)}><MdChevronLeft/></div>
                     <div onClick={props.moveForward} className={classNames(slideStyles.nextSlideChev, slideStyles.invertedChev)}><MdChevronRight/></div>
                   </div>
                   <div className={slideStyles.slideContent}>
                     <HorizontalScroll
                       scrollContainerRef={props.scrollContainerRef}
                       xPos={props.xPos}>
                       <Layout fixed_width layoutClassName="layout_flexed">
                         <div ref={props.addParallaxAndFadeRef(8)} className={classNames(layoutStyles.layout_container, layoutStyles.container_60, layoutStyles.align_center, layoutStyles.justify_center)}>
                            <p className = {classNames(slideStyles.slidePara, slideStyles.white)}>Religious acrimony - especially between the Hindus and the Muslims - was at the heart of urban politics in Lahore during the 20th century. The urban Hindus left excluded while Hindu landlords had joined hands with the Muslim and Sikh landlords to form the Unionist Party, and implemented policies that protected their class interests as rural barons. The urban Hindus, on the other hand, continued to plead against discrimination as the Muslims were given special quotas in higher education and jobs.</p>
                            <p className = {classNames(slideStyles.slidePara, slideStyles.white)}>Amid such class interests and politics of emotion, there was little scope for nationalist politics. Lala Lajpat Rai was one exception. Although he was a towering figure at the forefront of nationalist politics in Lahore, he had a deep-rooted communalist agenda. The Indian National Congress, therefore, failed to have a popular base in the city as it was largely dominated by leaders with affiliation to the Arya Samaj or espoused a similar sense of disaffection towards the Muslims.</p>
                         </div>
                         <div className={classNames(layoutStyles.layout_container, layoutStyles.container_40, layoutStyles.align_center, layoutStyles.justify_center)}>
                            <div ref={props.addParallaxAndFadeRef(10)} id={imageStyles.LLRai} className={classNames(imageStyles.effected_image)} onClick={()=> props.setDisplayedOverlay(["1",0])} >
                              <img src={LLRai} alt="Lala Lajpat Rai" className={classNames(imageStyles.hover_effect)}/>
                            </div>
                         </div>
                        </Layout>
                        <div className={classNames(slideStyles.galleryItem_container, slideStyles.galleryItem_33)}>
                           <div ref={props.addParallaxAndFadeRef(10)} id={imageStyles.LLRai_Statue} className={classNames(imageStyles.effected_image)} onClick={()=> props.setDisplayedOverlay(["1",1])} >
                             <img src={LLRai_Statue} alt="Statue of Lala Lajpat Rai" className={classNames(imageStyles.hover_effect)}/>
                           </div>
                        </div>
                      </HorizontalScroll>
                   </div>
                    <Overlay
                      oId="1"
                      displayedOverlay={props.displayedOverlay}
                      closeOverlay={props.closeOverlay}
                      setDisplayedOverlay={props.setDisplayedOverlay}
                      slides={
                        [
                          {
                            description : "Lala Lajpat Rai",
                            title : "Sample Title",
                            source : "Wikipedia",
                            render : ()=> <img alt="Lala Lajpat Rai" src={LLRai} style={window.innerHeight > 675 ? {width: '65%', marginLeft: '17.5%'} : {width: '55%', marginLeft: '22.5%'}}></img>,
                          },
                          {
                            description : "A statue of Lala Lajpat Rai in Simla, India. This statue was originally installed at Lahore’s Gol Bagh (Nasir Bagh), but was removed from its original location after 1947 and moved to Simla.",
                            title : "Sample Title",
                            source : "Wikipedia",
                            render : ()=> <img alt="Statue of Lala Lajpat Rai" src={LLRai_Statue} style={window.innerHeight > 675 ? {width: '65%', marginLeft: '17.5%'} : {width: '55%', marginLeft: '22.5%'}}></img>,
                          }
                        ]
                      }
                    />
                 </div>
               )
             }}
          </Slide>
        ),
        prev : "chapter2slide3",
        next : "chapter2slide5",
        menuInverted : true,
        bottomBarMessage: 'Click images to enlarge'
      },
      "chapter2slide5" : {
        slideName : "Lala Lajpat Rai in print",
        component : (
          <Slide bgImage={Slide5Back}>
            {(props) => {
              return (
                <div className={slideStyles.slideflex}>
                  <div ref={props.addFadeRef}>
                    <SlideHeading title="Lala Lajpat Rai" subtitle="In Lahore’s Newspapers" desc="Contemporary newspapers show Lala Lajpat Rai as a highly celebrated figure among Lahore’s Hindu community, both before and after his death in November 1928."/>
                  </div>
                  <div className={slideStyles.galleryChevrons_container}>
                    <p className={classNames(slideStyles.galleryTitle)}>Gallery</p>
                    <div onClick={props.moveBackward} className={classNames(slideStyles.prevSlideChev)}><MdChevronLeft/></div>
                    <div onClick={props.moveForward} className={classNames(slideStyles.nextSlideChev)}><MdChevronRight/></div>
                  </div>
                  <div className={slideStyles.slideContent}>
                    <HorizontalScroll
                      scrollContainerRef={props.scrollContainerRef}
                      xPos={props.xPos}>
                        <div ref={props.addParallaxAndFadeRef(5)} className={classNames(slideStyles.galleryItem_container, slideStyles.galleryItem_33, layoutStyles.justify_center)}>
                          <div id={imageStyles.LLR1} className={classNames(imageStyles.ilm_gallery, imageStyles.effected_image)} onClick={()=> props.setDisplayedOverlay(["1",0])}>
                            <img alt="Lala Lajpat Rai number, Daily Bande Matram" className={classNames(imageStyles.hover_effect)} src={LLR_BM}/>
                          </div>
                        </div>
                        <div ref={props.addParallaxAndFadeRef(-4)} className={classNames(slideStyles.galleryItem_container, slideStyles.galleryItem_33, layoutStyles.justify_center)}>
                          <div id={imageStyles.LLR2} className={classNames(imageStyles.ilm_gallery, imageStyles.effected_image)} onClick={()=> props.setDisplayedOverlay(["1",1])}>
                            <img alt="Shaheed number, Daily Pratap" className={classNames(imageStyles.hover_effect)} src={LLR_Pratap}/>
                          </div>
                        </div>
                        <div ref={props.addParallaxAndFadeRef(5)} className={classNames(slideStyles.galleryItem_container, slideStyles.galleryItem_33, layoutStyles.align_center)}>
                          <div id={imageStyles.LLR3} className={classNames(imageStyles.full_gallery, imageStyles.effected_image)} onClick={()=> props.setDisplayedOverlay(["1",2])}>
                            <img alt="Poem" className={classNames(imageStyles.hover_effect)} src={LLR_Poem1}/>
                          </div>
                        </div>
                        <div ref={props.addParallaxAndFadeRef(-5)} className={classNames(slideStyles.galleryItem_container, slideStyles.galleryItem_25, layoutStyles.align_center, layoutStyles.justify_center)}>
                          <div id={imageStyles.LLR4} className={classNames(imageStyles.ilm_gallery, imageStyles.effected_image)} onClick={()=> props.setDisplayedOverlay(["1",3])}>
                            <img alt="Poem" className={classNames(imageStyles.hover_effect)} src={LLR_Poem2}/>
                          </div>
                        </div>
                        <div ref={props.addParallaxAndFadeRef(4)} className={classNames(slideStyles.galleryItem_container, slideStyles.galleryItem_33, layoutStyles.align_center, layoutStyles.justify_center)}>
                          <div id={imageStyles.LLR5} className={classNames(imageStyles.ilm_gallery, imageStyles.effected_image)} onClick={()=> props.setDisplayedOverlay(["1",4])}>
                            <img alt="Poem and Article on Lajpat Rai's statue" className={classNames(imageStyles.hover_effect)} src={LLR_Poem3}/>
                          </div>
                        </div>

                        <div ref={props.addParallaxAndFadeRef(-5)} className={classNames(slideStyles.galleryItem_container, slideStyles.galleryItem_33, layoutStyles.align_center)}>
                          <div id={imageStyles.LLR6} className={classNames(imageStyles.ilm_gallery, imageStyles.effected_image)} onClick={()=> props.setDisplayedOverlay(["1",5])}>
                            <img alt="Lala Lajpat Rai's pictures" className={classNames(imageStyles.hover_effect)} src={LLR_Pict}/>
                          </div>
                        </div>
                        <div ref={props.addParallaxAndFadeRef(5)} className={classNames(slideStyles.galleryItem_container, slideStyles.galleryItem_25, layoutStyles.align_center, layoutStyles.justify_center)}>
                          <div id={imageStyles.LLR7} className={classNames(imageStyles.ilm_gallery, imageStyles.effected_image)} onClick={()=> props.setDisplayedOverlay(["1",6])}>
                            <img alt="Messages from Congress leaders on Lala's death" className={classNames(imageStyles.hover_effect)} src={LLR_Congress}/>
                          </div>
                        </div>
                        <div ref={props.addParallaxAndFadeRef(-4)} className={classNames(slideStyles.galleryItem_container, slideStyles.galleryItem_25, layoutStyles.align_center, layoutStyles.justify_center)}>
                          <div id={imageStyles.LLR8} className={classNames(imageStyles.full_gallery, imageStyles.effected_image)} onClick={()=> props.setDisplayedOverlay(["1",7])}>
                            <img alt="Congregation in the memory of Lala Lajpat Rai" className={classNames(imageStyles.hover_effect)} src={LLR_Jalsa}/>
                          </div>
                        </div>
                        <div ref={props.addParallaxAndFadeRef(4)} className={classNames(slideStyles.galleryItem_container, slideStyles.galleryItem_33, layoutStyles.align_center, layoutStyles.justify_center)}>
                          <div id={imageStyles.LLR9} className={classNames(imageStyles.ilm_gallery, imageStyles.effected_image)} onClick={()=> props.setDisplayedOverlay(["1",8])}>
                            <img alt="Writings of Lala Lajpat Rai" className={classNames(imageStyles.hover_effect)} src={LLR_Writings}/>
                          </div>
                        </div>
                    </HorizontalScroll>
                  </div>
                  <Overlay
                    oId="1"
                    displayedOverlay={props.displayedOverlay}
                    closeOverlay={props.closeOverlay}
                    setDisplayedOverlay={props.setDisplayedOverlay}
                    slides={
                      [{
                        description : <span><i>Lala Lajpat Rai number</i> published by Daily <i>Bande Matram</i> Lahore (16 November 1929). The title page features a portrait and a poem dedicated to Lala Lajpat Rai</span>,
                        title : "Sample Title",
                        source : "Research Society of Pakistan, University of Punjab",
                        render : ()=> <img alt="Lala Lajpat Rai number, Daily Bande Matram" src={LLR_BM} style={window.innerHeight > 675 ? {width: '70%', marginLeft: '15%'} : {width: '60%', marginLeft: '20%'}}></img>,
                      },
                      {
                        description : <span>Daily <i>Pratap</i> publishes <i>Shaheed number</i> (Martyrs edition) featuring a portrait of Lala Lajpat Rai along with a couplet (17 November 1929)</span>,
                        title : "Sample Title2",
                        source : "Research Society of Pakistan, University of Punjab",
                        render : ()=> <img alt="Shaheed number, Daily Pratap" src={LLR_Pratap} style={{width: '70%', marginLeft: '15%'}}></img>,
                      },
                      {
                        description : "A poem paying tribute to Lala Lajpat Rai",
                        title : "Sample Title",
                        source : "Research Society of Pakistan, University of Punjab",
                        render : ()=> <img alt="Poem" src={LLR_Poem1} style={window.innerHeight > 675 ? {width: '80%', marginLeft: '10%'} : {width: '70%', marginLeft: '15%'}}></img>,
                      },
                      {
                        description : "A poem paying homage to Lala Lajpat Rai",
                        title : "Sample Title2",
                        source : "Research Society of Pakistan, University of Punjab",
                        render : ()=> <img alt="Poem" src={LLR_Poem2} style={window.innerHeight > 675 ? {width: '65%', marginLeft: '17.5%'} : {width: '55%', marginLeft: '22.5%'}}></img>,
                      },
                      {
                        description : "A newspaper story on the availability of a site for Lala Lajpat Rai’s statue along with a poem celebrating him.",
                        title : "Sample Title2",
                        source : "Research Society of Pakistan, University of Punjab",
                        render : ()=> <img alt="Poem and Article on Lajpat Rai's statue" src={LLR_Poem3} style={{width: '65%', marginLeft: '17.5%'}}></img>,
                      },
                      {
                        description : "A full page feature on different images of Lala Lajpat Rai during his lifetime.",
                        title : "Sample Title2",
                        source : "Research Society of Pakistan, University of Punjab",
                        render : ()=> <img alt="Lala Lajpat Rai's pictures" src={LLR_Pict} style={{width: '70%', marginLeft: '15%'}}></img>,
                      },{
                        description : "Newspaper publishes messages from Congress leaders Madan Mohan Malaviya and Motilal Nehru on the death of Lala Lajpat Rai",
                        title : "Sample Title2",
                        source : "Research Society of Pakistan, University of Punjab",
                        render : ()=> <img alt="Messages from Congress leaders on Lala's death" src={LLR_Congress} style={{width: '60%', marginLeft: '20%'}}></img>,
                      },{
                        description : "Headline about a congregation in the memory of Lala Lajpat Rai",
                        title : "Sample Title2",
                        source : "Research Society of Pakistan, University of Punjab",
                        render : ()=> <img alt="Congregation in the memory of Lala Lajpat Rai" src={LLR_Jalsa} style={{width: '80%', marginLeft: '10%'}}></img>,
                      },{
                        description : " An article on the writings of Lala Lajpat Rai",
                        title : "Sample Title2",
                        source : "Research Society of Pakistan, University of Punjab",
                        render : ()=> <img alt="Writings of Lala Lajpat Rai" src={LLR_Writings} style={{width: '70%', marginLeft: '15%'}}></img>,
                      }]
                    }
                  />
                </div>
              )}}
          </Slide>
        ),
        prev : "chapter2slide4",
        next : "chapter3",
        menuInverted : false,
        hideChapterNumber: true,
        bottomBarMessage: '',
      }
    }
  },
  "chapter3" : {
    name : "Chapter 3: Newspapers",
    slides : {
      "chapter3" : {
        component : (
          <Slide bgImage={Chapter3Title}>
            {(props) => {
              return (
                <div ref={props.addFadeRef} className={slideStyles.slideflex}>
                  <div className={slideStyles.slideContent}>
                    <ChapterTitle
                      inverted
                      chapter_number="3"
                      chapter_title="Newspapers"
                      addParallaxAndFadeRef={props.addParallaxAndFadeRef}
                      images={[
                        {image: PratapCover, id: chTStyles.PratapCover, shift : 8},
                        {image: MilapBasantCover, id: chTStyles.MilapBasantCover, shift : -7}
                      ]}
                    />
                  </div>
                  <div className={chapter_title_styles.bottom_gradient} style={{background: 'linear-gradient(to bottom, rgba(130, 98, 204,0) 0%,rgba(130, 98, 204,0.48) 48%,rgba(130, 98, 204,0.97) 97%,rgba(130, 98, 204, 1) 100%)'}}></div>
                </div>
              )}}
          </Slide>
        ),
        prev : "chapter2slide5",
        next : "chapter3slide1",
        menuInverted : true,
        hideChapterNumber: true,
        bottomBarMessage: ''
      },
      "chapter3slide1" : {
        slideName : "Lahore’s Hindu Newspapers 1",
        component : (
          <Slide bgImage={Slide7Back}>
             {(props) => {
               return (
                 <div className={slideStyles.slideflex}>
                   <SlideHeading title="Lahore’s Hindu Newspapers"/>
                   <div className={slideStyles.galleryChevrons_container}>
                     <p className={classNames(slideStyles.galleryTitle)}>Gallery</p>
                     <div onClick={props.moveBackward} className={classNames(slideStyles.prevSlideChev)}><MdChevronLeft/></div>
                     <div onClick={props.moveForward} className={classNames(slideStyles.nextSlideChev)}><MdChevronRight/></div>
                   </div>
                   <div className={slideStyles.slideContent}>
                     <HorizontalScroll
                       scrollContainerRef={props.scrollContainerRef}
                       xPos={props.xPos}>
                       <Layout fixed_width layoutClassName="layout_flexed">
                         <div ref={props.addParallaxAndFadeRef(5)} className={classNames(layoutStyles.layout_container, layoutStyles.container_60, layoutStyles.align_center, layoutStyles.justify_center)}>
                            <p className={slideStyles.slidePara}>Unlike UP and Bihar where the demand to replace Urdu with Devanagari script was popular, there was no serious threat to the status of Urdu in Punjab as the medium of instruction in public schools and an effective mode of social, political and religious commentary. Therefore, even those newspapers that claimed to present the case of discrimination faced by Hindus and argued for nationalist politics, chose Urdu as the medium of communication. <i>Milap</i>, <i>Pratap</i> and <i>Bande Matram</i> were major Urdu dailies published from Lahore and widely read by the city’s Hindu community. <i>Milap</i> continued to be published in post-1947 Eastern Punjab as well where a large number of Hindu and Sikhs subscribed to it as they were literate in Urdu only. One such person is Manmohan Singh - the former prime minister of India - who received his early education in British Punjab, and is therefore a fluent reader of Urdu. His ‘Hindi speeches’ were, therefore, written in Urdu script.</p>
                         </div>
                         <div className={classNames(layoutStyles.layout_container, layoutStyles.container_40, layoutStyles.align_center, layoutStyles.justify_center)}>
                            <div ref={props.addParallaxAndFadeRef(-5)} id={imageStyles.MilapCover} className={classNames(imageStyles.effected_image)} onClick={()=> props.setDisplayedOverlay(["1",0])} >
                              <img src={MilapCover} alt="A front page of Daily Milap" className={classNames(imageStyles.hover_effect)}/>
                            </div>
                         </div>
                        </Layout>
                       <div className={classNames(slideStyles.galleryItem_container, slideStyles.galleryItem_33)}>
                          <div ref={props.addParallaxAndFadeRef(6)} id={imageStyles.Lajpat_AS2} className={classNames(imageStyles.effected_image)} onClick={()=> props.setDisplayedOverlay(["1",1])} >
                            <img src={BMCover} alt="A front page of Daily Bande Matram" className={classNames(imageStyles.hover_effect)}/>
                          </div>
                       </div>
                      </HorizontalScroll>
                   </div>
                    <Overlay
                      oId="1"
                      displayedOverlay={props.displayedOverlay}
                      closeOverlay={props.closeOverlay}
                      setDisplayedOverlay={props.setDisplayedOverlay}
                      slides={
                        [
                          {
                            description : <span>Daily <i>Milap</i>, one of the major Hindu-led newspapers in pre-partition Lahore was inaugurated in April 1923</span>,
                            title : "Sample Title",
                            source : <a href="https://twitter.com/rishi_suri/status/1265181759207018497/photo/1" target="_blank">Twitter</a>,
                            render : ()=> <img alt="Front page of Daily Milap" src={MilapCover} style={window.innerHeight > 675 ? {width: '70%', marginLeft: '15%'} : {width: '60%', marginLeft: '20%'}}></img>,
                          },
                          {
                            description : <span>Daily <i>Bande Matram</i>, a Hindu-run newspaper in pre-partition Lahore</span>,
                            title : "Sample Title",
                            source : "https://lahorenama.wordpress.com/",
                            render : ()=> <img alt="Front page of Daily Bande Matram" src={BMCover} style={window.innerHeight > 675 ? {width: '80%', marginLeft: '10%'} : {width: '70%', marginLeft: '15%'}}></img>,
                          }
                        ]
                      }
                    />
                 </div>
               )
             }}
          </Slide>
        ),
        prev : "chapter3",
        next : "chapter3slide2",
        menuInverted : false,
        bottomBarMessage: 'Click images to enlarge'
      },
      "chapter3slide2" : {
        slideName : "Lahore’s Hindu Newspapers 2",
        component : (
          <Slide bgImage={Slide8Back} absoluteImage={{src: BMCover, id: imageStyles.absoluteBM}}>
            {(props) => {
              return (
                <div className={slideStyles.slideflex}>
                  <div className={slideStyles.slideContent}>
                    <Layout layoutClassName="layout_flexed">
                      <div ref={props.addFadeRef} className={layoutStyles.layout_100}>
                        <SlideHeading inverted noPadding title="Lahore’s Hindu Newspapers" desc=<span>The choice of words like ‘Hindu newspapers’ reflects the communalized nature of politics in the city. There were similar ‘Muslim newspapers’ as well, such as <i>Zamindar</i> and <i>Inqilab</i>, which mainly catered to the social, political and economic interests of the Muslim community. Such a sharp communal divide resulting from various colonial policies was reified over a period of time, and was responsible for much of the violence - and the Partition itself - which took place in 1947.</span>/>
                      </div>
                    </Layout>
                  </div>
                </div>
              )}}
            </Slide>
        ),
        prev : "chapter3slide1",
        next : "chapter3slide3",
        menuInverted : true,
        bottomBarMessage: 'Click images to enlarge'
      },
      "chapter3slide3" : {
        slideName : "Special Editions",
        component : (
          <Slide bgImage={Slide9Back}>
            {(props) => {
              return (
                <div className={slideStyles.slideflex}>
                  <div ref={props.addFadeRef}>
                    <SlideHeading title="Special Editions"/>
                  </div>
                  <div className={slideStyles.galleryChevrons_container}>
                    <p className={classNames(slideStyles.galleryTitle)}>Gallery</p>
                    <div onClick={props.moveBackward} className={classNames(slideStyles.prevSlideChev)}><MdChevronLeft/></div>
                    <div onClick={props.moveForward} className={classNames(slideStyles.nextSlideChev)}><MdChevronRight/></div>
                  </div>
                  <div className={slideStyles.slideContent}>
                    <HorizontalScroll
                      scrollContainerRef={props.scrollContainerRef}
                      xPos={props.xPos}>
                        <div ref={props.addParallaxAndFadeRef(5)} className={classNames(slideStyles.galleryItem_container, slideStyles.galleryItem_33, layoutStyles.justify_center)}>
                          <div id={imageStyles.NC1} className={classNames(imageStyles.special_ed_gallery, imageStyles.effected_image)} onClick={()=> props.setDisplayedOverlay(["1",0])}>
                            <img alt="Daily Pratap, Krishna number" className={classNames(imageStyles.hover_effect)} src={PratapCover}/>
                          </div>
                        </div>
                        <div ref={props.addParallaxAndFadeRef(-4)} className={classNames(slideStyles.galleryItem_container, slideStyles.galleryItem_33, layoutStyles.justify_center)}>
                          <div id={imageStyles.NC2} className={classNames(imageStyles.special_ed_gallery, imageStyles.effected_image)} onClick={()=> props.setDisplayedOverlay(["1",1])}>
                            <img alt="Daily Milap, Basant Number" className={classNames(imageStyles.hover_effect)} src={MilapBasant}/>
                          </div>
                        </div>
                        <div ref={props.addParallaxAndFadeRef(5)} className={classNames(slideStyles.galleryItem_container, slideStyles.galleryItem_33, layoutStyles.align_center)}>
                          <div id={imageStyles.NC3} className={classNames(imageStyles.special_ed_gallery, imageStyles.effected_image)} onClick={()=> props.setDisplayedOverlay(["1",2])}>
                            <img alt="Daily Milap, Holi edition" className={classNames(imageStyles.hover_effect)} src={MilapHoli}/>
                          </div>
                        </div>
                        <div ref={props.addParallaxAndFadeRef(-5)} className={classNames(slideStyles.galleryItem_container, slideStyles.galleryItem_33, layoutStyles.align_center, layoutStyles.justify_center)}>
                          <div id={imageStyles.NC4} className={classNames(imageStyles.special_ed_gallery, imageStyles.effected_image)} onClick={()=> props.setDisplayedOverlay(["1",3])}>
                            <img alt="Daily Milap, Pahar (Mountain) edition" className={classNames(imageStyles.hover_effect)} src={PaharNumber}/>
                          </div>
                        </div>
                        <div ref={props.addParallaxAndFadeRef(4)} className={classNames(slideStyles.galleryItem_container, slideStyles.galleryItem_33, layoutStyles.align_center, layoutStyles.justify_center)}>
                          <div id={imageStyles.NC5} className={classNames(imageStyles.special_ed_gallery, imageStyles.effected_image)} onClick={()=> props.setDisplayedOverlay(["1",4])}>
                            <img alt="Daily Pratap, Martyrs edition" className={classNames(imageStyles.hover_effect)} src={LLR_Pratap}/>
                          </div>
                        </div>
                        <div ref={props.addParallaxAndFadeRef(-4)} className={classNames(slideStyles.galleryItem_container, slideStyles.galleryItem_33, layoutStyles.align_center, layoutStyles.justify_center)}>
                          <div id={imageStyles.NC6} className={classNames(imageStyles.special_ed_gallery, imageStyles.effected_image)} onClick={()=> props.setDisplayedOverlay(["1",5])}>
                            <img alt="Daily Bande Matram, Lala Lajpat Rai edition" className={classNames(imageStyles.hover_effect)} src={LLR_BM}/>
                          </div>
                        </div>
                    </HorizontalScroll>
                  </div>
                  <Overlay
                    oId="1"
                    displayedOverlay={props.displayedOverlay}
                    closeOverlay={props.closeOverlay}
                    setDisplayedOverlay={props.setDisplayedOverlay}
                    slides={
                      [{
                        description : <span>Daily <i>Pratap</i>, special edition on Krishna (29 August 1929)</span>,
                        title : "Sample Title",
                        source : "Research Society of Pakistan, University of Punjab",
                        render : ()=> <img alt=<span>Daily <i>Pratap</i>, Krishna number</span> src={PratapCover} style={window.innerHeight > 675 ? {width: '70%', marginLeft: '15%'} : {width: '60%', marginLeft: '20%'}}></img>,
                      },
                      {
                        description : <span>Daily <i>Milap</i>, special edition on the spring festival of Basant (3 February 1930)</span>,
                        title : "Sample Title2",
                        source : "Research Society of Pakistan, University of Punjab",
                        render : ()=> <img alt="Daily Milap, Basant Number" src={MilapBasant} style={{width: '70%', marginLeft: '15%'}}></img>,
                      },
                      {
                        description : <span>Daily <i>Milap</i>, special edition on the festival of Holi (15 March 1930). The cartoon on the cover page shows Gandhi playing Holi with Lord Irwin</span>,
                        title : "Sample Title",
                        source : "Research Society of Pakistan, University of Punjab",
                        render : ()=> <img alt="Daily Milap, Holi edition" src={MilapHoli} style={window.innerHeight > 675 ? {width: '70%', marginLeft: '15%'} : {width: '60%', marginLeft: '20%'}}></img>,
                      },
                      {
                        description : <span>Daily <i>Milap</i>, special edition on Mountains (10 July 1928)</span>,
                        title : "Sample Title2",
                        source : "Research Society of Pakistan, University of Punjab",
                        render : ()=> <img alt="Daily Milap, Pahar (Mountain) edition" src={PaharNumber} style={window.innerHeight > 675 ? {width: '65%', marginLeft: '17.5%'} : {width: '55%', marginLeft: '22.5%'}}></img>,
                      },
                      {
                        description : <span>Daily <i>Pratap</i>, special edition on the martyrs of Hinduism (17 November 1929)</span>,
                        title : "Sample Title2",
                        source : "Research Society of Pakistan, University of Punjab",
                        render : ()=> <img alt="Daily Pratap, Martyrs edition" src={LLR_Pratap} style={{width: '65%', marginLeft: '17.5%'}}></img>,
                      },
                      {
                        description : <span>Daily <i>Bande Matram</i>, special edition on Lala Lajpat Rai (16 November 1929)</span>,
                        title : "Sample Title2",
                        source : "Research Society of Pakistan, University of Punjab",
                        render : ()=> <img alt="Daily Bande Matram, Lala Lajpat Rai edition" src={LLR_BM} style={{width: '70%', marginLeft: '15%'}}></img>,
                      }]
                    }
                  />
                </div>
              )}}
          </Slide>
        ),
        prev : "chapter3slide2",
        next : "chapter3slide4",
        menuInverted : false,
        hideChapterNumber: true,
        bottomBarMessage: '',
      },
      "chapter3slide4" : {
        slideName : "Poetry in newspapers",
        component : (
          <Slide bgImage={Slide10Back}>
            {(props) => {
              return (
                <div className={slideStyles.slideflex}>
                  <SlideHeading inverted title="Poetry in newspapers" desc="Despite the rising crescendo of communalism and politicizing of Hindu identity in Lahore, Urdu remained the idiomatic expression of literature, politics and socio-religious thought. Various specimens of Urdu poetry published in Hindu newspapers show how poets drew upon Perso-Islamic and Indic literary traditions, and a range of local and Persianized metaphors, to write poetry in remembrance of Hindu martyrs, celebration of Hindu festivals or simply in admiration of natural landscapes."/>
                  <div className={slideStyles.slideContent}>
                    <Layout layoutClassName="layout_flexed">
                      <div ref={props.addParallaxAndFadeRef(-4)} className={classNames(layoutStyles.layout_container, layoutStyles.container_33, layoutStyles.align_center, layoutStyles.justify_center)}>
                        <div id={imageStyles.Poem1} className={classNames(imageStyles.effected_image)} onClick={()=> props.setDisplayedOverlay(["1",0])}>
                          <img src={Poem1} alt="Poem" className={classNames(imageStyles.hover_effect)}/>
                        </div>
                      </div>
                      <div ref={props.addParallaxAndFadeRef(5)} className={classNames(layoutStyles.layout_container, layoutStyles.container_33, layoutStyles.align_center, layoutStyles.justify_center)}>
                        <div id={imageStyles.Poem2} className={classNames(imageStyles.effected_image)} onClick={()=> props.setDisplayedOverlay(["1",1])}>
                          <img src={Poem2} alt="Poem" className={classNames(imageStyles.hover_effect)}/>
                        </div>
                      </div>
                      <div ref={props.addParallaxAndFadeRef(-6)} className={classNames(layoutStyles.layout_container, layoutStyles.container_33, layoutStyles.align_center, layoutStyles.justify_center)}>
                        <div id={imageStyles.Poem3} className={classNames(imageStyles.effected_image)} onClick={()=> props.setDisplayedOverlay(["1",2])}>
                          <img src={Poem3} alt="Poem" className={classNames(imageStyles.hover_effect)}/>
                        </div>
                      </div>
                    </Layout>
                  </div>
                  <Overlay
                    oId="1"
                    displayedOverlay={props.displayedOverlay}
                    closeOverlay={props.closeOverlay}
                    setDisplayedOverlay={props.setDisplayedOverlay}
                    slides={
                      [{
                        description : "A poem celebrating the arrival of spring",
                        title : "Sample Title",
                        source : "Research Society of Pakistan, University of Punjab",
                        render : ()=> <img alt="Poem" src={Poem1} style={window.innerHeight > 675 ? {width: '70%', marginLeft: '15%'} : {width: '60%', marginLeft: '20%'}}></img>,
                      },
                      {
                        description : "A poem lamenting the status of Hindus",
                        title : "Sample Title",
                        source : "Research Society of Pakistan, University of Punjab",
                        render : ()=> <img alt="Poem" src={Poem2} style={window.innerHeight > 675 ? {width: '90%', marginLeft: '5%'} : {width: '80%', marginLeft: '10%'}}></img>,
                      },
                      {
                        description : "A poetic tribute to Krishan",
                        title : "Sample Title",
                        source : "Research Society of Pakistan, University of Punjab",
                        render : ()=> <img alt="Poem" src={Poem3} style={window.innerHeight > 675 ? {width: '45%', marginLeft: '27.5%'} : {width: '40%', marginLeft: '30%'}}></img>,
                      }]
                    }
                  />
                </div>
              )}}
          </Slide>
        ),
        prev : "chapter3slide3",
        next : "credits",
        menuInverted : true,
        bottomBarMessage: 'Click images to enlarge'
      },
    }
  },
  "credits" : {
    name : "Imagining Lahore as a Hindu City",
    slides : {
      "credits" : {
        component : (
          <Slide bgImage={ProjectCreditsBack}>
            {(props) => {
              return (
                <div className={slideStyles.slideflex} ref={props.addParallaxAndFadeRef(10)}>
                  <div className={slideStyles.slideContent}>
                    <ProjectCredits
                      disclaimer=<span>These projects are based on research conducted by students for the course <i>Walking in the City: Mapping Everyday Life in Lahore.</i></span>
                      projectName="Imagining Lahore as a Hindu City"
                      studentNames="Nawal Fatima Rai, Asiya Syed, Haleema Aurangzeb Abbasi, Maryam Ahmad Kiyani, Maryam Sami Khan, Tehreem Anwar and Zainab Shuja"
                      supervisor={{name: 'Dr Ali Usman Qasmi', desig: 'Associate Professor (History), Department of Humanities and Social Sciences, LUMS'}}
                    />
                  </div>
                </div>
              )}}
          </Slide>
        ),
        prev : "chapter3slide4",
        next : "credits",
        menuInverted : true,
        hideChapterNumber: true,
        bottomBarMessage: '',
        hideVerticalNav: true
      },
    }
  },
}




function topoSortSlides(slides){
  const visitedSet = {};
  const orderArr = [];
  const allSlidesMap = {};

  for(let i in slides){
    for(let j in slides[i].slides){
      allSlidesMap[j] = slides[i].slides[j];
    }
  }

  Object.keys(allSlidesMap).forEach((s)=>{
    topoSortNode(s, allSlidesMap, orderArr, visitedSet)
  })
  return orderArr.reverse().reduce((acc,d,i)=>{
    acc[d] = i;
    return acc;
  },{});
}

function topoSortNode(nodename,nodes, orderArr, visitedSet){
  if(nodename === null || visitedSet[nodename]){
    return orderArr;
  }

  visitedSet[nodename] = true;
  topoSortNode(nodes[nodename].next, nodes, orderArr, visitedSet);
  orderArr.push(nodename);

  return orderArr;
}

const slideOrder = topoSortSlides(slideMap)

const chapterArr = ["chapter1","chapter2","chapter3"];

const mobileSlideMap = {
  "home" : {
    name: "Project Home",
    component : (
      <MobileSlide>
        {
          (props)=>{
            return (
              <ProjectTitleMobile
                image={ProjectTitleBack}
                title="Imagining Lahore as a Hindu City"
                description=<span>The everyday life of Hindus in pre-partition Lahore, their politics, religious movements and literature</span>
                to="chapter1"
              />
            )
          }
        }
      </MobileSlide>
    ),
    menuInverted: false,
  },
  "chapter1" : {
    name: "Chapter 1: Background",
    component : (
      <MobileSlide>
        {(props) => {
          return (
            <div>
              <ChapterTitleMobile
                inverted
                image={Chapter1Title}
                chapter_number="1"
                chapter_title="Religious Movements"
                images={[
                  {image: Agnihotri, id: chTStyles.Agnihotri},
                  {image: HansRaj, id: chTStyles.HansRaj}
                ]}
                gradient='linear-gradient(to bottom, rgba(10, 89, 159,0) 0%,rgba(10, 89, 159,0.48) 48%,rgba(10, 89, 159,0.97) 97%,rgba(10, 89, 159 ,1) 100%)'
              />
              <MobileSectionTitle
                image={Slide1Back}
                title="The Rise of Arya Samaj"
                chapterNumber="CHAPTER 1: RELIGIOUS MOVEMENTS"
                note="Pictures in the chapter can be clicked for expanded view"
              />
              <div className={classNames(mobileStyles.mobile_layout, mobileStyles.mobile_layout_100, mobileStyles.increased_padded_top, mobileStyles.increased_padded_bottom)}>
                <p className={mobileStyles.mobilePara}>In the late 19th century, the city of Lahore was at the center of a battle for Hindu identity. Swami Dayananda had established the Arya Samaj in Bombay in 1875 , but it was in Lahore that his ideas inspired a large scale movement. Under the influence of Dayananda’s teachings, young Punjabi Hindus abandoned Brahmo ideals and several traditional Hindu practices.</p>
                <p className={mobileStyles.mobilePara}>With a mandir on every corner and a rising awakening of a vast population of Punjabi Hindus, Lahore was the perfect city for Arya Samaj’s cultural and theological revolution. But the Samaj was not working in a religious or political vacuum. Lahore was a bastion of traditional Hinduism and there was a great deal of resistance to Arya Samaj’s reformatory zeal.</p>
              </div>

              <div className={classNames(mobileStyles.mobile_layout, mobileStyles.flexed_container, mobileStyles.increased_padded_bottom)}>
                <div className={mobileStyles.mobile_layout_50}>
                  <img onClick={()=> props.setDisplayedOverlay(["1",0])} id={imageStyles.SwamiDyan} src={SwamiDyan}  alt="Ilm Din's funeral" className={mobileStyles.shadowImage}/>
                  <p id={imageStyles.SwamiDyan} className={mobileStyles.mobileImageDesc}>A portrait of Swami Dayananda, the founder of Arya Samaj</p>
                </div>
                <div className={mobileStyles.mobile_layout_50}>
                  <img onClick={()=> props.setDisplayedOverlay(["1",1])} id={imageStyles.Lajpat_AS1} src={Lajpat_AS1}  alt="Coverage of Ilm Din’s funeral in Inqilab" className={mobileStyles.shadowImage}/>
                  <p id={imageStyles.Lajpat_AS1} className={mobileStyles.mobileImageDesc}>Book on the Arya Samaj by Lala Lajpat Rai, a prominent Hindu leader from Lahore</p>
                </div>
              </div>

              <MobileSectionTitle
                image={Chapter1Title}
                inverted
                title="Punjabi Hindus battle for Identity"
                chapterNumber="CHAPTER 1: RELIGIOUS MOVEMENTS"
                note="Pictures in the chapter can be clicked for expanded view"
              />

              <div className={classNames(mobileStyles.mobile_layout, mobileStyles.mobile_layout_100, mobileStyles.increased_padded_top, mobileStyles.increased_padded_bottom)}>
                <p className={mobileStyles.mobilePara}>By the 1890s, the Punjab had witnessed a steep rise in the economic fortunes of the mercantile Hindu community and a professional class of doctors, engineers and educationists. The impact of colonial modernity had transformed Lahore into a major centre for education, trade and cultural activities. These changes were impacting the worldview of the young Hindu students and professionals, and made them question some of the traditionally held religious views. It is no wonder then that a number of religious reform movements emerged during the late nineteenth century with Lahore as the focus of these polemical debates and exchange of ideas.</p>
              </div>

              <MobileSectionTitle
                image={Slide2Back}
                inverted
                title="D.A.V Schools and Colleges"
                chapterNumber="CHAPTER 1: RELIGIOUS MOVEMENTS"
                note="Pictures in the chapter can be clicked for expanded view"
              />

              <div className={classNames(mobileStyles.mobile_layout, mobileStyles.mobile_layout_100, mobileStyles.increased_padded_top, mobileStyles.increased_padded_bottom)}>
                <p className={mobileStyles.mobilePara}>The Arya Samaj initially lacked any central organization and each Samaj was independent. Dayananda’s death led to disintegration, but also to a burst of energy, as numerous groups sought to honour their departed teacher. They were nearly unanimous in the desire to establish a school that would impart his Vedic form of Hinduism, and thus be safe from Christian influence. The Lahore Samaj drafted plans for this institution and on 6 December 1883 set up a subcommittee to raise funds. Initially they were quite successful, but by 1884 enthusiasm for the project had waned. In 1885 Lala Hans Raj promised to serve as the principal of the school without pay, which rekindled the enthusiasm for founding the college. He, along with Gurudatta Vidhyarthi, finally established the Dayanand Anglo-Vedic Schools System (D.A.V.) in Lahore in June 1886.</p>
              </div>

              <div className={classNames(mobileStyles.mobile_layout, mobileStyles.mobile_layout_100)}>
                <div className={mobileStyles.galleryChevrons_container}>
                  <div>
                    <p className={slideStyles.galleryTitle}>Gallery</p>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center'}}>
                    <div onClick={props.moveBackward(1)} className={slideStyles.prevSlideChev}><MdChevronLeft/></div>
                    <div onClick={props.moveForward(1)} className={slideStyles.nextSlideChev}><MdChevronRight/></div>
                  </div>
                </div>
              </div>

              <div className={classNames(mobileStyles.mobile_layout, mobileStyles.mobile_layout_100, mobileStyles.padded_top, mobileStyles.increased_padded_bottom)}>
                <HorizontalScroll
                  scrollContainerRef={props.addScrollRef(1)}
                  xPos={props.xPos[1]}>
                    <div className={classNames(slideStyles.galleryItem_container, mobileStyles.galleryItem_33)}>
                      <img onClick={()=> props.setDisplayedOverlay(["2",0])} src={DAVPoem} alt="A poem paying tribute to the D.A.V College is published in Lahore’s Urdu Daily, Milap" className={classNames(mobileStyles.shadowImage, imageStyles.full_gallery)}/>
                    </div>
                    <div className={classNames(slideStyles.galleryItem_container, mobileStyles.galleryItem_33)}>
                      <img onClick={()=> props.setDisplayedOverlay(["2",1])} src={IC} alt="Islamia College, Civil Lines Lahore" className={classNames(mobileStyles.shadowImage, imageStyles.full_gallery)}/>
                    </div>
                    <div className={classNames(slideStyles.galleryItem_container, mobileStyles.galleryItem_33)}>
                      <img onClick={()=> props.setDisplayedOverlay(["2",2])} src={HansRajBG} alt="Mahatma Hans Raj" className={classNames(mobileStyles.shadowImage, imageStyles.full_gallery)}/>
                    </div>
                    <div className={classNames(slideStyles.galleryItem_container, mobileStyles.galleryItem_33)}>
                      <img onClick={()=> props.setDisplayedOverlay(["2",3])} src={Gurudatta} alt="Pandit Guru Datta Vidhyarthi" className={classNames(mobileStyles.shadowImage, imageStyles.full_gallery)}/>
                    </div>
                </HorizontalScroll>
              </div>

              <div className={classNames(mobileStyles.mobile_layout, mobileStyles.mobile_layout_100, mobileStyles.increased_padded_top, mobileStyles.increased_padded_bottom)}>
                <p className={mobileStyles.mobilePara}>Within one month of its founding, 550 students had been enrolled in the newly established Dayananda Anglo-Vedic College. On 18 May 1889, the Punjab University also granted affiliation to the college. The D.A.V High School and College taught a curriculum similar to the government schools, but did so without government support or the participation of Englishmen serving as faculty. The Lahore’s School later became the model for other Arya Samajis as local groups established elementary and secondary schools throughout the Punjab.</p>
              </div>

              <div className={classNames(mobileStyles.mobile_layout, mobileStyles.mobile_layout_100)}>
                <div className={mobileStyles.galleryChevrons_container}>
                  <div>
                    <p className={slideStyles.galleryTitle}>Gallery</p>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center'}}>
                    <div onClick={props.moveBackward(2)} className={slideStyles.prevSlideChev}><MdChevronLeft/></div>
                    <div onClick={props.moveForward(2)} className={slideStyles.nextSlideChev}><MdChevronRight/></div>
                  </div>
                </div>
              </div>

              <div className={classNames(mobileStyles.mobile_layout, mobileStyles.mobile_layout_100, mobileStyles.padded_top, mobileStyles.increased_padded_bottom)}>
                <HorizontalScroll
                  scrollContainerRef={props.addScrollRef(2)}
                  xPos={props.xPos[2]}>
                    <div className={classNames(slideStyles.galleryItem_container, mobileStyles.galleryItem_40)}>
                      <img onClick={()=> props.setDisplayedOverlay(["3",0])} src={DAVStaff} alt="DAV College Old Staff, Lahore" className={classNames(mobileStyles.shadowImage, imageStyles.full_gallery)}/>
                    </div>
                    <div className={classNames(slideStyles.galleryItem_container, mobileStyles.galleryItem_40)}>
                      <img onClick={()=> props.setDisplayedOverlay(["3",1])} src={DAVLahore} alt="DAV College Lahore" className={classNames(mobileStyles.shadowImage, imageStyles.full_gallery)}/>
                    </div>
                    <div className={classNames(slideStyles.galleryItem_container, mobileStyles.galleryItem_40)}>
                      <img onClick={()=> props.setDisplayedOverlay(["3",2])} src={DAVMultan} alt="DAV College Multan" className={classNames(mobileStyles.shadowImage, imageStyles.full_gallery)}/>
                    </div>
                    <div className={classNames(slideStyles.galleryItem_container, mobileStyles.galleryItem_40)}>
                      <img onClick={()=> props.setDisplayedOverlay(["3",3])} alt="DAV College Multan" className={classNames(mobileStyles.shadowImage, imageStyles.full_gallery)} src={DAVPindi}/>
                    </div>
                </HorizontalScroll>
              </div>

              <MobileSectionTitle
                image={Slide3Back}
                inverted
                title="Arya Samaj in Press and Publications"
                chapterNumber="CHAPTER 1: RELIGIOUS MOVEMENTS"
                note="Pictures in the chapter can be clicked for expanded view"
              />

              <div className={classNames(mobileStyles.mobile_layout, mobileStyles.mobile_layout_100, mobileStyles.padded_top)}>
                <div className={mobileStyles.galleryChevrons_container}>
                  <div>
                    <p className={slideStyles.galleryTitle}>Gallery</p>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center'}}>
                    <div onClick={props.moveBackward(3)} className={slideStyles.prevSlideChev}><MdChevronLeft/></div>
                    <div onClick={props.moveForward(3)} className={slideStyles.nextSlideChev}><MdChevronRight/></div>
                  </div>
                </div>
              </div>

              <div className={classNames(mobileStyles.mobile_layout, mobileStyles.mobile_layout_100, mobileStyles.padded_top, mobileStyles.increased_padded_bottom)}>
                <HorizontalScroll
                  scrollContainerRef={props.addScrollRef(3)}
                  xPos={props.xPos[3]}>
                    <div className={classNames(slideStyles.galleryItem_container, mobileStyles.galleryItem_33)}>
                      <img onClick={()=> props.setDisplayedOverlay(["4",0])} alt="English Translation of Swami Dayananda’s Satyarth Prakash" className={classNames(mobileStyles.shadowImage, imageStyles.full_gallery)} src={ASPrint1}/>
                    </div>
                    <div className={classNames(slideStyles.galleryItem_container, mobileStyles.galleryItem_33)}>
                      <img onClick={()=> props.setDisplayedOverlay(["4",1])} alt="A biography of Pandit Guru Datta" className={classNames(mobileStyles.shadowImage, imageStyles.full_gallery)} src={ASPrint2}/>
                    </div>
                    <div className={classNames(slideStyles.galleryItem_container, mobileStyles.galleryItem_33_portrait)}>
                      <img onClick={()=> props.setDisplayedOverlay(["4",2])} alt="Martyrs of Arya Samaj" className={classNames(mobileStyles.shadowImage, imageStyles.full_gallery)} src={ASPrint3}/>
                    </div>
                    <div className={classNames(slideStyles.galleryItem_container, mobileStyles.galleryItem_33)}>
                      <img onClick={()=> props.setDisplayedOverlay(["4",3])} alt="The Best Books of Hindi" className={classNames(mobileStyles.shadowImage, imageStyles.full_gallery)} src={ASPrint4}/>
                    </div>
                    <div className={classNames(slideStyles.galleryItem_container, mobileStyles.galleryItem_33)}>
                      <img onClick={()=> props.setDisplayedOverlay(["4",4])} alt="Arya Patrika Advertisement" className={classNames(mobileStyles.shadowImage, imageStyles.full_gallery)} src={ASPrint5}/>
                    </div>
                    <div className={classNames(slideStyles.galleryItem_container, mobileStyles.galleryItem_33)}>
                      <img onClick={()=> props.setDisplayedOverlay(["4",5])} alt="Arya Samaj and Politics" className={classNames(mobileStyles.shadowImage, imageStyles.full_gallery)} src={ASPrint6}/>
                    </div>
                    <div className={classNames(slideStyles.galleryItem_container, mobileStyles.galleryItem_33)}>
                      <img onClick={()=> props.setDisplayedOverlay(["4",6])} alt="8th anniversary of the Lahore Arya Samaj" className={classNames(mobileStyles.shadowImage, imageStyles.full_gallery)} src={ASPrint7}/>
                    </div>
                    <div className={classNames(slideStyles.galleryItem_container, mobileStyles.galleryItem_40)}>
                      <img onClick={()=> props.setDisplayedOverlay(["4",7])} alt="Article" className={classNames(mobileStyles.shadowImage, imageStyles.full_gallery)} src={ASPrint8}/>
                    </div>
                </HorizontalScroll>
              </div>

              <MobileSectionTitle
                image={Slide1Back}
                title="Brahmo Samaj"
                chapterNumber="CHAPTER 1: RELIGIOUS MOVEMENTS"
                note="Pictures in the chapter can be clicked for expanded view"
              />

              <div className={classNames(mobileStyles.mobile_layout, mobileStyles.mobile_layout_100, mobileStyles.increased_padded_top, mobileStyles.increased_padded_bottom)}>
                <p className={mobileStyles.mobilePara}>While the Arya Samaj was attempting to make inroads into what it meant to be a Hindu and leading a national movement out of Lahore, it was opposed by various other religious and political organizations. The Brahmo Samaj, for instance, was a reformist movement which advocated a religious ideology that was heavily influenced by the ideas of colonial modernity and rationality. One of the men leading it was Ruchi Ram Sahini, a Hindu scientist and educationist. Initially, he was strongly influenced by Pandit Shiv Narain Agnihotri, his teacher at Government High School in Lahore, and Pandit Navin Chandra Rai, who started the Brahmo Samaj in Lahore. A critic of traditional Hindu practices such as the caste system and idol worship, Ruchi Ram had been prominent as a Hindu leader in Lahore before the schism between the Arya and Brahmo Samaj widened.</p>
              </div>

              <div id={mobileStyles.hideBrahmoGall} className={classNames(mobileStyles.mobile_layout, mobileStyles.mobile_layout_100, mobileStyles.padded_top)}>
                <div className={mobileStyles.galleryChevrons_container}>
                  <div>
                    <p className={slideStyles.galleryTitle}>Gallery</p>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center'}}>
                    <div onClick={props.moveBackward(4)} className={slideStyles.prevSlideChev}><MdChevronLeft/></div>
                    <div onClick={props.moveForward(4)} className={slideStyles.nextSlideChev}><MdChevronRight/></div>
                  </div>
                </div>
              </div>

              <div className={classNames(mobileStyles.mobile_layout, mobileStyles.mobile_layout_100, mobileStyles.padded_top, mobileStyles.increased_padded_bottom)}>
                <HorizontalScroll
                  scrollContainerRef={props.addScrollRef(4)}
                  xPos={props.xPos[4]}>
                    <div className={classNames(slideStyles.galleryItem_container, mobileStyles.galleryItem_33)}>
                      <img onClick={()=> props.setDisplayedOverlay(["5",0])} src={MOBrahmo} alt="A published lecture on Brahmo Samaj" className={classNames(mobileStyles.shadowImage, imageStyles.full_gallery)}/>
                    </div>
                    <div className={classNames(slideStyles.galleryItem_container, mobileStyles.galleryItem_33)}>
                      <img onClick={()=> props.setDisplayedOverlay(["5",1])} src={AgnihotriJP} alt="Pandit Shiv Narain Agnihotri" className={classNames(mobileStyles.shadowImage, imageStyles.full_gallery)}/>
                    </div>
                    <div className={classNames(slideStyles.galleryItem_container, mobileStyles.galleryItem_33_portrait)}>
                      <img onClick={()=> props.setDisplayedOverlay(["5",2])} src={RuchiRam} alt="Ruchi Ram Sahini" className={classNames(mobileStyles.shadowImage, imageStyles.full_gallery)}/>
                    </div>
                </HorizontalScroll>
              </div>

              <MobileSectionTitle
                image={Slide3Back}
                inverted
                title="The Annihilation of Caste"
                chapterNumber="CHAPTER 1: RELIGIOUS MOVEMENTS"
                note="Pictures in the chapter can be clicked for expanded view"
              />

              <div className={classNames(mobileStyles.mobile_layout, mobileStyles.mobile_layout_100, mobileStyles.increased_padded_top, mobileStyles.increased_padded_bottom)}>
                <p className={mobileStyles.mobilePara}>The intra-Hindu debates were not limited to polemical exchanges between high caste men. It certainly involved debates by women as well on such issues as widow remarriage, underage marriages and so on. Also, caste politics was a major concern in Hindu religious polemics.</p>
                <p className={mobileStyles.mobilePara}>In 1935, B. R. Ambedkar – the charismatic leader of Dalits in British India – was invited to deliver a lecture by a Lahore-based organization – Jat-Pat Todak Mandal. Operating out of Gokul Chand Narang’s palatial house on 5 Montgomery Road, the organization was led by affluent and ‘enlightened’ Hindus of Lahore critical of the caste system.</p>
                <p className={mobileStyles.mobilePara}>However, when the executive committee of the Mandal came to know about the contents of Ambedkar’s lecture – especially the part where he talked of the impossibility “to break Caste without annihilating the religious notions on which it, the Caste system, is founded", an adverse reaction followed. After an exchange of letters between the organizers and Ambedkar, the event was eventually cancelled. The lecture was later published under the title of <i>The Annihilation of Caste</i>, and has since become an iconic text in the struggle of Dalits for equality and fight against caste oppression.</p>
              </div>

              <div id={mobileStyles.hideCasteGall} className={classNames(mobileStyles.mobile_layout, mobileStyles.mobile_layout_100, mobileStyles.padded_top)}>
                <div className={mobileStyles.galleryChevrons_container}>
                  <div>
                    <p className={slideStyles.galleryTitle}>Gallery</p>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center'}}>
                    <div onClick={props.moveBackward(5)} className={slideStyles.prevSlideChev}><MdChevronLeft/></div>
                    <div onClick={props.moveForward(5)} className={slideStyles.nextSlideChev}><MdChevronRight/></div>
                  </div>
                </div>
              </div>

              <div className={classNames(mobileStyles.mobile_layout, mobileStyles.mobile_layout_100, mobileStyles.padded_top, mobileStyles.increased_padded_bottom)}>
                <HorizontalScroll
                  scrollContainerRef={props.addScrollRef(5)}
                  xPos={props.xPos[5]}>
                    <div className={classNames(slideStyles.galleryItem_container, mobileStyles.galleryItem_33)}>
                      <img onClick={()=> props.setDisplayedOverlay(["6",0])} src={AOCaste} alt="The speech prepared by B.R.Ambedkar (published)" className={classNames(mobileStyles.shadowImage, imageStyles.full_gallery)}/>
                    </div>
                    <div className={classNames(slideStyles.galleryItem_container, mobileStyles.galleryItem_33)}>
                      <img onClick={()=> props.setDisplayedOverlay(["6",1])} src={Ambedkar} alt="Dr. B.R.Ambedkar" className={classNames(mobileStyles.shadowImage, imageStyles.full_gallery)}/>
                    </div>
                    <div className={classNames(slideStyles.galleryItem_container, mobileStyles.galleryItem_50)}>
                      <img onClick={()=> props.setDisplayedOverlay(["6",2])} src={HinduPeeche} alt="Gokul Chand Narang" className={classNames(mobileStyles.shadowImage, imageStyles.full_gallery)}/>
                    </div>
                </HorizontalScroll>
              </div>

              <MobileSectionTitle
                image={Slide1Back}
                title="Religious Sites"
                chapterNumber="CHAPTER 1: RELIGIOUS MOVEMENTS"
                note="Pictures in the chapter can be clicked for expanded view"
              />

              <div className={classNames(mobileStyles.mobile_layout, mobileStyles.mobile_layout_100, mobileStyles.increased_padded_top, mobileStyles.increased_padded_bottom)}>
                <p className={mobileStyles.mobilePara}>A few photographs of former sites of importance for traditional Hinduism as well as reformist Hindu movements</p>
              </div>

              <div className={classNames(mobileStyles.mobile_layout, mobileStyles.flexed_container, mobileStyles.increased_padded_bottom, mobileStyles.increased_padded_top)}>
                <div className={mobileStyles.mobile_layout_33}>
                  <img id={imageStyles.BSMandir} onClick={()=> props.setDisplayedOverlay(["7",0])} src={BrahmoSamajMandir} alt="Brahmo Samaj Mandir" className={mobileStyles.shadowImage}/>
                  <p id={imageStyles.BSMandir} className={mobileStyles.mobileImageDesc}>Brahmo Samaj Mandir</p>
                </div>
                <div className={mobileStyles.mobile_layout_33}>
                  <img id={imageStyles.SDMandir} onClick={()=> props.setDisplayedOverlay(["7",1])} src={SDharam} alt="Sanatan Dharam Mandir" className={mobileStyles.shadowImage}/>
                  <p id={imageStyles.SDMandir} className={mobileStyles.mobileImageDesc}>Sanatan Dharam Mandir</p>
                </div>
                <div className={mobileStyles.mobile_layout_33}>
                  <img id={imageStyles.DSMandir} onClick={()=> props.setDisplayedOverlay(["7",2])} src={DevSamajMandir} alt="Dev Samaj Mandir" className={mobileStyles.shadowImage}/>
                  <p id={imageStyles.DSMandir} className={mobileStyles.mobileImageDesc}>Dev Samaj Mandir</p>
                </div>
              </div>
              <NextChapterTitle
                inverted
                image={Chapter2Title}
                title="Politics"
                nextChapter="chapter2"
                prevChapter="home"
              />

              <Overlay
                oId="1"
                displayedOverlay={props.displayedOverlay}
                closeOverlay={props.closeOverlay}
                setDisplayedOverlay={props.setDisplayedOverlay}
                slides={
                  [
                    {
                      description : "A portrait of Swami Dayananda, the founder of the Hindu reformist movement Arya",
                      title : "Sample Title",
                      source : "archive.org",
                      render : ()=> <img alt="A portrait of Swami Dayananda, the founder of Arya Samaj" src={SwamiDyan} id={overlay_styles.SwamiDyan}></img>,
                    },
                    {
                      description : "Book on the Arya Samaj by Lala Lajpat Rai, a prominent Hindu leader from Lahore",
                      title : "Sample Title",
                      source : "archive.org",
                      render : ()=> <img alt="Title page of a book on Arya Samaj by Lala Lajpat Rai" src={Lajpat_AS1} id={overlay_styles.Lajpat_AS1}></img>,
                    }
                  ]
                }
              />

              <Overlay
                oId="2"
                displayedOverlay={props.displayedOverlay}
                closeOverlay={props.closeOverlay}
                setDisplayedOverlay={props.setDisplayedOverlay}
                slides={
                  [
                    {
                      description : <span>A poem paying tribute to the D.A.V College is published in Lahore’s Urdu Daily, <i>Milap</i></span>,
                      title : "Sample Title",
                      source : "Research Society of Pakistan, University of Punjab",
                      render : ()=> <img alt="A poem paying tribute to the D.A.V College is published in Lahore’s Urdu Daily, Milap" src={DAVPoem} id={overlay_styles.DAVPoem}></img>,
                    },
                    {
                      description : <span>D.A.V College Lahore's Campus was converted to Islamia College, Civil Lines, Lahore after partition</span>,
                      title : "Sample Title",
                      source : "",
                      render : ()=> <img alt="Islamia College, Civil Lines Lahore" src={IC} id={overlay_styles.IC}></img>,
                    },
                    {
                      description : <span>Also known as Mahatama Hansraj, Lala Hans Raj was amongst the prominent leaders of the Arya Samaj in Lahore. He joined the Arya Samaj while a student at Lahore’s Government College. He founded, along with Gurudatta Vidhyarthi, the Dayanand Anglo-Vedic Schools System (D.A.V.) in Lahore in 1886. Hansraj served as the principal of the D.A.V. College for 25 years, and served as the president of the provincial Arya Pradeshik Pratinidhi Sabha. He died in Lahore on 14 November 1938.</span>,
                      title : "Sample Title",
                      source : "Research Society of Pakistan, University of Punjab",
                      render : ()=> <img alt="Mahatma Hans Raj" src={HansRajBG} id={overlay_styles.HansRajBG}></img>,
                    },
                    {
                      description : <span>Pandit Vidyarth was a prominent leader of the Arya Samaj in Multan, and later moved to Lahore after Dayananda’s death. He was born to a wealthy Arora family in Multan. He received his BA and MA degrees at the Government College Lahore. When the news was received of Dayananda’s illness at Ajmer, the Arya Samaj at Lahore chose him - only nineteen years old at that time - and Lala Kivan Das to go to Ajmer to tend to Swami Dayanand. After returning to Lahore, he actively got involved with the Arya Samaj Chapter in Lahore. Along with others - such as Pandit Lekh Ram and Lala Munshi Ram - Datta wanted the DAV curriculum to focus on Vedic ideology and the study of Sanskrit. Such an approach was contrary to the moderate faction of the Arya Samaj who wished to provide English education to Hindus in an environment where their religious outlook was preserved while they received higher education relevant to the needs of the modern world. By 1893, the Arya Samaj was formally divided. The conservatives (led by Pandit Guru Datta) gained control over most of the local Arya Samaj chapters and the Arya Pratinidhi Sabha, Punjab. The moderates kept their hold on to the Managing Committee and the DAV school.</span>,
                      title : "Sample Title",
                      source : "Wikipedia",
                      render : ()=> <img alt="Pandit Guru Datta Vidhyarthi" src={Gurudatta} id={overlay_styles.Gurudatta}></img>,
                    }

                  ]
                }
              />

              <Overlay
                oId="3"
                displayedOverlay={props.displayedOverlay}
                closeOverlay={props.closeOverlay}
                setDisplayedOverlay={props.setDisplayedOverlay}
                slides={
                  [
                    {
                      description : <span>D.A.V College Lahore (Published in Daily <i>Milap</i> Lahore)</span>,
                      title : "",
                      source : "Research Society of Pakistan, University of Punjab",
                      render : ()=> <img alt="DAV College Old Staff, Lahore" src={DAVStaff} id={overlay_styles.DAVStaff}></img>
                    },
                    {
                      description : <span>D.A.V College Lahore (Published in Daily <i>Milap</i> Lahore)</span>,
                      title : "",
                      source : "Research Society of Pakistan, University of Punjab",
                      render : ()=> <img alt="DAV College Lahore" src={DAVLahore} id={overlay_styles.DAVLahore}></img>
                    },
                    {
                      description : <span>D.A.V College Multan (Published in Daily <i>Milap</i> Lahore)</span>,
                      title : "",
                      source : "Research Society of Pakistan, University of Punjab",
                      render : ()=> <img alt="DAV College Multan" src={DAVMultan} id={overlay_styles.DAVMultan}></img>
                    },
                    {
                      description : <span>D.A.V College Rawalpindi (Published in Daily <i>Milap</i> Lahore)</span>,
                      title : "",
                      source : "Research Society of Pakistan, University of Punjab",
                      render : ()=> <img alt="DAV College Rawalpindi" src={DAVPindi} id={overlay_styles.DAVPindi}></img>
                    }
                  ]
                }
              />

              <Overlay
                oId="4"
                displayedOverlay={props.displayedOverlay}
                closeOverlay={props.closeOverlay}
                setDisplayedOverlay={props.setDisplayedOverlay}
                slides={
                  [{
                    description : <div>
                      <p><span>An English Translation of Swami Dayananda’s <i>Satyarth Prakash</i> published in Lahore (1903)</span></p>
                      <p><a href="https://archive.org/details/englishtranslati00daya/page/n3/mode/2up" target="_blank">Scanned Copy</a></p>
                    </div>,
                    title : "Sample Title",
                    source : "archive.org",
                    render : ()=> <img alt="English Translation of Swami Dayananda’s Satyarth Prakash" src={ASPrint1} id={overlay_styles.ASPrint1}></img>,
                  },
                  {
                    description : <div>
                      <p>
                        <span>A biography of Pandit Guru Datta, one of the founders of the D.A.V School published in Lahore (1902)</span>
                      </p>
                      <p><a href="https://archive.org/details/worksofthepandit00vidyuoft/page/n3/mode/2up" target="_blank">Scanned Copy</a></p>
                    </div>
                    ,
                    title : "Sample Title",
                    source : "archive.org",
                    render : ()=> <img alt="A biography of Pandit Guru Datta" src={ASPrint2} id={overlay_styles.ASPrint2}></img>,
                  },
                  {
                    description : <span>Hindu newspaper <i>Milap</i> pays tribute to figures like Pandit Lekh Ram, Swami Shraddhanand and Rajpal who had been killed in Punjab because of communal violence</span>,
                    title : "Sample Title2",
                    source : "Research Society of Pakistan, University of Punjab",
                    render : ()=> <img alt="Martyrs of Arya Samaj" src={ASPrint3} id={overlay_styles.ASPrint3}></img>,
                  },
                  {
                    description : <span>A newspaper advertisement titled <i>‘The Best Books of Hindi’</i> recommends titles published by the infamous Rajpal publishers</span>,
                    title : "Sample Title2",
                    source : "Research Society of Pakistan, University of Punjab",
                    render : ()=> <img alt="The Best Books of Hindi" src={ASPrint4} id={overlay_styles.ASPrint4}></img>,
                  },
                  {
                    description : <span>An advertisement for the <i>Arya Patrika</i>, a weekly publication of the Arya Pratinidhi Sabha, Punjab (1908)</span>,
                    title : "",
                    source : "archive.org",
                    render : ()=> <img alt="Arya Patrika Advertisement" src={ASPrint5} id={overlay_styles.ASPrint5}></img>,
                  },{
                    description : <div>
                      <p>
                        <span><i>Arya Samaj and Politics</i>, a lecture delivered by Mahatma Munshi Ram on the 31st anniversary of the Lahore Arya Samaj (1908)</span>
                      </p>
                      <p><a href="https://archive.org/details/aryasamajandpoli00rammuoft/page/n3/mode/2up" target="_blank">Scanned Copy</a></p>
                    </div>
                    ,
                    title : "",
                    source : "archive.org",
                    render : ()=> <img alt="Arya Samaj and Politics" src={ASPrint6} id={overlay_styles.ASPrint6}></img>,
                  },{
                    description : <span>A newspaper story covering the proceedings of the 8th anniversary of the Lahore Arya Samaj</span>,
                    title : "Sample Title2",
                    source : "https://samardeepnotes.blogspot.com",
                    render : ()=> <img alt="8th anniversary of the Lahore Arya Samaj" src={ASPrint7} id={overlay_styles.ASPrint7}></img>,
                  },{
                    description : <span>A newspaper article on Arya Samaj’s claim that only the Samaj has the ideological strength to address the caste issue in Hindu religious traditions</span>,
                    title : "",
                    source : "Research Society of Pakistan, University of Punjab",
                    render : ()=> <img alt="Article" src={ASPrint8} id={overlay_styles.ASPrint8}></img>,
                  }]
                }
              />

              <Overlay
                oId="5"
                displayedOverlay={props.displayedOverlay}
                closeOverlay={props.closeOverlay}
                setDisplayedOverlay={props.setDisplayedOverlay}
                slides={
                  [{
                    description : <div>
                      <p>
                        <span><i>The Message of Brahmo Samaj</i> - a lecture by Kashi Ram published in Lahore (1906)</span>
                      </p>
                      <p><a href="https://archive.org/details/messageofbrahmos00kash/page/n1/mode/2up" target="_blank">Scanned Copy</a></p>
                    </div>
                    ,
                    title : "Sample Title",
                    source : "archive.org",
                    render : ()=> <img alt="A published lecture on Brahmo Samaj" src={MOBrahmo} id={overlay_styles.MOBrahmo}></img>,
                  },
                  {
                    description : <span>An ardent Brahmo and an enthusiastic social reformer, Agnihotri was a key figure in the religious polemics taking place in Lahore. Usually, he conducted the weekly Divine Service in the Brahmo Mandir in Lahore. In 1882, Agnihotri gave up his appointment in the Educational Department and publicly accepted the role of a <i>sanyasi</i> at the Brahmo Mandir in Lahore. His name was changed by Pandit Navin Chandrs Rai to Swami Satyanand Agnihotri. Sahini notes that this was the first occasion when an English-educated person had given up a well-paid post in order to devote his life to public preaching. Agnihotri formed a new centre for his religious activities, called the Dev Samaj, which was another place for preaching Brahmoism with greater zeal than was possible in the neutral Brahmo Samaj. He also published his inspiring work, <i>Ruhani Zindagi</i> (Spiritual Life), copies of which were to be found in many Brahmo households. In 1892, he announced himself as the ‘Deva Guru Bhagwan’, lost complete faith in God, called his religion ‘Science grounded’, and adopted all the symbols of orthodox Hinduism that he had so enthusiastically discarded upon his joining the Brahmo Samaj.
                    </span>,
                    title : "Sample Title",
                    source : "Wikipedia",
                    render : ()=> <img alt="Pandit Shiv Narain Agnihotri" src={AgnihotriJP} id={overlay_styles.AgnihotriJP}></img>,
                  },
                  {
                    description : "Admitted as a Brahmo Samaj sympathizer within a year or two after his arrival at Lahore, Sahini established a Young Men’s Religious Association in conjunction with Bhai Kashi Ram, which used to meet weekly in the Mandir. He was the Secretary of the Association which organized prayer meetings, lectures, and debates. ‘Book Revelation’, ‘The Existence of God’, ‘The Existence of Evil’ and ‘Prayer’ were among the chief subjects of discussion. Public debates on religious and social subjects through scholarly works like ‘Tennyson and Science’, ‘Mysticism in English Poetry’, and ‘Shakespeare as a Moralist’ also took place regularly. He was the Assistant Professor of Science (Physics and Chemistry) at Government College Lahore. He retired at the age of 55 in 1918, but continued to live in the city as an active participant in its social and political life till 1947. He died a year after the Partition.",
                    title : "Sample Title",
                    source : "https://ruchiramsahni.wordpress.com/",
                    render : ()=> <img alt="Ruchi Ram Sahini" src={RuchiRam} id={overlay_styles.RuchiRam}></img>,
                  }]
                }
              />

              <Overlay
                oId="6"
                displayedOverlay={props.displayedOverlay}
                closeOverlay={props.closeOverlay}
                setDisplayedOverlay={props.setDisplayedOverlay}
                slides={
                  [
                    {
                      description : <div>
                        <p>
                          B.R.Ambedkar’s undelivered speech was later published in 1936
                        </p>
                        <p><a href="https://ccnmtl.columbia.edu/projects/mmt/ambedkar/web/readings/aoc_print_2004.pdf" target="_blank">Digital Copy</a></p>
                      </div>,
                      title : "Sample Title",
                      source : "https://poppyhull.wordpress.com",
                      render : ()=> <img alt="The speech prepared by B.R.Ambedkar (published)" src={AOCaste} id={overlay_styles.AOCaste}></img>,
                    },
                    {
                      description : "Dr. B.R.Ambedkar",
                      title : "Sample Title",
                      source : "Wikipedia",
                      render : ()=> <img alt="Dr. B.R.Ambedkar" src={Ambedkar} id={overlay_styles.Ambedkar}></img>,
                    },
                    {
                      description : <span>An illustration of Gokul Chand Narang who hosted the Jat-Pat Todak Mandal Conference at his house (published in Daily <i>Milap</i>)</span>,
                      title : "Sample Title",
                      source : "Centre for South Asian Studies, University of Cambridge",
                      render : ()=> <img alt="Gokul Chand Narang" src={HinduPeeche} id={overlay_styles.HinduPeeche}></img>,
                    }
                  ]
                }
              />

              <Overlay
                oId="7"
                displayedOverlay={props.displayedOverlay}
                closeOverlay={props.closeOverlay}
                setDisplayedOverlay={props.setDisplayedOverlay}
                slides={
                  [{
                    description : <div>
                      <p>
                        <span>Brahmo Samaj Mandir</span>
                      </p>
                    </div>
                    ,
                    title : "Sample Title",
                    source : "archive.org",
                    render : ()=> <img alt="Brahmo Samaj Mandir" src={BrahmoSamajMandir} id={overlay_styles.BrahmoSamajMandir}></img>,
                  },
                  {
                    description : <span>Sanatan Dharam Mandir</span>,
                    title : "Sample Title",
                    source : "Wikipedia",
                    render : ()=> <img alt="Sanatan Dharam Mandir" src={SDharam} id={overlay_styles.SDharam}></img>,
                  },
                  {
                    description : "Dev Samaj Mandir",
                    title : "Sample Title",
                    source : "https://ruchiramsahni.wordpress.com/",
                    render : ()=> <img alt="Dev Samaj Mandir" src={DevSamajMandir} id={overlay_styles.DevSamajMandir}></img>,
                  }]
                }
              />
            </div>
          )}}
      </MobileSlide>
    ),
    menuInverted : true,
  },
  "chapter2": {
    name: "Chapter 2: The Killing",
    component : (
      <MobileSlide>
      {
          (props)=>{
            return (
              <div>
                <ChapterTitleMobile
                  inverted
                  image={Chapter2Title}
                  chapter_number="2"
                  chapter_title="Politics"
                  images={[
                    {image: LajpatRai, id: chTStyles.absoluteLajpat},
                  ]}
                  gradient='linear-gradient(to bottom, rgba(14, 67, 58,0) 0%,rgba(14, 67, 58,0.48) 48%,rgba(14, 67, 58,0.97) 97%,rgba(14, 67, 58, 1) 100%)'
                />

                <MobileSectionTitle
                  image={Slide4Back}
                  inverted
                  title="Politics in Punjab"
                  chapterNumber="CHAPTER 1: RELIGIOUS MOVEMENTS"
                  note="Pictures in the chapter can be clicked for expanded view"
                />

                <div className={classNames(mobileStyles.mobile_layout, mobileStyles.mobile_layout_100, mobileStyles.increased_padded_top, mobileStyles.increased_padded_bottom)}>
                  <p className={classNames(mobileStyles.mobilePara, slideStyles.bold)}>Indian Nationalism and Hindu communalism</p>
                  <p className={mobileStyles.mobilePara}>Even though Hindus dominated trade and commercial activities in the province, and serviced the professional classes in large numbers, there was a widely held view among the Hindu intelligentsia that their community interests were not being safeguarded. One of the reasons, in their estimation, was the British policy of appeasing the Sikhs - who were disproportionately represented in the military and hence vital for the protection of colonial interests - and the Muslims because of their numerical superiority. For instance, in the government policy for grant of newly established canal colony lands, mostly Muslim and Sikh jats were favored, while moneylending classes - most of whom were Hindus - were denied the opportunity. The policy was biased against the Hindus who did not fit the criteria of ‘ideal cultivator’ perceived by the colonial authorities, and also to make sure that the land was used for agricultural productivity alone rather than traded like a commodity for commercial gains. When representative government was initially introduced at the district, and later at the provincial level, the grant of separate electorate and recognition of Muslim majority in the province was opposed by the Hindu intelligentsia. Their argument was that despite their disproportionate contribution to the social and economic life of the province, they were not being given the representation they deserved. This sentiment was widely shared among urban Hindus as opposed to rural classes who had cultivated a mutually beneficial political alliance with Muslim and Sikh landlords.</p>
                  <p className={mobileStyles.mobilePara}>Articles and poems published in Lahore's Hindu newspapers reflected the political sentiment of Punjabi Hindus in pre-partition Lahore</p>
                </div>

                <div className={classNames(mobileStyles.mobile_layout, mobileStyles.mobile_layout_100, mobileStyles.padded_top)}>
                  <div className={mobileStyles.galleryChevrons_container}>
                    <div>
                      <p className={slideStyles.galleryTitle}>Gallery</p>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                      <div onClick={props.moveBackward(1)} className={slideStyles.prevSlideChev}><MdChevronLeft/></div>
                      <div onClick={props.moveForward(1)} className={slideStyles.nextSlideChev}><MdChevronRight/></div>
                    </div>
                  </div>
                </div>

                <div className={classNames(mobileStyles.mobile_layout, mobileStyles.mobile_layout_100, mobileStyles.padded_top, mobileStyles.increased_padded_bottom)}>
                  <HorizontalScroll
                    scrollContainerRef={props.addScrollRef(1)}
                    xPos={props.xPos[1]}>
                      <div className={classNames(slideStyles.galleryItem_container, mobileStyles.galleryItem_40)}>
                        <img onClick={()=> props.setDisplayedOverlay(["1",0])} alt="Milap Article" className={classNames(mobileStyles.shadowImage, imageStyles.full_gallery)} src={BadnaseebHindu}/>
                      </div>
                      <div className={classNames(slideStyles.galleryItem_container, mobileStyles.galleryItem_50)}>
                        <img onClick={()=> props.setDisplayedOverlay(["1",1])} alt="Poem" className={classNames(mobileStyles.shadowImage, imageStyles.full_gallery)} src={PunjabkeHindu}/>
                      </div>
                      <div className={classNames(slideStyles.galleryItem_container, mobileStyles.galleryItem_50)}>
                        <img onClick={()=> props.setDisplayedOverlay(["1",2])} alt="Milap Article" className={classNames(mobileStyles.shadowImage, imageStyles.full_gallery)} src={HinduPeeche}/>
                      </div>
                      <div className={classNames(slideStyles.galleryItem_container, mobileStyles.galleryItem_40)}>
                        <img onClick={()=> props.setDisplayedOverlay(["1",3])} alt="Poem" className={classNames(mobileStyles.shadowImage, imageStyles.full_gallery)} src={PunjabKaMahajan}/>
                      </div>
                  </HorizontalScroll>
                </div>

                <MobileSectionTitle
                  image={Slide4Back}
                  inverted
                  title="Political Cartoons and Illustrations"
                  chapterNumber="CHAPTER 1: RELIGIOUS MOVEMENTS"
                  note="Pictures in the chapter can be clicked for expanded view"
                />

                <div className={classNames(mobileStyles.mobile_layout, mobileStyles.mobile_layout_100, mobileStyles.increased_padded_top, mobileStyles.padded_bottom)}>
                  <p className={mobileStyles.mobilePara}>Cartoons and Illustrations published in Hindu-owned newspapers also give a glimpse into the politics of Hindus at the time</p>
                </div>

                <div className={classNames(mobileStyles.mobile_layout, mobileStyles.flexed_container, mobileStyles.increased_padded_bottom)}>
                  <div className={mobileStyles.mobile_layout_33}>
                    <img onClick={()=> props.setDisplayedOverlay(["2",0])} id={imageStyles.Cartoon} src={Cartoon} alt="Cartoon published in Daily Milap" className={mobileStyles.shadowImage}/>
                  </div>
                  <div className={mobileStyles.mobile_layout_33}>
                    <img onClick={()=> props.setDisplayedOverlay(["2",1])} id={imageStyles.FreedomArt} src={MilapFreedomArt} alt="Freedom Art in Daily Milap" className={mobileStyles.shadowImage}/>
                  </div>
                  <div className={mobileStyles.mobile_layout_33}>
                    <img onClick={()=> props.setDisplayedOverlay(["2",2])} id={imageStyles.Martyrs} src={Martyrs} alt="Full page feature on Hindu Martyrs" className={mobileStyles.shadowImage}/>
                  </div>
                </div>

                <MobileSectionTitle
                  image={Slide6Back}
                  inverted
                  title="Lala Lajpat Rai"
                  chapterNumber="CHAPTER 1: RELIGIOUS MOVEMENTS"
                  note="Pictures in the chapter can be clicked for expanded view"
                />

                <div className={classNames(mobileStyles.mobile_layout, mobileStyles.mobile_layout_100, mobileStyles.increased_padded_top, mobileStyles.padded_bottom)}>
                  <p className={mobileStyles.mobilePara}>Religious acrimony - especially between the Hindus and the Muslims - was at the heart of urban politics in Lahore during the 20th century. The urban Hindus left excluded while Hindu landlords had joined hands with the Muslim and Sikh landlords to form the Unionist Party, and implemented policies that protected their class interests as rural barons. The urban Hindus, on the other hand, continued to plead against discrimination as the Muslims were given special quotas in higher education and jobs.</p>
                  <p className={mobileStyles.mobilePara}>Amid such class interests and politics of emotion, there was little scope for nationalist politics. Lala Lajpat Rai was one exception. Although he was a towering figure at the forefront of nationalist politics in Lahore, he had a deep-rooted communalist agenda. The Indian National Congress, therefore, failed to have a popular base in the city as it was largely dominated by leaders with affiliation to the Arya Samaj or espoused a similar sense of disaffection towards the Muslims.</p>
                </div>

                <div className={classNames(mobileStyles.mobile_layout, mobileStyles.flexed_container, mobileStyles.increased_padded_bottom)}>
                  <div className={mobileStyles.mobile_layout_50}>
                    <img onClick={()=> props.setDisplayedOverlay(["3",0])} id={imageStyles.LLRai} src={LLRai} alt="Lala Lajpat Rai" className={mobileStyles.shadowImage}/>
                    <p id={imageStyles.LLRai} className={mobileStyles.mobileImageDesc}>Lala Lajpat Rai</p>
                  </div>
                  <div className={mobileStyles.mobile_layout_50}>
                    <img onClick={()=> props.setDisplayedOverlay(["3",1])} id={imageStyles.LLRai_Statue} src={LLRai_Statue} alt="Statue of Lala Lajpat Rai" className={mobileStyles.shadowImage}/>
                    <p id={imageStyles.LLRai_Statue} className={mobileStyles.mobileImageDesc}>Statue of Lala Lajpat Rai</p>
                  </div>
                </div>

                <div className={classNames(mobileStyles.mobile_layout, mobileStyles.mobile_layout_100, mobileStyles.increased_padded_top, mobileStyles.padded_bottom)}>
                  <p className={classNames(mobileStyles.mobilePara, slideStyles.bold)}>Lala Lajpat Rai in Lahore’s Newspapers</p>
                  <p className={mobileStyles.mobilePara}>Contemporary newspapers show Lala Lajpat Rai as a highly celebrated figure among Lahore’s Hindu community, both before and after his death in November 1928.</p>
                </div>

                <div className={classNames(mobileStyles.mobile_layout, mobileStyles.mobile_layout_100)}>
                  <div className={mobileStyles.galleryChevrons_container}>
                    <div>
                      <p className={slideStyles.galleryTitle}>Gallery</p>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                      <div onClick={props.moveBackward(2)} className={slideStyles.prevSlideChev}><MdChevronLeft/></div>
                      <div onClick={props.moveForward(2)} className={slideStyles.nextSlideChev}><MdChevronRight/></div>
                    </div>
                  </div>
                </div>

                <div className={classNames(mobileStyles.mobile_layout, mobileStyles.mobile_layout_100, mobileStyles.padded_top, mobileStyles.increased_padded_bottom)}>
                  <HorizontalScroll
                    scrollContainerRef={props.addScrollRef(2)}
                    xPos={props.xPos[2]}>
                      <div className={classNames(slideStyles.galleryItem_container, mobileStyles.galleryItem_33)}>
                        <img onClick={()=> props.setDisplayedOverlay(["4",0])} alt="Lala Lajpat Rai number, Daily Bande Matram" className={classNames(mobileStyles.shadowImage, imageStyles.full_gallery)} src={LLR_BM}/>
                      </div>
                      <div className={classNames(slideStyles.galleryItem_container, mobileStyles.galleryItem_33)}>
                        <img onClick={()=> props.setDisplayedOverlay(["4",1])} alt="Shaheed number, Daily Pratap" className={classNames(mobileStyles.shadowImage, imageStyles.full_gallery)} src={LLR_Pratap}/>
                      </div>
                      <div className={classNames(slideStyles.galleryItem_container, mobileStyles.galleryItem_50)}>
                        <img onClick={()=> props.setDisplayedOverlay(["4",2])} alt="Poem" className={classNames(mobileStyles.shadowImage, imageStyles.full_gallery)} src={LLR_Poem1}/>
                      </div>
                      <div className={classNames(slideStyles.galleryItem_container, mobileStyles.galleryItem_40)}>
                        <img onClick={()=> props.setDisplayedOverlay(["4",3])} alt="Poem" className={classNames(mobileStyles.shadowImage, imageStyles.full_gallery)} src={LLR_Poem2}/>
                      </div>
                      <div className={classNames(slideStyles.galleryItem_container, mobileStyles.galleryItem_40)}>
                        <img onClick={()=> props.setDisplayedOverlay(["4",4])} alt="Poem and Article on Lajpat Rai's statue" className={classNames(mobileStyles.shadowImage, imageStyles.full_gallery)} src={LLR_Poem3}/>
                      </div>
                      <div className={classNames(slideStyles.galleryItem_container, mobileStyles.galleryItem_33)}>
                        <img onClick={()=> props.setDisplayedOverlay(["4",5])} alt="Lala Lajpat Rai's pictures" className={classNames(mobileStyles.shadowImage, imageStyles.full_gallery)} src={LLR_Pict}/>
                      </div>
                      <div className={classNames(slideStyles.galleryItem_container, mobileStyles.galleryItem_33)}>
                        <img onClick={()=> props.setDisplayedOverlay(["4",6])} alt="Messages from Congress leaders on Lala's death" className={classNames(mobileStyles.shadowImage, imageStyles.full_gallery)} src={LLR_Congress}/>
                      </div>
                      <div className={classNames(slideStyles.galleryItem_container, mobileStyles.galleryItem_50)}>
                        <img onClick={()=> props.setDisplayedOverlay(["4",7])} alt="Congregation in the memory of Lala Lajpat Rai" className={classNames(mobileStyles.shadowImage, imageStyles.full_gallery)} src={LLR_Jalsa}/>
                      </div>
                      <div className={classNames(slideStyles.galleryItem_container, mobileStyles.galleryItem_40)}>
                        <img onClick={()=> props.setDisplayedOverlay(["4",8])} alt="Writings of Lala Lajpat Rai" className={classNames(mobileStyles.shadowImage, imageStyles.full_gallery)} src={LLR_Writings}/>
                      </div>
                  </HorizontalScroll>
                </div>

                <NextChapterTitle
                  inverted
                  image={Chapter3Title}
                  title="The Trial"
                  nextChapter="chapter3"
                  prevChapter="chapter1"
                />

                <Overlay
                  oId="1"
                  displayedOverlay={props.displayedOverlay}
                  closeOverlay={props.closeOverlay}
                  setDisplayedOverlay={props.setDisplayedOverlay}
                  slides={
                    [{
                      description : <span>An editorial titled ‘The unfortunate Hindus of Punjab’ published in Lahore’s Urdu Daily, <i>Milap</i></span>,
                      title : "Sample Title",
                      source : "Centre for South Asian Studies, University of Cambridge",
                      render : ()=> <img alt="Milap Article" src={BadnaseebHindu} id={overlay_styles.BadnaseebHindu}></img>,
                    },
                    {
                      description : <span>A poem titled ‘the Hindus of Punjab’ published in Lahore’s Urdu Daily, <i>Milap</i></span>,
                      title : "Sample Title",
                      source : "Centre for South Asian Studies, University of Cambridge",
                      render : ()=> <img alt="Poem" src={PunjabkeHindu} id={overlay_styles.PunjabkeHindu}></img>,
                    },
                    {
                      description : <span>In an article published in Daily <i>Milap</i>, Dr. Gokul Chand argued that the reason behind the apparent weakness of ‘the Hindus’ was that they were not inward oriented, unlike other groups. Focus should be shifted back to Hindu Dharam and the plight of its people instead of focusing on other external affairs, so that the Dharam may prosper</span>,
                      title : "Sample Title2",
                      source : "Centre for South Asian Studies, University of Cambridge",
                      render : ()=> <img alt="Milap Article" src={HinduPeeche} id={overlay_styles.HinduPeeche}></img>,
                    },
                    {
                      description : <span>A poem published in Daily <i>Milap</i> rues the legislation that unfairly targeted the Hindu moneylenders</span>,
                      title : "Sample Title2",
                      source : "Centre for South Asian Studies, University of Cambridge",
                      render : ()=> <img alt="Poem" src={PunjabKaMahajan} id={overlay_styles.PunjabKaMahajan}></img>,
                    }]
                  }
                />

                <Overlay
                  oId="2"
                  displayedOverlay={props.displayedOverlay}
                  closeOverlay={props.closeOverlay}
                  setDisplayedOverlay={props.setDisplayedOverlay}
                  slides={
                    [{
                      description : <span>A cartoon published in <i>Daily Milap</i> ridiculing the hyper-religiosity of some Muslim leaders as the reason for communal tension. This is contrasted by a Fez-wearing, modernist Muslim who is shown as calm and rational, hence more amenable to reason rather than religious passion.</span>,
                      title : "Sample Title",
                      source : "Centre for South Asian Studies, University of Cambridge",
                      render : ()=> <img alt="Cartoon published in Daily Milap" src={Cartoon} id={overlay_styles.Cartoon}></img>,
                    },
                    {
                      description : <span>An illustration published in <i>Daily Milap</i> symbolizes the ordeals and sacrifices that are necessary to gain freedom</span>,
                      title : "Sample Title",
                      source : "Research Society of Pakistan, University of Punjab",
                      render : ()=> <img alt="Freedom Art in Daily Milap" src={MilapFreedomArt} id={overlay_styles.MilapFreedomArt}></img>,
                    },
                    {
                      description : "A full page feature on Hindus who had been victims of ‘Muslim violence’. In particular, the focus is on the figure of Haqiqat Rai - a Hindu boy who was killed in early 18th century Lahore for refusing to change his religion",
                      title : "Sample Title",
                      source : "Research Society of Pakistan, University of Punjab",
                      render : ()=> <img alt="Full page feature on Hindu Martyrs" src={Martyrs} id={overlay_styles.Martyrs}></img>,
                    }]
                  }
                />

                <Overlay
                  oId="3"
                  displayedOverlay={props.displayedOverlay}
                  closeOverlay={props.closeOverlay}
                  setDisplayedOverlay={props.setDisplayedOverlay}
                  slides={
                    [
                      {
                        description : "Lala Lajpat Rai",
                        title : "Sample Title",
                        source : "Wikipedia",
                        render : ()=> <img alt="Lala Lajpat Rai" src={LLRai} id={overlay_styles.LLRai}></img>,
                      },
                      {
                        description : "A statue of Lala Lajpat Rai in Simla, India. This statue was originally installed at Lahore’s Gol Bagh (Nasir Bagh), but was removed from its original location after 1947 and moved to Simla.",
                        title : "Sample Title",
                        source : "Wikipedia",
                        render : ()=> <img alt="Statue of Lala Lajpat Rai" src={LLRai_Statue} id={overlay_styles.LLRai_Statue}></img>,
                      }
                    ]
                  }
                />

                <Overlay
                  oId="4"
                  displayedOverlay={props.displayedOverlay}
                  closeOverlay={props.closeOverlay}
                  setDisplayedOverlay={props.setDisplayedOverlay}
                  slides={
                    [{
                      description : <span><i>Lala Lajpat Rai number</i> published by Daily <i>Bande Matram</i> Lahore (16 November 1929). The title page features a portrait and a poem dedicated to Lala Lajpat Rai</span>,
                      title : "Sample Title",
                      source : "Research Society of Pakistan, University of Punjab",
                      render : ()=> <img alt="Lala Lajpat Rai number, Daily Bande Matram" src={LLR_BM} id={overlay_styles.LLR_BM}></img>,
                    },
                    {
                      description : <span>Daily <i>Pratap</i> publishes <i>Shaheed number</i> (Martyrs edition) featuring a portrait of Lala Lajpat Rai along with a couplet (17 November 1929)</span>,
                      title : "Sample Title2",
                      source : "Research Society of Pakistan, University of Punjab",
                      render : ()=> <img alt="Shaheed number, Daily Pratap" src={LLR_Pratap} id={overlay_styles.LLR_Pratap}></img>,
                    },
                    {
                      description : "A poem paying tribute to Lala Lajpat Rai",
                      title : "Sample Title",
                      source : "Research Society of Pakistan, University of Punjab",
                      render : ()=> <img alt="Poem" src={LLR_Poem1} id={overlay_styles.LLR_Poem1}></img>,
                    },
                    {
                      description : "A poem paying homage to Lala Lajpat Rai",
                      title : "Sample Title2",
                      source : "Research Society of Pakistan, University of Punjab",
                      render : ()=> <img alt="Poem" src={LLR_Poem2} id={overlay_styles.LLR_Poem2}></img>,
                    },
                    {
                      description : "A newspaper story on the availability of a site for Lala Lajpat Rai’s statue along with a poem celebrating him.",
                      title : "Sample Title2",
                      source : "Research Society of Pakistan, University of Punjab",
                      render : ()=> <img alt="Poem and Article on Lajpat Rai's statue" src={LLR_Poem3} id={overlay_styles.LLR_Poem3}></img>,
                    },
                    {
                      description : "A full page feature on different images of Lala Lajpat Rai during his lifetime.",
                      title : "Sample Title2",
                      source : "Research Society of Pakistan, University of Punjab",
                      render : ()=> <img alt="Lala Lajpat Rai's pictures" src={LLR_Pict} id={overlay_styles.LLR_Pict}></img>,
                    },{
                      description : "Newspaper publishes messages from Congress leaders Madan Mohan Malaviya and Motilal Nehru on the death of Lala Lajpat Rai",
                      title : "Sample Title2",
                      source : "Research Society of Pakistan, University of Punjab",
                      render : ()=> <img alt="Messages from Congress leaders on Lala's death" src={LLR_Congress} id={overlay_styles.LLR_Congress}></img>,
                    },{
                      description : "Headline about a congregation in the memory of Lala Lajpat Rai",
                      title : "Sample Title2",
                      source : "Research Society of Pakistan, University of Punjab",
                      render : ()=> <img alt="Congregation in the memory of Lala Lajpat Rai" src={LLR_Jalsa} id={overlay_styles.LLR_Jalsa}></img>,
                    },{
                      description : " An article on the writings of Lala Lajpat Rai",
                      title : "Sample Title2",
                      source : "Research Society of Pakistan, University of Punjab",
                      render : ()=> <img alt="Writings of Lala Lajpat Rai" src={LLR_Writings} id={overlay_styles.LLR_Writings}></img>,
                    }]
                  }
                />
              </div>
            )
        }
      }
      </MobileSlide>
    ),
    menuInverted: true
  },
  "chapter3": {
    name: "Chapter 3: The Trial",
    component : (
      <MobileSlide>
      {
          (props)=>{
            return (
              <div>
                <ChapterTitleMobile
                  inverted
                  image={Chapter3Title}
                  chapter_number="3"
                  chapter_title="Newspapers"
                  images={[
                    {image: PratapCover, id: chTStyles.PratapCover},
                    {image: MilapBasantCover, id: chTStyles.MilapBasantCover}
                  ]}
                  gradient='linear-gradient(to bottom, rgba(130, 98, 204,0) 0%,rgba(130, 98, 204,0.48) 48%,rgba(130, 98, 204,0.97) 97%,rgba(130, 98, 204, 1) 100%)'
                />

                <MobileSectionTitle
                  image={Slide6Back}
                  inverted
                  title="Lahore’s Hindu Newspapers"
                  chapterNumber="CHAPTER 1: RELIGIOUS MOVEMENTS"
                  note="Pictures in the chapter can be clicked for expanded view"
                />

                <div className={classNames(mobileStyles.mobile_layout, mobileStyles.mobile_layout_100, mobileStyles.increased_padded_top, mobileStyles.padded_bottom)}>
                  <p className={mobileStyles.mobilePara}>Unlike UP and Bihar where the demand to replace Urdu with Devanagari script was popular, there was no serious threat to the status of Urdu in Punjab as the medium of instruction in public schools and an effective mode of social, political and religious commentary. Therefore, even those newspapers that claimed to present the case of discrimination faced by Hindus and argued for nationalist politics, chose Urdu as the medium of communication. <i>Milap</i>, <i>Pratap</i> and <i>Bande Matram</i> were major Urdu dailies published from Lahore and widely read by the city’s Hindu community. <i>Milap</i> continued to be published in post-1947 Eastern Punjab as well where a large number of Hindu and Sikhs subscribed to it as they were literate in Urdu only. One such person is Manmohan Singh - the former prime minister of India - who received his early education in British Punjab, and is therefore a fluent reader of Urdu. His ‘Hindi speeches’ were, therefore, written in Urdu script.</p>
                </div>

                <div className={classNames(mobileStyles.mobile_layout, mobileStyles.flexed_container, mobileStyles.padded_bottom)}>
                  <div className={mobileStyles.mobile_layout_50}>
                    <img onClick={()=> props.setDisplayedOverlay(["1",0])} id={imageStyles.MilapCover} src={MilapCover} alt="A front page of Daily Milap" className={mobileStyles.shadowImage}/>
                    <p id={imageStyles.MilapCover} className={mobileStyles.mobileImageDesc}>A front page of Daily Milap</p>
                  </div>
                  <div className={mobileStyles.mobile_layout_50}>
                    <img onClick={()=> props.setDisplayedOverlay(["1",1])} id={imageStyles.Lajpat_AS2} src={BMCover} alt="A front page of Daily Bande Matram" className={mobileStyles.shadowImage}/>
                    <p id={imageStyles.Lajpat_AS2} className={mobileStyles.mobileImageDesc}>A front page of Daily Bande Matram</p>
                  </div>
                </div>

                <div className={classNames(mobileStyles.mobile_layout, mobileStyles.mobile_layout_100, mobileStyles.increased_padded_bottom)}>
                  <p className={mobileStyles.mobilePara}>The choice of words like ‘Hindu newspapers’ reflects the communalized nature of politics in the city. There were similar ‘Muslim newspapers’ as well, such as <i>Zamindar</i> and <i>Inqilab</i>, which mainly catered to the social, political and economic interests of the Muslim community. Such a sharp communal divide resulting from various colonial policies was reified over a period of time, and was responsible for much of the violence - and the Partition itself - which took place in 1947.</p>
                </div>

                <MobileSectionTitle
                  image={Slide6Back}
                  inverted
                  title="Special Editions"
                  chapterNumber="CHAPTER 1: RELIGIOUS MOVEMENTS"
                  note="Pictures in the chapter can be clicked for expanded view"
                />

                <div className={classNames(mobileStyles.mobile_layout, mobileStyles.mobile_layout_100, mobileStyles.increased_padded_top)}>
                  <div className={mobileStyles.galleryChevrons_container}>
                    <div>
                      <p className={slideStyles.galleryTitle}>Gallery</p>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                      <div onClick={props.moveBackward(2)} className={slideStyles.prevSlideChev}><MdChevronLeft/></div>
                      <div onClick={props.moveForward(2)} className={slideStyles.nextSlideChev}><MdChevronRight/></div>
                    </div>
                  </div>
                </div>

                <div className={classNames(mobileStyles.mobile_layout, mobileStyles.mobile_layout_100, mobileStyles.padded_top, mobileStyles.increased_padded_bottom)}>
                  <HorizontalScroll
                    scrollContainerRef={props.addScrollRef(2)}
                    xPos={props.xPos[2]}>
                      <div className={classNames(slideStyles.galleryItem_container, mobileStyles.galleryItem_33)}>
                        <img onClick={()=> props.setDisplayedOverlay(["2",0])} alt="Daily Pratap, Krishna number" className={classNames(mobileStyles.shadowImage, imageStyles.full_gallery)} src={PratapCover}/>
                      </div>
                      <div className={classNames(slideStyles.galleryItem_container, mobileStyles.galleryItem_33)}>
                        <img onClick={()=> props.setDisplayedOverlay(["2",1])} alt="Daily Milap, Basant Number" className={classNames(mobileStyles.shadowImage, imageStyles.full_gallery)} src={MilapBasant}/>
                      </div>
                      <div className={classNames(slideStyles.galleryItem_container, mobileStyles.galleryItem_33)}>
                        <img onClick={()=> props.setDisplayedOverlay(["2",2])} alt="Daily Milap, Holi edition" className={classNames(mobileStyles.shadowImage, imageStyles.full_gallery)} src={MilapHoli}/>
                      </div>
                      <div className={classNames(slideStyles.galleryItem_container, mobileStyles.galleryItem_33)}>
                        <img onClick={()=> props.setDisplayedOverlay(["2",3])} alt="Daily Milap, Pahar (Mountain) edition" className={classNames(mobileStyles.shadowImage, imageStyles.full_gallery)} src={PaharNumber}/>
                      </div>
                      <div className={classNames(slideStyles.galleryItem_container, mobileStyles.galleryItem_33)}>
                        <img onClick={()=> props.setDisplayedOverlay(["2",4])} alt="Daily Pratap, Martyrs edition" className={classNames(mobileStyles.shadowImage, imageStyles.full_gallery)} src={LLR_Pratap}/>
                      </div>
                      <div className={classNames(slideStyles.galleryItem_container, mobileStyles.galleryItem_33)}>
                        <img onClick={()=> props.setDisplayedOverlay(["2",5])} alt="Daily Bande Matram, Lala Lajpat Rai edition" className={classNames(mobileStyles.shadowImage, imageStyles.full_gallery)} src={LLR_BM}/>
                      </div>
                  </HorizontalScroll>
                </div>

                <MobileSectionTitle
                  image={Slide6Back}
                  inverted
                  title="Poetry in newspapers"
                  chapterNumber="CHAPTER 1: RELIGIOUS MOVEMENTS"
                  note="Pictures in the chapter can be clicked for expanded view"
                />

                <div className={classNames(mobileStyles.mobile_layout, mobileStyles.mobile_layout_100, mobileStyles.increased_padded_bottom, mobileStyles.increased_padded_top)}>
                  <p className={mobileStyles.mobilePara}>Despite the rising crescendo of communalism and politicizing of Hindu identity in Lahore, Urdu remained the idiomatic expression of literature, politics and socio-religious thought. Various specimens of Urdu poetry published in Hindu newspapers show how poets drew upon Perso-Islamic and Indic literary traditions, and a range of local and Persianized metaphors, to write poetry in remembrance of Hindu martyrs, celebration of Hindu festivals or simply in admiration of natural landscapes.</p>
                </div>

                <div className={classNames(mobileStyles.mobile_layout, mobileStyles.flexed_container, mobileStyles.increased_padded_bottom)}>
                  <div className={mobileStyles.mobile_layout_33}>
                    <img onClick={()=> props.setDisplayedOverlay(["3",0])} id={imageStyles.Poem1} src={Poem1} alt="Poem" className={mobileStyles.shadowImage}/>
                  </div>
                  <div className={mobileStyles.mobile_layout_33}>
                    <img onClick={()=> props.setDisplayedOverlay(["3",1])} id={imageStyles.Poem2} src={Poem2} alt="Poem" className={mobileStyles.shadowImage}/>
                  </div>
                  <div className={mobileStyles.mobile_layout_33}>
                    <img onClick={()=> props.setDisplayedOverlay(["3",2])} id={imageStyles.Poem3} src={Poem3} alt="Poem" className={mobileStyles.shadowImage}/>
                  </div>
                </div>

                <NextChapterTitle
                  inverted
                  image={ProjectCreditsBack}
                  title="Credits"
                  nextChapter="credits"
                  prevChapter="chapter2"
                />

                <Overlay
                  oId="1"
                  displayedOverlay={props.displayedOverlay}
                  closeOverlay={props.closeOverlay}
                  setDisplayedOverlay={props.setDisplayedOverlay}
                  slides={
                    [
                      {
                        description : <span>Daily <i>Milap</i>, one of the major Hindu-led newspapers in pre-partition Lahore was inaugurated in April 1923</span>,
                        title : "Sample Title",
                        source : <a href="https://twitter.com/rishi_suri/status/1265181759207018497/photo/1" target="_blank">Twitter</a>,
                        render : ()=> <img alt="Front page of Daily Milap" src={MilapCover} id={overlay_styles.MilapCover}></img>,
                      },
                      {
                        description : <span>Daily <i>Bande Matram</i>, a Hindu-run newspaper in pre-partition Lahore</span>,
                        title : "Sample Title",
                        source : "https://lahorenama.wordpress.com/",
                        render : ()=> <img alt="Front page of Daily Bande Matram" src={BMCover} id={overlay_styles.BMCover}></img>,
                      }
                    ]
                  }
                />

                <Overlay
                  oId="2"
                  displayedOverlay={props.displayedOverlay}
                  closeOverlay={props.closeOverlay}
                  setDisplayedOverlay={props.setDisplayedOverlay}
                  slides={
                    [{
                      description : <span>Daily <i>Pratap</i>, special edition on Krishna (29 August 1929)</span>,
                      title : "Sample Title",
                      source : "Research Society of Pakistan, University of Punjab",
                      render : ()=> <img alt=<span>Daily <i>Pratap</i>, Krishna number</span> src={PratapCover} id={overlay_styles.PratapCover}></img>,
                    },
                    {
                      description : <span>Daily <i>Milap</i>, special edition on the spring festival of Basant (3 February 1930)</span>,
                      title : "Sample Title2",
                      source : "Research Society of Pakistan, University of Punjab",
                      render : ()=> <img alt="Daily Milap, Basant Number" src={MilapBasant} id={overlay_styles.MilapBasant}></img>,
                    },
                    {
                      description : <span>Daily <i>Milap</i>, special edition on the festival of Holi (15 March 1930). The cartoon on the cover page shows Gandhi playing Holi with Lord Irwin</span>,
                      title : "Sample Title",
                      source : "Research Society of Pakistan, University of Punjab",
                      render : ()=> <img alt="Daily Milap, Holi edition" src={MilapHoli} id={overlay_styles.MilapHoli}></img>,
                    },
                    {
                      description : <span>Daily <i>Milap</i>, special edition on Mountains (10 July 1928)</span>,
                      title : "Sample Title2",
                      source : "Research Society of Pakistan, University of Punjab",
                      render : ()=> <img alt="Daily Milap, Pahar (Mountain) edition" src={PaharNumber} id={overlay_styles.PaharNumber}></img>,
                    },
                    {
                      description : <span>Daily <i>Pratap</i>, special edition on the martyrs of Hinduism (17 November 1929)</span>,
                      title : "Sample Title2",
                      source : "Research Society of Pakistan, University of Punjab",
                      render : ()=> <img alt="Daily Pratap, Martyrs edition" src={LLR_Pratap} id={overlay_styles.LLR_Pratap}></img>,
                    },
                    {
                      description : <span>Daily <i>Bande Matram</i>, special edition on Lala Lajpat Rai (16 November 1929)</span>,
                      title : "Sample Title2",
                      source : "Research Society of Pakistan, University of Punjab",
                      render : ()=> <img alt="Daily Bande Matram, Lala Lajpat Rai edition" src={LLR_BM} id={overlay_styles.LLR_BM}></img>,
                    }]
                  }
                />

                <Overlay
                  oId="3"
                  displayedOverlay={props.displayedOverlay}
                  closeOverlay={props.closeOverlay}
                  setDisplayedOverlay={props.setDisplayedOverlay}
                  slides={
                    [{
                      description : "A poem celebrating the arrival of spring",
                      title : "Sample Title",
                      source : "Research Society of Pakistan, University of Punjab",
                      render : ()=> <img alt="Poem" src={Poem1} id={overlay_styles.Poem1}></img>,
                    },
                    {
                      description : "A poem lamenting the status of Hindus",
                      title : "Sample Title",
                      source : "Research Society of Pakistan, University of Punjab",
                      render : ()=> <img alt="Poem" src={Poem2} id={overlay_styles.Poem2}></img>,
                    },
                    {
                      description : "A poetic tribute to Krishan",
                      title : "Sample Title",
                      source : "Research Society of Pakistan, University of Punjab",
                      render : ()=> <img alt="Poem" src={Poem3} id={overlay_styles.Poem3}></img>,
                    }]
                  }
                />
              </div>
            )
        }
      }
      </MobileSlide>
    ),
    menuInverted: true
  },
  "credits" : {
      name: "Credits",
      component : (
        <MobileSlide>
          {
            (props)=>{
              return (
                <ProjectCreditsMobile
                  image={ProjectCreditsBack}
                  disclaimer=<span>These projects are based on research conducted by students for the course <i>Walking in the City: Mapping Everyday Life in Lahore.</i></span>
                  projectName="Imagining Lahore as a Hindu City"
                  studentNames="Nawal Fatima Rai, Asiya Syed, Haleema Aurangzeb Abbasi, Maryam Ahmad Kiyani, Maryam Sami Khan, Tehreem Anwar and Zainab Shuja"
                  supervisor={{name: 'Dr Ali Usman Qasmi', desig: 'Associate Professor (History), Department of Humanities and Social Sciences, LUMS'}}
                />
              )
            }
          }
        </MobileSlide>
      ),
      menuInverted : true,
    }
};


const mobileImageArr = imageArr;
export {
    slideMap,
    slideOrder,
    imageArr,
    chapterArr,
    mobileSlideMap,
    mobileImageArr
};
