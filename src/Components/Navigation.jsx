export default function Navigation() { 
  return (
<nav class="h-10 dark:bg-gray-900 fixed w-full z-20 top-0 start-0">
  <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse border-blue-800 align-items-center justify-end p-1 mt-2 bg-[#EB3678]">
      <button type="button" class="ml-5 text-white !bg-[#EB3678] !text-lg">Skills</button>
      <button type="button" class="ml-5 text-white !bg-[#EB3678] !text-lg">Projects</button>
      <button type="button" class="ml-5 text-white !bg-[#EB3678] !text-lg">Certificates</button>
      <button type="button" class="ml-5 text-white !bg-[#EB3678] !text-lg">Contact</button>
  </div> 
</nav>

  );
} 
