import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import people from './data';

const Review = () => {
  const[index,setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  const checkNumber = (x) => {
    if(x<0){
      return people.length-1;
    }
    if(x==people.length){
      return 0;
    }
    return x;
  }
  const prevbtn = () => {
  setIndex((index) => {
  let newindex = index+1;
  return checkNumber(newindex);
  });
  };
  const nextbtn = () => {
    setIndex((index) => {
      let newindex = index-1;
      return checkNumber(newindex);
      });
  };
  const random = () => {
    let randomIndex = Math.floor(Math.random() * people.length);
    if(randomIndex==index){
      randomIndex = index+1;
    }
    setIndex(checkNumber(randomIndex));
  };
  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className="prev-btn" onClick={prevbtn}><FaChevronLeft /></button>
        <button className="next-btn" onClick={nextbtn}><FaChevronRight /></button>
      </div>
      <button className="random-btn" onClick={random}>suprise me</button>
    </article>
  )
}

export default Review
