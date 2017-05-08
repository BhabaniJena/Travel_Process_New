import React from 'react';

class App extends React.Component {
   render() {
      return (
         <div>
         	<Header />
         	<Content />
         
         </div>
      );
   }
}

class Header extends React.Component {
   render() {
      return (
	     <div className="header">
	     <div className="logo">
	         <img src="img/dlbi-mum-logo.png" alt="" />	
	         	<span>Travel process System</span>
	         </div>

	     	<div className="user-details">
	     		<span src="user-icon.png" alt=""></span>
	     		<p>User Name | Logout</p>
	     	</div>                             
	     </div>
      ); 
   }
}

class Content extends React.Component {
   render() {
      return (
         <div className="content">
         	<h1>Manager Dashboard</h1>
         	<div className="project-details-tab">
	         	<ul>
	         		<li className="active-tab">Checklist Allocation</li>
	         		<li>Employee Status</li>
	         	</ul>
         	</div>
         	<Manager />
         </div>
      );
   }
}


class Manager extends React.Component {
   render() {
      return (
      	<div id="manager-screen-container">
      		<ManagerScreen1 />
      		<ManagerScreen2 />
      	</div>
      );
   }
}


class ManagerScreen1 extends React.Component {
   render() {
      return (
      	<div id="manager-screen1">
      	    <div className="project-details">
         		<div className="project-details-view">
         			<ul className="project-details-view-left">
         				<li><lable>Employee Name: </lable><input type="text"  /></li>
         				<li><lable>Employee ID: </lable><input type="text"   /></li>
         				<li><lable>Employee Email ID: </lable><input type="text"  /></li>
         			</ul>

         			<ul className="project-details-view-right" >
         				<li><lable>Project Name: </lable><input type="text"  /></li>
         				<li><lable>Country: </lable><input type="text"   /></li>
         			</ul>

         			<div className="subDiv"> <button value="Submit"  className="sub">Submit</button></div>
         		</div>
         	</div>
      	</div>
      );
   }
}


class ManagerScreen2 extends React.Component {
   render() {
      return (
      	<div id="manager-screen1">
      	    <div className="project-details">
         		<div className="project-details-view">
         			<p>Manager Second screen</p>
         			
         		</div>
         	</div>
      	</div>
      );
   }
}

export default App;