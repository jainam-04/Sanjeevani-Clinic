import React from 'react'

function Contact() {
  return (
    <div className='mx-10'>
      <h1 className='text-center text-5xl my-10'>Please Feel Free To <br /> Contact Us</h1>
      <div className='flex justify-around items-center my-10'>
        <div className='bg-blue-gray-500 h-52 w-80 text-center py-14' style={{ borderRadius: "2vw" }}>
          <i class="fa fa-map-marker text-6xl"></i>
          <p className='mt-5 text-lg'>New RTO office road, Aditya Nagar, Solapur, Maharashtra 413004</p>
        </div>
        <div className='bg-blue-gray-500 h-52 w-80 text-center py-14' style={{ borderRadius: "2vw" }}>
          <i class="fa fa-phone text-6xl" aria-hidden="true"></i>
          <p className='mt-5 text-lg'>07947430848</p>
        </div>
        <div className='bg-blue-gray-500 h-52 w-80 text-center py-14' style={{ borderRadius: "2vw" }}>
          <i class="fa fa-envelope text-6xl" aria-hidden="true"></i>
          <p className='mt-5 text-lg'>info@gmail.com</p>
        </div>
      </div>
      <iframe className='w-full h-[80vh] my-10' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30417.354350007987!2d75.85142707910155!3d17.64213909999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5d0a554efdc07%3A0x94fd3232104fafd3!2sSanjeevani%20Clinic!5e0!3m2!1sen!2sin!4v1708062868323!5m2!1sen!2sin" frameborder="0"></iframe>
    </div>
  )
}

export default Contact
