import TaskCounter from './TaskCounter';

import menuIcon from '../assets/menu_icon.png'
import searchIcon from '../assets/search_icon.png'


function TaskHeader({ tasks }) {
  return (
    <header className="main-header">
        <div className="header-left">
            <button className="menu-btn">
                <img src={menuIcon} alt="Menu" />
            </button>
            <div className="search">
                <img src={searchIcon} alt="Search" />
                <input type="text" placeholder="Quick find" />
            </div>
        </div>
        <div className="header-right">
            <span className="check">✓</span>
            <TaskCounter tasks={tasks} />
        </div>
    </header>
  );
}

export default TaskHeader;