import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHome, faUserFriends, faBriefcase, faCommentDots, faBell, faTh, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faSearch, faHome, faUserFriends, faBriefcase, faCommentDots, faBell, faTh, faEllipsisH);

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-2 border-b">
          <div className="flex items-center space-x-4">
            {/* LinkedIn Logo */}
            <div className="header-logo-linkedin-logo">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" color="#0a66c1" width="36" height="36">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
              </svg>
            </div>

            {/* Search Bar */}
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon="search" className="text-gray-600" />
              <input type="text" className="border-none focus:outline-none" placeholder="Search" />
            </div>
          </div>

          {/* Header Navigation Icons */}
          <div className="flex items-center space-x-6">
            <NavItem icon="home" label="Home" />
            <NavItem icon="user-friends" label="My Network" />
            <NavItem icon="briefcase" label="Jobs" />
            <NavItem icon="comment-dots" label="Messaging" />
            <div className="relative flex flex-col items-center">
              <FontAwesomeIcon icon="bell" className="text-gray-600" />
              <span className="text-xs text-gray-600">Notifications</span>
              <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full px-1">25</span>
            </div>
            {/* Profile Icon */}
            <div className="flex flex-col items-center">
            <img alt="Profile Picture" className="h-10 w-10 rounded-full"  src="https://media.licdn.com/dms/image/v2/D4D03AQHxqg0yT1EXiA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1713555361464?e=1732752000&amp;v=beta&amp;t=4JsZnh_qf1aroB8ZKlOT1467BXqED3r8gFUiu_wxkaI" loading="lazy"  id="ember329"  />
              <span className="text-xs text-gray-600">Me</span>
            </div>
            <NavItem icon="th" label="For Business" />
            <NavItem icon="ellipsis-h" label="Try Sales Navigator" />
          </div>
        </div>
      </header>

      {/* Main Body Content */}
      <div className="container mx-auto flex mt-6 space-x-6">
        {/* Sidebar */}
        <aside className="w-1/4 bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Your Profile</h2>
          <div className="flex items-center space-x-3">
          <img alt="Profile Picture" className="h-16 w-16 rounded-full"  src="https://media.licdn.com/dms/image/v2/D4D03AQHxqg0yT1EXiA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1713555361464?e=1732752000&amp;v=beta&amp;t=4JsZnh_qf1aroB8ZKlOT1467BXqED3r8gFUiu_wxkaI" loading="lazy" height="64" id="ember329"  />
            <div>
              <h4 className="text-md font-semibold">Ojo Damilare</h4>
              <p className="text-sm text-gray-500">Web 3 Researcher, Frontend Dev</p>
            </div>
          </div>
          <div className="mt-4">
            <button className="w-full py-2 bg-blue-600 text-white rounded-md">View Profile</button>
          </div>
        </aside>

        {/* Feed Section */}
        <main className="w-2/4">
          {/* Post 1 */}
          <FeedPost
            username="Temitope Olubire"
            time="4 days ago"
            message="I'm leading a protest, and you have to join me so we can win!"
            imgSrc="https://media.licdn.com/dms/image/v2/D4E22AQGkf003DttjGg/feedshare-shrink_800/feedshare-shrink_800/0/1726472759722?e=1729728000&amp;v=beta&amp;t=Os3hzcTMJAqLe7Qz7-mqzrq9kOyegBftYWIndD_ATpI" loading="lazy" height="750" alt="Image preview" id="ember219" class="ivm-view-attr__img--centered ivm-view-attr__img--aspect-fit update-components-image__image update-components-image__image--constrained evi-image lazy-image ember-view" />
          {/* Post 2 */}
          <FeedPost
            username="AWS Training & Certification"
            time="1 week ago"
            message="AWS is launching free training to help you build in-demand skills."
            imgSrc="https://media.licdn.com/dms/image/v2/D4E22AQGkf003DttjGg/feedshare-shrink_800/feedshare-shrink_800/0/1726472759722?e=1729728000&amp;v=beta&amp;t=Os3hzcTMJAqLe7Qz7-mqzrq9kOyegBftYWIndD_ATpI" loading="lazy" height="750" alt="Image preview" id="ember219" class="ivm-view-attr__img--centered ivm-view-attr__img--aspect-fit update-components-image__image update-components-image__image--constrained evi-image lazy-image ember-view" />
        
        </main>

        {/* Right Sidebar (Optional Jobs/Ads) */}
        <aside className="w-1/4 bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Jobs for You</h2>
          <div>
            <p className="text-sm">Web Developer at XYZ Corp.</p>
            <button className="text-blue-600">Apply Now</button>
          </div>
          <div className="mt-4">
            <p className="text-sm">UI/UX Designer at ABC Inc.</p>
            <button className="text-blue-600">Apply Now</button>
          </div>
        </aside>
      </div>
    </div>
  );
}

const NavItem = ({ icon, label }) => (
  <div className="flex flex-col items-center">
    <FontAwesomeIcon icon={icon} className="text-gray-600" />
    <span className="text-xs text-gray-600">{label}</span>
  </div>
);

const FeedPost = ({ username, time, message, imgSrc }) => (
  <div className="post border p-4 mb-4 bg-white rounded-lg shadow-md">
    {/* Post Header */}
    <div className="post-header flex items-center mb-2">
    <img alt="Profile Picture" className="h-10 w-10 rounded-full"  src="https://media.licdn.com/dms/image/v2/D4D03AQHxqg0yT1EXiA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1713555361464?e=1732752000&amp;v=beta&amp;t=4JsZnh_qf1aroB8ZKlOT1467BXqED3r8gFUiu_wxkaI" loading="lazy"  id="ember329"  />
      <div className="ml-3">
        <h4 className="text-md font-semibold">{username}</h4>
        <p className="text-xs text-gray-500">{time}</p>
      </div>
    </div>
    {/* Post Body */}
    <div className="post-body">
      <p className="text-sm">{message}</p>
      <img src={imgSrc} className="mt-2 rounded-lg w-full" alt="Post content" />
    </div>
    {/* Post Actions */}
    <div className="post-actions flex justify-between mt-2">
      <button className="text-gray-600"><FontAwesomeIcon icon="thumbs-up" /> Like</button>
      <button className="text-gray-600"><FontAwesomeIcon icon="comment" /> Comment</button>
      <button className="text-gray-600"><FontAwesomeIcon icon="share" /> Repost</button>
    </div>
  </div>
);

export default App;