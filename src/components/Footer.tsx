
function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 px-3 sm:px-6 lg:px-8 text-center">
         <div className="flex flex-col">
            <div className="text-bold text-white text-lg mb-3">
               About Us
            </div>
            <p className="min-w-20 flex justify-center">Music School is a premier institution dedicated to teching the art and since of</p>
         </div>
         <div className="flex flex-col  ">
            <div className="text-bold text-white text-lg mb-3">
               Quick Links
            </div>
            <p>Home</p>
            <p>About</p>
            <p>Course</p>
            <p>Contact</p>
         </div>
         <div className="flex flex-col  ">
            <div className="text-bold text-white text-lg mb-3">
               Follow Us
            </div>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
         </div>
         <div className="flex flex-col  ">
            <div className="text-bold text-white text-lg mb-3">Contect Us</div>
            <p>Mumbai, India</p>
            <p>Mumbai 400066</p>
            <p>Email: info@musicschool.com</p>
         </div>
      </div>
      <p className="text-center text-xs pt-8 tracking-normal font-semibold">© 2025 Music School. All right reserved.</p>
    </footer>
  )
}

export default Footer