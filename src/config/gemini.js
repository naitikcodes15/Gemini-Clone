import React, { useState } from 'react'; // Import React
import './Sidebar.css';
import { assets } from '../../assets/assets';

// Step 1: Accept the `recentPrompts` prop from App.js
const Sidebar = ({ recentPrompts }) => {
    const [extended, setExtended] = useState(false);

    // A function to handle starting a new chat
    const newChat = () => {
        // In a real app, this would also clear the response in the Main component.
        // For now, we can just reload the page for simplicity.
        window.location.reload();
    }

    return (
        <div className='sidebar'>
            <div className="top">
                <img onClick={() => setExtended(prev => !prev)} className='menu' src={assets.menu_icon} alt='' />
                <div onClick={newChat} className="new-chat">
                    <img src={assets.plus_icon} alt='' />
                    {extended ? <p>New Chat</p> : null}
                </div>
                {extended ? (
                    <div className="recent">
                        <p className="recent-title">Recent</p>
                        {/* Step 2: Map over the recentPrompts array to display each one */}
                        {recentPrompts.map((item, index) => {
                            return (
                                <div key={index} className="recent-entry">
                                    <img src={assets.message_icon} alt='' />
                                    {/* Show a shortened version of the prompt */}
                                    <p>{item.slice(0, 18)} ...</p>
                                </div>
                            )
                        })}
                    </div>
                ) : null}
            </div>
            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="" />
                    {extended ? <p>Help</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="" />
                    {extended ? <p>History</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="" />
                    {extended ? <p>Settings</p> : null}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
