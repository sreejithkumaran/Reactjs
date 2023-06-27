import React from "react";
import "./App.css";
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './Component/Assignment/Navbar'
/*
import Greet from "./Component/Greet";
import Welcome from "./Component/Welcome";
import Movie from "./Component/Movies";
import Message from "./Component/Message";
import Counter from "./Component/Counter";
import FunctionalComponentClick from "./Component/FunctionalComponentClick";
import ClassClick from "./Component/ClassClick";
import EventBinder1 from "./Component/EventBinder-1";
import EventBinder2 from "./Component/EventBinder-2";
import EventBinder3 from "./Component/EventBinder-3";
import ParentComponent from "./Component/ParentComponent";
import UserGreeting from "./Component/UserGreeting";
import NameList from "./Component/List";
import PersonList from "./Component/PersonList";
import StudentList from "./Component/StudentList";
import Employee from "./Component/Employee";
import Form from "./Component/Form";
import LifeCycleA from "./Component/LifeCycleA";
import FragmentDemo from "./Component/FragmentDemo";
import EmployeeFunctionProps from "./Component/Props/EmployeeFunctionProps";
import UseStateExample01 from "./Component/Hooks/UseState/UseStateExample01";
import UseStateExample02 from "./Component/Hooks/UseState/UseStateExample02";
import { PrevState } from "./Component/Hooks/UseRef/PrevState";
import UseStateExample03 from "./Component/Hooks/UseState/UseStateExample03";
import UseStateExample04 from "./Component/Hooks/UseState/UseStateExample04";
import CRUD from "./Component/Hooks/UseState/CRUD";
import CRUDSample01 from "./Component/Hooks/UseState/CRUDSample01";
import Contacts from "./Component/Hooks/UseState/Contacts";
import UserCRUD from "./Component/Hooks/UseState/UserCRUD";
import Login from "./Component/Hooks/UseState/Login";
import UserRef from "./Component/Hooks/UseRef/UserRef";
import UseEffect1 from "./Component/Hooks/UseEffect/UseEffect1";
import UseEffect2 from "./Component/Hooks/UseEffect/UseEffect2";
import UseEffect3 from "./Component/Hooks/UseEffect/UseEffect3";
import UseRef1 from "./Component/Hooks/UseRef/UseRef1";
import UseRef2 from "./Component/Hooks/UseRef/UseRef2";
import UseRef3 from "./Component/Hooks/UseRef/UseRef3";
import UseRef4 from "./Component/Hooks/UseRef/UseRef4";
import AppComponent from "./Component/Hooks/UseContext/Example1/AppComponent";
import EmployeeApp  from "./Component/Hooks/UseContext/Example3/EmployeeApp";
import UserReducer from "./Component/Hooks/UserReducer/UserReducer";
import NoMemo from "./Component/Hooks/UseMemo/NoMemo";
import UseMemo from "./Component/Hooks/UseMemo/UseMemo";
import UseMemoOF from "./Component/Hooks/UseMemo/UseMemoOF";
import UseCallBack01 from "./Component/Hooks/UseCallBack/UseCallBack01";
import UseCallBack from "./Component/Hooks/UseCallBack/UseCallBack";
import ParentIncrement from "./Component/Hooks/UseCallBack/Example1/ParentIncrement";
import Parent from "./Component/Hooks/UseCallBack/Example2/Parent";
import PrevState from "./Component/Hooks/UseState/PrevState";
import IntervalClassCounter from "./Component/Hooks/UseEffect/Class/IntervalClassCounter";
import IntervalHookCounter from "./Component/Hooks/UseEffect/IntervalHookCounter";
import HookCounterOne from "./Component/Hooks/UseEffect/HookCounterOne";
import HookMouse from "./Component/Hooks/UseEffect/HookMouse";
import DataFetching from "./Component/HTTP/DataFetching";
import DataFetchingById from "./Component/HTTP/DataFetchingById";
import CounterOne from "./Component/Hooks/UserReducer/CounterOne";
import ContactDetails from "./Component/Assignment/ContactDetails";
import AddUserContact from "./Component/Assignment/AddUserContact";
import ContactDetails from "./Component/Assignment/ContactDetails";
*/

import ContactDetails from "./Component/Hooks/UseState/Contacts"
import ReadOnlyRow from "./Component/Hooks/UseState/ReadOnlyRow"




function App() {
  return (
    <div className="App">
      {/* <Greet></Greet>
      <Welcome name="Clark" heroName="SuperMan"></Welcome>
      <Movie name="Bruce" heroName="Batman">
        <p>This is child props</p>
      </Movie>
      <Movie name="Clark" heroName="SuperMan">
        <button>Action</button>
      </Movie>
      <Movie name="Diana" heroName="Wonder Women"></Movie>
      <Message></Message>
      <Counter></Counter> Set State Example 
      <FunctionalComponentClick></FunctionalComponentClick>
      <ClassClick />
      <EventBinder1 /> {/* Event Binder Approach 1 & 2 *
      <EventBinder2 /> {/* Event Binder Approach 3 *
      <EventBinder3 /> {/* Event Binder Approach 4 *
      <ParentComponent /> {/* Data Flow 
      <UserGreeting /> Conditional Rendering 
      <NameList /> {/* List Rendering 
      <PersonList /> {/* List Rendering  
      <StudentList /> {/* List with keys 
      <Employee /> {/* List with keys 
      <Form />
      <LifeCycleA />
      <FragmentDemo />
      <EmployeeFunctionProps
        name={"Sreejith Kumaran"}
        email={"sreejith.kumaran@e.com"}
        company={"Ellucian"}
        empid={10001}
        designation={"Sr. Software Test Engineer"}
        address={{
          add1: "RMZ Ecowold",
          add2: "Outer Ring Road",
          city: "Bangalore",
          state: "Karnataka",
          pinCode: "560029",
        }}
      />
      <EmployeeFunctionProps
        name={"Joet Thomas"}
        email={"joe.thomas@e.com"}
        company={"Amazon"}
        empid={89088}
        designation={"Sr. Software Test Engineer"}
        address={{
          add1: "RMZ Ecowold",
          add2: "Outer Ring Road",
          city: "Bangalore",
          state: "Karnataka",
          pinCode: "560029",
        }}
      />
      <Movie name="Bruce" heroName="Batman" />
      <Movie /> {/* Default Props 
      <UseStateExample01 />
      <PrevState /> {/* Previous State example 
      <UseStateExample02 />
      <UseStateExample03 />
      <UseStateExample04 />
      <CRUD />
      <Contacts />
      <UserCRUD />
      <Login />
      <UserCRUD />
      <Contacts /> 
      <UserRef />
      <UseEffect1 />
      <UseEffect2 />
      <UseEffect3 />
      <UseRef1 />
      <UseRef2 />
      <UseRef3 />
      <UseRef4 />
      <AppComponent /> 
      <EmployeeApp />
      <UserReducer />
      <NoMemo />
      <UseMemo />
      <UseMemoOF />
      <UseCallBack01 />
      <UseMemo />
      <UseCallBack />
      <Parent />
        <ParentIncrement />
        <PrevState />
       <IntervalClassCounter />
      <IntervalHookCounter /> 
      <HookCounterOne /> 
      <HookMouse />
      <DataFetching />
      <DataFetchingById />
      <CounterOne />
     
     */}
 <ContactDetails />
     {/* <Navbar> </Navbar>
      <Routes>
        <Route path='/' element={<ContactDetails />}/>
        <Route path='addContact' element={<AddUserContact />}/>
      </Routes>
     */}

    </div>
  );
}

export default App;
