import React from 'react'
import { Link } from 'react-router-dom';
import './team.css';
import'../TeamMember/TeamMember'
import img_kristine from '../../assets/images/Kristine.png'
import img_mark from '../../assets/images/Mark.png'
import img_kimberly from '../../assets/images/Kimberly.png'
import img_justin from '../../assets/images/Justin.png'
import TeamMember from '../TeamMember/TeamMember';

const Team = () => {

   const members= [
    { imgName:img_kristine,  alt:'Kristine Palmer, Chef Operation Officer' , title: 'Kristine Palmer', position:'Chef Operation Officer'},
    
    {imgName:img_mark,  alt:'Kristine Palmer, Chef Operation Officer' , title: 'Mark Abrui', position:'Senior Consultant'},

    {imgName:img_kimberly,  alt:'Kristine Palmer, Chef Operation Officer' , title: 'Kimberly Hansen', position:'Senior Consultant'},

    {imgName:img_justin,  alt:'Kristine Palmer, Chef Operation Officer' , title: 'Justin Willoman', position:'Senior Tech Consultant'},

    ];




  return (
    <section className="team">
        <div className="container one">
        <div className="section-title">
            <p>Meet Our Team</p>
            <h2>Experience Team Members</h2>
            <Link to="/team" target="_blank" className="btn-yellow">Browse Team <i className="fa-solid fa-arrow-up-right"></i></Link>
        </div>
    </div>
    <div className="container two">

        {members.map((member, index) => (
            <TeamMember key={index} imgName={member.imgName} alt={member.alt} title={member.title} position={member.position} />
        )) }

      
    </div>
        <div className="dots">
            <i className="fa-regular fa-wifi-weak"></i>
            <i className="fa-regular fa-wifi-weak" ></i>
            <i className="fa-regular fa-wifi-weak"></i>
            <i className="fa-regular fa-wifi-weak"></i>
            <i className="fa-regular fa-wifi-weak"></i>
        </div>

    </section>
  )
}

export default Team