// import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
// import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
// import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
// import ContactBodyItems from "./contactUs/ContactBodyItems";
// import ContactForm from './contactUs/ContactForm';

// import contactBG from '../assets/images/king_coco.jpg';

// export const Contactus = () => {
//   return (
//     <div className="contact-Container mt-[8vh] w-full min-h-screen flex flex-col items-center bg-gray-900">

//       {/* Contact Header with Background Image */}
//       <div 
//         className="contact-header w-full h-[25vh] md:h-[30vh] lg:h-[35vh] flex flex-col items-center justify-center relative bg-cover bg-center"
//         style={{ backgroundImage: `url(${contactBG})` }}
//       >
//         <div className="absolute inset-0 bg-black opacity-70"></div>
//         <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-white relative">Contact Us</h2>
//         <span className="text-sm md:text-lg lg:text-xl text-gray-300 relative">Home &gt; Contact Us</span>
//       </div>

//       {/* Contact Body Section */}
//       <div className="w-11/12 max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6 py-8">
//         <ContactBodyItems
//           title="Our Location"
//           desc={["(800) 123 456 789 / (800) 123 456 789", "info@example.com"]}
//           Icon={LocationOnOutlinedIcon}
//         />
//         <ContactBodyItems
//           title="Contact Us Anytime"
//           desc={["Mobile: 012 345 678", "Fax: 123 456 789"]}
//           Icon={PhoneAndroidOutlinedIcon}
//         />
//         <ContactBodyItems
//           title="Support Overall"
//           desc={["Support24/7@example.com", "info@example.com"]}
//           Icon={MailOutlineOutlinedIcon}
//         />
//       </div>

//       {/* Contact Form */}
//       <div className="w-full flex flex-col items-center py-6 md:py-12">
//         <div className="w-11/12 max-w-4xl">
//           <ContactForm />
//         </div>
//       </div>

//     </div>
//   );
// };