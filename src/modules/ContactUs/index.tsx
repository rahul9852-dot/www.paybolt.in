import BusinessSetUp from './BusinessSetUp/BusinessSetUp'
import './contact.scss'
import ContactBanner from './ContactBanner/ContactBanner'
import ContactForm from './ContactForm/ContactForm'
export const ContactUs = () =>{
  return (
    <>
    <div className="contact-banner pt-40">
      <ContactBanner />
    </div>
      <ContactForm />
      <BusinessSetUp/>
  </>
   
  )
}