const LoreumBody = () => (
  
  <div 
    className='flex flex-col justify-center items-center pt-14'>
    <Loreum/>
    <Loreum/>
    <Loreum/>
    <Loreum/>
    <Loreum/>
    <Loreum/>
  </div>
)

const Loreum = () =>{
  return(
    <>
      <div className='border-slate-700 border rounded-md p-2 m-2 max-w-xs sm:max-w-md md:max-w-lg'>
        <span className='text-white'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </span>
      </div>
    </>
  )
}

export default LoreumBody;
