import { useNavigate } from "react-router-dom";   
const Home = () => {
    const navigate=useNavigate();
    return (
        <div style={{ backgroundImage: "url('https://wallpapercave.com/wp/wp10299246.jpg')", minHeight: '150vh' }}>
<header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-12 md:mb-0">
    </a>
    
  </div>
</header>

<section className="text-black body-font">
  <div className="container mx-auto flex px-2 py-2 md:flex-row flex-col items-center">
    <div className="lg:flex-grow flex flex-col md:items-start md:text-left mb-28 md:mb-0 items-center text-center">
      <h1 className="ml-8 title-font tracking-wide sm:text-3xl md:text-6xl xl:text-7xl mb-4 font-bold ">Track your Expenses...!
      </h1>
      <p className="ml-8 text-black mb-16 leading-relaxed opacity-50 ">Manage your expenses easiy with Expense Tracker... </p>
      <div className="flex justify-center">
        <button className="ml-24 text-lg inline-flex text-yellow-300 bg-black py-4 px-12 focus:outline-none hover:bg-opacity-80 rounded " onClick={()=>navigate("/expense")}> Go...!</button>
        
      </div>
    </div>
    <div  id="pattern" className="w-32 sm:w-40 lg:max-w-xl lg:w-full md:w-32 xl:w-5/6 bg-contain bg-no-repeat md:ml-40 xl:mr-16">
      <div className="w-full flex gap-3 justify-center ">

        <img className="object-cover object-center rounded-xl h-44 w-48" alt="hero" src="https://moneyview.in/images/blog/wp-content/uploads/2017/10/Blog-11-reasonsfeature-min.jpg"/>
        <img className="object-cover object-center rounded-xl h-44 w-48" alt="hero" src="https://www.wellybox.com/wp-content/uploads/2021/01/6-business-expense-tracker.jpg"/> 
      </div>
       <div className="w-full h- flex gap-2 justify-center items-center my-2">

        <img className="object-cover object-center rounded-xl h-44 w-48" alt="hero" src="https://craftise.co/cdn/shop/files/ExpenseTracker.jpg?v=1703427467&width=1946"/>
        <img className="object-cover object-center rounded-xl h-44 w-48" alt="hero" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGFMwLCNFIueqHAWw8_oepvHMxl4f17nH7_aUwR5PmktVApCKzgczwwrkltB0NFznbK5s&usqp=CAU"/> 
        <img className="object-cover object-center rounded-xl h-44 w-48" alt="hero" src="https://www.mindinventory.com/blog/wp-content/uploads/2021/06/expense-tracking-app.webp"/> 
      </div>
           <div className="w-full flex gap-3 justify-center">

        <img className="object-cover object-center rounded-xl h-44 w-48" alt="hero" src="https://diaryofajournalplanner.com/wp-content/uploads/2020/01/Bullet-Journal-Budget-and-Expense-Tracker-2.jpg.webp"/>
        <img className="object-cover object-center rounded-xl h-44 w-48" alt="hero" src="https://repository-images.githubusercontent.com/359581441/3e3eb800-df44-11eb-8541-30a6954cb3de"/> 
      </div>
           <div className="w-full flex gap-3 justify-center my-2">

        <img className="object-cover object-center rounded-xl h-44 w-48" alt="hero" src="https://static.india.com/wp-content/uploads/2023/08/These-5-Expense-Tracker-Apps-Will-Help-You-Take-Control-of-Your-Spending.png?impolicy=Medium_Resize&w=1200&h=800"/>
      </div>
      </div>
  </div>
</section>
        </div>
    );
};
export default Home;