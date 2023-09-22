import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ links }) => {
  const groups = [];
  for (let i = 0; i < links.length; i += 5) {
    groups.push(links.slice(i, i + 5));
  }
  

  return (
   <div>
    <div className='flex flex-col px-40 py-[2rem] bg-black'>
        <div className='text-white pt-20 opacity-75'>
        Questions? Call 000-800-919-1694
        </div>
    <div className='flex space-x-[15rem]'>
      {groups.map((group, i) => (
        <div className="text-white py-10 opacity-75" key={i} style={{ display: 'inline-block', marginRight: '20px' }}>
          {group.map((link, j) => (
            <div key={j}>
              <Link className='underline'>{link}</Link>
            </div>
          ))}
        </div>
      ))}
      </div>

      <div>
            <select  className='bg-slate-500 px-5 py-1 rounded-sm'name="firstList" id="selection">
                <option value="english">English</option>
                <option value="hindi">हिंदी</option>
            </select>
      </div>
      <div>
      <p className='text-white opacity-75 text-sm py-3'>Netflix India</p>
      </div>
      

    </div>
  </div>
  );
};

export default Footer;