import React, { useRef, useState } from "react";
import "../Styles/Bprocess.css";
import Navbar1 from "./Navbar1";
import Footer2 from "./Footer2";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";

const SubsetVillabooking = ({
  addBase,
  adult,
  pizza,
  child,
  dateone,
  datetwo,
  stay,
  roomR,
  taxR,
  totalR,
}) => {
  const searchdfghn = useRef();
  console.log("kjhgju", pizza.dateone !== null);

  const navigate = useNavigate();
  const [count, setcount] = useState(0);
  const [count1, setcount1] = useState(0);
  const [room, setroom] = useState(0);
  const [tax, settax] = useState(0);
  const [total, settotal] = useState(0);
  const [room1, setroom1] = useState(6000);
  const [datefirst, setDate] = useState(new Date());
  const [date1, setDate1] = useState(new Date());
    const [base, setbase] = useState("Sunset Villa");
  
    const [first, setfirst] = useState("");
    const [second, setsecond] = useState("");
    const [last, setlast] = useState("");
  const increment = () => {
    setcount(count + 1);
    setsecond(Number(date1.toString().slice(8, 10)));
    adult(count + 1);
    if (count >= 3) {
      alert("Only 5 Members allowed");
    }
  };

  const decrement = () => {
    setcount(count - 1);
    adult(count - 1);
    if (count === 0) {
      setcount(0);
      alert("Select alteast one");
    }
  };
  const increment1 = () => {
    setcount1(count1 + 1);
    child(count1 + 1);
    if (count1 >= 3) {
      alert("Only 5 Members allowed");
    }
  };

  const decrement1 = () => {
    setcount1(count1 - 1);
    child(count1 + 1);
    if (count1 === 0) {
      setcount1(0);
      alert("Select alteast one");
    }
  };
  const firstroom = () => {
    const datasin = second - first;
    const newRoom = 3500 * datasin;
    const newTax = 500 * datasin;
    const newTotal = newRoom + newTax;
    setlast(second - first);
    try {
      searchdfghn.current.classList.add("jhuyiuytg67y");
    setroom1("Type 1");
    stay("Type 1");
setroom(newRoom)
settax(newTax)
      // Update total once at the end, without conditions
      settotal(newTotal);
  } catch (error) {
      console.error("Error occurred: ", error);
  }


  };

  const secondroom = () => {
    const datasin = second - first;
    const newRoom = 3500 * datasin;
    const newTax = 500 * datasin;
    const newTotal = newRoom + newTax;
    setlast(second - first);
    try {
      searchdfghn.current.classList.add("jhuyiuytg67y");
    setroom1("Type 2");
    stay("Type 2");
setroom(newRoom)
settax(newTax)
      // Update total once at the end, without conditions
      settotal(newTotal);
  } catch (error) {
      console.error("Error occurred: ", error);
  }

  };
  const iugyfgu =()=>{
    dateone(datefirst.toString().slice(0, 15))
    setfirst(Number(pizza.dateone.slice(8, 10)));

  }
  const jghftuycv = () => {
    navigate("/booking", { state: { room: room, tax: tax, total: total , last :last , base : base } });
   
    if(pizza.roomR !== 10){
      datetwo(date1.toString().slice(0, 15))
    }
    // console.log(room , tax , total , "iuyfygb");
  };

  useEffect(() => {
    child(pizza.child);
    addBase(pizza.addBase);
    adult(pizza.adult);
    datetwo(pizza.datetwo);
      dateone(pizza.dateone);
    stay(pizza.stay);
    roomR(pizza.roomR)
    setfirst(Number(pizza.dateone.slice(8, 10)));
    setsecond(Number(pizza.datetwo.slice(8, 10)));

  }, []);
  return (
    <>
      <div className="book1">
        <div className="book11">
          <Navbar1 />

          <div className="book2">
            <div className="book21">
              <div className="book22">Select Your Room</div>
            </div>

            <div className="bpro3">
              <div className="bpro4">
                <div className="bpro5">
                  {/* <div className='bpro51'><img src='Img/bpr1.svg'></img></div> */}
                  <div className="">
                    <div className="gfctyhgc">
                      <div>
                        <div className="bpro52a">Type 1</div>
                        <div className="bpro52b">
                          3 Chalets | 2 bedrooms per chalets{" "}
                        </div>
                      </div>
                      <div className="uytghfyvj">
                        <div>
                          <div className="bpro52g">Starting From 3500</div>
                          <div className="bpro52b">
                            Per night | Excluding Taxes & Fees
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className="bprohr1"></hr>

                    <div className="bpro5i">
                      <div></div>
                      <button onClick={firstroom}>Select</button>
                    </div>
                  </div>
                </div>
                <div className="bpro5">
                  {/* <div className='bpro51'><img src='Img/bpr1.svg'></img></div> */}
                  <div className="">
                    <div className="gfctyhgc">
                      <div>
                        <div className="bpro52a">Type 2</div>
                        <div className="bpro52b">
                          1 Chalets | 1 Living Room | 2 Bedrooms{" "}
                        </div>
                      </div>
                      <div className="uytghfyvj">
                        <div>
                          <div className="bpro52g">Starting From 3500</div>
                          <div className="bpro52b">
                            Per night | Excluding Taxes & Fees
                          </div>
                        </div>
                      </div>
                    </div>

                    <hr className="bprohr1"></hr>

                    <div className="bpro5i">
                      <div></div>
                      <button onClick={secondroom}>Select</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bpro4a">
                <div className="book8">
                  <div className="book81">Your Stay</div>
                  <div className="book82">
                    <div className="book83">Date:</div>
                    {pizza.roomR === 10 ? (
                      <div className="book84">
                        {" "}
                        {pizza.dateone} - {pizza.datetwo}
                      </div>
                    ) : (
                      <div className="book84">
                        <DatePicker
                          id="jhfvyhg"
                          placeholderText="CHECK IN"
                          className="jufgtubook84"
                          selected={datefirst}
                          onChange={(datefirst) => setDate(datefirst)}
                        />

                        <span>to</span>
                      <div onClick={iugyfgu}>
                      <DatePicker
                          id="jhfvyhg"
                          className="jufgtubook84"
                          placeholderText="CHECK OUT"
                          selected={date1}
                          onChange={(date) => setDate1(date)}
                        />
                      </div>
                        <div className="iuhgfyuyt6"> Change</div>
                      </div>
                    )}
                  </div>
                  <div className="book82">
                    <div className="book83">Guests: </div>
                   {
                    pizza.roomR === 10 ?  <div className="book84">
               
                    {pizza.adult} Adults{" "}
                 
                    {pizza.child} Child
                  
                  </div> :
                   <div className="book84">
                   <span className="uytfdr5rtfdyt" onClick={decrement}>
                     -
                   </span>
                   {pizza.adult} Adults{" "}
                   <span className="uytfdr5rtfdyt" onClick={increment}>
                     +
                   </span>{" "}
                   -{" "}
                   <span onClick={decrement1} className="uytfdr5rtfdyt">
                     -
                   </span>
                   {pizza.child} Child{" "}
                   <span className="uytfdr5rtfdyt" onClick={increment1}>
                     +
                   </span>
                 </div>
                   }
                  </div>
                  <div className="book82">
                    <div className="book83">Stay:</div>
                    <div className="book84">Sunset Villa</div>
                  </div>
                  {/* <div className='book82'><div className='book83'>Selected Room:</div><div className='book84'>King Room with Forest View</div></div> */}
                  <div className="book82">
                    <div className="book83">Duration of the Stay: </div>
                    <div className="book84"> {last} Night</div>
                  </div>

                  <div className="book85">
                    <div className="book86">
                      <div className="book86a">
                        <img src="Img/book2.svg"></img>
                      </div>
                      <div className="book86b">Add a Room</div>
                    </div>
                    <hr className="bookhr1"></hr>
                    <div className="book87">
                      <div className="book87a">Room's Charge</div>
                      <div className="book87b">{room}</div>
                    </div>
                    <div className="book87 book871">
                      <div className="book87a">Taxes & GST</div>
                      <div className="book87b">{tax}</div>
                    </div>
                    <hr className="bookhr1"></hr>
                    <div className="book88">
                      <div className="book88a">TOTAL</div>
                      <div className="book88b">{total}</div>
                    </div>
                  </div>
                </div>

                <div className="book9" ref={searchdfghn}>
                  <button onClick={jghftuycv} className="book91">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='iuytrgioh'>
  <Footer2 />
  </div>
      </div>
    </>
  );
};

export default SubsetVillabooking;
